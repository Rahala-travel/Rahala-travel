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
    meta_title: "رحالة عبر التاريخ | شركة سياحة وتوعية أثرية",
    meta_description: "رحالة عبر التاريخ - شركة سياحة وتوعية أثرية في مصر، متخصصة في السفر والرحلات والجولات التاريخية والأثرية داخل مصر.",
    brand_name: "رحّالة عبر التاريخ",
    brand_subtitle: "Rahala Through History",
    
    // Nav links
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "خدماتنا",
    nav_destinations: "وجهاتنا",
    nav_experiences: "تجاربنا",
    nav_latest_posts: "أحدث المقالات",
    nav_library: "المكتبة",
    nav_blog: "المقالات",
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
    blog_tag: "مقالات التراث والتوعية الأثرية",
    blog_title: "مقالات رحّالة عبر التاريخ",
    blog_subtitle: "موسوعة مقالات متخصصة مصنفة عبر خمسة عصور رئيسية ترسم ملامح الهوية والتاريخ المصري والأوروبي.",
    cat_all: "جميع المقالات",
    cat_ancient: "تاريخ مصري قديم",
    cat_islamic: "تاريخ إسلامي",
    cat_coptic: "تاريخ قبطي",
    cat_modern: "تاريخ مصر الحديث",
    cat_europe: "تاريخ أوروبا",
    btn_publish_article: "إضافة ونشر مقال جديد",
    book_blog_tag: "مكتبة المقالات والكتب",
    book_blog_nav: "الكتب",
    book_blog_title: "معارف مكتوبة تستحق القراءة",
    book_blog_subtitle: "مقالات وكتب منشورة مرتبة حسب المجال لتمنحك قراءة أعمق للتاريخ والعلم والثقافة.",
    book_blog_all: "كل الكتب",
    book_blog_scientific: "كتب علمية",
    book_blog_history: "كتب الحضارات والتاريخ",
    book_blog_miscellaneous: "كتب متنوعة",
    book_blog_publish: "نشر كتاب أو مقال",
    book_blog_category: "التصنيف *",
    book_blog_publish_title: "نشر كتاب أو مقال جديد",
    book_blog_publish_sub: "أضف المحتوى وسيظهر فور نشره في تصنيفه.",
    book_blog_publish_submit: "نشر المحتوى",
    book_pdf_upload: "ملف PDF الكتاب",
    book_pdf_upload_hint: "ارفع ملف PDF للكتاب (الحد الأقصى ~5MB)",
    book_pdf_download: "تحميل PDF",
    book_pdf_open: "فتح في نافذة جديدة",
    book_pdf_read: "قراءة",
    book_pdf_no_file: "لم يتم رفع ملف PDF",
    book_pdf_loading: "جاري تحميل الكتاب...",
    book_pdf_error: "تعذر فتح الكتاب للقراءة في هذه النافذة، افتحه في نافذة جديدة أو حمّله.",
    btn_read_post: "اقرأ المقال بالكامل",
    article_share_label: "مشاركة المقال أو الاستفسار:",
    article_share_btn: "تواصل معنا حول هذا المقال عبر واتساب",
    pub_modal_title: "إضافة ونشر مقال جديد في المقالات",
    pub_modal_sub: "املأ تفاصيل المقال وسينشر مباشرة في قسم المقالات وأحدث المقالات.",
    pub_label_title: "عنوان المقال *",
    pub_label_cat: "التصنيف التاريخي *",
    pub_label_author: "اسم الكاتب",
    pub_label_image: "رابط صورة الغلاف (URL) *",
    pub_presets_label: "أو اختر صورة جاهزة:",
    pub_label_excerpt: "ملخص المقال (يظهر في بطاقة المقالات) *",
    pub_label_content: "نص المقال الكامل *",
    pub_btn_submit: "نشر المقال على الفور",
    toast_publish_success: "تم نشر المقال بنجاح وإضافته إلى المقالات!",
    cat_opt_ancient: "🏛️ تاريخ مصري قديم (Ancient Egypt)",
    cat_opt_islamic: "🕌 تاريخ إسلامي (Islamic Egypt)",
    cat_opt_coptic: "⛪ تاريخ قبطي (Coptic Egypt)",
    cat_opt_modern: "🏙️ تاريخ مصر الحديث (Modern Egypt)",
    cat_opt_europe: "🏰 تاريخ أوروبا (European History)",

    // Hero
    hero_badge: "شركة سياحة وتوعية أثرية • تأسست 2023",
    hero_title: "اكتشف مصر من خلال التاريخ",
    hero_desc: "رحّالة عبر التاريخ تقدم تجارب سياحية مميزة تربط الإنسان بتاريخ مصر وآثارها وثقافتها وتراثها.",
    hero_cta_primary: "استكشف تجاربنا",
    hero_cta_secondary_text: "تواصل معنا",
    stat_1_title: "توعية أثرية شاملة",
    stat_1_sub: "تأصيل للمعرفة التاريخية",
    stat_2_title: "استكشاف وتوثيق",
    stat_2_sub: "وجهات مصرية فريدة",
    stat_3_title: "تأسست 25 سبتمبر 2023",
    stat_3_sub: "انطلاقة برؤية متجددة",

    // About Us
    about_tag: "عن رحّالة عبر التاريخ",
    about_title: "رحلة تتجاوز المكان.. لنروي قصة الحضارة",
    about_lead: "رحّالة عبر التاريخ هي شركة سياحة تأسست في 25 سبتمبر 2023 تكرس جهودها لخلق تجارب استثنائية في جميع أنحاء مصر، مع تعزيز الوعي بالتراث الأثري والتاريخي والثقافي للبلاد.",
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
    tl_date_1: "25 سبتمبر 2023",
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
    footer_est: "تأسست: 25 سبتمبر 2023",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_slogan: "رحّالة عبر التاريخ — سافر، اكتشف، وعش الحكاية.",

    // Modal
    modal_highlights_title: "أبرز معالم وتجارب الوجهة:",
    modal_book_btn: "احجز رحلتك لهذه الوجهة عبر واتساب"
  },

  en: {
    // Meta & Brand
    meta_title: "Rahala Through History | Tourism and Archaeological Awareness Company",
    meta_description: "Rahala Through History - a tourism and archaeological awareness company in Egypt, specializing in travel, trips and historical & archaeological tours across Egypt.",
    brand_name: "Rahala Through History",
    brand_subtitle: "رحّالة عبر التاريخ",
    
    // Nav links
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Our Services",
    nav_destinations: "Destinations",
    nav_experiences: "Experiences",
    nav_latest_posts: "Latest Posts",
    nav_library: "Library",
    nav_blog: "Articles",
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
    blog_tag: "Heritage & Archaeological Articles",
    blog_title: "Rahala Through History Articles",
    blog_subtitle: "Specialized articles categorized across five main eras defining Egyptian and European identity and history.",
    cat_all: "All Articles",
    cat_ancient: "Ancient Egypt",
    cat_islamic: "Islamic Egypt",
    cat_coptic: "Coptic Egypt",
    cat_modern: "Modern Egypt",
    cat_europe: "European History",
    btn_publish_article: "+ Publish New Article",
    book_blog_tag: "Books & Written Content",
    book_blog_nav: "Books",
    book_blog_title: "Knowledge Worth Reading",
    book_blog_subtitle: "Published books and articles organized by subject for deeper reading across history, science, and culture.",
    book_blog_all: "All Books",
    book_blog_scientific: "Scientific Books",
    book_blog_history: "Civilizations & History Books",
    book_blog_miscellaneous: "Miscellaneous Books",
    book_blog_publish: "Publish a Book or Article",
    book_blog_category: "Category *",
    book_blog_publish_title: "Publish a New Book or Article",
    book_blog_publish_sub: "Add your content and it will appear in its category once published.",
    book_blog_publish_submit: "Publish Content",
    book_pdf_upload: "Book PDF File",
    book_pdf_upload_hint: "Upload a PDF file for the book (max ~5MB)",
    book_pdf_download: "Download PDF",
    book_pdf_open: "Open in new tab",
    book_pdf_read: "Read",
    book_pdf_no_file: "No PDF file uploaded",
    book_pdf_loading: "Loading book...",
    book_pdf_error: "This book could not be opened for reading in this window. Open it in a new tab or download it.",
    btn_read_post: "Read Full Article",
    article_share_label: "Share or Inquire about this Article:",
    article_share_btn: "Connect with Us on WhatsApp",
    pub_modal_title: "Add & Publish New Article to Blog",
    pub_modal_sub: "Fill in the article details to publish instantly to the articles and latest posts.",
    pub_label_title: "Article Title *",
    pub_label_cat: "Historical Category *",
    pub_label_author: "Author Name",
    pub_label_image: "Cover Image URL *",
    pub_presets_label: "Or pick a preset image:",
    pub_label_excerpt: "Article Excerpt (shown on card) *",
    pub_label_content: "Full Article Content *",
    pub_btn_submit: "Publish Article Now",
    toast_publish_success: "Article published successfully and added to the Articles!",
    cat_opt_ancient: "🏛️ Ancient Egypt (تاريخ مصري قديم)",
    cat_opt_islamic: "🕌 Islamic Egypt (تاريخ إسلامي)",
    cat_opt_coptic: "⛪ Coptic Egypt (تاريخ قبطي)",
    cat_opt_modern: "🏙️ Modern Egypt (تاريخ مصر الحديث)",
    cat_opt_europe: "🏰 European History (تاريخ أوروبا)",

    // Hero
    hero_badge: "Tourism Company & Archaeological Awareness • Est. 2023",
    hero_title: "Discover Egypt Through History",
    hero_desc: "Rahala Through History creates unique tourism experiences that connect people with Egypt's history, archaeology, culture, and heritage.",
    hero_cta_primary: "Explore Our Experiences",
    hero_cta_secondary_text: "Contact Us",
    stat_1_title: "Archaeological Awareness",
    stat_1_sub: "Deepening Historical Knowledge",
    stat_2_title: "Exploration & Discovery",
    stat_2_sub: "Unique Egyptian Destinations",
    stat_3_title: "Established Sept 25, 2023",
    stat_3_sub: "Driven by Heritage & Passion",

    // About Us
    about_tag: "About Rahala Through History",
    about_title: "A Journey Beyond Destinations.. Living the Story",
    about_lead: "Rahala Through History is a tourism company established on September 25, 2023, dedicated to creating memorable journeys across Egypt while promoting awareness of the country's archaeological, historical, and cultural heritage.",
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
    tl_date_1: "September 25, 2023",
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
    footer_est: "Established: September 25, 2023",
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
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
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
  initAdminDashboard();
  handleOpenBookLink();
});

// Current active language state ('ar' or 'en')
let currentLang = 'ar';

// --------------------------------------------------------------------------
// WHATSAPP CONFIG — single source of truth for every WhatsApp button on the site.
// The number must be in full international format WITH the country code and
// WITHOUT any "+", spaces, or leading zeros of the country code.
//   Local number: 01016643479
//   International: +20 10 1664 3479  ->  wa.me number = 201016643479
// Real UAE/Egypt 20-prefixed numbers go here; keep it identical everywhere so
// the same standard link opens a normal chat for BOTH regular WhatsApp and
// WhatsApp Business users, on mobile and desktop.
// --------------------------------------------------------------------------
const RAHALA_WHATSAPP_NUMBER = '201016643479';

