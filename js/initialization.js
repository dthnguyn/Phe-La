//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Ô LONG SỮA PHÊ LA',
            img: './assets/img/products/sp-olongsua-phe.jpg',
            category: 'SYPHONE',
            price: 55000,
            desc: 'Ô Long Sữa Phê La - Mang đến trải nghiệm vị giác tuyệt vời với hương trà Ô Long đặc sản đậm đà quyện cùng vị sữa thơm ngậy.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Ô LONG SỮA PHÊ LA - Size La',
            img: './assets/img/products/sp-olongsua-la.jpg',
            category: 'SYPHONE',
            price: 64000,
            desc: 'Ô Long Sữa Phê La - Mang đến trải nghiệm vị giác tuyệt vời với hương trà Ô Long đặc sản đậm đà quyện cùng vị sữa thơm ngậy.'
        },
        {
            id: 3,
            status: 1, 
            title: 'PHONG LAN (Ô LONG VANI SỮA)',
            img: './assets/img/products/sp-phonglan-phe.jpg',
            category: 'SYPHONE',
            price: 55000,
            desc: 'Phong Lan được kết hợp từ Trà Ô Long Đặc Sản hòa quyện nhẹ nhàng cùng Vani tự nhiên, hương vị ngọt ngào chuẩn gu tinh tế.'
        },
        {
            id: 4,
            status: 1, 
            title: 'PHONG LAN (Ô LONG VANI SỮA) -  Size La',
            img: './assets/img/products/sp-phonglan-la.jpg',
            category: 'SYPHONE',
            price: 64000,
            desc: 'Phong Lan được kết hợp từ Trà Ô Long Đặc Sản hòa quyện nhẹ nhàng cùng Vani tự nhiên, hương vị ngọt ngào chuẩn gu tinh tế.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Ô LONG NHÀI SỮA PHÊ LA',
            img: './assets/img/products/sp-nhaisua-phe.jpg',
            category: 'SYPHONE',
            price: 55000,
            desc: 'Ô Long Nhài sữa - Mang đến trải nghiệm vị giác độc đáo với trà Ô Long Đặc Sản đậm đà quyện cùng hương nhài thơm tinh tế, thêm chút thơm ngậy từ sữa.'
        },
        {
            id: 6,
            status: 1, 
            title: 'Ô LONG NHÀI SỮA PHÊ LA - Size La',
            img: './assets/img/products/sp-nhaisua-la.jpg',
            category: 'SYPHONE',
            price: 64000,
            desc: 'Ô Long Nhài sữa - Mang đến trải nghiệm vị giác độc đáo với trà Ô Long Đặc Sản đậm đà quyện cùng hương nhài thơm tinh tế, thêm chút thơm ngậy từ sữa.'
        },
        {
            id: 7,
            status: 1, 
            title: 'GẤM',
            category: "FRENCH PRESS",
            img: './assets/img/products/FP-GAM.jpg',
            price: 55000,
            desc: 'Gấm sự kết hợp giữa Trà Ô Long Vải thơm mát cùng với trái vải căng mọng, đem đến dư vị ngọt mát và thanh khiết.',
        },
        {
            id: 8,
            status: 1, 
            title: 'GẤM - Size La',
            category: "FRENCH PRESS",
            img: './assets/img/products/FP-GAM-LA.jpg',
            price: 64000,
            desc: 'Gấm sự kết hợp giữa Trà Ô Long Vải thơm mát cùng với trái vải căng mọng, đem đến dư vị ngọt mát và thanh khiết.',
        },

        {
            id: 9,
            status: 1, 
            title: 'Ô LONG ĐÀO HỒNG',
            category: "FRENCH PRESS",
            img: './assets/img/products/FP-DAOHONG.jpg',
            price: 55000,
            desc: 'Phiên bản kèm Đào Hồng Dầm và Thạch Trà Đào Hồng. Trà Ô Long Đào Hồng thanh mát, vị trà nhẹ nhàng, thơm đào ngọt ngào, mang đến trải nghiệm thưởng thức dễ chịll.',
        },
        {
            id: 10,
            status: 1, 
            title: 'TRÀ VỎ CÀ PHÊ',
            category: "FRENCH PRESS",
            img: './assets/img/products/FP-TRAVO.jpg',
            price: 55000,
            desc: 'Trà Vỏ Cà Phê - thức uống độc đáo được làm từ vỏ quả cà phê, hương trà thơm nhẹ hòa quyện cùng vị chua dịu của chanh vàng.',
        },
        {
            id: 11,
            status: 1, 
            title: 'TRÀ VỎ CÀ PHÊ - Size La',
            category: "FRENCH PRESS",
            img: './assets/img/products/FP-TRAVO-LA.jpg',
            price: 64000,
            desc: 'Trà Vỏ Cà Phê - thức uống độc đáo được làm từ vỏ quả cà phê, hương trà thơm nhẹ hòa quyện cùng vị chua dịu của chanh vàng.',
        },
        {
            id: 12,
            status: 1, 
            title: 'LỤA ĐÀO - Size La',
            category: "FRENCH PRESS",
            img: './assets/img/products/FP-LUADAO-LA.jpg',
            price: 64000,
            desc: 'Phiên bản kèm Đào Hồng Dầm và Thạch Trà Đào Hồng. Trà Ô Long Lụa Đào thơm hoa ngọt ngào, kết hợp cùng Sữa Tươi Thanh Trùng, mang đến trải nghiệm mềm mượt, tươi mát & nhẹ nhàng.',
        },
        {
            id: 13,
            status: 1, 
            title: 'LỤA ĐÀO',
            category: "FRENCH PRESS",
            img: './assets/img/products/FP-LUADAO.jpg',
            price: 55000,
            desc: 'Phiên bản kèm Đào Hồng Dầm và Thạch Trà Đào Hồng. Trà Ô Long Lụa Đào thơm hoa ngọt ngào, kết hợp cùng Sữa Tươi Thanh Trùng, mang đến trải nghiệm mềm mượt, tươi mát & nhẹ nhàng.',
        },
        {
            id: 14,
            status: 1, 
            title: 'TẤM',
            category: "MOKA POT",
            img: './assets/img/products/MP-TAM.jpg',
            price: 55000,
            desc: 'Trà Ô Long đậm đà kết hợp hài hoà với gạo rang thơm bùi.',
        },
        {
            id: 15,
            status: 1, 
            title: 'TẤM',
            category: "MOKA POT",
            img: './assets/img/products/MP-TAM-LA.jpg',
            price: 64000,
            desc: 'Trà Ô Long đậm đà kết hợp hài hoà với gạo rang thơm bùi.',
        },
        {
            id: 16,
            status: 1, 
            title: 'KHÓI B\'LAO -Size La',
            category: "MOKA POT",
            img: './assets/img/products/MP-KHOI-LA.jpg',
            price: 64000,
            desc: 'Trà Ô Long đậm đà kết hợp hài hoà với gạo rang thơm bùi.',
        },
        {
            id: 17,
            status: 1, 
            title: 'KHÓI B\'LAO',
            category: "MOKA POT",
            img: './assets/img/products/MP-KHOI.jpg',
            price: 55000,
            desc: 'Trà Ô Long đậm đà kết hợp hài hoà với gạo rang thơm bùi.',
        },
        {
            id: 18,
            status: 1, 
            title: 'MATCHA PHAN XI PĂNG',
            category: "SYPHONE",
            img: './assets/img/products/SP-MATCHAXAY.jpg',
            price: 64000,
            desc: 'Lớp kem Ô Long Matcha kết hợp cùng cốt dừa đá xay mát lạnh, thưởng thức cùng Thạch Ô Long Matcha mềm mượt mang đến trải nghiệm thú vị.',
        },
        {
            id: 19,
            status: 1, 
            title: 'MATCHA COCO LATTE',
            category: "SYPHONE",
            img: './assets/img/products/SP-MATCHACOCO.jpg',
            price: 64000,
            desc: 'Matcha Coco Latte với Lớp kem Ô Long Matcha bồng bềnh sánh mịn hoà quyện cùng sữa dừa Bến Tre hữu cơ ngọt thơm.',
        },
        {
            id: 20,
            status: 1, 
            title: 'SI MƠ - COLD BREW Ô LONG MƠ ĐÀO',
            category: "COLD BREW",
            img: './assets/img/products/CB-SIMO.jpg',
            price: 55000,
            desc: 'Trà Ô Long Đặc Sản ủ lạnh, kết hợp cùng Mơ Má Đào và Đào Hồng dầm, thêm Thạch Trà Vỏ mềm dai mang đến hương vị thanh mát & nhẹ nhàng.',
        },
        {
            id: 21,
            status: 1, 
            title: 'SI MƠ - COLD BREW Ô LONG MƠ ĐÀO - Size La',
            category: "COLD BREW",
            img: './assets/img/products/CB-SIMO.jpg',
            price: 64000,
            desc: 'Trà Ô Long Đặc Sản ủ lạnh, kết hợp cùng Mơ Má Đào và Đào Hồng dầm, thêm Thạch Trà Vỏ mềm dai mang đến hương vị thanh mát & nhẹ nhàng.',
        },
        {
            id: 22,
            status: 1, 
            title: 'LANG BIANG - Size La',
            category: "COLD BREW",
            img: './assets/img/products/CB-LANGBIANG.jpg',
            price: 64000,
            desc: 'Lang Biang với hương vị thuần khiết của trà Ô Long Đặc Sản cùng mứt hoa nhài thơm nhẹ.',
        },

        {
            id: 23,
            status: 1, 
            title: 'LANG BIANG',
            category: "COLD BREW",
            img: './assets/img/products/CB-LANGBIANG.jpg',
            price: 55000,
            desc: 'Lang Biang với hương vị thuần khiết của trà Ô Long Đặc Sản cùng mứt hoa nhài thơm nhẹ.',
        },

        {
            id: 24,
            status: 1, 
            title: 'SUA CHUA BÒNG BƯỞI',
            category: "COLD BREW",
            img: './assets/img/products/CB-SCBONGBUOI.jpg',
            price: 64000,
            desc: '(Có sẵn Thạch Trà Chanh Vàng) Sữa Chua Ô Long đá xay sáng tạo cùng nền trà Cold Brew, vị Bưởi the the, thêm Chanh Vàng tươi mát. Sản phẩm có thể bị tan với khoảng cách xa trên 3,5km.',
        },
        {
            id: 25,
            status: 1, 
            title: 'BÒNG BƯỞI - Ô LONG BƯỞI NHA ĐAM',
            category: "COLD BREW",
            img: './assets/img/products/CB-BONGBUOI.jpg',
            price: 55000,
            desc: 'Trà Ô Long Đặc Sản kết hợp cùng vị Bưởi the mát, thêm Vỏ Bưởi sấy và Nha Đam giòn dai sần sật, mang đến hương vị thanh mát & nhẹ nhàng.',
        },

        {
            id: 26,
            status: 1, 
            title: 'TRÂN CHÂU Ô LONG',
            category: "TOPPING",
            img: './assets/img/products/TP-OLONG.jpg',
            price: 10000,
            desc: 'Nguyên Liệu Làm Từ Lá Trà Ô Long Đặc Sản Thủ Công, Thơm Ngon Dai Dẻo',
        },

        {
            id: 27,
            status: 1, 
            title: 'TRÂN CHÂU GẠO RANG',
            category: "TOPPING",
            img: './assets/img/products/TP-GAO.jpg',
            price: 10000,
            desc: 'Trân châu mềm dẻo - vị trà Ô Long hoà quyện cùng gạo rang thơm bùi nhẹ nhàng. Phù hợp thưởng thức cùng trà sữa. Không chất bảo quản. Nguyên bản - thủ công.',
        },

        {
            id: 28,
            status: 1, 
            title: 'TRÂN CHÂU PHONG LAN',
            category: "TOPPING",
            img: './assets/img/products/TP-PHONGLAN.jpg',
            price: 10000,
            desc: 'Trân Châu Phong Lan giòn dai - không chất bảo quản, xen lẫn hạt Vani đen tự nhiên & hương vị nhẹ nhàng. Phù hợp với mọi đồ uống tại Phê La.',
        },

        {
            id: 29,
            status: 1, 
            title: 'THẠCH TRÀ CHANH VÀNG',
            category: "TOPPING",
            img: './assets/img/products/TP-THACHCHANH.jpg',
            price: 15000,
            desc: 'Thạch Trà Chanh Vàng mềm dai, thơm dịu - không chất bảo quản - thủ công sáng tạo từ Trà Cold Brew Ô Long Bưởi & Chanh Vàng. Phù hợp với mọi trà trái cây tại Phê La.',
        },
        {
            id: 30,
            status: 1, 
            title: 'THẠCH TRÀ ĐÀO HỒNG',
            category: "TOPPING",
            img: './assets/img/products/TP-THACHVANG.jpg',
            price: 15000,
            desc: 'Thạch Ô Long Đào Hồng mềm dai - không chất bảo quản - thủ công sáng tạo từ Trà Ô Long Đặc Sản & Đào Hồng Dầm. Phù hợp với tất cả sản phẩm Trà Trái Cây tại Phê La',
        },

        {
            id: 31,
            status: 1, 
            title: 'THẠCH Ô LONG MATCHA',
            category: "TOPPING",
            img: './assets/img/products/TP-THACHMATCHA.jpg',
            price: 15000,
            desc: 'Thạch Ô Long Matcha mềm mượt - không chất bảo quản - thủ công sáng tạo từ Trà Ô Long Matcha & Sữa Dừa Bến Tre. Phù hợp với mọi sản phẩm trà sữa và Ô Long Matcha tại Phê La.',
        },

        {
            id: 32,
            status: 1, 
            title: 'THẠCH TRÀ VỎ',
            category: "TOPPING",
            img: './assets/img/products/TP-THACHVO.jpg',
            price: 15000,
            desc: 'Thạch Trà Vỏ mềm dai - không chất bảo quản - thủ công sáng tạo từ Trà Vỏ Cà Phê & Ô Mai Dây gia truyền (Xí Muội). Phù hợp với mọi trà trái cây tại Phê La.',
        },

        {
            id: 33,
            status: 1, 
            title: 'THẠCH XỈU VANI',
            category: "TOPPING",
            img: './assets/img/products/TP-THACHVANI.jpg',
            price: 15000,
            desc: 'Thạch Xỉu Vani mềm mượt - không chất bảo quản - thủ công sáng tạo từ cà phê Arabica Lạc Dương & Robusta Lâm Hà, kết hợp Vani Tự Nhiên cùng Sữa Dừa. Phù hợp với các sản phẩm Cà Phê Phin & Cà Phê Máy.',
        },

        {
            id: 34,
            status: 1, 
            title: 'PHÊ XỈU VANI',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-PHEXIU.jpg',
            price: 50000,
            desc: '(Có sẵn Thạch) Vị chua nhẹ tự nhiên của hạt Arabica Lạc Dương & Robusta Lâm Hà, hoà quyện cùng Vani Tự Nhiên, Thạch Xỉu Vani mềm mượt và Sữa Tươi Thanh Trùng đem đến hương vị đậm mượt đầy tinh tế.',
        },

        {
            id: 35,
            status: 1, 
            title: 'PHÊ ESPRESSO (Hạt Colom, Ethi)',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-AME.jpg',
            price: 45000,
            desc: 'Cà Phê Đặc Sản với nốt hương: Peach - Orange - Juicy Body - Sweet Aftertaste With Chocolate.',
        },

        {
            id: 36,
            status: 1, 
            title: 'PHÊ ESPRESSO (Hạt Ro, Ara)',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-AME.jpg',
            price: 45000,
            desc: 'Cà Phê với nốt hương: Dark Chocolate - Roasted Walnut - Strong Body - Long Aftertaste With Chocolate.',
        },

        {
            id: 37,
            status: 1, 
            title: 'PHÊ AME (Hạt Ro, Ara)',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-AME.jpg',
            price: 45000,
            desc: 'Cà Phê với nốt hương: Dark Chocolate - Roasted Walnut - Strong Body - Long Aftertaste With Chocolate.',
        },
        {
            id: 38,
            status: 1, 
            title: 'PHÊ AME (Hạt Colom, Ethi)',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-AME.jpg',
            price: 45000,
            desc: 'Cà Phê Đặc Sản với nốt hương: Peach - Orange - Juicy Body - Sweet Aftertaste With Chocolate.',
        },
        {
            id: 39,
            status: 1, 
            title: 'PHÊ LATTE (Hạt Colom, Ethi)',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-LATTE.jpg',
            price: 55000,
            desc: 'Cà Phê Đặc Sản với nốt hương: Peach - Orange - Juicy Body - Sweet Aftertaste With Chocolate. Sản phẩm có thể dùng nóng/đá.',
        },

        {
            id: 40,
            status: 1, 
            title: 'PHÊ LATTE (Hạt Ro, Ara)',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-LATTE.jpg',
            price: 55000,
            desc: 'Cà Phê với nốt hương: Dark Chocolate - Roasted Walnut - Strong Body - Long Aftertaste With Chocolate. Sản phẩm có thể dùng nóng/đá.',
        },

        {
            id: 41,
            status: 1, 
            title: 'PHÊ CAPPU (Hạt Ro, Ara)',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-CAPPU.jpg',
            price: 45000,
            desc: 'Cà Phê với nốt hương: Dark Chocolate - Roasted Walnut - Strong Body - Long Aftertaste With Chocolate. Sản phẩm có thể dùng nóng/đá.',
        },
        {
            id: 42,
            status: 1, 
            title: 'PHÊ CAPPU (Hạt Colom, Ethi)',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-CAPPU.jpg',
            price: 45000,
            desc: 'Cà Phê Đặc Sản với nốt hương: Peach - Orange - Juicy Body - Sweet Aftertaste With Chocolate. Sản phẩm có thể dùng nóng/đá.',
        },
        {
            id: 43,
            status: 1, 
            title: 'PHÊ NÂU',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-PHENAU.jpg',
            price: 50000,
            desc: 'Phê Nâu có vị chua nhẹ tự nhiên của hạt Arabica Lạc Dương kết hợp cùng Robusta Lâm Hà được tuyển chọn kỹ lưỡng, hoà quyện cùng sữa đặc đem đến hương vị đậm mượt và gần gũi.',
        },
        {
            id: 44,
            status: 1, 
            title: 'PHÊ ĐEN',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-PHEDEN.jpg',
            price: 50000,
            desc: '(Sản phẩm không đường) Phê Đen có vị chua nhẹ tự nhiên của hạt Arabica Lạc Dương kết hợp cùng Robusta Lâm Hà được tuyển chọn kỹ lưỡng, tạo nên hương vị đậm mượt đầy tinh tế.',
        },
        {
            id: 45,
            status: 1, 
            title: 'ĐÀ LẠT',
            category: "CÀ PHÊ",
            img: './assets/img/products/CP-DALAT.jpg',
            price: 45000,
            desc: 'Cà phê Arabica Đà Lạt đậm đà hoà quyện cùng kem whipping thơm ngậy.',
        },     
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "admin",
            phone: "hgbaodev",
            password: "123456",
            address: 'Hà Nội',
            email: 'cdat.nqct@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Đạt Nguyễn",
            phone: "0398697975",
            password: "admin123",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Admin",
            phone: "admin",
            password: "admin123",
            address: 'Hà Nội',
            email: 'domain@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

