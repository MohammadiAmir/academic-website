import { supabase } from "@/lib/supabase";
import { ExternalLink, FileText, Code2 } from "lucide-react";

type Publication = {
  id: number;
  title: string;
  authors: string;
  venue: string | null;
  year: number | null;
  abstract: string | null;
  paper_url: string | null;
  pdf_url: string | null;
  code_url: string | null;
};

export default async function PublicationsPage() {
  const { data, error } = await supabase
    .from("publications")
    .select("*")
    .order("year", { ascending: false })
    .order("id", { ascending: false });

  const publications = (data ?? []) as Publication[];

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-4xl mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">
            Research Output
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Publications</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-8">
            A selected list of my journal papers, conference papers, and research
            contributions in data fusion, cooperative perception, vehicular
            networks, AI, and communication systems.
          </p>
        </div>

        {error && (
          <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-6">
            <p className="text-red-300 font-semibold">Failed to load publications.</p>
            <p className="text-red-200/80 text-sm mt-2">{error.message}</p>
          </div>
        )}

        {!error && publications.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-300">No publications added yet.</p>
          </div>
        )}

        <div className="space-y-6">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {pub.year && (
                      <span className="inline-flex rounded-full bg-cyan-400/15 text-cyan-300 px-3 py-1 text-xs font-semibold border border-cyan-400/20">
                        {pub.year}
                      </span>
                    )}
                    {pub.venue && (
                      <span className="inline-flex rounded-full bg-white/5 text-gray-300 px-3 py-1 text-xs font-medium border border-white/10">
                        {pub.venue}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                    {pub.paper_url ? (
                      <a
                        href={pub.paper_url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-300 transition"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h2>

                  <p className="text-gray-300 leading-7 mb-4">{pub.authors}</p>

                  {pub.abstract && (
                    <p className="text-gray-400 leading-8">{pub.abstract}</p>
                  )}
                </div>

                <div className="flex flex-row lg:flex-col flex-wrap gap-3 lg:min-w-[170px]">
                  {pub.paper_url && (
                    <a
                      href={pub.paper_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 text-black px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                    >
                      <ExternalLink size={16} />
                      <span>Paper</span>
                    </a>
                  )}

                  {pub.pdf_url && pub.pdf_url !== "#" && (
                    <a
                      href={pub.pdf_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-gray-200 hover:border-cyan-300 hover:text-cyan-300 transition"
                    >
                      <FileText size={16} />
                      <span>PDF</span>
                    </a>
                  )}

                  {pub.code_url && pub.code_url !== "#" && (
                    <a
                      href={pub.code_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-gray-200 hover:border-cyan-300 hover:text-cyan-300 transition"
                    >
                      <Code2 size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}