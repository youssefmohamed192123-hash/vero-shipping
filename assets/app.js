/**
 * 5 VERO SHIPPING - Interactive Application Script
 * Bilingual System (Arabic RTL + English LTR)
 * Smooth animations, tracking engine, quote calculator, and dynamic UI
 */

// =========================================================================
// 1. CONFIGURATION & PLACEHOLDERS (Edit these whenever needed)
// =========================================================================
const APP_CONFIG = {
  companyName: "Vero Shipping",
  brandMark: "5 Vero Shipping",
  headquarters: "Savannah, Georgia, USA",
  omanPhone: "+968 6443 7782",
  omanPhoneRaw: "+96864437782",
  email: "info@veroshipping.com", // [EMAIL]
  website: "www.veroshipping.com",
  whatsappUrl: "https://wa.me/96864437782",
  socialLinks: {
    facebook: "https://facebook.com/veroshipping",
    instagram: "https://instagram.com/veroshipping",
    linkedin: "https://linkedin.com/company/veroshipping",
    twitter: "https://twitter.com/veroshipping"
  },
  // Animated counters numbers (Easily edit here)
  stats: {
    vehicles: 25000, // [VEHICLES SHIPPED]
    clients: 8500,   // [HAPPY CLIENTS]
    destinations: 45, // [DESTINATIONS]
    experience: 12   // [YEARS OF EXPERIENCE]
  }
};

/**
 * TRACKING API CONFIGURATION
 * Connect your live tracking API or external customer portal here.
 * - 'demo': Displays the built-in interactive visual tracking demo
 * - 'api': Sends an AJAX request to your endpoint
 * - 'redirect': Redirects directly to your external portal with the VIN/booking query param
 */
const TRACKING_CONFIG = {
  mode: 'demo', // Options: 'demo' | 'api' | 'redirect'
  apiUrl: 'https://api.veroshipping.com/v1/shipments/track', // [YOUR TRACKING API ENDPOINT]
  portalUrl: 'https://tracking.veroshipping.com/?tracking=', // [YOUR EXTERNAL PORTAL LINK]
  apiKey: '' // Optional Bearer token or API key
};

