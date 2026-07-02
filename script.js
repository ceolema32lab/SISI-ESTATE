// Sisi Estate Company Limited - Core Frontend Engine

// Default Property Database (Premium listings in Arusha, Tanzania)
const DEFAULT_LISTINGS = [
    {
        id: "mkonoo-land",
        titleEn: "Mkonoo Surveyed Land Plot",
        titleSw: "Kiwanja Kilizopimwa Mkonoo",
        type: "land",
        location: "Mkonoo",
        locationDetail: "Mkonoo, 8km from Arusha City Centre",
        priceTzs: 20000, // per sqm
        priceUsd: 8, // per sqm
        isPerSqm: true,
        size: "1,000 sqm",
        sizeVal: 1000,
        status: "Available",
        badgeEn: "Featured",
        badgeSw: "Kipekee",
        titleStatusEn: "Title Deed Ready",
        titleStatusSw: "Hati ya Miliki Tayari",
        descEn: "Premium surveyed land plots ideal for residential development in the rapid-growing Mkonoo area. Features easy road access, electricity connections, and water availability. The land is flat, ideal for building a family home or investment apartments.",
        descSw: "Viwanja vizuri vilivyopimwa vyema kwa ajili ya makazi katika eneo linalokua kwa kasi la Mkonoo. Vina barabara nzuri, umeme na maji yapo tayari. Ardhi ni tambarare, inafaa sana kwa kujenga nyumba ya kifamilia au gorofa za kupangisha.",
        coordinates: [-3.4150, 36.6990], // Arusha Mkonoo area
        amenitiesEn: ["Electricity grid close", "Clean water connection", "Tarmac access road", "Surveyed beacon pins"],
        amenitiesSw: ["Umeme upo karibu", "Maji safi yapo tayari", "Barabara ya lami karibu", "Vigingi vya upimaji vipo"],
        images: [
            "plot_construction.png",
            "plot_aerial.jpg"
        ]
    },
    {
        id: "usa-river-estate",
        titleEn: "USA River Residential Plots",
        titleSw: "Viwanja vya Makazi USA River",
        type: "land",
        location: "USA River",
        locationDetail: "USA River, near Mt. Meru Game Lodge",
        priceTzs: 35000, // per sqm
        priceUsd: 13.5, // per sqm
        isPerSqm: true,
        size: "1,500 sqm",
        sizeVal: 1500,
        status: "Available",
        badgeEn: "Popular",
        badgeSw: "Maarufu",
        titleStatusEn: "Surveyed / Clean Title",
        titleStatusSw: "Kimepimwa / Hati Safi",
        descEn: "Excellent residential plots situated in the serene USA River area, offering breathtaking views of Mt. Meru. Perfect volcanic soil for gardens, mature trees on site, fully surveyed with offer letters ready. Quiet international community neighborhood.",
        descSw: "Viwanja bora vya makazi vilivyopo katika eneo la utulivu la USA River, vikitoa mtazamo mzuri wa Mlima Meru. Udongo mzuri wa volkano kwa kilimo cha bustani, miti mikubwa ipo tayari, vimepimwa na barua za toleo zipo tayari.",
        coordinates: [-3.3680, 36.8450], // USA River area
        amenitiesEn: ["Stunning Mt. Meru View", "Quiet green neighborhood", "Piped water connection", "Three-phase power grid"],
        amenitiesSw: ["Mtazamo mzuri wa Mlima Meru", "Eneo la kijani la utulivu", "Maji ya bomba yapo", "Umeme wa awamu tatu (3-Phase)"],
        images: [
            "plot_aerial.jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "kisongo-commercial-plot",
        titleEn: "Kisongo Dodoma Road Commercial Land",
        titleSw: "Ardhi ya Biashara Kisongo Barabara ya Dodoma",
        type: "commercial",
        location: "Kisongo",
        locationDetail: "Kisongo, bypass road junction, Arusha",
        priceTzs: 450000000,
        priceUsd: 173000,
        isPerSqm: false,
        size: "2.5 Acres",
        sizeVal: 10117, // sqm approx
        status: "Available",
        badgeEn: "Commercial",
        badgeSw: "Biashara",
        titleStatusEn: "Commercial Title",
        titleStatusSw: "Hati ya Biashara",
        descEn: "High-value commercial land facing the main Arusha-Dodoma Highway. Ideal for setting up a tourist lodge, warehouse logistics, school, or retail depot. Exceptional highway frontage and close proximity to Arusha Airport.",
        descSw: "Ardhi yenye thamani kubwa ya kibiashara inayotazama Barabara Kuu ya Arusha-Dodoma. Inafaa sana kwa kujenga hoteli ya kitalii, maghala ya kuhifadhia mizigo, shule, au kituo cha biashara. Eneo zuri la mbele ya barabara kuu na karibu na Uwanja wa Ndege wa Arusha.",
        coordinates: [-3.4010, 36.5950], // Kisongo Area
        amenitiesEn: ["Highway main road frontage", "Arusha Airport 5 min away", "Title deed under corporate ownership", "Boundary wall fence"],
        amenitiesSw: ["Mbele ya Barabara Kuu ya Lami", "Dakika 5 kutoka Uwanja wa Ndege", "Hati ya miliki ya kampuni", "Uzio wa ukuta wa mipaka"],
        images: [
            "assets/kisongo.png",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
        ]
    }
];

// Master Translations Dictionary for Dynamic content & Common Terms
const UI_DICTIONARY = {
    "price-per-sqm-en": "Tsh/m²",
    "price-per-sqm-sw": "Tsh/m²",
    "price-total-en": "Tsh",
    "price-total-sw": "Tsh",
    "location-lbl-en": "Location: ",
    "location-lbl-sw": "Mahali: ",
    "size-lbl-en": "Size: ",
    "size-lbl-sw": "Ukubwa: ",
    "type-lbl-en": "Type: ",
    "type-lbl-sw": "Aina: ",
    "status-lbl-en": "Status: ",
    "status-lbl-sw": "Hali: ",
    "view-details-en": "View Details",
    "view-details-sw": "Angalia Maelezo",
    "compare-btn-en": "Compare",
    "compare-btn-sw": "Linganisha",
    "remove-btn-en": "Remove",
    "remove-btn-sw": "Ondoa",
    "fav-added-en": "Added to Favorites",
    "fav-added-sw": "Imewekwa kwenye Vipendwa",
    "type-land-en": "Surveyed Land",
    "type-land-sw": "Kiwanja Kilichopimwa",
    "type-commercial-en": "Commercial Land",
    "type-commercial-sw": "Ardhi ya Biashara",
    "enquiry-subject-en": "Enquiry about: ",
    "enquiry-subject-sw": "Uchunguzi kuhusu: "
};

// Global App State
let currentLang = localStorage.getItem("sisi_lang") || "sw";
let currentCurrency = "TZS";
let compareList = JSON.parse(localStorage.getItem("sisi_compare")) || [];
let favoriteList = JSON.parse(localStorage.getItem("sisi_favorites")) || [];
let activeSlideshow = {}; // store carousel active index

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initCurrency();
    initMobileMenu();
    initWhatsAppWidget();

    // Page-specific initializers
    if (document.getElementById("listings-grid")) {
        // Parse search query parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        const typeParam = urlParams.get("type");
        const locParam = urlParams.get("location");
        const keyParam = urlParams.get("keyword");

        if (typeParam) {
            const filterTypeEl = document.getElementById("filter-type");
            if (filterTypeEl) filterTypeEl.value = typeParam;
            const searchTypeEl = document.getElementById("search-type");
            if (searchTypeEl) searchTypeEl.value = typeParam;
        }
        if (locParam) {
            const filterLocEl = document.getElementById("filter-location");
            if (filterLocEl) filterLocEl.value = locParam;
            const searchLocEl = document.getElementById("search-location");
            if (searchLocEl) searchLocEl.value = locParam;
        }
        if (keyParam) {
            const filterKeyEl = document.getElementById("filter-keyword");
            if (filterKeyEl) filterKeyEl.value = keyParam;
            const searchKeyEl = document.getElementById("search-keyword");
            if (searchKeyEl) searchKeyEl.value = keyParam;
        }

        initListingsCatalog();
    }
    if (document.getElementById("contact-form")) {
        initContactForm();
        initContactMap();

        // Auto-select department if passed in URL
        const urlParams = new URLSearchParams(window.location.search);
        const deptParam = urlParams.get("dept");
        if (deptParam) {
            const deptEl = document.getElementById("form-dept");
            if (deptEl) deptEl.value = deptParam;
        }
    }
    if (document.getElementById("admin-listings-list")) {
        initAdminPanel();
    }

    // Watch URL query parameter to load property detail modal automatically (e.g. ?property=mkonoo-land)
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get("property");
    if (propertyId) {
        setTimeout(() => {
            openPropertyDetails(propertyId);
        }, 300);
    }
});

