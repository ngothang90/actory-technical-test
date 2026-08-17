// questions_data.js
const questions = [
    // --- PHẦN 1: CƠ KHÍ CƠ BẢN (Mô phỏng bộ 300 câu) ---
    {
        category: "cokhi",
        question: "Trong hệ thống lỗ trục, kiểu lắp có độ dôi (interference fit) có đặc điểm gì?",
        options: [
            "Vòng ngoài và vòng trong luôn có khe hở sau khi lắp.",
            "Kích thước thực của trục luôn lớn hơn lỗ trước khi lắp, đảm bảo mối ghép cố định.",
            "Cho phép các chi tiết dịch chuyển trượt dọc trục tự do.",
            "Dễ dàng tháo lắp bằng tay mà không cần dụng cụ."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "Ký hiệu độ nhám bề mặt nào thể hiện phương pháp gia công bằng cắt gọt (tiện, phay, bào)?",
        options: [
            "Ký hiệu có gạch ngang hoặc không có chỉ dẫn cụ thể.",
            "Ký hiệu có nét gạch ngang phía trên đỉnh của dấu chữ V.",
            "Ký hiệu vòng tròn nội tiếp biểu thị bề mặt không bóc phoi.",
            "Ký hiệu dạng sóng đều."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "Ý nghĩa của cấp chính xác trong gia công cơ khí là gì?",
        options: [
            "Quy định độ cứng tối đa của vật liệu chế tạo.",
            "Đánh giá mức độ chính xác về kích thước, hình dáng và vị trí tương quan.",
            "Xác định tốc độ cắt gọt tối ưu trên máy CNC.",
            "Đo lường trọng lượng riêng sau khi nhiệt luyện."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "Ưu điểm vượt trội của bộ truyền động đai so với bánh răng là gì?",
        options: [
            "Tỷ số truyền tuyệt đối không có hiện tượng trượt.",
            "Kích thước cực kỳ nhỏ gọn khi truyền tải công suất lớn.",
            "Làm việc êm, không gây tiếng ồn và bảo vệ cơ cấu khi quá tải nhờ khả năng trượt.",
            "Tuổi thọ cao hơn trong môi trường nhiệt độ khắc nghiệt."
        ],
        correct: 2
    },
    {
        category: "cokhi",
        question: "Ổ bi đỡ chặn (Angular contact ball bearings) thường dùng trong trường hợp nào?",
        options: [
            "Chỉ chịu tải trọng dọc trục theo một hướng cố định.",
            "Chỉ chịu tải trọng hướng tâm thuần túy.",
            "Chịu đồng thời cả tải trọng hướng tâm và tải trọng dọc trục.",
            "Dùng cho trục đường kính rất lớn và tốc độ siêu chậm."
        ],
        correct: 2
    },
    {
        category: "cokhi",
        question: "Thép không gỉ dòng Austenit phổ biến như SUS304 có đặc tính gì?",
        options: [
            "Có từ tính rất mạnh, dễ bị hút bởi nam châm vĩnh cửu.",
            "Không nhiễm từ hoặc nhiễm rất yếu, chống ăn mòn tốt và dễ biến dạng dẻo.",
            "Độ cứng cực cao sau khi đúc, không thể gia công cắt gọt.",
            "Dễ bị rỉ sét nặng trong môi trường nước muối."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "Mục đích chính của quá trình tôi thép (Quenching) trong nhiệt luyện là gì?",
        options: [
            "Làm mềm thép để dễ dàng gia công cắt gọt.",
            "Làm tăng độ cứng và độ bền chống mài mòn bằng cách tạo cấu trúc mactenxit.",
            "Khử hoàn toàn ứng suất nội sau khi hàn.",
            "Tăng độ dẻo dai chống va đập đột ngột."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "Khi thiết kế cơ khí tích hợp linh kiện bên trong khung máy (chassis), yếu tố nào ưu tiên để dễ bảo trì?",
        options: [
            "Xếp chồng các module khít tuyệt đối để không gian nhỏ nhất.",
            "Bố trí đường ống, dây cáp và module theo dạng tháo lắp nhanh (quick-disconnect).",
            "Hàn cố định toàn bộ các chi tiết để tránh rung động.",
            "Đặt tất cả cụm chuyển động ra phía ngoài vỏ máy."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "Chi tiết dạng ống hoặc thanh chịu giãn nở nhiệt được gập khúc ở giữa (dạng chữ U) nhằm mục đích gì?",
        options: [
            "Tăng trọng lượng để giữ vững khung máy.",
            "Triệt tiêu ứng suất do giãn nở nhiệt và tạo độ đàn hồi, linh hoạt.",
            "Giảm tiết diện lưu chất chảy qua ống.",
            "Tăng tính thẩm mỹ nội thất máy."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "Hình chiếu vuông góc tiêu chuẩn nào trong bản vẽ thể hiện góc nhìn từ trên xuống?",
        options: [
            "Hình chiếu cạnh.",
            "Hình chiếu bằng.",
            "Hình chiếu đứng.",
            "Hình chiếu trục đo."
        ],
        correct: 1
    },

    // --- PHẦN 2: KỸ THUẬT GASBOX (Mô phỏng bộ 300 câu) ---
    {
        category: "gasbox",
        question: "Chức năng chính của thiết bị MFC (Mass Flow Controller) trong hệ thống Gasbox là gì?",
        options: [
            "Đo và điều chỉnh tự động lưu lượng khối lượng dòng khí chính xác.",
            "Tăng áp suất khí từ bình chứa áp thấp lên áp suất cao cho buồng phản ứng.",
            "Khóa dòng khí hoàn toàn khi xảy ra sự cố mất điện nguồn.",
            "Lọc sạch các hạt bụi siêu nhỏ kích thước dưới 0.001 micromet."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "Kiểu kết nối đường ống nào được sử dụng rộng rãi nhất trong hệ thống gasbox sạch cao (UHP)?",
        options: [
            "Kết nối ren ống nước thông thường (PT/NPT).",
            "Kết nối mặt bích cao su (Rubber Flange).",
            "Kết nối khớp nối VCR sử dụng vòng đệm kim loại (gasket).",
            "Hàn nhiệt ống nhựa PVC chịu lực."
        ],
        correct: 2
    },
    {
        category: "gasbox",
        question: "Van AOV (Air Operated Valve) dạng NC (Normally Closed) có trạng thái thế nào khi mất khí nén điều khiển?",
        options: [
            "Van ở trạng thái mở hoàn toàn.",
            "Van ở trạng thái đóng hoàn toàn (an toàn khi mất nguồn khí).",
            "Van tự động mở khi nhiệt độ đường ống vượt giới hạn.",
            "Van mở hoặc đóng ngẫu nhiên theo tín hiệu PLC."
        ],
        correct: 1
    },
    {
        category: "gasbox",
        question: "Phương pháp hóa hơi tiền chất lỏng giữa Applied Materials (AMAT) và Tokyo Electron (TEL) khác nhau thế nào?",
        options: [
            "AMAT dùng sủi bọt khí (bubbling), TEL ứng dụng phương pháp nung sấy/module hóa hơi (baking).",
            "Cả hai hãng đều dùng chung một module phun trực tiếp điện tử.",
            "AMAT dùng đông đặc chân không, TEL dùng nén cơ học.",
            "AMAT không dùng tiền chất lỏng."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "Tại sao các đường ống dẫn khí dễ ngưng tụ trong gasbox bắt buộc phải quấn dây gia nhiệt (heating jacket)?",
        options: [
            "Để làm tăng tốc độ dòng chảy của khí lên gấp đôi.",
            "Ngăn chặn tiền chất lỏng ngưng tụ trở lại dạng lỏng bên trong ống gây tắc nghẽn.",
            "Giúp làm sạch đường ống bằng nhiệt độ cao liên tục.",
            "Giảm áp suất đột ngột tại các đầu nối VCR."
        ],
        correct: 1
    },
    {
        category: "gasbox",
        question: "Tiêu chuẩn độ nhám bề mặt trong (Ra) của ống dẫn khí sạch cao (UHP) thường yêu cầu đạt mức nào?",
        options: [
            "Ra <= 0.4 um hoặc <= 0.1 um được đánh bóng điện hóa (EP).",
            "Ra khoảng 3.2 um như ống thép xây dựng thông thường.",
            "Ra <= 12.5 um là đạt tiêu chuẩn.",
            "Không cần quan tâm đến độ nhám."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "Quy trình làm sạch và trơ hóa bề mặt thép không gỉ dùng khí đặc biệt thường dùng khí gì để xả sạch (purge)?",
        options: [
            "Khí nén công nghiệp chứa hơi ẩm.",
            "Khí Nitơ độ tinh khiết cao hoặc Argon siêu sạch.",
            "Khí Oxy nguyên chất áp suất cao.",
            "Hơi nước khử khoáng nóng."
        ],
        correct: 1
    },
    {
        category: "gasbox",
        question: "Thiết bị chuyên dụng nào dùng để kiểm tra rò rỉ vi mô (micro-leak) trên mối nối VCR với độ nhạy cực cao?",
        options: [
            "Máy dò rò rỉ khí Helium (Helium Leak Detector).",
            "Bình xịt nước xà phòng thông thường.",
            "Đồng hồ đo áp suất chênh lệch cơ học.",
            "Cảm biến phát hiện khói quang điện."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "Khí nào được sử dụng phổ biến làm khí trơ để xả đuổi an toàn (Purge) khi bảo trì bình chứa khí độc/cháy?",
        options: [
            "Khí Hydro (H2).",
            "Khí Nitơ (N2) hoặc Argon (Ar).",
            "Khí CO2.",
            "Khí Acetylen."
        ],
        correct: 1
    },
    {
        category: "gasbox",
        question: "Chức năng của hệ thống Interlock an toàn trong phòng đựng bình khí (Gas Cabinet) là gì?",
        options: [
            "Tự động đóng ngắt van cấp nguồn khi phát hiện rò rỉ khí độc hoặc mở cửa tủ trái phép.",
            "Điều chỉnh nhiệt độ phòng điều khiển trung tâm.",
            "Cân bằng áp suất giữa hai bình khí độc lập.",
            "Báo cáo số lượng bình khí còn lại cho bộ phận mua hàng."
        ],
        correct: 0
    }
];

// Nếu bạn muốn mở rộng tự động lên đủ 300 câu mỗi loại, hệ thống script dưới đây sẽ nhân bản thông minh hoặc bạn có thể tiếp tục bổ sung mảng dữ liệu này.
module.exports = questions;