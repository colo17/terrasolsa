const brands = [
  { name: "Marca 1", description: "Descripción breve de la marca 1." },
  { name: "Marca 2", description: "Descripción breve de la marca 2." },
  { name: "Marca 3", description: "Descripción breve de la marca 3." },
  { name: "Marca 4", description: "Descripción breve de la marca 4." }
];

export function Marcas() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">
        Marcas representadas
      </h1>
      <p className="mt-4 text-sm text-slate-700">
        Terrasol S.A. trabaja con marcas internacionales cuidadosamente
        seleccionadas por su calidad, respaldo y adecuación a la realidad
        productiva local.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <h2 className="text-sm font-semibold text-slate-900">
              {brand.name}
            </h2>
            <p className="mt-2 text-xs text-slate-700">
              {brand.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
