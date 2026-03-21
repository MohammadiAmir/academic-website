import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default async function Home() {
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .limit(1)
    .single();

  if (error || !data) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 bg-[#0b1020] text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-3">Failed to load profile</h1>
          <p className="text-gray-400">{error?.message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">
              Robotics • AI • Data Fusion • Cooperative Perception
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              {data.full_name}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-3">
              {data.title}
            </p>

            <p className="text-lg text-cyan-200 mb-8">
              {data.affiliation}
              {data.location ? ` • ${data.location}` : ""}
            </p>

            <p className="text-lg leading-8 text-gray-300 max-w-3xl mb-10">
              {data.bio_short}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={data.cv_url || "#"}
                className="rounded-xl bg-cyan-400 text-black px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Download CV
              </a>

              <a
                href="/publications"
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium hover:border-cyan-300 hover:text-cyan-300 transition"
              >
                View Publications
              </a>

              <a
                href={`mailto:${data.email}`}
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium hover:border-cyan-300 hover:text-cyan-300 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              {data.google_scholar_url && (
                <a href={data.google_scholar_url} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-gray-300 hover:text-cyan-300 hover:border-cyan-300 transition">
                  Google Scholar
                </a>
              )}
              {data.github_url && (
                <a href={data.github_url} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-gray-300 hover:text-cyan-300 hover:border-cyan-300 transition">
                  GitHub
                </a>
              )}
              {data.linkedin_url && (
                <a href={data.linkedin_url} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-gray-300 hover:text-cyan-300 hover:border-cyan-300 transition">
                  LinkedIn
                </a>
              )}
              {data.orcid_url && (
                <a href={data.orcid_url} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-gray-300 hover:text-cyan-300 hover:border-cyan-300 transition">
                  ORCID
                </a>
              )}
              {data.researchgate_url && (
                <a href={data.researchgate_url} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-gray-300 hover:text-cyan-300 hover:border-cyan-300 transition">
                  ResearchGate
                </a>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-blue-500/20 blur-3xl rounded-full" />

            <div className="relative grid grid-cols-2 gap-4">
              <a
                href="/images/profile1.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <Image
                  src="/images/profile1.jpg"
                  alt="Profile 1"
                  width={900}
                  height={700}
                  className="w-full h-[420px] object-cover hover:scale-[1.02] transition duration-300"
                />
              </a>

              <a
                href="/images/profile2.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden border border-white/10"
              >
                <Image
                  src="/images/profile2.jpg"
                  alt="Profile 2"
                  width={400}
                  height={300}
                  className="w-full h-[180px] object-cover hover:scale-[1.03] transition duration-300"
                />
              </a>

              <a
                href="/images/profile3.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden border border-white/10"
              >
                <Image
                  src="/images/profile3.jpg"
                  alt="Profile 3"
                  width={400}
                  height={300}
                  className="w-full h-[180px] object-cover hover:scale-[1.03] transition duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Research cards */}
        <section className="mt-24">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-3">
              Focus Areas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Research Interests</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                Multi-Sensor Data Fusion
              </h3>
              <p className="text-gray-300 leading-8">
                Robust object-level and track-level fusion of heterogeneous sensing
                sources for perception in intelligent transportation systems.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                Cooperative Perception
              </h3>
              <p className="text-gray-300 leading-8">
                Collaborative perception frameworks using V2X communication to extend
                sensing range, improve awareness, and support connected vehicles.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                Vehicular AI Systems
              </h3>
              <p className="text-gray-300 leading-8">
                AI-driven perception, association, and communication-aware decision
                support for connected and automated driving in dynamic environments.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}