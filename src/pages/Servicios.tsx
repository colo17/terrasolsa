const services = [
  {
    title: "Asesoramiento técnico",
    description:
      "Acompañamos la definición de proyectos y la selección de equipos adecuados a cada necesidad."
  },
  {
    title: "Puesta en marcha y capacitación",
    description:
      "Soporte en la instalación inicial y capacitación básica para la operación segura y eficiente."
  },
  {
    title: "Postventa y repuestos",
    description:
      "Disponibilidad de repuestos y acompañamiento durante la vida útil de los equipos."
  },
  {
    title: "Gestión de importaciones",
    description:
      "Coordinación de compras y logística internacional, optimizando tiempos y costos."
  }
];

export function Servicios() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">Servicios</h1>
      <p className="mt-4 text-sm text-slate-700">
        Más allá de la venta de maquinaria, Terrasol S.A. se enfoca en
        construir relaciones de largo plazo, ofreciendo servicios que
        acompañan cada etapa del proyecto.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((srv) => (
          <div
            key={srv.title}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <h2 className="text-sm font-semibold text-slate-900">
              {srv.title}
            </h2>
            <p className="mt-2 text-xs text-slate-700">
              {srv.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
