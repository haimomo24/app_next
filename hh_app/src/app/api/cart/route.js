import pool from '@/lib/db';

export async function POST(req) {
  let connection;
  try {
    const { name, images, sodienthoai, diachi, ngaymua, price, email, soluong } = await req.json();
    
    // Kiểm tra dữ liệu đầu vào
    if (!name || !price || !sodienthoai || !images || !ngaymua || !diachi || !email || !soluong) {
      return new Response(JSON.stringify({ message: 'Thiếu các trường bắt buộc' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    connection = await pool.getConnection();

    // Thêm đơn hàng vào cơ sở dữ liệu
    const [{ insertId }] = await connection.execute(
      'INSERT INTO cartproduct (name, price, images, diachi, sodienthoai, ngaymua, email, soluong) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, price, images, diachi, sodienthoai, ngaymua, email, soluong]
    );

    const newOrder = { id: insertId, name, price, ngaymua, images, sodienthoai, soluong, email, diachi };
    return new Response(JSON.stringify(newOrder), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Location': `/api/product/${newOrder.id}`
      },
    });
  } catch (error) {
    console.error('Lỗi thêm đơn hàng:', error);
    return new Response(JSON.stringify({ message: 'Lỗi máy chủ nội bộ' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  } finally {
    connection?.release();
  }
}

export async function GET(req) {
    let connection;
    try {
      connection = await pool.getConnection();
      
      const [products] = await connection.query('SELECT * FROM cartproduct');  // Thay đổi tên bảng nếu cần
      
      return new Response(JSON.stringify(products), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    } finally {
      connection?.release();
    }
  }

  export async function DELETE(req) {
    let connection;
    try {
      const { id } = await req.json(); // Nhận ID sản phẩm từ body
  
      connection = await pool.getConnection();
      
      const result = await connection.execute('DELETE FROM cartproduct WHERE id = ?', [id]);
  
      if (result.affectedRows === 0) {
        return new Response(JSON.stringify({ message: 'Không tìm thấy sản phẩm' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      return new Response(JSON.stringify({ message: 'Sản phẩm đã được xóa' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error deleting product:', error);
      return new Response(JSON.stringify({ message: 'Lỗi máy chủ nội bộ' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    } finally {
      connection?.release();
    }
  }

  export async function PUT(req) {
    let connection;
    try {
      const { id, name, price, images, diachi, sodienthoai } = await req.json(); // Nhận dữ liệu từ body
  
      connection = await pool.getConnection();
      
      const result = await connection.execute(
        'UPDATE cartproduct SET name = ?, price = ?, images = ?, diachi = ?, sodienthoai = ? WHERE id = ?',
        [name, price, images, diachi, sodienthoai, id]
      );
  
      if (result.affectedRows === 0) {
        return new Response(JSON.stringify({ message: 'Không tìm thấy sản phẩm' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      return new Response(JSON.stringify({ message: 'Sản phẩm đã được cập nhật' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error updating product:', error);
      return new Response(JSON.stringify({ message: 'Lỗi máy chủ nội bộ' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    } finally {
      connection?.release();
    }
  }