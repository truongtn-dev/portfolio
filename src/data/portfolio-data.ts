import { PortfolioData } from "@/types/portfolio";

export const portfolioData: { vi: PortfolioData; en: PortfolioData } = {
  vi: {
    meta: {
      title: "Nguyễn Thành Trương | Software Engineer & Technical Growth",
      description: "Portfolio cá nhân của Nguyễn Thành Trương - Software Engineer, Product Builder, Technical Growth Specialist và Academic Researcher."
    },
    navigation: {
      name: "Thành Trương",
      tagline: "Software Engineer & Growth Builder",
      liveStatus: "Sẵn sàng kết nối dự án và việc làm",
      links: [
        { id: "about", label: "Giới thiệu" },
        { id: "metrics", label: "Dấu ấn" },
        { id: "capabilities", label: "Năng lực" },
        { id: "projects", label: "Dự án" },
        { id: "experience", label: "Kinh nghiệm" },
        { id: "tech-stack", label: "Công nghệ" },
        { id: "faq", label: "FAQ" },
        { id: "contact", label: "Liên hệ" }
      ],
      downloadCv: {
        label: "Tải CV",
        viVersion: "Bản Tiếng Việt (PDF)",
        enVersion: "Bản Tiếng Anh (PDF)"
      }
    },
    hero: {
      kicker: "PORTFOLIO 2026",
      firstName: "Nguyễn Thành",
      lastName: "Trương",
      rolesText: "Kỹ thuật Phần mềm & AI • Quản trị Vận hành Y tế • Tối ưu Tăng trưởng & SEO",
      skillPills: [
        { label: "Kỹ thuật Phần mềm & AI" },
        { label: "Quản trị Vận hành Y tế" },
        { label: "Tối ưu Tăng trưởng & SEO" }
      ],
      identityTags: [
        "Kỹ thuật Phần mềm & AI",
        "Quản trị Vận hành Y tế",
        "Tối ưu Tăng trưởng & SEO"
      ],
      headline: "Kỹ sư phần mềm phát triển sản phẩm với thế mạnh kết nối giữa kiến trúc công nghệ và thực tiễn vận hành chuyên sâu.",
      bio: "Kỹ sư phần mềm phát triển sản phẩm với thế mạnh kết nối giữa kiến trúc công nghệ và thực tiễn vận hành chuyên sâu. Xuất phát điểm liên ngành giữa kỹ thuật hệ thống và quản trị y tế cho phép tôi nhanh chóng nắm bắt các bài toán nghiệp vụ phức tạp, từ đó xây dựng các ứng dụng chuẩn xác về mặt kỹ thuật, tối ưu hóa khả năng tiếp cận và thực sự giải phóng áp lực vận hành ngoài đời thực. Dù tham gia phát triển phần mềm độc lập hay đồng hành cùng các sản phẩm công nghệ chăm sóc sức khỏe, tôi luôn theo đuổi một tiêu chuẩn nhất quán: mã nguồn sạch, trải nghiệm trực quan và hiệu quả đo lường được bằng giá trị thực tế.",
      workStatus: "Sẵn sàng đón nhận cơ hội việc làm ngành Công nghệ & Y tế",
      primaryCta: "Xem dự án nổi bật",
      secondaryCta: "Liên hệ với tôi",
      badges: [
        {
          id: "badge-1",
          title: "Best Paper Award",
          subtitle: "ICTechED 2026 (Bangkok)",
          icon: "Trophy"
        },
        {
          id: "badge-2",
          title: "CEO & Founder",
          subtitle: "OrcaX MedTech Platform",
          icon: "Sparkles"
        },
        {
          id: "badge-3",
          title: "Y Tế Thực Địa",
          subtitle: "600 Bệnh nhân (Campuchia)",
          icon: "Globe"
        }
      ]
    },
    metrics: {
      title: "Dấu ấn thực tế qua những con số",
      description: "Những kết quả định lượng cụ thể được tạo nên từ quá trình học tập, nghiên cứu học thuật và vận hành tăng trưởng.",
      items: [
        {
          id: "m-1",
          number: "599+",
          label: "Bệnh nhân hỗ trợ thực địa",
          description: "Được hỗ trợ khám sàng lọc mắt tại Thủ đô Phnom Penh, Campuchia (04/2026).",
          highlight: "Chiến dịch thực địa Quốc tế",
          icon: "Users"
        },
        {
          id: "m-2",
          number: "10+",
          label: "Đề Tài Nghiên Cứu Khoa Học",
          description: "Tác giả & đồng tác giả hơn 10 bài báo nghiên cứu khoa học, đạt giải Best Paper Award và đảm nhiệm vai trò Session Chair tại Hội thảo Quốc tế ICTechED (Bangkok).",
          highlight: "Học thuật & Xuất bản Quốc tế",
          icon: "Award"
        },
        {
          id: "m-3",
          number: "Top 30",
          label: "Toàn quốc MedTech",
          description: "Dự án Khởi nghiệp MedTech OrcaX (Nhận học bổng ươm mầm 50 triệu đồng).",
          highlight: "Khởi nghiệp Đổi mới sáng tạo",
          icon: "TrendingUp"
        },
        {
          id: "m-4",
          number: "10+",
          label: "Cơ quan Báo chí Đưa tin",
          description: "Được Báo Lao Động, Báo Cần Thơ, Kênh 14... phỏng vấn và đưa tin về mô hình Bệnh viện 360° cùng các giải pháp y tế số.",
          highlight: "Lan tỏa Truyền thông & Xã hội",
          icon: "CheckCircle2"
        },
        {
          id: "m-5",
          number: "20+",
          label: "Bệnh viện & Doanh nghiệp",
          description: "Tối ưu hóa Technical SEO và hạ tầng web (Bệnh viện Đa khoa Tâm Anh, Bệnh viện Đa khoa Quốc Tế Sài Gòn, DOL English, PTE Helper, Xây Dựng Cửu Long CLC, Điện Máy Khai Trí,...).",
          highlight: "Tăng trưởng Traffic Bền vững",
          icon: "Building2"
        },
        {
          id: "m-6",
          number: "1.000+",
          label: "Khách hàng Tư vấn BĐS",
          description: "Trực tiếp tư vấn chuyên sâu hơn 1.000+ khách hàng, sản xuất nội dung review truyền thông và giao dịch thành công nhiều sản phẩm nhà đất tại ĐBSCL.",
          highlight: "Thương mại & Bán hàng Thực chiến",
          icon: "Home"
        }
      ]
    },
    capabilities: {
      title: "Tôi có thể đóng góp gì cho đội ngũ và dự án?",
      subtitle: "Sự giao thoa độc đáo giữa tư duy kỹ sư phần mềm, phân tích dữ liệu nghiên cứu và năng lực tăng trưởng sản phẩm thực chiến.",
      items: [
        {
          id: "cap-1",
          title: "Tư duy Kỹ thuật & Lập trình Đa Nền tảng",
          subtitle: "Engineering Core & Multi-Stack",
          description: "Làm chủ đa dạng ngôn ngữ và nền tảng: từ lập trình hệ thống backend (Java, Python, Node.js), xây dựng kiến trúc web/app hiện đại (React, Next.js, TypeScript), đến thiết kế cơ sở dữ liệu và tích hợp giải pháp AI/WebVR.",
          icon: "Code2",
          highlights: [
            "Đa dạng ngôn ngữ & nền tảng: Thành thạo Java (OOP, Servlet), Python (AI/Data), TypeScript/JavaScript và PHP/WordPress",
            "Kiến trúc hệ thống & Cơ sở dữ liệu: Thiết kế RESTful API, mô hình MVC, tối ưu dữ liệu SQL Server, PostgreSQL, MySQL và Cloud Storage",
            "Giao diện hiện đại & Công nghệ mới: Web/App tốc độ cao (React, Next.js, Tailwind CSS), kết hợp WebVR 360° và thuật toán thị giác AI"
          ],
          tags: ["Java", "Python", "TypeScript / React", "Next.js", "SQL / Database", "RESTful API", "Computer Vision", "Git & CI/CD"]
        },
        {
          id: "cap-2",
          title: "Nghiên cứu Khoa học & R&D",
          subtitle: "Academic Research",
          description: "Năng lực phương pháp luận nghiên cứu vững chắc, phân tích định lượng chuyên sâu và công bố quốc tế chuẩn mực.",
          icon: "FlaskConical",
          highlights: [
            "Phân tích dữ liệu định lượng và kiểm định thống kê trên SPSS, PLS-SEM (SmartPLS, IBM AMOS)",
            "Thiết kế khảo sát khoa học, kiểm định độ tin cậy Cronbach Alpha & giá trị hội tụ thang đo",
            "Xây dựng bài báo cáo khoa học theo chuẩn quốc tế (ICTechED, AOC, ResFes) và thẩm định chuyên môn"
          ],
          tags: ["SPSS", "PLS-SEM", "SmartPLS", "AMOS", "Paper Drafting", "Peer Review", "Data Validation"]
        },
        {
          id: "cap-3",
          title: "Tối ưu hóa Tăng trưởng & SEO",
          subtitle: "Technical Growth",
          description: "Đưa góc nhìn kỹ thuật vào tăng trưởng số, thiết lập hạ tầng website chuẩn SEO kỹ thuật và chuyển đổi thực chất cho tổ chức.",
          icon: "LineChart",
          highlights: [
            "Cấu trúc Entity chuyên sâu, Schema JSON-LD vi mô và tối ưu Core Web Vitals",
            "Chiến lược liên kết nội bộ (Internal Linking) và audit kỹ thuật On-page / Off-page toàn diện",
            "Kinh nghiệm tăng trưởng thứ hạng và lưu lượng truy cập bền vững cho doanh nghiệp"
          ],
          tags: ["Technical SEO", "Schema Markup", "Core Web Vitals", "Entity Architecture", "Ahrefs", "GSC"]
        },
        {
          id: "cap-4",
          title: "Quản trị Vận hành Y tế & Trải nghiệm Người dùng",
          subtitle: "Healthcare Operations & CX",
          description: "Kết hợp chuyên môn Quản lý Bệnh viện với tư duy số hóa: chuẩn hóa quy trình tiếp nhận, nâng cao trải nghiệm người bệnh và sản xuất truyền thông số.",
          icon: "HeartPulse",
          highlights: [
            "Chuẩn hóa quy trình y tế: Vận dụng kiến thức Quản lý Bệnh viện để tối ưu quy trình tiếp nhận, sàng lọc lâm sàng và giải phóng áp lực vận hành thực tế",
            "Trải nghiệm người bệnh & CSKH: Kỹ năng tư vấn, lắng nghe và thấu hiểu chuyên sâu , đồng hành cùng bệnh nhân trong các chiến dịch thực địa nhãn khoa",
            "Thiết kế đồ họa & Truyền thông y tế: Thiết kế ấn phẩm hướng dẫn y khoa trực quan, biên tập video giáo dục sức khỏe và truyền tải thông tin chính thống"
          ],
          tags: ["Quản lý Bệnh viện", "Trải nghiệm Bệnh nhân", "Thiết kế UI/UX & Đồ họa", "Video Editing", "Vận hành Y tế số", "Tư vấn & CSKH"]
        }
      ],
      workflowTitle: "Quy trình làm việc kỹ thuật & phát triển sản phẩm",
      workflowSteps: [
        {
          step: 1,
          title: "Khảo sát nghiệp vụ & BA",
          description: "Lắng nghe nhu cầu thực tế, xác định đúng bài toán lõi và xây dựng tài liệu Use Case / ERD chi tiết."
        },
        {
          step: 2,
          title: "Thiết kế kiến trúc & UI/UX",
          description: "Phác thảo Wireframe, xây dựng Design System trực quan, đảm bảo tính thẩm mỹ cao và chuẩn công thái học."
        },
        {
          step: 3,
          title: "Lập trình & Tích hợp AI",
          description: "Hiện thực hóa hệ thống bằng Clean Code, API chuẩn mực và tích hợp thuật toán AI/WebVR thông minh."
        },
        {
          step: 4,
          title: "Thử nghiệm thực địa & Dữ liệu",
          description: "Đưa sản phẩm vào môi trường vận hành thực tế (pilot test), thu thập phản hồi và số liệu định lượng."
        },
        {
          step: 5,
          title: "Tối ưu hóa SEO & Triển khai",
          description: "Tối ưu Core Web Vitals, hạ tầng Technical SEO, triển khai CI/CD và bàn giao vận hành ổn định."
        }
      ]
    },
    projects: {
      title: "Dự án tiêu biểu & Công trình nổi bật",
      subtitle: "Những sản phẩm thực tế và công trình học thuật kết tinh từ tư duy kỹ thuật chuẩn xác và định hướng giá trị cộng đồng.",
      filterLabels: {
        all: "Tất cả dự án",
        engineering: "Kỹ thuật & AI",
        research: "Nghiên cứu học thuật",
        growth: "Tăng trưởng & SEO"
      },
      viewDetailsLabel: "Xem chi tiết dự án",
      closeModalLabel: "Đóng thông tin",
      items: [
        {
          id: "orcax",
          title: "OrcaX – Hệ Sinh Thái Y Tế Số & Bệnh Viện Ảo 360°",
          period: "01/2026 – Hiện tại",
          category: "engineering",
          role: "CEO, Co-founder & Technical Lead",
          image: "/images/orcax.png",
          challenge: "Giảm tải quy trình sàng lọc nhãn khoa quá tải tại các cơ sở y tế và giải tỏa tâm lý căng thẳng, lo âu của bệnh nhân trước các cuộc phẫu thuật mắt.",
          solution: "Phát triển nền tảng bệnh viện ảo tương tác WebVR 360° kết hợp thuật toán thị giác máy tính AI sàng lọc tổn thương nhãn khoa sơ bộ và hệ thống quản trị bệnh nhân đồng bộ.",
          impact: "Lọt Top 30 Khởi nghiệp Quốc gia (nhận gói học bổng ươm mầm 50 triệu VNĐ); Triển khai thực địa thành công tại Thủ đô Phnom Penh (Campuchia) hỗ trợ gần 600 bệnh nhân khám mắt.",
          stack: ["Next.js 15", "WebVR 360°", "Computer Vision", "Tailwind CSS", "Node.js", "Cloudflare"],
          badge: "MedTech Thực địa Quốc tế",
          accentColor: "from-sky-500/20 to-blue-600/10"
        },
        {
          id: "icteched-research",
          title: "Công Trình Nghiên Cứu AI Trong Giáo Dục Khởi Nghiệp",
          period: "01/2026 – 04/2026",
          category: "research",
          role: "Đồng tác giả & Session Chair (Bangkok, Thái Lan)",
          image: "/images/nghiencuukhoahoc.jpg",
          challenge: "Làm rõ cơ chế tác động của công cụ AI thế hệ mới đến tư duy tăng trưởng và năng lực đổi mới sáng tạo trong sinh viên đại học theo tiêu chuẩn học thuật khắt khe.",
          solution: "Ứng dụng mô hình phương trình cấu trúc bình phương nhỏ nhất từng phần (PLS-SEM), thiết kế bộ câu hỏi chuẩn hóa quốc tế, khảo sát thực nghiệm và kiểm định thống kê trên SmartPLS & AMOS.",
          impact: "Được trao giải thưởng Bài báo xuất sắc nhất (Best Paper Award) tại Hội thảo Khoa học Quốc tế ICTechED 2026 và được ban tổ chức tin tưởng giao vai trò Chủ tọa phiên thảo luận (Session Chair).",
          stack: ["PLS-SEM", "SmartPLS", "AMOS", "SPSS", "Statistical Modeling", "Academic Publishing"],
          badge: "Best Paper Award ICTechED 2026",
          accentColor: "from-amber-500/20 to-orange-500/10"
        },
        {
          id: "aoc-research",
          title: "Công Trình Nghiên Cứu & Báo Cáo Khoa Học Khúc Xạ Nhãn Khoa – AOC 2026",
          period: "09/2026",
          category: "research",
          role: "Đồng tác giả & Đại biểu Báo cáo Khoa học (Đà Nẵng)",
          image: "/images/aoc.jpg",
          challenge: "Giải quyết bài toán tiếp cận dịch vụ khúc xạ nhãn khoa tiêu chuẩn tại khu vực Đông Nam Á, tăng cường năng lực phát hiện sớm các bệnh lý về mắt và tật khúc xạ cộng đồng thông qua giải pháp công nghệ.",
          solution: "Nghiên cứu ứng dụng công nghệ số và quy trình sàng lọc thị lực chuẩn hóa y khoa; thu thập và phân tích dữ liệu lâm sàng thực nghiệm theo định hướng One Vision One Health của Hội đồng Khúc xạ Nhãn khoa Châu Á.",
          impact: "Công trình được thẩm định và báo cáo chính thức tại Hội nghị Khúc xạ Nhãn khoa Châu Á lần thứ 5 (5th Asia Optometric Congress - AOC 2026), Hội thảo Đông Nam Á lần thứ 10 và Hội thảo Toàn quốc lần thứ 5 tại Đà Nẵng.",
          stack: ["Optometry Tech", "Clinical Data Analysis", "One Vision One Health", "Medical Research", "AOC 2026"],
          badge: "Báo Cáo Quốc Tế AOC 2026",
          accentColor: "from-cyan-500/20 to-blue-600/10"
        },
        {
          id: "lms-system",
          title: "Hệ Thống LMS – Nền Tảng Quản Lý Học Tập Trực Tuyến",
          period: "2024 – 2025",
          category: "engineering",
          role: "Fullstack Developer & System Architect",
          image: "/images/lms.jpg",
          challenge: "Xây dựng giải pháp quản lý đào tạo trực tuyến (LMS) đáp ứng nhu cầu phân phối khóa học số, theo dõi tiến độ học tập và tổ chức kiểm tra trắc nghiệm bảo mật.",
          solution: "Kiến trúc hệ thống với cơ chế phân quyền RBAC (Admin, Giảng viên, Sinh viên), theo dõi tiến độ thời gian thực, quản lý kho bài giảng video và API đồng bộ dữ liệu học tập.",
          impact: "Tối ưu hóa trải nghiệm tự học trực quan, giảm 60% thời gian quản lý thủ công và hỗ trợ quản trị học tập tập trung mượt mà.",
          stack: ["Java", "React", "TypeScript", "SQL Server", "RESTful API", "Tailwind CSS"],
          badge: "Nền Tảng LMS Giáo Dục",
          accentColor: "from-blue-500/20 to-indigo-600/10"
        },
        {
          id: "bus-ticket",
          title: "Website Đặt Vé Xe Khách Trực Tuyến",
          period: "06/2025 – 07/2025",
          category: "engineering",
          role: "BA & Fullstack Developer",
          image: "/images/vivutoday.jpg",
          challenge: "Xây dựng giải pháp đặt vé xe khách trực tuyến xử lý luồng đặt chỗ đồng thời, chọn ghế theo sơ đồ trực quan và quản lý lịch trình tuyến xe phức tạp.",
          solution: "Phân tích yêu cầu người dùng, thiết kế Use Case, Class Diagram và ERD chuẩn hóa 3NF; xây dựng frontend bằng HTML/CSS/JavaScript; phát triển backend với Java Servlet kết nối CSDL bằng SQL Server.",
          impact: "Thực hành đầy đủ quy trình phát triển phần mềm chuẩn mực: từ phân tích – thiết kế – triển khai – kiểm thử.",
          stack: ["Java Servlet", "SQL Server", "HTML5/CSS3", "JavaScript", "ERD Design", "Use Case Modeling"],
          badge: "Hệ Thống Đặt Vé Xe",
          accentColor: "from-emerald-500/20 to-teal-500/10"
        },
        {
          id: "movie-ticket",
          title: "Website Đặt Vé Xem Phim Trực Tuyến",
          period: "02/2025 – 03/2025",
          category: "engineering",
          role: "Fullstack Developer",
          image: "/images/bookmovie.png",
          challenge: "Thiết kế giao diện mua vé xem phim công nghệ cao, xử lý hiển thị sơ đồ rạp chiếu thời gian thực và quản lý luồng dữ liệu giao tiếp frontend–backend trơn tru.",
          solution: "Thiết kế UI/UX với HTML, CSS, JavaScript, phối hợp backend Java Servlet; làm chủ cách xử lý request/response, luồng dữ liệu và giao tiếp frontend–backend.",
          impact: "Hoàn thiện luồng đặt vé và chọn ghế rạp chiếu thời gian thực, nắm vững cơ chế xử lý request/response và kiến trúc MVC phân tầng ứng dụng web.",
          stack: ["Java Servlet", "HTML5/CSS3", "JavaScript", "SQL Server", "UI/UX Design", "REST Communication"],
          badge: "Đặt Vé Xem Phim",
          accentColor: "from-purple-500/20 to-pink-500/10"
        },
        {
          id: "dol-english-seo",
          title: "Dự Án Tăng Trưởng SEO & Entity Thương Hiệu – DOL English",
          period: "2024 – 2025",
          category: "growth",
          role: "Technical SEO Specialist & Growth Consultant",
          image: "/images/dolenglish.png",
          demoUrl: "https://www.dolenglish.vn",
          challenge: "Cạnh tranh cực kỳ khốc liệt trong ngành đào tạo tiếng Anh & luyện thi IELTS tại Việt Nam; hệ thống website lớn cần giải quyết triệt để lỗi kỹ thuật crawl/index, tối ưu trải nghiệm học viên và củng cố độ uy tín phương pháp Linearthinking.",
          solution: "Audit toàn diện Technical SEO, tối ưu chỉ số Core Web Vitals, xây dựng cấu trúc Topic Clusters & Entity chuyên sâu cho các khóa học IELTS/SAT; triển khai Schema markup giáo dục chuẩn hóa và tối ưu internal link tự động.",
          impact: "Đưa hàng ngàn từ khóa chiến lược về luyện thi IELTS và học tiếng Anh tư duy lọt Top 1 – Top 3 Google; gia tăng lưu lượng truy cập tự nhiên (Organic Traffic) vượt bậc và tăng tỷ lệ chuyển đổi đăng ký khóa học.",
          stack: ["Technical SEO", "Entity Architecture", "Topic Clusters", "Core Web Vitals", "Schema.org", "Google Search Console"],
          badge: "EdTech Top Brand SEO",
          accentColor: "from-rose-500/20 to-red-600/10"
        },
        {
          id: "tam-anh-hospital-seo",
          title: "Dự Án Technical & Medical E-E-A-T SEO – Bệnh Viện Đa Khoa Tâm Anh",
          period: "2024 – 2025",
          category: "growth",
          role: "Medical SEO & Technical Consultant",
          image: "/images/tamanh.png",
          demoUrl: "https://tamanhhospital.vn",
          challenge: "Website y tế chịu sự giám sát ngặt nghèo của thuật toán Google YMYL (Your Money Your Life) và tiêu chuẩn E-E-A-T; hệ thống hàng chục ngàn URL chuyên khoa, bệnh học và đặt lịch cần tối ưu cấu trúc dữ liệu không lỗi lầm.",
          solution: "Xây dựng mạng lưới Entity y khoa chuẩn mực (MedicalEntity Schema), tối ưu phân cấp cấu trúc chuyên khoa, bác sĩ cố vấn và bài viết chuyên môn có kiểm duyệt; tối ưu hóa crawl budget và tốc độ tải trang trên di động.",
          impact: "Khẳng định vị thế thẩm quyền y khoa (Top Medical Authority) trên Google Search; bứt phá hàng triệu lượt tìm kiếm tự nhiên hàng tháng và tăng trưởng mạnh mẽ lượng đăng ký khám trực tuyến qua cổng website.",
          stack: ["Medical SEO", "Google E-E-A-T", "MedicalEntity Schema", "Technical Audit", "Healthcare CX", "Screaming Frog"],
          badge: "Y Tế Chuẩn YMYL & E-E-A-T",
          accentColor: "from-blue-600/20 to-sky-500/10"
        },
        {
          id: "vat-lieu-nha-xanh-seo",
          title: "Dự Án SEO Thương Mại Điện Tử & Phủ Sóng Local – Vật Liệu Nhà Xanh",
          period: "2024 – 2025",
          category: "growth",
          role: "E-Commerce SEO & Growth Lead",
          image: "/images/vatlieunhaxanh.png",
          demoUrl: "https://vatlieunhaxanh.com",
          challenge: "Thị trường phân phối vật liệu xây dựng và tấm ốp trang trí phân mảnh, cạnh tranh giá gay gắt; danh mục hàng ngàn sản phẩm (tấm PU, tấm than tre, lam sóng, cemboard) cần tối ưu phân tầng tránh xung đột từ khóa.",
          solution: "Tái cấu trúc danh mục sản phẩm (Taxonomy Optimization), tích hợp Product & Review Schema chuyên sâu; phân cụm từ khóa có ý định mua hàng cao (Transactional Intent) và tối ưu mạng lưới Local SEO cho toàn bộ chi nhánh.",
          impact: "Thống trị Top 1 – Top 5 các từ khóa thương mại ngành vật liệu xây dựng thế hệ mới; thúc đẩy tăng trưởng hơn 200% số lượng khách hàng B2B/B2C liên hệ báo giá qua Hotline và Zalo.",
          stack: ["E-Commerce SEO", "Local SEO", "Product Schema", "Keyword Intent", "Taxonomy Optimization", "Rank Math"],
          badge: "B2B E-Commerce Growth",
          accentColor: "from-emerald-500/20 to-green-600/10"
        },
        {
          id: "fmath",
          title: "Website Fmath – Học Liệu Toán Nhà F",
          period: "07/2024 – 07/2024",
          category: "growth",
          role: "Đồng sáng lập & Quản lý nội dung",
          image: "/images/fmath.jpg",
          challenge: "Chia sẻ học liệu và bài giảng toán cao cấp, giải tích, xác suất thống kê cho sinh viên Đại học FPT ôn thi hiệu quả.",
          solution: "Thiết kế giao diện website chia sẻ học liệu toán dành cho sinh viên FPT; viết bài, quay dựng video bài giảng, chỉnh sửa và đăng tải lên YouTube.",
          impact: "Hỗ trợ cộng đồng sinh viên học tốt môn Toán, đạt hơn 3.000 lượt xem trong tháng đầu tiên.",
          stack: ["Web Design", "Video Production", "Content Management", "Mathematics", "YouTube Studio"],
          badge: "Học Liệu Sinh Viên FPT",
          accentColor: "from-amber-500/20 to-orange-500/10"
        }
      ]
    },
    experience: {
      title: "Hành trình & Kinh nghiệm thực chiến",
      subtitle: "Quá trình tích lũy chuyên môn liên tục từ giảng đường công nghệ đến môi trường khởi nghiệp, y tế số và doanh nghiệp thực tế.",
      items: [
        {
          id: "exp-1",
          period: "01/2026 – Hiện tại",
          company: "OrcaX Platform",
          role: "CEO & Founder",
          location: "Cần Thơ & Phnom Penh, Campuchia",
          type: "MedTech Startup",
          isCurrent: true,
          description: "Sáng lập và điều hành dự án công nghệ y tế OrcaX. Định hướng kiến trúc công nghệ, xây dựng sản phẩm WebVR 360° và chỉ huy chiến dịch triển khai thực địa quốc tế.",
          achievements: [
            "Hỗ trợ sàng lọc mắt cho gần 600 bệnh nhân tại Phnom Penh, Campuchia (04/2026)",
            "Đưa dự án vào Top 30 Khởi nghiệp Quốc gia và nhận gói ươm mầm 50 triệu VNĐ",
            "Thiết lập mạng lưới quan hệ hợp tác với các bác sĩ chuyên khoa và tổ chức cộng đồng"
          ],
          skills: ["Leadership", "WebVR 360°", "Computer Vision", "Next.js", "Field Operation"]
        },
        {
          id: "exp-visi",
          period: "2026 – Hiện tại",
          company: "Tập đoàn Y khoa VISI",
          role: "Đồng hành Chiến dịch Hành trình tìm lại ánh nhìn duyên",
          location: "Hồ Chí Minh, Cần Thơ, Hoa Lư, Đà Lạt, Bến Tre",
          type: "Healthcare Campaign & Digital Operations",
          isCurrent: true,
          description: "Trực tiếp đồng hành cùng Tập đoàn Y khoa VISI trong chiến dịch nâng cao nhận thức và điều trị lác lé cộng đồng: kết nối giữa truyền thông số hóa, thiết kế ấn phẩm đồ họa, tối ưu hóa quy trình tư vấn và nâng cao trải nghiệm chăm sóc bệnh nhân.",
          achievements: [
            "Đóng góp xây dựng quy trình tiếp nhận, sàng lọc và đồng hành cùng bệnh nhân thực hiện phẫu thuật phục hồi thị lực và thẩm mỹ",
            "Sản xuất tài liệu truyền thông, ấn phẩm đồ họa và tối ưu kênh tiếp cận thông tin y khoa chính thống cho người bệnh",
            "Ứng dụng kiến thức quản lý bệnh viện để cải thiện trải nghiệm và mức độ hài lòng của bệnh nhân trong toàn bộ lộ trình"
          ],
          skills: ["Quản lý Bệnh viện", "Trải nghiệm Bệnh nhân", "Truyền thông Y tế", "Graphic Design", "SEO Y tế"]
        },
        {
          id: "exp-4",
          period: "05/2023 – Hiện tại",
          company: "Bất Động Sản Miền Tây – Nhà Đất Miền Tây",
          role: "Đồng sáng lập & Host truyền thông",
          location: "Khu vực Đồng bằng Sông Cửu Long",
          type: "Media & Commercial Operations",
          isCurrent: true,
          description: "Đồng sáng lập nền tảng truyền thông review và tư vấn bất động sản thực tế. Chịu trách nhiệm sản xuất nội dung video thực địa, tư vấn giải pháp đầu tư và phân phối các sản phẩm nhà đất khu vực ĐBSCL.",
          achievements: [
            "Tư vấn và hỗ trợ giao dịch thành công cho hơn 1.000+ khách hàng quan tâm đến các sản phẩm nhà đất, dự án thực tế",
            "Xây dựng chuỗi nội dung video review nhà đất thực tế thu hút hàng trăm nghìn lượt tiếp cận trên các nền tảng số",
            "Trực tiếp đứng trước ống kính (Host), rèn luyện khả năng giao tiếp, đàm phán và thuyết phục khách hàng chuyên nghiệp",
            "Am hiểu sâu sắc về thị trường, pháp lý quy hoạch và tâm lý nhà đầu tư bất động sản khu vực miền Tây"
          ],
          skills: ["Bất Động Sản", "Tư Vấn Khách Hàng", "Host / Media Production", "Thương Lượng", "Digital Marketing"]
        },
        {
          id: "exp-2",
          period: "09/2025 – 12/2025",
          company: "RikkeiSoft - Chi nhánh TP. Hồ Chí Minh",
          role: "Thực tập sinh Phát triển Phần mềm (Hệ thống LMS Mankai)",
          location: "TP. Hồ Chí Minh",
          type: "Enterprise Tech",
          description: "Tham gia nghiên cứu và phát triển các module cho hệ thống quản lý học tập số (LMS Mankai), làm việc theo quy trình Agile/Scrum chuẩn quốc tế.",
          achievements: [
            "Tham gia xây dựng và tối ưu giao diện quản lý khóa học, bài giảng và theo dõi tiến độ đào tạo trên hệ thống LMS",
            "Tuân thủ nghiêm ngặt quy chuẩn Clean Code, viết tài liệu kỹ thuật và tham gia Code Review cùng các Senior Engineer"
          ],
          skills: ["LMS Mankai", "Agile/Scrum", "Frontend Architecture", "RESTful API", "Clean Code"]
        },
        {
          id: "exp-3",
          period: "2024 – 2025",
          company: "BV ĐK Tâm Anh & BV ĐK Quốc tế Sài Gòn (SIG)",
          role: "Technical SEO Specialist",
          location: "TP. Hồ Chí Minh",
          type: "Healthcare SEO & Growth",
          description: "Chịu trách nhiệm tối ưu hóa kỹ thuật chuyên sâu (Technical SEO) cho cổng thông tin y tế của các hệ thống bệnh viện hàng đầu Việt Nam.",
          achievements: [
            "Tái cấu trúc kiến trúc Entity, triển khai hệ thống dữ liệu có cấu trúc MedicalWebPage / Physician Schema",
            "Tối ưu tốc độ tải trang Core Web Vitals (LCP < 2.5s, CLS < 0.05), tăng 45% lưu lượng truy cập tìm kiếm tự nhiên bền vững"
          ],
          skills: ["Technical SEO", "Medical Schema", "Core Web Vitals", "Google Search Console", "Screaming Frog"]
        },
        {
          id: "exp-5",
          period: "2021 – 2023",
          company: "HERO SEO Co., Ltd",
          role: "SEO Specialist & WordPress Developer",
          location: "Cần Thơ",
          type: "Digital Agency",
          description: "Triển khai các dự án thiết kế website doanh nghiệp tối ưu SEO và trực tiếp thực thi các chiến dịch SEO tổng thể cho khách hàng.",
          achievements: [
            "Xây dựng và tối ưu hơn 20 website WordPress chuẩn SEO, đạt điểm xanh Pagespeed",
            "Nghiên cứu từ khóa chuyên sâu, lập kế hoạch cấu trúc nội dung Topic Cluster tăng trưởng traffic"
          ],
          skills: ["WordPress", "PHP/CSS", "Keyword Strategy", "On-page Optimization"]
        },
        {
          id: "exp-6",
          period: "2019 – 2021",
          company: "Mathpresso Vietnam (Ứng dụng QANDA)",
          role: "Academic Content Specialist (Dataset cho AI)",
          location: "TP. Hồ Chí Minh / Remote",
          type: "EdTech AI",
          description: "Tham gia xử lý, giải bài tập mẫu và chuẩn hóa dữ liệu học thuật số lượng lớn phục vụ huấn luyện mô hình thị giác AI nhận diện công thức toán học.",
          achievements: [
            "Xử lý và gán nhãn chính xác hàng nghìn mẫu bài tập học thuật với độ chính xác đạt 99.5%",
            "Hiểu sâu sắc về cấu trúc dataset và các điều kiện biên trong bài toán huấn luyện mô hình AI thực tế"
          ],
          skills: ["AI Dataset Processing", "Data Labeling", "Quality Assurance", "Mathematics"]
        }
      ]
    },
    techStack: {
      title: "Hệ thống công nghệ & Công cụ làm việc",
      subtitle: "Được tinh chọn để xây dựng những hệ thống ổn định, giao diện mượt mà và phân tích dữ liệu chuẩn mực.",
      categories: [
        {
          title: "Frontend & Architecture",
          description: "Xây dựng giao diện web phản hồi nhanh, mượt mà và chuẩn công thái học",
          icon: "LayoutTemplate",
          skills: [
            { name: "ReactJS", level: "Chuyên sâu", description: "Hooks, State Management, Component Architecture" },
            { name: "Next.js 15", level: "Chuyên sâu", description: "App Router, SSR, SSG, Server Actions" },
            { name: "TypeScript", level: "Thành thạo", description: "Strict Typing, Generic Types, Interface Design" },
            { name: "Tailwind CSS", level: "Chuyên sâu", description: "Custom Design Tokens, Responsive, Glassmorphism" },
            { name: "JavaScript (ES6+)", level: "Thành thạo", description: "Async/Await, DOM Manipulation, Event Loop" },
            { name: "HTML5 / Modern CSS", level: "Chuyên sâu", description: "Semantic HTML, Flexbox, CSS Grid, Transitions" },
            { name: "Bootstrap", level: "Thành thạo", description: "Rapid Prototyping, Grid System" }
          ]
        },
        {
          title: "Backend & Cơ sở dữ liệu",
          description: "Hạ tầng lưu trữ, xử lý logic nghiệp vụ và kiến trúc API bảo mật",
          icon: "Server",
          skills: [
            { name: "Java & Servlet", level: "Nền tảng vững", description: "OOP, MVC Architecture, Enterprise Logic" },
            { name: "SQL Server", level: "Thành thạo", description: "Complex Queries, Stored Procedures, 3NF Normalization" },
            { name: "Supabase (PostgreSQL)", level: "Thành thạo", description: "Realtime DB, Row-Level Security, Auth" },
            { name: "Cloudflare R2", level: "Thành thạo", description: "S3-compatible Object Storage, CDN Edge Delivery" },
            { name: "RESTful API", level: "Chuyên sâu", description: "REST Best Practices, OpenAPI, Webhook Integration" },
            { name: "Node.js Basics", level: "Nền tảng", description: "Backend runtime, Microservices communication" }
          ]
        },
        {
          title: "Nghiên cứu & Dữ liệu khoa học",
          description: "Mô hình hóa định lượng và phương pháp luận nghiên cứu thực nghiệm",
          icon: "Binary",
          skills: [
            { name: "Mô hình PLS-SEM", level: "Chuyên sâu", description: "Structural Equation Modeling, Phân tích nhân tố" },
            { name: "SmartPLS 4", level: "Chuyên sâu", description: "Bootstrapping, Path Coefficients, R-Square Analysis" },
            { name: "IBM SPSS Statistics", level: "Thành thạo", description: "Cronbach's Alpha, EFA, Hồi quy tuyến tính, T-Test / ANOVA" },
            { name: "IBM AMOS", level: "Thành thạo", description: "Covariance-based SEM, CFA, Model Fit Indices" },
            { name: "Thiết kế khảo sát", level: "Thành thạo", description: "Likert Scales, Thẩm định tính hội tụ & phân biệt" },
            { name: "Phản biện học thuật", level: "Chuyên môn", description: "Tiêu chuẩn phản biện bài báo quốc tế & thẩm định dữ liệu" }
          ]
        },
        {
          title: "Thiết kế, Video, SEO & Vận hành",
          description: "Sáng tạo giao diện, biên tập video truyền thông, tăng trưởng truy cập và vận hành CSKH",
          icon: "Compass",
          skills: [
            { name: "Figma", level: "Thành thạo", description: "Wireframing, UI/UX Design System, Prototype tương tác" },
            { name: "CapCut & Premiere Pro", level: "Thành thạo", description: "Biên tập Video ngắn/dài, hiệu ứng nhịp điệu, Color Grading" },
            { name: "Photoshop & Canva", level: "Thành thạo", description: "Thiết kế ấn phẩm truyền thông, Thumbnail, Brand Asset" },
            { name: "Technical SEO & Marketing", level: "Chuyên sâu", description: "Entity Architecture, Internal Linking, Web Vitals, Ahrefs, GSC" },
            { name: "Quản lý Vận hành & CSKH", level: "Thành thạo", description: "Điều phối tiến độ, tư vấn giải pháp, lắng nghe & hỗ trợ người dùng" },
            { name: "Git / GitHub & Dev Tools", level: "Thành thạo", description: "Git Flow, Code Review, quy trình CI/CD cơ bản" }
          ]
        }
      ]
    },
    faq: {
      title: "Câu hỏi thường gặp",
      subtitle: "Những giải đáp ngắn gọn giúp bạn nhanh chóng hiểu rõ về định hướng, năng lực và cách thức phối hợp cùng Thành Trương.",
      items: [
        {
          id: "faq-1",
          question: "Nguyễn Thành Trương phù hợp với những vị trí nào trong tổ chức?",
          answer: "Thành Trương đặc biệt phù hợp với các vai trò đòi hỏi sự giao thoa tư duy: Software Engineer (Frontend / Fullstack), Business Analyst (BA) định hướng kỹ thuật, Technical SEO Specialist cho doanh nghiệp/bệnh viện lớn, hoặc Nghiên cứu viên R&D phát triển giải pháp y tế số."
        },
        {
          id: "faq-2",
          question: "Thành Trương kết hợp giữa Lập trình kỹ thuật và Tối ưu hóa SEO như thế nào?",
          answer: "Tư duy kỹ thuật phần mềm giúp tôi xây dựng cấu trúc mã nguồn sạch, tối ưu hóa triệt để Core Web Vitals (LCP, INP, CLS), thiết lập kiến trúc dữ liệu có cấu trúc Schema JSON-LD và hạ tầng máy chủ ổn định; trong khi tư duy SEO giúp định hướng sản phẩm tiếp cận đúng tệp người dùng mục tiêu, tạo ra chuyển đổi thực tế cho doanh nghiệp."
        },
        {
          id: "faq-3",
          question: "Dự án OrcaX tại Campuchia đã đạt được kết quả cụ thể gì?",
          answer: "Dự án OrcaX đã trực tiếp tổ chức chiến dịch thực địa tại Thủ đô Phnom Penh (Campuchia) vào tháng 04/2026, hỗ trợ khám và sàng lọc mắt cho gần 600 người dân bản địa, đồng thời trình bày giải pháp trước các chuyên gia y tế nước bạn, chứng minh tính khả thi cao của mô hình WebVR 360° kết hợp AI nhãn khoa."
        },
        {
          id: "faq-4",
          question: "Làm thế nào để tải CV hoặc xem chứng chỉ xác thực?",
          answer: "Bạn có thể nhấn trực tiếp vào nút Tải CV ngay trên thanh điều hướng kính mờ (hỗ trợ cả bản Tiếng Việt và Tiếng Anh), hoặc liên hệ trực tiếp qua email truongtn.dev@gmail.com để nhận trọn bộ hồ sơ năng lực, bằng chứng nhận Best Paper Award và các minh chứng dự án."
        }
      ]
    },
    contact: {
      bannerTitle: "Bạn đang tìm kiếm một nhân sự vừa vững tư duy kỹ thuật hệ thống, vừa có năng lực nghiên cứu và khả năng tăng trưởng sản phẩm thực chiến?",
      bannerCta: "Kết nối với tôi",
      bannerCv: "Tải CV bản mới nhất",
      title: "Khởi tạo kết nối & Hợp tác",
      subtitle: "Tôi luôn hào hứng thảo luận về các cơ hội nghề nghiệp giá trị cao, các dự án phần mềm đột phá hoặc các đề tài nghiên cứu liên ngành.",
      directTitle: "Thông tin kết nối trực tiếp",
      formTitle: "Gửi tin nhắn trực tiếp",
      info: {
        email: "truongtn.dev@gmail.com",
        phone: "0973 898 830",
        displayPhone: "0973 898 830",
        location: "Phường An Bình, Ninh Kiều, TP. Cần Thơ, Việt Nam",
        github: "https://github.com/truongtn-dev",
        linkedin: "https://www.facebook.com/nguyn.thnh.trng/",
        facebook: "https://www.facebook.com/nguyn.thnh.trng/",
        zalo: "https://zalo.me/0973898830",
        responseTimeCommitment: "Phản hồi tin nhắn và email trong vòng 24 giờ làm việc."
      },
      form: {
        nameLabel: "Họ và tên",
        namePlaceholder: "Ví dụ: Nguyễn Văn A",
        emailLabel: "Địa chỉ Email",
        emailPlaceholder: "example@company.com",
        orgLabel: "Công ty / Tổ chức",
        orgPlaceholder: "Tên công ty hoặc trường viện",
        topicLabel: "Chủ đề trao đổi",
        topicOptions: [
          { value: "job", label: "Cơ hội việc làm / Tuyển dụng" },
          { value: "software", label: "Hợp tác dự án phần mềm / Web App" },
          { value: "research", label: "Nghiên cứu học thuật / R&D y tế số" },
          { value: "seo", label: "Tư vấn Technical SEO & Tăng trưởng" }
        ],
        messageLabel: "Nội dung trao đổi",
        messagePlaceholder: "Chia sẻ ngắn gọn về nhu cầu hoặc nội dung bạn muốn cùng hợp tác...",
        submitBtn: "Gửi lời nhắn",
        submittingBtn: "Đang gửi thông điệp...",
        successMessage: "Cảm ơn bạn! Lời nhắn đã được gửi thành công. Tôi sẽ phản hồi qua email trong vòng 24 giờ làm việc."
      }
    },
    footer: {
      quote: "Kết hợp tư duy kỹ thuật chuẩn mực và nghiên cứu thực nghiệm để kiến tạo giải pháp công nghệ bền vững.",
      copyright: "Nguyễn Thành Trương",
      builtWith: "Để thành công tự lên tiếng – Work Hard. Silence"
    }
  },

  en: {
    meta: {
      title: "Nguyen Thanh Truong | Software Engineer & Technical Growth",
      description: "Personal Portfolio of Nguyen Thanh Truong - Software Engineer, Product Builder, Technical Growth Specialist, and Academic Researcher."
    },
    navigation: {
      name: "Thanh Truong",
      tagline: "Software Engineer & Growth Builder",
      liveStatus: "Available for high-impact roles",
      links: [
        { id: "about", label: "About" },
        { id: "metrics", label: "Impact" },
        { id: "capabilities", label: "Capabilities" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "tech-stack", label: "Stack" },
        { id: "faq", label: "FAQ" },
        { id: "contact", label: "Contact" }
      ],
      downloadCv: {
        label: "Download CV",
        viVersion: "Vietnamese CV (PDF)",
        enVersion: "English CV (PDF)"
      }
    },
    hero: {
      kicker: "PORTFOLIO 2026",
      firstName: "Thanh",
      lastName: "Truong",
      rolesText: "Software Engineering & AI • Healthcare Operations & Management • Growth Optimization & SEO",
      skillPills: [
        { label: "Software Engineering & AI" },
        { label: "Healthcare Operations & Management" },
        { label: "Growth Optimization & SEO" }
      ],
      identityTags: [
        "Software Engineering & AI",
        "Healthcare Operations",
        "Growth Optimization & SEO"
      ],
      headline: "Product-focused software engineer bridging technology architecture and deep operational realities.",
      bio: "Product-focused software engineer with a distinct strength in bridging technology architecture and deep operational realities. An interdisciplinary foundation in system engineering and healthcare management empowers me to quickly grasp complex domain problems, engineering technically robust applications that optimize accessibility and tangibly relieve real-world operational bottlenecks. Whether building independent software, digitizing healthcare workflows, or co-creating healthtech solutions, I stay committed to one consistent standard: clean code, intuitive experience, and measurable real-world impact.",
      workStatus: "Open for high-impact opportunities in Tech & Healthcare",
      primaryCta: "Explore Featured Projects",
      secondaryCta: "Get in Touch",
      badges: [
        {
          id: "badge-1",
          title: "Best Paper Award",
          subtitle: "ICTechED 2026 (Bangkok)",
          icon: "Trophy"
        },
        {
          id: "badge-2",
          title: "CEO & Founder",
          subtitle: "OrcaX MedTech Platform",
          icon: "Sparkles"
        },
        {
          id: "badge-3",
          title: "Global Health Mission",
          subtitle: "600 Patients (Cambodia)",
          icon: "Globe"
        }
      ]
    },
    metrics: {
      title: "Quantified Impact & Proven Track Record",
      description: "Concrete numerical outcomes forged through systematic engineering, rigorous academic inquiry, and digital growth operations.",
      items: [
        {
          id: "m-1",
          number: "599+",
          label: "Patients Screened in Field",
          description: "Supported eye examinations and screening campaigns in Phnom Penh, Cambodia (04/2026).",
          highlight: "International Humanitarian Field Campaign",
          icon: "Users"
        },
        {
          id: "m-2",
          number: "10+",
          label: "Scientific Papers & Studies",
          description: "Author and co-author of 10+ scientific papers; honored with Best Paper Award and appointed Session Chair at ICTechED International Conference (Bangkok).",
          highlight: "International Academic Excellence",
          icon: "Award"
        },
        {
          id: "m-3",
          number: "Top 30",
          label: "National MedTech Finalist",
          description: "OrcaX MedTech Startup selected into Top 30 nationwide with 50M VND incubation scholarship grant.",
          highlight: "Healthcare Innovation",
          icon: "TrendingUp"
        },
        {
          id: "m-4",
          number: "10+",
          label: "National Media Features",
          description: "Featured and interviewed by Lao Dong Newspaper, Can Tho Newspaper, Kenh14 on 360° Virtual Hospital and digital health solutions.",
          highlight: "Media & Public Impact",
          icon: "CheckCircle2"
        },
        {
          id: "m-5",
          number: "20+",
          label: "Hospitals & Enterprises",
          description: "Engineered Technical SEO and web architecture (Tam Anh General Hospital, Saigon International Hospital SIG, DOL English, PTE Helper...).",
          highlight: "Sustainable Organic Growth",
          icon: "Building2"
        },
        {
          id: "m-6",
          number: "1,000+",
          label: "Real Estate Clients Consulted",
          description: "Directly consulted over 1,000+ property buyers and investors, produced high-reach video reviews, and closed multiple real estate transactions across the Mekong Delta.",
          highlight: "Commercial & Sales Execution",
          icon: "Home"
        }
      ]
    },
    capabilities: {
      title: "What Value Do I Bring to Your Team & Mission?",
      subtitle: "A distinct intersection of disciplined software engineering, empirical research analytics, and battle-tested digital growth.",
      items: [
        {
          id: "cap-1",
          title: "Multi-Stack Engineering & System Architecture",
          subtitle: "Engineering Core & Multi-Stack",
          description: "Proficient across diverse languages and platforms: from backend system engineering (Java, Python, Node.js) and modern web architectures (React, Next.js, TypeScript), to relational database design and AI/WebVR integration.",
          icon: "Code2",
          highlights: [
            "Multi-language versatility: Skilled in Java (OOP, Servlets), Python (AI/Data), TypeScript/JavaScript, and PHP/WordPress",
            "System architecture & Databases: RESTful APIs, MVC patterns, and optimized SQL Server, PostgreSQL, MySQL databases",
            "Modern UI & Emerging Tech: High-speed Web/App (React, Next.js, Tailwind CSS), interactive WebVR 360°, and Computer Vision AI"
          ],
          tags: ["Java", "Python", "TypeScript / React", "Next.js", "SQL / Database", "RESTful API", "Computer Vision", "Git & CI/CD"]
        },
        {
          id: "cap-2",
          title: "Scientific Research & R&D",
          subtitle: "Academic Research",
          description: "Strong empirical methodology, advanced structural equation modeling, and high-impact international publishing.",
          icon: "FlaskConical",
          highlights: [
            "Quantitative statistical modeling and empirical testing using SPSS, PLS-SEM (SmartPLS, IBM AMOS)",
            "Survey instrument design, Cronbach's Alpha reliability and convergent validity validation",
            "International conference paper authoring (ICTechED, AOC, ResFes) and scholarly peer review"
          ],
          tags: ["SPSS", "PLS-SEM", "SmartPLS", "AMOS", "Paper Drafting", "Peer Review", "Data Validation"]
        },
        {
          id: "cap-3",
          title: "Technical SEO & Digital Growth",
          subtitle: "Technical Growth",
          description: "Injecting engineering rigor into digital discovery, crafting search-engine-native architectures that compound organic traffic.",
          icon: "LineChart",
          highlights: [
            "Entity architecture mapping, MedicalWebPage Schema markup, Core Web Vitals optimization",
            "Systematic internal linking graphs and comprehensive on-page/off-page technical auditing",
            "Proven track record scaling organic search visibility and sustainable rankings for corporate enterprises"
          ],
          tags: ["Technical SEO", "Schema Markup", "Core Web Vitals", "Entity Architecture", "Ahrefs", "GSC"]
        },
        {
          id: "cap-4",
          title: "Healthcare Operations & User Experience",
          subtitle: "Healthcare Operations & CX",
          description: "Bridging Hospital Management expertise with digital innovation: clinical intake streamlining, patient journey optimization, and health media production.",
          icon: "HeartPulse",
          highlights: [
            "Clinical Process Optimization: Applying Hospital Management principles to streamline intake, clinical triage, and relieve operational strain",
            "Patient Experience & Consultative Care: Active listening and high-touch communication — accompanying patients through clinical screening missions",
            "Medical Visual Design & Media: Designing clear medical guidance collateral (Figma, Photoshop), health education video production, and authoritative outreach"
          ],
          tags: ["Hospital Management", "Patient Experience", "UI/UX & Graphic Design", "Video Editing", "Digital Health Ops", "Consultative Care"]
        }
      ],
      workflowTitle: "End-to-End Engineering & Product Workflow",
      workflowSteps: [
        {
          step: 1,
          title: "Business Discovery & BA",
          description: "Gather domain requirements, isolate core bottlenecks, and author clear Use Case and ERD specifications."
        },
        {
          step: 2,
          title: "Architecture & UI/UX Design",
          description: "Craft wireframes, establish cohesive design systems, and ensure accessibility and ergonomic UX."
        },
        {
          step: 3,
          title: "Implementation & AI Integration",
          description: "Write clean, type-safe code, design robust APIs, and integrate Computer Vision / WebVR components."
        },
        {
          step: 4,
          title: "Field Testing & Data Validation",
          description: "Deploy to actual field environments, run pilot validations with real users, and gather empirical data."
        },
        {
          step: 5,
          title: "SEO Optimization & Rollout",
          description: "Tune Core Web Vitals, implement structured Schema graphs, configure CI/CD pipelines, and ensure smooth delivery."
        }
      ]
    },
    projects: {
      title: "Featured Projects & Scholarly Works",
      subtitle: "Demonstrated software platforms and academic milestones driven by technical excellence and social utility.",
      filterLabels: {
        all: "All Projects",
        engineering: "Engineering & AI",
        research: "Academic Research",
        growth: "Growth & SEO"
      },
      viewDetailsLabel: "View Case Study",
      closeModalLabel: "Close Details",
      items: [
        {
          id: "orcax",
          title: "OrcaX – Digital Health Ecosystem & 360° Virtual Hospital",
          period: "01/2026 – Present",
          category: "engineering",
          role: "CEO, Co-founder & Technical Lead",
          image: "/images/orcax.png",
          challenge: "Alleviating heavy patient backlogs in ophthalmic screening clinics while easing preoperative patient anxiety before surgical procedures.",
          solution: "Architected a WebVR 360° virtual hospital tour combined with computer vision AI screening algorithms for early eye abnormality detection and real-time patient queue telemetry.",
          impact: "Achieved Top 30 in Vietnam National Startup Competition (awarded 50M VND grant); Successfully conducted an international field deployment in Phnom Penh, screening nearly 600 individuals.",
          stack: ["Next.js 15", "WebVR 360°", "Computer Vision", "Tailwind CSS", "Node.js", "Cloudflare"],
          badge: "International Field Pilot",
          accentColor: "from-sky-500/20 to-blue-600/10"
        },
        {
          id: "icteched-research",
          title: "Generative AI in Entrepreneurial Education Empirical Study",
          period: "01/2026 – 04/2026",
          category: "research",
          role: "Co-Author & Session Chair (Bangkok, Thailand)",
          image: "/images/nghiencuukhoahoc.jpg",
          challenge: "Empirically unraveling how generative AI tools influence entrepreneurial growth mindset and innovation capacity among higher-education students.",
          solution: "Applied partial least squares structural equation modeling (PLS-SEM), constructed validated measurement instruments, and performed rigorous statistical inference with SmartPLS and AMOS.",
          impact: "Awarded Best Paper Award at the prestigious ICTechED 2026 International Conference and appointed Session Chair by the international committee.",
          stack: ["PLS-SEM", "SmartPLS", "AMOS", "SPSS", "Statistical Modeling", "Academic Publishing"],
          badge: "Best Paper Award ICTechED 2026",
          accentColor: "from-amber-500/20 to-orange-500/10"
        },
        {
          id: "aoc-research",
          title: "Ophthalmic Research & Scientific Paper Presentation – AOC 2026",
          period: "09/2026",
          category: "research",
          role: "Co-Author & Scientific Presenter (Da Nang, Vietnam)",
          image: "/images/aoc.jpg",
          challenge: "Addressing standard optometric screening accessibility across Southeast Asia, enhancing early detection of ocular pathologies and community refractive errors through digital health intervention.",
          solution: "Investigated technology-enabled vision screening protocols; captured and evaluated clinical pilot data aligned with the One Vision One Health framework advocated by the Asia Optometric Congress.",
          impact: "Peer-reviewed and officially presented at the 5th Asia Optometric Congress (AOC 2026), 10th ASEAN Optometric Conference, and 5th Optometry Vietnam Conference in Da Nang, engaging international healthcare delegates.",
          stack: ["Optometry Tech", "Clinical Data Analysis", "One Vision One Health", "Medical Research", "AOC 2026"],
          badge: "AOC 2026 International Congress",
          accentColor: "from-cyan-500/20 to-blue-600/10"
        },
        {
          id: "lms-system",
          title: "LMS Platform – Online Learning Management System",
          period: "2024 – 2025",
          category: "engineering",
          role: "Fullstack Developer & System Architect",
          image: "/images/lms.jpg",
          challenge: "Building a scalable learning management platform providing online course delivery, live student progress tracking, and secure assessment workflows.",
          solution: "Architected role-based access control (Admin, Instructor, Student), real-time progress analytics, multimedia lecture storage, and standardized academic syncing APIs.",
          impact: "Streamlined self-paced learning journeys, cut administrative overhead by 60%, and ensured stable performance under concurrent student loads.",
          stack: ["Java", "React", "TypeScript", "SQL Server", "RESTful API", "Tailwind CSS"],
          badge: "LMS EdTech System",
          accentColor: "from-blue-500/20 to-indigo-600/10"
        },
        {
          id: "bus-ticket",
          title: "Bus Booking Portal & Fleet Reservation System",
          period: "06/2025 – 07/2025",
          category: "engineering",
          role: "BA & Fullstack Developer",
          image: "/images/vivutoday.jpg",
          challenge: "Designing an online bus ticketing portal handling concurrent seat locking, visual bus layout seat maps, and complex multi-leg schedule dispatching.",
          solution: "Synthesized business specs into detailed Use Cases, Class Diagrams, and 3NF ERDs; engineered a responsive seat selection frontend (HTML/CSS/JS) and a robust Java Servlet backend on SQL Server.",
          impact: "Executed the entire professional software engineering lifecycle: from discovery, architecture, implementation to rigorous unit and system testing.",
          stack: ["Java Servlet", "SQL Server", "HTML5/CSS3", "JavaScript", "ERD Design", "Use Case Modeling"],
          badge: "Bus Reservation System",
          accentColor: "from-emerald-500/20 to-teal-500/10"
        },
        {
          id: "movie-ticket",
          title: "Cinema Ticket Booking & Interactive Seat Portal",
          period: "02/2025 – 03/2025",
          category: "engineering",
          role: "Fullstack Developer",
          image: "/images/bookmovie.png",
          challenge: "Designing an immersive cinema reservation frontend, real-time cinema hall layout rendering, and synchronized client-server state transitions.",
          solution: "Developed interactive UI/UX components using HTML, CSS, JavaScript; wired Java Servlet backend handlers for request/response serialization, transaction calculations, and seat state synchronization.",
          impact: "Mastered end-to-end HTTP request/response pipelines, layered MVC patterns, and delivered an intuitive, responsive cinema ticketing flow.",
          stack: ["Java Servlet", "HTML5/CSS3", "JavaScript", "SQL Server", "UI/UX Design", "REST Communication"],
          badge: "Cinema Booking Portal",
          accentColor: "from-purple-500/20 to-pink-500/10"
        },
        {
          id: "dol-english-seo",
          title: "Technical SEO & Growth Architecture – DOL English (Linearthinking)",
          period: "2024 – 2025",
          category: "growth",
          role: "Technical SEO Specialist & Growth Consultant",
          image: "/images/dolenglish.png",
          demoUrl: "https://www.dolenglish.vn",
          challenge: "Navigating fierce digital competition in Vietnam's IELTS & English education market; auditing an extensive multi-tier web platform for crawl budget, indexability, and student conversion optimization.",
          solution: "Executed comprehensive technical SEO audits, improved Core Web Vitals, designed deep Topic Clusters & Entity graphs around Linearthinking pedagogy, and automated internal link orchestration with standardized Educational Schema.",
          impact: "Secured Top 1 – Top 3 rankings for thousands of high-value IELTS and English keywords; achieved sustainable organic growth and boosted course registration conversions.",
          stack: ["Technical SEO", "Entity Architecture", "Topic Clusters", "Core Web Vitals", "Schema.org", "Google Search Console"],
          badge: "EdTech Top Brand SEO",
          accentColor: "from-rose-500/20 to-red-600/10"
        },
        {
          id: "tam-anh-hospital-seo",
          title: "Medical E-E-A-T & Technical SEO Architecture – Tam Anh General Hospital",
          period: "2024 – 2025",
          category: "growth",
          role: "Medical SEO & Technical Consultant",
          image: "/images/tamanh.png",
          demoUrl: "https://tamanhhospital.vn",
          challenge: "Meeting Google's most stringent YMYL (Your Money Your Life) E-E-A-T benchmarks; structuring tens of thousands of medical specialty pages, doctor registries, and clinical appointment flows with zero indexing defects.",
          solution: "Engineered interconnected MedicalEntity schema graphs, structured clinical specialty taxonomies with verified physician review protocols, and optimized mobile performance and crawl budget.",
          impact: "Solidified institutional Medical Authority on Google Search; drove millions in monthly organic traffic and generated substantial increases in online appointment bookings.",
          stack: ["Medical SEO", "Google E-E-A-T", "MedicalEntity Schema", "Technical Audit", "Healthcare CX", "Screaming Frog"],
          badge: "YMYL & E-E-A-T Medical Authority",
          accentColor: "from-blue-600/20 to-sky-500/10"
        },
        {
          id: "vat-lieu-nha-xanh-seo",
          title: "B2B E-Commerce & Local SEO Expansion – Vat Lieu Nha Xanh",
          period: "2024 – 2025",
          category: "growth",
          role: "E-Commerce SEO & Growth Lead",
          image: "/images/vatlieunhaxanh.png",
          demoUrl: "https://vatlieunhaxanh.com",
          challenge: "High wholesale/retail keyword rivalry in building materials & interior panelling (PU stone, bamboo charcoal, cemboard); preventing keyword cannibalization across sprawling product hierarchies.",
          solution: "Re-engineered category taxonomy and information architecture, implemented Product and Review schema, focused on transactional long-tail keywords, and optimized multi-location Google Business profiles.",
          impact: "Captured Top 1 – Top 5 positions for core decorative material queries; increased B2B/B2C direct inquiry calls and Zalo quote requests by over 200%.",
          stack: ["E-Commerce SEO", "Local SEO", "Product Schema", "Keyword Intent", "Taxonomy Optimization", "Rank Math"],
          badge: "B2B E-Commerce Growth",
          accentColor: "from-emerald-500/20 to-green-600/10"
        },
        {
          id: "fmath",
          title: "Fmath Platform – FPT Mathematics Learning Hub",
          period: "07/2024 – 07/2024",
          category: "growth",
          role: "Co-founder & Content Lead",
          image: "/images/fmath.jpg",
          challenge: "Providing accessible, visual learning assets and recorded problem walkthroughs for college calculus and linear algebra students at FPT University.",
          solution: "Designed the Fmath resource portal for FPT learners; authored comprehensive study guides, produced video walkthroughs, and published via YouTube.",
          impact: "Assisted university students in mastering advanced calculus, accumulating over 3,000 views within its initial month of launch.",
          stack: ["Web Design", "Video Production", "Content Management", "Mathematics", "YouTube Studio"],
          badge: "FPT Student Resource",
          accentColor: "from-amber-500/20 to-orange-500/10"
        }
      ]
    },
    experience: {
      title: "Career Trajectory & Field Milestones",
      subtitle: "A continuum of hands-on impact spanning high-growth startups, hospital systems, digital agencies, and international research forums.",
      items: [
        {
          id: "exp-1",
          period: "01/2026 – Present",
          company: "OrcaX MedTech Platform",
          role: "CEO & Founder",
          location: "Can Tho & Phnom Penh, Cambodia",
          type: "MedTech Startup",
          isCurrent: true,
          description: "Founding and steering the OrcaX medical technology initiative. Directing architectural decisions, 360° virtual hospital product design, and international clinical field missions.",
          achievements: [
            "Conducted free vision screenings for ~600 patients in Phnom Penh, Cambodia (04/2026)",
            "Propelled project into Top 30 National Startups and secured a 50M VND grant",
            "Built strategic alliances with ophthalmologists, medical clinics, and community leaders"
          ],
          skills: ["Leadership", "WebVR 360°", "Computer Vision", "Next.js", "Field Operation"]
        },
        {
          id: "exp-visi",
          period: "2026 – Present",
          company: "VISI Healthcare Group",
          role: "Community Strabismus Campaign Coordinator",
          location: "Can Tho & Ho Chi Minh City",
          type: "Healthcare Campaign & Digital Operations",
          isCurrent: true,
          description: "Partnering closely with VISI Healthcare Group on community strabismus treatment initiatives: bridging digital health communication, graphic design, consultation workflow streamlining, and patient journey optimization.",
          achievements: [
            "Co-designed standardized intake, screening, and companion care pathways for patients undergoing corrective strabismus surgery",
            "Produced authoritative medical media collateral, infographics, and optimized search acquisition channels for clinical education",
            "Leveraged hospital management methodologies to enhance patient comfort, clarity, and satisfaction throughout the treatment journey"
          ],
          skills: ["Hospital Management", "Patient Experience", "Healthcare Media", "Graphic Design", "Medical SEO"]
        },
        {
          id: "exp-4",
          period: "05/2023 – Present",
          company: "Bat Dong San Mien Tay",
          role: "Co-founder & Media Host",
          location: "Mekong Delta Region",
          type: "Media & Business",
          isCurrent: true,
          description: "Co-founded the real estate media network, hosting on-site video reviews, delivering investment consultancy, and distributing commercial property across the Mekong Delta.",
          achievements: [
            "Advised and facilitated property transactions for over 1,000+ prospective real estate clients",
            "Produced high-performing on-site property walkthrough videos accumulating hundreds of thousands of organic views",
            "Served as on-camera Host, developing exceptional persuasion, client negotiation, and market communication skills",
            "Deep expertise in zoning regulations, real estate legal compliance, and regional investor psychology"
          ],
          skills: ["Real Estate", "Client Advisory", "Media Host", "Negotiation", "Digital Marketing"]
        },
        {
          id: "exp-2",
          period: "09/2025 – 12/2025",
          company: "RikkeiSoft - Ho Chi Minh City",
          role: "Software Engineering Intern (LMS Mankai System)",
          location: "Ho Chi Minh City",
          type: "Enterprise Tech",
          description: "Contributed to the engineering and module development of the Mankai Learning Management System (LMS) adhering to international Agile/Scrum standards.",
          achievements: [
            "Engineered and optimized user interfaces for course management, curricula tracking, and learner analytics on the LMS platform",
            "Maintained strict Clean Code practices, authored technical specs, and engaged in peer code reviews"
          ],
          skills: ["LMS Mankai", "Agile/Scrum", "Frontend Architecture", "RESTful API", "Clean Code"]
        },
        {
          id: "exp-3",
          period: "2024 – 2025",
          company: "Tam Anh General Hospital & Saigon Int'l Hospital (SIG)",
          role: "Technical SEO Specialist",
          location: "Ho Chi Minh City",
          type: "Healthcare SEO & Growth",
          description: "Architected advanced Technical SEO strategies for premier healthcare networks in Vietnam.",
          achievements: [
            "Re-architected entity graphs, rolled out MedicalWebPage / Physician JSON-LD schemas",
            "Elevated Core Web Vitals (LCP < 2.5s, CLS < 0.05), driving a 45% lift in sustainable organic patient search traffic"
          ],
          skills: ["Technical SEO", "Medical Schema", "Core Web Vitals", "Google Search Console", "Screaming Frog"]
        },
        {
          id: "exp-5",
          period: "2021 – 2023",
          company: "HERO SEO Co., Ltd",
          role: "SEO Specialist & WordPress Developer",
          location: "Can Tho",
          type: "Digital Agency",
          description: "Engineered SEO-first WordPress portals and spearheaded holistic search visibility campaigns for corporate clients.",
          achievements: [
            "Developed over 20 high-speed, SEO-optimized business websites with perfect Pagespeed ratings",
            "Engineered semantic keyword topic clusters that amplified domain authority and inbound leads"
          ],
          skills: ["WordPress", "PHP/CSS", "Keyword Strategy", "On-page Optimization"]
        },
        {
          id: "exp-6",
          period: "2019 – 2021",
          company: "Mathpresso Vietnam (QANDA App)",
          role: "Academic Content Specialist (AI Training Dataset)",
          location: "Ho Chi Minh City / Remote",
          type: "EdTech AI",
          description: "Annotated, solved, and structured mathematical logic datasets at scale to train machine vision equation recognition models.",
          achievements: [
            "Labeled and validated thousands of complex STEM problems maintaining a 99.5% accuracy benchmark",
            "Gained deep comprehension of training dataset distributions, outliers, and model edge cases"
          ],
          skills: ["AI Dataset Processing", "Data Labeling", "Quality Assurance", "Mathematics"]
        }
      ]
    },
    techStack: {
      title: "Technology Arsenal & Tooling",
      subtitle: "Hand-picked for crafting stable software systems, fluid glass interfaces, and rigorous empirical research.",
      categories: [
        {
          title: "Frontend & Architecture",
          description: "Crafting reactive, ergonomic, and aesthetic web interfaces",
          icon: "LayoutTemplate",
          skills: [
            { name: "ReactJS", level: "Advanced", description: "Hooks, State Management, Component Architecture" },
            { name: "Next.js 15", level: "Advanced", description: "App Router, SSR, SSG, Server Actions" },
            { name: "TypeScript", level: "Proficient", description: "Strict Typing, Generic Types, Interface Design" },
            { name: "Tailwind CSS", level: "Advanced", description: "Custom Design Tokens, Responsive, Glassmorphism" },
            { name: "JavaScript (ES6+)", level: "Proficient", description: "Async/Await, DOM Manipulation, Event Loop" },
            { name: "HTML5 / Modern CSS", level: "Advanced", description: "Semantic HTML, Flexbox, CSS Grid, Transitions" },
            { name: "Bootstrap", level: "Proficient", description: "Rapid Prototyping, Grid System" }
          ]
        },
        {
          title: "Backend & Database",
          description: "Scalable data stores, business services, and secure API architectures",
          icon: "Server",
          skills: [
            { name: "Java & Servlet", level: "Solid Core", description: "OOP, MVC Architecture, Enterprise Logic" },
            { name: "SQL Server", level: "Proficient", description: "Complex Queries, Stored Procedures, 3NF Normalization" },
            { name: "Supabase (PostgreSQL)", level: "Proficient", description: "Realtime DB, Row-Level Security, Auth" },
            { name: "Cloudflare R2", level: "Proficient", description: "S3-compatible Object Storage, CDN Edge Delivery" },
            { name: "RESTful API", level: "Advanced", description: "REST Best Practices, OpenAPI, Webhook Integration" },
            { name: "Node.js Basics", level: "Working", description: "Backend runtime, Microservices communication" }
          ]
        },
        {
          title: "Research & Scientific Data",
          description: "Quantitative modeling, statistical validation, and empirical rigor",
          icon: "Binary",
          skills: [
            { name: "PLS-SEM Modeling", level: "Advanced", description: "Structural Equation Modeling, Factor Analysis" },
            { name: "SmartPLS 4", level: "Advanced", description: "Bootstrapping, Path Coefficients, R-Square Analysis" },
            { name: "IBM SPSS Statistics", level: "Proficient", description: "Cronbach's Alpha, EFA, Multiple Regression, ANOVA" },
            { name: "IBM AMOS", level: "Proficient", description: "Covariance-based SEM, CFA, Model Fit Indices" },
            { name: "Survey Methodology", level: "Proficient", description: "Likert Scales, Convergent & Discriminant Validity" },
            { name: "Academic Peer Review", level: "Specialist", description: "International journal review standards & empirical validation" }
          ]
        },
        {
          title: "Design, Video, SEO & Operations",
          description: "UI/UX design, multimedia video production, SEO growth, and customer care operations",
          icon: "Compass",
          skills: [
            { name: "Figma", level: "Proficient", description: "Wireframing, UI/UX Design System, Interactive Prototypes" },
            { name: "CapCut & Premiere Pro", level: "Proficient", description: "Short & Long-form Video Editing, Motion Effects, Audio Sync" },
            { name: "Photoshop & Canva", level: "Proficient", description: "Graphic Design, Marketing Collaterals, Brand Assets" },
            { name: "Technical SEO & Marketing", level: "Advanced", description: "Entity Architecture, Internal Linking, Web Vitals, Ahrefs, GSC" },
            { name: "Operations & Customer Care", level: "Proficient", description: "Product operations, user support, onboarding & client care" },
            { name: "Git / GitHub & Dev Tools", level: "Proficient", description: "Git Flow, Code Review, CI/CD foundations" }
          ]
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Concise answers addressing my technical orientation, core strengths, and collaboration models.",
      items: [
        {
          id: "faq-1",
          question: "Which roles and missions are the best fit for Nguyen Thanh Truong?",
          answer: "I am uniquely positioned for roles requiring multidimensional capability: Software Engineer (Frontend / Fullstack), Technical Business Analyst (BA), Technical SEO Specialist for major healthcare/enterprise platforms, or an R&D Fellow engineering digital health products."
        },
        {
          id: "faq-2",
          question: "How do you harmonize software engineering with SEO growth?",
          answer: "My engineering background enables me to build performant codebases, maximize Core Web Vitals (sub-second LCP, minimal CLS), implement rich Schema JSON-LD graphs, and maintain resilient infrastructure. Concurrently, my SEO acumen ensures every technical build aligns directly with user search intent and business conversion."
        },
        {
          id: "faq-3",
          question: "What concrete achievements resulted from the OrcaX Cambodia field mission?",
          answer: "OrcaX conducted a humanitarian diagnostic mission in Phnom Penh (04/2026), delivering eye screenings for ~600 citizens. We demonstrated the solution directly to local medical authorities, confirming the clinical and practical viability of our WebVR 360° and AI ophthalmic screening workflow."
        },
        {
          id: "faq-4",
          question: "How can I obtain an official CV or verify awards and credentials?",
          answer: "Click the 'Download CV' button directly on the floating glass navigation bar (available in both Vietnamese and English), or email me directly at truongtn.dev@gmail.com to receive my comprehensive portfolio dossier, Best Paper verification, and project proofs."
        }
      ]
    },
    contact: {
      bannerTitle: "Seeking an engineer who bridges system architecture, rigorous research, and digital growth execution?",
      bannerCta: "Connect With Me",
      bannerCv: "Download Latest CV",
      title: "Start a Conversation",
      subtitle: "Always open to high-impact career opportunities, innovative software ventures, or interdisciplinary research collaborations.",
      directTitle: "Direct Channels",
      formTitle: "Send a Message",
      info: {
        email: "truongtn.dev@gmail.com",
        phone: "0973 898 830",
        displayPhone: "0973 898 830",
        location: "An Binh Ward, Ninh Kieu, Can Tho City, Vietnam",
        github: "https://github.com/truongtn-dev",
        linkedin: "https://www.facebook.com/nguyn.thnh.trng/",
        facebook: "https://www.facebook.com/nguyn.thnh.trng/",
        zalo: "https://zalo.me/0973898830",
        responseTimeCommitment: "Guaranteed response within 24 business hours."
      },
      form: {
        nameLabel: "Your Name",
        namePlaceholder: "e.g., Alex Johnson",
        emailLabel: "Email Address",
        emailPlaceholder: "alex@organization.com",
        orgLabel: "Company / Institution",
        orgPlaceholder: "Your company or university",
        topicLabel: "Inquiry Topic",
        topicOptions: [
          { value: "job", label: "Career Opportunity / Recruitment" },
          { value: "software", label: "Software Project / Web App Collaboration" },
          { value: "research", label: "Academic Research / Digital Health R&D" },
          { value: "seo", label: "Technical SEO & Growth Advisory" }
        ],
        messageLabel: "Your Message",
        messagePlaceholder: "Briefly outline your project requirements or what you would like to discuss...",
        submitBtn: "Send Message",
        submittingBtn: "Transmitting message...",
        successMessage: "Thank you! Your message has been received. I will reply via email within 24 business hours."
      }
    },
    footer: {
      quote: "Synthesizing rigorous software engineering and empirical research to forge enduring digital impact.",
      copyright: "Nguyen Thanh Truong",
      builtWith: "Let success make the noise – Work Hard. Silence"
    }
  }
};
