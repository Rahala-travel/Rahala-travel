/**
 *   
 * س (رحّالة عبر التاريخ)
 * Official Website JavaScript
 * Features: Dark/Light Mode, Full Bilingual i18n (AR/EN), Scroll Animations,
 * Filter Tabs, Destination Modal, Mobile Drawer, WhatsApp Integration.
 */

'use strict';

// --------------------------------------------------------------------------
// 1. BILINGUAL TRANSLATION DICTIONARY (Arabic & English)
// --------------------------------------------------------------------------
const translations = {
  ar: {
    // Meta & Brand
    meta_title: "رحّالة عبر التاريخ | شركة سياحة وتوعية أثرية",
    meta_description: "رحّالة عبر التاريخ تقدم تجارب سياحية مميزة تربط الإنسان بتاريخ مصر وآثارها وثقافتها وتراثها. جولات تاريخية، توعية أثرية، واستكشاف أصيل.",
    brand_name: "رحّالة عبر التاريخ",
    brand_subtitle: "Rahala Through History",
    
    // Nav links
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "خدماتنا",
    nav_destinations: "وجهاتنا",
    nav_experiences: "تجاربنا",
    nav_latest_posts: "أحدث المقالات",
    nav_blog: "المدونة",
    nav_why_us: "لماذا رحّالة",
    nav_timeline: "المسيرة",
    nav_contact: "تواصل معنا",
    header_cta_btn: "احجز رحلتك",
    ticker_label: "آخر الأخبار",

    // Latest Posts & Blog
    latest_posts_tag: "أحدث المقالات",
    latest_posts_title: "استكشف أحدث المقالات والقصص التاريخية",
    latest_posts_subtitle: "إضاءات معرفية وتوثيقية تسرد حكايات الحضارة وتراث مصر الخالد عبر العصور.",
    btn_view_all_blog: "تصفح كافة المقالات",
    btn_view_all_blog_text: "تصفح كافة المقالات",
    blog_tag: "مدونة التراث والتوعية الأثرية",
    blog_title: "مدونة رحّالة عبر التاريخ",
    blog_subtitle: "موسوعة مقالات متخصصة مصنفة عبر أربعة عصور رئيسية ترسم ملامح الهوية والتاريخ المصري.",
    cat_all: "جميع المقالات",
    cat_ancient: "مصر القديمة",
    cat_islamic: "مصر الإسلامية",
    cat_coptic: "مصر القبطية",
    cat_modern: "مصر الحديثة",
    btn_publish_article: "إضافة ونشر مقال جديد",
    btn_read_post: "اقرأ المقال بالكامل",
    article_share_label: "مشاركة المقال أو الاستفسار:",
    article_share_btn: "تواصل معنا حول هذا المقال عبر واتساب",
    pub_modal_title: "إضافة ونشر مقال جديد في المدونة",
    pub_modal_sub: "املأ تفاصيل المقال وسينشر مباشرة في المدونة وأحدث المقالات.",
    pub_label_title: "عنوان المقال *",
    pub_label_cat: "التصنيف التاريخي *",
    pub_label_author: "اسم الكاتب",
    pub_label_image: "رابط صورة الغلاف (URL) *",
    pub_presets_label: "أو اختر صورة جاهزة:",
    pub_label_excerpt: "ملخص المقال (يظهر في بطاقة المدونة) *",
    pub_label_content: "نص المقال الكامل *",
    pub_btn_submit: "نشر المقال على الفور",
    toast_publish_success: "تم نشر المقال بنجاح وإضافته إلى المدونة!",
    cat_opt_ancient: "🏛️ مصر القديمة (Ancient Egypt)",
    cat_opt_islamic: "🕌 مصر الإسلامية (Islamic Egypt)",
    cat_opt_coptic: "⛪ مصر القبطية (Coptic Egypt)",
    cat_opt_modern: "🏙️ مصر الحديثة (Modern Egypt)",

    // Hero
    hero_badge: "شركة سياحة وتوعية أثرية • تأسست 2024",
    hero_title: "اكتشف مصر من خلال التاريخ",
    hero_desc: "رحّالة عبر التاريخ تقدم تجارب سياحية مميزة تربط الإنسان بتاريخ مصر وآثارها وثقافتها وتراثها.",
    hero_cta_primary: "استكشف تجاربنا",
    hero_cta_secondary_text: "تواصل معنا",
    stat_1_title: "توعية أثرية شاملة",
    stat_1_sub: "تأصيل للمعرفة التاريخية",
    stat_2_title: "استكشاف وتوثيق",
    stat_2_sub: "وجهات مصرية فريدة",
    stat_3_title: "تأسست 25 سبتمبر 2024",
    stat_3_sub: "انطلاقة برؤية متجددة",

    // About Us
    about_tag: "عن رحّالة عبر التاريخ",
    about_title: "رحلة تتجاوز المكان.. لنروي قصة الحضارة",
    about_lead: "رحّالة عبر التاريخ هي شركة سياحة تأسست في 25 سبتمبر 2024، تكرس جهودها لخلق تجارب استثنائية في جميع أنحاء مصر، مع تعزيز الوعي بالتراث الأثري والتاريخي والثقافي للبلاد.",
    about_text_p1: "تأسست الشركة انطلاقاً من إيمان عميق بأن السياحة ليست مجرد زيارة مواقع، بل هي جسر معرفي حي يربط الإنسان بعراقة الماضي. نحن نجمع بين شغف الاستكشاف، والدقة التاريخية، والتوعية الأثرية، لنقدم للمسافر تجربة حقيقية تمنحه فهماً أعمق لحضارة مصر الخالدة.",
    about_badge_label: "تاريخ التأسيس",
    pillar_1_title: "شغف بالتاريخ المصري",
    pillar_1_desc: "دراسة ورواية قصص الحضارة من مصادرها الأصيلة.",
    pillar_2_title: "توعية أثرية هادفة",
    pillar_2_desc: "نشر المعرفة الأثرية والحفاظ على الإرث الثقافي.",
    pillar_3_title: "استكشاف ثقافي أصيل",
    pillar_3_desc: "معايشة العادات والتقاليد والعمارة المصرية عبر العصور.",
    pillar_4_title: "تجارب تعليمية وترفيهية",
    pillar_4_desc: "مزيج متكامل يجمع بين الفائدة والمتعة وروح المغامرة.",
    about_quote_text: '"السفر أكثر من مجرد الوصول إلى وجهة.. إنه اكتشاف الحكاية الكامنة وراءها."',

    // Services
    services_tag: "خدماتنا المتخصصة",
    services_title: "حلول سياحية وتجارب استكشافية متكاملة",
    services_subtitle: "نقدم مجموعة متكاملة من الخدمات السياحية المصممة بعناية لتلبي تطلعات عشاق التاريخ ومحبي الاستكشاف والمعرفة.",
    service_btn_inquire: "استفسر الآن",
    service_1_title: "جولات تاريخية",
    service_1_desc: "تجارب احترافية لاستكشاف المعالم التاريخية في مصر، من الأهرامات الشامخة إلى قلاع ومعابد الحضارات المتعاقبة، بأسلوب سردي مشوق.",
    service_1_f1: "زيارات للمعالم والمتاحف الكبرى",
    service_1_f2: "شروحات تاريخية موثقة ودقيقة",
    service_1_f3: "مسارات مخصصة للأفراد والمجموعات",
    
    service_2_title: "التوعية الأثرية",
    service_2_desc: "برامج ومبادرات نوعية تهدف لتعريف الزوار والجمهور بالتراث الأثري المصري، وفهم أسرار العمارة والنقوش وحماية المواقع الأثرية.",
    service_2_f1: "قراءة الرموز والنقوش التاريخية",
    service_2_f2: "جلسات توعية وتثقيف بالمواقع",
    service_2_f3: "تعزيز ثقافة صون الآثار المصرية",

    service_3_title: "جولات ثقافية",
    service_3_desc: "اكتشف ثقافة مصر وتقاليدها وعمارتها وتراثها الشعبي في أزقة القاهرة الفاطمية، وأسواق الإسكندرية، وقرى النوبة الساحرة.",
    service_3_f1: "معايشة التراث الحي والفنون التقليدية",
    service_3_f2: "جولات في الأحياء والأسواق التاريخية",
    service_3_f3: "تفاعل مباشر مع البيئات الثقافية المتنوعة",

    service_4_title: "رحلات تعليمية",
    service_4_desc: "تجارب سياحة تعليمية مصممة للتعلم من خلال الاستكشاف التفاعلي والميداني، موجهة للطلاب والباحثين وعشاق المعرفة المتعمقة.",
    service_4_f1: "محتوى علمي وتاريخي منظم",
    service_4_f2: "أنشطة تفاعلية واستكشاف ميداني",
    service_4_f3: "مناسبة للمؤسسات والمدارس والجامعات",

    service_5_title: "تجارب التراث",
    service_5_desc: "تجارب فريدة تقرب الزوار من الأماكن التراثية والقصص الإنسانية والحرف التقليدية التي تناقلتها الأجيال المصرية عبر آلاف السنين.",
    service_5_f1: "معايشة قصص الأماكن وشخصياتها",
    service_5_f2: "مسارات تراثية غير تقليدية",
    service_5_f3: "توثيق حي للذاكرة الشعبية والتاريخية",

    service_6_title: "رحلات ترفيهية واستكشافية",
    service_6_desc: "تجارب سفر ممتعة تجمع بين الاسترخاء والمغامرة والترفيه واستكشاف الطبيعة الساحرة في الواحات والشواطئ والصحراء المصرية.",
    service_6_f1: "رحلات سفاري وتخييم واستجمام",
    service_6_f2: "أنشطة تجمع الطبيعة والتاريخ",
    service_6_f3: "تنظيم محكم ومريح لكافة التفاصيل",

    // Destinations
    destinations_tag: "وجهاتنا في مصر",
    destinations_title: "معالم وحكايات في كل شبر من أرض الكنانة",
    destinations_subtitle: "استكشف باقة واسعة من أجمل الوجهات التاريخية والطبيعية والتراثية التي تغطي جغرافيا مصر الغنية.",
    filter_all: "جميع الوجهات",
    filter_history: "القاهرة والتراث",
    filter_upper: "صعيد مصر والنيل",
    filter_coastal: "الساحل والقناة",
    filter_desert: "الواحات والمحميات",
    dest_btn_explore: "استكشف الوجهة",
    dest_tag_historic: "تاريخي وثقافي",
    dest_tag_heritage: "عمارة وتراث",
    dest_tag_interfaith: "مجمع الأديان",
    dest_tag_mediterranean: "عروس المتوسط",
    dest_tag_open_museum: "أعظم متحف مفتوح",
    dest_tag_nile: "سحر النيل الهادئ",
    dest_tag_heritage_culture: "تراث وألوان",
    dest_tag_oasis: "واحة الأساطير",
    dest_tag_nature_fossil: "طبيعة وحفريات",
    dest_tag_red_sea: "البحر الأحمر وسينا",
    dest_tag_coastal_resort: "مدينة السلام",
    dest_tag_serenity: "هدوء وطبيعة بكر",
    dest_tag_canal: "المدخل الشمالي للقناة",
    dest_tag_green: "مدينة السحر والجمال",
    dest_tag_protected: "محمية جيولوجية",

    dest_cairo_title: "القاهرة",
    dest_cairo_desc: "مدينة الألف مئذنة، مهد الحضارات، وموطن المتاحف القومية وأهرامات الجيزة الخالدة.",
    dest_islamic_cairo_title: "القاهرة الإسلامية",
    dest_islamic_cairo_desc: "شارع المعز، خان الخليلي، وبوابات الفاطميين والمماليك حيث تلتقي أعظم روائع العمارة الإسلامية.",
    dest_old_cairo_title: "مصر القديمة",
    dest_old_cairo_desc: "مجمع الأديان، الكنيسة المعلقة، جامع عمرو بن العاص، وحصن بابليون في تلاحم تاريخي فريد.",
    dest_alex_title: "الإسكندرية",
    dest_alex_desc: "عروس البحر المتوسط، مكتبة الإسكندرية، قلعة قايتباي، والآثار الغارقة ورائحة البحر العتيقة.",
    dest_luxor_title: "الأقصر",
    dest_luxor_desc: "طيبة القديمة، معابد الكرنك والأقصر، ووادي الملوك والملكات حيث يرقد ملوك مصر العظام.",
    dest_aswan_title: "أسوان",
    dest_aswan_desc: "بوابة مصر الجنوبية، معبد فيلة، المسلة الناقصة، وجزر النيل الخلابة بجوار السد العالي.",
    dest_nubia_title: "النوبة",
    dest_nubia_desc: "البيوت الملونة، كرم الضيافة النوبي، واللغة والعادات المتوارثة على ضفاف نيل أسوان الساحر.",
    dest_siwa_title: "واحة سيوة",
    dest_siwa_desc: "معبد الوحي، قلعة شالي، عيون كليوباترا الطبيعية، وبحيرات الملح الخلابة في قلب الصحراء الغربية.",
    dest_fayoum_title: "الفيوم",
    dest_fayoum_desc: "وادي الحيتان المصنف تراثاً عالمياً، بحيرة قارون، شلالات وادي الريان، وقرية تونس للفخار.",
    dest_dahab_title: "دهب",
    dest_dahab_desc: "عاصمة الغوص والاستجمام، البلو هول، الكانيون، والمحميات الطبيعية بين جبال سيناء الشاهقة.",
    dest_sharm_title: "شرم الشيخ",
    dest_sharm_desc: "محمية رأس محمد، خليج نعمة، والشعاب المرجانية العالمية مع تجارب الغوص الترفيهية الفاخرة.",
    dest_nuweiba_title: "نويبع",
    dest_nuweiba_desc: "شواطئ بكر هادئة، الكانيون الملون، وتجارب التخييم البدوي الأصيل تحت سماء خليج العقبة المرصعة بالنجوم.",
    dest_portsaid_title: "بورسعيد",
    dest_portsaid_desc: "المدينة الباسلة، طراز العمارة الكولونيالي الفرنسي، مبنى هيئة قناة السويس، وتاريخ كفاح لا يُنسى.",
    dest_ismailia_title: "الإسماعيلية",
    dest_ismailia_desc: "بحيرة التمساح، الحدائق الفرنسية، متحف آثار الإسماعيلية، وإرث تاريخي وثيق بحفر قناة السويس.",
    dest_degla_title: "وادي دجلة",
    dest_degla_desc: "محمية طبيعية في قلب المعادي بالقاهرة، تكوينات جيرية يعود عمرها لملايين السنين ورحلات هايكنج مميزة.",

    // Experiences
    experiences_tag: "طبيعة تجاربنا",
    experiences_title: "لا ننظم مجرد رحلات.. بل نصنع تجارب حية",
    experiences_subtitle: "كل تجربة مع رحّالة عبر التاريخ مصممة لتروي حكاية المكان، وتتيح لك معايشة التراث بروح الاستكشاف والمغامرة.",
    exp_1_title: "استكشاف تاريخي معمق",
    exp_1_desc: "الغوص في أعماق السجلات التاريخية وفهم السياق الحضاري لكل معلم تزوره.",
    exp_2_title: "جولات أثرية متخصصة",
    exp_2_desc: "شروحات ميدانية تثري فهمك لأساليب البناء والنقوش والرموز الأثرية الفريدة.",
    exp_3_title: "تجارب ثقافية حية",
    exp_3_desc: "معايشة نمط الحياة والتراث الشعبي والحرف اليدوية والمأكولات التقليدية الأصيلة.",
    exp_4_title: "رحلات اليوم الواحد",
    exp_4_desc: "برامج مكثفة ومرتبة بدقة لاستكشاف معالم مميزة والعودة في نفس اليوم بأعلى درجات الراحة.",
    exp_5_title: "زيارات تعليمية وبحثية",
    exp_5_desc: "أنشطة موجهة للشباب والطلاب والباحثين لبناء وعي أثري وتاريخي راسخ وموثق.",
    exp_6_title: "مسارات التراث والمشي",
    exp_6_desc: "جولات مشي في شوارع وأزقة المدن التاريخية لاستكشاف تفاصيل لا تظهر بالمركبات.",
    exp_7_title: "مغامرات الصحراء والواحات",
    exp_7_desc: "سفاري في بحور الرمال، ووديان الحفريات، والعيون الطبيعية والتخييم تحت النجوم.",
    exp_8_title: "رحلات ساحلية وبحرية",
    exp_8_desc: "استجمام على شواطئ البحرين الأحمر والمتوسط، مع استكشاف التاريخ البحري لمدن القناة.",
    exp_9_title: "تجارب الإقامة والمبيت",
    exp_9_desc: "رحلات ممتدة لعدة أيام تمنحك فرصة الاندماج الكامل في أجواء الوجهة وتفاصيلها الليلية.",

    // Why Rahala
    why_us_tag: "لماذا تختارنا",
    why_us_title: "ما الذي يجعل رحّالة عبر التاريخ وجهتك الأولى؟",
    why_us_subtitle: "نؤمن أن السفر الحقيقي يبدأ حين تفهم المعنى وتتصل بروح المكان.",
    why_1_title: "شغف حقيقي بالتراث المصري",
    why_1_desc: "فريقنا ينطلق من حب صادق لتاريخ مصر ورغبة حقيقية في نقل عظمته بصورة تليق به.",
    why_2_title: "تجارب سياحية متفردة",
    why_2_desc: "نبتعد عن البرامج النمطية ونقدم مسارات استكشافية متعمقة تفتح آفاقاً جديدة للمسافر.",
    why_3_title: "وعي تاريخي وأثري متأصل",
    why_3_desc: "نركز على تقديم معلومات تاريخية دقيقة تعزز الوعي بقيمة كل أثر ومبنى وموقع.",
    why_4_title: "منهجية تعليمية ممتعة",
    why_4_desc: "نحول المعرفة الأثرية المعقدة إلى قصص وروايات جذابة وسلسة تناسب كافة الفئات العمرية.",
    why_5_title: "برامج مصممة بعناية فائقة",
    why_5_desc: "تخطيط دقيق للجداول والمواعيد ووسائل الراحة لضمان تجربة سياحية سلسة وممتعة.",
    why_6_title: "تركيز على الهوية والأصالة",
    why_6_desc: "معايشة حقيقية لمصر وثقافتها وطبيعتها الإنسانية بعيداً عن الصور المصطنعة.",
    why_banner_tag: "رسالتنا الجوهرية",
    why_banner_title: '"السفر أكثر من مجرد الوصول إلى وجهة.. إنه اكتشاف الحكاية الكامنة وراءها."',

    // Timeline
    timeline_tag: "مسيرة الشركة",
    timeline_title: "خطوات واثقة وتطلعات مستقبلية",
    timeline_subtitle: "منذ انطلاقتنا الرسمية في القاهرة، نرسم مساراً واضحاً نحو الريادة في السياحة التاريخية والتوعية الأثرية.",
    tl_date_1: "25 سبتمبر 2024",
    tl_1_title: "التأسيس الرسمي لشركة رحّالة عبر التاريخ",
    tl_1_desc: "انطلاق شركة \"رحّالة عبر التاريخ\" كشركة سياحة وتوعية أثرية بمدينة نصر في القاهرة، بهدف تقديم تجارب نوعية تربط الزوار بالحضارة المصرية.",
    tl_date_future: "مرحلة قادمة",
    tl_2_title: "توسيع الوجهات السياحية والتاريخية",
    tl_2_desc: "إضافة مسارات سياحية جديدة تغطي كافة المحافظات والمواقع الأثرية غير المكتشفة في صحاري مصر وواحاتها وضفاف نيلها.",
    tl_3_title: "إطلاق الفعاليات والبرامج الثقافية والتعليمية",
    tl_3_desc: "تنظيم ورش عمل وندوات تفاعلية وجولات ميدانية مخصصة لتعزيز الوعي الأثري والمجتمعي بالتراث الوطني.",
    tl_4_title: "التوسع المستقبلي في التجارب الاستكشافية",
    tl_4_desc: "تطوير برامج سياحية متكاملة تستهدف استقطاب عشاق الاستكشاف والتاريخ من مختلف أنحاء العالم إلى أرض مصر.",

    // Call to Action
    cta_tag: "ابدأ مغامرتك القادمة",
    cta_title: "رحلتك القادمة لها حكاية",
    cta_desc: "انضم إلى رحّالة عبر التاريخ واكتشف مصر من منظور مختلف.. حيث التاريخ ينبض بالحياة في كل خطوة.",
    cta_btn_contact: "تواصل معنا",
    cta_btn_destinations_text: "استكشف الوجهات",

    // Contact
    contact_tag: "تواصل معنا",
    contact_title: "نسعد باستفساراتكم وبدء التخطيط لرحلتكم",
    contact_subtitle: "تواصل معنا مباشرة عبر الهاتف أو الواتساب، أو تفضل بزيارة مقرنا بمدينة نصر في القاهرة.",
    contact_company_label: "اسم الشركة",
    contact_company_val: "رحّالة عبر التاريخ (Rahala Through History)",
    contact_activity_val: "شركة سياحة وتوعية أثرية",
    contact_address_label: "العنوان والمقر",
    contact_address_val: "٧٣ شارع أبو داوود الظاهري، بجوار النادي الأهلي، مدينة نصر، القاهرة، مصر",
    contact_phone_label: "الهاتف / واتساب",
    contact_phone_val: "01016643479",
    contact_whatsapp_btn: "محادثة واتساب فورية",
    contact_call_btn: "اتصال هاتفي",
    contact_social_label: "منصات التواصل الاجتماعي",
    contact_social_val: "Rahala Through History | رحّالة عبر التاريخ",

    // Contact Form
    form_title: "أرسل استفسارك أو احجز رحلتك",
    form_subtitle: "املأ البيانات وسيقوم فريقنا بالتواصل معك وتزويدك بكافة التفاصيل عبر واتساب.",
    form_name_label: "الاسم الكامل *",
    form_name_placeholder: "اكتب اسمك هنا",
    form_phone_label: "رقم الهاتف / واتساب *",
    form_service_label: "الخدمة أو الوجهة المطلوبة",
    opt_historical: "جولات تاريخية",
    opt_archaeological: "توعية أثرية",
    opt_cultural: "جولات ثقافية",
    opt_educational: "رحلات تعليمية",
    opt_heritage: "تجارب التراث",
    opt_recreational: "رحلات ترفيهية واستكشافية",
    opt_custom: "تنسيق رحلة خاصة أو استفسار عام",
    form_message_label: "رسالتك أو تفاصيل الاستفسار",
    form_msg_placeholder: "اكتب تفاصيل استفسارك وعدد الأفراد المفضل والتاريخ المناسب...",
    form_submit_btn: "إرسال الاستفسار عبر واتساب",
    cta_whatsapp_now: "تواصل عبر واتساب",
    float_wa_tooltip: "تحدث معنا على واتساب",

    // Footer
    footer_desc: "شركة سياحة وتوعية أثرية متخصصة في صناعة تجارب استكشافية تربط الإنسان بتاريخ مصر وآثارها وثقافتها وتراثها العريق.",
    footer_social_label: "تابعنا على وسائل التواصل:",
    footer_links_title: "روابط سريعة",
    footer_services_title: "خدماتنا",
    footer_contact_title: "معلومات الاتصال",
    footer_est: "تأسست: 25 سبتمبر 2024",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_slogan: "رحّالة عبر التاريخ — سافر، اكتشف، وعش الحكاية.",

    // Modal
    modal_highlights_title: "أبرز معالم وتجارب الوجهة:",
    modal_book_btn: "احجز رحلتك لهذه الوجهة عبر واتساب"
  },

  en: {
    // Meta & Brand
    meta_title: "Rahala Through History | Tourism & Archaeological Awareness",
    meta_description: "Rahala Through History creates unique tourism experiences that connect people with Egypt's history, archaeology, culture, and heritage.",
    brand_name: "Rahala Through History",
    brand_subtitle: "رحّالة عبر التاريخ",
    
    // Nav links
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Our Services",
    nav_destinations: "Destinations",
    nav_experiences: "Experiences",
    nav_latest_posts: "Latest Posts",
    nav_blog: "Blog",
    nav_why_us: "Why Rahala",
    nav_timeline: "Timeline",
    nav_contact: "Contact Us",
    header_cta_btn: "Book Your Journey",
    ticker_label: "Latest News",

    // Latest Posts & Blog
    latest_posts_tag: "Latest Articles",
    latest_posts_title: "Explore Our Latest Historical Stories & Insights",
    latest_posts_subtitle: "Illuminating articles narrating the stories and timeless legacy of Egyptian civilization.",
    btn_view_all_blog: "Browse All Articles",
    btn_view_all_blog_text: "Browse All Articles",
    blog_tag: "Heritage & Archaeological Blog",
    blog_title: "Rahala Through History Blog",
    blog_subtitle: "Specialized articles categorized across four main eras defining Egyptian identity and history.",
    cat_all: "All Articles",
    cat_ancient: "Ancient Egypt",
    cat_islamic: "Islamic Egypt",
    cat_coptic: "Coptic Egypt",
    cat_modern: "Modern Egypt",
    btn_publish_article: "+ Publish New Article",
    btn_read_post: "Read Full Article",
    article_share_label: "Share or Inquire about this Article:",
    article_share_btn: "Connect with Us on WhatsApp",
    pub_modal_title: "Add & Publish New Article to Blog",
    pub_modal_sub: "Fill in the article details to publish instantly to the blog and latest posts.",
    pub_label_title: "Article Title *",
    pub_label_cat: "Historical Category *",
    pub_label_author: "Author Name",
    pub_label_image: "Cover Image URL *",
    pub_presets_label: "Or pick a preset image:",
    pub_label_excerpt: "Article Excerpt (shown on card) *",
    pub_label_content: "Full Article Content *",
    pub_btn_submit: "Publish Article Now",
    toast_publish_success: "Article published successfully and added to the Blog!",
    cat_opt_ancient: "🏛️ Ancient Egypt (مصر القديمة)",
    cat_opt_islamic: "🕌 Islamic Egypt (مصر الإسلامية)",
    cat_opt_coptic: "⛪ Coptic Egypt (مصر القبطية)",
    cat_opt_modern: "🏙️ Modern Egypt (مصر الحديثة)",

    // Hero
    hero_badge: "Tourism Company & Archaeological Awareness • Est. 2024",
    hero_title: "Discover Egypt Through History",
    hero_desc: "Rahala Through History creates unique tourism experiences that connect people with Egypt's history, archaeology, culture, and heritage.",
    hero_cta_primary: "Explore Our Experiences",
    hero_cta_secondary_text: "Contact Us",
    stat_1_title: "Archaeological Awareness",
    stat_1_sub: "Deepening Historical Knowledge",
    stat_2_title: "Exploration & Discovery",
    stat_2_sub: "Unique Egyptian Destinations",
    stat_3_title: "Established Sept 25, 2024",
    stat_3_sub: "Driven by Heritage & Passion",

    // About Us
    about_tag: "About Rahala Through History",
    about_title: "A Journey Beyond Destinations.. Living the Story",
    about_lead: "Rahala Through History is a tourism company established on September 25, 2024, dedicated to creating memorable journeys across Egypt while promoting awareness of the country's archaeological, historical, and cultural heritage.",
    about_text_p1: "Founded on the core belief that travel is more than visiting landmarks; it is a vital bridge connecting people to the richness of history. We merge genuine passion for exploration with authentic historical accuracy and archaeological appreciation.",
    about_badge_label: "Date of Establishment",
    pillar_1_title: "Passion for Egyptian History",
    pillar_1_desc: "Studying and narrating civilizational stories from authentic sources.",
    pillar_2_title: "Archaeological Awareness",
    pillar_2_desc: "Fostering awareness and appreciation for ancient monuments and relics.",
    pillar_3_title: "Authentic Cultural Discovery",
    pillar_3_desc: "Immersing visitors into Egyptian traditions, folklore, and timeless architecture.",
    pillar_4_title: "Educational & Recreational Balance",
    pillar_4_desc: "Harmonizing profound knowledge with delightful adventure and comfort.",
    about_quote_text: '"Travel is more than reaching a destination. It is discovering the story behind it."',

    // Services
    services_tag: "Our Specialized Services",
    services_title: "Curated Travel & Heritage Experiences",
    services_subtitle: "We offer an integrated suite of tourism and cultural programs tailored for history enthusiasts, explorers, and curious travelers.",
    service_btn_inquire: "Inquire Now",
    service_1_title: "Historical Tours",
    service_1_desc: "Professional experiences exploring Egypt's iconic historical landmarks, ancient pyramids, and majestic fortresses through captivating storytelling.",
    service_1_f1: "Visits to major archaeological landmarks & museums",
    service_1_f2: "Documented, precise historical narratives",
    service_1_f3: "Customized routes for individuals and groups",

    service_2_title: "Archaeological Awareness",
    service_2_desc: "Specialized initiatives designed to introduce visitors to Egypt's archaeological heritage, hieroglyphs, architectural marvels, and preservation values.",
    service_2_f1: "Deciphering symbols & ancient inscriptions",
    service_2_f2: "On-site awareness and educational briefings",
    service_2_f3: "Promoting preservation culture for Egypt's antiquities",

    service_3_title: "Cultural Tours",
    service_3_desc: "Discover Egyptian culture, traditions, folk arts, and architecture across the historic alleys of Cairo, Alexandria, and picturesque Nubia.",
    service_3_f1: "Living heritage & traditional craftsmanship",
    service_3_f2: "Guided walks through historic markets and alleys",
    service_3_f3: "Direct immersion with diverse local communities",

    service_4_title: "Educational Trips",
    service_4_desc: "Educational tourism experiences tailored for learning through field exploration, crafted for students, researchers, and knowledge seekers.",
    service_4_f1: "Structured academic and historical curricula",
    service_4_f2: "Interactive field tasks and exploratory sessions",
    service_4_f3: "Tailored for schools, universities, and institutions",

    service_5_title: "Heritage Experiences",
    service_5_desc: "Unique experiences bringing travelers closer to historic places, human stories, and timeless folklore handed down over generations.",
    service_5_f1: "Reliving tales of historical figures and locations",
    service_5_f2: "Unconventional, off-the-beaten-path heritage tracks",
    service_5_f3: "Vibrant documentation of folk and historical memory",

    service_6_title: "Recreational Trips",
    service_6_desc: "Enjoyable travel experiences combining relaxation, adventure, and exploration across Egyptian oases, pristine coasts, and golden deserts.",
    service_6_f1: "Desert safaris, camping, and scenic retreats",
    service_6_f2: "Blending pristine nature with ancient history",
    service_6_f3: "Seamless organization and tailored comfort",

    // Destinations
    destinations_tag: "Our Destinations in Egypt",
    destinations_title: "Stories & Wonders Across the Land of the Nile",
    destinations_subtitle: "Explore an extensive spectrum of historic, natural, and coastal destinations spanning Egypt's rich geographic landscape.",
    filter_all: "All Destinations",
    filter_history: "Cairo & Heritage",
    filter_upper: "Upper Egypt & Nile",
    filter_coastal: "Coast & Suez Canal",
    filter_desert: "Oases & Reserves",
    dest_btn_explore: "Explore Destination",
    dest_tag_historic: "Historic & Cultural",
    dest_tag_heritage: "Architecture & Heritage",
    dest_tag_interfaith: "Interfaith Complex",
    dest_tag_mediterranean: "Pearl of the Mediterranean",
    dest_tag_open_museum: "World's Greatest Open Museum",
    dest_tag_nile: "Tranquil Nile Magic",
    dest_tag_heritage_culture: "Heritage & Colors",
    dest_tag_oasis: "Oasis of Legends",
    dest_tag_nature_fossil: "Nature & Fossils",
    dest_tag_red_sea: "Red Sea & Sinai",
    dest_tag_coastal_resort: "City of Peace",
    dest_tag_serenity: "Pristine Serenity",
    dest_tag_canal: "Northern Gateway of Suez Canal",
    dest_tag_green: "The Garden City of Egypt",
    dest_tag_protected: "Geological Reserve",

    dest_cairo_title: "Cairo",
    dest_cairo_desc: "The city of a thousand minarets, cradle of civilizations, and home to national museums and the eternal Pyramids of Giza.",
    dest_islamic_cairo_title: "Islamic Cairo",
    dest_islamic_cairo_desc: "Al-Mu'izz Street, Khan el-Khalili, and historic gates where the masterpieces of Islamic architecture shine.",
    dest_old_cairo_title: "Old Cairo",
    dest_old_cairo_desc: "The Interfaith Complex, Hanging Church, Amr ibn al-Aas Mosque, and the Roman Babylon Fortress in unique harmony.",
    dest_alex_title: "Alexandria",
    dest_alex_desc: "The Pearl of the Mediterranean, Bibliotheca Alexandrina, Citadel of Qaitbay, and fascinating sunken antiquities.",
    dest_luxor_title: "Luxor",
    dest_luxor_desc: "Ancient Thebes, Karnak and Luxor temples, and the Valley of the Kings and Queens where pharaohs rest in glory.",
    dest_aswan_title: "Aswan",
    dest_aswan_desc: "Egypt's southern gateway, Philae Temple, the Unfinished Obelisk, and breathtaking Nile cataracts by the High Dam.",
    dest_nubia_title: "Nubia",
    dest_nubia_desc: "Vibrant colored homes, authentic Nubian hospitality, ancient language, and customs along the serene Aswan Nile.",
    dest_siwa_title: "Siwa Oasis",
    dest_siwa_desc: "Temple of the Oracle, Shali Fortress, natural Cleopatra springs, and surreal turquoise salt lakes in the Western Desert.",
    dest_fayoum_title: "Fayoum",
    dest_fayoum_desc: "Wadi Al-Hitan UNESCO World Heritage site, Lake Qarun, Wadi El-Rayan waterfalls, and the artisan Tunis Pottery Village.",
    dest_dahab_title: "Dahab",
    dest_dahab_desc: "The laid-back diving capital, Blue Hole, the Canyon, and natural reserves set between the Sinai mountains and Gulf of Aqaba.",
    dest_sharm_title: "Sharm El Sheikh",
    dest_sharm_desc: "Ras Mohammed National Park, Naama Bay, and world-renowned coral reefs paired with luxury recreational experiences.",
    dest_nuweiba_title: "Nuweiba",
    dest_nuweiba_desc: "Tranquil pristine beaches, the Colored Canyon, and authentic Bedouin desert camping under starlit skies.",
    dest_portsaid_title: "Port Said",
    dest_portsaid_desc: "The heroic Mediterranean city, French colonial architecture, Suez Canal Authority building, and monumental maritime history.",
    dest_ismailia_title: "Ismailia",
    dest_ismailia_desc: "Lake Timsah, lush French gardens, the Ismailia Archaeology Museum, and the historic story of the Suez Canal.",
    dest_degla_title: "Wadi Degla",
    dest_degla_desc: "A stunning natural reserve in the heart of Maadi, Cairo, featuring 50-million-year-old limestone canyons and scenic hiking trails.",

    // Experiences
    experiences_tag: "Our Experience Character",
    experiences_title: "We Don't Just Organize Trips.. We Create Experiences",
    experiences_subtitle: "Every journey with Rahala Through History is crafted to unlock the story behind the destination, blending exploration with deep cultural meaning.",
    exp_1_title: "In-Depth Historical Exploration",
    exp_1_desc: "Delving into authentic records to comprehend the historical context behind every monument you encounter.",
    exp_2_title: "Specialized Archaeological Tours",
    exp_2_desc: "On-site expert guidance unveiling the architectural techniques, hieroglyphs, and symbols of ancient Egypt.",
    exp_3_title: "Living Cultural Immersion",
    exp_3_desc: "Experiencing traditional folklore, local gastronomy, craftsmanship, and community heritage firsthand.",
    exp_4_title: "Curated One-Day Trips",
    exp_4_desc: "Carefully structured full-day itineraries designed to maximize discovery with utmost comfort and punctuality.",
    exp_5_title: "Educational & Research Visits",
    exp_5_desc: "Purposeful programs for students and researchers fostering archaeological awareness and academic rigor.",
    exp_6_title: "Heritage Walking Trails",
    exp_6_desc: "Immersive walking tours through historic alleys uncovering intricate architectural details invisible by vehicle.",
    exp_7_title: "Desert & Oasis Adventures",
    exp_7_desc: "Thrilling desert safaris across fossil valleys, natural springs, and unforgettable stargazing under clear skies.",
    exp_8_title: "Coastal & Maritime Journeys",
    exp_8_desc: "Relaxing retreats along the Red and Mediterranean Seas combined with rich maritime canal history.",
    exp_9_title: "Overnight & Extended Stays",
    exp_9_desc: "Multi-day journeys providing complete immersion into the destination's day and night rhythm.",

    // Why Rahala
    why_us_tag: "Why Choose Us",
    why_us_title: "What Sets Rahala Through History Apart?",
    why_us_subtitle: "We believe true travel begins when you understand the meaning and connect with the spirit of the place.",
    why_1_title: "Genuine Passion for Egyptian Heritage",
    why_1_desc: "Our team is driven by genuine love for Egyptian civilization and a commitment to representing it with honor.",
    why_2_title: "Distinctive Travel Programs",
    why_2_desc: "We avoid generic itineraries, designing immersive journeys that broaden perspectives and stimulate curiosity.",
    why_3_title: "Deep-Rooted Archaeological Awareness",
    why_3_desc: "We prioritize documented historical facts that elevate respect for ancient monuments and historical treasures.",
    why_4_title: "Engaging Storytelling Approach",
    why_4_desc: "We transform complex archaeological concepts into captivating, accessible narratives for all ages.",
    why_5_title: "Meticulously Crafted Itineraries",
    why_5_desc: "Precision planning of schedules, comfortable transport, and tailored amenities for a seamless journey.",
    why_6_title: "Uncompromising Authenticity",
    why_6_desc: "A genuine reflection of Egypt's true spirit, humanity, and living culture free of artificiality.",
    why_banner_tag: "Our Core Motto",
    why_banner_title: '"Travel is more than reaching a destination. It is discovering the story behind it."',

    // Timeline
    timeline_tag: "Company Milestones",
    timeline_title: "Firm Steps & Forward-Looking Vision",
    timeline_subtitle: "From our official launch in Cairo, we are steadily advancing toward leadership in cultural and archaeological tourism.",
    tl_date_1: "September 25, 2024",
    tl_1_title: "Official Foundation of Rahala Through History",
    tl_1_desc: "Rahala Through History was established as a tourism and archaeological awareness company based in Nasr City, Cairo, to connect travelers with Egypt's heritage.",
    tl_date_future: "Upcoming Milestone",
    tl_2_title: "Expansion of Tourism & Historical Destinations",
    tl_2_desc: "Introducing newly mapped cultural itineraries covering undiscovered archaeological gems across Egyptian deserts, oases, and the Nile.",
    tl_3_title: "Launch of Cultural Events & Educational Programs",
    tl_3_desc: "Hosting interactive workshops, awareness seminars, and community field walks to strengthen public engagement with national heritage.",
    tl_4_title: "Future Growth in Exploratory Expeditions",
    tl_4_desc: "Developing integrated expeditions to welcome history lovers and explorers from across the globe to the heart of Egypt.",

    // Call to Action
    cta_tag: "Start Your Next Adventure",
    cta_title: "Your Next Journey Has a Story",
    cta_desc: "Join Rahala Through History and discover Egypt from a different perspective.. where history comes alive with every step.",
    cta_btn_contact: "Contact Us",
    cta_btn_destinations_text: "Explore Destinations",

    // Contact
    contact_tag: "Contact Us",
    contact_title: "We Are Delighted to Answer Your Inquiries",
    contact_subtitle: "Reach out to us directly via Phone or WhatsApp, or visit our office in Nasr City, Cairo.",
    contact_company_label: "Company Name",
    contact_company_val: "Rahala Through History (رحّالة عبر التاريخ)",
    contact_activity_val: "Tourism Company and Archaeological Awareness",
    contact_address_label: "Headquarters Address",
    contact_address_val: "73 Abu Dawoud Al-Zahery Street, Next to Al Ahly Club, Nasr City, Cairo, Egypt",
    contact_phone_label: "Phone / WhatsApp",
    contact_phone_val: "01016643479",
    contact_whatsapp_btn: "Chat on WhatsApp Instantly",
    contact_call_btn: "Direct Phone Call",
    contact_social_label: "Social Media Identity",
    contact_social_val: "Rahala Through History | رحّالة عبر التاريخ",

    // Contact Form
    form_title: "Send Your Inquiry or Book a Trip",
    form_subtitle: "Fill in your details and our team will connect with you via WhatsApp with full details.",
    form_name_label: "Full Name *",
    form_name_placeholder: "Enter your full name",
    form_phone_label: "Phone / WhatsApp *",
    form_service_label: "Service or Destination of Interest",
    opt_historical: "Historical Tours",
    opt_archaeological: "Archaeological Awareness",
    opt_cultural: "Cultural Tours",
    opt_educational: "Educational Trips",
    opt_heritage: "Heritage Experiences",
    opt_recreational: "Recreational Trips",
    opt_custom: "Custom Trip Coordination / General Inquiry",
    form_message_label: "Message / Inquiry Details",
    form_msg_placeholder: "Provide any preferences, group size, preferred dates, or special requests...",
    form_submit_btn: "Send Inquiry via WhatsApp",
    cta_whatsapp_now: "Chat via WhatsApp",
    float_wa_tooltip: "Chat with us on WhatsApp",

    // Footer
    footer_desc: "A tourism company and archaeological awareness organization dedicated to creating exploratory journeys connecting people with Egypt's history, monuments, and heritage.",
    footer_social_label: "Follow us on social media:",
    footer_links_title: "Quick Links",
    footer_services_title: "Our Services",
    footer_contact_title: "Contact Info",
    footer_est: "Established: September 25, 2024",
    footer_rights: "All Rights Reserved.",
    footer_slogan: "Rahala Through History — Travel, Discover, Experience the Story.",

    // Modal
    modal_highlights_title: "Destination Highlights & Key Experiences:",
    modal_book_btn: "Book Your Trip to this Destination via WhatsApp"
  }
};