// Standard WhatsApp chat link. `wa.me` is the canonical, device-compatible
// format that opens the regular chat for both WhatsApp and WhatsApp Business
// recipients. Optional ?text= pre-fills a message.
function buildWhatsAppLink(text) {
  const base = 'https://wa.me/' + RAHALA_WHATSAPP_NUMBER;
  if (text) return base + '?text=' + encodeURIComponent(text);
  return base;
}

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

  applySiteSettings();

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
    if (typeof renderBookBlogGrid === 'function') renderBookBlogGrid(document.querySelector('[data-book-category].active')?.dataset.bookCategory || 'all');
    // 7. Refresh news ticker in the selected language
    if (typeof window.__tickerLangCallback === 'function') {
      window.__tickerLangCallback(lang);
    }
  }

  window.__setLanguage = setLanguage;
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
    
    modalWhatsAppBtn.href = buildWhatsAppLink(waText);

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
    const targetUrl = buildWhatsAppLink(waMessage);
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
    id: "egyptian-army-old-kingdom",
    category: "ancient",
    date: "2024-05-15",
    authorAr: "عفاف محمد البقاشي",
    authorEn: "Afaf Mohamed El-Bakashi",
    readTimeAr: "8 دقائق قراءة",
    readTimeEn: "8 min read",
    img: "images/army-egypt-article.jpg",
    titleAr: "الحروب والجيش في مصر القديمة — حكاية القوة والصمود عبر التاريخ (عصر الدولة القديمة)",
    titleEn: "Wars and the Army in Ancient Egypt — A Tale of Power and Resilience (Old Kingdom Era)",
    excerptAr: "تُعد الحضارة المصرية القديمة واحدة من أقدم الحضارات التي عرفت نظاماً سياسياً وإدارياً وعسكرياً متطوراً. لم يكن الجيش المصري مجرد قوة تُستخدم في الحروب، بل كان مؤسسة مهمة من مؤسسات الدولة؛ حيث ارتبط بحماية حدود البلاد والدفاع عنها.",
    excerptEn: "The ancient Egyptian civilization stands as one of the earliest to develop an advanced political, administrative and military system. The Egyptian army was not merely a force used in warfare, but an important institution of the state linked to protecting and defending the nation's borders.",
    contentAr: `
      <p><strong>بقلم: عفاف محمد البقاشي</strong></p>
      <p>تُعد الحضارة المصرية القديمة واحدة من أقدم الحضارات التي عرفت نظاماً سياسياً وإدارياً وعسكرياً متطوراً. لم يكن الجيش المصري مجرد قوة تُستخدم في الحروب، بل كان مؤسسة مهمة من مؤسسات الدولة؛ حيث ارتبط بحماية حدود البلاد والدفاع عنها، ثم تطور مع الوقت ليصبح أداة رئيسة لتأمين المصالح المصرية وتوسيع نفوذ الدولة خارج وادي النيل.</p>
      <p>وقد اختلفت طبيعة الجيش المصري باختلاف الظروف السياسية والتاريخية التي مرت بها البلاد؛ ففي الفترات التي تمتعت فيها مصر بالاستقرار الداخلي، اعتمد الجيش بدقة على حماية الحدود وتأمين المناطق الحيوية، بينما زاد دوره بصورة كبيرة خلال فترات الصراع والتوسع.</p>
      <h3>نشأة الجيش المصري وتطوره</h3>
      <p>لم يظهر الجيش المصري بصورة منتظمة فجأة، وإنما مر بمراحل تطور ارتبطت بنشأة الدولة المصرية نفسها. فمع توحيد البلاد وقيم الدولة المركزية، أصبح من الضروري وجود قوة قادرة على حماية السلطة وتأمين الحدود. وكانت جغرافية مصر عاملاً مهماً في تشكيل نظامها العسكري، مما جعل حماية المداخل الطبيعية للبلاد أمراً أساسياً.</p>
      <h3>العناصر الرئيسية في الجيش:</h3>
      <ul>
        <li>جنود التعبئة الذين يتم استدعاؤهم عند الحاجة.</li>
        <li>القوات المرتبطة بحكام الأقاليم لحفظ الأمن المحلي.</li>
      </ul>
      <p>ومع تطور الإدارة المركزية، ازدادت قدرة الدولة على تنظيم القوات وتوفير الأسلحة والمؤن. ولم تكن الحروب ظاهرة ثابتة في كل العصور، بل كانت تزداد أو تقل وفقاً لحالة الدولة وعلاقتها بجيرانها.</p>
      <h3>تنظيم الجيش والقيادة العسكرية</h3>
      <p>كان الملك في قمة السلطة العسكرية في الدولة، والمسؤول الأول عن اتخاذ القرارات المتعلقة بالحملات العسكرية، بينما تولى كبار القادة والموظفين تنفيذ هذه الأوامر. وقد ظهر عدد من المناصب والألقاب العسكرية التي تدل على مستوى عالٍ من التنظيم الإداري.</p>
      <p>ولم يكن الجيش منفصلاً عن مؤسسات الدولة الأخرى، بل كان مرتبطاً بالوزير والإدارة الملكية. وكان "بيت الأسلحة" من المؤسسات المهمة في الإدارة العسكرية منذ الأسرة الثالثة؛ حيث تولى الشؤون الإمدادية للجيش. وفي الأسرة الخامسة، ظهر تنظيم عسكري يراعي تقسيم الوجهين البحري والقبلي لتنظيم الموارد. كما كان بناء السفن جزءاً أصيلاً من النشاط العسكري لنقل الجنود والمعدات عبر النيل، وقد أسند الملوك — مثل الملك بيبي الأول — إدارة هذه الحملات وتجهيزها إلى حكام الأقاليم والقادة الموثوقين (مثل القائد "وني")، مما يوضح ارتباط النشاط العسكري بالخبرات الإدارية في الأقاليم.</p>
      <h3>الأسلحة ووسائل النقل</h3>
      <p>استخدم الجيش المصري في عصر الدولة القديمة مجموعة من الأسلحة التي تناسبت مع طبيعة القتال آنذاك، ومن أهمها:</p>
      <ul>
        <li>القوس والسهام: من أهم أسلحة الرماية للقتال من مسافات بعيدة.</li>
        <li>الرماح: استخدمت في القتال المباشر واختراق صفوف الأعداء.</li>
        <li>العصي والمشاوك: أسلحة بسيطة للقتال القريب.</li>
        <li>الفؤوس والخناجر: استخدمت في الاشتباكات التلاحمية.</li>
        <li>الدروع: خشبية أو مغطاة بالجلود لحماية الجنود.</li>
        <li>السفن الحربية والنهرية: لعبت دوراً محورياً في نقل القوات، والمؤن، والذخائر.</li>
      </ul>
      <h3>دور الجيش في حماية حدود مصر</h3>
      <p>كان الهدف الأساسي للجيش هو حماية حدود البلاد. ورغم أن الموقع الجغرافي وفر حماية طبيعية بالصحاري والبحر المتوسط، إلا أن التهديدات الحدودية كانت قائمة، وتجلت في ثلاث مناطق رئيسية:</p>
      <ul>
        <li>الحدود الجنوبية: مناطق النوبة وتأمين الشلالات.</li>
        <li>الحدود الشرقية: المناطق الصحراوية وسيناء لتأمين مناجم التلبيس والمواد الخام.</li>
        <li>الحدود الغربية: المناطق التي تسكنها الجماعات الليبية.</li>
      </ul>
      <h3>الحملات في بلاد النوبة</h3>
      <p>كانت بلاد النوبة من أهم المناطق التي ارتبطت بالنشاط العسكري المصري في عصر الدولة القديمة؛ لنفوذها الجغرافي ولأنها طريق للتجارة والوصول إلى مناجم الذهب والموارد الطبيعية. لم تهدف الحملات المصرية حينها إلى الاحتلال الاستيطاني، بل إلى تأمين الطرق التجارية، وتأديب الجماعات الثائرة، والحفاظ على الهيبة المصرية. كما شارك عناصر من النوبيين أنفسهم ضمن صفوف القوات المصرية، مما يوضح أن العلاقة لم تكن مجرد صراع عسكري بل شملت التجارة والتحالفات العسكرية.</p>
      <h3>الجيش في أواخر الدولة القديمة</h3>
      <p>بلغ النشاط العسكري أوجَه في الأسرة السادسة، وتحديداً في عهدي الملكين (بيبي الأول) و(مرنـرع)، وظهرت شخصيات قيادية بارزة مثل القائد (وني). ومع ذلك، بدأت الدولة القديمة في أواخر هذه الفترة تعاني من مشكلات الاقتصاد وتراجع السلطة المركزية، مما أدى إلى زيادة نفوذ حكام الأقاليم وتحديات جسيمة واجهها الجيش لحماية البلاد داخلياً وخارجياً.</p>
      <h3>خاتمة</h3>
      <p>كانت المؤسسة العسكرية جزءاً أساسياً من هيكل الدولة المصرية القديمة، ورغم أنها لم تكن دولة توسعية امبراطورية في هذا العصر كما أصبحت لاحقاً في الدولة الحديثة، إلا أن تنظيمها العسكري واللوجستي وضع اللبنات الأولى لواحد من أعظم جيوش العالم القديم.</p>
      <h3>المراجع:</h3>
      <p>سليم حسن: موسوعة مصر القديمة (الجزء الثاني)، مؤسسة هنداوي.<br>عبد الرحمن زكي: الجيش في مصر القديمة، الهيئة المصرية العامة للكتاب، مصر، 2015.<br>مُرَاجعة تاريخيّة وتدقيق لُغوي: محمد محمود الرف<br>وذلك تحت إشراف مبادرة رحّالة عبر التاريخ والنقابة المهنية للسياحيين في مصر لنشر الوعي الثقافي والأثري.<br>مؤسس المبادرة: أ. سميحة محمود.</p>
    `,
    contentEn: `
      <p>The ancient Egyptian civilization is one of the earliest civilizations to develop an advanced political, administrative and military system. The Egyptian army was not merely a force used in warfare but an important state institution linked to protecting the nation's borders, evolving over time into a key instrument for securing Egyptian interests and extending state influence beyond the Nile Valley.</p>
      <p>The nature of the Egyptian army varied according to the political and historical circumstances the country passed through; during periods of internal stability the army focused on border protection, while its role increased significantly during periods of conflict and expansion.</p>
    `
  },
];

// LocalStorage Helper for Blog Posts
function getBlogPosts() {
  const stored = localStorage.getItem('rahala_blog_posts');
  let storedPosts = [];
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) storedPosts = parsed;
    } catch (e) {
      console.warn('Could not parse stored blog posts, using defaults.');
    }
  }
  // The default posts are the authoritative source for the public blog. Their stored
  // copies are rebuilt/reset to the canonical data (so stale images/text never return),
  // while any stored post not present in the defaults is dropped permanently.
  const defaultIds = new Set(defaultBlogPosts.map(p => p && p.id));
  const rebuilt = defaultBlogPosts.map(d => {
    const existing = storedPosts.find(p => p && p.id === d.id);
    return existing ? Object.assign({}, existing, d) : d;
  });
  // Persist the cleaned, canonical list so deleted articles never reappear.
  localStorage.setItem('rahala_blog_posts', JSON.stringify(rebuilt));
  return rebuilt;
}

function saveBlogPosts(posts) {
  localStorage.setItem('rahala_blog_posts', JSON.stringify(posts));
}

const bookBlogStorageKey = 'rahala_book_blog_posts';

// Books published via the Admin "إضافة 6 كتب" batch publisher. Kept separate from
// the default Library books and from the single-book "publish" flow so that existing
// books are never overwritten or cleared. All batch books are history-category.
const batchBooksStorageKey = 'rahala_batch_book_books';

function getBatchBooks() {
  try {
    const arr = JSON.parse(localStorage.getItem(batchBooksStorageKey) || '[]');
    return Array.isArray(arr) ? arr : [];
  } catch (e) { return []; }
}

function saveBatchBooks(books) {
  localStorage.setItem(batchBooksStorageKey, JSON.stringify(books || []));
}

