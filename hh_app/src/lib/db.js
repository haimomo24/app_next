import mysql from 'mysql2/promise';  

const pool = mysql.createPool({  
  host: 'localhost',  
  user: 'root', // Thay thế bằng tên người dùng XAMPP của bạn  
  password: '', // Thay thế bằng mật khẩu XAMPP của bạn  
  database: 'hhstore', // Thay thế bằng tên cơ sở dữ liệu của bạn  
});  

export default pool; 