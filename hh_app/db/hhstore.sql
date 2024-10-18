-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 11, 2024 lúc 11:19 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `hhstore`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cartproduct`
--

CREATE TABLE `cartproduct` (
  `id` int(225) NOT NULL,
  `name` varchar(225) NOT NULL,
  `images` varchar(225) NOT NULL,
  `price` varchar(225) NOT NULL,
  `ngaymua` varchar(225) NOT NULL,
  `soluong` varchar(225) NOT NULL,
  `diachi` varchar(225) NOT NULL,
  `sodienthoai` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `cartproduct`
--

INSERT INTO `cartproduct` (`id`, `name`, `images`, `price`, `ngaymua`, `soluong`, `diachi`, `sodienthoai`, `email`) VALUES
(2, 'Balo cầu lông Yonex BP103U', 'https://cdn.shopvnb.com/uploads/gallery/Yonex%20BP103U%20-%20Hong_1.png', '350000', '2024-10-03', '1', 'Số nhà 16 ngõ 255 lĩnh nam hoàng mai hà nội', '0969591209', 'Haimoba@gmail.com'),
(3, 'Balo cầu lông Yonex BP103U', 'https://cdn.shopvnb.com/uploads/gallery/Yonex%20BP103U%20-%20Hong_1.png', '350000', '2024-10-03', '1', 'Số nhà 16 ngõ 255 lĩnh nam hoàng mai hà nội', '0969591208', 'Haimoba@gmail.com'),
(4, 'Áo gió Nữ AFDU160-5V', 'https://product.hstatic.net/1000312752/product/afdu160-5v__3__2d7035d96f4b4d3cb3a856c2c05db25c.jpg', '3500000', '2024-10-24', '4', 'Số nhà 16 ngõ 255 lĩnh nam hoàng mai hà nội', '0969591208', 'Haimoba@gmail.com'),
(5, 'vợt cầu lông lining ', 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-carbon-training-150g-5.webp', '2500000', '2024-10-04', '1', 'số nhà 12 ngõ trại cá ', '12873816246', 'abc@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(225) NOT NULL,
  `name` varchar(225) NOT NULL,
  `images` varchar(225) NOT NULL,
  `price` varchar(225) NOT NULL,
  `category` varchar(225) NOT NULL,
  `description` mediumtext NOT NULL,
  `title` mediumtext NOT NULL,
  `status` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `images`, `price`, `category`, `description`, `title`, `status`) VALUES
(1, 'Vợt cầu lông yonex ', 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v88-xanh-chinh-hang-1.webp', '1500000', 'vot', 'Pro V88 Xanh nổi trội là phiên bản mới vừa được ra VNB cho ra mắt vào tháng 7 năm 2022 hướng đến người chơi yêu thích lối đánh tấn công, chuyên dùng những quả đập cầu để ghi điểm, áp đảo đối thủ sân bạn.', 'Vợt cầu lông VNB V88 Xanh có điểm cân bằng nằm ở mức nặng đầu và có đũa cứng 8.5 giúp V88 hỗ trợ đập cầu đi cắm hơn, nhanh và mạnh hơn. Còn đối với người thích đánh thiên công thì vợt càng tăng thêm sức mạnh cho những pha đập', 'còn hàng '),
(2, 'vợt cầu lông lining ', 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-carbon-training-150g-5.webp', '2500000', 'vot', 'Pro V88 Xanh nổi trội là phiên bản mới vừa được ra VNB cho ra mắt vào tháng 7 năm 2022 hướng đến người chơi yêu thích lối đánh tấn công, chuyên dùng những quả đập cầu để ghi điểm, áp đảo đối thủ sân bạn.', 'Một trong những công cụ hỗ trợ tuyệt vời cho việc tập luyện cầu lông nói chung, tập cổ tay nói riêng được các vận động viên, người chơi chuyên nghiệp sử dụng rất nhiều đó là vợt training. Điểm đặt bặc biệt của vợt training là', 'còn hàng '),
(3, 'Vợt cầu lông victor auraspeet ', 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vs-blade-7500-xanh-chinh-hang_1726169562.webp', '2500000', 'vot', 'tuy chỉ là hãng vợt giá rẻ nhưng VS vẫn luôn chú trọng trong thiết kế bên ngoài. Với thiết kế thanh lịch, kết hợp cùng những viền kẻ vàng sang trọng, cây vợt này sẽ khiến bạn nổi bật và thu hút trên mọi sân cầu.', 'VS Blade 7500 là cây vợt cân bằng phù hợp với người chơi ưa thích lối chơi công thủ toàn diện linh hoạt, hơi thiên công. Thân vợt trung bình giúp kiểm soát đường cầu đi chính xác hơn.', 'còn hàng '),
(4, 'Vợt cầu lông lining nanofeey ', 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-astrox-3-dg-hf-blwt-chinh-hang_1704853437.webp', '3000000', 'vot ', 'là mẫu vợt cầu lông thuộc phân khúc trung cấp của Yonex,  hướng đến các đối tượng người chơi trung bình và có lực cổ tay tốt với trọng lượng 4U và đũa vợt cứng trung bình trợ lực.', 'Có 3 phiên bản màu sắc để người chơi lựa chọn theo sở thích. Toàn bộ khung vợt Astrox 3 DG được phủ lớp sơn nhám giúp hạn chế bong tróc khi va quẹt nhỏ, giúp cây vợt được bảo vệ hình dáng bên ngoài tốt hơn.\r\n\r\nMặt vợt được th', 'còn hàng '),
(5, 'Giày cầu lông kumpoo k89', 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-tre-em-kh-j08-xanh-chinh-hang_1712864384.webp', '400000', 'giay', 'Mẫu giày thuộc phân khúc tầm trung nhưng vẫn được hãng Kumpoo trang bị những công nghệ tân tiến giúp giày êm ái, đảm bảo trải nghiệm tốt nhất cho các lông thủ nhí. Form giày cứng cáp và cho khả năng giữ form ổn định, giúp già', 'là mẫu giày mới được ra mắt của nhà Kumpoo dành cho các bạn nhỏ. Cái nhìn đầu tiên khi thấy đôi giày là kiểu dáng đáng yêu, năng động, cá tính với màu sắc tươi mới, thiết kế bắt mắt. Đôi giày được phủ lên lớp màu trắng chủ đạ', 'còn hàng '),
(7, 'vợt cầu lông lining 2', 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-carbon-training-150g-5.webp', '2500000', 'vot', 'những thay đổi mới trên vợt traning của VNB mới có đó là vẻ ngoài vợt không còn đơn thuần chỉ là 1 một màu sơn, không chi tiết, không thông số trên thân. Vẻ ngoài vợt giống với Lining Aeronaut 9000c Xanh Dương Đỏ giúp VNB Car', 'Một trong những công cụ hỗ trợ tuyệt vời cho việc tập luyện cầu lông nói chung, tập cổ tay nói riêng được các vận động viên, người chơi chuyên nghiệp sử dụng rất nhiều đó là vợt training. Điểm đặt bặc biệt của vợt training là', 'còn hàng '),
(8, 'Vợt cầu lông lining nanofeey 4', 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-astrox-3-dg-hf-blwt-chinh-hang_1704853437.webp', '3000000', 'vot ', 'là mẫu vợt cầu lông thuộc phân khúc trung cấp của Yonex,  hướng đến các đối tượng người chơi trung bình và có lực cổ tay tốt với trọng lượng 4U và đũa vợt cứng trung bình trợ lực.', 'Có 3 phiên bản màu sắc để người chơi lựa chọn theo sở thích. Toàn bộ khung vợt Astrox 3 DG được phủ lớp sơn nhám giúp hạn chế bong tróc khi va quẹt nhỏ, giúp cây vợt được bảo vệ hình dáng bên ngoài tốt hơn.\r\n\r\nMặt vợt được th', 'còn hàng '),
(9, 'Vợt cầu lông yonex astrox 01', 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v88-xanh-chinh-hang-1.webp', '1500000', 'vot', 'Pro V88 Xanh nổi trội là phiên bản mới vừa được ra VNB cho ra mắt vào tháng 7 năm 2022 hướng đến người chơi yêu thích lối đánh tấn công, chuyên dùng những quả đập cầu để ghi điểm, áp đảo đối thủ sân bạn.', 'Vợt cầu lông VNB V88 Xanh có điểm cân bằng nằm ở mức nặng đầu và có đũa cứng 8.5 giúp V88 hỗ trợ đập cầu đi cắm hơn, nhanh và mạnh hơn. Còn đối với người thích đánh thiên công thì vợt càng tăng thêm sức mạnh cho những pha đập', 'còn hàng '),
(10, 'Vợt cầu lông yonex astrox 99x', 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v88-xanh-chinh-hang-1.webp', '1500000', 'vot', 'Pro V88 Xanh nổi trội là phiên bản mới vừa được ra VNB cho ra mắt vào tháng 7 năm 2022 hướng đến người chơi yêu thích lối đánh tấn công, chuyên dùng những quả đập cầu để ghi điểm, áp đảo đối thủ sân bạn.', 'Vợt cầu lông VNB V88 Xanh có điểm cân bằng nằm ở mức nặng đầu và có đũa cứng 8.5 giúp V88 hỗ trợ đập cầu đi cắm hơn, nhanh và mạnh hơn. Còn đối với người thích đánh thiên công thì vợt càng tăng thêm sức mạnh cho những pha đập', 'còn hàng '),
(11, 'Giày cầu lông yonex black', 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-yonex-cascade-accel-wide-den-ma-jp_1725311166.webp', '600000', 'giay', 'Giày cầu lông Yonex Cascade Accel Wide là mẫu giày cầu lông cao cấp thuộc dòng mới nhất được Yonex tung ra cuối năm 2023 mang lại sự toàn diện cho người chơi từ phong trào lẫn chuyên nghiệp. Đặc biệt, phiên bản màu đen này dà', 'Phần trên thân giày được thiết kế đẹp mắt với các họa tiết đẹp mắt và nổi bật. Lớp da tổng hợp mang đến sự mềm mại đan xen với các lỗ thoáng khí thông qua lớp vải mesh để giúp đôi chân bạn luôn được thông thoáng trong điều ki', 'còn hàng'),
(12, 'Vợt cầu lông yonex astrox 89x', 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v88-xanh-chinh-hang-1.webp', '1500000', 'vot', 'Pro V88 Xanh nổi trội là phiên bản mới vừa được ra VNB cho ra mắt vào tháng 7 năm 2022 hướng đến người chơi yêu thích lối đánh tấn công, chuyên dùng những quả đập cầu để ghi điểm, áp đảo đối thủ sân bạn.', 'Vợt cầu lông VNB V88 Xanh có điểm cân bằng nằm ở mức nặng đầu và có đũa cứng 8.5 giúp V88 hỗ trợ đập cầu đi cắm hơn, nhanh và mạnh hơn. Còn đối với người thích đánh thiên công thì vợt càng tăng thêm sức mạnh cho những pha đập', 'còn hàng '),
(13, 'vợt cầu lông lining hightbetech', 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-carbon-training-150g-5.webp', '2500000', 'vot', 'những thay đổi mới trên vợt traning của VNB mới có đó là vẻ ngoài vợt không còn đơn thuần chỉ là 1 một màu sơn, không chi tiết, không thông số trên thân. Vẻ ngoài vợt giống với Lining Aeronaut 9000c Xanh Dương Đỏ giúp VNB Car', 'Một trong những công cụ hỗ trợ tuyệt vời cho việc tập luyện cầu lông nói chung, tập cổ tay nói riêng được các vận động viên, người chơi chuyên nghiệp sử dụng rất nhiều đó là vợt training. Điểm đặt bặc biệt của vợt training là', 'còn hàng '),
(14, 'Vợt VS titan 7', 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v200-do-2.webp', '500000', 'vot', 'Đối với bất kì ai khi mới bắt đầu tham gia chơi cầu lông dù là nâng cao sức khỏe, chơi vì đam mê hay mong muốn theo đuổi con đường thi đấu cầu lông chuyên nghiệp đều cần cho mình một cây vợt phù hợp. Nhưng không phải ai ngay ', 'Đặc biệt, trong thể thao sẽ không có chỗ cho từ \"bỏ cuộc\". Khi đã có được kinh nghiệm và kĩ năng, trình độ riêng cho mình, người chơi còn thể tham gia các giải đấu phong traò, giao lưu giữa các câu lạc bộ, vừa giúp gắn kết mọ', 'còn hàng '),
(15, 'Giày cầu lông Yonex Power Cushion', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-yonex-power-cushion-comfort-3-women-noi-dia-nhat_1725311477.webp', '7800000', 'giay', 'Giày cầu lông Yonex Power Cushion Comfort 3 Women thuộc dòng Comfort đem lại thiết kế tập trung vào sự thoải mái cho người chơi khi di chuyển trên sân.', 'Được trang bị công nghệ “Power Cushion” độc quyền của Yonex với màu sắc trang nhã và tinh tế dành riêng cho phái nữ. Tuy là dòng sản phẩm trung cấp với mức giá dễ chịu hơn nhưng không kém phần xịn sò về mặt thiết kế cũng như ', 'còn hàng'),
(16, 'Giày cầu lông Kawasaki K3329', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-kawasaki-k3329-trang-do-chinh-hang_1720038983.webp', '900000', 'giay', 'Giày cầu lông Kawasaki K3329 - Trắng đỏ chính hãng là một trong những sản phẩm chất lượng với mức giá rẻ mà thương hiệu Kawasaki thiết kế hướng đến những bạn chơi cầu lông phong trào hoặc các bạn học sinh, sinh viên', 'Phần đế giày được sản xuất bởi những nguyên liệu chất lượng cao, chống trơn trượt, tạo đồ đàn hồi cao, thoát khí giảm chấn, công nghệ Non-Marking cũng giúp hạn chế chống lật cổ chân.', 'còn hàng '),
(17, 'Giày Cầu Lông Kawasaki K3326', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-kawasaki-k3326-trang-xanh-chinh-hang_1713921823.webp', '350000', 'giay', 'Giày Cầu Lông Kawasaki K3326 Trắng Xanh Chính Hãng là mẫu giày tầm trung của thương hiệu Kawasaki nổi tiếng Nhật Bản về nền công nghệ sản xuất giày thể thao', 'Thiết kế mang màu trắng phối với xanh toát lên vẻ hiện đại, sang trọng không kém phần quyến rũ nên có thể sử dụng cho mọi độ tuổi và giới tính.', 'còn hàng'),
(19, 'Giày cầu lông Lining AYZS018-3', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-lining-ayzs018-3-noi-dia-trung-3.webp', '2300000', 'giay', 'Giày cầu lông Lining AYZS018-3 là một đôi giày cầu lông được ra mắt gần đây với thiết kế đơn giản nhưng không kém phần sang trọng. Điểm nhấn của sản phẩm là phần sau gót giày được thiết kế màu đỏ tạo điểm nhấn và làm tôn lên sự nổi bật cho đôi giày. Phần còn lại của giày được phủ màu trắng chủ đạo, mang lại sự tinh tế và thanh lịch cho người dùng.', 'Đặc biệt, giày cầu lông Lining AYZS018-3 tích hợp các công nghệ tân tiến nhất: PROBAR LOC, LI-NING BOUNSE +, TUFF TIP, LIGHT FOAM, CARBON-FIBER PLATE. Lần đầu tiên nhà Lining cho tích hợp thêm một tấm mút đệm cao cấp ở gót đế giày tăng cường sự êm ái tối đa giúp người chơi có những bước di chuyển hoàn hảo nhất trên sân đấu.', 'còn hàng '),
(20, 'Giày cầu lông Yonex Power Cushion II', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-yonex-power-cushion-comfort-3-women-noi-dia-nhat_1725311477.webp', '7800000', 'giay', 'Giày cầu lông Yonex Power Cushion Comfort 3 Women thuộc dòng Comfort đem lại thiết kế tập trung vào sự thoải mái cho người chơi khi di chuyển trên sân.', 'Được trang bị công nghệ “Power Cushion” độc quyền của Yonex với màu sắc trang nhã và tinh tế dành riêng cho phái nữ. Tuy là dòng sản phẩm trung cấp với mức giá dễ chịu hơn nhưng không kém phần xịn sò về mặt thiết kế cũng như ', 'còn hàng'),
(21, 'Giày Cầu Lông Kawasaki K3326 plus', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-kawasaki-k3326-trang-xanh-chinh-hang_1713921823.webp', '350000', 'giay', 'Giày Cầu Lông Kawasaki K3326 Trắng Xanh Chính Hãng là mẫu giày tầm trung của thương hiệu Kawasaki nổi tiếng Nhật Bản về nền công nghệ sản xuất giày thể thao', 'Thiết kế mang màu trắng phối với xanh toát lên vẻ hiện đại, sang trọng không kém phần quyến rũ nên có thể sử dụng cho mọi độ tuổi và giới tính.', 'còn hàng'),
(22, 'Giày cầu lông Lining AYZS018-5', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-lining-ayzs018-3-noi-dia-trung-3.webp', '2300000', 'giay', 'Giày cầu lông Lining AYZS018-3 là một đôi giày cầu lông được ra mắt gần đây với thiết kế đơn giản nhưng không kém phần sang trọng. Điểm nhấn của sản phẩm là phần sau gót giày được thiết kế màu đỏ tạo điểm nhấn và làm tôn lên sự nổi bật cho đôi giày. Phần còn lại của giày được phủ màu trắng chủ đạo, mang lại sự tinh tế và thanh lịch cho người dùng.', 'Đặc biệt, giày cầu lông Lining AYZS018-3 tích hợp các công nghệ tân tiến nhất: PROBAR LOC, LI-NING BOUNSE +, TUFF TIP, LIGHT FOAM, CARBON-FIBER PLATE. Lần đầu tiên nhà Lining cho tích hợp thêm một tấm mút đệm cao cấp ở gót đế giày tăng cường sự êm ái tối đa giúp người chơi có những bước di chuyển hoàn hảo nhất trên sân đấu.', 'còn hàng '),
(23, 'Giày cầu lông yonex black plus', 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-yonex-cascade-accel-wide-den-ma-jp_1725311166.webp', '600000', 'giay', 'Giày cầu lông Yonex Cascade Accel Wide là mẫu giày cầu lông cao cấp thuộc dòng mới nhất được Yonex tung ra cuối năm 2023 mang lại sự toàn diện cho người chơi từ phong trào lẫn chuyên nghiệp. Đặc biệt, phiên bản màu đen này dà', 'Phần trên thân giày được thiết kế đẹp mắt với các họa tiết đẹp mắt và nổi bật. Lớp da tổng hợp mang đến sự mềm mại đan xen với các lỗ thoáng khí thông qua lớp vải mesh để giúp đôi chân bạn luôn được thông thoáng trong điều ki', 'còn hàng'),
(24, 'vợt cầu lông lining highttech', 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-carbon-training-150g-5.webp', '2500000', 'vot', 'những thay đổi mới trên vợt traning của VNB mới có đó là vẻ ngoài vợt không còn đơn thuần chỉ là 1 một màu sơn, không chi tiết, không thông số trên thân. Vẻ ngoài vợt giống với Lining Aeronaut 9000c Xanh Dương Đỏ giúp VNB Car', 'Một trong những công cụ hỗ trợ tuyệt vời cho việc tập luyện cầu lông nói chung, tập cổ tay nói riêng được các vận động viên, người chơi chuyên nghiệp sử dụng rất nhiều đó là vợt training. Điểm đặt bặc biệt của vợt training là', 'còn hàng '),
(25, 'Giày cầu lông Victor Crayon Shinchan', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-victor-crayon-shinchan-a39cs-a-noi-dia-trung_1719453942.webp', '350000', 'giay', 'Giày cầu lông Victor Crayon Shinchan A39CS - A là mẫu giày thuộc phân khúc cao cấp phục vụ cho người chơi cầu lông trong sân. Victor đã lần đầu tiên bắt tay với bộ phim hoạt hình nổi tiếng của Nhật Bản “Crayon Shin-chan” để cho ra mắt loạt sản phẩm cầu lông được thiết kế lấy hình ảnh nhân vật hoạt hình Crayon Shin-chan và những người bạn mẫu giáo của cậu bé. Giày Victor Crayon Shinchan A39CS - A với thiết kế màu trắng kết hợp với các họa tiết của Shin và bạn bè tạo nên vẻ trẻ trung và độc đáo', 'Bề mặt bên trong của mũi giày cầu lông Victor Crayon Shinchan A39CS - A được xử lý bằng phương pháp hiện đại để chống mài mòn khi cọ xát nhiều với bàn chân khi di chuyển liên tục trong sân. Trong khi đó, bề mặt bên ngoài của đôi giày được làm từ chất liệu TPU chống thấm nước hiệu quả, giúp người chơi dễ dàng vệ sinh bên ngoài. Hệ thống các lỗ thoáng khí nhỏ li ti được bố trí lên các vị trí trên bề mặt giày, tạo độ thông thoáng cho đôi bàn chân khi phải hoạt động liên tục trong khoảng thời gian dài trên sân.', 'còn hàng '),
(26, 'Giày cầu lông Victor Crayon Shinchan', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-victor-crayon-shinchan-a39cs-a-noi-dia-trung_1719453942.webp', '350000', 'giay', 'Giày cầu lông Victor Crayon Shinchan A39CS - A là mẫu giày thuộc phân khúc cao cấp phục vụ cho người chơi cầu lông trong sân. Victor đã lần đầu tiên bắt tay với bộ phim hoạt hình nổi tiếng của Nhật Bản “Crayon Shin-chan” để cho ra mắt loạt sản phẩm cầu lông được thiết kế lấy hình ảnh nhân vật hoạt hình Crayon Shin-chan và những người bạn mẫu giáo của cậu bé. Giày Victor Crayon Shinchan A39CS - A với thiết kế màu trắng kết hợp với các họa tiết của Shin và bạn bè tạo nên vẻ trẻ trung và độc đáo', 'Bề mặt bên trong của mũi giày cầu lông Victor Crayon Shinchan A39CS - A được xử lý bằng phương pháp hiện đại để chống mài mòn khi cọ xát nhiều với bàn chân khi di chuyển liên tục trong sân. Trong khi đó, bề mặt bên ngoài của đôi giày được làm từ chất liệu TPU chống thấm nước hiệu quả, giúp người chơi dễ dàng vệ sinh bên ngoài. Hệ thống các lỗ thoáng khí nhỏ li ti được bố trí lên các vị trí trên bề mặt giày, tạo độ thông thoáng cho đôi bàn chân khi phải hoạt động liên tục trong khoảng thời gian dài trên sân.', 'còn hàng '),
(27, 'Giày cầu lông Victor A362II Plus AD ', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-victor-a362ii-plus-ad-do-chinh-hang_1699838143.webp', '350000', 'giay', 'Giày cầu lông Victor Crayon Shinchan A39CS - A là mẫu giày thuộc phân khúc cao cấp phục vụ cho người chơi cầu lông trong sân. Victor đã lần đầu tiên bắt tay với bộ phim hoạt hình nổi tiếng của Nhật Bản “Crayon Shin-chan” để cho ra mắt loạt sản phẩm cầu lông được thiết kế lấy hình ảnh nhân vật hoạt hình Crayon Shin-chan và những người bạn mẫu giáo của cậu bé. Giày Victor Crayon Shinchan A39CS - A với thiết kế màu trắng kết hợp với các họa tiết của Shin và bạn bè tạo nên vẻ trẻ trung và độc đáo', 'Form giày cầu lông Victor A362II Plus AD - Đỏ chính hãng cứng cáp với nhiều lựa chọn size phù hợp với mọi loại bàn chân. Ngoài ra thì hệ thống dây buộc cùng phần lưỡi gà giúp đôi chân được ôm sát, đem lại cảm giác nhẹ nhàng và thoải mái như đi chân không để người chơi có thể di chuyển nhanh hơn.', 'còn hàng '),
(28, 'Giày cầu lông Victor A362II Plus AD ', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-victor-a362ii-plus-ad-do-chinh-hang_1699838143.webp', '350000', 'giay', 'Giày cầu lông Victor Crayon Shinchan A39CS - A là mẫu giày thuộc phân khúc cao cấp phục vụ cho người chơi cầu lông trong sân. Victor đã lần đầu tiên bắt tay với bộ phim hoạt hình nổi tiếng của Nhật Bản “Crayon Shin-chan” để cho ra mắt loạt sản phẩm cầu lông được thiết kế lấy hình ảnh nhân vật hoạt hình Crayon Shin-chan và những người bạn mẫu giáo của cậu bé. Giày Victor Crayon Shinchan A39CS - A với thiết kế màu trắng kết hợp với các họa tiết của Shin và bạn bè tạo nên vẻ trẻ trung và độc đáo', 'Form giày cầu lông Victor A362II Plus AD - Đỏ chính hãng cứng cáp với nhiều lựa chọn size phù hợp với mọi loại bàn chân. Ngoài ra thì hệ thống dây buộc cùng phần lưỡi gà giúp đôi chân được ôm sát, đem lại cảm giác nhẹ nhàng và thoải mái như đi chân không để người chơi có thể di chuyển nhanh hơn.', 'còn hàng '),
(29, 'Giày Cầu Lông Victor P9200 TD-AJ', 'https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-victor-p9200-td-aj-trang-chinh-hang_1714330033.webp', '3500000', 'giay', 'là mẫu giày thuộc phân khúc cao cấp phục vụ cho người chơi cầu lông trong sân. Victor đã lần đầu tiên bắt tay với bộ phim hoạt hình nổi tiếng của Nhật Bản “Crayon Shin-chan” để cho ra mắt loạt sản phẩm cầu lông được thiết kế lấy hình ảnh nhân vật hoạt hình Crayon Shin-chan và những người bạn mẫu giáo của cậu bé. Giày Victor Crayon Shinchan A39CS - A với thiết kế màu trắng kết hợp với các họa tiết của Shin và bạn bè tạo nên vẻ trẻ trung và độc đáo. ', 'Bề mặt bên trong của mũi giày cầu lông Victor P9200 TD-AJ Trắng chính hãng được xử lý bằng phương pháp hiện đại để chống mài mòn khi cọ xát nhiều với bàn chân khi di chuyển liên tục trong sân. Trong khi đó, bề mặt bên ngoài của đôi giày được làm từ chất liệu PU chống thấm nước hiệu quả, giúp người chơi dễ dàng vệ sinh bên ngoài.', 'còn hàng '),
(30, 'Balo Cầu Lông Yonex Bag12MLTDEX', 'https://cdn.shopvnb.com/uploads/san_pham/balo-cau-long-yonex-bag12mltdex-trang-1.webp', '350000', 'balo', 'Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuố', 'Balo cầu lông Yonex Bag12MLTDEX được sản xuất dựa trên quy trình sản xuất hiện đại cùng với nguyên vật liệu chất lượng gồm 70% Polyester + 30% da PU mang lại độ bền bỉ cao, chống nắng chống mưa tốt, chắc chắn và vô cùng đẹp mắt có thể sử dụng lên đến 3 năm.', 'còn hàng '),
(32, 'Balo Cầu Lông Yonex Bag12MLTDEX', 'https://cdn.shopvnb.com/uploads/san_pham/balo-cau-long-yonex-bag12mltdex-trang-1.webp', '350000', 'balo', ' Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuối.', 'Một chiếc balo thời thượng, đẳng cấp không chỉ dành riêng cho cầu lông mà ngay cả đi du lịch cũng rất tiện lợi với những chuyến du lịch ngắn ngày chắc chắn mẫu Balo cầu lông Yonex Bag12MLTDEX sẽ đảm nhận cực tốt vai trò này đấy nhé !', 'còn hàng  '),
(33, 'Balo cầu lông Yonex BP1608', 'https://cdn.shopvnb.com/uploads/gallery/Yonex%20BP1608%20-%20Hong_1.png', '350000', 'balo', 'Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuố', 'Yonex là một thương hiệu cầu lông hàng đầu về độ uy tín trên thị trường cung cấp các sản phẩm về cầu lông. Từ quần áo trang phục thể thao, tới phụ kiện đi kèm như giày dép, ba lô… Đều được đón nhận một cách nồng nhiệt, đặc biệt là các mẫu balo Yonex nổi bật về sự đa dạng trong thiết kế với nhiều mẫu mã sản phẩm xuất hiện hàng năm, nhất là siêu phẩm balo cầu lông Yonex BP1608 - Thiết kế đơn giản bật lên gam màu đầy cá tính.', 'còn hàng '),
(34, 'Balo Cầu Lông Yonex Bag12MLTDEX', 'https://cdn.shopvnb.com/uploads/gallery/Yonex%20BP1608%20-%20Hong_1.png', '350000', 'balo', 'Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuố', 'Yonex là một thương hiệu cầu lông hàng đầu về độ uy tín trên thị trường cung cấp các sản phẩm về cầu lông. Từ quần áo trang phục thể thao, tới phụ kiện đi kèm như giày dép, ba lô… Đều được đón nhận một cách nồng nhiệt, đặc biệt là các mẫu balo Yonex nổi bật về sự đa dạng trong thiết kế với nhiều mẫu mã sản phẩm xuất hiện hàng năm, nhất là siêu phẩm balo cầu lông Yonex BP1608 - Thiết kế đơn giản bật lên gam màu đầy cá tính.', 'còn hàng '),
(35, 'Balo Cầu Lông Yonex Bag12MLTDEX', 'https://cdn.shopvnb.com/uploads/san_pham/balo-cau-long-yonex-bag12mltdex-trang-1.webp', '350000', 'balo', 'Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuố', 'Yonex là một thương hiệu cầu lông hàng đầu về độ uy tín trên thị trường cung cấp các sản phẩm về cầu lông. Từ quần áo trang phục thể thao, tới phụ kiện đi kèm như giày dép, ba lô… Đều được đón nhận một cách nồng nhiệt, đặc biệt là các mẫu balo Yonex nổi bật về sự đa dạng trong thiết kế với nhiều mẫu mã sản phẩm xuất hiện hàng năm, nhất là siêu phẩm balo cầu lông Yonex BP1608 - Thiết kế đơn giản bật lên gam màu đầy cá tính.', 'còn hàng '),
(36, 'Balo cầu lông Yonex BP103U', 'https://cdn.shopvnb.com/uploads/gallery/Yonex%20BP103U%20-%20Hong_1.png', '350000', 'balo', 'Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuố', 'Được nhà sản xuất của Yonex hết sức đầu tư không những có thiết kế khá thời thượng mà tông màu trên mẫu Balo vợt cầu lông Yonex BP103U cũng rất bắt mắt với 3 phiên bản màu sắc nổi bật: hồng, đen cam và đen xanh ngọc.', 'còn hàng '),
(37, 'Balo Cầu Lông Yonex Bag12MLTDEX', 'https://cdn.shopvnb.com/uploads/san_pham/balo-cau-long-yonex-bp103u-den-cam-1.webp', '350000', 'balo', 'Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuố', 'Balo cầu lông Yonex BP103U được sản xuất dựa trên quy trình sản xuất hiện đại cùng với nguyên vật liệu chất lượng gồm 70% Polyester + 30% da PU mang lại độ bền bỉ cao, chống nắng chống mưa tốt, chắc chắn và vô cùng đẹp mắt có thể sử dụng lên đến 3 năm.', 'còn hàng '),
(38, 'Balo Cầu Lông Yonex Bag12MLTDEX', 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-donexpro-bb-1601-den-phoi-xanh-copan-chinh-hang_1726597824.webp', '350000', 'balo', 'Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuố', 'Được sản xuất với công nghệ hiện đại, bảo đảm cho các vật dụng trong túi luôn ở trạng thái tốt nhất. Balo cầu lông Yonex BP103U là sự bổ sung hoàn hảo cho bộ dụng cụ thi đấu cầu lông của bạn.', 'còn hàng '),
(39, 'Balo Cầu Lông Yonex Bag12MLTDEX', 'https://cdn.shopvnb.com/uploads/san_pham/balo-cau-long-yonex-bag12mltdex-trang-1.webp', '350000', 'balo', 'Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuố', 'Được sản xuất với công nghệ hiện đại, bảo đảm cho các vật dụng trong túi luôn ở trạng thái tốt nhất. Balo cầu lông Yonex BP103U là sự bổ sung hoàn hảo cho bộ dụng cụ thi đấu cầu lông của bạn.', 'còn hàng '),
(41, 'Balo Cầu Lông Yonex Bag12MLTDEX', 'https://cdn.shopvnb.com/uploads/san_pham/balo-cau-long-yonex-bag12mltdex-trang-1.webp', '350000', 'balo', 'Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuố', 'Balo cầu lông Yonex BP103U được sản xuất dựa trên quy trình sản xuất hiện đại cùng với nguyên vật liệu chất lượng gồm 70% Polyester + 30% da PU mang lại độ bền bỉ cao, chống nắng chống mưa tốt, chắc chắn và vô cùng đẹp mắt có thể sử dụng lên đến 3 năm', 'còn hàng '),
(43, 'Balo Cầu Lông Yonex Bag12MLTDEX', 'https://cdn.shopvnb.com/uploads/san_pham/balo-cau-long-yonex-bag12mltdex-trang-1.webp', '350000', 'balo', 'Balo cầu lông Yonex Bag12MLTDEX là phiên bản Limited Editon với 3 màu sắc nổi bật để các bạn lựa chọn: đen, trắng và xanh chuố', 'blabla', 'còn hàng '),
(44, 'Áo cầu lông Yonex Việt Nam Open TRM2920VNO24', 'https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-yonex-viet-nam-open-trm2920vno24-white-chinh-hang_1727314517.webp', '99000', 'quanao', 'Áo nỉ Li-Ning là một loại áo thể thao được làm từ vải nỉ,chất liệu có khả năng thấm hút mồ hôi, co giãn và giữ nhiệt tốt. Áo nỉ Li-Ning có nhiều mẫu mã và màu sắc khác nhau, phù hợp cho cả nam và nữ. Sản phẩmđược sử dụng trong các hoạt động thể thao như chạy bộ, đạp xe, cầu lông, bóng rổ, bóng đá, v.v. Áo nỉ Li-Ning cũng có thể được kết hợp với các loại quần áo khác để tạo ra phong cách thời trang năng động và trẻ trung.', 'Chất liệu vải nỉ cao cấp, mềm mại, thoáng khí và bền bỉ.\r\nThiết kế đơn giản nhưng tinh tế, có logo Li-Ning in trên ngực hoặc tay áo.\r\nCổ áo tròn, có khóa kéo , có mũ hoặc không khóa kéo.\r\nCó túi ở hai bên hoặc không có túi.', 'còn hàng '),
(45, 'Áo gió Nữ AFDU160-5V', 'https://product.hstatic.net/1000312752/product/afdu160-5v__3__2d7035d96f4b4d3cb3a856c2c05db25c.jpg', '3500000', 'quanao', 'AT PROOF SMART Vải được dệt bằng sợi chống thấm nước hoặc được hoàn thiện bằng chất phụ gia chống thấm nước có thể tránh bị ướt do mưa và vải có hiệu ứng giống như lá sen.Công nghệ AT PROOF SMART có thể ngăn chặn hiệu quả sự cản trở của mưa nhẹ đối với chuyển động của con người, giúp người mặc luôn khô ráo và thoải mái khi vận động Thiết kế thời trang: Áo gió Li-Ning thường có thiết kế hiện đại, trẻ trung và năng động, phù hợp với nhiều đối tượng người dùng, từ thanh niên đến người trung niên. Chất liệu cao cấp: Li-Ning sử dụng các chất liệu như polyester, nylon, và các loại vải kỹ thuật cao cấp giúp áo gió nhẹ, bền, thoáng khí, và chống nước tốt, bảo vệ người mặc khỏi thời tiết xấu.', 'Công nghệ tiên tiến: Nhiều mẫu áo gió của Li-Ning được trang bị công nghệ thoáng khí và chống thấm nước, giúp duy trì sự thoải mái trong suốt quá trình vận động. Độ bền cao: Sản phẩm của Li-Ning được đánh giá cao về độ bền, có thể sử dụng lâu dài mà không bị hỏng hóc hay phai màu. Đa dạng mẫu mã: Li-Ning cung cấp nhiều mẫu mã, màu sắc và kiểu dáng, từ áo gió thể thao đến các dòng áo gió phong cách đời thường, đáp ứng nhu cầu và sở thích khác nhau của người tiêu dùng. Thương hiệu uy tín: Li-Ning là một thương hiệu thể thao nổi tiếng của Trung Quốc, được biết đến với chất lượng và độ tin cậy, đặc biệt trong lĩnh vực sản xuất quần áo và phụ kiện thể thao.', 'còn hàng '),
(46, 'Dây cước căng vợt Yonex Nanogy BG 98', 'https://cdn.shopvnb.com/uploads/san_pham/day-cuoc-cang-vot-yonex-nanogy-98-jp-1.webp', '120000', 'cuoc', '- Dây cước căng vợt Yonex Nanogy BG 98 là một sợi dây cao cấp đến từ Yonex thuộc dòng Medium với độ mềm, thiên về độ nẩy, thích hợp với người chơi thích đánh cầu cao sâu và phòng thủ.', 'Yonex Nanogy 98 được cấu tạo từ lõi đa sợi tơ Polymer Nylon độ bền cao,kết hợp cùng phần vỏ làm từ sợi bện đặc biệt Polymer Nylon thô độ bền cao, cho cảm giác sắc bén khi chơi trên sân làm cú đánh thêm mạnh mẽ, nó được những người chơi có lối đánh thiên về phòng thủ ưa chuộng.', 'còn hàng'),
(47, 'Dây cước căng vợt Yonex BG 65 TITANIUM', 'https://cdn.shopvnb.com/uploads/san_pham/day-cuoc-cang-vot-yonex-bg65-titanium-jp-1.webp', '123000', 'cuoc', ' Dây cước căng vợt Yonex BG 65 TITANIUM là loại cước căng vợt quá quen thuộc trong giới cầu lông Việt Nam hiện nay. Sau sự thành công của BG 65, Yonex đã có một nâng cấp nhỏ phù hợp với mong muốn của người chơi cầu lông phong trào chính là phủ thêm một lớp Titan làm tăng độ nảy, cho âm thanh nổ cầu lớn hơn nhưng vẫn được xếp vào loại cước đan vợt bền của Yonex.', 'Do phủ lớp Titan nên cước căng vợt cầu lông Yonex BG 65 TITANIUM cho cảm giác cứng và ít bền hơn cước cầu lông BG65 nhưng điều này là không đáng kể, giá thành sẽ cao hơn BG65 1 chút, 120k/1 sợi, bù lại bạn sẽ có thể tạo độ nảy tốt hơn, và âm thanh đã tai hơn, ít bị chạy dây cũng như độ bền đảm bảo.', 'còn hàng ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `level` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `level`) VALUES
(1, 'admin@gmail.com', '1234', '1');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cartproduct`
--
ALTER TABLE `cartproduct`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cartproduct`
--
ALTER TABLE `cartproduct`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