// --------------------------------------------------------------------------
// 2. DESTINATION DETAILS DATA STORE (For Interactive Modals)
// --------------------------------------------------------------------------
const destinationDetails = {
  cairo: {
    titleAr: "القاهرة | عاصمة التاريخ والتراث",
    titleEn: "Cairo | Capital of History & Heritage",
    img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1000&q=80",
    tagAr: "تاريخي وثقافي",
    tagEn: "Historic & Cultural",
    descAr: "مدينة الألف مئذنة، مهد الحضارات، وموطن المتاحف القومية وأهرامات الجيزة الخالدة. تجمع القاهرة بين عبق التاريخ الفرعوني والإسلامي ونبض الحياة العصرية.",
    descEn: "The city of a thousand minarets, cradle of civilizations, and home to national museums and the eternal Pyramids of Giza, seamlessly blending ancient heritage with vibrant modern life.",
    highlightsAr: [
      "جولات أهرامات الجيزة وهضبة الأهرام مع شروحات أثرية معمقة",
      "زيارات المتحف المصري بالتحرير والمتحف القومي للحضارة المصرية",
      "جولات قلعة صلاح الدين الأيوبي وجامع محمد علي",
      "استكشاف أحياء القاهرة التاريخية وأسواقها التراثية"
    ],
    highlightsEn: [
      "Giza Pyramids and Plateau expeditions with detailed archaeological briefings",
      "Visits to the Egyptian Museum in Tahrir and the National Museum of Egyptian Civilization (NMEC)",
      "Exploration of the Citadel of Saladin and the Mosque of Muhammad Ali",
      "Heritage walks through Cairo's historic quarters and vibrant bazaars"
    ]
  },
  "islamic-cairo": {
    titleAr: "القاهرة الإسلامية | جوهرة العمارة والتراث",
    titleEn: "Islamic Cairo | Jewel of Medieval Architecture",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80",
    tagAr: "عمارة وتراث",
    tagEn: "Architecture & Heritage",
    descAr: "شارع المعز لدين الله الفاطمي وخان الخليلي، حيث تتجمع أعظم مجموعة من الآثار الإسلامية في العالم، من مساجد ومضائف ومدارس وبوابات أثرية تعود للعصور الفاطمية والمملوكية.",
    descEn: "Al-Mu'izz Street and Khan el-Khalili, home to the greatest concentration of medieval Islamic architectural treasures, including Fatimid, Ayyubid, and Mamluk mosques, schools, and gates.",
    highlightsAr: [
      "مسار شارع المعز من باب الفتوح إلى باب زويلة",
      "مجموعة السلطان قلاوون ومسجد الحاكم بأمر الله",
      "جولة خان الخليلي وحي الصاغة ومقاهي التراث",
      "التعرف على فنون الأرابيسك والعمارة والمشربيات"
    ],
    highlightsEn: [
      "Al-Mu'izz historic corridor walk from Bab al-Futuh to Bab Zuweila",
      "Sultan Qalawun complex and Al-Hakim bi-Amr Allah Mosque",
      "Khan el-Khalili artisan market tour and historical coffeehouses",
      "Study of Arabesque woodcraft, mashrabiya architecture, and stone carvings"
    ]
  },
  "old-cairo": {
    titleAr: "مصر القديمة | مجمع الأديان والتاريخ المشترك",
    titleEn: "Old Cairo | The Interfaith Complex & Historic Fort",
    img: "https://images.unsplash.com/photo-1579606032822-1f7df2bcefa8?auto=format&fit=crop&w=1000&q=80",
    tagAr: "مجمع الأديان",
    tagEn: "Interfaith Heritage",
    descAr: "منطقة مجمع الأديان وحصن بابليون الروماني، حيث تتجاور أقدم الكنائس القبطية وجامع عمرو بن العاص أول جامع في إفريقيا ومعبد بن عزرا، في نموذج فريد للتسامح والتاريخ المشترك.",
    descEn: "The Roman Babylon Fortress and Religious Complex, where ancient Coptic churches, the Mosque of Amr ibn al-Aas, and Ben Ezra Synagogue stand side-by-side in unique peaceful coexistence.",
    highlightsAr: [
      "الكنيسة المعلقة وكنيسة أبي سرجة (مغارة العائلة المقدسة)",
      "جامع عمرو بن العاص، أول مسجد شُيّد في إفريقيا",
      "المتحف القبطي وحصن بابليون الروماني",
      "معبد بن عزرا وتاريخ الطوائف القديمة في مصر"
    ],
    highlightsEn: [
      "The Hanging Church and Church of St. Sergius (Holy Family crypt)",
      "Mosque of Amr ibn al-Aas, the first mosque built in Africa",
      "The Coptic Museum and surviving towers of the Roman Babylon Fortress",
      "Ben Ezra Synagogue and centuries of shared cultural history"
    ]
  },
  alexandria: {
    titleAr: "الإسكندرية | عروس البحر المتوسط",
    titleEn: "Alexandria | Pearl of the Mediterranean",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80",
    tagAr: "عروس المتوسط",
    tagEn: "Mediterranean Heritage",
    descAr: "مدينة الإسكندر الأكبر، منارة الفكر القديم، وعاصمة مصر الهيلينستية والرومانية. تشتهر بقلعة قايتباي المقامة على أطلال الفنار القديم ومكتبة الإسكندرية الحديثة والآثار الغارقة.",
    descEn: "Founded by Alexander the Great, the beacon of ancient knowledge and capital of Greco-Roman Egypt, famous for Qaitbay Citadel, Bibliotheca Alexandrina, and sunken coastal antiquities.",
    highlightsAr: [
      "مكتبة الإسكندرية ومتاحفها وصروحها الثقافية",
      "قلعة قايتباي وموقع منارة الإسكندرية الأسطورية",
      "مقابر كوم الشقافة الرومانية وعمود السواري",
      "جولة الكورنيش التاريخي والمسرح الروماني بكوم الدكة"
    ],
    highlightsEn: [
      "Bibliotheca Alexandrina and its specialized historical museums",
      "Citadel of Qaitbay overlooking the site of the ancient Pharos Lighthouse",
      "Catacombs of Kom El Shoqafa and Pompey's Pillar",
      "Corniche heritage walk and the Roman Amphitheatre at Kom El Dikka"
    ]
  },
  luxor: {
    titleAr: "الأقصر | طيبة عاصمة الفراعنة العظام",
    titleEn: "Luxor | Ancient Thebes & The Open-Air Museum",
    img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1000&q=80",
    tagAr: "أعظم متحف مفتوح",
    tagEn: "World's Greatest Open Museum",
    descAr: "عاصمة مصر في عصر الدولة الحديثة، تضم ثلث آثار العالم. معابد الكرنك العظيمة ومعبد الأقصر بالبر الشرقي، ومقابر وادي الملوك ومعبد حتشبسوت بالبر الغربي.",
    descEn: "The ancient capital of the New Kingdom holding a vast portion of world antiquities. Featuring the majestic Karnak & Luxor Temples, Valley of the Kings, and Hatshepsut Temple.",
    highlightsAr: [
      "مجمع معابد الكرنك وطريق الكباش الملحمي",
      "معبد الأقصر وتجربة الإضاءة الليلية الساحرة",
      "مقابر وادي الملوك والملكات ومعبد الدير البحري",
      "تجربة المنطاد الطائر فوق آثار البر الغربي مع شروق الشمس"
    ],
    highlightsEn: [
      "Karnak Temple complex and the monumental Avenue of Sphinxes",
      "Luxor Temple and its breathtaking illuminated night vista",
      "Tombs of the Valley of the Kings, Queens, and Deir el-Bahari",
      "Sunrise hot air balloon flight over West Bank archaeological wonders"
    ]
  },
  aswan: {
    titleAr: "أسوان | بوابة النيل وسحر الجنوب",
    titleEn: "Aswan | Southern Gateway & Nile Cataracts",
    img: "https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1000&q=80",
    tagAr: "سحر النيل الهادئ",
    tagEn: "Tranquil Nile Magic",
    descAr: "مدينة الجرانيت ومعبد إيزيس في جزيرة فيلة، وسد أسوان العالي، والجزر النيلية المحاطة بالصخور الطبيعية في مشهد بانورامي هادئ ومبهر.",
    descEn: "The jewel of southern Egypt, famed for Philae Island Temple, the Unfinished Obelisk, the High Dam, and tranquil Nile felucca sailing around granite cataracts.",
    highlightsAr: [
      "معبد فيلة ومسلة الجرانيت الناقصة",
      "جولة الفلوكة النيلية ومحمية سالوجا وغزال",
      "متحف النوبة التراثي والقرى المحيطة",
      "السد العالي وبحيرة ناصر الشاسعة"
    ],
    highlightsEn: [
      "Philae Temple of Isis and the ancient Unfinished Granite Obelisk",
      "Nile felucca cruise around Saluga and Ghazal protected islands",
      "The Nubian Museum and surrounding cultural monuments",
      "The Aswan High Dam and the expanse of Lake Nasser"
    ]
  },
  nubia: {
    titleAr: "النوبة | أرض الذهب والتراث الحي",
    titleEn: "Nubia | Land of Gold & Living Traditions",
    img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1000&q=80",
    tagAr: "تراث وألوان",
    tagEn: "Heritage & Living Culture",
    descAr: "قرى غرب سهيل وسهل النوبة، حيث المنازل النوبية الملونة بزخارفها المستوحاة من الطبيعة والبيئة، والتقاليد واللغة النوبية الأصيلة وكرم الضيافة الفريد.",
    descEn: "Gharb Soheil and authentic Nubian villages, distinguished by colorful domed architecture, vibrant natural motifs, traditional heritage, and heartwarming southern hospitality.",
    highlightsAr: [
      "زيارة قرية غرب سهيل والبيوت النوبية التقليدية",
      "التعرف على التراث والموسيقى واللغة النوبية",
      "سوق المنتجات والحرف اليدوية النوبية والتوابل",
      "تجارب الشاي والضيافة النوبية على ضفاف النيل"
    ],
    highlightsEn: [
      "Visits to Gharb Soheil village and authentic decorated Nubian homes",
      "Introduction to Nubian music, folklore, and indigenous language",
      "Artisan markets for handmade Nubian crafts, woven baskets, and spices",
      "Traditional tea gatherings on the tranquil banks of the Nile"
    ]
  },
  siwa: {
    titleAr: "واحة سيوة | سحر الصحراء وتاريخ الإسكندر",
    titleEn: "Siwa Oasis | Desert Magic & Oracle Temple",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
    tagAr: "واحة الأساطير",
    tagEn: "Oasis of Legends",
    descAr: "واحة منعزلة في قلب الصحراء الغربية تحتفظ بهويتها الأمازيغية الفريدة، وتضم معبد الوحي حيث توج الإسكندر الأكبر، وقلعة شالي التاريخية، وبحيرات الملح الطبيعية.",
    descEn: "A secluded oasis in the Western Desert preserving its unique Amazigh heritage, home to the Temple of the Oracle where Alexander the Great was crowned, Shali Fortress, and salt lakes.",
    highlightsAr: [
      "معبد آمون (الوحي) وجبل الموتى التاريخي",
      "قلعة شالي المبنية من مادة الكرشيف العتيقة",
      "السباحة في بحيرات الملح وعين كليوباترا الطبيعية",
      "سفاري بحر الرمال الأعظم والتخييم البدوي في الصحراء"
    ],
    highlightsEn: [
      "Temple of the Oracle (Amun) and the historic Mountain of the Dead",
      "Shali Fortress constructed from ancient kershef salt-clay bricks",
      "Floating in therapeutic crystal-clear salt lakes and Cleopatra's Spring",
      "Great Sand Sea 4x4 desert safari and Bedouin starry camping"
    ]
  },
  fayoum: {
    titleAr: "الفيوم | وادي الحيتان والطبيعة الساحرة",
    titleEn: "Fayoum | Wadi Al-Hitan & Scenic Lakes",
    img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1000&q=80",
    tagAr: "طبيعة وحفريات",
    tagEn: "Nature & Fossil Heritage",
    descAr: "أقدم وأقرب واحة للقاهرة، تجمع بين التاريخ والحفريات الجيولوجية النادرة في وادي الحيتان المصنف من اليونسكو، وبحيرة قارون، وشلالات وادي الريان، وقرية تونس للفخار.",
    descEn: "The closest oasis to Cairo, combining 40-million-year-old prehistoric marine fossils at UNESCO-listed Wadi Al-Hitan, Lake Qarun, Wadi El-Rayan waterfalls, and Tunis Pottery Village.",
    highlightsAr: [
      "محمية وادي الحيتان ومتحف الحفريات والتغير المناخي",
      "شلالات وادي الريان وبحيرة قارون وسواقي الهدير",
      "قرية تونس وورش صناعة الفخار اليدوي والأنشطة البيئية",
      "رحلات التزحلق على الرمال بجوار بحيرة ماجيك ليك"
    ],
    highlightsEn: [
      "Wadi Al-Hitan fossil reserve and Climate Change Open Museum",
      "Wadi El-Rayan waterfalls, Lake Qarun, and ancient waterwheels",
      "Tunis artisan village and pottery workshop experiences",
      "Sandboarding down dunes beside the Magic Lake"
    ]
  },
  dahab: {
    titleAr: "دهب | جنة الغوص وجبال سيناء",
    titleEn: "Dahab | Diving Haven & Sinai Mountain Vistas",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    tagAr: "البحر الأحمر وسينا",
    tagEn: "Red Sea & Sinai",
    descAr: "مدينة الاسترخاء والمغامرة على خليج العقبة، تشتهر بموقع البلو هول والكانيون ومحمية أبو جالوم وراس أبو جالوم وبلو لاجون، وسط طبيعة سيناء الخلابة.",
    descEn: "A relaxed coastal town on the Gulf of Aqaba, world-famous for the Blue Hole, the Canyon diving sites, Abu Galum marine reserve, and the Blue Lagoon.",
    highlightsAr: [
      "موقع البلو هول العالمي ومحمية راس أبو جالوم",
      "رحلة البلو لاجون بالقارب والتخييم البحري",
      "مسارات المشي في الكانيون وجبال سيناء الملونة",
      "الأجواء البدوية والاستجمام على الممشى السياحي الهادئ"
    ],
    highlightsEn: [
      "World-famous Blue Hole diving and snorkeling sanctuary",
      "Boat excursion to Abu Galum reserve and the Blue Lagoon",
      "Canyon hiking and colorful rock valley explorations",
      "Authentic Bedouin evenings along the tranquil seaside promenade"
    ]
  },
  sharm: {
    titleAr: "شرم الشيخ | مدينة السلام والشعاب المرجانية",
    titleEn: "Sharm El Sheikh | Marine Reserves & Red Sea Luxury",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    tagAr: "مدينة السلام",
    tagEn: "Marine Paradise",
    descAr: "درة شواطئ البحر الأحمر، تضم محمية رأس محمد ذات الشهرة العالمية ومحمية نبق والشعاب المرجانية الساحرة، وتجمع بين الفخامة والأنشطة البحرية.",
    descEn: "The premier resort hub of the southern Sinai peninsula, featuring the world-renowned Ras Mohammed National Park, Nabq Reserve, and world-class coral reefs.",
    highlightsAr: [
      "محمية رأس محمد وبحيرة المسحورة وغابات المانجروف",
      "رحلات الغوص والسنوركلينج في مضيق تيران",
      "سفاري صحراء سيناء بالدراجات الرباعية وسهرات البدو",
      "خليج نعمة والسوق القديم ومسجد الصحابة المعماري"
    ],
    highlightsEn: [
      "Ras Mohammed National Park, the Magic Lake, and mangrove forests",
      "Scuba diving and snorkeling expeditions around the Straits of Tiran",
      "Sinai desert quad biking and starry Bedouin dinner evenings",
      "Naama Bay, the Old Market, and the iconic Al-Sahaba Mosque"
    ]
  },
  nuweiba: {
    titleAr: "نويبع | سحر الهدوء والشواطئ البكر",
    titleEn: "Nuweiba | Untamed Tranquility & Colored Canyons",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    tagAr: "هدوء وطبيعة بكر",
    tagEn: "Pristine Serenity",
    descAr: "شواطئ بكر هادئة ومخيمات بيئية على شاطئ خليج العقبة، مع قلاع تاريخية كقلعة نويبع، وقربها من الكانيون الملون ووادي الوشواشي الأسطوري.",
    descEn: "A peaceful coastal haven with eco-camps on the Gulf of Aqaba, near historic fortresses, the Colored Canyon, and the freshwater rock pools of Wadi Wishwashi.",
    highlightsAr: [
      "جولة الكانيون الملون بتكويناته الصخرية البديعة",
      "رحلة وادي الوشواشي وعيون المياه العذبة بين الجبال",
      "الإقامة في مخيمات الشاطئ البيئية الهادئة",
      "قلعة نويبع التاريخية وتاريخ قوافل الحج القديمة"
    ],
    highlightsEn: [
      "Colored Canyon trek with dramatic natural geological formations",
      "Wadi Wishwashi hidden freshwater mountain pools",
      "Relaxed eco-lodge beach camping away from city noise",
      "Historic Nuweiba Fortress along ancient pilgrimage routes"
    ]
  },
  portsaid: {
    titleAr: "بورسعيد | المدينة الباسلة وبوابة القناة",
    titleEn: "Port Said | Heroic Port & Suez Canal Gateway",
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80",
    tagAr: "المدخل الشمالي للقناة",
    tagEn: "Suez Canal Gateway",
    descAr: "المدينة التاريخية الواقعة على المدخل الشمالي لقناة السويس، بطرازها المعماري الكولونيالي الإيطالي والفرنسي الخشبي، ومعديات القناة المجانية وتاريخ نضالها الوطني.",
    descEn: "The heroic Mediterranean port at the northern gateway of the Suez Canal, marked by 19th-century French colonial wooden architecture, historic ferries, and proud national history.",
    highlightsAr: [
      "مبنى هيئة قناة السويس التاريخي والممشى السياحي المطل على السفن",
      "ركوب المعدية بين بورسعيد وبورفؤاد ورؤية جبال الملاحات",
      "متحف بورسعيد الحربي ومتحف النصر للفن الحديث",
      "جولة العمارة التاريخية والتسوق في الأسواق الحرة"
    ],
    highlightsEn: [
      "Historic Suez Canal Authority headquarters and ship-viewing walkway",
      "Canal ferry ride between Port Said and Port Fouad & the Salt Mountains",
      "Port Said Military Museum and Victory Modern Art Museum",
      "Colonial architectural walk and traditional coastal markets"
    ]
  },
  ismailia: {
    titleAr: "الإسماعيلية | مدينة الحدائق وعبق القناة",
    titleEn: "Ismailia | Garden City & Canal History",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    tagAr: "مدينة السحر والجمال",
    tagEn: "The Garden City",
    descAr: "مدينة الحدائق الغناء والشوارع المشجرة على ضفاف بحيرة التمساح، شُيدت إبان حفر قناة السويس وتضم منزل دي لسبس ومتحف آثار الإسماعيلية العريق.",
    descEn: "The tranquil Garden City on the shores of Lake Timsah, established during the Suez Canal construction, featuring historic French villas, De Lesseps House, and archaeological treasures.",
    highlightsAr: [
      "متحف آثار الإسماعيلية وفسيفساء العصور القديمة",
      "منزل فرديناند دي لسبس وحي الإفرنج بطرازه الفرنسي",
      "بحيرة التمساح وشواطئ الفيروز الهادئة",
      "طريق نمرة 6 والمجرى الملاحي لقناة السويس الجديدة"
    ],
    highlightsEn: [
      "Ismailia Museum of Antiquities and ancient Greco-Roman mosaics",
      "Ferdinand de Lesseps historic residence and French colonial district",
      "Lake Timsah shoreline and tranquil coastal promenades",
      "Number 6 crossing point overlooking the Suez Canal maritime waterway"
    ]
  },
  wadidegla: {
    titleAr: "وادي دجلة | محمية جيولوجية في قلب القاهرة",
    titleEn: "Wadi Degla | Prehistoric Canyon in Cairo",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
    tagAr: "محمية جيولوجية",
    tagEn: "Geological Canyon",
    descAr: "محمية طبيعية فريدة تقع في منطقة المعادي بالقاهرة، تمتد لأكثر من 60 كيلومتراً وتضم تكوينات جيرية يعود عمرها لملايين السنين، ومسارات هايكنج مميزة.",
    descEn: "A pristine geological canyon reserve located in Maadi, Cairo, boasting 50-million-year-old limestone rock formations, desert wildlife, and popular hiking/biking trails.",
    highlightsAr: [
      "مسارات الهايكنج والمشي في قلب الكانيون الجيري",
      "جولات الدراجات الجبلية (Mountain Biking)",
      "جلسات تأمل وتخييم نهاري وسط سكون الطبيعة",
      "دراسة التكوينات الجيولوجية وحفريات العصر الأيوسيني"
    ],
    highlightsEn: [
      "Scenic hiking and trekking through winding limestone canyon cliffs",
      "Mountain biking across natural desert tracks",
      "Daytime nature relaxation and peaceful outdoor gatherings",
      "Geological field observation of 50-million-year-old Eocene fossils"
    ]
  }
};

