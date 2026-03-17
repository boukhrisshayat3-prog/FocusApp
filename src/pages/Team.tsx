const teamMembers = [
  {
    name: "Alberto Rojas",
    role: "Frontend Developer",
    bio: "Apasionado por crear interfaces limpias, rapidas y centradas en la experiencia del usuario.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Bouchra Boukhriss",
    role: "Product Designer",
    bio: "Convierte ideas complejas en flujos simples y visuales atractivos para el dia a dia.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Victor Hernandez",
    role: "Backend Developer",
    bio: "Construye la logica y la arquitectura que hacen que FocusApp sea estable y escalable.",
    color: "from-orange-500 to-amber-500",
  },
];

const Team = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
            Our Team
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            El equipo detras de FocusApp
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Somos un equipo enfocado en ayudarte a recuperar tu tiempo con
            tecnologia util, simple y efectiva.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${member.color}`} />

              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-xl font-extrabold text-slate-700 group-hover:bg-slate-900 group-hover:text-white">
                  {member.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  {member.name}
                </h2>
                <p className="mt-1 font-semibold text-indigo-600">
                  {member.role}
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