// ================= LANGUAGES ENGINE =================

function initLanguage() {
    // If language is not set in localStorage, default to 'sw' (Kiswahili)
    if (!localStorage.getItem("sisi_lang")) {
        currentLang = "sw";
    }

    const langSelectors = document.querySelectorAll(".lang-selector");
    langSelectors.forEach(sel => {
        const container = document.createElement("div");
        container.className = "lang-switch-container";

        // TZ Flag Button (Kiswahili)
        const tzBtn = document.createElement("button");
        tzBtn.className = `lang-btn ${currentLang === 'sw' ? 'active' : ''}`;
        tzBtn.setAttribute("data-lang", "sw");
        tzBtn.setAttribute("title", "Kiswahili (Tanzania)");
        tzBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" class="flag-svg">
              <clipPath id="tz-clip"><rect width="3" height="2"/></clipPath>
              <g clip-path="url(#tz-clip)">
                <path fill="#00a3dd" d="M0 0h3v2H0z"/>
                <path fill="#1eb53a" d="M0 0h3v2L0 0z"/>
                <path stroke="#fcd116" stroke-width="0.6" d="M0 2L3 0"/>
                <path stroke="#000" stroke-width="0.4" d="M0 2L3 0"/>
              </g>
            </svg>
        `;
        tzBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setLanguage("sw");
        });

        // UK Flag Button (English)
        const ukBtn = document.createElement("button");
        ukBtn.className = `lang-btn ${currentLang === 'en' ? 'active' : ''}`;
        ukBtn.setAttribute("data-lang", "en");
        ukBtn.setAttribute("title", "English (UK)");
        ukBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" class="flag-svg">
              <path fill="#012169" d="M0 0h30v20H0z"/>
              <path stroke="#fff" stroke-width="4" d="M0 0l30 20M0 20l30-20"/>
              <path stroke="#C8102E" stroke-width="2" d="M0 0l30 20M0 20l30-20"/>
              <path stroke="#fff" stroke-width="6" d="M15 0v20M0 10h30"/>
              <path stroke="#C8102E" stroke-width="4" d="M15 0v20M0 10h30"/>
            </svg>
        `;
        ukBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setLanguage("en");
        });

        container.appendChild(tzBtn);
        container.appendChild(ukBtn);

        sel.parentNode.replaceChild(container, sel);
    });

    applyLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("sisi_lang", lang);

    // Sync all flag selectors
    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    applyLanguage(lang);

    // Re-render components that contain dynamic language data
    if (document.getElementById("listings-grid")) {
        renderListings();
    }

    // Update active modal elements if open
    const modal = document.getElementById("details-modal");
    if (modal && modal.classList.contains("active")) {
        const propId = modal.getAttribute("data-property-id");
        if (propId) fillPropertyDetails(propId);
    }
}