// --------------------------------------------------------------------------
// 3. APPLICATION STATE & INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavigation();
  initScrollAnimations();
  initDestinationFilters();
  initDestinationModal();
  initBlogEngine();
  initContactForm();
  initScrollTop();
  initCurrentYear();
  initNewsTicker();
});

// Current active language state ('ar' or 'en')
let currentLang = 'ar';

// --------------------------------------------------------------------------
// 4. THEME CONTROLLER (Dark / Light Mode)
// --------------------------------------------------------------------------
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  
  // Default is dark mode unless user previously chose light mode
  const savedTheme = localStorage.getItem('rahala_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('rahala_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0e17' : '#ffffff');
    }
  }
}

// --------------------------------------------------------------------------
// 5. LANGUAGE & i18n CONTROLLER (Arabic / English)
// --------------------------------------------------------------------------
function initLanguage() {
  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');

  // Check saved language preference or default to Arabic
  const savedLang = localStorage.getItem('rahala_lang') || 'ar';
  setLanguage(savedLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(nextLang);
      localStorage.setItem('rahala_lang', nextLang);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    const isAr = lang === 'ar';
    const dict = translations[lang];

    // 1. Update HTML tag direction and language attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    // 2. Update language switcher button label (shows alternate target)
    if (langLabel) {
      langLabel.textContent = isAr ? 'EN' : 'عربي';
    }

    // 3. Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // 4. Update data-i18n-attr elements (for placeholders, meta, etc.)
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      const [attrName, key] = spec.split(':');
      if (attrName && key && dict[key]) {
        el.setAttribute(attrName, dict[key]);
      }
    });

    // 5. Update browser document title
    if (dict.meta_title) {
      document.title = dict.meta_title;
    }

    // 6. Refresh Blog & Latest Posts rendering in the selected language
    if (typeof renderLatestPosts === 'function') {
      renderLatestPosts();
    }
    if (typeof renderBlogGrid === 'function') {
      const activeFilterBtn = document.querySelector('.blog-filter-btn.active');
      const activeCat = activeFilterBtn ? activeFilterBtn.getAttribute('data-blog-category') : 'all';
      renderBlogGrid(activeCat);
    }

    // 7. Refresh news ticker in the selected language
    if (typeof window.__tickerLangCallback === 'function') {
      window.__tickerLangCallback(lang);
    }
  }
}

