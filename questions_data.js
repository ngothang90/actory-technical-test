// questions_data.js
const questions = [
    // --- PHẦN 1: CƠ KHÍ CƠ BẢN ---
    {
        category: "cokhi",
        question: "[CK-001] Trong hệ thống lỗ trục, kiểu lắp có độ dôi (interference fit) có đặc điểm gì?",
        options: [
            "Vòng ngoài và vòng trong luôn có khe hở.",
            "Kích thước thực của trục luôn lớn hơn lỗ, đảm bảo mối ghép cố định.",
            "Cho phép trượt tự do.",
            "Dễ tháo lắp bằng tay."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "[CK-002] Ký hiệu độ nhám bề mặt thể hiện phương pháp gia công cắt gọt (tiện, phay, bào)?",
        options: [
            "Không có chỉ dẫn cụ thể.",
            "Ký hiệu có nét gạch ngang phía trên đỉnh dấu chữ V.",
            "Ký hiệu vòng tròn nội tiếp.",
            "Ký hiệu sóng đều."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "[CK-003] Ý nghĩa của cấp chính xác trong gia công cơ khí là gì?",
        options: [
            "Quy định độ cứng tối đa.",
            "Đánh giá mức độ chính xác về kích thước và vị trí tương quan.",
            "Xác định tốc độ cắt CNC.",
            "Đo trọng lượng riêng."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "[CK-004] Ưu điểm của bộ truyền động đai so với bánh răng là gì?",
        options: [
            "Tỷ số truyền tuyệt đối.",
            "Kích thước nhỏ gọn.",
            "Làm việc êm, giảm chấn và bảo vệ khi quá tải nhờ trượt đai.",
            "Tuổi thọ cao hơn trong nhiệt độ khắc nghiệt."
        ],
        correct: 2
    },
    {
        category: "cokhi",
        question: "[CK-005] Ổ bi đỡ chặn (Angular contact ball bearings) dùng khi nào?",
        options: [
            "Chỉ chịu tải dọc trục.",
            "Chỉ chịu tải hướng tâm.",
            "Chịu đồng thời tải hướng tâm và dọc trục.",
            "Dùng cho trục siêu chậm."
        ],
        correct: 2
    },
    {
        category: "cokhi",
        question: "[CK-006] Vật liệu nào sau đây thuộc nhóm thép hợp kim dụng cụ dùng làm dao cắt?",
        options: [
            "Thép C45.",
            "Thép gió (HSS) hoặc hợp kim cứng (Carbide).",
            "Gang xám.",
            "Đồng thau."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "[CK-007] Phương pháp nhiệt luyện nào làm tăng độ cứng bề mặt thép trong khi lõi vẫn giữ được độ dẻo dai?",
        options: [
            "Ủ thấp.",
            "Thấm carbon, thấm nitơ hoặc tôi cao tần bề mặt.",
            "Normalizing (Đốt thường).",
            "Tôi thấu toàn phần."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "[CK-008] Trong bản vẽ kỹ thuật, hình cắt (section) dùng để làm gì?",
        options: [
            "Biểu diễn hình dáng bên ngoài của vật thể ở góc nhìn khác.",
            "Thể hiện rõ các phần bên trong bị khuất của chi tiết máy.",
            "Đo trọng lượng của vật thể.",
            "Xác định màu sơn của máy."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "[CK-009] Hiện tượng mỏi của vật liệu kim loại xảy ra khi nào?",
        options: [
            "Dưới tác dụng của tải trọng thay đổi (chu kỳ) liên tục trong thời gian dài.",
            "Khi để vật thể ngoài trời bị rỉ sét.",
            "Khi nung nóng kim loại đến nhiệt độ chảy.",
            "Khi gia công cắt gọt với tốc độ quá thấp."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-010] Dung sai kích thước là gì?",
        options: [
            "Hiệu giữa kích thước lớn nhất và kích thước nhỏ nhất cho phép.",
            "Sai số do người đo đọc nhầm.",
            "Khoảng cách chính xác tuyệt đối giữa hai bề mặt.",
            "Độ lệch chuẩn của một loạt sản phẩm."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-011] Đâu là công dụng chính của dầu làm mát trong quá trình gia công cắt gọt?",
        options: [
            "Làm tăng ma sát để dao bám phoi tốt hơn.",
            "Làm nguội vùng cắt, giảm ma sát và hỗ trợ thoát phoi.",
            "Làm mềm phôi trước khi cắt.",
            "Tăng tốc độ mòn của dao cắt."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "[CK-012] Ren hệ mét có góc profile (góc ở đỉnh ren) tiêu chuẩn là bao nhiêu độ?",
        options: [
            "55 độ.",
            "60 độ.",
            "45 độ.",
            "30 độ."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "[CK-013] Đâu là đặc điểm của gang xám trong cơ khí?",
        options: [
            "Có tính đúc tốt, chịu nén cao, chống mòn tốt nhưng giòn.",
            "Dẻo dai tuyệt đối, dễ kéo sợi và hàn nối.",
            "Chỉ dùng để làm lò xo đàn hồi.",
            "Trọng lượng nhẹ hơn nhôm."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-014] Trong hệ thống truyền động thủy lực, van tiết lưu có tác dụng gì?",
        options: [
            "Thay đổi lưu lượng chất lỏng chảy qua, từ đó điều chỉnh tốc độ cơ cấu chấp hành.",
            "Tạo ra áp suất tối đa cho bơm.",
            "Lọc sạch cặn bẩn trong dầu.",
            "Đảo chiều dòng dầu ngay lập tức."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-015] Phương pháp kiểm tra không phá hủy (NDT) nào thường dùng để phát hiện nứt bề mặt kim loại?",
        options: [
            "Thử kéo đứt mẫu vật.",
            "Kiểm tra bằng thẩm thấu chất lỏng (PT) hoặc hạt từ (MT).",
            "Cắt mẫu để soi kính hiển vi.",
            "Đo độ cứngBrinell."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "[CK-016] Mối ghép bằng then (key) trên trục có nhiệm vụ gì?",
        options: [
            "Cố định dọc trục các chi tiết quay như bánh răng, puly để truyền mô-men xoắn.",
            "Làm kín không cho dầu rò rỉ qua khe hở.",
            "Giảm rung động dọc trục.",
            "Nối các đoạn trục dài với nhau."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-017] Quá trình nhiệt luyện 'Tôi' (Hardening) bao gồm các bước nào?",
        options: [
            "Nung nóng đến nhiệt độ tới hạn, giữ nhiệt rồi làm nguội nhanh.",
            "Nung nóng rồi để nguội từ từ trong lò.",
            "Làm lạnh sâu âm độ rồi nung đột ngột.",
            "Ép dập nguội dưới áp lực lớn."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-018] Trong gia công phay, phương pháp phay nghịch có đặc điểm gì so với phay thuận?",
        options: [
            "Dao cắt ngược chiều với hướng chuyển động của phoi, dễ gây rung động nhưng an toàn hơn khi máy có độ rơ.",
            "Dao cắt cùng chiều chuyển động của phoi.",
            "Bề mặt gia công luôn đạt độ bóng tuyệt đối.",
            "Không dùng được cho vật liệu gang."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-019] Dụng cụ nào dùng để đo chính xác đường kính trong của lỗ với độ chính xác đến 0.01mm?",
        options: [
            "Thước dây.",
            "Thước cặp (Caliper) và Đồng hồ so lỗ (Bore gauge).",
            "Thước pan-me đo ngoài.",
            "Ê-ke vuông."
        ],
        correct: 1
    },
    {
        category: "cokhi",
        question: "[CK-020] Ý nghĩa của ký hiệu 'M10x1.5' trên bản vẽ là gì?",
        options: [
            "Ren hệ mét, đường kính danh nghĩa 10mm, bước ren 1.5mm.",
            "Ren ống, đường kính 10 inch.",
            "Ren vuông, chiều dài 10mm.",
            "Bulong chịu lực 10 tấn."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-021] Ổ lăn có ưu điểm gì lớn nhất so với ổ trượt?",
        options: [
            "Ma sát khởi động nhỏ, hiệu suất cao, ít tốn dầu bôi trơn.",
            "Chịu được tải trọng va đập cực lớn ở tốc độ siêu cao.",
            "Giá thành rất rẻ và dễ chế tạo thủ công.",
            "Không bao giờ bị mòn hay hỏng."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-022] Thông số nào quyết định tốc độ cắt khi gia công tiện CNC?",
        options: [
            "Số vòng quay trục chính (RPM) và đường kính chi tiết.",
            "Màu sắc của phôi.",
            "Độ ẩm không khí trong nhà xưởng.",
            "Trọng lượng của dao tiện."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-023] Phương pháp hàn điện hồ quang (SMAW) sử dụng dòng điện có đặc điểm gì?",
        options: [
            "Dòng điện cường độ cao, hiệu điện thế thấp để tạo hồ quang ổn định.",
            "Hiệu điện thế cực cao, cường độ cực thấp.",
            "Dòng điện xoay chiều cao tần không cần chạm.",
            "Chỉ dùng nguồn điện 1 pha 220V."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-024] Sai số hình học nào dưới đây biểu diễn độ không song song giữa hai bề mặt?",
        options: [
            "Sai số vị trí tương quan.",
            "Sai số kích thước tuyến tính.",
            "Độ nhám cấp 9.",
            "Độ cứng bề mặt."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-025] Đâu là đặc tính cơ bản của vật liệu Đồng thau (hợp kim của Đồng và Kẽm)?",
        options: [
            "Chống ăn mòn tốt, dễ gia công cắt gọt, tính cơ học cao hơn đồng nguyên chất.",
            "Rất giòn và dễ gãy khi uốn.",
            "Có từ tính mạnh như sắt.",
            "Nặng hơn chì rất nhiều."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-026] Trong các loại lò xo, lò xo xoắn ốc trụ chịu lực chủ yếu theo hình thức nào?",
        options: [
            "Chịu xoắn ở các vòng lò xo khi bị nén hoặc kéo dọc trục.",
            "Chịu uốn ngang hoàn toàn.",
            "Chịu kéo đứt trực tiếp.",
            "Chịu nén bẹp khối."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-027] Mục đích chính của việc 'Ủ' thép (Annealing) là gì?",
        options: [
            "Làm mềm thép để dễ gia công cắt gọt hoặc dập nguội, đồng thời khử ứng suất dư.",
            "Làm cứng bề mặt để chống mài mòn.",
            "Làm tăng giòn cấu trúc tinh thể.",
            "Tạo lớp màng bảo vệ chống gỉ."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-028] Khi lắp ổ bi lên trục, nếu lắp sai quy cách (đóng lực trực tiếp vào vòng ngoài thay vì vòng trong khi ép lên trục) sẽ dẫn đến hiện tượng gì?",
        options: [
            "Làm móp méo, rỗ bề mặt đường lăn và hỏng ổ bi.",
            "Giúp ổ bi quay nhanh hơn.",
            "Không ảnh hưởng gì.",
            "Tự động căn chỉnh tâm."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-029] Trong hệ thống khí nén, bộ lọc - điều áp - tra dầu (FRL unit) có vai trò gì?",
        options: [
            "Lọc nước/bụi bẩn, ổn định áp suất làm việc và bôi trơn các thiết bị chấp hành.",
            "Làm lạnh khí nén đến âm độ.",
            "Tăng áp suất khí nén lên gấp 10 lần.",
            "Biến khí nén thành điện năng."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-030] Ký hiệu độ phẳng (Flatness) thuộc nhóm dung sai hình học nào?",
        options: [
            "Dung sai hình dạng.",
            "Dung sai vị trí.",
            "Dung sai hướng.",
            "Dung sai biên dạng."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-031] Hệ thống truyền động bánh răng trụ răng thẳng thích hợp cho điều kiện nào?",
        options: [
            "Truyền chuyển động giữa các trục song song với vận tốc trung bình và thấp.",
            "Truyền động giữa các trục chéo nhau góc bất kỳ ở vận tốc siêu cao.",
            "Chỉ dùng khi cần thay đổi khoảng cách trục lớn.",
            "Dùng khi tỷ số truyền thay đổi liên tục."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-032] Cấp độ nhám bề mặt $Ra$ được đo bằng đơn vị gì?",
        options: [
            "Micromet ($\mu m$).",
            "Milimet ($mm$).",
            "Nanomet ($nm$).",
            "Mét ($m$)."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-033] Khi tiện cắt đứt chi tiết trên máy tiện, dao thường được gá như thế nào so với tâm máy?",
        options: [
            "Mũi dao phải đặt ngang chính xác với tâm của trục chính.",
            "Đặt cao hơn tâm 5mm.",
            "Đặt thấp hơn tâm để tránh gãy dao.",
            "Gá lệch góc 45 độ."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-034] Khái niệm 'Hành trình' (Stroke) trong xi lanh khí nén là gì?",
        options: [
            "Khoảng dịch chuyển tối đa của piston từ điểm chết đầu đến điểm chết cuối.",
            "Đường kính của thân xi lanh.",
            "Áp suất khí nén tối đa cấp vào.",
            "Tốc độ di chuyển của cán piston."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-035] Nhược điểm lớn nhất của mối ghép hàn là gì?",
        options: [
            "Sinh ứng suất nhiệt và biến dạng kết cấu sau khi hàn.",
            "Trọng lượng mối nối quá nặng.",
            "Không thể hàn được thép các-bon thấp.",
            "Chi phí thấp nhưng không chắc chắn."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-036] Thiết bị đo nào cho phép đo kích thước ngoài với độ chính xác đến 0.01mm hoặc 0.001mm?",
        options: [
            "Pan-me (Micrometer).",
            "Thước dây cuộn.",
            "Thước gỗ kỹ thuật.",
            "Thước thủy."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-037] Trong hệ thống truyền động bánh vít - trục vít, đặc điểm nổi bật là gì?",
        options: [
            "Tỷ số truyền lớn, có khả năng tự hãm cao nhưng hiệu suất thấp.",
            "Hiệu suất truyền động luôn đạt trên 95%.",
            "Không sinh nhiệt trong quá trình làm việc.",
            "Chỉ truyền động được khi trục vuông góc chính xác."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-038] Hiện tượng 'Bavia' (Burr) xuất hiện trên chi tiết sau khi gia công cắt gọt do đâu?",
        options: [
            "Do biến dạng dẻo của lớp vật liệu bị dao cắt đẩy ra ở mép thoát phoi mà không bị cắt đứt hoàn toàn.",
            "Do nhiệt độ quá thấp làm đông cứng phoi.",
            "Do sử dụng dầu làm mát quá nhiều.",
            "Do tốc độ trục chính quá cao."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-039] Trong quy trình gia công CNC, mã lệnh G00 có ý nghĩa gì?",
        options: [
            "Chạy dao nhanh không cắt gọt (Rapid positioning).",
            "Nội suy đường thẳng cắt gọt.",
            "Nội suy cung tròn theo chiều kim đồng hồ.",
            "Dừng chương trình tạm thời."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-040] Lực căng ban đầu trong bộ truyền đai có tác dụng gì?",
        options: [
            "Tạo ra lực ma sát giữa đai và puly để truyền mô-men lực.",
            "Làm giãn dây đai để tăng chiều dài.",
            "Giảm tuổi thọ của ổ bi.",
            "Làm puly quay ngược chiều."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-041] Thép các-bon kết cấu chất lượng cao cấp hạng (ví dụ thép C45) có hàm lượng carbon trung bình khoảng bao nhiêu?",
        options: [
            "Khoảng 0.42% - 0.50%.",
            "Khoảng 1.2% - 1.5%.",
            "Dưới 0.05%.",
            "Đúng 5%."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-042] Tiêu chuẩn quốc tế nào được áp dụng phổ biến nhất cho hệ thống quản lý chất lượng trong gia공 cơ khí?",
        options: [
            "ISO 9001",
            "ISO 14001",
            "ISO 45001",
            "RoHS"
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-043] Khi vặn bu-lông, việc sử dụng cờ lê lực (Torque wrench) nhằm mục đích gì?",
        options: [
            "Đảm bảo lực siết (mô-men siết) đạt đúng thông số kỹ thuật quy định, tránh quá lực hoặc lỏng.",
            "Giúp vặn nhanh hơn gấp nhiều lần.",
            "Làm dãn dài bu-lông tối đa.",
            "Chống trờn ren cờ lê."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-044] Trong bản vẽ cơ khí, đường nét liền đậm dùng để vẽ gì?",
        options: [
            "Cạnh thấy, đường bao thấy của vật thể.",
            "Đường kích thước và đường gióng.",
            "Đường tâm và trục đối xứng.",
            "Đường bao khuất."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-045] Ổn định kích thước và khử ứng suất bên trong các chi tiết gang đúc phức tạp trước khi gia công tinh, người ta dùng phương pháp gì?",
        options: [
            "Ủ nhân tạo hoặc già hóa tự nhiên/nhiệt.",
            "Tôi dung nham.",
            "Mạ crôm cứng bề mặt.",
            "Đun sôi trong nước."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-046] Trong cắt gọt kim loại bằng máy phay CNC, hiện tượng 'Gouging' là gì?",
        options: [
            "Lỗi dao cắt ăn sâu quá mức hoặc sai lệch quỹ đạo làm phạm vào bề mặt chi tiết cần bảo vệ.",
            "Tốc độ trục chính vượt ngưỡng tối đa.",
            "Gãy chốt cửa an toàn.",
            "Hết dung dịch làm mát."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-047] Vật liệu hợp kim nhôm thường được ưa chuộng trong ngành cơ khí hàng không và tự động hóa nhờ đặc tính nào?",
        options: [
            "Tỷ lệ độ bền trên trọng lượng cao (nhẹ, bền), chống ăn mòn tốt.",
            "Nặng hơn thép và chịu nhiệt độ lên đến 2000 độ C.",
            "Có khả năng dẫn điện siêu dẫn ở nhiệt độ phòng.",
            "Giá thành rẻ hơn gang xám."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-048] Đâu là chức năng của vòng phớt chắn dầu (Oil seal) lắp ở đầu trục quay?",
        options: [
            "Ngăn rò rỉ dầu bôi trơn ra ngoài và chặn bụi bẩn/hạt lạ lọt vào ổ trục.",
            "Giúp cố định chiều dài trục.",
            "Truyền lực kéo phụ.",
            "Làm mát trục khi quay nhanh."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-049] Khi chọn chế độ cắt, việc tăng tốc độ cắt ($V_c$) quá cao sẽ ảnh hưởng trực tiếp thế nào đến dụng cụ cắt?",
        options: [
            "Làm tăng nhanh nhiệt độ vùng cắt, khiến dao nhanh mòn hoặc mẻ.",
            "Giúp dao sắc bén mãi mãi.",
            "Làm giảm lực cắt xuống bằng 0.",
            "Không có bất kỳ ảnh hưởng nào."
        ],
        correct: 0
    },
    {
        category: "cokhi",
        question: "[CK-050] Trong dung sai lắp ghép, mối ghép có độ hở (clearance fit) đảm bảo điều kiện gì?",
        options: [
            "Kích thước giới hạn của lỗ luôn lớn hơn hoặc bằng kích thước giới hạn của trục.",
            "Kích thước trục luôn lớn hơn lỗ.",
            "Kích thước lỗ và trục bắt buộc phải bằng nhau tuyệt đối.",
            "Không thể dịch chuyển tương đối giữa các chi tiết."
        ],
        correct: 0
    },

    // --- PHẦN 2: HỆ THỐNG GASBOX & THIẾT BỊ BÁN DẪN ---
    {
        category: "gasbox",
        question: "[GB-001] Thiết bị chuyên dụng nào dùng để kiểm tra rò rỉ vi mô (micro-leak) trên mối nối VCR với độ nhạy cực cao?",
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
        question: "[GB-002] Khí nào được sử dụng phổ biến làm khí trơ để xả đuổi an toàn (Purge) khi bảo trì bình chứa khí độc/cháy?",
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
        question: "[GB-003] Chức năng của hệ thống Interlock an toàn trong phòng đựng bình khí (Gas Cabinet) là gì?",
        options: [
            "Tự động đóng ngắt van cấp nguồn khi phát hiện rò rỉ khí độc hoặc mở cửa tủ trái phép.",
            "Điều chỉnh nhiệt độ phòng điều khiển trung tâm.",
            "Cân bằng áp suất giữa hai bình khí độc lập.",
            "Báo cáo số lượng bình khí còn lại cho hệ thống ERP."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-004] Trong hệ thống cung cấp khí độ tinh khiết cao (UHP Gas System), phương pháp gia công bề mặt ống inox nào giúp đạt độ nhám cực thấp ($Ra \\le 0.25\\mu m$)?",
        options: [
            "Đánh bóng điện hóa (Electropolishing - EP).",
            "Sơn chống gỉ thông thường.",
            "Nhúng kẽm nóng.",
            "Mạ crôm dày."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-005] Van điều áp (Regulator) trong hệ thống Gasbox có nhiệm vụ cốt lõi là gì?",
        options: [
            "Giữ cho áp suất đầu ra luôn ổn định ở mức cài đặt, bất kể áp suất đầu vào biến đổi.",
            "Tăng áp suất lên mức tối đa vô hạn.",
            "Ngắt hoàn toàn dòng khí khi mất nguồn điện lưới.",
            "Đo nồng độ khí độc trong đường ống."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-006] Tiêu chuẩn kết nối đường ống nào được sử dụng phổ biến nhất trong hệ thống khí sạch UHP nhờ độ kín khít tuyệt đối bằng gioăng kim loại?",
        options: [
            "Khớp nối VCR (Metal Gasket Face Seal).",
            "Ren ống nước NPT tiêu chuẩn.",
            "Khớp nối nhựa PVC dán keo.",
            "Mặt bích cao su ép."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-007] Khi thao tác thay bình khí độc hại (như SiH4, NH3, Cl2), kỹ thuật viên bắt buộc phải thực hiện quy trình nào trước tháo lắp?",
        options: [
            "Quy trình xả đuổi và hút chân không chéo nhiều chu kỳ (Cycle Purge).",
            "Tháo trực tiếp van tổng bằng tay không.",
            "Xả thẳng khí ra môi trường xung quanh xưởng.",
            "Đun nóng bình khí đến 100 độ C."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-008] Cảm biến phát hiện khí độc (Gas Detector) trong tủ Gas Cabinet thường hoạt động dựa trên công nghệ nào?",
        options: [
            "Điện hóa (Electrochemical), hồng ngoại (IR) hoặc quang bán dẫn.",
            "Cảm biến nhiệt độ thủy ngân.",
            "Cân trọng lượng điện tử.",
            "Đo âm thanh siêu âm."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-009] Ý nghĩa của nhãn dán màu sắc trên vỏ bình khí công nghiệp/bán dẫn theo tiêu chuẩn quốc tế thể hiện điều gì?",
        options: [
            "Loại tính chất nguy hiểm của khí chứa bên trong (ví dụ: dễ cháy, độc hại, ô-xi hóa, trơ).",
            "Nhà sản xuất vỏ bình và năm sinh của bình.",
            "Trọng lượng rỗng của bình khí.",
            "Áp suất thử nghiệm thủy lực tối đa."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-010] Van màng (Diaphragm Valve) được ưu tiên sử dụng trong hệ thống khí UHP thay vì van bi truyền thống vì lý do gì?",
        options: [
            "Không có khoang chết (dead space), giảm thiểu tối đa sự rò rỉ và tích tụ tạp chất/độ ẩm.",
            "Giá thành cực kỳ rẻ.",
            "Lưu lượng khí qua van lớn gấp 100 lần.",
            "Không bao giờ bị mòn màng kim loại."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-011] Trong hệ thống phân phối khí, đường ống dẫn khí phải được hàn bằng phương pháp nào để đảm bảo nội thất đường ống không bị sùi bọt oxit?",
        options: [
            "Hàn TIG tự động có thổi khí trơ bảo vệ bên trong đường ống (Internal Purge Welding).",
            "Hàn điện hồ quang tay thông thường.",
            "Hàn gió đá (Oxy-Acetylen).",
            "Dán keo epoxy chịu nhiệt."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-012] Thiết bị Flashback Arrestor (Bộ chống cháy ngược) được lắp đặt trong hệ thống khí dễ cháy (như H2, Acetylen) nhằm mục đích gì?",
        options: [
            "Ngăn chặn ngọn lửa cháy ngược từ mỏ hàn/đầu ra quay ngược vào bình chứa gây nổ.",
            "Làm tăng áp suất ngọn lửa hàn.",
            "Lọc bụi carbon trong khí cháy.",
            "Tự động nạp khí vào bình."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-013] Khi tiến hành kiểm tra rò rỉ hệ thống ống dẫn khí bằng máy Helium Leak Detector, độ rò rỉ chấp nhận được trong hệ thống UHP thường đạt mức nào?",
        options: [
            "Dưới $1 \\times 10^{-9} \\text{ atm.cc/sec}$ (hoặc thấp hơn).",
            "Khoảng 1 lít mỗi phút.",
            "Sủi bọt xà phòng liên tục.",
            "Không cần kiểm tra khắt khe."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-014] Tại sao các đường ống dẫn khí siêu sạch bán dẫn bắt buộc phải làm bằng thép không gỉ đặc biệt (như chất liệu 316L VIM/VAR)?",
        options: [
            "Để chống ăn mòn hóa học tuyệt đối và ngăn ngừa phát sinh hạt kim loại vi mô gây lỗi chip.",
            "Vì thép này mềm dễ uốn cong bằng tay.",
            "Giúp dẫn điện tốt như dây đồng.",
            "Có giá trị thẩm mỹ cao cho nhà máy."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-015] Khi hệ thống thông gió xả khí thải của tủ Gas Cabinet (Scrubber Exhaust) bị mất áp suất hút âm, hệ thống an toàn sẽ phản ứng thế nào?",
        options: [
            "Khóa chặt toàn bộ van cấp nguồn khí (NC valve đóng lại) và kích hoạt báo động khẩn cấp.",
            "Tự động tăng công suất bình khí lên gấp đôi.",
            "Mở tung cửa tủ để thoát khí.",
            "Không có hiện tượng gì xảy ra."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-016] Khí Silane ($SiH_4$) chứa trong các tủ Gasbox có tính chất hóa lý nguy hiểm đặc trưng nào?",
        options: [
            "Tự bốc cháy ngay lập tức khi tiếp xúc với không khí ở điều kiện thường (Pyrophoric).",
            "Là khí trơ hoàn toàn không màu không mùi.",
            "Chỉ độc hại khi đun sôi ở 500 độ C.",
            "Tan hoàn toàn trong nước tạo dung dịch kiềm."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-017] Chức năng của van một chiều (Check valve) trong hệ thống cấp khí là gì?",
        options: [
            "Chỉ cho phép dòng khí đi qua theo một hướng duy nhất, ngăn dòng chảy ngược.",
            "Điều chỉnh lưu lượng khí theo ý muốn.",
            "Giảm áp suất đột ngột khi quá tải.",
            "Xả nước ngưng tụ trong đường ống."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-018] Hệ thống cấp khí tự động chuyển đổi giữa 2 nguồn bình khí khi bình chính cạn kiệt được gọi là gì?",
        options: [
            "Hệ thống Auto-Changeover Manifold.",
            "Hệ thống bình chứa song song đơn giản.",
            "Hệ thống áp suất biến thiên tự do.",
            "Hệ thống nén khí phụ trợ."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-019] Thiết bị lọc điểm đấu nối cuối (Point-of-Use Gas Filter - POU Filter) lắp trong tủ Gasbox có kích thước lọc hạt bụi tối thiểu thường là bao nhiêu?",
        options: [
            "0.003 micromet ($0.003 \\mu m$) hoặc nhỏ hơn.",
            "50 micromet.",
            "1 milimet.",
            "Không cần lọc hạt."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-020] Khi phát hiện còi báo động rò rỉ khí độc ($H_2S$, $AsH_3$, v.v.) tại trạm Gasbox, hành động đầu tiên của nhân viên vận hành là gì?",
        options: [
            "Tuân thủ quy trình ứng phó khẩn cấp, đeo mặt nạ phòng độc phù hợp, sơ tán khỏi khu vực và kích hoạt nút dừng khẩn cấp (EPO/Gas Cut-off).",
            "Chạy vào trong tủ để tìm vị trí rò rỉ bằng tay.",
            "Mở cửa sổ nhà xưởng và tiếp tục làm việc.",
            "Gọi điện thoại cho bộ phận kế toán."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-021] Ứng dụng của van điện từ điều khiển bằng khí nén (AOV - Air Operated Valve) trong tủ Gasbox là gì?",
        options: [
            "Đóng mở từ xa dòng khí độc/cháy một cách an toàn thông qua tín hiệu khí nén điều khiển.",
            "Chỉnh nhiệt độ khí nén.",
            "Đo mức tiêu thụ điện năng của tủ.",
            "Tự động sạc bình điện dự phòng."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-022] Độ ẩm dư thừa ($H_2O$) bên trong đường ống khí UHP quá cao sẽ gây ra hậu quả tai hại nào?",
        options: [
            "Gây ăn mòn hóa học vách ống, phản ứng với khí tinh khiết tạo tạp chất và ăn mòn thiết bị buồng phản ứng.",
            "Làm cho khí chảy nhanh hơn mức cho phép.",
            "Không gây ảnh hưởng gì đến chất lượng chip.",
            "Làm tăng độ tinh khiết của khí lên cấp độ cao hơn."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-023] Phương pháp xả đuổi 'Pressure Cycle Purge' (PCP) sử dụng chu kỳ kết hợp giữa yếu tố nào?",
        options: [
            "Bơm hút chân không sâu và nạp áp suất khí trơ luân phiên nhiều lần.",
            "Đun nóng ống rồi ngâm nước lạnh.",
            "Thổi gió quạt liên tục vào đường ống.",
            "Xả thẳng liên tục không ngắt quãng trong 1 ngày."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-024] Tại sao các van điều áp trong hệ thống khí độc phải có cổng xả an toàn (Vent port) nối ra đường ống xả chung?",
        options: [
            "Để khi màng van bị rách/thủng, khí độc sẽ thoát an toàn ra hệ thống ống xả thải chung thay vì rò rỉ ra phòng làm việc.",
            "Để thoát nước mưa đọng trong van.",
            "Giúp van hạ nhiệt độ khi hoạt động quá tải.",
            "Tăng áp suất dự trữ cho hệ thống."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-025] Thiết bị đo phân tích nồng độ oxy vết (O2 Analyzer) hoặc ẩm vết (Moisture Analyzer) dùng để làm gì trong hệ thống khí?",
        options: [
            "Kiểm tra chất lượng độ sạch của đường ống sau khi xả đuổi (Purge) trước khi đưa khí Process vào vận hành.",
            "Đo nhiệt độ môi trường ngoài trời.",
            "Đo áp suất tĩnh của bình khí.",
            "Đo lưu lượng dòng khí tổng."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-026] Tiêu chuẩn kết nối mặt bích hoặc khớp nối đặc biệt trên hệ thống ống dẫn khí sạch công nghệ cao đòi hỏi bề mặt kín phải đạt điều kiện gì?",
        options: [
            "Tuyệt đối phẳng, sạch, không có vết xước dọc và sử dụng gioăng kim loại mới hoàn toàn sau mỗi lần tháo.",
            "Có thể bôi mỡ bò để làm kín.",
            "Dùng băng tan cao su quấn ren thoải mái.",
            "Miễn sao vặn chặt bằng cờ lê lực lớn là được."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-027] Hệ thống Scrubber (Tháp xử lý khí thải) đấu nối với tủ Gasbox có nhiệm vụ gì?",
        options: [
            "Xử lý, trung gian hấp thụ hoặc đốt cháy các loại khí thải độc hại, khí cháy trước khi thải ra môi trường ngoài.",
            "Cấp nguồn khí nén cho toàn bộ nhà máy.",
            "Lọc bụi không khí trong phòng sạch.",
            "Làm mát khí trước khi đóng chai."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-028] Trong các đầu nối VCR, linh kiện nào đóng vai trò cốt lõi làm kín khít giữa hai đầu ống kim loại?",
        options: [
            "Gioăng kim loại (Metal Gasket) bằng đồng mạ bạc, nickel hoặc inox mềm.",
            "Gioăng cao su tổng hợp O-ring.",
            "Băng dính chịu nhiệt PTFE.",
            "Keo dánaron đặc biệt."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-029] Khi hàn ống thép không gỉ hệ thống UHP, tại sao thợ hàn phải chờ nhiệt độ mối hàn hạ xuống thấp dưới mức quy định (thường dưới 50 độ C) mới được ngừng cấp khí trơ bảo vệ bên trong?",
        options: [
            "Tránh để bề mặt inox bị oxy hóa, ngả màu vàng/đen làm mất lớp màng thụ động chống gỉ.",
            "Tránh làm bỏng tay thợ hàn.",
            "Để mối hàn co ngót kích thước tối đa.",
            "Tiết kiệm lượng khí trơ xả."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-030] Đâu là quy tắc an toàn quan trọng nhất khi vận chuyển bình chứa khí áp suất cao trong nhà máy?",
        options: [
            "Phải dùng xe đẩy chuyên dụng, luôn đậy nắp chụp van bảo vệ (Valve cap) và cố định chắc chắn bằng xích chống lật.",
            "Lăn bình trên sàn nhà để tiết kiệm sức.",
            "Nằm ngang bình đẩy trượt trên mặt đất.",
            "Không cần nắp chụp van nếu di chuyển quãng đường ngắn."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-031] Van an toàn (Relief Valve / Safety Valve) trên đường ống cấp khí có chức năng gì?",
        options: [
            "Tự động xả bớt áp suất ra ngoài khi áp suất trong hệ thống vượt quá giới hạn thiết kế cho phép để bảo vệ đường ống.",
            "Khóa dòng khí khi nhà máy mất điện hoàn toàn.",
            "Điều chỉnh áp suất tăng giảm liên tục theo thời gian.",
            "Lọc sạch hơi nước thừa."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-032] Trong sơ đồ P&ID của hệ thống Gasbox, ký hiệu 'NC' viết tắt của từ gì và chỉ trạng thái gì của van?",
        options: [
            "Normally Closed (Thường đóng - van sẽ ở trạng thái đóng khi không có tín hiệu điều khiển).",
            "Non-Corrosive (Không ăn mòn).",
            "Nitrogen Control (Điều khiển khí Nitơ).",
            "New Connection (Kết nối mới)."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-033] Trong sơ đồ P&ID của hệ thống Gasbox, ký hiệu 'NO' viết tắt của từ gì?",
        options: [
            "Normally Open (Thường mở - van ở trạng thái mở khi không có tín hiệu tác động).",
            "Nitrogen Only (Chỉ dùng khí Nitơ).",
            "Not Operational (Không hoạt động).",
            "Normal Output (Đầu ra tiêu chuẩn)."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-034] Tại sao các tủ Gas Cabinet chứa khí độc hại luôn được thiết kế dạng áp suất âm (Negative Pressure)?",
        options: [
            "Để khi có sự cố rò rỉ nhỏ bên trong tủ, luồng khí độc không bị tràn ra ngoài phòng làm việc mà bị hút trực tiếp vào đường ống xả thải.",
            "Giúp tiết kiệm điện năng quạt hút.",
            "Giúp bình khí bên trong không bị lạnh.",
            "Tăng tốc độ nạp khí vào máy."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-035] Khi bảo trì thay thế cụm van trong tủ Gasbox, kỹ thuật viên phải đeo thiết bị bảo vệ cá nhân (PPE) đặc thù nào?",
        options: [
            "Mặt nạ phòng độc chuyên dụng/SCBA (nếu cần), găng tay chống hóa chất, kính bảo hộ và đồng phục chống tĩnh điện/cháy.",
            "Chỉ cần áo bảo hộ lao động vải thông thường.",
            "Đi chân đất để tăng khả năng tiếp địa.",
            "Đeo kính râm thời trang."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-036] Công dụng của bộ phận Regulated Venturi hoặc Orifice giới hạn lưu lượng trong đường ống xả khí là gì?",
        options: [
            "Giới hạn tốc độ và lưu lượng dòng khí xả không vượt quá công suất xử lý tối đa của hệ thống Scrubber.",
            "Làm tăng áp lực khí xả lên gấp bội.",
            "Tạo tiếng động cảnh báo khi xả khí.",
            "Lọc sạch dầu bám trong ống xả."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-037] Phương pháp kiểm tra rò rỉ bằng bọt xà phòng (Bubble test) thường chỉ phù hợp với trường hợp nào?",
        options: [
            "Kiểm tra thô sơ các mối nối áp suất thấp hoặc rò rỉ lớn, không dùng cho khí độc hại siêu sạch UHP.",
            "Kiểm tra độ rò rỉ vi mô cấp độ hạt nano.",
            "Kiểm tra đường ống chân không tuyệt đối.",
            "Kiểm tra điện trở cách điện của van."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-038] Hiện tượng 'Particle Generation' (sinh ra hạt bụi vi mô) trong đường ống khí xuất phát từ nguyên nhân nào sau đây?",
        options: [
            "Do thao tác siết khớp nối quá lực làm trầy xước ren/gioăng, hoặc do dòng khí có lẫn độ ẩm gây ăn mòn thành ống.",
            "Do sơn màu bên ngoài ống quá dày.",
            "Do nhiệt độ phòng điều khiển quá lạnh.",
            "Do sử dụng đường ống quá lớn."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-039] Vai trò của bộ điều khiển lập trình (PLC) tích hợp trên tủ Gas Cabinet là gì?",
        options: [
            "Giám sát toàn bộ cảm biến rò rỉ, áp suất, trạng thái van, thực hiện tự động quy trình Purge và ngắt khẩn cấp khi có sự cố.",
            "Chỉ dùng để hiển thị thời gian đồng hồ.",
            "Điều hòa nhiệt độ không khí phòng sạch.",
            "In hóa đơn thanh toán tiền khí hằng tháng."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-040] Khi tiến hành xả đuổi (Purge) một đường ống dẫn khí độc bằng khí N2, kỹ thuật viên cần xả tối thiểu bao nhiêu chu kỳ để đảm bảo nồng độ khí độc còn lại đạt mức an toàn tuyệt đối (ví dụ dưới vài ppm)?",
        options: [
            "Thường từ 10 đến 20 chu kỳ (hoặc theo tài liệu hướng dẫn kỹ thuật vận hành SOP của nhà máy).",
            "Chỉ cần xả 1 lần trong 5 giây.",
            "Không cần chu kỳ nào, chỉ cần xả thoáng qua.",
            "Xả liên tục không cần đếm chu kỳ."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-041] Công dụng của đồng hồ đo áp suất kiểu tiếp điểm điện (Contact Pressure Gauge) trên tủ Gasbox là gì?",
        options: [
            "Vừa hiển thị áp suất thực tế, vừa phát tín hiệu điện cảnh báo (Low/High pressure alarm) khi áp suất vượt ngưỡng cài đặt.",
            "Chỉ dùng để trang trí mặt tủ.",
            "Chuyển hóa áp suất thành dòng điện xoay chiều 220V cấp nguồn cho máy.",
            "Đo độ ẩm tương đối của khí."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-042] Tại sao các mối hàn ống trong hệ thống khí UHP yêu cầu thợ hàn phải có chứng chỉ chuyên nghiệp (Certified Welder)?",
        options: [
            "Vì đòi hỏi kỹ thuật cao tuyệt đối về độ ngấu, không tạo bọt xốp bên trong mối hàn và không được có vảy oxit để tránh rò rỉ vi mô.",
            "Vì chứng chỉ này bắt buộc theo luật giao thông.",
            "Để thợ hàn được nhận lương cao hơn bình thường.",
            "Không yêu cầu chứng chỉ, ai hàn cũng được."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-043] Thiết bị thu hồi hoặc xử lý khí cục bộ đặt ngay sát lối ra của tủ Gasbox đối với các khí quá nguy hiểm gọi là gì?",
        options: [
            "Local Scrubber hoặc Point-of-Use Abatement System.",
            "Bình chứa phụ dự phòng.",
            "Quạt thông gió trần nhà.",
            "Van xả khí tự do."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-044] Trong quy trình vận hành an toàn, khi nào kỹ thuật viên được phép mở cửa chính của tủ Gas Cabinet chứa khí độc?",
        options: [
            "Khi đã hoàn tất hoàn toàn quy trình xả đuổi (Purge), xác nhận đường ống an toàn, không có áp suất và tuân thủ quy chế Permit to Work (PTW).",
            "Bất cứ lúc nào muốn kiểm tra bên trong.",
            "Khi còi báo động đang kêu lớn.",
            "Khi không có ai đứng giám sát xung quanh."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-045] Khi lắp đặt đường ống khí, việc bẻ cong ống inox UHP bắt buộc phải sử dụng dụng cụ gì để không làm móp méo tiết diện lòng ống?",
        options: [
            "Dụng cụ uốn ống chuyên dụng (Tube Bender) có bán kính uốn chuẩn.",
            "Dùng tay bẻ trực tiếp hoặc kìm điện.",
            "Dùng đèn khò nhiệt làm mềm ống rồi bẻ bằng mắt.",
            "Đập búa trực tiếp tại góc cua."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-046] Ý nghĩa của việc thực hiện 'Heal Leak Test' định kỳ cho các hệ thống khí đặc biệt trong nhà máy sản xuất bán dẫn là gì?",
        options: [
            "Phát hiện sớm các vết nứt, lỗ rò rỉ nhỏ do mỏi vật liệu hoặc lão hóa gioăng trước khi xảy ra sự cố xì khí độc hại nguy hiểm.",
            "Kiểm tra xem máy có bị tốn điện không.",
            "Làm sạch bụi bám trong đường ống dẫn.",
            "Hiệu chỉnh lại đồng hồ đo áp suất."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-047] Khi có tín hiệu báo động khẩn cấp 'Gas Leak Detected' từ cảm biến trong tủ Gasbox, hệ thống điều khiển PLC sẽ tự động đóng loại van nào đầu tiên?",
        options: [
            "Van tổng nguồn khí gắn ngay tại cổ bình (Cylinder Valve / ECV - Excess Flow Valve / AOV nguồn).",
            "Van xả nước thải nhà xưởng.",
            "Van điều hòa không khí phòng sạch.",
            "Van cấp nước làm mát."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-048] Đặc điểm kỹ thuật của dòng van điều áp một cấp (Single-stage regulator) so với van điều áp hai cấp (Dual-stage regulator) là gì?",
        options: [
            "Áp suất đầu ra có thể bị thay đổi nhẹ khi áp suất trong bình chứa giảm dần theo thời gian sử dụng, rẻ hơn loại hai cấp.",
            "Luôn giữ áp suất đầu ra tuyệt đối phẳng không đổi từ lúc bình đầy đến khi cạn kiệt.",
            "Chỉ dùng cho khí không cháy.",
            "Không có cổng xả an toàn."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-049] Tiêu chuẩn về độ sạch hạt vi mô trong không khí phòng sạch đặt tủ Gas Cabinet thường áp dụng theo tiêu chuẩn nào?",
        options: [
            "ISO 14644-1 (Phòng sạch cấp độ Class từ ISO Class 1 đến Class 7/8 tùy khu vực).",
            "Tiêu chuẩn xây dựng dân dụng TCVN.",
            "Tiêu chuẩn nhà xưởng thực phẩm HACCP.",
            "Không yêu cầu phòng sạch."
        ],
        correct: 0
    },
    {
        category: "gasbox",
        question: "[GB-050] Tại sao trước khi đưa bình khí mới vào sử dụng, kỹ thuật viên phải thực hiện thao tác 'Cracking' (mở hé mở chớp nhoáng van bình khí trong giây lát rồi đóng lại ngay)?",
        options: [
            "Để thổi bay các hạt bụi bẩn, mạt kim loại hoặc tạp chất bám ở miệng cửa van bình ra ngoài, tránh làm hỏng bộ điều áp phía sau.",
            "Để kiểm tra xem bình có bị nặng cân không.",
            "Làm ấm van bình trước khi vặn.",
            "Xả bớt 50% lượng khí trong bình ra ngoài."
        ],
        correct: 0
    }
];