// kho nguyên liệu
// (Thêm code này vào cuối tệp initialization.js)

// Khoi tao danh sach kho hang
function createWarehouse() {
    if (localStorage.getItem('warehouse') == null) {
        let warehouse = [
            {
                id: 'nl_01',
                name: 'Hạt Cà Phê Colom, Ethi',
                quantity: 500,
                unit: 'cốc',
                status: 1 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_02',
                name: 'Hạt Cà Phê Ro, Ara',
                quantity: 45,
                unit: 'cốc',
                status: 2 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_03',
                name: 'Hạt Cà Phê Robusta',
                quantity: 1000,
                unit: 'cốc',
                status: 1
            },
            {
                id: 'nl_04',
                name: 'Trà Ô Long Nhài Sữa',
                quantity: 500,
                unit: 'cốc',
                status: 1 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_05',
                name: 'Trà Ô Long Phong Lan',
                quantity: 45,
                unit: 'cốc',
                status: 2 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_06',
                name: 'Trà Ô Long Sữa',
                quantity: 1000,
                unit: 'cốc',
                status: 1
            },
            {
                id: 'nl_07',
                name: 'Trà Ô Long Cold Brew',
                quantity: 500,
                unit: 'cốc',
                status: 1 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_08',
                name: 'Trà Vỏ Cà Phê',
                quantity: 45,
                unit: 'cốc',
                status: 2 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_09',
                name: 'Trà Ô Long Đào',
                quantity: 1000,
                unit: 'cốc',
                status: 1
            },
            {
                id: 'nl_10',
                name: 'Trà Ô Long Vải',
                quantity: 500,
                unit: 'cốc',
                status: 1 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_11',
                name: 'Trà Ô Long Gạo Rang',
                quantity: 45,
                unit: 'cốc',
                status: 2 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_12',
                name: 'Bột Matcha',
                quantity: 1000,
                unit: 'phần',
                status: 1
            },
            {
                id: 'nl_13',
                name: 'Sữa Dừa',
                quantity: 500,
                unit: 'phần',
                status: 1 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_14',
                name: 'Sữa Đặc Ngôi Sao',
                quantity: 45,
                unit: 'phần',
                status: 2 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_15',
                name: 'Bột Sữa',
                quantity: 1000,
                unit: 'phần',
                status: 1
            },
            {
                id: 'nl_16',
                name: 'Đào Đóng Hộp',
                quantity: 500,
                unit: 'phần',
                status: 1 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_17',
                name: 'Vải Đóng Hộp',
                quantity: 45,
                unit: 'phần',
                status: 2 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_18',
                name: 'Trân Châu Ô Long',
                quantity: 1000,
                unit: 'phần',
                status: 1
            },
            {
                id: 'nl_19',
                name: 'Trân Châu Gạo Rang',
                quantity: 500,
                unit: 'phần',
                status: 1 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_20',
                name: 'Trà Ô Long Phong Lan',
                quantity: 45,
                unit: 'phần',
                status: 2 // 1 = Còn hàng, 2 = Sắp hết, 0 = Hết hàng
            },
            {
                id: 'nl_21',
                name: 'Nguyên Liệu Làm Thạch',
                quantity: 1000,
                unit: 'phần',
                status: 1
            }
        ];
        localStorage.setItem('warehouse', JSON.stringify(warehouse));
    }
}

    // window.onload = createProduct();
    // window.onload = createAdminAccount();
    // window.onload = createWarehouse();