// =========================================================================
// 2. BILINGUAL TRANSLATION DICTIONARY (Arabic RTL & English LTR)
// =========================================================================
const translations = {
  en: {
    // Top bar & Header
    topbar_call_us: "Call Oman Branch:",
    topbar_email: "Email:",
    topbar_location: "Savannah, GA, USA",
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_advantages: "Why Us",
    nav_oman: "Oman Branch",
    nav_destinations: "Destinations",
    nav_tracking: "Track Shipment",
    nav_quote: "Get a Quote",
    nav_contact: "Contact",
    btn_switch_lang: "العربية",
    badge_five_stars: "5-Star Ocean Freight & Auto Logistics",

    // Hero Section
    hero_tagline: "We Don't Just Ship, We Deliver Trust.",
    hero_subtext: "International logistics and vehicle shipping specialists headquartered in Savannah, Georgia. We export all kinds of vehicles from US auctions (Copart, IAAI, Manheim, ADESA) and dealers to the Middle East, Europe, and Africa with transparent, secure, and hassle-free solutions.",
    hero_btn_quote: "Get a Free Quote",
    hero_btn_track: "Track Your Shipment",
    hero_chip_auctions: "Direct US Auction Pickups",
    hero_chip_ocean: "Ro-Ro & Container Ocean Freight",
    hero_chip_live: "Live 24/7 Status Updates",
    hero_chip_oman: "Sohar & Salalah Port Delivery",

    // Quick search bar in hero
    hero_quick_track_placeholder: "Enter VIN, Container, or Booking No...",
    hero_quick_track_btn: "Quick Track",

    // About Us Section
    about_badge: "5-Star Logistics Guarantee",
    about_title: "Connecting US Markets with Global Importers",
    about_lead: "Vero Shipping is an international logistics leader headquartered in Savannah, Georgia, USA, specializing in ocean freight and global vehicle shipping.",
    about_p1: "Founded on the core philosophy of complete reliability and customer peace of mind, we bridge the gap between major US auto auctions—including Copart, IAAI, Manheim, and ADESA—and car dealers, showrooms, and individual buyers worldwide.",
    about_mission_title: "Our Mission",
    about_mission_text: "To provide safe, reliable, smart logistics solutions that connect US markets with importers and customers worldwide, with uncompromising transparency, speed, and a hassle-free shipping experience.",
    about_headquarters_title: "Savannah, GA Headquarters",
    about_headquarters_text: "Positioned directly beside one of North America's fastest-growing deepwater vehicle container ports.",
    about_oman_title: "Sultanate of Oman Branch",
    about_oman_text: "Dedicated on-the-ground support serving the Gulf and Middle East via Sohar and Salalah ports.",
    about_pill_1: "Licensed & Bonded Ocean Freight",
    about_pill_2: "Complete Photo Inspection Reports",
    about_pill_3: "Hassle-Free Customs & Title Clearance",
    about_pill_4: "Multi-Car Container Consolidation",

    // Animated Counters
    counter_vehicles: "Vehicles Shipped Safely",
    counter_clients: "Happy Global Clients",
    counter_destinations: "Global Ports & Routes",
    counter_experience: "Years of Logistics Mastery",

    // Core Services Section
    services_subtitle: "Comprehensive Solutions",
    services_title: "Core Logistics & Shipping Services",
    services_lead: "From US auction floor bids to your port of arrival, we manage every single kilometer with total care and institutional precision.",
    
    // Service 1
    serv1_title: "Vehicle Shipping from the USA",
    serv1_desc: "Direct ocean freight for vehicles sourced from Copart, IAAI, Manheim, and ADESA auctions as well as licensed dealerships to ports worldwide via Ro-Ro and container carriers.",
    serv1_badge: "Auctions to World",

    // Service 2
    serv2_title: "Inland Transportation Across USA",
    serv2_desc: "Nationwide auto-hauling and inland trucking across all 50 US states to leading export ports including Savannah, New Jersey, Houston, and Los Angeles.",
    serv2_badge: "50 US States Covered",

    // Service 3
    serv3_title: "Container Loading & Consolidation",
    serv3_desc: "Expert vehicle containerization loading 3 to 5 cars per 40ft/45ft high-cube container using certified heavy-duty tie-downs, cutting shipping expenses significantly.",
    serv3_badge: "Cost-Effective",

    // Service 4
    serv4_title: "Customs Clearance & Documentation",
    serv4_desc: "Seamless handling of US Customs export filings (AES/SED), title validation, bill of lading (BOL), lien checks, and port departure clearance without delays.",
    serv4_badge: "Export & Title Clearance",

    // Service 5
    serv5_title: "Door-to-Door Delivery Service",
    serv5_desc: "End-to-end coordinated logistics starting at the auction lot or dealer yard and ending directly at your local showroom, warehouse, or personal address.",
    serv5_badge: "Turnkey Logistics",

    // Service 6
    serv6_title: "Specialty & Salvage Vehicles",
    serv6_desc: "Dedicated handling for salvage, collision, flood, non-running cars, electric vehicles (EVs) with certified battery protocols, classic exotics, and heavy machinery.",
    serv6_badge: "EV & Salvage Certified",

    // Why Choose Us / Advantages
    why_subtitle: "The 5-Star Difference",
    why_title: "Why Importers Choose Vero Shipping",
    why_lead: "Built on institutional trust, absolute honesty, and proven global logistics infrastructure.",
    why_adv1_title: "Expansive Global Logistics Network",
    why_adv1_desc: "Strategic presence in the USA, Oman, UAE, Iraq, Jordan, Turkey, Libya, Europe, and West Africa, guaranteeing optimal sea routes and reliable vessel departures.",
    why_adv2_title: "Live Milestone Tracking & Photos",
    why_adv2_desc: "Track your vehicle through every phase—auction pick-up, port arrival, warehouse loading photos, container sealing, ocean transit, and arrival.",
    why_adv3_title: "All Vehicle Categories Handled",
    why_adv3_desc: "From mint-condition luxury exotics to salvage projects, commercial heavy trucks, and electric vehicles, our equipment handles any condition securely.",
    why_adv4_title: "Absolute Transparency & Zero Hidden Fees",
    why_adv4_desc: "We provide upfront itemized quotations with clear breakdown of inland trucking, ocean freight, and dock fees. What we quote is what you pay.",
    why_adv5_title: "Dedicated Multilingual Support",
    why_adv5_desc: "Direct communication with experienced logistics coordinators in English and Arabic who understand local Middle Eastern import regulations.",

    // Oman Branch Section
    oman_badge: "Sultanate of Oman Operations",
    oman_title: "Our Dedicated Branch in Oman",
    oman_lead: "Providing localized customer care, port clearance support, and direct shipping logistics for vehicle importers across the Sultanate of Oman and the GCC.",
    oman_scope_title: "Branch Scope & Services:",
    oman_scope_1: "Direct ocean container lines to Sohar Port and Salalah Port.",
    oman_scope_2: "Dedicated assistance for automotive showrooms, dealers, and individual private buyers.",
    oman_scope_3: "Local customs paperwork, Bayan clearance support, and port dispatch guidance.",
    oman_scope_4: "Rapid inland transportation coordination across Muscat, Batina, Dhofar, and interior regions.",
    oman_phone_label: "Direct Phone & WhatsApp Hotline:",
    oman_website_label: "Official Portal:",
    oman_cta_call: "Call Oman Branch",
    oman_cta_whatsapp: "WhatsApp Direct Chat",

    // Tracking Section
    tracking_subtitle: "Shipment Visibility",
    tracking_title: "Live Cargo & Vehicle Tracking",
    tracking_lead: "Enter your 17-character VIN, container number, or Vero Shipping booking number to view real-time location and milestone progress.",
    tracking_input_label: "Vehicle Identification Number (VIN) / Container / Booking:",
    tracking_input_placeholder: "e.g. VERO-78492 or 1HGCR2F83HA129845",
    tracking_btn: "Track Shipment",
    tracking_sample_hint: "Try demo numbers:",
    tracking_status_active: "Shipment in Transit",
    tracking_badge_verified: "Verified Vero Cargo",
    tracking_step_1: "Auction Pickup",
    tracking_step_1_sub: "Vehicle picked up from US auction yard",
    tracking_step_2: "Port Warehouse",
    tracking_step_2_sub: "Arrived at Savannah, GA terminal with 20+ condition photos",
    tracking_step_3: "US Customs & Loading",
    tracking_step_3_sub: "Title validated, AES export cleared & container sealed",
    tracking_step_4: "Ocean Transit",
    tracking_step_4_sub: "Vessel underway on North Atlantic / Mediterranean route",
    tracking_step_5: "Port Arrival",
    tracking_step_5_sub: "Arrival & container discharge at destination port",
    tracking_vin_label: "VIN / Lot #:",
    tracking_origin_label: "Origin Port:",
    tracking_dest_label: "Destination:",
    tracking_vessel_label: "Vessel / Container:",
    tracking_eta_label: "Estimated Arrival:",
    tracking_portal_notice: "For bulk commercial container tracking or official Bayan customs integration, please contact our Oman support team.",

    // Countries & Ports We Serve
    destinations_subtitle: "Global Footprint",
    destinations_title: "Major Ports & Regions We Serve",
    destinations_lead: "Regular scheduled sailings connecting our Savannah, New Jersey, Houston, and Los Angeles export hubs to ports across the world.",
    dest_tab_all: "All Global Routes",
    dest_tab_mideast: "Middle East & GCC",
    dest_tab_africa: "North & West Africa",
    dest_tab_europe: "Europe & Mediterranean",
    dest_tab_usa: "USA Export Hubs",

    // Free Quote Form
    quote_subtitle: "Instant Price Estimate",
    quote_title: "Request a Free Shipping Quote",
    quote_lead: "Fill out the vehicle details below and our logistics specialists will send you a competitive, all-inclusive shipping quote within hours.",
    form_name: "Full Name",
    form_name_placeholder: "e.g. Mohammed Al-Balushi",
    form_phone: "Phone / WhatsApp Number",
    form_phone_placeholder: "+968 9123 4567 or +1 (912)...",
    form_email: "Email Address",
    form_email_placeholder: "yourname@example.com",
    form_vehicle_type: "Vehicle Type",
    form_type_sedan: "Sedan / Coupe",
    form_type_suv: "SUV / Crossover",
    form_type_truck: "Pickup / Heavy Truck",
    form_type_luxury: "Exotic / Luxury Vehicle",
    form_type_ev: "Electric / Hybrid (EV)",
    form_type_salvage: "Salvage / Non-Runner Car",
    form_origin: "Origin Auction or US State",
    form_origin_placeholder: "e.g. Copart Atlanta, GA or IAAI Dallas, TX",
    form_destination: "Destination Country & Port",
    form_dest_oman: "Oman (Sohar Port / Salalah)",
    form_dest_uae: "UAE (Jebel Ali / Sharjah)",
    form_dest_iraq: "Iraq (Umm Qasr / Erbil)",
    form_dest_jordan: "Jordan (Aqaba)",
    form_dest_libya: "Libya (Misrata / Benghazi / Tripoli)",
    form_dest_other: "Other Destination (Specify in notes)",
    form_vin: "VIN or Auction Lot # (Optional)",
    form_vin_placeholder: "e.g. 1C4RJFAG...",
    form_message: "Additional Notes / Special Instructions",
    form_message_placeholder: "Mention if the vehicle has keys, rolls/steers, or if you need multi-car container loading...",
    form_consent: "I agree to receive shipping quotations, updates, and shipment alerts via WhatsApp or email.",
    form_submit: "Submit Quote Request",
    form_sending: "Calculating & Processing...",
    form_success_title: "Quote Request Received Successfully!",
    form_success_msg: "Thank you for reaching out to Vero Shipping. Your quote reference number is:",
    form_success_followup: "Our logistics team in Savannah & Oman is reviewing auction transport distances and vessel schedules. We will message your WhatsApp shortly.",
    form_success_whatsapp: "Message Us on WhatsApp Now",
    form_success_close: "Close Window",

    // Validation hints
    val_err_name: "Please enter your full name.",
    val_err_phone: "Please enter a valid phone number (at least 7 digits).",
    val_err_email: "Please enter a valid email address.",
    val_err_origin: "Please specify origin auction or US state.",
    val_err_consent: "Please check the consent box to proceed.",

    // Footer
    footer_desc: "Vero Shipping is an international logistics company headquartered in Savannah, Georgia, USA, specializing in ocean freight and vehicle export solutions to the Middle East, Europe, and Africa. We Don't Just Ship, We Deliver Trust.",
    footer_quick_links: "Quick Navigation",
    footer_our_services: "Our Services",
    footer_contact_info: "Contact Details",
    footer_usa_office: "USA Headquarters:",
    footer_usa_addr: "Savannah, Georgia, United States",
    footer_oman_office: "Oman Branch Office:",
    footer_oman_addr: "Serving Sohar & Salalah Ports, Sultanate of Oman",
    footer_phone: "Phone / WhatsApp:",
    footer_email: "Email:",
    footer_web: "Website:",
    footer_hours: "Business Hours: Mon - Fri 8:00 AM - 6:00 PM EST (USA) / Sat - Thu 8:30 AM - 5:30 PM (Oman)",
    footer_rights: "© 2026 Vero Shipping. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Ocean Freight",

    // Floating WhatsApp
    whatsapp_tooltip: "Chat with Vero Shipping Support"
  },

  ar: {
    // Top bar & Header
    topbar_call_us: "فرع سلطنة عمان:",
    topbar_email: "البريد الإلكتروني:",
    topbar_location: "سافانا، جورجيا، أمريكا",
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "خدماتنا",
    nav_advantages: "لماذا تختارنا",
    nav_oman: "فرع عمان",
    nav_destinations: "الوجهات والموانئ",
    nav_tracking: "تتبع الشحنة",
    nav_quote: "طلب تسعيرة",
    nav_contact: "اتصل بنا",
    btn_switch_lang: "English",
    badge_five_stars: "شحن بحري ولوجستيات سيارات بمستوى 5 نجوم",

    // Hero Section
    hero_tagline: "لا ننقل المركبات فحسب، بل نسلّمك الثقة والاطمئنان",
    hero_subtext: "شركة لوجستية دولية متخصصة في الشحن البحري وتصدير المركبات انطلاقاً من مقرنا الرئيسي في مدينة سافانا، ولاية جورجيا، الولايات المتحدة الأمريكية. نصدر جميع أنواع السيارات من كبرى المزادات الأمريكية (كوبارت، IAAI، مانهايم، أديسا) والوكلاء إلى الشرق الأوسط وأوروبا وأفريقيا بأعلى معايير الأمان والشفافية.",
    hero_btn_quote: "احصل على تسعيرة مجانية",
    hero_btn_track: "تتبّع شحنتك الآن",
    hero_chip_auctions: "سحب مباشر من كافة مزادات أمريكا",
    hero_chip_ocean: "شحن بحري بالحاويات وسفن الرورو (Ro-Ro)",
    hero_chip_live: "تحديثات وتتبع لحظي على مدار الساعة",
    hero_chip_oman: "توصيل وتخليص عبر ميناء صحار وصلالة",

    // Quick search bar in hero
    hero_quick_track_placeholder: "أدخل رقم الهيكل (VIN) أو رقم الحاوية أو الحجز...",
    hero_quick_track_btn: "تتبع سريع",

    // About Us Section
    about_badge: "شعار الجودة واللوجستيات 5 نجوم",
    about_title: "نربط الأسواق الأمريكية بالمستوردين حول العالم",
    about_lead: "فيرو للشحن (Vero Shipping) هي شركة لوجستية دولية رائدة تتخذ من مدينة سافانا في ولاية جورجيا الأمريكية مقراً رئيسياً لها، وتختص في خدمات الشحن البحري وتصدير السيارات والمركبات.",
    about_p1: "تأسست الشركة وفق رؤية راسخة ترتكز على بناء جسور الثقة وتقديم تجربة شحن سلسة وخالية من المتاعب. نربط المستوردين وتجار السيارات والمعارض والأفراد بأضخم مزادات السيارات الأمريكية (Copart و IAAI و Manheim و ADESA) وأرقى وكالات البيع في كافة الولايات المتحدة.",
    about_mission_title: "رسالتنا ورؤيتنا",
    about_mission_text: "توفير حلول لوجستية آمنة وموثوقة وذكية تربط الأسواق الأمريكية بالمستوردين والعملاء حول العالم، بأعلى درجات الشفافية والسرعة وتجربة شحن خالية تماماً من المتاعب والمفاجآت.",
    about_headquarters_title: "المقر الرئيسي: سافانا، جورجيا، أمريكا",
    about_headquarters_text: "موقع استراتيجي بجوار أحد أكبر وأسرع موانئ شحن السيارات والحاويات في الساحل الشرقي الأمريكي.",
    about_oman_title: "فرع سلطنة عمان",
    about_oman_text: "فريق دعم محلي يقدم خدمات متكاملة لتجار السيارات والمستوردين عبر ميناء صحار وميناء صلالة.",
    about_pill_1: "شحن بحري مرخص وموثق بالكامل",
    about_pill_2: "تقارير فحص بالصور عالية الدقة في كل مرحلة",
    about_pill_3: "تخليص أوراق الملكية والتصدير بدون تعقيدات",
    about_pill_4: "تجميع وتعبئة ذكية للسيارات داخل الحاويات لتوفير التكلفة",

    // Animated Counters
    counter_vehicles: "سيارة تم شحنها بأمان",
    counter_clients: "عميل يثق بخدماتنا حول العالم",
    counter_destinations: "ميناء ووجهة شحن دولية",
    counter_experience: "عاماً من الخبرة والريادة اللوجستية",

    // Core Services Section
    services_subtitle: "حلول لوجستية شاملة",
    services_title: "خدماتنا الأساسية في الشحن الدولي",
    services_lead: "من ساحة المزاد الأمريكي وحتى وصول سيارتك إلى الميناء أو معرضك، نتولى إدارة أدق التفاصيل لضمان راحة بالك.",

    // Service 1
    serv1_title: "شحن السيارات من أمريكا إلى العالم",
    serv1_desc: "شحن بحري مباشر لجميع أنواع السيارات المشتراة من مزادات كوبارت (Copart)، إيه إيه آي (IAAI)، مانهايم (Manheim)، وأديسا (ADESA) بالإضافة إلى الموزعين والوكلاء الأمريكيين إلى مختلف الموانئ العالمية.",
    serv1_badge: "من المزادات للعالم",

    // Service 2
    serv2_title: "النقل الداخلي بالشاحنات داخل أمريكا",
    serv2_desc: "أسطول ناقلات سيارات مخصص لنقل المركبات من أي ولاية أمريكية (كافة الولايات الـ 50) إلى أقرب موانئ التصدير: نيوجيرسي، سافانا (جورجيا)، هيوستن (تكساس)، ولوس أنجلوس (كاليفورنيا).",
    serv2_badge: "تغطية لكافة الولايات الـ 50",

    // Service 3
    serv3_title: "تحميل وتجميع الحاويات (Consolidation)",
    serv3_desc: "تعبئة احترافية لعدة سيارات (من 3 إلى 5 سيارات) داخل حاويات 40 و 45 قدماً باستخدام أحدث أنظمة التثبيت والتحزيم لحماية الهيكل وتقليص تكاليف الشحن على التاجر والمستورد.",
    serv3_badge: "توفير أقصى للتكاليف",

    // Service 4
    serv4_title: "التخليص الجمركي وإجراءات التصدير",
    serv4_desc: "إنهاء كافة أوراق التصدير الرسمية وتصديق الملكيات (Titles) وإنهاء إجراءات الجمارك الأمريكية (AES) وإصدار بوالص الشحن (BOL) دون أي تأخير في الموانئ.",
    serv4_badge: "أوراق ملكية وتصدير معتمدة",

    // Service 5
    serv5_title: "خدمة من الباب إلى الباب (Door-to-Door)",
    serv5_desc: "خدمة متكاملة تبدأ من استلام المركبة من ساحة المزاد في أمريكا، ونقلها بحراً، ثم تخليصها جمركياً وتسليمها مباشرة إلى معرضك أو باب منزلك في وجهتك النهائية.",
    serv5_badge: "خدمة تسليم مفتاح",

    // Service 6
    serv6_title: "شحن المركبات المتضررة والخاصة",
    serv6_desc: "خبرة متخصصة في شحن السيارات المتضررة والحوادث، والسيارات غير القابلة للتشغيل، والسيارات الكهربائية (EV) وفق معايير سلامة البطاريات، والسيارات الفارهة والكلاسيكية والشاحنات الثقيلة.",
    serv6_badge: "معايير سلامة متقدمة",

    // Why Choose Us / Advantages
    why_subtitle: "ميزة الخمس نجوم",
    why_title: "لماذا يفضل المستوردون فيرو للشحن؟",
    why_lead: "تأسست شركتنا على الالتزام بالشفافية المطلقة، وامتلاك شبكة شحن متكاملة، وحماية مصالح عملائنا في كل شحنة.",
    why_adv1_title: "شبكة لوجستية عالمية واسعة",
    why_adv1_desc: "حضور فاعل وشراكات ملاحية مباشرة في أمريكا، وسلطنة عمان، والإمارات، والعراق، والأردن، وتركيا، وليبيا، وأوروبا وأفريقيا، ما يمنحك أفضل المسارات البحرية وأسرع مواعيد للإبحار.",
    why_adv2_title: "تتبع مباشر وتقارير مصورة في كل خطوة",
    why_adv2_desc: "متابعة دقيقة لمركبتك تبدأ من تصويرها في ساحة المزاد، وتصويرها عند وصولها مستودعات الميناء، وصور التثبيت داخل الحاوية، وحتى تفريغها في ميناء الوصول.",
    why_adv3_title: "شحن لكافة فئات وحالات المركبات",
    why_adv3_desc: "سواء كانت سيارة وكالة نظيفة، أو سيارة حوادث متضررة، أو سيارة كهربائية فائقة، أو شاحنة ثقيلة، نمتلك المعدات والخبرة للتعامل معها بأقصى درجات الأمان.",
    why_adv4_title: "شفافية مطلقة وأسعار دون رسوم مخفية",
    why_adv4_desc: "نقدم عروض أسعار واضحة ومفصلة تشمل النقل الداخلي والشحن البحري والمصاريف المينائية، دون أي رسوم غير متوقعة أو مفاجآت عند الوصول.",
    why_adv5_title: "فريق دعم مخصص يتحدث لغتك",
    why_adv5_desc: "تواصل مباشر مع مسؤولي الشحن باللغتين العربية والإنجليزية، مع إلمام تام بالأنظمة الجمركية والاستيرادية في الخليج والشرق الأوسط.",

    // Oman Branch Section
    oman_badge: "فرع سلطنة عمان الشقيقة",
    oman_title: "فرعنا المعتمد في سلطنة عمان",
    oman_lead: "خدمة متكاملة ووجود محلي على مدار الساعة لخدمة تجار السيارات وأصحاب المعارض والمستوردين الأفراد في سلطنة عمان ودول الخليج العربي.",
    oman_scope_title: "نطاق خدمات فرع عمان:",
    oman_scope_1: "شحن واستقبال مباشر عبر ميناء صحار وميناء صلالة.",
    oman_scope_2: "خدمة خاصة وميسرة لتجار السيارات المستعملة ومعارض السيارات والأفراد.",
    oman_scope_3: "المساعدة في المعاملات الجمركية ومنظومة بيان الجمركية وتسهيل خروج الحاويات.",
    oman_scope_4: "تنسيق نقل المركبات بعد التخليص إلى مسقط والباطنة وظفار وكافة ولايات السلطنة.",
    oman_phone_label: "هاتف الخط المباشر وواتساب فرع عمان:",
    oman_website_label: "الموقع الإلكتروني الرسمي:",
    oman_cta_call: "اتصل بفرع عمان",
    oman_cta_whatsapp: "محادثة فورية عبر واتساب",

    // Tracking Section
    tracking_subtitle: "رؤية شاملة ومتابعة دقيقة",
    tracking_title: "تتبّع شحنات وحاويات المركبات",
    tracking_lead: "أدخل رقم الهيكل (VIN) المكون من 17 حرفاً، أو رقم الحاوية، أو رقم حجز فيرو للشحن لمعرفة موقع سيارتك ومرحلتها بدقة.",
    tracking_input_label: "رقم الهيكل (VIN) / رقم الحاوية / رقم الحجز:",
    tracking_input_placeholder: "مثال: VERO-78492 أو 1HGCR2F83HA129845",
    tracking_btn: "تتبّع الشحنة الآن",
    tracking_sample_hint: "أرقام تجريبية للتجربة السريعة:",
    tracking_status_active: "الشحنة مبحرة في طريقها للوجهة",
    tracking_badge_verified: "شحنة موثقة لدى فيرو للشحن",
    tracking_step_1: "سحب السيارة من المزاد",
    tracking_step_1_sub: "تم استلام السيارة بنجاح من ساحة المزاد الأمريكي ونقلها للشاحنة",
    tracking_step_2: "مستودعات ميناء التصدير",
    tracking_step_2_sub: "وصلت مستودع سافانا (جورجيا) وتم التقاط أكثر من 20 صورة فحص توثيقية",
    tracking_step_3: "الجمارك الأمريكية والتحميل",
    tracking_step_3_sub: "تم اعتماد الملكية وتصريح التصدير وإحكام إغلاق الحاوية برقم القفل",
    tracking_step_4: "الإبحار في عرض البحر",
    tracking_step_4_sub: "السفينة مبحرة حالياً عبر مسار الأطلسي/المتوسط باتجاه ميناء الوصول",
    tracking_step_5: "الوصول والتسليم للميناء",
    tracking_step_5_sub: "تفريغ الحاوية وبدء إجراءات التخليص الجمركي في الميناء النهائي",
    tracking_vin_label: "رقم الهيكل / اللوت:",
    tracking_origin_label: "ميناء الانطلاق:",
    tracking_dest_label: "ميناء الوصول:",
    tracking_vessel_label: "السفينة / رقم الحاوية:",
    tracking_eta_label: "الموعد المتوقع للوصول:",
    tracking_portal_notice: "لتتبع الحاويات التجارية الكبرى أو الربط مع نظام بيان الجمركي، يرجى التواصل مع فريق فرع سلطنة عمان.",

    // Countries & Ports We Serve
    destinations_subtitle: "تغطية عالمية ومسارات ملاحية منتظمة",
    destinations_title: "أبرز الموانئ والوجهات التي نخدمها",
    destinations_lead: "رحلات بحرية أسبوعية وشهرية منتظمة تربط محطات التصدير في سافانا ونيوجيرسي وهيوستن ولوس أنجلوس بأهم موانئ الشرق الأوسط وأفريقيا وأوروبا.",
    dest_tab_all: "كافة الوجهات العالمية",
    dest_tab_mideast: "الشرق الأوسط والخليج",
    dest_tab_africa: "شمال وغرب أفريقيا",
    dest_tab_europe: "أوروبا والبحر المتوسط",
    dest_tab_usa: "موانئ التصدير في أمريكا",

    // Free Quote Form
    quote_subtitle: "تسعيرة فورية ومنافسة",
    quote_title: "اطلب تسعيرة شحن مجانية لسيارتك",
    quote_lead: "أدخل بيانات السيارة وموقع الشراء وسيقوم فريق التسعير بإرسال عرض سعر شامل ومفصل خلال ساعات قليلة.",
    form_name: "الاسم الكريم",
    form_name_placeholder: "مثال: سالم المعمري",
    form_phone: "رقم الهاتف / واتساب",
    form_phone_placeholder: "+968 9123 4567 أو +971...",
    form_email: "البريد الإلكتروني",
    form_email_placeholder: "name@example.com",
    form_vehicle_type: "نوع وفئة المركبة",
    form_type_sedan: "صالون / سيدان / كوبيه",
    form_type_suv: "دفع رباعي / SUV / كروس أوفر",
    form_type_truck: "بيك أب / شاحنة خفيفة أو ثقيلة",
    form_type_luxury: "سيارة فارهة / سوبر كار",
    form_type_ev: "كهربائية أو هايبرد (EV)",
    form_type_salvage: "سيارة متضررة / حوادث / لا تعمل",
    form_origin: "المزاد الأمريكي أو الولاية",
    form_origin_placeholder: "مثال: كوبارت أتلانتا (GA) أو دالاس (TX)",
    form_destination: "دولة وميناء الوصول المطلوب",
    form_dest_oman: "سلطنة عمان (ميناء صحار / ميناء صلالة)",
    form_dest_uae: "الإمارات (ميناء جبل علي / الشارقة)",
    form_dest_iraq: "العراق (ميناء أم قصر / أربيل)",
    form_dest_jordan: "الأردن (ميناء العقبة)",
    form_dest_libya: "ليبيا (مصراتة / بنغازي / طرابلس)",
    form_dest_other: "دولة أخرى (تحدد في الملاحظات)",
    form_vin: "رقم الهيكل (VIN) أو رقم اللوت (اختياري)",
    form_vin_placeholder: "مثال: 1C4RJFAG...",
    form_message: "ملاحظات إضافية أو متطلبات خاصة",
    form_message_placeholder: "هل السيارة تمشي وتلف؟ هل معها مفتاح؟ هل ترغب في شحن حاوية مجمعة أو رورو...",
    form_consent: "أوافق على استلام عروض أسعار الشحن وتحديثات الحالة عبر الواتساب أو البريد الإلكتروني.",
    form_submit: "إرسال طلب التسعيرة الآن",
    form_sending: "جاري احتساب المسار وتجهيز التسعيرة...",
    form_success_title: "تم استلام طلب التسعيرة بنجاح!",
    form_success_msg: "شكراً لتواصلك مع فيرو للشحن (Vero Shipping). رقم مرجع طلبك هو:",
    form_success_followup: "يقوم فريق العمليات في سافانا وفرع عمان حالياً بحساب مسافة النقل الداخلي وجدول السفن المتاحة، وسنتواصل معك عبر الواتساب بأقرب وقت.",
    form_success_whatsapp: "تواصل معنا مباشرة عبر واتساب",
    form_success_close: "إغلاق النافذة",

    // Validation hints
    val_err_name: "يرجى كتابة الاسم الكامل.",
    val_err_phone: "يرجى كتابة رقم هاتف صالح مع رمز الدولة (7 أرقام على الأقل).",
    val_err_email: "يرجى إدخال بريد إلكتروني صحيح.",
    val_err_origin: "يرجى تحديد المزاد أو الولاية الأمريكية.",
    val_err_consent: "يرجى التأشير على خانة الموافقة للمتابعة.",

    // Footer
    footer_desc: "فيرو للشحن (Vero Shipping) هي شركة لوجستية دولية متخصصة في الشحن البحري وتصدير المركبات من الولايات المتحدة الأمريكية إلى الشرق الأوسط وأوروبا وأفريقيا ومقرها سافانا، جورجيا مع فرع معتمد في سلطنة عمان. لا ننقل المركبات فحسب، بل نسلّمك الثقة والاطمئنان.",
    footer_quick_links: "روابط سريعة",
    footer_our_services: "خدماتنا اللوجستية",
    footer_contact_info: "بيانات التواصل والمكاتب",
    footer_usa_office: "المقر الرئيسي في أمريكا:",
    footer_usa_addr: "سافانا، ولاية جورجيا، الولايات المتحدة الأمريكية",
    footer_oman_office: "فرع سلطنة عمان:",
    footer_oman_addr: "خدمة ميناء صحار وميناء صلالة وكافة المحافظات",
    footer_phone: "الهاتف والواتساب:",
    footer_email: "البريد الإلكتروني:",
    footer_web: "الموقع الإلكتروني:",
    footer_hours: "أوقات العمل: أمريكا (الاثنين - الجمعة 8ص - 6م بتوقيت نيويورك) / سلطنة عمان (السبت - الخميس 8:30ص - 5:30م)",
    footer_rights: "© 2026 فيرو للشحن (Vero Shipping). جميع الحقوق محفوظة.",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط وأحكام الشحن البحري",

    // Floating WhatsApp
    whatsapp_tooltip: "تحدث مع دعم فيرو للشحن الآن"
  }
};

