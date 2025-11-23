export function Contacto() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">Contacto</h1>
      <p className="mt-4 text-sm text-slate-700">
        Completá el formulario o utilizá los datos de contacto para comunicarte
        con Terrasol S.A.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-[3fr,2fr]">
        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Nombre completo
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Empresa
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Teléfono
              </label>
              <input
                type="tel"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700">
              Asunto
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700">
              Mensaje
            </label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-emerald-700 px-6 py-2 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Enviar mensaje
          </button>
        </form>

        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Datos de contacto
            </h2>
            <p className="mt-2">
              Juncal 1408, Montevideo, Uruguay
              <br />
              Tel: (598) 2902 2632
              <br />
              Email: terrasol@adinet.com.uy
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Horario de atención
            </h2>
            <p className="mt-2">Lunes a viernes, de 9:00 a 18:00.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
