import pool from '@/lib/db';

export async function GET(req) {
  let connection;
  try {
    connection = await pool.getConnection();  // Lấy kết nối từ pool
    const [product] = await connection.execute('SELECT * FROM product');

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
    connection?.release();  // Đảm bảo luôn giải phóng kết nối
  }
}

export async function POST(req) {
  let connection;
  try {
    const { title, images, description, category, name, price, status } = await req.json();

    // Kiểm tra dữ liệu đầu vào
    if (!name || !price || !title || !images || !description || !category || !status) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    connection = await pool.getConnection();

    // Thêm sản phẩm vào database
    const [{ insertId }] = await connection.execute(
      'INSERT INTO product (name, price, title, images, description, category, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, price, title, images, description, category, status]
    );

    const newProduct = { id: insertId, name, price, title, images, description, category, status };
    return new Response(JSON.stringify(newProduct), {
      status: 201,
      headers: { 
        'Content-Type': 'application/json',
        'Location': `/api/product/${newProduct.id}`  // Thêm location cho đối tượng vừa tạo
      },
    });
  } catch (error) {
    console.error('Error adding product:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  } finally {
    connection?.release();
  }
}

export async function DELETE(req) {
  let connection;
  try {
    const { id } = await req.json(); // Get product ID from the request body
    connection = await pool.getConnection();

    // Kiểm tra nếu sản phẩm có tồn tại
    const [rows] = await connection.execute('SELECT * FROM product WHERE id = ?', [id]);
    if (rows.length === 0) {
      return new Response(JSON.stringify({ message: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Xóa sản phẩm
    await connection.execute('DELETE FROM product WHERE id = ?', [id]);

    return new Response(JSON.stringify({ message: 'Product deleted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  } finally {
    connection?.release();
  }
}
