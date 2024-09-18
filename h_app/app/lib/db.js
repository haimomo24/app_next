import mysql from 'mysql2/promise';  

const pool = mysql.createPool({  
  host: 'localhost',  
  user: 'root', // Thay thế với người dùng của bạn  
  password: '', // Thay thế với mật khẩu của bạn  
  database: 'your_database_name' // Tên cơ sở dữ liệu  
});  

export default pool;  