// --------------------------------------------------------------------------
// 6. NAVIGATION & HEADER CONTROLLER
// --------------------------------------------------------------------------
function initNavigation() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileClose = document.getElementById('mobile-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id], header[id="hero"]');

  // Sticky header background transition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    highlightActiveNavLink();
  }, { passive: true });

  // Highlight active link on scroll
  function highlightActiveNavLink() {
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  // Mobile Drawer Toggle Actions
  function openMobileMenu() {
    mobileDrawer.classList.add('is-open');
    mobileOverlay.classList.add('is-open');
    mobileToggle.classList.add('is-active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('is-open');
    mobileOverlay.classList.remove('is-open');
    mobileToggle.classList.remove('is-active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Escape key closes mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });
}

// --------------------------------------------------------------------------
// 7. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
// --------------------------------------------------------------------------
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('is-revealed');
          }, delay);
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

// --------------------------------------------------------------------------
// 8. DESTINATIONS CATEGORY FILTERS
// --------------------------------------------------------------------------
function initDestinationFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const destCards = document.querySelectorAll('.dest-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      destCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

// --------------------------------------------------------------------------
// 9. DESTINATION DETAIL MODAL (Interactive Exploration)
// --------------------------------------------------------------------------
function initDestinationModal() {
  const modal = document.getElementById('destination-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalWhatsAppBtn = document.getElementById('modal-whatsapp-btn');

  // Attach click listeners to all open-modal buttons
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const destId = btn.getAttribute('data-open-modal');
      openModal(destId);
    });
  });

  function openModal(destId) {
    const data = destinationDetails[destId];
    if (!data) return;

    const isAr = currentLang === 'ar';

    modalImg.src = data.img;
    modalImg.alt = isAr ? data.titleAr : data.titleEn;
    modalTag.textContent = isAr ? data.tagAr : data.tagEn;
    modalTitle.textContent = isAr ? data.titleAr : data.titleEn;
    modalDesc.textContent = isAr ? data.descAr : data.descEn;

    // Populate Highlights
    modalHighlights.innerHTML = '';
    const highlights = isAr ? data.highlightsAr : data.highlightsEn;
    highlights.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalHighlights.appendChild(li);
    });

    // Formulate pre-filled WhatsApp link
    const destinationName = isAr ? data.titleAr : data.titleEn;
    const waText = isAr 
      ? `مرحباً، أود الاستفسار وحجز رحلة إلى وجهة: ${destinationName} مع رحّالة عبر التاريخ.`
      : `Hello, I would like to inquire and book a journey to: ${destinationName} with Rahala Through History.`;
    
    modalWhatsAppBtn.href = `https://wa.me/201016643479?text=${encodeURIComponent(waText)}`;

    // Display modal
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