// Default Library books — always available to every visitor, even if Firebase is off.
const defaultLibraryBooks = [
  {
    id: 'book-sharh-al-ajrumiyyah',
    category: 'miscellaneous',
    date: '2026-08-28',
    authorAr: 'العلامة محمد بن محمد بن داود الصنهاجي (نظم)',
    authorEn: 'Ibn Ajurrum (Author) - Al-Ajrumiyyah',
    img: 'images/ajrumiyyah-cover.jpg',
    titleAr: 'شرح نظم الآجرومية',
    titleEn: 'Explanation of the Ajrumiyyah Verses',
    excerptAr: 'شرح منظوم في قواعد النحو والصرف على متن الآجرومية، يقدّم قواعد اللغة العربية بأسلوب نظمي واضح وميسّر للدارسين.',
    excerptEn: 'A versified explanation of Ajurrumiyyah covering Arabic grammar rules in a clear, easy-to-follow poetic form for learners.',
    contentAr: '<p>هذا الكتاب شرح نظمي لمتن الآجرومية في قواعد النحو العربي، يقدّم أبجديات الإعراب وأقسام الكلام بأسلوب منظوم يسهل الحفظ والفهم.</p>',
    contentEn: '<p>This book is a versified explanation of the Ajurrumiyyah text on Arabic grammar, presenting the basics of syntax in an easy poetic form.</p>',
    pdfUrl: 'books/sharh-al-ajrumiyyah.pdf'
  },
  {
    id: 'book-ancient-egypt',
    category: 'history',
    date: '2026-08-29',
    authorAr: 'احمد صالح',
    authorEn: 'احمد صالح',
    img: 'images/ancient-egypt-cover.jpg',
    titleAr: 'التحنيط فلسفة الخلود في مصر القديمة',
    titleEn: 'التحنيط فلسفة الخلود في مصر القديمة',
    excerptAr: 'دراسة في فن التحنيط عند قدماء المصريين، أسراره وأساليبه ومدلوله الديني والحضاري في مصر الفرعونية.',
    excerptEn: 'A study of the art of mummification among the ancient Egyptians: its secrets, techniques, and its religious and civilizational significance in Pharaonic Egypt.',
    contentAr: '<p>كتاب يستعرض فن التحنيط في مصر القديمة، من الأساليب العملية المستخدمة إلى المعتقدات الدينية التي جعلت من حفظ الجسد أساساً لرحلة الخلود في الحضارة المصرية.</p>',
    contentEn: '<p>A book exploring the art of mummification in ancient Egypt, from the practical techniques used to the religious beliefs that made preserving the body essential to the journey of eternity in Egyptian civilization.</p>',
    pdfUrl: 'books/ancient-egypt-book.pdf'
  },
  {
    id: 'book-theban-tombs',
    category: 'history',
    date: '2026-08-30',
    authorAr: 'ديتهلم آيجنر (ترجمة حسين نصر الدين)',
    authorEn: 'Diethelm Eigner (translated by Hussein Nasr El-Din)',
    img: 'images/ancient-egypt-book2-cover.jpg',
    titleAr: 'مقابر طيبة في العصر المتأخر',
    titleEn: 'Theban Tombs in the Late Period',
    excerptAr: 'دراسة أثرية في مقابر طيبة في العصر المتأخر، تأليف ديتهلم آيجنر وترجمة حسين نصر الدين، تستعرض العمارة الجنائزية والمدافن الطيبية وأسرارها الحضارية.',
    excerptEn: 'An archaeological study of the Theban tombs in the Late Period, by Diethelm Eigner and translated by Hussein Nasr El-Din, exploring the funerary architecture and heritage of the Theban necropolis.',
    contentAr: '<p>مقابر طيبة في العصر المتأخر — دراسة أثرية متخصصة للمؤلف ديتهلم آيجنر، من ترجمة حسين نصر الدين، تستعرض مقابر مدينة طيبة وخصائصها المعمارية والجنائزية خلال العصر المتأخر من الحضارة المصرية.</p>',
    contentEn: '<p>Theban Tombs in the Late Period — a specialized archaeological study by Diethelm Eigner, translated by Hussein Nasr El-Din, examining the tombs of Thebes and their funerary and architectural features in the Late Period of Egyptian civilization.</p>',
    pdfUrl: 'books/ancient-egypt-book2.pdf'
  },
  {
    id: 'book-ancient-egypt-3',
    category: 'history',
    date: '2026-08-30',
    authorAr: 'إيمان أحمد أبو بكر',
    authorEn: 'Eman Ahmed Abo Bakr',
    img: 'images/ancient-egypt-book3-cover.jpg',
    titleAr: 'النظافة في الحياة اليومية عند المصريين القدماء',
    titleEn: 'Hygiene in the Daily Life of the Ancient Egyptians',
    excerptAr: 'كتاب يدرس ممارسات النظافة في الحياة اليومية عند المصريين القدماء، من تأليف إيمان أحمد أبو بكر، ويسلط الضوء على العادات والسلوكيات الصحية في الحضارة المصرية القديمة.',
    excerptEn: 'A book studying hygiene practices in the daily life of the ancient Egyptians, by Eman Ahmed Abo Bakr, shedding light on the cleanliness habits and health practices of ancient Egyptian civilization.',
    contentAr: '<p>النظافة في الحياة اليومية عند المصريين القدماء — دراسة تأليف إيمان أحمد أبو بكر تستعرض ممارسات وعادات النظافة في الحياة اليومية للمصريين القدماء وأثرها على صحتهم وثقافتهم.</p>',
    contentEn: '<p>Hygiene in the Daily Life of the Ancient Egyptians — a study by Eman Ahmed Abo Bakr examining the cleanliness habits and practices in the daily life of the ancient Egyptians and their impact on health and culture.</p>',
    pdfUrl: 'books/ancient-egypt-book3.pdf'
  },
  {
    id: 'book-ancient-egypt-4',
    category: 'history',
    date: '2026-08-30',
    authorAr: 'سليم حسن',
    authorEn: 'Salim Hassan',
    img: 'images/ancient-egypt-book4-cover.jpg',
    titleAr: 'أقسام مصر الجغرافية في العهد الفرعوني',
    titleEn: 'Geographical Regions of Egypt in the Pharaonic Era',
    excerptAr: 'دراسة للمؤرخ الكبير سليم حسن تعرض أقسام مصر الجغرافية في العهد الفرعوني، وتسلط الضوء على توزيع الأقاليم وخصائصها الطبيعية في الحضارة المصرية القديمة.',
    excerptEn: 'A study by the great historian Salim Hassan presenting the geographical regions of Egypt in the Pharaonic era, highlighting the distribution of the provinces and their natural features in ancient Egyptian civilization.',
    contentAr: '<p>أقسام مصر الجغرافية في العهد الفرعوني — دراسة للمؤرخ والأثري سليم حسن تستعرض التقسيمات الجغرافية لمصر في العصر الفرعوني وأثرها في حياة الدولة المصرية القديمة واقتصادها وإدارتها.</p>',
    contentEn: '<p>Geographical Regions of Egypt in the Pharaonic Era — a study by the historian and archaeologist Salim Hassan examining the geographical divisions of Egypt in the Pharaonic age and their impact on the life, economy and administration of the ancient Egyptian state.</p>',
    pdfUrl: 'books/ancient-egypt-book4.pdf'
  },
  {
    id: 'book-m3-muhammad-ali',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'د.سليمان الغنام',
    authorEn: 'Dr. Suleiman Al-Ghannam',
    img: 'images/m3.jpg',
    titleAr: 'سياسة محمد علي باشا التوسعية',
    titleEn: 'The Expansionist Policy of Muhammad Ali Pasha',
    excerptAr: 'دراسة تاريخية عن سياسة محمد علي باشا التوسعية وأهدافها وآثارها على مصر والمنطقة، من تأليف د.سليمان الغنام.',
    excerptEn: 'A historical study of the expansionist policy of Muhammad Ali Pasha, its aims and its impact on Egypt and the region, by Dr. Suleiman Al-Ghannam.',
    contentAr: '<p>سياسة محمد علي باشا التوسعية — دراسة تاريخية تحلل أهداف محمد علي باشا التوسعية ومراحلها ونتائجها على مصر ودول المنطقة خلال العصر الحديث.</p>',
    contentEn: '<p>The Expansionist Policy of Muhammad Ali Pasha — a historical study analysing the aims, phases and consequences of Muhammad Ali\'s expansionist policy on Egypt and the surrounding states in the modern era.</p>',
    pdfUrl: 'books/m3.pdf'
  },
  {
    id: 'book-m4-assyrian-torture',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'د.نعيم عوده',
    authorEn: 'Dr. Naeem Awdah',
    img: 'images/m4.jpg',
    titleAr: 'سياسة التعذيب والموت في التاريخ الاشوري',
    titleEn: 'The Policy of Torture and Death in Assyrian History',
    excerptAr: 'دراسة في التاريخ الأشوري تتناول سياسة التعذيب والموت وأساليبها ودلالاتها في حضارة آشور، من تأليف د.نعيم عوده.',
    excerptEn: 'A study in Assyrian history examining the policy of torture and death, its methods and significance in Assyrian civilisation, by Dr. Naeem Awdah.',
    contentAr: '<p>سياسة التعذيب والموت في التاريخ الاشوري — دراسة تاريخية تبين ممارسات التعذيب والموت في الدولة الآشورية ودورها في السياسة والمجتمع.</p>',
    contentEn: '<p>The Policy of Torture and Death in Assyrian History — a historical study showing the practices of torture and death in the Assyrian state and their role in politics and society.</p>',
    pdfUrl: 'books/m4.pdf'
  },
  {
    id: 'book-m5-burji-mamluks',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'د.عصام علي أحمد',
    authorEn: 'Dr. Essam Ali Ahmed',
    img: 'images/m5.jpg',
    titleAr: 'سلطنة المماليك البرجية',
    titleEn: 'The Burji Mamluk Sultanate',
    excerptAr: 'دراسة حول سلطنة المماليك البرجية وأحوالها السياسية والعسكرية والاقتصادية، من تأليف د.عصام علي أحمد.',
    excerptEn: 'A study of the Burji Mamluk Sultanate and its political, military and economic conditions, by Dr. Essam Ali Ahmed.',
    contentAr: '<p>سلطنة المماليك البرجية — دراسة تاريخية عن نشأة السلطنة البرجية وأبرز سلاطينها وتطورها السياسي والاقتصادي في تاريخ مصر الإسلامية.</p>',
    contentEn: '<p>The Burji Mamluk Sultanate — a historical study of the rise of the Burji sultanate, its most prominent sultans and its political and economic development in the Islamic history of Egypt.</p>',
    pdfUrl: 'books/m5.pdf'
  },
  {
    id: 'book-m6-islamic-conquest',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'د.صلاح الدين محمد',
    authorEn: 'Dr. Salah El-Din Mohamed',
    img: 'images/m6.jpg',
    titleAr: 'قراءة جديدة في الفتح الاسلامى لمصر وموقف الاقباط واليهود منه',
    titleEn: 'A New Reading of the Islamic Conquest of Egypt and the Position of the Copts and Jews toward It',
    excerptAr: 'قراءة جديدة تحليلية في الفتح الإسلامي لمصر وموقف الأقباط واليهود منه، من تأليف د.صلاح الدين محمد.',
    excerptEn: 'A new analytical reading of the Islamic conquest of Egypt and the position of the Copts and Jews toward it, by Dr. Salah El-Din Mohamed.',
    contentAr: '<p>قراءة جديدة في الفتح الاسلامى لمصر وموقف الاقباط واليهود منه — دراسة تحليلية تعيد النظر في أحداث الفتح الإسلامي لمصر وفي مواقف الأقباط واليهود خلال تلك الفترة.</p>',
    contentEn: '<p>A New Reading of the Islamic Conquest of Egypt and the Position of the Copts and Jews toward It — an analytical study reconsidering the events of the Islamic conquest of Egypt and the positions of the Copts and Jews during that period.</p>',
    pdfUrl: 'books/m6.pdf'
  },
  {
    id: 'book-m7-beni-hassan',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'عبد الغفار شديد',
    authorEn: 'Abdel Ghaffar Shadid',
    img: 'images/m7.jpg',
    titleAr: 'مقابر بني حسن في مصر الوسطى',
    titleEn: 'The Beni Hassan Necropolis in Middle Egypt',
    excerptAr: 'دراسة أثرية عن مقابر بني حسن في مصر الوسطى ومميزاتها المعمارية والفنية، من تأليف عبد الغفار شديد.',
    excerptEn: 'An archaeological study of the Beni Hassan necropolis in Middle Egypt and its architectural and artistic features, by Abdel Ghaffar Shadid.',
    contentAr: '<p>مقابر بني حسن في مصر الوسطى — دراسة أثرية تستعرض مقابر بني حسن ومواقعها وعمارتها الجنائزية ورسومها ودلالاتها الحضارية.</p>',
    contentEn: '<p>The Beni Hassan Necropolis in Middle Egypt — an archaeological study presenting the Beni Hassan tombs, their sites, funerary architecture, paintings and cultural significance.</p>',
    pdfUrl: 'books/m7.pdf'
  },
  {
    id: 'book-m8-beni-hassan-image',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'مركز تسجيل الاثار',
    authorEn: 'The Center for Documentation of Antiquities',
    img: 'images/m8.jpg',
    titleAr: 'مقابر بني حسن الصورة والدلالة',
    titleEn: 'The Beni Hassan Tomb: Image and Significance',
    excerptAr: 'دراسة توثق مقابر بني حسن من حيث الصورة والدلالة الفنية والحضارية، من إصدار مركز تسجيل الآثار.',
    excerptEn: 'A documentary study of the Beni Hassan tombs in terms of image and artistic and cultural significance, published by the Center for Documentation of Antiquities.',
    contentAr: '<p>مقابر بني حسن الصورة والدلالة — دراسة من مركز تسجيل الآثار تتناول مشاهد مقابر بني حسن وما تحمله من دلالات فنية وحضارية في مصر القديمة.</p>',
    contentEn: '<p>The Beni Hassan Tomb: Image and Significance — a study by the Center for Documentation of Antiquities exploring the scenes of the Beni Hassan tombs and their artistic and cultural meanings in ancient Egypt.</p>',
    pdfUrl: 'books/m8.pdf'
  },
  {
    id: 'book-antiquities-paper-currency',
    category: 'miscellaneous',
    date: '2026-08-31',
    authorAr: 'TiGo',
    authorEn: 'TiGo',
    img: 'images/antiquities-paper-currency-cover.png',
    titleAr: 'الاثار الموجودة على العملات الورقية',
    titleEn: 'The Antiquities Found on Paper Currency',
    excerptAr: 'كتاب يعرض الآثار المصرية التي ظهرت على العملات الورقية، من تأليف TiGo، ويسلط الضوء على المعالم الأثرية والفرعونية الموثقة في تصميم الأوراق النقدية.',
    excerptEn: 'A book presenting the Egyptian antiquities that appeared on paper currency, by TiGo, highlighting the archaeological and Pharaonic landmarks documented in the design of banknotes.',
    contentAr: '<p>الاثار الموجودة على العملات الورقية — دراسة لعرض الآثار والمعالم المصرية التي جُسدت على العملات الورقية عبر تاريخها، من تأليف TiGo، وتبرز المكانة الحضارية للآثار الفرعونية في الرموز الوطنية المطبوعة على النقود الورقية.</p>',
    contentEn: '<p>The Antiquities Found on Paper Currency — a presentation of the Egyptian antiquities and landmarks depicted on paper currency throughout its history, by TiGo, highlighting the civilizational status of Pharaonic antiquities among the national symbols printed on banknotes.</p>',
    pdfUrl: 'books/antiquities-paper-currency.pdf'
  },
  {
    id: 'book-mamluks-islamic-civilization',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'د. عصام علي أحمد',
    authorEn: 'Dr. Essam Ali Ahmed',
    img: 'images/mamluks-islamic-civilization-cover.jpg',
    titleAr: 'المماليك وحضارة الاسلام',
    titleEn: 'The Mamluks and Islamic Civilization',
    excerptAr: 'كتاب يدرس دور المماليك ومساهمتهم في الحضارة الإسلامية عبر العصور، من تأليف د. عصام علي أحمد.',
    excerptEn: 'A book studying the role of the Mamluks and their contribution to Islamic civilisation across the ages, by Dr. Essam Ali Ahmed.',
    contentAr: '<p>المماليك وحضارة الاسلام — دراسة تاريخية حول دولة المماليك ودورها الحضاري في التاريخ الإسلامي السياسي والثقافي، من تأليف د. عصام علي أحمد.</p>',
    contentEn: '<p>The Mamluks and Islamic Civilization — a historical study of the Mamluk state and its civilisational role in the political and cultural history of Islam, by Dr. Essam Ali Ahmed.</p>',
    pdfUrl: 'books/mamluks-islamic-civilization.pdf'
  },
  {
    id: 'book-mosques-egypt-saints-1',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'د. سعاد ماهر',
    authorEn: 'Dr. Souad Maher',
    img: 'images/mosques-egypt-saints-1-cover.webp',
    titleAr: 'مساجد مصر و أولياء الصالحون (ج1)',
    titleEn: 'Mosques of Egypt and the Righteous Saints (Part 1)',
    excerptAr: 'كتاب يعرض مساجد مصر التاريخية وتراث أولياء الله الصالحين (الجزء الأول)، من تأليف د. سعاد ماهر.',
    excerptEn: 'A book presenting the historic mosques of Egypt and the heritage of the righteous saints (Part One), by Dr. Souad Maher.',
    contentAr: '<p>مساجد مصر و أولياء الصالحون (ج1) — دراسة تتناول أشهر مساجد مصر وأعلام الأولياء الصالحين المرتبطة بها، من تأليف د. سعاد ماهر.</p>',
    contentEn: '<p>Mosques of Egypt and the Righteous Saints (Part 1) — a study of the most famous mosques of Egypt and the righteous saints associated with them, by Dr. Souad Maher.</p>',
    pdfUrl: 'books/mosques-egypt-saints-1.pdf'
  },
  {
    id: 'book-features-modern-contemporary-history',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'جاد طه',
    authorEn: 'Gad Taha',
    img: 'images/features-modern-contemporary-history-cover.webp',
    titleAr: 'معالم التاريخ الحديث والمعاصر',
    titleEn: 'Features of Modern and Contemporary History',
    excerptAr: 'كتاب يستعرض أبرز معالم التاريخ الحديث والمعاصر وتطوراته، من تأليف جاد طه.',
    excerptEn: 'A book presenting the most prominent features and developments of modern and contemporary history, by Gad Taha.',
    contentAr: '<p>معالم التاريخ الحديث والمعاصر — دراسة تاريخية تعرض أهم الأحداث والتحولات في العصر الحديث والمعاصر، من تأليف جاد طه.</p>',
    contentEn: '<p>Features of Modern and Contemporary History — a historical study presenting the most important events and transformations of the modern and contemporary era, by Gad Taha.</p>',
    pdfUrl: 'books/features-modern-contemporary-history.pdf'
  },
  {
    id: 'book-jewelry-ancient-egypt',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'رحّالة عبر التاريخ',
    authorEn: 'Rahala Through History',
    img: 'images/jewelry-ancient-egypt-cover.jpg',
    titleAr: 'الحلي في مصر القديمة',
    titleEn: 'Jewelry in Ancient Egypt',
    excerptAr: 'كتاب يتناول فنون الحلي والزينة وأشكالها ودلالاتها في مصر القديمة.',
    excerptEn: 'A book exploring the art of jewelry and adornment, its forms and significance in ancient Egypt.',
    contentAr: '<p>الحلي في مصر القديمة — دراسة عن الحلي والزينة المصنوعة في مصر القديمة وأنواعها وخاماتها ودلالاتها الثقافية والدينية.</p>',
    contentEn: '<p>Jewelry in Ancient Egypt — a study of the jewelry and adornments crafted in ancient Egypt, their types, materials and cultural and religious significance.</p>',
    pdfUrl: 'books/jewelry-ancient-egypt.pdf'
  },
  {
    id: 'book-crusades-political-preludes',
    category: 'history',
    date: '2026-08-31',
    authorAr: 'د. علية الجنزوري',
    authorEn: 'Dr. Aliya Al-Ganzouri',
    img: 'images/logo.jpg',
    titleAr: 'الحروب الصليبية: المقدمات السياسية',
    titleEn: 'The Crusades: The Political Preludes',
    excerptAr: 'كتاب يدرس المقدمات السياسية للحروب الصليبية وأسبابها وخلفياتها الدولية، من تأليف د. علية الجنزوري.',
    excerptEn: 'A book studying the political preludes of the Crusades, their causes and international background, by Dr. Aliya Al-Ganzouri.',
    contentAr: '<p>الحروب الصليبية: المقدمات السياسية — دراسة تحليلية للمقدمات السياسية والدولية التي سبقت الحروب الصليبية، من تأليف د. علية الجنزوري.</p>',
    contentEn: '<p>The Crusades: The Political Preludes — an analytical study of the political and international preludes that preceded the Crusades, by Dr. Aliya Al-Ganzouri.</p>',
    pdfUrl: 'books/crusades-political-preludes.pdf'
  }
];

function getBookBlogPosts() {
  // Only the default Library books are shown. Any previously stored/published books
  // other than the defaults are ignored and cleared from storage.
  const acceptedIds = new Set(defaultLibraryBooks.map(b => b && b.id));
  try {
    const stored = JSON.parse(localStorage.getItem(bookBlogStorageKey) || '[]');
    const base = Array.isArray(stored) ? stored : [];
    // Keep only the default book(s); merge their canonical data back in.
    const rebuilt = defaultLibraryBooks.map(d => {
      const existing = base.find(b => b && b.id === d.id);
      // Prefer the canonical default PDF path when one exists: an uploaded
      // inline base64/data blob must never override a working server file,
      // otherwise the Read button points to a broken/oversized URL.
      let merged = existing ? Object.assign({}, d, existing) : d;
      if (d && d.pdfUrl && d.pdfUrl.length > 0 && d.pdfUrl.indexOf('data:') !== 0) {
        merged = Object.assign({}, merged, { pdfUrl: d.pdfUrl });
      }
      return merged;
    });
    // If storage still holds non-default books, rewrite it to only the defaults.
    if (base.length !== rebuilt.length || base.some(b => !acceptedIds.has(b && b.id))) {
      localStorage.setItem(bookBlogStorageKey, JSON.stringify(rebuilt));
    }
    // Append books published via the Admin "إضافة 6 كتب" batch publisher so that
    // they appear publicly and immediately, without touching the default Library.
    const batch = getBatchBooks();
    if (batch.length) {
      return rebuilt.concat(batch);
    }
    return rebuilt;
  } catch (error) {
    return defaultLibraryBooks.concat(getBatchBooks());
  }
}

function saveBookBlogPosts(posts) {
  localStorage.setItem(bookBlogStorageKey, JSON.stringify(posts));
}