function applyLanguage(lang) {
    const translatable = document.querySelectorAll("[data-en][data-sw]");
    translatable.forEach(el => {
        if (lang === "sw") {
            // Check if element is an input placeholder
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = el.getAttribute("data-sw");
            } else {
                el.innerHTML = el.getAttribute("data-sw");
            }
        } else {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = el.getAttribute("data-en");
            } else {
                el.innerHTML = el.getAttribute("data-en");
            }
        }
    });

    // Update page elements holding static titles for accessibility
    document.documentElement.lang = lang;
}

// ================= CURRENCY ENGINE =================

function initCurrency() {
    const currencySelectors = document.querySelectorAll(".currency-selector");
    currencySelectors.forEach(sel => {
        sel.value = currentCurrency;
        sel.addEventListener("change", (e) => {
            setCurrency(e.target.value);
        });
    });
    applyCurrency();
}

function setCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem("sisi_currency", currency);
    document.querySelectorAll(".currency-selector").forEach(sel => sel.value = currency);
    applyCurrency();

    if (document.getElementById("listings-grid")) {
        renderListings();
    }

    // Update modal if open
    const modal = document.getElementById("details-modal");
    if (modal && modal.classList.contains("active")) {
        const propId = modal.getAttribute("data-property-id");
        if (propId) fillPropertyDetails(propId);
    }
}

function applyCurrency() {
    // Currency handles formatting dynamically
    const priceElements = document.querySelectorAll(".price-display");
    priceElements.forEach(el => {
        const tzsAmt = parseFloat(el.getAttribute("data-tzs"));
        const usdAmt = parseFloat(el.getAttribute("data-usd"));
        const isPerSqm = el.getAttribute("data-persqm") === "true";

        if (currentCurrency === "USD") {
            el.innerHTML = `$${formatMoney(usdAmt)}${isPerSqm ? '/m²' : ''}`;
        } else {
            el.innerHTML = `${formatMoney(tzsAmt)} TZS${isPerSqm ? '/m²' : ''}`;
        }
    });
}

function formatMoney(amount) {
    return amount.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

// ================= MOBILE NAVIGATION =================

function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-toggle");
    const drawer = document.getElementById("mobile-drawer");

    if (toggleBtn && drawer) {
        toggleBtn.addEventListener("click", () => {
            drawer.classList.toggle("active");
            if (drawer.classList.contains("active")) {
                toggleBtn.innerHTML = "✕";
            } else {
                toggleBtn.innerHTML = "☰";
            }
        });
    }
}

// ================= WHATSAPP FLOATING BUTTON =================

function initWhatsAppWidget() {
    const waWidget = document.getElementById("whatsapp-widget");
    if (waWidget) {
        waWidget.addEventListener("click", () => {
            const phone = "255746100023"; // Active Sisi Estate phone number
            const textEn = "Hello Sisi Estate! I am interested in viewing your property listings in Arusha.";
            const textSw = "Habari Sisi Estate! Nimevutiwa na viwanja na ardhi yenu ya Arusha na ningependa maelezo zaidi.";
            const msg = currentLang === "sw" ? textSw : textEn;
            const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, "_blank");
        });
    }
}

// ================= DATABASE HELPERS =================

function getMergedListings() {
    // Pull local admin listings from localStorage to simulate database additions
    const customListings = JSON.parse(localStorage.getItem("sisi_custom_listings")) || [];
    return [...DEFAULT_LISTINGS, ...customListings];
}

