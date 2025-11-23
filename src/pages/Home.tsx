import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";

const businessLines = [
  {
    title: "Maquinaria agrícola",
    description:
      "Equipos para siembra, cosecha, laboreo y manejo de cultivos, adaptados a la realidad productiva."
  },
  {
    title: "Repuestos y componentes",
    description:
      "Amplio portafolio de repuestos originales y alternativos para maquinaria nacional e importada."
  },
  {
    title: "Soluciones agroindustriales",
    description:
      "Equipos y proyectos para plantas de procesamiento, molinos y servicios al sector agroindustrial."
  },
  {
    title: "Logística e importación",
    description:
      "Gestión completa de importación y apoyo en la selección de equipos adecuados a cada proyecto."
  }
];

export function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Terrasol S.A.
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Desde 1983, Terrasol S.A. se dedica a acercar al productor y a la
              industria agroexportadora soluciones en maquinaria y repuestos
              agroindustriales, integrando marcas de referencia internacional
              con un servicio técnico cercano y especializado.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Acompañamos proyectos en todo el Mundo, desde la elección del
              equipo hasta la postventa, buscando siempre maximizar la
              productividad y la confiabilidad de cada instalación.
            </p>
            <div className="mt-4">
              <Link
                to="/empresa"
                className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                Conocé más sobre la empresa →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600">
            <p className="font-semibold text-slate-800">
              Principales focos de trabajo
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Maquinaria agrícola y agroindustrial.</li>
              <li>Repuestos y servicio postventa.</li>
              <li>Proyectos y soluciones integrales a medida.</li>
              <li>Importación y representación de marcas internacionales.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-xl font-semibold text-slate-900">
            Líneas de negocio
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Integramos maquinaria, repuestos y servicio para ofrecer soluciones
            completas al agro y la agroindustria.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {businessLines.map((line) => (
              <div
                key={line.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {line.title}
                </h3>
                <p className="mt-2 text-xs text-slate-700">
                  {line.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-900">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              ¿Tenés un proyecto o necesitás un equipo específico?
            </h2>
            <p className="mt-2 text-sm text-emerald-100">
              Contanos qué necesitás y un asesor de Terrasol se pondrá en
              contacto para ayudarte a encontrar la mejor solución.
            </p>
          </div>
          <Link
            to="/contacto"
            className="rounded-full bg-white px-6 py-2 text-sm font-medium text-emerald-900 shadow-sm hover:bg-emerald-50"
          >
            Hablemos
          </Link>
        </div>
      </section>
    </>
  );
}
