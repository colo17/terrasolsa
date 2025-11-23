export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Terrasol S.A. · Todos los derechos reservados.
        </div>
        <div className="text-xs text-slate-500">
          Juncal 1408, Montevideo · Tel: (598) 2902 2632 · Email: terrasol@adinet.com.uy
        </div>
      </div>
    </footer>
  );
}
