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
      <main className="min-h-screen bg-white text-black flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl font-bold mb-4">Academic Website</h1>
          <p className="text-red-600 font-medium">Failed to load profile data.</p>
          {error && <p className="mt-2 text-sm text-gray-600">{error.message}</p>}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-7xl mx-auto px-8 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left column */}
          <div className="md:col-span-2">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
              Academic Profile
         S   </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {data.full_name}
            </h1>

            <p className="text-xl text-gray-700 mb-2">{data.title}</p>
            <p className="text-lg text-gray-600 mb-8">{data.affiliation}</p>

            <p className="text-base md:text-lg leading-8 text-gray-800 max-w-3xl mb-10">
              {data.bio_short}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-block rounded-xl border border-black px-5 py-3 text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Download CV
              </a>

              <a
                href="#"
                className="inline-block rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium hover:border-black transition"
              >
                Publications
              </a>

              <a
                href={`mailto:${data.email}`}
                className="inline-block rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium hover:border-black transition"
              >
                Contact
              </a>
            </div>
          </div>

{/* Right column */}
<div className="md:col-span-1 space-y-6">
  {/* Main profile image */}
  <a
    href="/images/profile1.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-2xl overflow-hidden shadow-md"
  >
    <Image
      src="/images/profile1.jpg"
      alt="Profile"
      width={500}
      height={650}
      className="w-full h-auto object-cover hover:scale-[1.02] transition"
    />
  </a>

  {/* Small image grid */}
  <div className="grid grid-cols-2 gap-4">
    <a
      href="/images/profile2.jpg"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden shadow-sm"
    >
      <Image
        src="/images/profile2.jpg"
        alt="Profile 2"
        width={300}
        height={300}
        className="w-full h-full object-cover hover:scale-[1.02] transition"
      />
    </a>

    <a
      href="/images/profile3.jpg"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden shadow-sm"
    >
      <Image
        src="/images/profile3.jpg"
        alt="Profile 3"
        width={300}
        height={300}
        className="w-full h-full object-cover hover:scale-[1.02] transition"
      />
    </a>
  </div>

            {/* Quick info card */}
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Quick Info</h2>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-black">Email</p>
                  <p>{data.email}</p>
                </div>

                <div>
                  <p className="font-medium text-black">Affiliation</p>
                  <p>{data.affiliation}</p>
                </div>

                <div>
                  <p className="font-medium text-black">Research Areas</p>
                  <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700">
                    <li>Data Fusion</li>
                    <li>Cooperative Perception</li>
                    <li>Vehicular Networks</li>
                    <li>V2X Communication</li>
                    <li>Autonomous Driving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research interest preview */}
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Research Interests</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Multi-Sensor Data Fusion</h3>
              <p className="text-gray-700 leading-7">
                Research on object-level and track-level fusion methods for robust
                environment perception using heterogeneous sensing sources.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Cooperative Perception</h3>
              <p className="text-gray-700 leading-7">
                V2X-enabled perception frameworks that extend sensing coverage,
                improve awareness, and support collaborative intelligent vehicles.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Vehicular Networks</h3>
              <p className="text-gray-700 leading-7">
                Communication-aware perception and fusion strategies for connected
                and automated driving systems in dynamic traffic environments.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}