import {
  FaFacebook,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapPin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#192a48] text-white px-6 sm:px-12 lg:px-24 py-12">
      {/* Contacto y mapa */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Información de contacto */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold border-b-2 border-red-600 pb-2 max-w-max">
            Contacto
          </h2>
          <ul className="space-y-4 text-gray-200 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <FaMapPin className="text-red-600 mt-1 text-xl flex-shrink-0" />
              <p>
                Av. Javier Méndez Aponte 1, Fracc. Servidor Agrario,<br /> C.P. 39070
                <br />Chilpancingo de los Bravo, Gro.
              </p>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-600 text-lg flex-shrink-0" />
              <a href="mailto:rectoria@uagro.mx" className="hover:underline">
                rectoria@uagro.mx
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-red-600 text-lg flex-shrink-0" />
              <a href="tel:+017474719310" className="hover:underline">
                01 (747) 471-93-10 Ext. 3000
              </a>
            </li>
          </ul>
        </div>

        {/* Mapa */}
        <div className="lg:w-1/3 h-52 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Ubicación UAGro"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.3268960490554!2d-99.5049153!3d17.5396163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cbec8119393997%3A0xfb7889fed3fba456!2sRector%C3%ADa%20%7C%20UAGro!5e0!3m2!1ses-419!2smx!4v1752106864826!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="max-w-7xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold border-b-2 border-red-600 pb-2 max-w-max mb-6">
          Síguenos
        </h2>
        <ul className="flex flex-wrap gap-8 items-center text-white text-lg">
          <li>
            <a
              href="https://www.facebook.com/UAGro.MX.Oficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
              <span className="hidden sm:inline font-medium">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/uagro_mx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <img
                src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png"
                alt="X Logo"
                width="20"
                height="20"
                className="inline-block"
              />
              <span className="hidden sm:inline font-medium">(Twitter)</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@UAGroMx1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-red-500 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl" />
              <span className="hidden sm:inline font-medium">YouTube</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