// --------------------------------------------------------------------------
// 10. CONTACT / INQUIRY FORM TO WHATSAPP DISPATCHER
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const serviceSelect = document.getElementById('form-service');
    const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
    const message = document.getElementById('form-message').value.trim();

    if (!name || !phone) {
      alert(currentLang === 'ar' ? 'يرجى إدخال الاسم ورقم الهاتف للمتابعة.' : 'Please enter your name and phone number to continue.');
      return;
    }

    // Format Structured WhatsApp Inquiry Message
    let waMessage = '';
    if (currentLang === 'ar') {
      waMessage = `*استفسار جديد من موقع رحّالة عبر التاريخ*\n\n` +
                  `👤 *الاسم:* ${name}\n` +
                  `📱 *الهاتف:* ${phone}\n` +
                  `🏛 *الخدمة / الوجهة:* ${serviceText}\n` +
                  (message ? `📝 *التفاصيل:* ${message}\n\n` : `\n`) +
                  `يرجى تزويدي بكافة التفاصيل والبرامج المتاحة. شكراً لكم!`;
    } else {
      waMessage = `*New Inquiry from Rahala Through History Website*\n\n` +
                  `👤 *Name:* ${name}\n` +
                  `📱 *Phone:* ${phone}\n` +
                  `🏛 *Service / Destination:* ${serviceText}\n` +
                  (message ? `📝 *Details:* ${message}\n\n` : `\n`) +
                  `Please provide me with full itinerary details and availability. Thank you!`;
    }

    // Official WhatsApp URL for official phone: 01016643479 (+201016643479)
    const targetUrl = `https://wa.me/201016643479?text=${encodeURIComponent(waMessage)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  });
}

// --------------------------------------------------------------------------
// 11. SCROLL TO TOP BUTTON
// --------------------------------------------------------------------------
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scroll-top');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('is-visible');
    } else {
      scrollTopBtn.classList.remove('is-visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// --------------------------------------------------------------------------
// 12. DYNAMIC YEAR
// --------------------------------------------------------------------------
function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// --------------------------------------------------------------------------
// 13. BLOG & ARCHAEOLOGICAL AWARENESS ENGINE
// --------------------------------------------------------------------------

// Default Rich Articles Data across 4 Categories
const defaultBlogPosts = [
  {
    id: "pyramids-engineering",
    category: "ancient",
    date: "2024-10-15",
    authorAr: "فريق رحّالة عبر التاريخ",
    authorEn: "Rahala Editorial Team",
    readTimeAr: "5 دقائق قراءة",
    readTimeEn: "5 min read",
    img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1000&q=80",
    titleAr: "أسرار بناء الأهرامات وعمارة الخلود في مصر القديمة",
    titleEn: "Secrets of the Pyramids and the Architecture of Eternity",
    excerptAr: "كيف استطاع المهندس المصري القديم تشييد عجيبة الدنيا الوحيدة الباقية؟ رحلة علمية في أسرار الهندسة، ومصادر الحجر الجيري، والتنظيم البشري الفريد لهرم خوفو الأكبر.",
    excerptEn: "How did ancient Egyptian architects erect the only surviving wonder of the ancient world? A scientific inquiry into geometry, limestone sourcing, and workforce mastery.",
    contentAr: `
      <p>تظل أهرامات الجيزة، وعلى رأسها الهرم الأكبر للملك خوفو، واحدة من أعظم المعجزات المعمارية والهندسية التي عرفتها البشرية على مر العصور. بني هذا الصرح الشامخ قبل أكثر من 4500 عام ليكون مقبرة ملكية ورمزاً للخلود والارتقاء إلى السماء وفق المعتقدات المصرية القديمة.</p>
      
      <blockquote>"إن عمارة الأهرامات لم تكن مجرد تكديس للأحجار، بل كانت منظومة متكاملة تجمع بين الفلك، والرياضيات، والتنظيم الاجتماعي الفائق."</blockquote>
      
      <p>تشير أحدث الاكتشافات الأثرية إلى أن بناء الهرم الأكبر استلزم أكثر من 2.3 مليون كتلة حجرية، بمتوسط وزن 2.5 طن للكتلة الواحدة. واستخدم العمال المصريون القدماء تقنيات انحدار مائي ومنحدرات رملية وجيرية محكمة لنقل وتثبيت هذه الكتل بدقة متناهية لا تتجاوز فيها الفجوات بين الأحجار أجزاء من المليمتر.</p>
      
      <p>كما تكشف قرية العمال بناة الأهرام التي تم العثور عليها في هضبة الجيزة عن مستوى الرعاية الطبية والغذائية الرفيعة التي حظي بها هؤلاء البناة الأحرار، مما ينفي تماماً الخرافات القديمة حول السخرة أو الكائنات الفضائية، ويثبت عبقرية العقل والتنظيم المصري القديم.</p>
    `,
    contentEn: `
      <p>The Pyramids of Giza, spearheaded by the Great Pyramid of Khufu, stand as one of humanity's finest architectural and engineering triumphs. Erected over 4,500 years ago, this monumental edifice served as a royal tomb and an enduring symbol of eternal ascension.</p>
      
      <blockquote>"Pyramid architecture was not merely the stacking of stone, but an integrated synthesis of astronomy, applied geometry, and exceptional societal organization."</blockquote>
      
      <p>Recent archaeological findings confirm that the construction of the Great Pyramid demanded approximately 2.3 million stone blocks, each averaging 2.5 tons. Ancient Egyptian engineers implemented sophisticated canal waterways, counterweighted sleds, and limestone ramps to position these colossal blocks with sub-millimeter precision.</p>
      
      <p>Furthermore, excavations of the Builders' Village on the Giza plateau demonstrate the advanced dietary, medical, and social care granted to these free craftsmen, wholly debunking archaic myths of forced labor and showcasing the undisputed genius of ancient Egyptian organization.</p>
    `
  },
  {
    id: "al-muizz-street",
    category: "islamic",
    date: "2024-11-20",
    authorAr: "فريق رحّالة عبر التاريخ",
    authorEn: "Rahala Editorial Team",
    readTimeAr: "6 دقائق قراءة",
    readTimeEn: "6 min read",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80",
    titleAr: "شارع المعز: أعظم متحف مفتوح للعمارة الإسلامية في العالم",
    titleEn: "Al-Mu'izz Street: The World's Greatest Islamic Open-Air Museum",
    excerptAr: "جولة تاريخية في قلب القاهرة الفاطمية بين باب الفتوح وباب زويلة، حيث تتجمع أعظم نماذج الزخرفة الإسلامية، والمقرنصات، ومآذن العصور المتعاقبة.",
    excerptEn: "A historical stroll through the heart of Fatimid Cairo between Bab al-Futuh and Bab Zuweila, home to the finest minarets, arabesques, and medieval monuments.",
    contentAr: `
      <p>يمتد شارع المعز لدين الله الفاطمي في قلب القاهرة التاريخية بطول نحو كيلومتر واحد، حاملاً بين جنباته أكبر تجمع للآثار الإسلامية المعمارية في العالم. أُسس الشارع مع تخطيط مدينة القاهرة الفاطمية عام 969 ميلادية على يد القائد جوهر الصقلي.</p>
      
      <blockquote>"كل زاوية في شارع المعز تروي قصة عصر: من الفاطميين الذين بنوا جوامع النور، إلى المماليك الذين شيدوا مجمعات المدارس والمستشفيات والقباب المفرغة."</blockquote>
      
      <p>عند دخولك من باب الفتوح شمالاً، يستقبلك جامع الحاكم بأمر الله بجدرانه المهيبة ومئذنتيه الفريدتين، لتصل بعدها إلى مجمع السلطان المنصور قلاوون ومسجد ومدرسة الظاهر برقوق، وهي صروح تجسد الذروة الزخرفية للعمارة المملوكية بنوافذها الجصية ونقوشها الرخامية البديعة.</p>
      
      <p>وينتهي الشارع جنوباً عند باب زويلة التاريخي، حيث تطل مئذنتا جامع المؤيد شيخ لتعانقا سماء القاهرة، معلنتين أن هذه المدينة كانت وما زالت عاصمة خالدة للفن والجمال والتراث الإنساني.</p>
    `,
    contentEn: `
      <p>Al-Mu'izz li-Din Allah al-Fatimi Street spans approximately one kilometer in historic Cairo, boasting the highest density of medieval architectural treasures anywhere in the Islamic world. The corridor was laid out when Cairo was founded in 969 AD by the general Jawhar al-Siqilli.</p>
      
      <blockquote>"Every turn on Al-Mu'izz Street tells the tale of an era: from the Fatimids who designed sanctuaries of light to the Mamluks who built monumental schools, hospitals, and lattice-domed complexes."</blockquote>
      
      <p>Entering from the northern gate of Bab al-Futuh, visitors are greeted by the fortress-like Al-Hakim Mosque with its iconic twin minarets, proceeding southward toward the awe-inspiring Sultan Qalawun complex and Barquq Madrasa, landmarks representing the pinnacle of Mamluk marble inlays and stucco carvings.</p>
      
      <p>The journey culminates at the historic southern gate of Bab Zuweila, crowned by the twin minarets of the Mosque of Sultan al-Mu'ayyad, testament to Cairo's timeless status as a metropolis of culture, art, and human heritage.</p>
    `
  },
  {
    id: "hanging-church",
    category: "coptic",
    date: "2024-12-18",
    authorAr: "فريق رحّالة عبر التاريخ",
    authorEn: "Rahala Editorial Team",
    readTimeAr: "4 دقائق قراءة",
    readTimeEn: "4 min read",
    img: "https://images.unsplash.com/photo-1579606032822-1f7df2bcefa8?auto=format&fit=crop&w=1000&q=80",
    titleAr: "الكنيسة المعلقة وحصن بابليون: ملحمة التراث القبطي في مصر القديمة",
    titleEn: "The Hanging Church & Babylon Fortress: Coptic Heritage in Old Cairo",
    excerptAr: "حكاية الكنيسة التي شُيدت فوق بوابات الحصن الروماني بدون ركائز أرضية مباشرة، وأيقوناتها الأثرية النادرة وتاريخ مجمع الأديان الفريد.",
    excerptEn: "The tale of the ancient church constructed directly above the Roman fortress bastions, featuring rare historic icons and deep interfaith heritage.",
    contentAr: `
      <p>تعد الكنيسة المعلقة (كنيسة السيدة العذراء مريم) في حي مصر القديمة واحدة من أقدم وأجمل الكنائس القبطية في مصر والعالم. سميت بـ "المعلقة" لأنها بنيت على برجين من الأبراج الحصينة لحصن بابليون الروماني القديم، مرتفعة عن سطح الأرض دون أن ترتكز على أعمدة أرضية تقليدية.</p>
      
      <blockquote>"تجسد الكنيسة المعلقة ومجمع الأديان المحيط بها جوهر الشخصية المصرية الجامعة التي تتناغم فيها الحضارات والأديان بتسامح أزلي."</blockquote>
      
      <p>يعود تاريخ تأسيس الكنيسة إلى القرون الميلادية الأولى، وتتميز بسقفها الخشبي المشيد على هيئة سفينة نوح (طراز البازيليكا)، وحجابها الخشبي المطعم بخشب الأبنوس وعاج الفيل المصنوع بحرفية بالغة النقاء تعود للقرن الثاني عشر الميلادي.</p>
      
      <p>وتحتوي الكنيسة على أكثر من 110 أيقونة أثرية نادرة، فضلاً عن كونها مقراً تاريخياً لبطاركة الكرازة المرقسية لعدة قرون، مما يجعل زيارتها تجربة روحية وتاريخية لا مثيل لها.</p>
    `,
    contentEn: `
      <p>The Hanging Church (Saint Virgin Mary's Coptic Orthodox Church) in Old Cairo is among the oldest and most architecturally captivating sanctuaries in Egypt. It earned its moniker because it was constructed suspended over the gatehouse towers of the Roman Fortress of Babylon.</p>
      
      <blockquote>"The Hanging Church and the surrounding Religious Compound symbolize the foundational essence of Egyptian harmony and intercultural coexistence."</blockquote>
      
      <p>With origins dating back to the earliest Christian centuries, the basilica features a wooden barrel-vaulted roof shaped like Noah's Ark, flanked by an intricately inlaid ebony and ivory iconostasis crafted during the 12th century.</p>
      
      <p>Housing over 110 venerated ancient icons and having served as the historic seat of Coptic Patriarchs for centuries, a visit to this sanctuary offers an incomparable historical and spiritual journey.</p>
    `
  },
  {
    id: "suez-canal-history",
    category: "modern",
    date: "2025-01-28",
    authorAr: "فريق رحّالة عبر التاريخ",
    authorEn: "Rahala Editorial Team",
    readTimeAr: "5 دقائق قراءة",
    readTimeEn: "5 min read",
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80",
    titleAr: "شريان الحضارة الحديثة: كيف أعادت قناة السويس رسم خريطة العالم",
    titleEn: "Artery of Modernity: How the Suez Canal Reshaped Global History",
    excerptAr: "تاريخ مدن القناة: بورسعيد والإسماعيلية والسويس، وعمارتها الخشبية الكولونيالية وملحمة ربط البحرين الأبيض والأحمر.",
    excerptEn: "The story of the Suez Canal cities: Port Said, Ismailia, and Suez, exploring 19th-century French architecture and maritime trade legacy.",
    contentAr: `
      <p>في 17 نوفمبر 1869، شهد العالم افتتاح قناة السويس في حفل أسطوري جمع ملوك وأباطرة العالم في مصر، لتتحقق واحدة من أجرأ الرؤى الهندسية التي غيرت مسار التجارة البحرية واختصرت المسافة بين الشرق والغرب بآلاف الأميال البحرية.</p>
      
      <blockquote>"قناة السويس لم تكن مجرد ممر مائي عالمي، بل كانت ولادة لمدن مصرية حديثة ذات طابع عمراني وثقافي فريد كبورسعيد والإسماعيلية."</blockquote>
      
      <p>نشأت مدينة بورسعيد على المدخل الشمالي للقناة، متميزة بطرازها المعماري الكولونيالي الإيطالي والفرنسي وشرفاتها الخشبية المميزة (الفراندات)، بينما تأسست الإسماعيلية كمدينة حدائقية خضراء تحتضن بحيرة التمساح ومقر هيئة القناة القديم.</p>
      
      <p>واليوم، تظل منطقة القناة شاهداً على نضال الشعب المصري ورموز كفاحه الوطني وتطوره الاقتصادي المستمر حتى تدشين قناة السويس الجديدة، لتظل مصر دائماً قلب العالم النابض.</p>
    `,
    contentEn: `
      <p>On November 17, 1869, the world witnessed the grand inauguration of the Suez Canal in a legendary ceremony uniting world monarchs, realizing an audacious engineering feat that bridged the Mediterranean with the Red Sea.</p>
      
      <blockquote>"The Suez Canal was far more than a global maritime waterway; it sparked the birth of iconic modern Egyptian cities with unique architectural character."</blockquote>
      
      <p>Port Said flourished at the canal's northern entrance, famed for its distinct French and Italian colonial facades with wooden verandas, while Ismailia was conceived as a lush garden city surrounding Lake Timsah and the historic canal administrative headquarters.</p>
      
      <p>Today, the canal zone endures as a living monument to Egyptian resilience, modern nation-building, and pivotal global commerce.</p>
    `
  },
  {
    id: "valley-of-kings",
    category: "ancient",
    date: "2024-11-02",
    authorAr: "فريق رحّالة عبر التاريخ",
    authorEn: "Rahala Editorial Team",
    readTimeAr: "5 دقائق قراءة",
    readTimeEn: "5 min read",
    img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1000&q=80",
    titleAr: "وادي الملوك: نقوش تحكي رحلة الشمس إلى العالم الآخر",
    titleEn: "Valley of the Kings: Inscriptions of the Solar Journey",
    excerptAr: "استكشاف مقابر ملوك الفراعنة في البر الغربي بالأقصر، وأسرار كتاب الموتى والنقوش الملونة المحفوظة عبر آلاف السنين.",
    excerptEn: "Exploring the royal tombs of the West Bank in Luxor, unveiling the secrets of the Book of the Dead and pristine astronomical ceilings.",
    contentAr: `
      <p>في وادٍ صخري منعزل خلف جبال البر الغربي بمدينة الأقصر (طيبة القديمة)، اختار ملوك الدولة الحديثة أن تكون مقابرهم محفورة في عمق الجبل بعيداً عن أعين لصوص المقابر، تحت قمة جبلية طبيعية تشبه الهرم تسمى "القرن".</p>
      
      <blockquote>"تحتفظ مقابر وادي الملوك بألوان زاهية ونقوش دقيقة تبدو وكأن الفنان المصري القديم قد انتهى من رسمها بالأمس فقط."</blockquote>
      
      <p>تضم المقابر، مثل مقبرة الملك رمسيس السادس ومقبرة توت عنخ آمون وسيتي الأول، فصولاً كاملة من كتب العالم الآخر مثل "كتاب البوابات" و"كتاب الكهوف" و"كتاب الموتى"، والتي ترسم بالتفصيل رحلة إله الشمس 'رع' عبر ساعات الليل الاثنتي عشرة حتى يولد من جديد مع كل فجر.</p>
      
      <p>تمثل زيارة هذا الوادي فرصة لاكتشاف الفلسفة الجنائزية العميقة التي ألهمت الحضارة المصرية وخلدت أسماء ملوكها عبر التاريخ.</p>
    `,
    contentEn: `
      <p>In a secluded canyon beneath the desert cliffs of Luxor's West Bank, New Kingdom pharaohs concealed their rock-cut tombs deep within the stone, sheltered beneath a natural pyramid-shaped mountain known as 'Al-Qurn'.</p>
      
      <blockquote>"The tombs of the Valley of the Kings retain vivid mineral pigments and hieroglyphs that look as though they were painted only yesterday."</blockquote>
      
      <p>Tombs such as those of Seti I, Ramesses VI, and Tutankhamun feature complete depictions of underworld funerary compositions, including the Book of Gates and Book of Caverns, detailing the sun god Ra's nocturnal transformation before rebirth at dawn.</p>
      
      <p>Exploring this valley provides a profound window into the philosophical and spiritual worldview that guided ancient Egypt throughout the millennia.</p>
    `
  },
  {
    id: "mamluk-citadels",
    category: "islamic",
    date: "2024-12-05",
    authorAr: "فريق رحّالة عبر التاريخ",
    authorEn: "Rahala Editorial Team",
    readTimeAr: "4 دقائق قراءة",
    readTimeEn: "4 min read",
    img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1000&q=80",
    titleAr: "قلاع وقباب المماليك: عبقرية التخطيط والزخرفة الحجرية",
    titleEn: "Mamluk Domes and Fortresses: Architectural Genius",
    excerptAr: "كيف شكلت الدولة المملوكية الوجه المعماري الخالد للقاهرة من خلال القباب المعشقة والمقرنصات والمدارس الأثرية المتقنة.",
    excerptEn: "How the Mamluk Sultanate defined Cairo's skyline with intricate stone-carved domes, stalactite vaults, and majestic madrasas.",
    contentAr: `
      <p>تركت دولة المماليك (1250 - 1517 م) إرثاً معمارياً يعد الأكثر إبهاراً في تاريخ العمارة الإسلامية. وقد عُرف سلاطين وأمراء المماليك بشغفهم بتشييد المجمعات المعمارية الضخمة التي تجمع بين المسجد والمدرسة والمستشفى (البيمارستان) وخانقاه الصوفية وضريح السلطان.</p>
      
      <blockquote>"تعد القباب الحجرية المنقوشة في عصر المماليك الجراكسة ذروة النحت المعماري في الحجر الجيري دون منازع في الشرق الأوسط."</blockquote>
      
      <p>ويبرز مسجد ومدرسة السلطان حسن بميدان القلعة كأعظم نموذج للعمارة الإسلامية في العالم، بارتفاع جدرانه الشاهقة وإيواناته الأربعة المتسعة، إلى جانب مجمع قايتباي في صحراء المماليك بقبته الحجرية المزخرفة بأشكال نباتية وهندسية بالغة التعقيد.</p>
      
      <p>إن قراءة تفاصيل هذه الأبنية تمنح الزائر فهماً عميقاً لعصر كانت فيه القاهرة عاصمة التجارة والعلم والفن في العالم الإسلامي.</p>
    `,
    contentEn: `
      <p>The Mamluk Sultanate (1250–1517 AD) bequeathed an architectural legacy recognized as the most sophisticated in Islamic history. Mamluk rulers competed in commissioning multi-purpose complexes unifying mosques, madrasas, hospitals, and royal mausoleums.</p>
      
      <blockquote>"The carved stone domes of the late Burji Mamluk era stand as the unmatched zenith of architectural stone sculpting in the Middle East."</blockquote>
      
      <p>The Mosque-Madrasa of Sultan Hassan near the Citadel remains celebrated worldwide for its towering facades and massive cross-axial iwans, alongside the Mosque of Sultan Qaytbay featuring breathtaking geometric arabesques carved into solid stone.</p>
      
      <p>Studying these architectural monuments reveals the golden epoch when Cairo reigned as the beating heart of commerce, knowledge, and artistic excellence.</p>
    `
  },
  {
    id: "holy-family-trail",
    category: "coptic",
    date: "2025-01-10",
    authorAr: "فريق رحّالة عبر التاريخ",
    authorEn: "Rahala Editorial Team",
    readTimeAr: "6 دقائق قراءة",
    readTimeEn: "6 min read",
    img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1000&q=80",
    titleAr: "مسار العائلة المقدسة في مصر: رحلة الهروب إلى أرض الأمان",
    titleEn: "The Holy Family Trail in Egypt: Journey of Sanctuary",
    excerptAr: "توثيق المحطات التاريخية لرحلة العائلة المقدسة عبر شمال سيناء والدلتا ووادي النطرون وصعيد مصر.",
    excerptEn: "Documenting the historic pilgrimage trail of the Holy Family across Sinai, the Nile Delta, Wadi El Natrun, and Upper Egypt.",
    contentAr: `
      <p>يحظى مسار رحلة العائلة المقدسة في مصر بمكانة دينية وتاريخية استثنائية، إذ كانت مصر الملاذ الآمن الذي لجأت إليه السيدة مريم العذراء والسيد المسيح ويوسف النجار هرباً من بطش الملك هيرودس.</p>
      
      <blockquote>"امتدت الرحلة لأكثر من 3500 كيلومتر، تاركة في كل محطة عيناً للماء أو شجرة مباركة أو كنيسة أثرية تروي قصة الأمان والسلام."</blockquote>
      
      <p>بدأت الرحلة من رفح والفرما في شمال سيناء، مروراً ببلبيس وسخا وسمنود في الدلتا، وصولاً إلى شجرة مريم بالمطرية وكنيسة أبي سرجة بمصر القديمة، ثم إلى أديرة وادي النطرون العامرة، وانتقالاً جنوباً إلى دير المحرق بجبل قسقام في أسيوط حيث مكثت العائلة أطول فترة.</p>
      
      <p>يمثل هذا المسار اليوم أحد أهم مسارات الحج والسياحة الدينية والثقافية في العالم، شاهداً على أن مصر كانت عبر التاريخ واحة السلام والأمان لجميع الأمم.</p>
    `,
    contentEn: `
      <p>The Holy Family Trail across Egypt holds unparalleled spiritual and historic importance, honoring the sanctuary sought by the Virgin Mary, the Child Jesus, and Saint Joseph from the persecution of King Herod.</p>
      
      <blockquote>"Spanning over 3,500 kilometers, the journey left behind blessed springs, ancient sycamore trees, and historic monasteries narrating peace and refuge."</blockquote>
      
      <p>The pilgrimage route crossed from Rafah and Pelusium in northern Sinai through the Delta towns of Samannud and Sakha, visiting the Virgin's Tree in Matariya, the crypt of St. Sergius in Old Cairo, the desert monasteries of Wadi El Natrun, and continuing south to the historic Al-Muharraq Monastery in Asyut.</p>
      
      <p>Today, this trail serves as one of the world's most significant cultural and spiritual heritage routes, affirming Egypt's enduring role as a haven of refuge and tolerance.</p>
    `
  },
  {
    id: "khedivial-cairo",
    category: "modern",
    date: "2025-02-14",
    authorAr: "فريق رحّالة عبر التاريخ",
    authorEn: "Rahala Editorial Team",
    readTimeAr: "5 دقائق قراءة",
    readTimeEn: "5 min read",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    titleAr: "القاهرة الخديوية: باريس الشرق والنهضة المعمارية في القرن التاسع عشر",
    titleEn: "Khedivial Cairo: Paris of the East in 19th-Century Egypt",
    excerptAr: "استكشاف شوارع وسط البلد وميدان التحرير وميدان طلعت حرب وتخطيط الخديوي إسماعيل لمصر الحديثة.",
    excerptEn: "Exploring Downtown Cairo, Talaat Harb Square, Belle Époque architecture, and Khedive Ismail's ambitious European-style urban vision.",
    contentAr: `
      <p>في أواخر القرن التاسع عشر، أراد الخديوي إسماعيل أن يجعل من القاهرة "قطعة من أوروبا"، فأطلق مشروع التخطيط العمراني الأضخم في تاريخ مصر الحديث بتشييد ما يعرف اليوم بـ "القاهرة الخديوية" أو منطقة وسط البلد.</p>
      
      <blockquote>"تحتضن القاهرة الخديوية أكثر من 500 مبنى مسجل كطراز معماري متميز يجمع بين الباروك والآرت ديكو والنيوكلاسيك مع لمسات مصرية أصيلة."</blockquote>
      
      <p>تم تخطيط الشوارع على النمط الهوسماني الباريسي بشوارع واسعة تتفرع من ميادين دائرية كبرى مثل ميدان الإسماعيلية (التحرير حالياً) وميدان طلعت حرب وميدان مصطفى كامل، مع تشييد الأوبرا الخديوية وحديقة الأزبكية الشهيرة.</p>
      
      <p>تعد جولات المشي التراثية في وسط البلد اليوم رحلة ممتعة عبر الزمن تتيح للمسافر اكتشاف مقاهي المثقفين العتيقة والممرات السرية وتفاصيل عمارة عصر النهضة المصرية الحديثة.</p>
    `,
    contentEn: `
      <p>During the late 19th century, Khedive Ismail set out to transform Cairo into a premier modern metropolis, launching a grand urban development program that created what is famously known today as Khedivial Cairo (Downtown).</p>
      
      <blockquote>"Downtown Cairo houses over 500 heritage-listed buildings synthesizing Haussmannian Neo-Baroque, Art Deco, and Neo-Classical styles with subtle Egyptian motifs."</blockquote>
      
      <p>Modeled after Parisian boulevards radiating from grand circular piazzas—such as Tahrir and Talaat Harb Squares—the district flourished around the Khedivial Opera House and the Azbakeya public gardens.</p>
      
      <p>Today, heritage walking tours through downtown offer an enchanting stroll through time, discovering historic literary cafes, hidden art passages, and the elegant spirit of modern Egyptian enlightenment.</p>
    `
  }
];

// LocalStorage Helper for Blog Posts
function getBlogPosts() {
  const stored = localStorage.getItem('rahala_blog_posts');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.warn('Could not parse stored blog posts, using defaults.');
    }
  }
  // Initialize with default posts
  localStorage.setItem('rahala_blog_posts', JSON.stringify(defaultBlogPosts));
  return defaultBlogPosts;
}

function saveBlogPosts(posts) {
  localStorage.setItem('rahala_blog_posts', JSON.stringify(posts));
}

// Category Helper
function getCategoryInfo(catKey, lang) {
  const isAr = lang === 'ar';
  const mapping = {
    ancient: {
      label: isAr ? 'مصر القديمة' : 'Ancient Egypt',
      icon: '🏛️',
      badgeClass: 'cat-badge--ancient'
    },
    islamic: {
      label: isAr ? 'مصر الإسلامية' : 'Islamic Egypt',
      icon: '🕌',
      badgeClass: 'cat-badge--islamic'
    },
    coptic: {
      label: isAr ? 'مصر القبطية' : 'Coptic Egypt',
      icon: '⛪',
      badgeClass: 'cat-badge--coptic'
    },
    modern: {
      label: isAr ? 'مصر الحديثة' : 'Modern Egypt',
      icon: '🏙️',
      badgeClass: 'cat-badge--modern'
    }
  };
  return mapping[catKey] || {
    label: isAr ? 'تاريخ وتراث' : 'History & Heritage',
    icon: '📜',
    badgeClass: 'cat-badge--ancient'
  };
}

// Format Date Helper
function formatArticleDate(dateStr, lang) {
  if (!dateStr) return '';
  const dateObj = new Date(dateStr);
  if (isNaN(dateObj.getTime())) return dateStr;
  
  if (lang === 'ar') {
    return dateObj.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
  } else {
    return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}

// --------------------------------------------------------------------------
// 14. RENDER LATEST POSTS SECTION
// --------------------------------------------------------------------------
function renderLatestPosts() {
  const container = document.getElementById('latest-posts-grid');
  if (!container) return;

  const posts = getBlogPosts();
  // Take top 3 most recent posts
  const latest = posts.slice(0, 3);
  const isAr = currentLang === 'ar';

  container.innerHTML = latest.map(post => {
    const catInfo = getCategoryInfo(post.category, currentLang);
    const title = isAr ? post.titleAr : (post.titleEn || post.titleAr);
    const excerpt = isAr ? post.excerptAr : (post.excerptEn || post.excerptAr);
    const author = isAr ? (post.authorAr || 'رحّالة عبر التاريخ') : (post.authorEn || 'Rahala Through History');
    const readTime = isAr ? (post.readTimeAr || '4 دقائق قراءة') : (post.readTimeEn || '4 min read');
    const formattedDate = formatArticleDate(post.date, currentLang);

    return `
      <article class="blog-card" data-post-id="${post.id}" data-reveal="fade-up">
        <div class="blog-card__media">
          <img src="${post.img}" alt="${title}" loading="lazy">
          <span class="article-badge ${catInfo.badgeClass}">
            <span>${catInfo.icon}</span>
            <span>${catInfo.label}</span>
          </span>
        </div>
        <div class="blog-card__body">
          <div>
            <div class="blog-card__meta">
              <span class="blog-card__meta-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>${formattedDate}</span>
              </span>
              <span class="blog-card__meta-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                <span>${readTime}</span>
              </span>
            </div>
            <h3 class="blog-card__title">${title}</h3>
            <p class="blog-card__excerpt">${excerpt}</p>
          </div>
          <div class="blog-card__btn">
            <span>${isAr ? 'اقرأ المقال بالكامل' : 'Read Full Article'}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach click listeners to cards
  container.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.getAttribute('data-post-id');
      openArticleReader(postId);
    });
  });
}

