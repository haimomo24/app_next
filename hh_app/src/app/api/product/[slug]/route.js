import pool from '@/lib/db';
import { NextResponse } from 'next/server';

// GET: Lấy chi tiết sản phẩm dựa trên slug (id)
export async function GET(req, { params }) {
  let connection;
  try {
    const { slug } = params;  // Nhận slug từ URL
    connection = await pool.getConnection();

    // Tìm sản phẩm trong database theo id (slug)
    const [rows] = await connection.execute('SELECT * FROM product WHERE id = ?', [slug]);

    if (rows.length === 0) {
      return new Response(JSON.stringify({ message: 'Sản phẩm không tồn tại' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const product = rows[0];  // Lấy sản phẩm đầu tiên

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database query error:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  } finally {
    connection?.release();  // Giải phóng kết nối
  }
}