// =========================================================================
// 3. APPLICATION STATE & INITIALIZATION
// =========================================================================
let currentLanguage = 'ar'; // Default language: Arabic (bilingual switchable to English)

document.addEventListener('DOMContentLoaded', () => {
  // Check persisted language or fallback
  const savedLang = localStorage.getItem('vero_shipping_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
    currentLanguage = savedLang;
  } else {
    // If user's browser language is explicitly English without Arabic, can default to en, otherwise 'ar'
    const browserLang = (navigator.language || '').toLowerCase();
    if (browserLang.startsWith('en')) {
      currentLanguage = 'en';
    } else {
      currentLanguage = 'ar';
    }
  }

  // Initialize UI language
  applyLanguage(currentLanguage);

  // Setup Event Listeners
  setupLanguageSwitcher();
  setupMobileMenu();
  setupNavbarScroll();
  setupAnimatedCounters();
  setupTrackingDemo();
  setupQuoteForm();
  setupDestinationFilter();
});

// =========================================================================
// 4. LANGUAGE SWITCHING ENGINE
// =========================================================================
function applyLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('vero_shipping_lang', lang);

  const html = document.documentElement;
  const body = document.body;

  // Set RTL or LTR attributes
  const whatsappFloat = document.querySelector('aside[aria-label="WhatsApp Contact"]');
  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    body.setAttribute('dir', 'rtl');
    if (whatsappFloat) {
      whatsappFloat.classList.remove('right-6');
      whatsappFloat.classList.add('left-6');
    }
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    body.setAttribute('dir', 'ltr');
    if (whatsappFloat) {
      whatsappFloat.classList.remove('left-6');
      whatsappFloat.classList.add('right-6');
    }
  }

  // Update text nodes with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update attributes like placeholder, title with data-i18n-attr="placeholder:key"
  const attrElements = document.querySelectorAll('[data-i18n-attr]');
  attrElements.forEach(el => {
    const raw = el.getAttribute('data-i18n-attr');
    const pairs = raw.split(',');
    pairs.forEach(pair => {
      const [attr, key] = pair.trim().split(':');
      if (attr && key && translations[lang] && translations[lang][key]) {
        el.setAttribute(attr, translations[lang][key]);
      }
    });
  });

  // Update language switch button text
  const switchBtns = document.querySelectorAll('.lang-switcher-btn');
  switchBtns.forEach(btn => {
    const labelSpan = btn.querySelector('.lang-label');
    if (labelSpan) {
      labelSpan.textContent = lang === 'ar' ? 'English' : 'العربية';
    }
  });
}

