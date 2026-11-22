// ==============================================================================
// SISI ESTATE COMPANY LIMITED - SUPABASE CONFIGURATION
// Connects the website to Sisi Estate's Supabase Project
// ==============================================================================

const SISI_SUPABASE_CONFIG = {
    // Sisi Estate Supabase Project Configuration
    url: "https://avvohsarmcmrbrcsjgvr.supabase.co",
    anonKey: "sb_publishable_humc4AQo9vEZxVbG5ioTVg_0rErnqc4"
};

// Initialize Supabase Client
let sisiSupabase = null;

try {
    const isConfigured = 
        typeof supabase !== "undefined" &&
        SISI_SUPABASE_CONFIG.url &&
        !SISI_SUPABASE_CONFIG.url.includes("YOUR_PROJECT_ID") &&
        SISI_SUPABASE_CONFIG.anonKey &&
        !SISI_SUPABASE_CONFIG.anonKey.includes("YOUR_SUPABASE_ANON_KEY");

    if (isConfigured) {
        sisiSupabase = supabase.createClient(SISI_SUPABASE_CONFIG.url, SISI_SUPABASE_CONFIG.anonKey);
        console.log("✓ Connected to Sisi Estate Supabase Database.");
    } else {
        console.info("ℹ Supabase credentials pending in supabase-config.js. Running with local fallback database.");
    }
} catch (e) {
    console.warn("Could not initialize Supabase client:", e);
}

window.sisiSupabase = sisiSupabase;
window.SISI_SUPABASE_CONFIG = SISI_SUPABASE_CONFIG;

