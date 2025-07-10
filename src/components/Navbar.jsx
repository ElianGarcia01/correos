import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/uagro-logo-2024.png";

const routes = [
  { path: "/", name: "Inicio" },
  { path: "trabajadores", name: "Trabajadores" },
  { path: "estudiantes", name: "Estudiantes" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        !menuRef.current?.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      {/* Topbar con redes y teléfono */}
      <div className="w-full bg-[#2e456e] px-6 sm:px-12 lg:px-24 py-2 flex justify-center lg:justify-between items-center text-white text-sm select-none">
        <ul className="flex items-center space-x-6">
          <li>
            <a
              href="https://www.facebook.com/UAGro.MX.Oficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-lg" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/uagro_mx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <img
                src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png"
                alt="X Logo"
                className="w-5 h-5"
              />
            </a>
          </li>
        </ul>
        <div className="hidden md:block font-semibold tracking-wide">
          📞 01 (747) 471-93-10 Ext. 3000
        </div>
      </div>

      {/* Barra de navegación principal */}
      <nav className="bg-[#192a48] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-12 lg:px-24 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo UAGro"
              className="h-10 lg:h-12"
              draggable={false}
            />
          </Link>

          {/* Menú para escritorio */}
          <ul className="hidden lg:flex space-x-10 text-base font-medium tracking-wide">
            {routes.map(({ path, name }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-300 border-b-2 border-red-600 pb-1"
                      : "hover:text-red-400 transition-colors"
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa móvil */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="lg:hidden text-3xl focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden bg-[#192a48] px-6 pb-6 border-t border-red-600"
          >
            <ul className="flex flex-col space-y-3 text-base font-medium tracking-wide">
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 rounded text-gray-400"
                        : "block px-4 py-2 rounded transition-colors"
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
