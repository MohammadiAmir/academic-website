import { supabase } from "@/lib/supabase";

type Publication = {
  id: number;
  title: string;
  authors: string;
  venue: string | null;
  year: number | null;
  abstract: string | null;
  pdf_url: string | null;
  code_url: string | null;
};

export default async function PublicationsPage() {
  const { data, error } = await supabase
    .from("publications")
    .select("*")
    .order("year", { ascending: false });

  const publications = (data ?? []) as Publication[];

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-8 md:px-10 py-20">
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Academic Output
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-lg text-gray-700 leading-8">
            A selected list of journal papers, conference papers, and ongoing
            research contributions in data fusion, cooperative perception, and
            vehicular networks.
          </p>
        </div>

        {error && (
          <div className="rounded-xl border border-red-300 bg-red-50 p-5">
            <p className="font-semibold text-red-700">Failed to load publications.</p>
            <p className="text-sm text-red-600 mt-2">{error.message}</p>
          </div>
        )}

        {!error && publications.length === 0 && (
          <div className="rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700">No publications added yet.</p>
          </div>
        )}

        <div className="space-y-6">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-semibold leading-snug mb-2">
                    {pub.title}
                  </h2>
                  <p className="text-gray-700">{pub.authors}</p>
                </div>

                <div className="text-sm text-gray-600 md:text-right min-w-[120px]">
                  <p>{pub.venue}</p>
                  <p>{pub.year}</p>
                </div>
              </div>

              {pub.abstract && (
                <p className="text-gray-700 leading-8 mb-6">{pub.abstract}</p>
              )}

              <div className="flex flex-wrap gap-3">
                <a
                  href={pub.pdf_url || "#"}
                  className="inline-block rounded-xl border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
                >
                  PDF
                </a>

                <a
                  href={pub.code_url || "#"}
                  className="inline-block rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium hover:border-black transition"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}