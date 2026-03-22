import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";

type Project = {
  id: number;
  title: string;
  short_description: string | null;
  long_description: string | null;
  tags: string | null;
  image_url: string | null;
  project_url: string | null;
  code_url: string | null;
};

export default async function ProjectsPage() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: false });

  const projects = (data ?? []) as Project[];

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-4xl mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">
            Applied Research
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-8">
            Selected research and engineering projects in data fusion, cooperative
            perception, vehicular networks, AI, and intelligent transportation systems.
          </p>
        </div>

        {error && (
          <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-6">
            <p className="text-red-300 font-semibold">Failed to load projects.</p>
            <p className="text-red-200/80 text-sm mt-2">{error.message}</p>
          </div>
        )}

        {!error && projects.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-300">No projects added yet.</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const tags = project.tags
              ? project.tags.split(",").map((tag) => tag.trim())
              : [];

            return (
              <article
                key={project.id}
                className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-xl"
              >
                {project.image_url && (
                  <div className="relative w-full h-[260px]">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h2>

                  {project.short_description && (
                    <p className="text-cyan-300 font-medium mb-4 leading-7">
                      {project.short_description}
                    </p>
                  )}

                  {project.long_description && (
                    <p className="text-gray-300 leading-8 mb-6">
                      {project.long_description}
                    </p>
                  )}

                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex rounded-full bg-white/5 text-gray-300 px-3 py-1 text-xs font-medium border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    {project.project_url && project.project_url !== "#" && (
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 text-black px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                      >
                        <ExternalLink size={16} />
                        <span>Project</span>
                      </a>
                    )}

                    {project.code_url && project.code_url !== "#" && (
                      <a
                        href={project.code_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-gray-200 hover:border-cyan-300 hover:text-cyan-300 transition"
                      >
                        <Code2 size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}