const pool = mysq.createPool({  
    host: 'localhost',  
    user: 'root', // Thay thế với người dùng của bạn  
    password: '', // Thay thế với mật khẩu của bạn  
    database: 'hhstore' // Tên cơ sở dữ liệu  
  });  