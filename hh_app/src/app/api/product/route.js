import pool from '@/lib/db';

export async function GET(req) {  // Export named cho phương thức GET
  try {
    const connection = await pool.getConnection();  // Lấy kết nối từ pool
    const [product] = await connection.execute('SELECT * FROM product');

    connection.release();  // Giải phóng kết nối
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database query error:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
export async function POST(req) {
  try {
    const { title, image, description, category } = await req.json();
    const connection = await pool.getConnection();

    // Thêm sản phẩm vào database
    const [result] = await connection.execute(
      'INSERT INTO product (title, image, description, category) VALUES (?, ?, ?, ?)',
      [title, image, description, category]
    );

    connection.release();

    const newProduct = { id: result.insertId, title, image, description, category };
    return new Response(JSON.stringify(newProduct), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding product:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}