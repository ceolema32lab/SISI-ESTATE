-- ==============================================================================
-- SISI ESTATE COMPANY LIMITED - SUPABASE DATABASE SCHEMA
-- Target Database: Supabase (PostgreSQL 15+)
-- Run this script in your Supabase SQL Editor under the Sisi Estate Account
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create 'listings' Table
CREATE TABLE IF NOT EXISTS public.listings (
    id TEXT PRIMARY KEY,
    title_en TEXT NOT NULL,
    title_sw TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'land' CHECK (type IN ('land', 'residential', 'commercial')),
    location TEXT NOT NULL,
    location_detail TEXT NOT NULL,
    price_tzs NUMERIC NOT NULL,
    price_usd NUMERIC NOT NULL,
    is_per_sqm BOOLEAN NOT NULL DEFAULT true,
    size TEXT NOT NULL,
    size_val NUMERIC NOT NULL DEFAULT 1000,
    status TEXT NOT NULL DEFAULT 'Available',
    badge_en TEXT DEFAULT 'Featured',
    badge_sw TEXT DEFAULT 'Kipekee',
    title_status_en TEXT NOT NULL DEFAULT 'Title Deed Ready',
    title_status_sw TEXT NOT NULL DEFAULT 'Hati ya Miliki Tayari',
    desc_en TEXT NOT NULL,
    desc_sw TEXT NOT NULL,
    coordinates JSONB NOT NULL DEFAULT '[-3.4150, 36.6990]',
    map_url TEXT,
    amenities_en JSONB NOT NULL DEFAULT '[]',
    amenities_sw JSONB NOT NULL DEFAULT '[]',
    images JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index frequently queried columns
CREATE INDEX IF NOT EXISTS idx_listings_type ON public.listings (type);
CREATE INDEX IF NOT EXISTS idx_listings_location ON public.listings (location);
CREATE INDEX IF NOT EXISTS idx_listings_status ON public.listings (status);
CREATE INDEX IF NOT EXISTS idx_listings_created_at ON public.listings (created_at DESC);

-- 3. Create 'enquiries' Table (Lead capture)
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    department TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Closed', 'Spam')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries (created_at DESC);

-- 4. Enable Row Level Security (RLS) on both tables
ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- 5. Set RLS Policies

-- Listings policies:
-- Anyone (anon and authenticated) can view available listings
DROP POLICY IF EXISTS "Public can view listings" ON public.listings;
CREATE POLICY "Public can view listings" ON public.listings
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- Allow managing listings from web portal
DROP POLICY IF EXISTS "Allow manage listings" ON public.listings;
CREATE POLICY "Allow manage listings" ON public.listings
    FOR ALL
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);