function escapeContentHtml(value) {
  return String(value || '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

// Build a safe download filename from a book title. Keeps the displayed title
// (including Arabic) but removes characters that are invalid in filenames on
// Windows and other devices, collapses extra whitespace, and truncates overlong
// names. Never modifies the title shown on the site or the stored PDF path.
function sanitizeDownloadFilename(title) {
  let name = String(title || '');
  // Decode any HTML entities in case the title was previously escaped.
  const tmp = document ? document.createElement('textarea') : null;
  if (tmp) { tmp.innerHTML = name; name = tmp.value; }
  // Strip control characters.
  name = name.replace(/[\u0000-\u001f\u007f]/g, '');
  // Replace characters invalid in filenames on Windows and most other systems.
  name = name.replace(/[\\/:*?"<>|]/g, ' ');
  // Trim whitespace and trailing dots/spaces, then collapse repeated spaces.
  name = name.replace(/^\s+|\s+$/g, '').replace(/[. ]+$/g, '');
  name = name.replace(/\s+/g, ' ');
  // Normalize, then cap length so the filename stays within filesystem limits.
  name = name.normalize('NFKC').slice(0, 180).trim();
  if (!name) name = 'book';
  return name;
}

function getBookBlogCategoryInfo(category, lang) {
  const isAr = lang === 'ar';
  const labels = {
    scientific: isAr ? 'كتب علمية' : 'Scientific Books',
    history: isAr ? 'كتب الحضارات والتاريخ' : 'Civilizations & History Books',
    miscellaneous: isAr ? 'كتب متنوعة' : 'Miscellaneous Books'
  };
  return { label: labels[category] || labels.miscellaneous, icon: category === 'scientific' ? '⚗️' : category === 'history' ? '🏛️' : '✦', badgeClass: 'cat-badge--modern' };
}

function renderBookBlogGrid(activeCategory = 'all') {
  const container = document.getElementById('book-blog-grid');
  if (!container) return;
  const isAr = currentLang === 'ar';
  const localBooks = getBookBlogPosts().filter(post => activeCategory === 'all' || post.category === activeCategory);
  renderBookBlogCards(container, localBooks, isAr);
  if (typeof DataService !== 'undefined' && DataService.isReady && DataService.isReady()) {
    DataService.getPublishedBooks().then(firebaseBooks => {
      const current = getBookBlogPosts();
      const localIds = new Set(current.map(b => b.id));
      // Only allow Firebase books whose id matches a default Library book; all other
      // previously published books are intentionally excluded from the public Library.
      const allowedDefaultIds = new Set(defaultLibraryBooks.map(b => b && b.id));
      const extra = firebaseBooks.filter(b => b && allowedDefaultIds.has(b.id) && !localIds.has(b.id));
      if (extra.length) {
        const all = [...current, ...extra];
        saveBookBlogPosts(all);
        const posts = all.filter(post => activeCategory === 'all' || post.category === activeCategory);
        renderBookBlogCards(container, posts, isAr);
      }
    }).catch(() => {});
  }
}

function renderBookBlogCards(container, posts, isAr) {
  container.innerHTML = posts.length ? posts.map(post => {
    const category = getBookBlogCategoryInfo(post.category, currentLang);
    const title = isAr ? post.titleAr : (post.titleEn || post.titleAr);
    const hasPdf = post.pdfUrl && post.pdfUrl.length > 10;
    const pdfId = escapeContentHtml(post.id);
    const isRealCover = post.img && post.img.trim() && post.img.trim() !== 'images/logo.jpg';
    const coverThumb = isRealCover
      ? `<div class="book-pdf-card__icon book-pdf-card__icon--cover" aria-hidden="true"><img class="book-pdf-card__cover-img" src="${escapeContentHtml(post.img)}" alt="" loading="lazy"></div>`
      : `<div class="book-pdf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg><span class="book-pdf-card__ext">PDF</span></div>`;
    if (hasPdf) {
      return `<article class="book-pdf-card" data-book-post-id="${pdfId}">${coverThumb}<div class="book-pdf-card__info"><span class="book-pdf-card__badge ${category.badgeClass}"><span>${category.icon}</span> ${category.label}</span><h3 class="book-pdf-card__title">${escapeContentHtml(title)}</h3><p class="book-pdf-card__author">${escapeContentHtml(post.authorAr || (isAr ? 'رحّالة عبر التاريخ' : 'Rahala Through History'))}</p></div><div class="book-pdf-card__actions"><button type="button" class="book-pdf-card__btn book-pdf-card__btn--read" data-pdf-open="${pdfId}" title="${isAr ? 'اقرأ في المتصفح' : 'Read in Browser'}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg><span>${isAr ? 'قراءة' : 'Read'}</span></button><a class="book-pdf-card__btn book-pdf-card__btn--download" href="${escapeContentHtml(post.pdfUrl)}" download="${escapeContentHtml(sanitizeDownloadFilename(title))}.pdf" title="${isAr ? 'تحميل PDF' : 'Download PDF'}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span>${isAr ? 'تحميل' : 'Download'}</span></a><button type="button" class="book-pdf-card__btn book-pdf-card__btn--share" data-book-share="${pdfId}" title="${isAr ? 'مشاركة الكتاب' : 'Share Book'}"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg><span>${isAr ? 'مشاركة' : 'Share'}</span></button></div></article>`;
    }
    return `<article class="book-pdf-card book-pdf-card--no-pdf" data-book-post-id="${pdfId}"><div class="book-pdf-card__icon book-pdf-card__icon--text"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div><div class="book-pdf-card__info"><span class="book-pdf-card__badge ${category.badgeClass}"><span>${category.icon}</span> ${category.label}</span><h3 class="book-pdf-card__title">${escapeContentHtml(title)}</h3><p class="book-pdf-card__author">${escapeContentHtml(post.authorAr || (isAr ? 'رحّالة عبر التاريخ' : 'Rahala Through History'))}</p></div><div class="book-pdf-card__actions"><button type="button" class="book-pdf-card__btn book-pdf-card__btn--read" data-book-post-id="${pdfId}" title="${isAr ? 'اقرأ المحتوى' : 'Read Content'}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg><span>${isAr ? 'قراءة' : 'Read'}</span></button><button type="button" class="book-pdf-card__btn book-pdf-card__btn--share" data-book-share="${pdfId}" title="${isAr ? 'مشاركة المحتوى' : 'Share Content'}"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg><span>${isAr ? 'مشاركة' : 'Share'}</span></button></div></article>`;
  }).join('') : `<div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);"><p>${isAr ? 'لا توجد منشورات في هذا التصنيف حالياً.' : 'No published content in this category yet.'}</p></div>`;
  container.querySelectorAll('[data-pdf-open]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); openPdfReader(btn.dataset.pdfOpen); }));
  container.querySelectorAll('.book-pdf-card--no-pdf [data-book-post-id]').forEach(card => card.addEventListener('click', () => openArticleReader(card.dataset.bookPostId, getBookBlogPosts(), true)));
  container.querySelectorAll('[data-book-share]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); shareBook(btn.dataset.bookShare); }));
}

function initBookBlog() {
  renderBookBlogGrid('all');
  document.querySelectorAll('[data-book-category]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-book-category]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderBookBlogGrid(button.dataset.bookCategory || 'all');
  }));
  // Book publish controls moved to Admin Dashboard only
}

// Category Helper
function getCategoryInfo(catKey, lang) {
  const isAr = lang === 'ar';
  const mapping = {
    ancient: {
      label: isAr ? 'تاريخ مصري قديم' : 'Ancient Egypt',
      icon: '🏛️',
      badgeClass: 'cat-badge--ancient'
    },
    islamic: {
      label: isAr ? 'تاريخ إسلامي' : 'Islamic Egypt',
      icon: '🕌',
      badgeClass: 'cat-badge--islamic'
    },
    coptic: {
      label: isAr ? 'تاريخ قبطي' : 'Coptic Egypt',
      icon: '⛪',
      badgeClass: 'cat-badge--coptic'
    },
    modern: {
      label: isAr ? 'تاريخ مصر الحديث' : 'Modern Egypt',
      icon: '🏙️',
      badgeClass: 'cat-badge--modern'
    },
    europe: {
      label: isAr ? 'تاريخ أوروبا' : 'European History',
      icon: '🏰',
      badgeClass: 'cat-badge--europe'
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
function openArticleReader(postId, sourcePosts, isBookBlog = false) {
  const posts = sourcePosts || getBlogPosts();
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
  const catInfo = isBookBlog ? getBookBlogCategoryInfo(post.category, currentLang) : getCategoryInfo(post.category, currentLang);
  const title = isAr ? post.titleAr : (post.titleEn || post.titleAr);
  const author = isAr ? (post.authorAr || 'رحّالة عبر التاريخ') : (post.authorEn || 'Rahala Through History');
  const readTime = isAr ? (post.readTimeAr || '5 دقائق قراءة') : (post.readTimeEn || '5 min read');
  const content = isAr ? (post.contentAr || post.excerptAr || post.contentEn || post.excerptEn || '') : (post.contentEn || post.excerptEn || post.contentAr || post.excerptAr || '');
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
    ? `مرحباً، قرأت مقال "${title}" في مقالات رحّالة عبر التاريخ، وأود الاستفسار عن الجولات والأنشطة المتعلقة به.`
    : `Hello, I read the article "${title}" on Rahala Through History blog and would like to inquire about related tours and experiences.`;
  shareWaBtn.href = buildWhatsAppLink(waText);

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
// 17b. PDF BOOK READER MODAL
// --------------------------------------------------------------------------
// PDF.js CDN (works on static/GitHub Pages; loaded lazily only when reading)
const PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
const PDFJS_WORKER_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

// Module-level reader state shared between openPdfReader and the toolbar wiring.
const PdfReaderState = {
  pdf: null,
  page: 1,
  numPages: 0,
  scale: 1,
  renderTask: null,
  getDocTask: null
};

function loadPdfJs() {
  return new Promise((resolve, reject) => {
    if (window.pdfjsLib) { try { window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL; } catch (e) {} resolve(window.pdfjsLib); return; }
    const existing = document.querySelector('script[src="' + PDFJS_URL + '"]');
    if (existing) { existing.addEventListener('load', () => resolve(window.pdfjsLib)); existing.addEventListener('error', () => reject(new Error('pdfjs load failed'))); return; }
    const s = document.createElement('script');
    s.src = PDFJS_URL;
    s.async = true;
    s.onload = () => { try { window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL; } catch (e) {} resolve(window.pdfjsLib); };
    s.onerror = () => reject(new Error('pdfjs load failed'));
    document.head.appendChild(s);
  });
}

function showPdfFallback(msg, url) {
  const scroll = document.getElementById('pdf-reader-scroll');
  const toolbar = document.getElementById('pdf-reader-toolbar');
  const loading = document.getElementById('pdf-reader-loading');
  const fallback = document.getElementById('pdf-reader-fallback');
  const viewer = document.getElementById('pdf-reader-iframe');
  const fbMsg = document.getElementById('pdf-reader-fallback-msg');
  const fbOpen = document.getElementById('pdf-reader-fallback-open');
  if (scroll) scroll.hidden = true;
  if (toolbar) toolbar.hidden = true;
  if (loading) loading.hidden = true;
  if (viewer) viewer.hidden = true;
  if (fbMsg) fbMsg.textContent = msg;
  if (fbOpen) fbOpen.href = url;
  if (fallback) { fallback.hidden = false; }
}

async function renderCurrentPdfPage() {
  const wrap = document.getElementById('pdf-reader-scroll');
  const canvas = document.getElementById('pdf-reader-canvas');
  const st = PdfReaderState;
  if (!st.pdf || !wrap || !canvas) return;
  if (st.page < 1) st.page = 1;
  if (st.page > st.numPages) st.page = st.numPages;
  try {
    const page = await st.pdf.getPage(st.page);
    if (!st.scale) {
      const base = page.getViewport({ scale: 1 });
      const avail = wrap.clientWidth || 1;
      let fit = avail / base.width;
      const cap = 2;
      st.scale = Math.min(Math.max(fit, 0.25), cap);
      const sorted = [0.5, 0.75, 1, 1.25, 1.5, 2];
      st.scale = sorted.reduce((acc, v) => (Math.abs(v - st.scale) < Math.abs(acc - st.scale) ? v : acc), st.scale);
    }
    const dpr = (window.devicePixelRatio || 1);
    const viewport = page.getViewport({ scale: st.scale });
    canvas.width = Math.floor(viewport.width * dpr);
    canvas.height = Math.floor(viewport.height * dpr);
    canvas.style.width = viewport.width + 'px';
    canvas.style.height = viewport.height + 'px';
    canvas.style.background = '#fff';
    if (st.renderTask) { try { st.renderTask.cancel(); } catch (e) {} }
    let ctx = null;
    try { ctx = canvas.getContext('2d'); } catch (e) { ctx = null; }
    if (ctx && ctx.setTransform) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (ctx) {
      st.renderTask = page.render({ canvasContext: ctx, viewport: viewport });
      try { await st.renderTask.promise; } finally { st.renderTask = null; }
    }
    const pi = document.getElementById('pdf-reader-page');
    const pg = document.getElementById('pdf-reader-pages');
    const zl = document.getElementById('pdf-reader-zoom-label');
    if (pi) pi.value = st.page;
    if (pg) pg.textContent = '/ ' + st.numPages;
    if (zl) zl.textContent = Math.round(st.scale * 100) + '%';
    if (pi) { pi.max = st.numPages; pi.min = 1; }
    const prev = document.getElementById('pdf-reader-prev');
    const next = document.getElementById('pdf-reader-next');
    if (prev) prev.disabled = st.page <= 1;
    if (next) next.disabled = st.page >= st.numPages;
  } catch (err) {
    if (err && (err.name === 'RenderingCancelledException' || /cancel/i.test(String(err && err.message)))) return;
    throw err;
  }
}

async function startPdfJsReader(url) {
  const scroll = document.getElementById('pdf-reader-scroll');
  const toolbar = document.getElementById('pdf-reader-toolbar');
  const loading = document.getElementById('pdf-reader-loading');
  const fallback = document.getElementById('pdf-reader-fallback');
  const viewer = document.getElementById('pdf-reader-iframe');
  const st = PdfReaderState;
  const isAr = currentLang === 'ar';
  if (viewer) viewer.hidden = true;
  if (scroll) scroll.hidden = true;
  if (toolbar) toolbar.hidden = true;
  if (fallback) fallback.hidden = true;
  if (loading) { loading.hidden = false; }
  try {
    await loadPdfJs();
    if (st.getDocTask) { try { st.getDocTask.destroy(); } catch (e) {} }
    loading.hidden = true;
    st.getDocTask = window.pdfjsLib.getDocument({ url: url });
    st.pdf = await st.getDocTask.promise;
    st.numPages = st.pdf.numPages;
    st.page = 1;
    st.scale = 0;
    if (toolbar) toolbar.hidden = false;
    if (scroll) scroll.hidden = false;
    await renderCurrentPdfPage();
  } catch (err) {
    const msg = isAr
      ? (i18n && i18n.ar && i18n.ar.book_pdf_error)
      : (i18n && i18n.en && i18n.en.book_pdf_error);
    showPdfFallback(msg || 'PDF', url);
    st.pdf = null;
    st.numPages = 0;
  }
}

function openPdfReader(postId) {
  const post = getBookBlogPosts().find(p => p.id === postId);
  if (!post || !post.pdfUrl) return;
  const isAr = currentLang === 'ar';
  const title = isAr ? post.titleAr : (post.titleEn || post.titleAr);
  const modal = document.getElementById('pdf-reader-modal');
  const viewer = document.getElementById('pdf-reader-iframe');
  const scroll = document.getElementById('pdf-reader-scroll');
  const toolbar = document.getElementById('pdf-reader-toolbar');
  const loading = document.getElementById('pdf-reader-loading');
  const fallback = document.getElementById('pdf-reader-fallback');
  const titleEl = document.getElementById('pdf-reader-title');
  const downloadBtn = document.getElementById('pdf-reader-download');
  const openBtn = document.getElementById('pdf-reader-open');
  const fbOpen = document.getElementById('pdf-reader-fallback-open');
  if (!modal || !viewer) return;
  titleEl.textContent = title;
  downloadBtn.href = post.pdfUrl;
  downloadBtn.download = sanitizeDownloadFilename(title) + '.pdf';
  if (openBtn) openBtn.href = post.pdfUrl;
  if (fbOpen) fbOpen.href = post.pdfUrl;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (scroll) scroll.scrollTop = 0;
  // data: URLs (admin-published, stored per-browser in localStorage) can only be
  // shown in the iframe that already reads them; real static PDFs use the in-page
  // PDF.js reader so they open and stay readable on mobile (no new tab / auto-download).
  const isDataUrl = post.pdfUrl.indexOf('data:') === 0;
  if (isDataUrl) {
    if (fallback) fallback.hidden = true;
    if (scroll) scroll.hidden = true;
    if (toolbar) toolbar.hidden = true;
    if (loading) loading.hidden = true;
    viewer.hidden = false;
    viewer.src = post.pdfUrl;
  } else {
    startPdfJsReader(post.pdfUrl);
  }
}

function initPdfReaderModal() {
  const modal = document.getElementById('pdf-reader-modal');
  const closeBtn = document.getElementById('pdf-reader-close');
  const overlay = document.getElementById('pdf-reader-overlay');
  function closePdf() {
    if (modal) { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
    const viewer = document.getElementById('pdf-reader-iframe');
    const scroll = document.getElementById('pdf-reader-scroll');
    const toolbar = document.getElementById('pdf-reader-toolbar');
    const loading = document.getElementById('pdf-reader-loading');
    const fallback = document.getElementById('pdf-reader-fallback');
    const canvas = document.getElementById('pdf-reader-canvas');
    if (viewer) { viewer.src = ''; viewer.hidden = false; }
    if (scroll) scroll.hidden = true;
    if (toolbar) toolbar.hidden = true;
    if (loading) loading.hidden = true;
    if (fallback) fallback.hidden = true;
    if (canvas) { canvas.width = 0; canvas.height = 0; }
    const st = PdfReaderState;
    if (st.renderTask) { try { st.renderTask.cancel(); } catch (e) {} st.renderTask = null; }
    if (st.getDocTask) { try { st.getDocTask.destroy(); } catch (e) {} st.getDocTask = null; }
    st.pdf = null; st.numPages = 0; st.page = 1; st.scale = 1;
  }
  if (closeBtn) closeBtn.addEventListener('click', closePdf);
  if (overlay) overlay.addEventListener('click', closePdf);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closePdf(); });

  const zoomIn = document.getElementById('pdf-reader-zoom-in');
  const zoomOut = document.getElementById('pdf-reader-zoom-out');
  const prevBtn = document.getElementById('pdf-reader-prev');
  const nextBtn = document.getElementById('pdf-reader-next');
  const pageInput = document.getElementById('pdf-reader-page');
  if (zoomIn) zoomIn.addEventListener('click', () => { const st = PdfReaderState; st.scale = Math.min((st.scale || 1) * 1.2, 4); renderCurrentPdfPage().catch(() => {}); });
  if (zoomOut) zoomOut.addEventListener('click', () => { const st = PdfReaderState; st.scale = Math.max((st.scale || 1) / 1.2, 0.25); renderCurrentPdfPage().catch(() => {}); });
  if (prevBtn) prevBtn.addEventListener('click', () => { const st = PdfReaderState; if (st.page > 1) { st.page -= 1; renderCurrentPdfPage().catch(() => {}); } });
  if (nextBtn) nextBtn.addEventListener('click', () => { const st = PdfReaderState; if (st.page < st.numPages) { st.page += 1; renderCurrentPdfPage().catch(() => {}); } });
  if (pageInput) pageInput.addEventListener('change', () => { const st = PdfReaderState; const v = parseInt(pageInput.value, 10); if (!isNaN(v) && v >= 1 && v <= st.numPages) { st.page = v; renderCurrentPdfPage().catch(() => {}); } });
}

// --------------------------------------------------------------------------
// 17c. BOOK SHARE — direct link to a specific book (native share + copy)
// --------------------------------------------------------------------------
function buildBookShareUrl(postId) {
  const url = new URL(window.location.href);
  url.searchParams.set('book', postId);
  return url.toString();
}

function fallbackCopyText(text, isAr) {
  // Final fallback: show a prompt with the link so the visitor can copy it manually.
  const done = window.prompt(isAr ? 'انسخ رابط الكتاب:' : 'Copy the book link:', text);
  if (done) {
    try { window.prompt(isAr ? 'مكتمل! اضغط Ctrl+C ثم موافق' : 'Done! Press Ctrl+C then OK', text); } catch (e) {}
  }
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  // Legacy fallback using a hidden textarea + execCommand.
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  document.body.removeChild(ta);
  return ok;
}

async function shareBook(postId) {
  const post = (getBookBlogPosts() || []).find(p => p.id === postId);
  if (!post) return;
  const isAr = currentLang === 'ar';
  const title = isAr ? (post.titleAr || post.titleEn) : (post.titleEn || post.titleAr);
  const url = buildBookShareUrl(post.id);

  // 1. Try the device's native Share sheet when available (mobile-friendly).
  if (typeof navigator.share === 'function' && window.isSecureContext !== false) {
    try {
      await navigator.share({ title: title, text: isAr ? 'رابط الكتاب في مكتبة رحّالة' : 'Book link in the Rahala Library', url: url });
      return;
    } catch (err) {
      if (err && err.name === 'AbortError') return; // user cancelled share sheet
      // otherwise fall through to copy link
    }
  }

  // 2. Copy the direct link to the clipboard.
  try {
    await copyToClipboard(url);
    showToast(isAr ? 'تم نسخ رابط الكتاب' : 'Book link copied');
  } catch (err) {
    fallbackCopyText(url, isAr);
  }
}

// --------------------------------------------------------------------------
// 17d. OPEN SHARED BOOK LINK — ?book=<id> takes visitors directly to a book
// --------------------------------------------------------------------------
function activateBookCategory(category) {
  const tabs = document.querySelectorAll('[data-book-category]');
  let target = null;
  tabs.forEach(t => {
    t.classList.remove('active');
    if (t.dataset.bookCategory === category) target = t;
  });
  if (!target) {
    // No matching tab; fall back to "All"
    tabs.forEach(t => { if (t.dataset.bookCategory === 'all') { t.classList.add('active'); target = t; } });
    category = 'all';
  } else {
    target.classList.add('active');
  }
  return category;
}

function handleOpenBookLink() {
  const params = new URLSearchParams(window.location.search);
  const bookId = params.get('book');
  if (!bookId) return;
  const posts = getBookBlogPosts() || [];
  const post = posts.find(p => p && p.id === bookId);
  if (!post) return;
  const isAr = currentLang === 'ar';

  // Show the book's category so the target card is visible.
  const category = activateBookCategory(post.category);
  renderBookBlogGrid(category);

  // Wait for layout/images to settle, then scroll to the Library and highlight.
  const delay = 350;
  setTimeout(() => {
    const section = document.getElementById('book-blog');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const card = document.querySelector(`.book-pdf-card[data-book-post-id="${CSS.escape(bookId)}"]`);
    if (card) {
      card.classList.add('book-pdf-card--shared');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => {
        // Optionally open the PDF reader so the visitor lands on the book content.
        if (post.pdfUrl) openPdfReader(post.id);
      }, 450);
    }
  }, delay);
}


// --------------------------------------------------------------------------
// 18. PUBLISH ARTICLE MODAL — ADMIN ONLY (moved to Admin Dashboard)
// --------------------------------------------------------------------------
// Public publish modal removed. Publishing is only available inside the Admin Panel.

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
  initPdfReaderModal();
  initBookBlog();
}

// --------------------------------------------------------------------------
// 21. NEWS TICKER ENGINE
// --------------------------------------------------------------------------
const tickerStorageKey = 'rahala_ticker_items';
const defaultTickerItems = [
  { id: 'tick-1', textAr: 'مرحباً بكم في رحّالة عبر التاريخ — شركة سياحة وتوعية أثرية', textEn: 'Welcome to Rahala Through History — Tourism & Archaeological Awareness', badgeAr: 'جديد', badgeEn: 'New', badgeType: 'new', enabled: true },
  { id: 'tick-2', textAr: 'استكشف أهرامات الجيزة مع جولاتنا التاريخية المتخصصة', textEn: 'Explore the Pyramids of Giza with our specialized historical tours', badgeAr: '', badgeEn: '', badgeType: '', enabled: true },
  { id: 'tick-3', textAr: 'رحلات تعليمية للمدارس والجامعات — تواصل معنا اليوم', textEn: 'Educational trips for schools & universities — Contact us today', badgeAr: 'ساخن', badgeEn: 'Hot', badgeType: 'hot', enabled: true },
  { id: 'tick-4', textAr: 'أحدث مقالاتنا: اكتشف تاريخ مصر القديم والإسلامي والقبطي والحديث وأوروبا', textEn: 'Latest articles: Ancient, Islamic, Coptic & Modern Egypt, and European history — explore now', badgeAr: '', badgeEn: '', badgeType: '', enabled: true },
  { id: 'tick-5', textAr: 'احجز رحلتك الآن عبر واتساب: 01016643479', textEn: 'Book your trip via WhatsApp: 01016643479', badgeAr: '', badgeEn: '', badgeType: '', enabled: true },
  { id: 'tick-6', textAr: 'جولات ثقافية وأثرية في القاهرة التاريخية وأسوان والأقصر', textEn: 'Cultural & archaeological tours in Historic Cairo, Aswan & Luxor', badgeAr: '', badgeEn: '', badgeType: '', enabled: true },
  { id: 'tick-7', textAr: 'نحن نؤمن أن السفر جسرٌ معرفي يربطك بأعماق الحضارة المصرية', textEn: 'We believe travel is a bridge connecting you to the depths of Egyptian civilization', badgeAr: '', badgeEn: '', badgeType: '', enabled: true },
  { id: 'tick-8', textAr: 'تأسست رحّالة عبر التاريخ في سبتمبر 2023 بشغف أصيل للتراث', textEn: 'Rahala Through History was founded in September 2023 with genuine heritage passion', badgeAr: '', badgeEn: '', badgeType: '', enabled: true },
];
function getTickerItems() { const saved = localStorage.getItem(tickerStorageKey); if (saved) return JSON.parse(saved); localStorage.setItem(tickerStorageKey, JSON.stringify(defaultTickerItems)); return defaultTickerItems.map(i => ({ ...i })); }
function saveTickerItems(items) { localStorage.setItem(tickerStorageKey, JSON.stringify(items)); }

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

  function getVisibleItems(lang) {
    const items = getTickerItems();
    return items.filter(i => i.enabled).map(i => ({
      text: lang === 'en' ? i.textEn : i.textAr,
      badge: lang === 'en' ? (i.badgeEn || null) : (i.badgeAr || null),
      badgeType: i.badgeType || undefined,
      isNew: i.badgeType === 'new',
    }));
  }

  function buildItems(lang) {
    const items = getVisibleItems(lang);
    return items.map(item => {
      const badgeHtml = item.badge
        ? `<span class="ticker__item-badge ticker__item-badge--${item.badgeType || ''}">${item.badge}</span>`
        : '';
      const newClass = item.isNew ? ' ticker__item--new' : '';
      return `<span class="ticker__item${newClass}">${badgeHtml}<span class="ticker__item-dot"></span><span>${item.text}</span></span>`;
    }).join('');
  }

  function renderTicker(lang) {
    const single = buildItems(lang);
    track.innerHTML = single + single;
  }

  renderTicker(currentLang);
  window.__tickerLangCallback = renderTicker;

  closeBtn.addEventListener('click', () => {
    ticker.classList.add('is-hidden');
    document.body.classList.add('ticker-dismissed');
    sessionStorage.setItem('rahala_ticker_dismissed', '1');
  });
}

// --------------------------------------------------------------------------
// 21b. IMAGE UPLOAD HELPERS
// --------------------------------------------------------------------------
function compressImage(file, maxWidth, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let w = img.width, h = img.height;
        if (w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth; }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function imageUploadHTML(inputId, previewId, currentSrc, label) {
  return `<div class="img-upload-row"><div class="img-upload-preview" id="${previewId}">${currentSrc ? `<img src="${currentSrc}" alt="preview">` : '<span class="img-upload-placeholder">—</span>'}</div><label class="img-upload-btn" for="${inputId}"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg><span>${label || 'رفع صورة'}</span></label><input type="file" id="${inputId}" accept="image/jpeg,image/jpg,image/png,image/webp" class="img-upload-input" hidden></div>`;
}

function initImageUpload(inputId, previewId, onChange) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  if (!input) return;
  input.addEventListener('change', async () => {
    const file = input.files[0];
    if (!file) return;
    if (!['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type)) {
      showToast(currentLang === 'ar' ? 'الصيغة غير مدعومة — استخدم JPG أو PNG أو WEBP' : 'Unsupported format — use JPG, PNG, or WEBP');
      input.value = '';
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      showToast(currentLang === 'ar' ? 'الملف أكبر من 8MB' : 'File is larger than 8MB');
      input.value = '';
      return;
    }
    try {
      const dataUrl = await compressImage(file, 1200, 0.82);
      if (preview) preview.innerHTML = `<img src="${dataUrl}" alt="preview">`;
      if (onChange) onChange(dataUrl);
    } catch (e) {
      showToast(currentLang === 'ar' ? 'خطأ في قراءة الصورة' : 'Error reading image');
    }
    input.value = '';
  });
}

// --------------------------------------------------------------------------
// 22. LOCAL ADMIN CONTENT DASHBOARD
// --------------------------------------------------------------------------
const siteSettingsKey = 'rahala_site_settings';

function getSiteSettings() {
  try { return JSON.parse(localStorage.getItem(siteSettingsKey)) || { translations: {}, destinations: {}, images: {} }; }
  catch (error) { return { translations: {}, destinations: {}, images: {} }; }
}

function applySiteSettings() {
  const settings = getSiteSettings();
  Object.keys(settings.translations || {}).forEach(key => {
    const [lang, translationKey] = key.split(':');
    if (translations[lang] && translationKey) translations[lang][translationKey] = settings.translations[key];
  });
  Object.keys(settings.destinations || {}).forEach(id => {
    if (!destinationDetails[id]) return;
    Object.assign(destinationDetails[id], settings.destinations[id]);
    const card = document.querySelector(`[data-dest-id="${id}"]`);
    if (card) {
      const titleKey = card.querySelector('.dest-card__title')?.dataset.i18n;
      const descKey = card.querySelector('.dest-card__desc')?.dataset.i18n;
      const tagKey = card.querySelector('.dest-card__tag')?.dataset.i18n;
      if (titleKey) { translations.ar[titleKey] = settings.destinations[id].titleAr; translations.en[titleKey] = settings.destinations[id].titleEn; }
      if (descKey) { translations.ar[descKey] = settings.destinations[id].descAr; translations.en[descKey] = settings.destinations[id].descEn; }
      if (tagKey) { translations.ar[tagKey] = settings.destinations[id].tagAr; translations.en[tagKey] = settings.destinations[id].tagEn; }
    }
  });
  applyImageSettings(settings.images || {});
}

function applyImageSettings(images) {
  if (images.logo) document.querySelectorAll('.brand-logo__img').forEach(image => image.src = images.logo);
  if (images.hero) { const image = document.querySelector('.hero__img'); if (image) image.src = images.hero; }
  if (images.cta) { const image = document.querySelector('.cta-section__bg img'); if (image) image.src = images.cta; }
  Object.keys(images).filter(key => key.startsWith('destination:')).forEach(key => {
    const image = document.querySelector(`[data-dest-id="${key.slice(12)}"] img`);
    if (image) image.src = images[key];
  });
}

function initAdminDashboard() {
  const shell = document.getElementById('admin-shell');
  const recordsEl = document.getElementById('admin-records');
  const login = document.getElementById('admin-login');
  const loginForm = document.getElementById('admin-login-form');
  const loginError = document.getElementById('admin-login-error');
  const dashboard = shell?.querySelector('.admin-dashboard');
  if (!shell || !recordsEl || !login || !loginForm || !dashboard) return;

  const storageKey = 'rahala_admin_records';
  const sectionKey = 'rahala_admin_sections';
  const authKey = 'rahala_admin_authenticated';
  const usersStorageKey = 'rahala_admin_users';
  const defaultUsers = { 'admin': { password: 'M252525s', role: 'super_admin', displayName: 'المدير الرئيسي' }, 'mo': { password: 'M123456m*s', role: 'content_manager', displayName: 'مدير المحتوى' } };
  const rolePermissions = { super_admin: { label: 'مدير النظام', permissions: ['*'] }, content_manager: { label: 'مدير محتوى', permissions: ['content.view', 'content.create', 'content.edit', 'content.delete', 'content.publish', 'books.view', 'books.create', 'books.edit', 'books.delete', 'books.publish', 'images.upload', 'files.upload.pdf', 'categories.manage'] } };
  let currentLoggedUser = null;
  let activeType = 'all';
  let editingId = null;

  const typeLabels = { post: 'مقال', book: 'كتاب أو مقال معرفي', trip: 'رحلة', announcement: 'إعلان' };
  const defaultRecords = [
    { id: 'trip-giza', type: 'trip', title: 'جولة أهرامات الجيزة', detail: 'رحلة تاريخية • القاهرة', status: 'منشور', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=300&q=80' },
    { id: 'trip-luxor', type: 'trip', title: 'أسرار الأقصر ووادي الملوك', detail: 'رحلة أثرية • 3 أيام', status: 'مسودة', image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=300&q=80' },
    { id: 'announcement-welcome', type: 'announcement', title: 'مرحباً بكم في رحّالة عبر التاريخ', detail: 'يظهر في شريط الأخبار', status: 'نشط', image: '' }
  ];
  const sectionNames = [
    ['hero', 'الواجهة الرئيسية', 'البانر التعريفي'], ['about', 'من نحن', 'قصة الشركة ورسالتها'], ['services', 'الخدمات', 'الخدمات المتخصصة'],
    ['destinations', 'الوجهات', 'وجهات مصر السياحية'], ['experiences', 'التجارب', 'أنماط الرحلات'], ['blog', 'المقالات', 'المقالات والتوعية'],
    ['why-us', 'لماذا رحّالة', 'نقاط التميز'], ['timeline', 'المسيرة', 'خط زمني للشركة'], ['contact', 'تواصل معنا', 'بيانات التواصل']
  ];

  function getUsers() { const saved = localStorage.getItem(usersStorageKey); if (saved) { const users = JSON.parse(saved); if (users['admain']) { users['admin'] = users['admain']; delete users['admain']; localStorage.setItem(usersStorageKey, JSON.stringify(users)); } return users; } localStorage.setItem(usersStorageKey, JSON.stringify(defaultUsers)); return { ...defaultUsers }; }
  function saveUsers(users) { localStorage.setItem(usersStorageKey, JSON.stringify(users)); }
  function getCurrentUser() { if (!currentLoggedUser) return null; const users = getUsers(); return users[currentLoggedUser] ? { username: currentLoggedUser, ...users[currentLoggedUser] } : null; }
  function hasPermission(permission) { const user = getCurrentUser(); if (!user) return false; const rolePerms = rolePermissions[user.role]; if (!rolePerms) return false; return rolePerms.permissions.includes('*') || rolePerms.permissions.includes(permission); }
  function isSuperAdmin() { const user = getCurrentUser(); return user && user.role === 'super_admin'; }

  function getRecords() {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : defaultRecords.slice();
  }
  function saveRecords(records) { localStorage.setItem(storageKey, JSON.stringify(records)); }
  function getSections() {
    const saved = localStorage.getItem(sectionKey);
    return saved ? JSON.parse(saved) : Object.fromEntries(sectionNames.map(section => [section[0], true]));
  }
  function escapeHtml(value) { return String(value || '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])); }
  function allContent() {
    return getBlogPosts().map(post => ({ id: post.id, type: 'post', title: post.titleAr, detail: post.excerptAr, status: 'منشور', image: post.img })).concat(getBookBlogPosts().map(post => ({ id: post.id, type: 'book', title: post.titleAr, detail: post.excerptAr, status: 'منشور', image: post.img, category: post.category, pdfUrl: post.pdfUrl || '' }))).concat(getRecords());
  }
  function refreshStats() {
    const records = allContent();
    const sections = getSections();
    document.getElementById('admin-total-count').textContent = records.length;
    document.getElementById('admin-post-count').textContent = records.filter(record => record.type === 'post').length;
    document.getElementById('admin-active-sections').textContent = Object.values(sections).filter(Boolean).length;
  }
  function renderRecords() {
    const query = (document.getElementById('admin-search-input').value || '').toLowerCase();
    const records = allContent().filter(record => (activeType === 'all' || record.type === activeType) && `${record.title} ${record.detail}`.toLowerCase().includes(query));
    recordsEl.innerHTML = records.length ? records.map(record => {
      const pdfBadge = record.type === 'book' && record.pdfUrl ? ' <span style="color:#22c55e;font-size:.7rem;font-weight:700;">📄 PDF</span>' : '';
      const pubBadge = record.type === 'book' ? (JSON.parse(localStorage.getItem('rahala_published_books_cache') || '[]').some(b => b.id === record.id) ? ' <span style="color:#22c55e;font-size:.7rem;font-weight:700;">✓ منشور</span>' : ' <span style="color:var(--text-muted);font-size:.7rem;">(محلي فقط)</span>') : '';
      return `<article class="admin-record"><img class="admin-record__thumb" src="${escapeHtml(record.image || 'images/logo.jpg')}" alt=""><div><span class="admin-record__type">${typeLabels[record.type] || 'محتوى'}</span><h4>${escapeHtml(record.title)}${pdfBadge}${pubBadge}</h4><p>${escapeHtml(record.detail)} · ${escapeHtml(record.status)}</p></div><div class="admin-record__actions"><button type="button" data-admin-edit="${escapeHtml(record.id)}">تعديل</button><button type="button" class="is-danger" data-admin-delete="${escapeHtml(record.id)}">حذف</button></div></article>`;
    }).join('') : '<div class="admin-empty">لا يوجد محتوى مطابق للبحث.</div>';
    applyAdminRBAC();
  }
  function renderSections() {
    const sections = getSections();
    document.getElementById('admin-section-list').innerHTML = sectionNames.map(([id, label, detail]) => `<div class="admin-section-row"><div><strong>${label}</strong><small>${detail}</small></div><label class="admin-switch"><input type="checkbox" data-admin-section="${id}" ${sections[id] ? 'checked' : ''}><span></span></label></div>`).join('');
  }
  function openDestinationForm(id) {
    const data = destinationDetails[id];
    const existing = document.getElementById('admin-destination-form');
    if (existing) existing.remove();
    const form = document.createElement('form');
    form.id = 'admin-destination-form'; form.className = 'admin-record-form';
    const destImgSrc = getSiteSettings().images[`destination:${id}`] || '';
    form.innerHTML = `<h3>تعديل الوجهة</h3><div class="admin-form-grid"><div class="form-group"><label class="form-label">الاسم بالعربية</label><input class="form-input" name="titleAr" required value="${escapeHtml(data.titleAr)}"></div><div class="form-group"><label class="form-label">Name in English</label><input class="form-input" name="titleEn" required value="${escapeHtml(data.titleEn)}"></div></div><div class="admin-form-grid"><div class="form-group"><label class="form-label">الوصف بالعربية</label><textarea class="form-textarea" name="descAr" rows="3">${escapeHtml(data.descAr)}</textarea></div><div class="form-group"><label class="form-label">Description in English</label><textarea class="form-textarea" name="descEn" rows="3">${escapeHtml(data.descEn)}</textarea></div></div><div class="admin-form-grid"><div class="form-group"><label class="form-label">التصنيف بالعربية</label><input class="form-input" name="tagAr" value="${escapeHtml(data.tagAr)}"></div><div class="form-group"><label class="form-label">Category in English</label><input class="form-input" name="tagEn" value="${escapeHtml(data.tagEn)}"></div></div><div class="form-group"><label class="form-label">رابط صورة الوجهة</label><input class="form-input" name="image" type="url" value="${escapeHtml(destImgSrc)}" placeholder="https://...">${imageUploadHTML('dest-form-upload-' + id, 'dest-form-preview-' + id, destImgSrc, 'رفع صورة من الجهاز')}</div><div class="admin-form-actions"><button type="button" class="btn btn--secondary" data-destination-cancel>إلغاء</button><button class="btn btn--primary" type="submit">حفظ الوجهة</button></div>`;
    document.getElementById('admin-settings-content').prepend(form);
    initImageUpload('dest-form-upload-' + id, 'dest-form-preview-' + id, dataUrl => { form.querySelector('[name="image"]').value = dataUrl; });
    form.querySelector('[data-destination-cancel]').onclick = () => form.remove();
    form.onsubmit = event => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form).entries());
      const settings = getSiteSettings(); settings.destinations[id] = { ...data, ...values }; if (values.image) settings.images[`destination:${id}`] = values.image;
      localStorage.setItem(siteSettingsKey, JSON.stringify(settings)); applySiteSettings(); if (window.__setLanguage) window.__setLanguage(currentLang); form.remove(); showToast('تم حفظ الوجهة والصورة');
    };
  }

  function renderSettings() {
    const settings = getSiteSettings();
    const textRows = Object.keys(translations.ar).map(key => `<div class="admin-copy-row"><code>${escapeHtml(key)}</code><textarea data-copy-key="${escapeHtml(key)}" data-copy-lang="ar" rows="2">${escapeHtml(translations.ar[key])}</textarea><textarea data-copy-key="${escapeHtml(key)}" data-copy-lang="en" rows="2">${escapeHtml(translations.en[key] || '')}</textarea></div>`).join('');
    const currentImage = key => settings.images[key] || (key === 'logo' ? document.querySelector('.brand-logo__img')?.src : key === 'hero' ? document.querySelector('.hero__img')?.src : key === 'cta' ? document.querySelector('.cta-section__bg img')?.src : document.querySelector(`[data-dest-id="${key.slice(12)}"] img`)?.src) || '';
    const imageRows = [['logo', 'الشعار'], ['hero', 'صورة الواجهة الرئيسية'], ['cta', 'صورة الدعوة الأخيرة']].concat(Object.keys(destinationDetails).map(id => [`destination:${id}`, `صورة ${destinationDetails[id].titleAr.split('|')[0].trim()}`])).map(([key, label]) => {
      const safeKey = key.replace(/[^a-zA-Z0-9_-]/g, '_');
      const src = currentImage(key);
      return `<div class="admin-image-row-group"><label class="admin-image-row"><span>${escapeHtml(label)}</span><input class="form-input" type="url" data-image-key="${escapeHtml(key)}" value="${escapeHtml(src)}" placeholder="https://..."></label>${imageUploadHTML('settings-upload-' + safeKey, 'settings-preview-' + safeKey, src, 'رفع')}</div>`;
    }).join('');
    const destinationRows = Object.keys(destinationDetails).map(id => `<article class="admin-destination-row"><div><strong>${escapeHtml(destinationDetails[id].titleAr)}</strong><small>${escapeHtml(destinationDetails[id].descAr.slice(0, 90))}...</small></div><button type="button" class="btn btn--secondary btn--sm" data-edit-destination="${escapeHtml(id)}">تعديل</button></article>`).join('');
    document.getElementById('admin-settings-content').innerHTML = `<div class="admin-settings-section"><div class="admin-panel__heading"><h3>الوجهات</h3><span>${Object.keys(destinationDetails).length} DESTINATIONS</span></div><div class="admin-destination-list">${destinationRows}</div></div><div class="admin-settings-section"><div class="admin-panel__heading"><h3>الصور</h3><span>IMAGE COLLECTION</span></div><div class="admin-image-list">${imageRows}</div></div><div class="admin-settings-section"><div class="admin-panel__heading"><div><h3>كل نصوص الواجهة</h3><p class="admin-muted">العربية ثم الإنجليزية لكل مفتاح ترجمة.</p></div><button type="button" class="btn btn--primary btn--sm" id="admin-save-copy">حفظ النصوص</button></div><div class="admin-copy-head"><span>KEY</span><span>العربية</span><span>ENGLISH</span></div><div class="admin-copy-list">${textRows}</div></div>`;
    document.querySelectorAll('[data-edit-destination]').forEach(button => button.onclick = () => openDestinationForm(button.dataset.editDestination));
    document.querySelectorAll('[data-image-key]').forEach(input => input.onchange = () => { const next = getSiteSettings(); next.images[input.dataset.imageKey] = input.value.trim(); localStorage.setItem(siteSettingsKey, JSON.stringify(next)); applyImageSettings(next.images); showToast('تم حفظ الصورة'); });
    [['logo', 'الشعار'], ['hero', 'صورة الواجهة الرئيسية'], ['cta', 'صورة الدعوة الأخيرة']].concat(Object.keys(destinationDetails).map(id => [`destination:${id}`, `صورة ${destinationDetails[id].titleAr.split('|')[0].trim()}`])).forEach(([key]) => {
      const safeKey = key.replace(/[^a-zA-Z0-9_-]/g, '_');
      initImageUpload('settings-upload-' + safeKey, 'settings-preview-' + safeKey, dataUrl => {
        const urlInput = document.querySelector(`[data-image-key="${key}"]`);
        if (urlInput) { urlInput.value = dataUrl; urlInput.dispatchEvent(new Event('change')); }
      });
    });
    document.getElementById('admin-save-copy').onclick = () => { const next = getSiteSettings(); document.querySelectorAll('[data-copy-key]').forEach(input => next.translations[`${input.dataset.copyLang}:${input.dataset.copyKey}`] = input.value); localStorage.setItem(siteSettingsKey, JSON.stringify(next)); applySiteSettings(); if (window.__setLanguage) window.__setLanguage(currentLang); showToast('تم حفظ نصوص الواجهة'); };
  }

  function openForm(type, record) {
    editingId = record ? record.id : null;
    const existing = document.getElementById('admin-record-form');
    if (existing) existing.remove();
    const form = document.createElement('form');
    form.id = 'admin-record-form'; form.className = 'admin-record-form';
    form.innerHTML = `<h3>${record ? 'تعديل المحتوى' : 'إضافة محتوى جديد'}</h3><div class="admin-form-grid"><div class="form-group"><label class="form-label">النوع</label><select class="form-select" id="admin-form-type"><option value="post">مقال</option><option value="book">كتاب أو مقال معرفي</option><option value="trip">رحلة</option><option value="announcement">إعلان</option></select></div><div class="form-group"><label class="form-label">العنوان *</label><input class="form-input" id="admin-form-title" required value="${escapeHtml(record ? record.title : '')}"></div></div><div class="admin-form-grid"><div class="form-group"><label class="form-label">اسم صاحب المحتوى / الكاتب</label><input class="form-input" id="admin-form-author" value="${escapeHtml(record ? (record.authorAr || '') : '')}" placeholder="مثال: عفاف محمد البقاشي"></div><div class="form-group" id="admin-post-category-group" hidden><label class="form-label">تصنيف المقال</label><select class="form-select" id="admin-post-category"><option value="ancient">🏛️ تاريخ مصري قديم</option><option value="islamic">🕌 تاريخ إسلامي</option><option value="coptic">⛪ تاريخ قبطي</option><option value="modern">🏙️ تاريخ مصر الحديث</option><option value="europe">🏰 تاريخ أوروبا</option></select></div></div><div class="form-group" id="admin-book-category-group" hidden><label class="form-label">تصنيف المحتوى</label><select class="form-select" id="admin-book-category"><option value="scientific">كتب علمية</option><option value="history">كتب الحضارات والتاريخ</option><option value="miscellaneous">كتب متنوعة</option></select></div></div><div class="form-group" id="admin-book-pdf-group" hidden><label class="form-label">ملف PDF الكتاب</label><input class="form-input" type="file" id="admin-book-pdf" accept=".pdf,application/pdf"><small class="form-hint">ارفع ملف PDF للكتاب (الحد الأقصى ~5MB). ${record?.pdfUrl ? '✓ ملف PDF مرفق مسبقاً — ارفع ملفاً جديداً للاستبدال.' : ''}</small><div id="admin-book-pdf-status" class="form-pdf-status"></div></div><div class="form-group"><label class="form-label">الوصف أو التفاصيل</label><textarea class="form-textarea" id="admin-form-detail" rows="2">${escapeHtml(record ? record.detail : '')}</textarea></div><div class="form-group"><label class="form-label">رابط الصورة</label><input class="form-input" type="url" id="admin-form-image" value="${escapeHtml(record ? record.image : '')}" placeholder="https://...">${imageUploadHTML('admin-form-image-upload', 'admin-form-image-preview', record?.image, 'رفع صورة من الجهاز')}</div><div class="admin-form-actions"><button type="button" class="btn btn--secondary" id="admin-form-cancel">إلغاء</button><button class="btn btn--primary" type="submit">حفظ التغييرات</button></div>`;
    document.getElementById('admin-content-view').prepend(form);
    initImageUpload('admin-form-image-upload', 'admin-form-image-preview', dataUrl => { document.getElementById('admin-form-image').value = dataUrl; });
    document.getElementById('admin-form-type').value = record ? record.type : type;
    const updateBookFields = () => { const isBook = document.getElementById('admin-form-type').value === 'book'; document.getElementById('admin-book-category-group').hidden = !isBook; document.getElementById('admin-book-pdf-group').hidden = !isBook; const postCatGroup = document.getElementById('admin-post-category-group'); if (postCatGroup) postCatGroup.hidden = isBook; const actionsEl = form.querySelector('.admin-form-actions'); let pubBtn = document.getElementById('admin-book-publish'); let unpubBtn = document.getElementById('admin-book-unpublish'); let pubStatus = document.getElementById('admin-book-publish-status'); if (isBook && !pubBtn) { pubStatus = document.createElement('div'); pubStatus.id = 'admin-book-publish-status'; pubStatus.className = 'form-pdf-status'; pubBtn = document.createElement('button'); pubBtn.type = 'button'; pubBtn.id = 'admin-book-publish'; pubBtn.className = 'btn btn--success btn--sm'; pubBtn.textContent = 'نشر في المكتبة العامة'; unpubBtn = document.createElement('button'); unpubBtn.type = 'button'; unpubBtn.id = 'admin-book-unpublish'; unpubBtn.className = 'btn btn--danger btn--sm'; unpubBtn.textContent = 'إلغاء النشر'; unpubBtn.hidden = true; actionsEl.insertBefore(pubBtn, actionsEl.firstChild); actionsEl.insertBefore(unpubBtn, pubBtn.nextSibling); actionsEl.insertBefore(pubStatus, unpubBtn.nextSibling); pubBtn.addEventListener('click', async () => { console.log('[Publish] Button clicked, DataService.isReady:', typeof DataService !== 'undefined' && DataService.isReady && DataService.isReady()); pubBtn.disabled = true; pubBtn.textContent = 'جاري النشر...'; try { const bookData = { id: editingId || `book-post-${Date.now()}`, category: document.getElementById('admin-book-category').value, date: new Date().toISOString().slice(0, 10), authorAr: 'رحّالة عبر التاريخ', authorEn: 'Rahala Through History', img: document.getElementById('admin-form-image').value.trim() || 'images/logo.jpg', titleAr: document.getElementById('admin-form-title').value.trim(), titleEn: document.getElementById('admin-form-title').value.trim(), excerptAr: document.getElementById('admin-form-detail').value.trim(), excerptEn: document.getElementById('admin-form-detail').value.trim(), contentAr: `<p>${document.getElementById('admin-form-detail').value.trim()}</p>`, contentEn: `<p>${document.getElementById('admin-form-detail').value.trim()}</p>`, pdfUrl: pendingPdfData || '' }; if (typeof DataService !== 'undefined' && DataService.isReady && DataService.isReady()) { await DataService.publishBook(bookData); pubBtn.hidden = true; unpubBtn.hidden = false; pubStatus.innerHTML = '<span style="color:#22c55e;">✓ تم النشر على كل الأجهزة</span>'; showToast('تم النشر — ظاهر للزوار على كل الأجهزة'); } else { const posts = getBookBlogPosts(); const existing = posts.find(p => p.id === bookData.id); if (existing) Object.assign(existing, bookData); else posts.unshift(bookData); saveBookBlogPosts(posts); pubBtn.hidden = true; unpubBtn.hidden = false; pubStatus.innerHTML = '<span style="color:#f59e0b;">⚠ منشور محلياً فقط — أعد Firebase للنشر على كل الأجهزة</span>'; showToast('تم النشر محلياً — يظهر على هذا الجهاز فقط'); } renderBookBlogGrid('all'); } catch (err) { showToast('خطأ في النشر: ' + err.message); } finally { pubBtn.disabled = false; pubBtn.textContent = 'نشر في المكتبة العامة'; } }); unpubBtn.addEventListener('click', async () => { if (!confirm('هل تريد إلغاء نشر هذا الكتاب؟')) return; unpubBtn.disabled = true; try { if (typeof DataService !== 'undefined' && DataService.isReady && DataService.isReady()) { await DataService.unpublishBook(editingId); } unpubBtn.hidden = true; pubBtn.hidden = false; pubStatus.innerHTML = ''; showToast('تم إلغاء النشر'); renderBookBlogGrid('all'); } catch (err) { showToast('خطأ: ' + err.message); } finally { unpubBtn.disabled = false; } }); } else if (!isBook && pubBtn) { pubBtn.remove(); unpubBtn.remove(); pubStatus.remove(); } };
    document.getElementById('admin-form-type').addEventListener('change', updateBookFields);
    if (record?.category) document.getElementById('admin-book-category').value = record.category;
    if (record?.category) document.getElementById('admin-post-category').value = record.category;
    document.getElementById('admin-post-category-group').hidden = !(document.getElementById('admin-form-type').value === 'post');
    updateBookFields();
    document.getElementById('admin-form-cancel').onclick = () => form.remove();
    let pendingPdfData = record?.pdfUrl || null;
    const pdfInput = document.getElementById('admin-book-pdf');
    const pdfStatus = document.getElementById('admin-book-pdf-status');
    if (record?.pdfUrl) { pdfStatus.innerHTML = '<span style="color:var(--primary-blue);">✓ ملف PDF مرفق مسبقاً</span>'; }
    if (pdfInput) {
      pdfInput.addEventListener('change', () => {
        const file = pdfInput.files[0];
        if (!file) return;
        if (file.type !== 'application/pdf') { pdfStatus.innerHTML = '<span style="color:#ef4444;">الملف يجب أن يكون PDF</span>'; pdfInput.value = ''; return; }
        if (file.size > 5 * 1024 * 1024) { pdfStatus.innerHTML = '<span style="color:#ef4444;">الملف أكبر من 5MB — يرجى اختيار ملف أصغر</span>'; pdfInput.value = ''; return; }
        pdfStatus.innerHTML = '<span style="color:var(--text-muted);">جاري قراءة الملف...</span>';
        const reader = new FileReader();
        reader.onload = () => { pendingPdfData = reader.result; pdfStatus.innerHTML = `<span style="color:#22c55e;">✓ تم رفع: ${escapeHtml(file.name)} (${(file.size / 1024 / 1024).toFixed(1)}MB)</span>`; };
        reader.onerror = () => { pdfStatus.innerHTML = '<span style="color:#ef4444;">خطأ في قراءة الملف</span>'; };
        reader.readAsDataURL(file);
      });
    }
    form.onsubmit = event => {
      event.preventDefault();
      if (!hasPermission('content.create') && !editingId) { showToast('ليس لديك صلاحية إنشاء محتوى'); return; }
      if (!hasPermission('content.edit') && editingId) { showToast('ليس لديك صلاحية التعديل'); return; }
      const values = { type: document.getElementById('admin-form-type').value, title: document.getElementById('admin-form-title').value.trim(), detail: document.getElementById('admin-form-detail').value.trim(), image: document.getElementById('admin-form-image').value.trim(), author: document.getElementById('admin-form-author').value.trim() };
      if (!values.title) return;
      const authorName = values.author || 'رحّالة عبر التاريخ';
      const postCategory = document.getElementById('admin-post-category') ? document.getElementById('admin-post-category').value : 'modern';
      if (values.type === 'book') {
        const posts = getBookBlogPosts();
        const post = posts.find(item => item.id === editingId);
        const saved = { id: editingId || `book-post-${Date.now()}`, category: document.getElementById('admin-book-category').value, date: new Date().toISOString().slice(0, 10), authorAr: authorName, authorEn: authorName, img: values.image || 'images/logo.jpg', titleAr: values.title, titleEn: values.title, excerptAr: values.detail, excerptEn: values.detail, contentAr: `<p>${values.detail}</p>`, contentEn: `<p>${values.detail}</p>`, pdfUrl: pendingPdfData || '' };
        if (post) Object.assign(post, saved); else posts.unshift(saved);
        saveBookBlogPosts(posts); renderBookBlogGrid('all');
      } else if (values.type === 'post') {
        const posts = getBlogPosts(); const post = posts.find(item => item.id === editingId);
        if (post) { post.titleAr = values.title; post.titleEn = values.title; post.excerptAr = values.detail; post.excerptEn = values.detail; post.img = values.image || post.img; post.authorAr = authorName; post.authorEn = authorName; post.category = postCategory; saveBlogPosts(posts); }
        else { posts.unshift({ id: 'admin-post-' + Date.now(), category: postCategory, date: new Date().toISOString().slice(0, 10), authorAr: authorName, authorEn: authorName, readTimeAr: '4 دقائق قراءة', readTimeEn: '4 min read', img: values.image || 'images/logo.jpg', titleAr: values.title, titleEn: values.title, excerptAr: values.detail, excerptEn: values.detail, contentAr: `<p>${values.detail}</p>`, contentEn: `<p>${values.detail}</p>` }); saveBlogPosts(posts); }
        renderLatestPosts(); renderBlogGrid('all');
      } else {
        const records = getRecords(); const index = records.findIndex(item => item.id === editingId); const item = { id: editingId || `admin-${values.type}-${Date.now()}`, status: 'نشط', ...values };
        if (index >= 0) records[index] = item; else records.unshift(item); saveRecords(records);
      }
      form.remove(); renderRecords(); refreshStats(); showToast('تم حفظ التغييرات بنجاح');
    };
  }
  function renderUsers() {
    const users = getUsers();
    const el = document.getElementById('admin-users-list');
    if (!el) return;
    const roleLabels = { super_admin: 'مدير النظام', content_manager: 'مدير محتوى' };
    el.innerHTML = Object.keys(users).map(username => {
      const user = users[username];
      const isSelf = username === currentLoggedUser;
      return `<article class="admin-user-row"><div class="admin-user-info"><strong>${escapeHtml(username)}</strong><span class="admin-user-role-badge ${user.role === 'super_admin' ? 'admin-user-role-badge--admin' : 'admin-user-role-badge--cm'}">${roleLabels[user.role] || user.role}</span><small>${escapeHtml(user.displayName || '')}</small></div><div class="admin-user-actions">${!isSelf ? `<button type="button" class="btn btn--secondary btn--sm" data-edit-user="${escapeHtml(username)}">تعديل</button><button type="button" class="btn btn--danger btn--sm" data-delete-user="${escapeHtml(username)}">حذف</button>` : '<span class="admin-user-self">هذا هو حسابك الحالي</span>'}</div></article>`;
    }).join('');
  }
  function openUserForm(editUsername) {
    const users = getUsers();
    const existing = document.getElementById('admin-user-form');
    if (existing) existing.remove();
    const record = editUsername ? users[editUsername] : null;
    const form = document.createElement('form');
    form.id = 'admin-user-form'; form.className = 'admin-record-form';
    form.innerHTML = `<h3>${record ? 'تعديل المستخدم' : 'إضافة مستخدم جديد'}</h3><div class="admin-form-grid"><div class="form-group"><label class="form-label">اسم المستخدم *</label><input class="form-input" id="admin-user-username" required value="${escapeHtml(editUsername || '')}" ${record ? 'readonly style="opacity:.6;cursor:not-allowed;"' : ''}></div><div class="form-group"><label class="form-label">الاسم المعروض</label><input class="form-input" id="admin-user-display" value="${escapeHtml(record?.displayName || '')}"></div></div><div class="admin-form-grid"><div class="form-group"><label class="form-label">كلمة المرور ${record ? '(اترُها فارغة لعدم التغيير)' : '*'}"</label><input class="form-input" type="password" id="admin-user-password" ${record ? '' : 'required'} autocomplete="new-password"></div><div class="form-group"><label class="form-label">الدور</label><select class="form-select" id="admin-user-role"><option value="content_manager" ${record?.role === 'content_manager' ? 'selected' : ''}>مدير محتوى</option><option value="super_admin" ${record?.role === 'super_admin' ? 'selected' : ''}>مدير النظام</option></select></div></div><div class="admin-form-actions"><button type="button" class="btn btn--secondary" data-user-cancel>إلغاء</button><button class="btn btn--primary" type="submit">حفظ المستخدم</button></div>`;
    document.getElementById('admin-users-list').prepend(form);
    form.querySelector('[data-user-cancel]').onclick = () => form.remove();
    form.onsubmit = event => {
      event.preventDefault();
      const username = document.getElementById('admin-user-username').value.trim();
      const displayName = document.getElementById('admin-user-display').value.trim();
      const password = document.getElementById('admin-user-password').value;
      const role = document.getElementById('admin-user-role').value;
      if (!username) return showToast('اسم المستخدم مطلوب');
      if (!record && !password) return showToast('كلمة المرور مطلوبة');
      if (password && password.length < 6) return showToast('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
      const allUsers = getUsers();
      if (!record && allUsers[username]) return showToast('اسم المستخدم موجود مسبقاً');
      allUsers[username] = { password: password || record.password, role, displayName };
      saveUsers(allUsers);
      form.remove(); renderUsers(); showToast(record ? 'تم تحديث المستخدم' : 'تمت إضافة المستخدم');
    };
  }

  // ── NEWS TICKER ADMIN ──

  function renderTickerAdmin() {
    const items = getTickerItems();
    const el = document.getElementById('admin-ticker-list');
    if (!el) return;
    if (!items.length) { el.innerHTML = '<div class="admin-empty">لا توجد عناصر في شريط الأخبار.</div>'; return; }
    el.innerHTML = items.map((item, idx) => {
      const badge = item.badgeAr ? `<span class="ticker-badge ticker-badge--${item.badgeType || 'default'}">${escapeHtml(item.badgeAr)}</span>` : '';
      return `<article class="admin-ticker-row ${item.enabled ? '' : 'admin-ticker-row--disabled'}" data-ticker-id="${escapeHtml(item.id)}"><div class="admin-ticker-info"><span class="admin-ticker-drag" title="سحب للترتيب">⠿</span><div class="admin-ticker-text"><strong>${escapeHtml(item.textAr)}</strong><small>${escapeHtml(item.textEn)}</small></div>${badge}</div><div class="admin-ticker-actions"><button type="button" class="admin-ticker-toggle ${item.enabled ? 'admin-ticker-toggle--on' : ''}" data-ticker-toggle="${escapeHtml(item.id)}" title="${item.enabled ? 'تعطيل' : 'تفعيل'}">${item.enabled ? '●' : '○'}</button><button type="button" class="btn btn--secondary btn--sm" data-ticker-up="${escapeHtml(item.id)}" title="تحريك لأعلى" ${idx === 0 ? 'disabled' : ''}>▲</button><button type="button" class="btn btn--secondary btn--sm" data-ticker-down="${escapeHtml(item.id)}" title="تحريك للأسفل" ${idx === items.length - 1 ? 'disabled' : ''}>▼</button><button type="button" class="btn btn--secondary btn--sm" data-ticker-edit="${escapeHtml(item.id)}">تعديل</button><button type="button" class="btn btn--danger btn--sm" data-ticker-delete="${escapeHtml(item.id)}">حذف</button></div></article>`;
    }).join('');
  }

  function openTickerForm(editId) {
    const items = getTickerItems();
    const existing = document.getElementById('admin-ticker-form');
    if (existing) existing.remove();
    const record = editId ? items.find(i => i.id === editId) : null;
    const form = document.createElement('form');
    form.id = 'admin-ticker-form'; form.className = 'admin-record-form';
    form.innerHTML = `<h3>${record ? 'تعديل الخبر' : 'إضافة خبر جديد'}</h3><div class="admin-form-grid"><div class="form-group"><label class="form-label">النص بالعربية *</label><input class="form-input" id="ticker-text-ar" required value="${escapeHtml(record?.textAr || '')}" placeholder="أدخل الخبر بالعربية"></div><div class="form-group"><label class="form-label">English Text *</label><input class="form-input" id="ticker-text-en" required value="${escapeHtml(record?.textEn || '')}" placeholder="Enter news in English"></div></div><div class="admin-form-grid"><div class="form-group"><label class="form-label">شارة بالعربية (اختياري)</label><input class="form-input" id="ticker-badge-ar" value="${escapeHtml(record?.badgeAr || '')}" placeholder="مثلاً: جديد"></div><div class="form-group"><label class="form-label">Badge in English (optional)</label><input class="form-input" id="ticker-badge-en" value="${escapeHtml(record?.badgeEn || '')}" placeholder="e.g. New"></div></div><div class="form-group"><label class="form-label">نوع الشارة</label><select class="form-select" id="ticker-badge-type"><option value="" ${!record?.badgeType ? 'selected' : ''}>بدون شارة</option><option value="new" ${record?.badgeType === 'new' ? 'selected' : ''}>جديد (New) — أخضر</option><option value="hot" ${record?.badgeType === 'hot' ? 'selected' : ''}>ساخن (Hot) — أحمر</option></select></div><div class="admin-form-actions"><button type="button" class="btn btn--secondary" data-ticker-cancel>إلغاء</button><button class="btn btn--primary" type="submit">حفظ الخبر</button></div>`;
    document.getElementById('admin-ticker-list').prepend(form);
    form.querySelector('[data-ticker-cancel]').onclick = () => form.remove();
    form.onsubmit = event => {
      event.preventDefault();
      const textAr = document.getElementById('ticker-text-ar').value.trim();
      const textEn = document.getElementById('ticker-text-en').value.trim();
      const badgeAr = document.getElementById('ticker-badge-ar').value.trim();
      const badgeEn = document.getElementById('ticker-badge-en').value.trim();
      const badgeType = document.getElementById('ticker-badge-type').value;
      if (!textAr || !textEn) return showToast('النص مطلوب بالعربية والإنجليزية');
      const allItems = getTickerItems();
      if (record) { Object.assign(record, { textAr, textEn, badgeAr, badgeEn, badgeType }); }
      else { allItems.unshift({ id: 'tick-' + Date.now(), textAr, textEn, badgeAr, badgeEn, badgeType, enabled: true }); }
      saveTickerItems(allItems); form.remove(); renderTickerAdmin(); refreshTickerFrontend(); showToast(record ? 'تم تحديث الخبر' : 'تمت إضافة الخبر');
    };
  }

  function refreshTickerFrontend() { if (window.__tickerLangCallback) window.__tickerLangCallback(currentLang); }

  function populateUserSelect() {
    const sel = document.getElementById('admin-username');
    if (!sel) return;
    const users = getUsers();
    sel.innerHTML = '<option value="" disabled selected>اختر المستخدم...</option>';
    Object.keys(users).forEach(username => {
      const opt = document.createElement('option');
      opt.value = username;
      opt.textContent = users[username].displayName ? `${users[username].displayName} (${username})` : username;
      sel.appendChild(opt);
    });
  }

  // ── ADD 6 BOOKS (BULK PUBLISHER) ──
  // Six independent book rows (PDF + cover + title + author). Clicking "نشر الكتب"
  // publishes every COMPLETED row at once into the 'history' (التاريخ والحضارات)
  // category. Incomplete rows are skipped independently and never block the others.
  let sixBooksBuilt = false;
  function initSixBooksView() {
    const container = document.getElementById('admin-sixbooks-content');
    if (!container || sixBooksBuilt) return;
    sixBooksBuilt = true;

    const rowState = Array.from({ length: 6 }, () => ({ pdfData: '', imgData: '' }));

    const rowsHtml = Array.from({ length: 6 }, (_, idx) => {
      const n = idx + 1;
      return `<div class="sixbook-row"><div class="sixbook-row__head"><span class="sixbook-row__num">${n}</span><h4>كتاب ${n}</h4></div><div class="sixbook-row__grid"><div class="form-group"><label class="form-label">ملف PDF الكتاب</label><input class="form-input" type="file" accept=".pdf,application/pdf" data-sixbook-pdf="${idx}"><div class="form-pdf-status" data-sixbook-pdf-status="${idx}"></div></div><div class="form-group"><label class="form-label">صورة الغلاف (JPG)</label><input class="form-input" type="file" accept="image/jpeg,image/jpg,image/png,image/webp" data-sixbook-img="${idx}"><div class="form-pdf-status" data-sixbook-img-status="${idx}"></div></div><div class="form-group"><label class="form-label">عنوان الكتاب *</label><input class="form-input" type="text" data-sixbook-title="${idx}" placeholder="أدخل عنوان الكتاب"></div><div class="form-group"><label class="form-label">اسم المؤلف</label><input class="form-input" type="text" data-sixbook-author="${idx}" placeholder="أدخل اسم المؤلف"></div></div></div>`;
    }).join('');

    container.innerHTML = `<form id="sixbooks-form" class="admin-record-form">${rowsHtml}<div class="sixbook-actions"><span class="form-hint">تُنشر الكتب المكتملة فقط في "كتب الحضارات والتاريخ". تُتجاهل الحقول الفارغة ولا تؤثر على بقية الكتب.</span><button type="button" class="btn btn--success" id="sixbooks-publish">نشر الكتب</button></div></form>`;

    container.querySelectorAll('[data-sixbook-pdf]').forEach(input => input.addEventListener('change', () => {
      const idx = Number(input.dataset.sixbookPdf);
      const file = input.files[0];
      const statusEl = container.querySelector(`[data-sixbook-pdf-status="${idx}"]`);
      if (!file) { rowState[idx].pdfData = ''; statusEl.innerHTML = ''; return; }
      if (file.type !== 'application/pdf') { statusEl.innerHTML = '<span style="color:#ef4444;">الملف يجب أن يكون PDF</span>'; input.value = ''; rowState[idx].pdfData = ''; return; }
      statusEl.innerHTML = '<span style="color:var(--text-muted);">جاري قراءة الملف...</span>';
      const reader = new FileReader();
      reader.onload = () => { rowState[idx].pdfData = reader.result; statusEl.innerHTML = `<span style="color:#22c55e;">✓ ${escapeHtml(file.name)} (${(file.size / 1024 / 1024).toFixed(1)}MB)</span>`; };
      reader.onerror = () => { statusEl.innerHTML = '<span style="color:#ef4444;">خطأ في قراءة الملف</span>'; };
      reader.readAsDataURL(file);
    }));

    container.querySelectorAll('[data-sixbook-img]').forEach(input => input.addEventListener('change', () => {
      const idx = Number(input.dataset.sixbookImg);
      const file = input.files[0];
      const statusEl = container.querySelector(`[data-sixbook-img-status="${idx}"]`);
      if (!file) { rowState[idx].imgData = ''; statusEl.innerHTML = ''; return; }
      if (file.type.indexOf('image/') !== 0) { statusEl.innerHTML = '<span style="color:#ef4444;">الملف يجب أن يكون صورة</span>'; input.value = ''; rowState[idx].imgData = ''; return; }
      statusEl.innerHTML = '<span style="color:var(--text-muted);">جاري قراءة الصورة...</span>';
      const reader = new FileReader();
      reader.onload = () => { rowState[idx].imgData = reader.result; statusEl.innerHTML = `<span style="color:#22c55e;">✓ ${escapeHtml(file.name)} (${(file.size / 1024 / 1024).toFixed(1)}MB)</span>`; };
      reader.onerror = () => { statusEl.innerHTML = '<span style="color:#ef4444;">خطأ في قراءة الصورة</span>'; };
      reader.readAsDataURL(file);
    }));

    document.getElementById('sixbooks-publish').addEventListener('click', () => {
      const existing = getBatchBooks();
      const existingIds = new Set(existing.map(b => b && b.id));
      let publishedCount = 0;
      for (let idx = 0; idx < 6; idx++) {
        const title = (container.querySelector(`[data-sixbook-title="${idx}"]`).value || '').trim();
        const author = (container.querySelector(`[data-sixbook-author="${idx}"]`).value || '').trim();
        const pdf = rowState[idx].pdfData;
        // Incomplete rows are skipped independently.
        if (!title || !pdf) continue;
        let id = `batch-book-${Date.now()}-${idx}`;
        while (existingIds.has(id)) id = `batch-book-${Date.now()}-${idx}-${Math.floor(Math.random() * 10000)}`;
        existingIds.add(id);
        const safeTitle = title.replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
        existing.push({
          id,
          category: 'history',
          date: (new Date()).toISOString().slice(0, 10),
          authorAr: author || 'رحّالة عبر التاريخ',
          authorEn: author || 'Rahala Through History',
          img: rowState[idx].imgData || 'images/logo.jpg',
          titleAr: title,
          titleEn: title,
          excerptAr: title,
          excerptEn: title,
          contentAr: `<p>${safeTitle}</p>`,
          contentEn: `<p>${safeTitle}</p>`,
          pdfUrl: pdf
        });
        publishedCount++;
        // Reset this row so single-book independence is preserved.
        rowState[idx] = { pdfData: '', imgData: '' };
        container.querySelector(`[data-sixbook-title="${idx}"]`).value = '';
        container.querySelector(`[data-sixbook-author="${idx}"]`).value = '';
        container.querySelector(`[data-sixbook-pdf="${idx}"]`).value = '';
        container.querySelector(`[data-sixbook-img="${idx}"]`).value = '';
        container.querySelector(`[data-sixbook-pdf-status="${idx}"]`).innerHTML = '';
        container.querySelector(`[data-sixbook-img-status="${idx}"]`).innerHTML = '';
      }
      try {
        saveBatchBooks(existing);
      } catch (e) {
        showToast('تعذّر الحفظ — الملفات كبير جداً لتخزينها محلياً (حد المتصفح). استخدم ملفات أصغر.');
        return;
      }
      if (publishedCount === 0) { showToast('لم تُنشر أي كتب — تأكد من إدخال العنوان وملف PDF لكل كتاب تريد نشره'); return; }
      renderBookBlogGrid('all');
      renderRecords(); refreshStats();
      showToast(`تم نشر ${publishedCount} كتاب في "كتب الحضارات والتاريخ" بنجاح`);
    });
  }

  function showLogin() { currentLoggedUser = null; login.hidden = false; dashboard.hidden = true; loginForm.reset(); loginError.hidden = true; populateUserSelect(); document.getElementById('admin-username').focus(); applyAdminRBAC(); }
  function showDashboard() { login.hidden = true; dashboard.hidden = false; applyAdminRBAC(); refreshStats(); renderRecords(); renderSections(); renderSettings(); renderUsers(); renderTickerAdmin(); initSixBooksView(); }
  function openDashboard() { shell.classList.add('is-open'); shell.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; const stored = sessionStorage.getItem(authKey); if (stored && getUsers()[stored]) { currentLoggedUser = stored; showDashboard(); } else { showLogin(); } }
  function closeDashboard() { shell.classList.remove('is-open'); shell.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; sessionStorage.removeItem(authKey); currentLoggedUser = null; }
  loginForm.addEventListener('submit', event => { event.preventDefault(); const formData = new FormData(loginForm); const username = formData.get('username'); const password = formData.get('password'); const users = getUsers(); if (!username) { loginError.hidden = false; loginError.textContent = 'يرجى اختيار اسم المستخدم.'; return; } loginError.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة.'; if (users[username] && users[username].password === password) { sessionStorage.setItem(authKey, username); currentLoggedUser = username; showDashboard(); } else { loginError.hidden = false; document.getElementById('admin-password').select(); } });
  function applyAdminRBAC() {
    const user = getCurrentUser();
    const sa = user && user.role === 'super_admin';
    const roleLabels = { super_admin: 'مدير النظام', content_manager: 'مدير محتوى' };
    const label = document.getElementById('admin-user-label');
    if (label && user) label.textContent = `${roleLabels[user.role] || user.role} — ${user.displayName || user.username}`;
    document.querySelectorAll('[data-rbac-users]').forEach(el => el.hidden = !sa);
    document.querySelectorAll('[data-rbac-settings]').forEach(el => el.hidden = !sa);
    document.querySelectorAll('[data-rbac-sections]').forEach(el => el.hidden = !sa);
    document.querySelectorAll('[data-rbac-overview]').forEach(el => el.hidden = false);
    document.querySelectorAll('[data-rbac-content]').forEach(el => el.hidden = false);
    const canCreate = hasPermission('content.create');
    const addBtn = document.getElementById('admin-add-record');
    if (addBtn) addBtn.hidden = !canCreate;
    document.querySelectorAll('[data-admin-create]').forEach(btn => btn.hidden = !canCreate);
    document.querySelectorAll('.admin-record__actions button[data-admin-edit]').forEach(btn => btn.hidden = !hasPermission('content.edit'));
    document.querySelectorAll('.admin-record__actions button[data-admin-delete]').forEach(btn => btn.hidden = !hasPermission('content.delete'));
  }
  document.getElementById('admin-toggle').addEventListener('click', openDashboard);
  document.getElementById('admin-login-close').addEventListener('click', closeDashboard); document.getElementById('admin-close').addEventListener('click', closeDashboard); document.getElementById('admin-back').addEventListener('click', closeDashboard); document.getElementById('admin-overlay').addEventListener('click', closeDashboard);
  document.querySelectorAll('[data-admin-view]').forEach(button => button.addEventListener('click', () => { const view = button.dataset.adminView; if (view === 'settings' && !isSuperAdmin()) return; if (view === 'sections' && !isSuperAdmin()) return; if (view === 'users' && !isSuperAdmin()) return; document.querySelectorAll('[data-admin-view]').forEach(item => item.classList.remove('is-active')); button.classList.add('is-active'); document.querySelectorAll('.admin-view').forEach(item => item.hidden = item.id !== `admin-${view}-view`); document.getElementById('admin-view-title').textContent = view === 'overview' ? 'نظرة عامة' : view === 'content' ? 'إدارة المحتوى' : view === 'sixbooks' ? 'إضافة 6 كتب' : view === 'sections' ? 'أقسام الموقع' : view === 'users' ? 'إدارة المستخدمين' : 'إعدادات الموقع'; }));
  document.querySelectorAll('[data-admin-create]').forEach(button => button.addEventListener('click', () => { document.querySelector('[data-admin-view="content"]').click(); openForm(button.dataset.adminCreate); }));
  document.getElementById('admin-add-record').addEventListener('click', () => { const selectedType = document.querySelector('[data-admin-type].is-active')?.dataset.adminType || activeType; openForm(selectedType === 'all' ? 'post' : selectedType); });
  document.querySelectorAll('[data-admin-type]').forEach(button => button.addEventListener('click', () => { activeType = button.dataset.adminType; document.querySelectorAll('[data-admin-type]').forEach(item => item.classList.remove('is-active')); button.classList.add('is-active'); renderRecords(); }));
  document.getElementById('admin-search-input').addEventListener('input', renderRecords);
  recordsEl.addEventListener('click', event => { const id = event.target.dataset.adminEdit || event.target.dataset.adminDelete; if (!id) return; const record = allContent().find(item => item.id === id); if (event.target.dataset.adminEdit) { if (!hasPermission('content.edit')) { showToast('ليس لديك صلاحية التعديل'); return; } openForm(record.type, record); } else if (event.target.dataset.adminDelete) { if (!hasPermission('content.delete')) { showToast('ليس لديك صلاحية الحذف'); return; } if (confirm('هل تريد حذف هذا المحتوى؟')) { if (record.type === 'post') saveBlogPosts(getBlogPosts().filter(item => item.id !== id)); else if (record.type === 'book') saveBookBlogPosts(getBookBlogPosts().filter(item => item.id !== id)); else saveRecords(getRecords().filter(item => item.id !== id)); renderBookBlogGrid('all'); renderRecords(); refreshStats(); showToast('تم حذف المحتوى'); } } });
  document.getElementById('admin-section-list').addEventListener('change', event => { if (!isSuperAdmin()) { showToast('ليس لديك صلاحية تغيير الأقسام'); event.target.checked = !event.target.checked; return; } const id = event.target.dataset.adminSection; if (!id) return; const sections = getSections(); sections[id] = event.target.checked; localStorage.setItem(sectionKey, JSON.stringify(sections)); const section = document.getElementById(id); if (section) section.hidden = !event.target.checked; refreshStats(); });
  sectionNames.forEach(([id]) => { const sections = getSections(); const section = document.getElementById(id); if (section) section.hidden = sections[id] === false; });
  document.getElementById('admin-add-user').addEventListener('click', () => openUserForm());
  document.getElementById('admin-users-list').addEventListener('click', event => {
    if (event.target.dataset.editUser) openUserForm(event.target.dataset.editUser);
    else if (event.target.dataset.deleteUser) {
      const uname = event.target.dataset.deleteUser;
      if (uname === currentLoggedUser) return showToast('لا يمكنك حذف حسابك الحالي');
      if (confirm(`هل تريد حذف المستخدم "${uname}"؟`)) {
        const users = getUsers(); delete users[uname]; saveUsers(users); renderUsers(); showToast('تم حذف المستخدم');
      }
    }
  });
  document.getElementById('admin-add-ticker').addEventListener('click', () => openTickerForm());
  document.getElementById('admin-ticker-list').addEventListener('click', event => {
    if (event.target.dataset.tickerEdit) openTickerForm(event.target.dataset.tickerEdit);
    else if (event.target.dataset.tickerDelete) {
      if (confirm('هل تريد حذف هذا الخبر؟')) {
        const items = getTickerItems().filter(i => i.id !== event.target.dataset.tickerDelete);
        saveTickerItems(items); renderTickerAdmin(); refreshTickerFrontend(); showToast('تم حذف الخبر');
      }
    } else if (event.target.dataset.tickerToggle) {
      const items = getTickerItems(); const item = items.find(i => i.id === event.target.dataset.tickerToggle);
      if (item) { item.enabled = !item.enabled; saveTickerItems(items); renderTickerAdmin(); refreshTickerFrontend(); }
    } else if (event.target.dataset.tickerUp) {
      const items = getTickerItems(); const idx = items.findIndex(i => i.id === event.target.dataset.tickerUp);
      if (idx > 0) { [items[idx - 1], items[idx]] = [items[idx], items[idx - 1]]; saveTickerItems(items); renderTickerAdmin(); refreshTickerFrontend(); }
    } else if (event.target.dataset.tickerDown) {
      const items = getTickerItems(); const idx = items.findIndex(i => i.id === event.target.dataset.tickerDown);
      if (idx < items.length - 1) { [items[idx], items[idx + 1]] = [items[idx + 1], items[idx]]; saveTickerItems(items); renderTickerAdmin(); refreshTickerFrontend(); }
    }
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && shell.classList.contains('is-open')) closeDashboard(); });
}
