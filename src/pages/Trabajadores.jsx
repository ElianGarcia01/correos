import { FaAngleDoubleDown, FaPhone } from "react-icons/fa";
import SliderGoogle from "../components/SliderGoogle";

const pasos = [
  {
    id: 1,
    contenido: (
      <>
        Ingresa desde tu navegador a:{" "}
        <a
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          www.gmail.com
        </a>
      </>
    ),
  },
  {
    id: 2,
    contenido: (
      <>
        Tu correo electrónico está compuesto por tu número de{" "}
        <strong>empleado</strong> y terminación{" "}
        <span className="text-[#192a48] font-semibold">@uagro.mx</span>.
        <br />
        <strong>Ejemplo:</strong>{" "}
        <span className="text-gray-900 font-semibold">19001@uagro.mx</span>
        <br />
        En caso de contar con un número de empleado con 3 dígitos, agregamos dos
        ceros a la izquierda, ya que el correo está compuesto por{" "}
        <strong>5 dígitos</strong>.
        <br />
        Ingresa los datos y presiona <strong>'Siguiente'</strong>.
      </>
    ),
  },
  {
    id: 3,
    contenido: (
      <>
        La contraseña temporal de tu correo electrónico es tu{" "}
        <strong>fecha de nacimiento</strong>, con el formato{" "}
        <strong>día/mes/año</strong>. Dos números para el día, dos números para
        el mes y cuatro números para el año.
        <br />
        <strong>Ejemplo:</strong> Si naciste el 12 de febrero del 1967, tu
        contraseña sería{" "}
        <span className="text-gray-900 font-semibold">12021967</span>.
        <br />
        Ingresa los datos y presiona <strong>'Siguiente'</strong>.
      </>
    ),
  },
  {
    id: 4,
    contenido: (
      <>
        Como paso final para activar correctamente tu cuenta, es necesario que{" "}
        <strong>cambies la contraseña temporal</strong> a una contraseña que
        solo tú sepas.
        <br />
        Es importante que la contraseña tenga como mínimo{" "}
        <strong>8 dígitos</strong>, que contenga una{" "}
        <strong>letra mayúscula</strong> y <strong>tenga un número</strong>.
        <br />
        Esto con la finalidad de cumplir con los criterios de seguridad
        informática. Recuerda que la contraseña es{" "}
        <strong className="text-red-600">personal e intransferible</strong>.
      </>
    ),
  },
];

export default function Trabajadores() {
  return (
    <div className="w-full bg-[#f8fafc] text-gray-800 px-2 sm:px-8 md:px-12 lg:px-20 py-4">
      {/* TÍTULO PRINCIPAL */}
      <header className="text-center mb-5">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#192a48] mb-4">
          Activación del Correo Institucional para Trabajadores
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Guía para trabajadores de la UAGro
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Pasos */}
        <div className="space-y-6">
          {pasos.map((paso) => (
            <div
              key={paso.id}
              className="bg-white border border-[#e5e7eb] p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-base text-gray-700 leading-relaxed">
                <span className="text-[#2e456e] font-bold mr-2">
                  Paso {paso.id}.
                </span>
                {paso.contenido}
              </p>
            </div>
          ))}
        </div>

        {/* Video + ayuda */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              src="https://www.youtube.com/embed/Oa_zTFbbliY"
              title="Video de activación"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Sección ayuda */}
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-semibold text-[#2e456e] flex flex-col justify-center items-center gap-2">
              Mesa de ayuda para recuperar contraseña
              <FaAngleDoubleDown className="text-[#e53935] text-3xl animate-bounce" />
            </h3>
            <a
              href="https://trabajadoresmail.uagro.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e53935] hover:bg-red-700 text-white font-bold px-8 py-2 rounded-full transition shadow-md"
            >
              Ir a Mesa de Ayuda
            </a>
          </div>
          <div className="text-center mt-10 max-w-2xl mx-auto space-y-8 text-sm sm:text-base text-[#2e456e]">
            <p className="flex items-center justify-center gap-3 font-medium">
              <FaPhone className="text-[#192a48] text-2xl" />
              También ponemos a tu disposición nuestra línea telefónica:
            </p>
            <p>
              <strong>Tel: 747 47 193 10 ext. 4199</strong> <br />
              Horario: <strong>Lunes a Viernes de 9:00 a 17:00 hrs</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Línea y contacto */}
      <div className="mt-20 border-t-3 border-[#e53935] rounded"></div>

      {/* Slider de logos */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-24 lg:px-48 py-8">
        <SliderGoogle />
      </section>
    </div>
  );
}