// ================= PROPERTY LISTINGS (CATALOG) =================

function initListingsCatalog() {
    // Bind search and filter inputs
    const keywordInput = document.getElementById("filter-keyword");
    const typeSelect = document.getElementById("filter-type");
    const locationSelect = document.getElementById("filter-location");
    const priceRangeInput = document.getElementById("filter-price-range");

    // Quick Search Inputs
    const searchKeyword = document.getElementById("search-keyword");
    const searchType = document.getElementById("search-type");
    const searchLocation = document.getElementById("search-location");
    const searchForm = document.querySelector(".quick-search-form");

    if (searchForm) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page reload
            filterAndRender();
        });
    }

    // Bidirectional synchronization between quick search and sidebar filters
    if (keywordInput) {
        keywordInput.addEventListener("input", (e) => {
            if (searchKeyword) searchKeyword.value = e.target.value;
            filterAndRender();
        });
    }
    if (typeSelect) {
        typeSelect.addEventListener("change", (e) => {
            if (searchType) searchType.value = e.target.value;
            filterAndRender();
        });
    }
    if (locationSelect) {
        locationSelect.addEventListener("change", (e) => {
            if (searchLocation) searchLocation.value = e.target.value;
            filterAndRender();
        });
    }

    if (searchKeyword) {
        searchKeyword.addEventListener("input", (e) => {
            if (keywordInput) keywordInput.value = e.target.value;
            filterAndRender();
        });
    }
    if (searchType) {
        searchType.addEventListener("change", (e) => {
            if (typeSelect) typeSelect.value = e.target.value;
            filterAndRender();
        });
    }
    if (searchLocation) {
        searchLocation.addEventListener("change", (e) => {
            if (locationSelect) locationSelect.value = e.target.value;
            filterAndRender();
        });
    }
    if (priceRangeInput) {
        priceRangeInput.addEventListener("input", (e) => {
            const label = document.getElementById("price-range-value");
            const maxVal = parseInt(e.target.value);
            if (maxVal === 500) {
                label.innerHTML = currentLang === "sw" ? "Zote" : "Any Price";
            } else {
                label.innerHTML = `${maxVal}M TZS / $${Math.round((maxVal * 1000000) / 2600).toLocaleString()}`;
            }
            filterAndRender();
        });
    }

    // Initial Render
    renderListings();
    updateCompareContainer();

    // Bind modal close
    const closeModalBtn = document.getElementById("close-details");
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closePropertyDetails);
    }

    // Bind Compare Modal Close
    const closeCompareBtn = document.getElementById("close-compare");
    if (closeCompareBtn) {
        closeCompareBtn.addEventListener("click", () => {
            document.getElementById("compare-modal").classList.remove("active");
        });
    }

    const triggerCompareBtn = document.getElementById("trigger-compare-now");
    if (triggerCompareBtn) {
        triggerCompareBtn.addEventListener("click", openCompareModal);
    }
}

function filterAndRender() {
    renderListings();
}

