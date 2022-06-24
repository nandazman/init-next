import Head from "next/head";

export default function AdminLogin() {
  return (
    <>
      <Head>
        <title>Admin Login</title>
        <meta name="description" content="Admin login for edukabiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white min-h-screen flex items-center justify-center p-10px">
        <div className="bg-blue max-w-[884px] w-full rounded-10px flex justify-center items-center min-h-[580px]">
          <h5 className="text-white mb-48px">Masuk dengan akun admin kamu</h5>
        </div>
      </div>
    </>
  );
}