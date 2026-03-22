import Image from "next/image";

const journeyItems = [
  {
    title: "High School",
    period: "The Beginning",
    description:
      "This is where you introduce your early interests, curiosity for science, electronics, robotics, or problem solving. Write 4–6 lines here about how your journey started and what inspired you during high school.",
    image: "/images/journey/highschool.jpg",
  },
  {
    title: "University Years",
    period: "Bachelor's / Early Academic Development",
    description:
      "Here you can describe your undergraduate studies, technical growth, first projects, competitions, lab work, or the moment you became more serious about engineering and intelligent systems.",
    image: "/images/journey/university.jpg",
  },
  {
    title: "Research Beginnings",
    period: "First Research Experience",
    description:
      "Use this section to explain when you started research, how you became interested in data fusion, vehicular networks, AI, robotics, or related topics, and how your technical direction matured.",
    image: "/images/journey/research.jpg",
  },
  {
    title: "PhD Journey",
    period: "Current Academic Path",
    description:
      "Describe your PhD path, your current research focus, your lab, your projects, publications, and what you are building now in cooperative perception, multi-sensor fusion, and intelligent transportation systems.",
    image: "/images/journey/phd.jpg",
  },
  {
    title: "Today & Future Vision",
    period: "What Comes Next",
    description:
      "This section should present your current identity and your vision for the future: the kind of researcher, engineer, or innovator you want to become, and the impact you hope to make.",
    image: "/images/journey/today.jpg",
  },
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-4xl mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">
            Personal Story
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">My Journey</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-8">
            A visual and personal timeline of my path from early education to my
            current PhD journey in AI, robotics, data fusion, and cooperative perception.
          </p>
        </div>

        <div className="space-y-16">
          {journeyItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={700}
                    className="w-full h-[320px] md:h-[420px] object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-3">
                    {item.period}
                  </p>
                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                  <p className="text-gray-300 leading-8 text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}