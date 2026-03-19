export default function Home() {
  const urlExists = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const keyExists = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="max-w-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Academic Website</h1>
        <p className="mb-6">
          Step 3 test: checking whether Supabase environment variables are connected.
        </p>

        <div className="space-y-3 text-lg">
          <p>
            Supabase URL:{" "}
            <span className={urlExists ? "font-semibold" : "font-semibold text-red-600"}>
              {urlExists ? "Loaded" : "Missing"}
            </span>
          </p>

          <p>
            Supabase Anon Key:{" "}
            <span className={keyExists ? "font-semibold" : "font-semibold text-red-600"}>
              {keyExists ? "Loaded" : "Missing"}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}