function setupLanguageSwitcher() {
  const switchBtns = document.querySelectorAll('.lang-switcher-btn');
  switchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextLang = currentLanguage === 'ar' ? 'en' : 'ar';
      applyLanguage(nextLang);
    });
  });
}

// =========================================================================
// 5. NAVBAR & MOBILE DRAWER
// =========================================================================
function setupNavbarScroll() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      navbar.classList.remove('bg-white');
    } else {
      navbar.classList.remove('shadow-md');
    }
  });
}

function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// =========================================================================
// 6. ANIMATED COUNTERS (Triggered on scroll)
// =========================================================================
function setupAnimatedCounters() {
  const countersSection = document.getElementById('stats-section');
  if (!countersSection) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateAllCounters();
      }
    });
  }, { threshold: 0.25 });

  observer.observe(countersSection);
}

function animateAllCounters() {
  const counterElements = document.querySelectorAll('.counter-value');
  counterElements.forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps;
      // Ease out cubic
      const easeVal = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeVal * target);

      el.textContent = currentVal.toLocaleString() + suffix;

      if (currentStep >= totalSteps) {
        el.textContent = target.toLocaleString() + suffix;
        clearInterval(timer);
      }
    }, stepTime);
  });
}

// =========================================================================
// 7. INTERACTIVE SHIPMENT TRACKING ENGINE
// =========================================================================
function setupTrackingDemo() {
  const trackBtn = document.getElementById('track-btn');
  const trackInput = document.getElementById('tracking-input');
  const resultCard = document.getElementById('tracking-result-card');
  const sampleBadges = document.querySelectorAll('.sample-track-btn');
  const quickTrackBtn = document.getElementById('quick-track-btn');
  const quickTrackInput = document.getElementById('quick-track-input');

  // Quick track in hero
  if (quickTrackBtn && quickTrackInput) {
    quickTrackBtn.addEventListener('click', () => {
      const val = quickTrackInput.value.trim();
      if (val) {
        trackInput.value = val;
        // Scroll to tracking section
        const trackingSec = document.getElementById('tracking');
        if (trackingSec) trackingSec.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          performTracking(val);
        }, 600);
      }
    });
  }

  // Sample quick buttons
  sampleBadges.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const num = btn.getAttribute('data-sample');
      trackInput.value = num;
      performTracking(num);
    });
  });

  if (trackBtn && trackInput) {
    trackBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const val = trackInput.value.trim();
      performTracking(val);
    });

    trackInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const val = trackInput.value.trim();
        performTracking(val);
      }
    });
  }
}

