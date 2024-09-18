import pool from "@/lib/db";


export async function GET() {
  try {
    const [products] = await pool.query('SELECT * FROM products');
    return new Response(
      JSON.stringify({ products }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Database error', error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}