-- Enquiries policies:
-- Anyone can submit an enquiry from the website contact / booking forms
DROP POLICY IF EXISTS "Anyone can submit enquiry" ON public.enquiries;
CREATE POLICY "Anyone can submit enquiry" ON public.enquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow reading enquiries in admin desk
DROP POLICY IF EXISTS "Allow read enquiries" ON public.enquiries;
CREATE POLICY "Allow read enquiries" ON public.enquiries
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- 6. Insert Seed Data (Default Arusha Listings)
INSERT INTO public.listings (
    id, title_en, title_sw, type, location, location_detail, 
    price_tzs, price_usd, is_per_sqm, size, size_val, status, 
    badge_en, badge_sw, title_status_en, title_status_sw, 
    desc_en, desc_sw, coordinates, amenities_en, amenities_sw, images
) VALUES 
(
    'mkonoo-land',
    'Mkonoo Surveyed Land Plot',
    'Kiwanja Kilizopimwa Mkonoo',
    'land',
    'Mkonoo',
    'Mkonoo, 8km from Arusha City Centre',
    20000,
    8,
    true,
    '1,000 sqm',
    1000,
    'Available',
    'Featured',
    'Kipekee',
    'Title Deed Ready',
    'Hati ya Miliki Tayari',
    'Premium surveyed land plots ideal for residential development in the rapid-growing Mkonoo area. Features easy road access, electricity connections, and water availability. The land is flat, ideal for building a family home or investment apartments.',
    'Viwanja vizuri vilivyopimwa vyema kwa ajili ya makazi katika eneo linalokua kwa kasi la Mkonoo. Vina barabara nzuri, umeme na maji yapo tayari. Ardhi ni tambarare, inafaa sana kwa kujenga nyumba ya kifamilia au gorofa za kupangisha.',
    '[-3.4150, 36.6990]'::jsonb,
    '["Electricity grid close", "Clean water connection", "Tarmac access road", "Surveyed beacon pins"]'::jsonb,
    '["Umeme upo karibu", "Maji safi yapo tayari", "Barabara ya lami karibu", "Vigingi vya upimaji vipo"]'::jsonb,
    '["plot_construction.png", "plot_aerial.jpg"]'::jsonb
),
(
    'usa-river-estate',
    'USA River Residential Plots',
    'Viwanja vya Makazi USA River',
    'land',
    'USA River',
    'USA River, near Mt. Meru Game Lodge',
    35000,
    13.5,
    true,
    '1,500 sqm',
    1500,
    'Available',
    'Popular',
    'Maarufu',
    'Surveyed / Clean Title',
    'Kimepimwa / Hati Safi',
    'Excellent residential plots situated in the serene USA River area, offering breathtaking views of Mt. Meru. Perfect volcanic soil for gardens, mature trees on site, fully surveyed with offer letters ready. Quiet international community neighborhood.',
    'Viwanja bora vya makazi vilivyopo katika eneo la utulivu la USA River, vikitoa mtazamo mzuri wa Mlima Meru. Udongo mzuri wa volkano kwa kilimo cha bustani, miti mikubwa ipo tayari, vimepimwa na barua za toleo zipo tayari.',
    '[-3.3680, 36.8450]'::jsonb,
    '["Stunning Mt. Meru View", "Quiet green neighborhood", "Piped water connection", "Three-phase power grid"]'::jsonb,
    '["Mtazamo mzuri wa Mlima Meru", "Eneo la kijani la utulivu", "Maji ya bomba yapo", "Umeme wa awamu tatu (3-Phase)"]'::jsonb,
    '["plot_aerial.jpg", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"]'::jsonb
),
(
    'kisongo-commercial-plot',
    'Kisongo Dodoma Road Commercial Land',
    'Ardhi ya Biashara Kisongo Barabara ya Dodoma',
    'commercial',
    'Kisongo',
    'Kisongo, bypass road junction, Arusha',
    450000000,
    173000,
    false,
    '2.5 Acres',
    10117,
    'Available',
    'Commercial',
    'Biashara',
    'Commercial Title',
    'Hati ya Biashara',
    'High-value commercial land facing the main Arusha-Dodoma Highway. Ideal for setting up a tourist lodge, warehouse logistics, school, or retail depot. Exceptional highway frontage and close proximity to Arusha Airport.',
    'Ardhi yenye thamani kubwa ya kibiashara inayotazama Barabara Kuu ya Arusha-Dodoma. Inafaa sana kwa kujenga hoteli ya kitalii, maghala ya kuhifadhia mizigo, shule, au kituo cha biashara. Eneo zuri la mbele ya barabara kuu na karibu na Uwanja wa Ndege wa Arusha.',
    '[-3.4010, 36.5950]'::jsonb,
    '["Highway main road frontage", "Arusha Airport 5 min away", "Title deed under corporate ownership", "Boundary wall fence"]'::jsonb,
    '["Mbele ya Barabara Kuu ya Lami", "Dakika 5 kutoka Uwanja wa Ndege", "Hati ya miliki ya kampuni", "Uzio wa ukuta wa mipaka"]'::jsonb,
    '["assets/kisongo.png", "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"]'::jsonb
),
(
    'njiro-block-hh',
    'Njiro Block HH Residential Plot',
    'Kiwanja cha Makazi Njiro Block HH',
    'land',
    'Njiro',
    'Njiro Block HH, elite residential area, Arusha',
    45000,
    17.5,
    true,
    '800 sqm',
    800,
    'Available',
    'New',
    'Mpya',
    'Ready Title Deed',
    'Hati ya Miliki Tayari',
    'Stunning residential plot in the highly sought-after Njiro Block HH neighborhood. Fully serviced with tarmac road access, secure perimeter, municipal water supply, and high-voltage electricity lines. Quiet upscale area perfect for modern family villa construction.',
    'Kiwanja kizuri cha makazi katika eneo la kifahari la Njiro Block HH. Kina barabara ya lami, kimezungushiwa ulinzi, kina maji ya bomba na umeme tayari. Eneo tulivu la kifahari linalofaa sana kwa ujenzi wa makazi ya kisasa.',
    '[-3.3950, 36.7150]'::jsonb,
    '["Upscale neighborhood", "Tarmac access", "Electricity grid ready", "Beacon pins set"]'::jsonb,
    '["Eneo la kifahari la makazi", "Njia nzuri ya lami", "Umeme upo tayari", "Vigingi vimepandwa tayari"]'::jsonb,
    '["assets/droneshoot.mp4", "plot_aerial.jpg"]'::jsonb
)
ON CONFLICT (id) DO NOTHING;

-- 7. Grant Table & Schema Permissions to anon and authenticated roles
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON TABLE public.listings TO anon, authenticated;
GRANT ALL ON TABLE public.enquiries TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;