function renderListings() {
    const grid = document.getElementById("listings-grid");
    const counterEl = document.getElementById("listings-count-num");
    if (!grid) return;

    grid.innerHTML = "";

    // Get filter inputs
    const keyword = (document.getElementById("filter-keyword")?.value || "").toLowerCase();
    const type = document.getElementById("filter-type")?.value || "all";
    const location = document.getElementById("filter-location")?.value || "all";
    const priceMaxM = parseInt(document.getElementById("filter-price-range")?.value || "500");

    const listings = getMergedListings();
    let filtered = listings.filter(item => {
        // Keyword Search (matches title, description, location)
        const matchKeyword = !keyword ||
            item.titleEn.toLowerCase().includes(keyword) ||
            item.titleSw.toLowerCase().includes(keyword) ||
            item.location.toLowerCase().includes(keyword) ||
            item.descEn.toLowerCase().includes(keyword) ||
            item.descSw.toLowerCase().includes(keyword);

        // Type Filter
        const matchType = type === "all" || item.type === type;

        // Location Filter
        const matchLocation = location === "all" || item.location === location;

        // Price Filter (max value 500 represents unlimited/any price)
        // If listing price is per sqm, we compare total cost of size * price-per-sqm, or just match per sqm price
        let matchPrice = true;
        if (priceMaxM < 500) {
            const limitAmt = priceMaxM * 1000000;
            // Determine actual price
            const actualPrice = item.isPerSqm ? (item.priceTzs * parseFloat(item.sizeVal || 1000)) : item.priceTzs;
            matchPrice = actualPrice <= limitAmt;
        }

        return matchKeyword && matchType && matchLocation && matchPrice;
    });

    // Render counter
    if (counterEl) {
        counterEl.innerHTML = filtered.length;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="text-center" style="grid-column: 1/-1; padding: 40px;" data-en="No land listings match your filter criteria." data-sw="Hakuna viwanja vinavyolingana na vigezo vyako.">${currentLang === "sw" ? "Hakuna viwanja au ardhi inayofanana na vigezo vyako." : "No land listings match your filter criteria."}</div>`;
        return;
    }

    filtered.forEach(item => {
        const isFav = favoriteList.includes(item.id);
        const isCompared = compareList.includes(item.id);

        const card = document.createElement("div");
        card.className = "listing-card";

        const badge = currentLang === "sw" ? item.badgeSw : item.badgeEn;
        const title = currentLang === "sw" ? item.titleSw : item.titleEn;
        const subTitle = currentLang === "sw" ? item.titleStatusSw : item.titleStatusEn;
        const formattedPrice = currentCurrency === "USD"
            ? `$${formatMoney(item.priceUsd)}${item.isPerSqm ? '/m²' : ''}`
            : `${formatMoney(item.priceTzs)} TZS${item.isPerSqm ? '/m²' : ''}`;

        card.innerHTML = `
            <div class="listing-badge">${badge}</div>
            <button class="listing-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite('${item.id}', event)">❤</button>
            <div class="listing-image-box">
                <img src="${item.images[0]}" alt="${title}" loading="lazy">
            </div>
            <div class="listing-details">
                <div class="listing-location">${item.location} • <span style="color:#777">${subTitle}</span></div>
                <h3 class="listing-card-title">${title}</h3>
                <div class="listing-specs">
                    <div class="listing-spec-item">
                        <svg class="icon-svg" viewBox="0 0 24 24"><path d="M10.5 9h7.5V7.5h-7.5V9zm0 3h7.5v-1.5h-7.5V12zm0 3h7.5V13.5h-7.5V15zm-6-6h4.5V7.5H4.5V9zm0 3h4.5v-1.5H4.5V12zm0 3h4.5V13.5H4.5V15zM2 4v16h20V4H2zm18 14H4V6h16v12z"/></svg>
                        <span>${item.size}</span>
                    </div>
                    <div class="listing-spec-item">
                        <svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        <span>${item.location}</span>
                    </div>
                </div>
                <div class="listing-price-box">
                    <span class="listing-price">${formattedPrice}</span>
                </div>
                <div class="btn-group" style="margin-top:16px;">
                    <button class="btn btn-outline" style="padding: 8px 12px; font-size: 0.8rem; flex: 1;" onclick="openPropertyDetails('${item.id}')">${UI_DICTIONARY[`view-details-${currentLang}`]}</button>
                    <button class="btn btn-dark ${isCompared ? 'btn-primary' : ''}" style="padding: 8px 12px; font-size: 0.8rem; max-width: 100px;" onclick="toggleCompare('${item.id}', event)">
                        ${isCompared ? '✓' : UI_DICTIONARY[`compare-btn-${currentLang}`]}
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ================= PROPERTY DETAILS OVERLAY =================

function openPropertyDetails(id) {
    const modal = document.getElementById("details-modal");
    if (!modal) return;

    modal.setAttribute("data-property-id", id);
    fillPropertyDetails(id);
    modal.classList.add("active");

    // Add query param to URL for direct link sharing/bookmarking
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?property=${id}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
}

function closePropertyDetails() {
    const modal = document.getElementById("details-modal");
    if (!modal) return;

    modal.classList.remove("active");
    modal.removeAttribute("data-property-id");

    // Clear Leaflet map from container
    const mapDiv = document.getElementById("detail-map");
    if (mapDiv) mapDiv.innerHTML = "";

    // Remove query param
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({ path: cleanUrl }, '', cleanUrl);
}

function fillPropertyDetails(id) {
    const listings = getMergedListings();
    const item = listings.find(l => l.id === id);
    if (!item) return;

    // Language data
    const title = currentLang === "sw" ? item.titleSw : item.titleEn;
    const desc = currentLang === "sw" ? item.descSw : item.descEn;
    const badge = currentLang === "sw" ? item.badgeSw : item.badgeEn;
    const priceText = currentCurrency === "USD"
        ? `$${formatMoney(item.priceUsd)}${item.isPerSqm ? '/m²' : ''}`
        : `${formatMoney(item.priceTzs)} TZS${item.isPerSqm ? '/m²' : ''}`;

    document.getElementById("detail-title").innerHTML = title;
    document.getElementById("detail-badge").innerHTML = badge;
    document.getElementById("detail-price").innerHTML = priceText;
    document.getElementById("detail-desc").innerHTML = desc;

    // Gallery Slideshow
    const gallery = document.getElementById("detail-gallery");
    const dotsContainer = document.getElementById("detail-gallery-dots");
    gallery.innerHTML = "";
    dotsContainer.innerHTML = "";

    activeSlideshow[id] = 0;

    item.images.forEach((imgSrc, idx) => {
        const slide = document.createElement("div");
        slide.className = `gallery-slide ${idx === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${imgSrc}" alt="${title}">`;
        gallery.appendChild(slide);

        const dot = document.createElement("button");
        dot.className = `gallery-nav-dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener("click", () => setSlide(idx));
        dotsContainer.appendChild(dot);
    });

    // Specifications Table
    const specsBody = document.getElementById("detail-specs-body");
    specsBody.innerHTML = `
        <tr>
            <td><strong>${UI_DICTIONARY[`type-lbl-${currentLang}`]}</strong></td>
            <td>${UI_DICTIONARY[`type-${item.type}-${currentLang}`] || item.type}</td>
        </tr>
        <tr>
            <td><strong>${UI_DICTIONARY[`location-lbl-${currentLang}`]}</strong></td>
            <td>${item.locationDetail}</td>
        </tr>
        <tr>
            <td><strong>${UI_DICTIONARY[`size-lbl-${currentLang}`]}</strong></td>
            <td>${item.size}</td>
        </tr>
        <tr>
            <td><strong>${UI_DICTIONARY[`status-lbl-${currentLang}`]}</strong></td>
            <td>${item.status}</td>
        </tr>
    `;

    // Set custom text in modal form subject
    const subjectEn = `Interested in Listing: ${item.titleEn}`;
    const subjectSw = `Nayevutiwa na Tangazo: ${item.titleSw}`;
    const inputSubject = document.getElementById("detail-enquiry-subject");
    if (inputSubject) {
        inputSubject.value = currentLang === "sw" ? subjectSw : subjectEn;
    }

    // Load local area Leaflet map
    initDetailMap(item.coordinates, title);
}

function setSlide(idx) {
    const slides = document.querySelectorAll(".gallery-slide");
    const dots = document.querySelectorAll(".gallery-nav-dot");

    slides.forEach((slide, sIdx) => {
        slide.classList.toggle("active", sIdx === idx);
    });
    dots.forEach((dot, dIdx) => {
        dot.classList.toggle("active", dIdx === idx);
    });
}

function prevSlide() {
    const slides = document.querySelectorAll(".gallery-slide");
    if (slides.length <= 1) return;
    let activeIdx = 0;
    slides.forEach((slide, idx) => {
        if (slide.classList.contains("active")) activeIdx = idx;
    });
    let nextIdx = activeIdx - 1;
    if (nextIdx < 0) nextIdx = slides.length - 1;
    setSlide(nextIdx);
}

function nextSlide() {
    const slides = document.querySelectorAll(".gallery-slide");
    if (slides.length <= 1) return;
    let activeIdx = 0;
    slides.forEach((slide, idx) => {
        if (slide.classList.contains("active")) activeIdx = idx;
    });
    let nextIdx = activeIdx + 1;
    if (nextIdx >= slides.length) nextIdx = 0;
    setSlide(nextIdx);
}

// Leaflet Map Initializer
function initDetailMap(coords, title) {
    const mapDiv = document.getElementById("detail-map");
    if (!mapDiv) return;

    // Clean old map
    mapDiv.innerHTML = "";

    // Create map frame
    const mapElement = document.createElement("div");
    mapElement.id = "leaflet-detail-map";
    mapElement.style.height = "100%";
    mapElement.style.width = "100%";
    mapDiv.appendChild(mapElement);

    try {
        // Initialize Leaflet map (pull library dynamically)
        const map = L.map("leaflet-detail-map").setView(coords, 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker(coords).addTo(map)
            .bindPopup(title)
            .openPopup();
    } catch (err) {
        // Fallback if Leaflet failed to load
        mapElement.innerHTML = `
            <div style="padding: 24px; text-align: center; background: #eee; height:100%; display:flex; flex-direction:column; justify-content:center;">
                <h4>Map Location: Arusha, Tanzania</h4>
                <p>Coordinates: ${coords[0]}, ${coords[1]}</p>
                <small>(Active internet connection required to render Leaflet map)</small>
            </div>
        `;
    }
}

// ================= FAVORITES ENGINE =================

function toggleFavorite(id, event) {
    if (event) event.stopPropagation();

    const idx = favoriteList.indexOf(id);
    if (idx === -1) {
        favoriteList.push(id);
        showToast(UI_DICTIONARY[`fav-added-${currentLang}`]);
    } else {
        favoriteList.splice(idx, 1);
    }

    localStorage.setItem("sisi_favorites", JSON.stringify(favoriteList));
    renderListings();
}

function showToast(msg) {
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "40px";
    toast.style.left = "40px";
    toast.style.backgroundColor = "var(--color-primary)";
    toast.style.color = "var(--color-accent)";
    toast.style.border = "1px solid var(--color-accent)";
    toast.style.padding = "12px 24px";
    toast.style.borderRadius = "var(--border-radius-sm)";
    toast.style.boxShadow = "var(--shadow-lg)";
    toast.style.zIndex = "2500";
    toast.innerHTML = msg;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.5s ease";
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}

// ================= COMPARE ENGINE =================

function toggleCompare(id, event) {
    if (event) event.stopPropagation();

    const idx = compareList.indexOf(id);
    if (idx === -1) {
        if (compareList.length >= 3) {
            alert(currentLang === "sw"
                ? "Unaweza kulinganisha kiwango cha mali tatu tu kwa wakati mmoja."
                : "You can compare a maximum of 3 properties at a time.");
            return;
        }
        compareList.push(id);
    } else {
        compareList.splice(idx, 1);
    }

    localStorage.setItem("sisi_compare", JSON.stringify(compareList));
    renderListings();
    updateCompareContainer();
}

function updateCompareContainer() {
    const container = document.getElementById("compare-panel");
    const itemsDiv = document.getElementById("compare-items-badges");
    if (!container) return;

    if (compareList.length === 0) {
        container.style.display = "none";
        return;
    }

    container.style.display = "flex";
    itemsDiv.innerHTML = "";

    const listings = getMergedListings();
    compareList.forEach(id => {
        const item = listings.find(l => l.id === id);
        if (!item) return;

        const title = currentLang === "sw" ? item.titleSw : item.titleEn;

        const badge = document.createElement("div");
        badge.className = "compare-badge";
        badge.innerHTML = `
            <span>${title.substring(0, 20)}...</span>
            <button onclick="toggleCompare('${id}', event)">✕</button>
        `;
        itemsDiv.appendChild(badge);
    });
}

function openCompareModal() {
    const modal = document.getElementById("compare-modal");
    const body = document.getElementById("compare-modal-listings");
    if (!modal || !body) return;

    body.innerHTML = "";

    const listings = getMergedListings();
    const itemsToCompare = listings.filter(l => compareList.includes(l.id));

    itemsToCompare.forEach(item => {
        const title = currentLang === "sw" ? item.titleSw : item.titleEn;
        const price = currentCurrency === "USD"
            ? `$${formatMoney(item.priceUsd)}${item.isPerSqm ? '/m²' : ''}`
            : `${formatMoney(item.priceTzs)} TZS${item.isPerSqm ? '/m²' : ''}`;

        const card = document.createElement("div");
        card.className = "compare-modal-card";
        card.innerHTML = `
            <img src="${item.images[0]}" alt="${title}" style="height:150px; object-fit:cover; border-radius:4px;">
            <h4>${title}</h4>
            <table class="compare-modal-table">
                <tr>
                    <td data-en="Price" data-sw="Bei">${currentLang === "sw" ? "Bei" : "Price"}</td>
                    <td style="color:var(--color-accent); font-weight:bold;">${price}</td>
                </tr>
                <tr>
                    <td data-en="Type" data-sw="Aina">${currentLang === "sw" ? "Aina" : "Type"}</td>
                    <td>${UI_DICTIONARY[`type-${item.type}-${currentLang}`] || item.type}</td>
                </tr>
                <tr>
                    <td data-en="Location" data-sw="Mahali">${currentLang === "sw" ? "Mahali" : "Location"}</td>
                    <td>${item.location}</td>
                </tr>
                <tr>
                    <td data-en="Size" data-sw="Ukubwa">${currentLang === "sw" ? "Ukubwa" : "Size"}</td>
                    <td>${item.size}</td>
                </tr>
                <tr>
                    <td data-en="Title Status" data-sw="Hali ya Hati">${currentLang === "sw" ? "Hali ya Hati" : "Title Status"}</td>
                    <td>${currentLang === "sw" ? item.titleStatusSw : item.titleStatusEn}</td>
                </tr>
            </table>
            <button class="btn btn-outline" style="margin-top:12px; padding:6px; font-size:0.8rem;" onclick="openPropertyDetails('${item.id}')">
                ${UI_DICTIONARY[`view-details-${currentLang}`]}
            </button>
        `;
        body.appendChild(card);
    });

    modal.classList.add("active");
}

// ================= CONTACT FORM & HONEYPOT SPAM FILTER =================

function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // 1. Honeypot check: If the hidden input is filled, treat as spam bot and silently reject
        const honeypotVal = document.getElementById("form-bot-trap").value;
        if (honeypotVal) {
            console.warn("Spam bot submission caught via Honeypot Trap.");
            showFormFeedback(true);
            form.reset();
            return;
        }

        // Mock API Submit
        const name = document.getElementById("form-name").value;
        const email = document.getElementById("form-email").value;
        const message = document.getElementById("form-message").value;

        if (!name || !email || !message) {
            alert(currentLang === "sw" ? "Tafadhali jaza nyanja zote." : "Please fill in all fields.");
            return;
        }

        showFormFeedback(false);
        form.reset();
    });
}

function showFormFeedback(isSpam) {
    const feedbackBox = document.getElementById("form-feedback-msg");
    if (!feedbackBox) return;

    feedbackBox.style.display = "block";
    if (isSpam) {
        // Silently mock success to spammer, but show normal positive status
        feedbackBox.className = "form-group";
        feedbackBox.style.color = "#4caf50";
        feedbackBox.innerHTML = currentLang === "sw"
            ? "✓ Ujumbe wako umetumwa kwa ufanisi!"
            : "✓ Your inquiry has been sent successfully!";
    } else {
        feedbackBox.className = "form-group";
        feedbackBox.style.color = "#4caf50";
        feedbackBox.innerHTML = currentLang === "sw"
            ? "✓ Asante! Ujumbe wako umetumwa kwa idara yetu. Mshauri wetu atawasiliana nawe hivi karibuni."
            : "✓ Thank you! Your message has been sent to our desk. A consultant will reach out shortly.";
    }
}

// ================= CLIENT LISTINGS DASHBOARD (ADMIN PANEL) =================

function initAdminPanel() {
    renderAdminListings();

    const adminForm = document.getElementById("admin-add-form");
    if (adminForm) {
        adminForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const titleEn = document.getElementById("admin-title-en").value;
            const titleSw = document.getElementById("admin-title-sw").value;
            const location = document.getElementById("admin-location").value;
            const locationDetail = document.getElementById("admin-location-detail").value;
            const type = document.getElementById("admin-type").value;
            const priceTzs = parseInt(document.getElementById("admin-price-tzs").value);
            const priceUsd = parseInt(document.getElementById("admin-price-usd").value);
            const isPerSqm = document.getElementById("admin-persqm").checked;
            const size = document.getElementById("admin-size").value;
            const badgeEn = document.getElementById("admin-badge-en").value;
            const badgeSw = document.getElementById("admin-badge-sw").value;
            const titleStatusEn = document.getElementById("admin-title-status-en").value;
            const titleStatusSw = document.getElementById("admin-title-status-sw").value;
            const descEn = document.getElementById("admin-desc-en").value;
            const descSw = document.getElementById("admin-desc-sw").value;
            const imageUrl = document.getElementById("admin-image-url").value || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80";

            // Build new listing item
            const newId = "custom-" + Date.now();
            const newProperty = {
                id: newId,
                titleEn,
                titleSw,
                type,
                location,
                locationDetail,
                priceTzs,
                priceUsd,
                isPerSqm,
                size,
                sizeVal: parseFloat(size) || 1000,
                status: "Available",
                badgeEn: badgeEn || "New",
                badgeSw: badgeSw || "Mpya",
                titleStatusEn,
                titleStatusSw,
                descEn,
                descSw,
                coordinates: [-3.3950, 36.7150], // Default Arusha central coords
                amenitiesEn: ["Surveyed Beacon pins", "Electricity access", "Water supply"],
                amenitiesSw: ["Vigingi vya upimaji vipo", "Umeme upo karibu", "Maji yapo"],
                images: [imageUrl]
            };

            // Save to localStorage
            const customListings = JSON.parse(localStorage.getItem("sisi_custom_listings")) || [];
            customListings.push(newProperty);
            localStorage.setItem("sisi_custom_listings", JSON.stringify(customListings));

            adminForm.reset();
            renderAdminListings();
            alert("Property listing added successfully to local database!");
        });
    }
}

function renderAdminListings() {
    const listContainer = document.getElementById("admin-listings-list");
    if (!listContainer) return;

    listContainer.innerHTML = "";
    const customListings = JSON.parse(localStorage.getItem("sisi_custom_listings")) || [];

    if (customListings.length === 0) {
        listContainer.innerHTML = `<div class="text-center" style="padding: 24px; color: var(--color-text-muted);">No custom properties loaded. Add one using the form on the left.</div>`;
        return;
    }

    customListings.forEach(item => {
        const row = document.createElement("div");
        row.className = "admin-item-row";
        row.innerHTML = `
            <div>
                <span class="admin-item-title">${item.titleEn}</span>
                <div class="admin-item-meta">${item.location} • ${item.type} • TZS ${item.priceTzs.toLocaleString()}</div>
            </div>
            <button class="btn btn-dark" style="padding: 6px 12px; background-color:#e23e3e;" onclick="deleteAdminProperty('${item.id}')">Delete</button>
        `;
        listContainer.appendChild(row);
    });
}

function deleteAdminProperty(id) {
    if (confirm("Are you sure you want to delete this property?")) {
        let customListings = JSON.parse(localStorage.getItem("sisi_custom_listings")) || [];
        customListings = customListings.filter(item => item.id !== id);
        localStorage.setItem("sisi_custom_listings", JSON.stringify(customListings));
        renderAdminListings();
    }
}

// Contact Map Initializer (Leaflet.js)
function initContactMap() {
    const mapDiv = document.getElementById("contact-map");
    if (!mapDiv) return;

    // Clear old contents
    mapDiv.innerHTML = "";

    const mapElement = document.createElement("div");
    mapElement.id = "leaflet-office-map";
    mapElement.style.height = "100%";
    mapElement.style.width = "100%";
    mapDiv.appendChild(mapElement);

    try {
        const officeCoords = [-3.3725, 36.6944]; // Arusha Clock Tower
        const map = L.map("leaflet-office-map").setView(officeCoords, 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker(officeCoords).addTo(map)
            .bindPopup("<b>Sisi Estate Company Limited</b><br>Clock Tower Building, Arusha")
            .openPopup();
    } catch (err) {
        mapElement.innerHTML = `
            <div style="padding: 24px; text-align: center; background: #eee; height:100%; display:flex; flex-direction:column; justify-content:center;">
                <h4>Office Location: Clock Tower, Arusha</h4>
                <p>Coordinates: -3.3725, 36.6944</p>
                <small>(Active internet connection required to render Leaflet map)</small>
            </div>
        `;
    }
}
