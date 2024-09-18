import pool from "@/lib/db";


export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const [user] = await pool.query(
      'SELECT * FROM user WHERE email = ? AND password = ?',
      [email, password]
    );

    if (user.length > 0) {
      return new Response(
        JSON.stringify({ message: 'Login successful', user: user[0] }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return new Response(
        JSON.stringify({ message: 'Invalid credentials' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Database error', error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}