// --------------------------------------------------------------------------
// 15. RENDER MAIN BLOG GRID (With 4 Category Filtering)
// --------------------------------------------------------------------------
function renderBlogGrid(activeCategory = 'all') {
  const container = document.getElementById('blog-grid');
  if (!container) return;

  const posts = getBlogPosts();
  const filtered = (activeCategory === 'all') 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  const isAr = currentLang === 'ar';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 700;">${isAr ? 'لا توجد مقالات في هذا التصنيف حالياً.' : 'No articles found in this category yet.'}</p>
        <p style="font-size: 0.9rem; margin-top: 0.5rem;">${isAr ? 'انقر على "إضافة مقال جديد" لنشر أول مقال في هذا العصر التاريخي!' : 'Click "+ Publish New Article" to add the first article in this category!'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(post => {
    const catInfo = getCategoryInfo(post.category, currentLang);
    const title = isAr ? post.titleAr : (post.titleEn || post.titleAr);
    const excerpt = isAr ? post.excerptAr : (post.excerptEn || post.excerptAr);
    const author = isAr ? (post.authorAr || 'رحّالة عبر التاريخ') : (post.authorEn || 'Rahala Through History');
    const readTime = isAr ? (post.readTimeAr || '5 دقائق قراءة') : (post.readTimeEn || '5 min read');
    const formattedDate = formatArticleDate(post.date, currentLang);

    return `
      <article class="blog-card" data-post-id="${post.id}" data-category="${post.category}">
        <div class="blog-card__media">
          <img src="${post.img}" alt="${title}" loading="lazy">
          <span class="article-badge ${catInfo.badgeClass}">
            <span>${catInfo.icon}</span>
            <span>${catInfo.label}</span>
          </span>
        </div>
        <div class="blog-card__body">
          <div>
            <div class="blog-card__meta">
              <span class="blog-card__meta-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>${formattedDate}</span>
              </span>
              <span class="blog-card__meta-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>${author}</span>
              </span>
            </div>
            <h3 class="blog-card__title">${title}</h3>
            <p class="blog-card__excerpt">${excerpt}</p>
          </div>
          <div class="blog-card__btn">
            <span>${isAr ? 'اقرأ المقال بالكامل' : 'Read Full Article'}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach click listeners to cards
  container.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.getAttribute('data-post-id');
      openArticleReader(postId);
    });
  });
}

// --------------------------------------------------------------------------
// 16. BLOG CATEGORIES FILTER CONTROLLER
// --------------------------------------------------------------------------
function initBlogCategories() {
  const filterBtns = document.querySelectorAll('.blog-filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-blog-category') || 'all';
      renderBlogGrid(cat);
    });
  });
}

// --------------------------------------------------------------------------
// 17. ARTICLE READER MODAL (Open, Populate & View Full Post)
// --------------------------------------------------------------------------
function openArticleReader(postId) {
  const posts = getBlogPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('article-modal');
  const modalImg = document.getElementById('article-modal-img');
  const modalCat = document.getElementById('article-modal-category');
  const modalDate = document.getElementById('article-modal-date');
  const modalAuthor = document.getElementById('article-modal-author');
  const modalReadTime = document.getElementById('article-modal-readtime');
  const modalTitle = document.getElementById('article-modal-title');
  const modalContent = document.getElementById('article-modal-content');
  const shareWaBtn = document.getElementById('article-share-wa');

  const isAr = currentLang === 'ar';
  const catInfo = getCategoryInfo(post.category, currentLang);
  const title = isAr ? post.titleAr : (post.titleEn || post.titleAr);
  const author = isAr ? (post.authorAr || 'رحّالة عبر التاريخ') : (post.authorEn || 'Rahala Through History');
  const readTime = isAr ? (post.readTimeAr || '5 دقائق قراءة') : (post.readTimeEn || '5 min read');
  const content = isAr ? post.contentAr : (post.contentEn || post.contentAr);
  const formattedDate = formatArticleDate(post.date, currentLang);

  modalImg.src = post.img;
  modalImg.alt = title;
  modalCat.className = `article-badge ${catInfo.badgeClass}`;
  modalCat.innerHTML = `<span>${catInfo.icon}</span> <span>${catInfo.label}</span>`;
  modalDate.textContent = formattedDate;
  modalAuthor.textContent = author;
  modalReadTime.textContent = readTime;
  modalTitle.textContent = title;
  modalContent.innerHTML = content;

  // WhatsApp share link for this article
  const waText = isAr
    ? `مرحباً، قرأت مقال "${title}" في مدونة رحّالة عبر التاريخ، وأود الاستفسار عن الجولات والأنشطة المتعلقة به.`
    : `Hello, I read the article "${title}" on Rahala Through History blog and would like to inquire about related tours and experiences.`;
  shareWaBtn.href = `https://wa.me/201016643479?text=${encodeURIComponent(waText)}`;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function initArticleReaderModal() {
  const modal = document.getElementById('article-modal');
  const modalClose = document.getElementById('article-modal-close');
  const modalOverlay = document.getElementById('article-modal-overlay');

  function closeReader() {
    if (modal) {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeReader);
  if (modalOverlay) modalOverlay.addEventListener('click', closeReader);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeReader();
    }
  });
}

// --------------------------------------------------------------------------
// 18. PUBLISH NEW ARTICLE MODAL & FORM CONTROLLER
// --------------------------------------------------------------------------
function initPublishArticleModal() {
  const modal = document.getElementById('publish-modal');
  const openBtn = document.getElementById('open-publish-btn');
  const closeBtn = document.getElementById('publish-modal-close');
  const overlay = document.getElementById('publish-modal-overlay');
  const form = document.getElementById('publish-form');
  const imgInput = document.getElementById('pub-image');
  const presetBtns = document.querySelectorAll('.preset-img-btn');

  function openPublish() {
    if (modal) {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closePublish() {
    if (modal) {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openBtn) openBtn.addEventListener('click', openPublish);
  if (closeBtn) closeBtn.addEventListener('click', closePublish);
  if (overlay) overlay.addEventListener('click', closePublish);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closePublish();
    }
  });

  // Preset Image Picker buttons
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const url = btn.getAttribute('data-img-url');
      if (imgInput && url) {
        imgInput.value = url;
      }
    });
  });

  // Handle Form Submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('pub-title').value.trim();
      const category = document.getElementById('pub-category').value;
      const author = document.getElementById('pub-author').value.trim() || 'رحّالة عبر التاريخ';
      const img = document.getElementById('pub-image').value.trim();
      const excerpt = document.getElementById('pub-excerpt').value.trim();
      const content = document.getElementById('pub-content').value.trim();

      if (!title || !excerpt || !content || !img) {
        alert(currentLang === 'ar' ? 'يرجى إكمال جميع الحقول المطلوبة لنشر المقال.' : 'Please fill in all required fields to publish the article.');
        return;
      }

      // Convert paragraphs in content to HTML paragraphs
      const formattedContent = content
        .split('\n\n')
        .filter(p => p.trim())
        .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
        .join('');

      // Create new article object
      const newPost = {
        id: 'post-' + Date.now(),
        category: category,
        date: new Date().toISOString().split('T')[0],
        authorAr: author,
        authorEn: author,
        readTimeAr: '4 دقائق قراءة',
        readTimeEn: '4 min read',
        img: img,
        titleAr: title,
        titleEn: title,
        excerptAr: excerpt,
        excerptEn: excerpt,
        contentAr: formattedContent,
        contentEn: formattedContent
      };

      // Prepend to posts list & save to localStorage
      const posts = getBlogPosts();
      posts.unshift(newPost);
      saveBlogPosts(posts);

      // Re-render Latest Posts and Blog
      renderLatestPosts();
      
      const activeFilterBtn = document.querySelector('.blog-filter-btn.active');
      const activeCat = activeFilterBtn ? activeFilterBtn.getAttribute('data-blog-category') : 'all';
      renderBlogGrid(activeCat);

      // Reset form and close modal
      form.reset();
      closePublish();

      // Show Toast Notification
      showToast(currentLang === 'ar' ? 'تم نشر المقال بنجاح وإضافته إلى المدونة!' : 'Article published successfully and added to the Blog!');

      // Scroll to blog smoothly
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// --------------------------------------------------------------------------
// 19. TOAST NOTIFICATION HELPER
// --------------------------------------------------------------------------
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('is-show');

  setTimeout(() => {
    toast.classList.remove('is-show');
  }, 3500);
}

