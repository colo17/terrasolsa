import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/empresa", label: "Empresa" },
  { to: "/maquinaria", label: "Maquinaria" },
  { to: "/repuestos", label: "Repuestos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/marcas", label: "Marcas" },
  { to: "/novedades", label: "Novedades" },
  { to: "/contacto", label: "Contacto" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-emerald-700" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.2em] text-emerald-700">
              TERRASOL
            </span>
            <span className="text-xs text-slate-600">
              Maquinaria Agroindustrial
            </span>
          </div>
        </Link>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span className="text-base">{open ? "✕" : "☰"}</span>
        </button>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `hover:text-emerald-700 ${
                  isActive ? "text-emerald-700" : "text-slate-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 ${
                    isActive ? "text-emerald-700" : "text-slate-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
