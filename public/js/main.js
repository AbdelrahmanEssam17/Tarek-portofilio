document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  // Cinematic Page Preloader
  const preloader = document.getElementById("preloader");
  const preloaderFill = document.getElementById("preloader-fill");
  const preloaderCount = document.getElementById("preloader-count");
  const preloaderStatus = document.getElementById("preloader-status");

  function dismissPreloader() {
    if (preloader && !preloader.classList.contains("loaded")) {
      preloader.classList.add("loaded");
      document.body.style.overflow = "";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 850);
    }
  }

  // Safety fallback: ensure preloader is always dismissed
  setTimeout(dismissPreloader, 2200);

  if (preloader) {
    document.body.style.overflow = "hidden";
    let progress = 0;
    const intervalTime = 20;
    const totalDuration = 1100;
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      progress += step + Math.random() * 0.6;
      if (progress >= 100) {
        progress = 100;
        clearInterval(timer);

        if (preloaderFill) preloaderFill.style.width = "100%";
        if (preloaderCount) preloaderCount.textContent = "100%";
        if (preloaderStatus) {
          preloaderStatus.textContent = "READY";
          preloaderStatus.style.color = "#10b981";
        }

        setTimeout(dismissPreloader, 200);
      } else {
        const rounded = Math.floor(progress);
        if (preloaderFill) preloaderFill.style.width = `${rounded}%`;
        if (preloaderCount) preloaderCount.textContent = `${rounded}%`;

        if (preloaderStatus) {
          if (rounded < 35) {
            preloaderStatus.textContent = "INITIALIZING...";
          } else if (rounded < 70) {
            preloaderStatus.textContent = "LOADING TIMELINE...";
          } else {
            preloaderStatus.textContent = "RENDERING ASSETS...";
          }
        }
      }
    }, intervalTime);
  }

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Bilingual i18n Dictionary
  const i18n = {
    en: {
      brand_tag: "Creative Director",
      nav_about: "About",
      nav_exp: "Experience",
      nav_projects: "Projects",
      nav_skills: "Skills & Tools",
      nav_reviews: "Reviews",
      nav_contact: "Contact",
      nav_cv: "CV",
      nav_wa: "WhatsApp",
      nav_hire: "Hire Me",
      mobile_cv: "View Curriculum Vitae (CV)",
      mobile_wa: "Chat on WhatsApp",

      avail_pill: "Available for Broadcast & Commercial Projects",
      hero_title_1: "Crafting Visuals That",
      hero_title_2: "Command Attention.",
      hero_desc:
        "<strong>Senior Motion Graphic Designer & Lead Video Editor</strong> with over <strong>7 years</strong> of broadcast industry experience. Currently shaping visual narratives for <strong>MBC Group & Al Arabiya News Channel</strong> and Founder at <strong>Thaqib Production</strong>.",
      badge_mbc: "MBC Group",
      badge_alarabiya: "Al Arabiya News Channel",
      badge_thaqib: "Thaqib Production",
      btn_contact: "Get In Touch",
      btn_portfolio: "View Portfolio",
      btn_cv: "View / Download CV",
      stat_exp_num: "+7<span> Years</span>",
      stat_exp_lbl: "Industry Experience",
      stat_net_num: "MBC<span> & Al Arabiya</span>",
      stat_net_lbl: "Featured Networks",
      stat_agency_num: "Thaqib<span> Production</span>",
      stat_agency_lbl: "Established Agency",
      photo_role: "Creative Director",
      photo_avail: "Available",
      photo_loc: "Cairo, Egypt",
      photo_networks: "★ MBC & Al Arabiya",

      mockup_v3: "Channel Idents & Kinetic Typography",
      mockup_v2: "Al Arabiya News Data Viz & Infographics",
      mockup_v1: "4K Commercial Campaign / Broadcast Cut",
      mockup_a1: "Sound Design & Audio Cleaning (-14 LUFS)",
      mockup_render: "Render Status: 100% Export Ready",

      about_badge: "About Me",
      about_title: "Who I Am",
      about_subtitle:
        "A blend of broadcast-grade storytelling, high-end motion graphics, and creative agency leadership.",
      about_p1:
        "Founder of <strong>Thaqib for Media Production</strong>, Senior Motion Graphic Designer, and Video Editor with over <strong>7 years of industry experience</strong> across broadcast media and commercial advertising.",
      about_p2:
        "Currently editing and designing visual assets for <strong>MBC Group</strong> and <strong>Al Arabiya News Channel</strong>. Combining dynamic broadcast storytelling with advanced motion graphics and creative leadership, I deliver high-impact visual experiences and scalable advertising solutions for global networks and top-tier brands.",
      profile_title: "Quick Profile",
      fact_role_lbl: "Role",
      fact_role_val: "Senior Motion Graphics & Video Editor  ",
      fact_net_lbl: "Networks",
      fact_agency_lbl: "Agency",
      fact_loc_lbl: "Location",
      fact_loc_val: "Cairo, Egypt",
      fact_phone_lbl: "Phone",
      fact_status_lbl: "Status",
      fact_status_val: "Available Immediately",

      exp_badge: "Work History",
      exp_title: "Professional Experience",
      exp_subtitle:
        "Over 7 years delivering mission-critical broadcast news packages, channel identities, and commercial campaigns.",
      exp1_role: "Founder & Managing Director",
      exp1_co: "Thaqib for Media Production",
      exp1_period: "2026 – Present",
      exp1_b1:
        "Lead full-scale production workflows and creative direction for commercial campaigns and digital media assets.",
      exp1_b2:
        "Oversee visual identity creation, promotional 2D motion graphics, and high-conversion commercial production for diverse clients.",
      exp1_b3:
        "Manage client relationships, strategic campaign planning, and project delivery from concept to final broadcast delivery.",
      exp2_role: "Senior Motion Graphic Designer & Broadcast Video Editor",
      exp2_co: "Al Arabiya News Channel & MBC Group",
      exp2_period: "2021 – Present",
      exp2_b1:
        "Edit high-stakes television reports, specialized programs, and breaking news packages under tight deadlines, adhering to international broadcast standards.",
      exp2_b2:
        "Design and animate broadcast motion graphics packages, channel idents, and news infographics to simplify complex statistics and enhance visual storytelling.",
      exp2_b3:
        "Ensure seamless editorial flow, dynamic visual pacing, broadcast-quality audio mixing, and color grading.",

      proj_badge: "Featured Works",
      proj_title: "Selected Motion & Video Projects",
      proj_subtitle:
        "Commercial 2D motion graphics, brand explainers, and healthcare visual campaigns produced with broadcast precision.",
      proj_play: "Watch Video",
      proj_view_mostaql: "Mostaql",
      proj_view_yt: "YouTube",
      proj_cta_title: "Looking for more motion graphics & video projects?",
      proj_cta_desc:
        "Explore over 50+ commercial advertisements, broadcast idents, and creative reels on Mostaql.",
      proj_cta_btn: "View All Projects on Mostaql",

      proj1_cat: "Commercial Ad & App",
      proj1_title: "Motion Graphics | Mohandsek App",
      proj1_client: "Client: Mohandsek App",
      proj1_desc:
        "Commercial motion graphics video explaining the Mohandsek engineering platform with custom vector character design, kinetic typography, and broadcast-ready sound mixing.",
      proj1_step1: "Scriptwriting",
      proj1_step2: "Voiceover",
      proj1_step3: "Storyboard",
      proj1_step4: "Vector Art",
      proj1_step5: "2D Animation",
      proj1_step6: "Sound Design",

      proj2_cat: "Healthcare Awareness",
      proj2_title: "Motion Graphics | Dental Care for Diabetic Patients",
      proj2_client: "Client: Qassim Health Cluster",
      proj2_desc:
        "Medical awareness video guiding diabetic patients on oral and dental healthcare through friendly visual metaphors, simplified infographics, and educational kinetic motion.",
      proj2_step1: "Medical Script",
      proj2_step2: "Professional VO",
      proj2_step3: "Character Storyboard",
      proj2_step4: "Custom Illustration",
      proj2_step5: "Motion Graphics",
      proj2_step6: "SFX & Audio Master",

      proj3_cat: "Medical Tech & App",
      proj3_title: "Motion Graphics | Boking Lab Medical App",
      proj3_client: "Client: Boking Lab",
      proj3_desc:
        "Tech product explainer introducing the Boking Lab medical testing app, showcasing features, lab appointments, and digital workflows with slick UI animation and vibrant motion.",
      proj3_step1: "Script & Flow",
      proj3_step2: "Voice Recording",
      proj3_step3: "Scene Layouts",
      proj3_step4: "UI Vector Graphics",
      proj3_step5: "Kinetic Animation",
      proj3_step6: "Audio & Mix",

      proj4_cat: "UGC & Commercial Ads",
      proj4_title: "Commercial UGC Ad & Video Editing",
      proj4_client: "Type: UGC Video Ad & Social Reel",
      proj4_desc:
        "Dynamic UGC-style commercial advertising video tailored for digital marketing and e-commerce campaigns, combining authentic pacing, attention-grabbing hooks, kinetic subtitles, and high-conversion editorial cuts.",
      proj4_step1: "Creative Hook",
      proj4_step2: "Dynamic Cut",
      proj4_step3: "Kinetic Captions",
      proj4_step4: "Sound Design",
      proj4_step5: "Color Grading",

      proj5_cat: "Medical & Health Editing",
      proj5_title: "Medical Video Editing | Debunking Health Myths",
      proj5_client: "Type: Medical & Science Educational Edit",
      proj5_desc:
        "Engaging medical and healthcare video debunking common health myths through simplified visual storytelling, explanatory graphical overlays, precise pacing, and clean audio mastering.",
      proj5_step1: "Medical Storytelling",
      proj5_step2: "Visual Explainers",
      proj5_step3: "Pacing & Continuity",
      proj5_step4: "Audio Clean & Mix",
      proj5_step5: "Color Treatment",

      proj6_cat: "Medical & Pediatric Healthcare",
      proj6_title:
        "Professional Medical Editing | Pediatric Steam Therapy Facts",
      proj6_client: "Type: Pediatric Health Awareness & Educational Video",
      proj6_desc:
        "Professional healthcare video edit explaining pediatric nebulizer & steam therapy myths, combining medical B-roll cutaways, clarifying lower-thirds typography, dynamic visual rhythm, and clean vocal EQ.",
      proj6_step1: "Medical Simplification",
      proj6_step2: "B-Roll Cutaways",
      proj6_step3: "Lower-Thirds",
      proj6_step4: "Audio EQ & Clean",
      proj6_step5: "Warm Color Grade",

      skills_badge: "Proficiencies",
      skills_title: "Technical Skills & Software",
      skills_subtitle:
        "Industry-standard toolset and creative domains refined over 7+ years of broadcast production.",
      cat1_title: "Software & Tools",
      cat2_title: "Motion Design",
      cat3_title: "Editing & Production",
      cat4_title: "Leadership & Management",

      rev_badge: "Client Feedback",
      rev_title: "What Clients Say",
      rev_subtitle:
        "Verified reviews and endorsements from regional brands, commercial clients, and agency founders on Mostaql.",
      rev_stat_lbl: "Overall Client Rating",
      rev_f_comm: "Communication",
      rev_f_qual: "Work Quality",
      rev_f_prof: "Professionalism",
      rev_f_rehire: "Re-hire Rate",
      rev_f_rehire_val: "100% Satisfied",
      rev_btn: "View on Mostaql",

      contact_badge: "Get In Touch",
      contact_title: "Let's Build Something Great Together",
      contact_subtitle:
        "Have a commercial project, broadcast packaging assignment, or creative direction inquiry? Send a message directly.",
      cinfo_title: "Contact Information",
      cinfo_desc:
        "Open to commercial advertising, broadcast contracts, motion graphics, and creative direction across Egypt and remote worldwide.",
      cinfo_email_lbl: "Email",
      cinfo_phone_lbl: "Phone",
      cinfo_wa_lbl: "WhatsApp",
      cinfo_wa_val: "Direct Message",
      cinfo_loc_lbl: "Location",
      cinfo_loc_val: "Cairo, Egypt",
      form_name_lbl: "Name",
      form_name_ph: "Your name",
      form_email_lbl: "Email",
      form_email_ph: "your@email.com",
      form_subj_lbl: "Subject",
      form_subj_ph: "What's this about?",
      form_body_lbl: "Message",
      form_body_ph: "Tell me about your project, timeline, or opportunity...",
      form_file_lbl: "Attach Brief / File (Optional)",
      form_btn: "Send Message",
      footer_copy:
        "&copy; 2026 Tarek Mohamed &bull; Senior Motion Graphic Designer & Lead Video Editor.",

      wa_hint: "Online &bull; Quick Response",
      wa_title: "Chat on WhatsApp",
    },

    ar: {
      brand_tag: "مدير إبداعي",
      nav_about: "عن طارق",
      nav_exp: "الخبرات",
      nav_projects: "الأعمال والمشاريع",
      nav_skills: "المهارات والبرامج",
      nav_reviews: "آراء العملاء",
      nav_contact: "تواصل معي",
      nav_cv: "السيرة الذاتية",
      nav_wa: "واتساب",
      nav_hire: "وظفني الآن",
      mobile_cv: "عرض السيرة الذاتية (CV)",
      mobile_wa: "محادثة سريعة عبر واتساب",

      avail_pill: "متاح للمشاريع التلفزيونية والإعلانية التجارية",
      hero_title_1: "صناعة بصريات حية",
      hero_title_2: "تخطف الأنظار وتبهر المشاهد.",
      hero_desc:
        "<strong>سينيور موشن جرافيك ومونتير فيديو رئيسي</strong> بخبرة تتجاوز <strong>7 سنوات</strong> في كبرى الشبكات التلفزيونية. أصنع وأطور القصص البصرية لـ <strong>مجموعة MBC وقناة العربية الإخبارية</strong> ومؤسس وكالة <strong>ثاقب للإنتاج الإعلاني</strong>.",
      badge_mbc: "مجموعة MBC",
      badge_alarabiya: "قناة العربية الإخبارية",
      badge_thaqib: "وكالة ثاقب للإنتاج",
      btn_contact: "تواصل معي الآن",
      btn_portfolio: "معرض الأعمال",
      btn_cv: "عرض السيرة الذاتية",
      stat_exp_num: "+7<span> سنوات</span>",
      stat_exp_lbl: "خبرة في البث والميديا",
      stat_net_num: "MBC<span> & العربية</span>",
      stat_net_lbl: "شبكات وقنوات رائدة",
      stat_agency_num: "ثاقب<span> للإنتاج</span>",
      stat_agency_lbl: "إدارة وإنتاج إعلاني",
      photo_role: "مدير إبداعي",
      photo_avail: "متاح للعمل",
      photo_loc: "القاهرة، مصر",
      photo_networks: "★ MBC وقناة العربية",

      mockup_v3: "هويات القنوات والتايبوجرافي الحركي",
      mockup_v2: "إنفوجرافيك وبيانات أخبار قناة العربية",
      mockup_v1: "مونتاج إعلاني سينمائي 4K للمحطات",
      mockup_a1: "المكساج وهندسة الصوت المعيارية (-14 LUFS)",
      mockup_render: "حالة الرندرة: 100% جاهز للبث التلفزيوني",

      about_badge: "عن طارق",
      about_title: "من أنا",
      about_subtitle:
        "مزيج متكامل من السرد القصصي التلفزيوني، الموشن جرافيك المتقدم، والقيادة الإبداعية للوكالات.",
      about_p1:
        "مؤسس <strong>وكالة ثاقب للإنتاج الإعلاني</strong>، سينيور موشن جرافيك ومونتير بخبرة تزيد عن <strong>7 سنوات</strong> في مجالات الإعلام والبث التلفزيوني والإعلانات التجارية.",
      about_p2:
        "أعمل حالياً على مونتاج وتصميم الهويات البصرية لـ <strong>مجموعة MBC</strong> و <strong>قناة العربية الإخبارية</strong>. أدمج بين السرد البصري السريع والموشن جرافيك عالي الدقة لإخراج أعمال بصرية قوية ومؤثرة تخدم كبرى العلامات التجارية والشبكات الإقليمية والدولية.",
      profile_title: "بطاقة تعريف سريعة",
      fact_role_lbl: "المسمى المهني",
      fact_role_val: "سينيور موشن جرافيك ومونتير فيديو رئيسي",
      fact_net_lbl: "الشبكات والقنوات",
      fact_agency_lbl: "الوكالة الإعلانية",
      fact_loc_lbl: "المقر",
      fact_loc_val: "القاهرة، مصر",
      fact_phone_lbl: "الهاتف",
      fact_status_lbl: "الحالة",
      fact_status_val: "متاح للتعاقد فوراً",

      exp_badge: "المحطات المهنية",
      exp_title: "الخبرات والمسيرة المهنية",
      exp_subtitle:
        "أكثر من 7 سنوات في تقديم حزم البث الإخباري الحساسة، هويات القنوات، والحملات الإعلانية التجارية.",
      exp1_role: "المؤسس والمدير الإبداعي",
      exp1_co: "وكالة ثاقب للإنتاج الإعلاني",
      exp1_period: "2026 – حتى الآن",
      exp1_b1:
        "قيادة خطوط الإنتاج المتكاملة والإشراف الإبداعي على الحملات التجارية والمحتوى الرقمي.",
      exp1_b2:
        "الإشراف على بناء الهويات البصرية ورسوم الموشن جرافيك 2D الدعائية والإعلانات ذات معدلات التحويل العالية.",
      exp1_b3:
        "إدارة علاقات العملاء والتخطيط الاستراتيجي للحملات وتسليم المشاريع بجودة البث النهائي.",
      exp2_role: "سينيور موشن جرافيك ومونتير أخبار وبث تلفزيوني",
      exp2_co: "قناة العربية الإخبارية ومجموعة MBC",
      exp2_period: "2021 – حتى الآن",
      exp2_b1:
        "مونتاج تقارير تلفزيونية وبرامج متخصصة وتغطيات الأخبار العاجلة تحت ضغط زمني دقيق وفق أعلى معايير البث الدولي.",
      exp2_b2:
        "تصميم وتحريك حزم الجرافيك التلفزيوني وهويات البرامج والإنفوجرافيك الإخباري لتبسيط البيانات الإحصائية المعقدة.",
      exp2_b3:
        "ضمان سلاسة السرد الخبري، الإيقاع البصري الديناميكي، هندسة الصوت المعيارية، وتصحيح الألوان الاحترافي.",

      proj_badge: "معرض الأعمال",
      proj_title: "مشاريع وأعمال مميزة",
      proj_subtitle:
        "مختارات من أعمال الموشن جرافيك الإعلاني، تطبيقات الهواتف الذكية، وحملات التوعية الصحية المنفذة بأعلى معايير الإخراج.",
      proj_play: "مشاهدة الفيديو",
      proj_view_mostaql: "عرض على مستقل",
      proj_view_yt: "يوتيوب",
      proj_cta_title: "هل ترغب في استكشاف المزيد من المشاريع والأعمال؟",
      proj_cta_desc:
        "تصفح أكثر من 50 عملاً ومساراً إنتاجياً إعلانياً وتلفزيونياً موثقاً على منصة مستقل.",
      proj_cta_btn: "تصفح كامل المعرض على مستقل",

      proj1_cat: "إعلان تجاري وتطبيقات",
      proj1_title: "موشن جرافيك | لصالح تطبيق مهندسك",
      proj1_client: "العميل: تطبيق مهندسك للخدمات الهندسية",
      proj1_desc:
        "فيديو موشن جرافيك إعلاني ترويجي متكامل لتطبيق مهندسك؛ يبسط مزايا المنصة الهندسية وخدماتها بأسلوب بصري جذاب ورسوم متجهة حركية ومكساج صوتي احترافي.",
      proj1_step1: "كتابة السيناريو",
      proj1_step2: "التعليق الصوتي",
      proj1_step3: "رسم الستوري بورد",
      proj1_step4: "رسم المشاهد",
      proj1_step5: "التحريك الحركي",
      proj1_step6: "مؤثرات ومكساج",

      proj2_cat: "توعية صحية ورعاية طبية",
      proj2_title: "موشن جرافيك | العناية بالفم والأسنان لمريض السكري",
      proj2_client: "العميل: التجمع الصحي بالقصيم (وزارة الصحة السعودية)",
      proj2_desc:
        "فيديو توعوي وتثقيفي معتمد يرشد مرضى السكري لأفضل ممارسات العناية بصحة الفم والأسنان عبر رسوم متحركة مبسطة، إنفوجرافيك طبي دقيق، وإخراج بصري عالي الجودة.",
      proj2_step1: "سيناريو طبي",
      proj2_step2: "فويس أوفر محترف",
      proj2_step3: "ستوري بورد",
      proj2_step4: "رسم المشاهد",
      proj2_step5: "تحريك 2D",
      proj2_step6: "مكساج صوتي",

      proj3_cat: "تطبيقات طبية وموشن جرافيك",
      proj3_title: "موشن جرافيك | تطبيق Boking Lab للتحاليل الطبية",
      proj3_client: "العميل: منصة وتطبيق Boking Lab للتحاليل",
      proj3_desc:
        "فيديو تعريفي وترويجي لتطبيق معامل التحاليل الطبية Boking Lab، يستعرض واجهة التطبيق الرقمية وتجربة المستخدم وحجز الفحوصات بأسلوب حركي سريع وشيق.",
      proj3_step1: "السيناريو العام",
      proj3_step2: "تعليق صوتي",
      proj3_step3: "ستوري بورد",
      proj3_step4: "تصميم الواجهات والمشاهد",
      proj3_step5: "تحريك الموشن",
      proj3_step6: "مؤثرات وإخراج",

      proj4_cat: "إعلانات تجارية و UGC",
      proj4_title: "فيديو إعلاني UGC",
      proj4_client: "النمط: إعلان تسويقي وترويجي UGC",
      proj4_desc:
        "مونتاج وإخراج إعلاني مبتكر بنمط UGC لحملات التسويق الرقمي والتجارة الإلكترونية، يدمج بين السرد الواقعي السريع، المؤثرات البصرية، ونصوص التايبوجرافي الحركية والخطافات الإعلانية عالية التحويل.",
      proj4_step1: "هوك إعلاني سريع",
      proj4_step2: "مونتاج إيقاعي",
      proj4_step3: "نصوص متحركة",
      proj4_step4: "مؤثرات صوتية",
      proj4_step5: "تصحيح ألوان",

      proj5_cat: "مونتاج طبي وتثقيفي",
      proj5_title: "مونتاج طبي | لمناقشة خرافة طبية وتصحيحها بأسلوب مبسط",
      proj5_client: "النمط: فيديو طبي وتوعوي تثقيفي",
      proj5_desc:
        "مونتاج تقرير طبي وتثقيفي يناقش خرافة صحية شائعة ويفندها بأسلوب بصري تفاعلي ومبسط، مع عناصر جرافيك توضيحية وإيقاع سردي مدروس يحافظ على انتباه المشاهد ويوصل المعلومة الطبية بدقة.",
      proj5_step1: "سرد قصصي طبي",
      proj5_step2: "جرافيك توضيحي",
      proj5_step3: "مونتاج وتقطيع سلس",
      proj5_step4: "هندسة ومكساج صوت",
      proj5_step5: "معالجة ألوان سينمائية",

      proj6_cat: "مونتاج طبي ورعاية صحية",
      proj6_title: "مونتاج طبي احترافي | حقيقة إدمان جلسات البخار عند الأطفال",
      proj6_client: "النمط: فيديو طبي وتوعوي للأمهات والأطفال",
      proj6_desc:
        "مونتاج فيديو طبي احترافي موجه للآباء والأمهات يناقش حقيقة الشائعات حول إدمان جلسات البخار للأطفال وصعوبة التنفس، يجمع بين سلاسة الشرح الطبي، المؤثرات التوضيحية B-Roll، النصوص البارزة، وتنقية الصوت.",
      proj6_step1: "تبسيط المعلومة الطبية",
      proj6_step2: "مشاهد توضيحية B-Roll",
      proj6_step3: "عناوين ونصوص بصرية",
      proj6_step4: "تنقية ومكساج الصوت",
      proj6_step5: "تصحيح ألوان دافئ",

      skills_badge: "الكفاءات والخبرات",
      skills_title: "البرامج والمهارات التقنية",
      skills_subtitle:
        "أحدث الأدوات والبرمجيات العالمية المعتمدة في البث التلفزيوني والإنتاج السينمائي.",
      cat1_title: "البرمجيات والأدوات",
      cat2_title: "تصميم الموشن جرافيك",
      cat3_title: "المونتاج وهندسة الإنتاج",
      cat4_title: "القيادة وإدارة الإنتاج",

      rev_badge: "تقييمات وآراء العملاء",
      rev_title: "ماذا يقول العملاء",
      rev_subtitle:
        "تقييمات موثقة وتوصيات معتمدة من علامات تجارية ورواد أعمال على منصة مستقل.",
      rev_stat_lbl: "التقييم العام للعملاء",
      rev_f_comm: "التواصل والمتابعة",
      rev_f_qual: "جودة العمل والإتقان",
      rev_f_prof: "الاحترافية والمرونة",
      rev_f_rehire: "إعادة التوظيف",
      rev_f_rehire_val: "100% رضا تام",
      rev_btn: "مشاهدة التقييمات على مستقل",

      contact_badge: "تواصل معي",
      contact_title: "لنصنع معاً عملاً بصرياً استثنائياً",
      contact_subtitle:
        "هل لديك مشروع إعلاني، حزمة جرافيك تلفزيونية، أو استشارة إبداعية؟ أرسل رسالتك وسأرد عليك سريعاً.",
      cinfo_title: "بيانات الاتصال",
      cinfo_desc:
        "متاح للمشاريع التجارية، عقود البث التلفزيوني، الموشن جرافيك، والإشراف الإبداعي داخل مصر وعن بعد عالمياً.",
      cinfo_email_lbl: "البريد الإلكتروني",
      cinfo_phone_lbl: "الهاتف",
      cinfo_wa_lbl: "واتساب",
      cinfo_wa_val: "مراسلة فورية مباشرة",
      cinfo_loc_lbl: "المقر",
      cinfo_loc_val: "القاهرة، مصر",
      form_name_lbl: "الاسم",
      form_name_ph: "اسمك الكريم",
      form_email_lbl: "البريد الإلكتروني",
      form_email_ph: "your@email.com",
      form_subj_lbl: "موضوع الرسالة",
      form_subj_ph: "ما هو موضوع مشروعك؟",
      form_body_lbl: "تفاصيل المشروع أو الرسالة",
      form_body_ph: "اكتب تفاصيل المشروع، الجدول الزمني، أو الاستفسار...",
      form_file_lbl: "إرفاق بريف أو ملف (اختياري)",
      form_btn: "إرسال الرسالة الآن",
      footer_copy:
        "&copy; 2026 طارق محمد &bull; مصمم موشن جرافيك أول ومونتير فيديو رئيسي.",

      wa_hint: "متصل الآن &bull; رد سريع",
      wa_title: "تواصل عبر واتساب",
    },
  };

  // Language Switcher Logic
  const langBtn = document.getElementById("lang-toggle");
  const mobileLangBtn = document.getElementById("mobile-lang-toggle");
  const langText = document.getElementById("lang-text");
  const mobileLangText = document.getElementById("mobile-lang-text");

  let currentLang = localStorage.getItem("tm-lang") || "en";
  setLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "ar" : "en";
      setLanguage(nextLang);
    });
  }

  if (mobileLangBtn) {
    mobileLangBtn.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "ar" : "en";
      setLanguage(nextLang);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("tm-lang", lang);
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    if (langText) {
      langText.textContent = lang === "ar" ? "English" : "العربية";
    }
    if (mobileLangText) {
      mobileLangText.textContent =
        lang === "ar" ? "Switch to English" : "التحويل إلى العربية";
    }

    // Apply translations
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        el.innerHTML = i18n[lang][key];
      }
    });

    // Apply placeholder translations
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (i18n[lang] && i18n[lang][key]) {
        el.setAttribute("placeholder", i18n[lang][key]);
      }
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Theme Toggle
  const themeBtn = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("tm-theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("tm-theme", next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeBtn) return;
    const icon = themeBtn.querySelector("i");
    if (!icon) return;
    if (theme === "dark") {
      icon.setAttribute("data-lucide", "sun");
    } else {
      icon.setAttribute("data-lucide", "moon");
    }
    if (window.lucide) window.lucide.createIcons();
  }

  // Mobile Menu
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
      });
    });
  }

  // File Input Preview
  const fileInput = document.getElementById("contact-file");
  const filePreview = document.getElementById("file-preview");

  if (fileInput && filePreview) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files && fileInput.files[0]) {
        filePreview.textContent = fileInput.files[0].name;
      } else {
        filePreview.textContent = "";
      }
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const toast = document.getElementById("contact-toast");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> Sending...`;
        if (window.lucide) window.lucide.createIcons();
      }

      if (toast) {
        toast.className = "alert-toast";
        toast.style.display = "none";
      }

      const formData = new FormData(contactForm);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: formData, // FormData sends as multipart/form-data with file if attached
        });

        const data = await response.json();

        if (response.ok && data.success) {
          showToast(
            data.message ||
              "Thank you! Your message has been sent successfully.",
            "success",
          );
          contactForm.reset();
          if (filePreview) filePreview.textContent = "";
        } else {
          showToast(
            data.message || "Failed to send message. Please try again later.",
            "error",
          );
        }
      } catch (err) {
        console.error("Submission error:", err);
        showToast(
          "Network error. Please check your connection or contact directly via WhatsApp / Email.",
          "error",
        );
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<i data-lucide="send"></i> Send Message`;
          if (window.lucide) window.lucide.createIcons();
        }
      }
    });
  }

  function showToast(message, type) {
    if (!toast) return;
    toast.textContent = message;
    toast.className = `alert-toast ${type}`;
    toast.style.display = "block";
    toast.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // Scroll to Top
  const scrollTopBtn = document.getElementById("scroll-top");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        scrollTopBtn.style.display = "flex";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Smooth Active Nav Highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Scroll Progress Indicator
  const progressBar = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && progressBar) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  });

  // Interactive Project Video Players
  function playProjectVideo(videoId, card) {
    if (!videoId || !card) return;
    const mediaWrap = card.querySelector(".project-media");
    if (!mediaWrap) return;

    if (mediaWrap.querySelector("iframe")) return;

    mediaWrap.innerHTML = `
      <iframe
        src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
        title="Project Video Player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;

    const playBtn = card.querySelector(".proj-play-action");
    if (playBtn) {
      playBtn.classList.remove("btn-accent");
      playBtn.classList.add("btn-outline");
      const isArabic = html.getAttribute("lang") === "ar";
      playBtn.innerHTML = `
        <i data-lucide="play-circle" style="width: 14px; height: 14px; color: var(--accent)"></i>
        <span>${isArabic ? "جاري التشغيل..." : "Playing..."}</span>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  document.querySelectorAll(".project-card").forEach((card) => {
    const posterWrap = card.querySelector(".project-poster-wrap");
    const playBtn = card.querySelector(".proj-play-action");
    const videoId =
      (posterWrap && posterWrap.getAttribute("data-video-id")) ||
      (playBtn && playBtn.getAttribute("data-video-id"));

    if (posterWrap) {
      posterWrap.addEventListener("click", () => {
        playProjectVideo(videoId, card);
      });
    }

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        playProjectVideo(videoId, card);
      });
    }
  });

  // Scroll Reveal Intersection Observer
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale",
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));
});