function performTracking(trackingNumber) {
  const resultCard = document.getElementById('tracking-result-card');
  const trackLoading = document.getElementById('tracking-loading');
  const trackInput = document.getElementById('tracking-input');

  if (!trackingNumber) {
    trackInput.focus();
    trackInput.classList.add('ring-2', 'ring-pink-500');
    setTimeout(() => trackInput.classList.remove('ring-2', 'ring-pink-500'), 1500);
    return;
  }

  // Handle external redirect mode if configured
  if (TRACKING_CONFIG.mode === 'redirect') {
    window.open(TRACKING_CONFIG.portalUrl + encodeURIComponent(trackingNumber), '_blank');
    return;
  }

  // Demo / API mode
  if (resultCard) {
    resultCard.classList.remove('hidden');
    // Scroll result into view slightly
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Populate dynamic tracking values
  const displayVin = document.getElementById('track-disp-vin');
  const displayOrigin = document.getElementById('track-disp-origin');
  const displayDest = document.getElementById('track-disp-dest');
  const displayVessel = document.getElementById('track-disp-vessel');
  const displayEta = document.getElementById('track-disp-eta');

  if (displayVin) displayVin.textContent = trackingNumber.toUpperCase();
  if (displayOrigin) displayOrigin.textContent = "Savannah Port, GA, USA";
  if (displayDest) displayDest.textContent = currentLanguage === 'ar' ? "ميناء صحار، سلطنة عمان" : "Sohar Port, Sultanate of Oman";
  if (displayVessel) displayVessel.textContent = "CMA CGM BIANCA / CNTR: VERO49821-4";
  
  // Future ETA calculation (approx 24 days from now)
  const etaDate = new Date();
  etaDate.setDate(etaDate.getDate() + 18);
  const formattedEta = etaDate.toLocaleDateString(currentLanguage === 'ar' ? 'ar-OM' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  if (displayEta) displayEta.textContent = formattedEta;
}

// =========================================================================
// 8. FREE QUOTE FORM & VALIDATION
// =========================================================================
function setupQuoteForm() {
  const form = document.getElementById('quote-form');
  const modal = document.getElementById('quote-success-modal');
  const closeModalBtn = document.getElementById('quote-modal-close');
  const modalRefNumber = document.getElementById('quote-modal-ref');
  const whatsappQuoteBtn = document.getElementById('quote-modal-whatsapp-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset errors
    clearFormErrors();

    const name = document.getElementById('q-name').value.trim();
    const phone = document.getElementById('q-phone').value.trim();
    const email = document.getElementById('q-email').value.trim();
    const vehicleType = document.getElementById('q-vehicle-type').value;
    const origin = document.getElementById('q-origin').value.trim();
    const destination = document.getElementById('q-destination').value;
    const vin = document.getElementById('q-vin').value.trim();
    const message = document.getElementById('q-message').value.trim();
    const consent = document.getElementById('q-consent').checked;

    let hasError = false;

    if (!name) {
      showError('q-name', translations[currentLanguage].val_err_name);
      hasError = true;
    }

    if (!phone || phone.length < 7) {
      showError('q-phone', translations[currentLanguage].val_err_phone);
      hasError = true;
    }

    if (!email || !validateEmail(email)) {
      showError('q-email', translations[currentLanguage].val_err_email);
      hasError = true;
    }

    if (!origin) {
      showError('q-origin', translations[currentLanguage].val_err_origin);
      hasError = true;
    }

    if (!consent) {
      showError('q-consent', translations[currentLanguage].val_err_consent);
      hasError = true;
    }

    if (hasError) return;

    // Generate reference code e.g. VQ-2026-8941
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const quoteRef = `VQ-2026-${randomCode}`;

    // Show button loading state
    const submitBtn = document.getElementById('q-submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> ${translations[currentLanguage].form_sending}`;
    submitBtn.disabled = true;

    // Simulate server dispatch
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      // Show success modal
      if (modalRefNumber) modalRefNumber.textContent = quoteRef;

      // Prepare prefilled WhatsApp URL
      const waText = currentLanguage === 'ar'
        ? `مرحباً فيرو للشحن (Vero Shipping)،\nأرغب في الاستفسار عن تسعيرة شحن سيارة:\nالمرجع: ${quoteRef}\nالاسم: ${name}\nالمركبة: ${vehicleType}\nالمزاد/المصدر: ${origin}\nالوجهة: ${destination}\nالهيكل: ${vin || 'غير محدد'}\nرقمي: ${phone}`
        : `Hello Vero Shipping,\nI would like to request a quote for shipping a vehicle:\nRef: ${quoteRef}\nName: ${name}\nVehicle: ${vehicleType}\nOrigin: ${origin}\nDestination: ${destination}\nVIN: ${vin || 'N/A'}\nPhone: ${phone}`;

      const waFullUrl = `${APP_CONFIG.whatsappUrl}?text=${encodeURIComponent(waText)}`;
      if (whatsappQuoteBtn) {
        whatsappQuoteBtn.href = waFullUrl;
      }

      modal.classList.remove('hidden');
      form.reset();
    }, 800);
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }
}

function showError(fieldId, errorMsg) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  const parent = field.closest('.form-group') || field.parentElement;
  field.classList.add('border-red-500', 'bg-red-50/40');

  let errorEl = parent.querySelector('.field-error');
  if (!errorEl) {
    errorEl = document.createElement('p');
    errorEl.className = 'field-error text-xs text-red-600 mt-1 font-medium';
    parent.appendChild(errorEl);
  }
  errorEl.textContent = errorMsg;
}

function clearFormErrors() {
  document.querySelectorAll('.field-error').forEach(el => el.remove());
  document.querySelectorAll('#quote-form input, #quote-form select, #quote-form textarea').forEach(el => {
    el.classList.remove('border-red-500', 'bg-red-50/40');
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// =========================================================================
// 9. DESTINATIONS & REGIONS FILTER
// =========================================================================
function setupDestinationFilter() {
  const tabs = document.querySelectorAll('.dest-filter-tab');
  const cards = document.querySelectorAll('.dest-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-region');

      // Update tab styles
      tabs.forEach(t => {
        t.classList.remove('bg-pink-600', 'text-white');
        t.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      });
      tab.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      tab.classList.add('bg-pink-600', 'text-white');

      // Filter cards
      cards.forEach(card => {
        const cardRegion = card.getAttribute('data-region');
        if (category === 'all' || cardRegion === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}
