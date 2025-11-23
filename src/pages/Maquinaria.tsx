const categories = [
  {
    title: "Maquinaria agrícola",
    description:
      "Tractores, sembradoras, cosechadoras y equipos para manejo de cultivos."
  },
  {
    title: "Equipos agroindustriales",
    description:
      "Soluciones para plantas de procesamiento, molinos y almacenamiento."
  },
  {
    title: "Implementos y accesorios",
    description:
      "Implementos complementarios para diferentes tipos de explotación."
  }
];

export function Maquinaria() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">Maquinaria</h1>
      <p className="mt-4 text-sm text-slate-700">
        Conectamos al mercado mundial con una amplia gama de maquinaria
        agrícola y agroindustrial proveniente de Asia, Brasil y Europa.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <h2 className="text-sm font-semibold text-slate-900">
              {cat.title}
            </h2>
            <p className="mt-2 text-xs text-slate-700">
              {cat.description}
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Consultá por modelos disponibles y opciones de configuración.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
