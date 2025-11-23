import { Link } from "react-router-dom";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-emerald-900/40 p-3">
      <div className="text-[0.65rem] uppercase tracking-wide text-emerald-200">
        {label}
      </div>
      <div className="mt-1 text-xs font-medium text-emerald-50">{value}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-emerald-900 text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:py-24">
        <div className="md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            DESDE 1983
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            Maquinaria y repuestos agroindustriales para todo el mundo
          </h1>
          <p className="mt-4 text-sm text-emerald-100 md:text-base">
            Terrasol S.A. representa, importa y distribuye maquinaria y equipos
            agroindustriales de marcas líderes de Asia, Brasil y Europa, con
            foco en soluciones completas para el productor y la industria.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/maquinaria"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-emerald-900 shadow-sm hover:bg-emerald-50"
            >
              Ver maquinaria
            </Link>
            <Link
              to="/contacto"
              className="rounded-full border border-emerald-100 px-5 py-2 text-sm font-medium text-emerald-50 hover:bg-emerald-800/60"
            >
              Contactanos
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-800/40 p-4 shadow-lg">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <Stat label="+40 años" value="Experiencia en agroindustria" />
              <Stat label="Importación" value="Equipos y repuestos" />
              <Stat label="Asesoramiento" value="Técnico especializado" />
              <Stat label="Cobertura" value="America del Sur, Europa y Asia" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