// --------------------------------------------------------------------------
// 20. INITIALIZE BLOG ENGINE
// --------------------------------------------------------------------------
function initBlogEngine() {
  renderLatestPosts();
  renderBlogGrid('all');
  initBlogCategories();
  initArticleReaderModal();
  initPublishArticleModal();
}

// --------------------------------------------------------------------------
// 21. NEWS TICKER ENGINE
// --------------------------------------------------------------------------
function initNewsTicker() {
  const ticker = document.getElementById('news-ticker');
  const track  = document.getElementById('ticker-track');
  const closeBtn = document.getElementById('ticker-close');
  if (!ticker || !track || !closeBtn) return;

  // Check if dismissed in this session
  if (sessionStorage.getItem('rahala_ticker_dismissed') === '1') {
    ticker.classList.add('is-hidden');
    document.body.classList.add('ticker-dismissed');
    return;
  }

  // Bilingual ticker items
  const tickerItems = {
    ar: [
      { text: 'مرحباً بكم في رحّالة عبر التاريخ — شركة سياحة وتوعية أثرية', badge: 'جديد', badgeType: 'new', isNew: true },
      { text: 'استكشف أهرامات الجيزة مع جولاتنا التاريخية المتخصصة', badge: null },
      { text: 'رحلات تعليمية للمدارس والجامعات — تواصل معنا اليوم', badge: 'ساخن', badgeType: 'hot' },
      { text: 'أحدث مقالاتنا: اكتشف تاريخ مصر القديمة والإسلامية والقبطية والحديثة', badge: null },
      { text: 'احجز رحلتك الآن عبر واتساب: 01016643479', badge: null },
      { text: 'جولات ثقافية وأثرية في القاهرة التاريخية وأسوان والأقصر', badge: null },
      { text: 'نحن نؤمن أن السفر جسرٌ معرفي يربطك بأعماق الحضارة المصرية', badge: null },
      { text: 'تأسست رحّالة عبر التاريخ في سبتمبر 2024 بشغف أصيل للتراث', badge: null },
    ],
    en: [
      { text: 'Welcome to Rahala Through History — Tourism & Archaeological Awareness', badge: 'New', badgeType: 'new', isNew: true },
      { text: 'Explore the Pyramids of Giza with our specialized historical tours', badge: null },
      { text: 'Educational trips for schools & universities — Contact us today', badge: 'Hot', badgeType: 'hot' },
      { text: 'Latest articles: Ancient, Islamic, Coptic & Modern Egypt — explore now', badge: null },
      { text: 'Book your trip via WhatsApp: 01016643479', badge: null },
      { text: 'Cultural & archaeological tours in Historic Cairo, Aswan & Luxor', badge: null },
      { text: 'We believe travel is a bridge connecting you to the depths of Egyptian civilization', badge: null },
      { text: 'Rahala Through History was founded in September 2024 with genuine heritage passion', badge: null },
    ]
  };

  function buildItems(lang) {
    const items = tickerItems[lang] || tickerItems['ar'];
    return items.map(item => {
      const badgeHtml = item.badge
        ? `<span class="ticker__item-badge ticker__item-badge--${item.badgeType || ''}">${item.badge}</span>`
        : '';
      const newClass = item.isNew ? ' ticker__item--new' : '';
      return `<span class="ticker__item${newClass}">${badgeHtml}<span class="ticker__item-dot"></span><span>${item.text}</span></span>`;
    }).join('');
  }

  function renderTicker(lang) {
    // Double the items for seamless infinite scroll
    const single = buildItems(lang);
    track.innerHTML = single + single;
  }

  // Initial render
  renderTicker(currentLang);

  // Re-render on language change
  const origSetLang = window.__setLanguageOrig;
  // Hook into setLanguage by storing a callback
  window.__tickerLangCallback = renderTicker;

  // Close button
  closeBtn.addEventListener('click', () => {
    ticker.classList.add('is-hidden');
    document.body.classList.add('ticker-dismissed');
    sessionStorage.setItem('rahala_ticker_dismissed', '1');
  });

  // Pause on hover (already handled by CSS)
}
