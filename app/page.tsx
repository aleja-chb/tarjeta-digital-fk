import {
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E9EEF6] p-4 sm:p-6 overflow-y-auto">

      <div className="w-full max-w-7xl min-h-screen mx-auto rounded-[20px] shadow-2xl overflow-visible">

        <div className="relative w-full min-h-screen">

          {/* BACKGROUND IMAGE */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden"></div>

          <img
            src="/Fondo2.png"
            alt="Background"
            className="
              absolute top-0 left-0
              w-full
              h-[850px]
              object-cover
              object-center
              scale-105
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06098d]/40 via-transparent to-black/30" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />
          </div>

          {/* LOGO */}
          <img
            src="/LogoFk.png"
            alt="Logo FK"
            className="
              fixed sm:absolute
              top-4 left-4
              w-[70px] sm:w-[100px] md:w-[120px]
              object-contain
              z-50
              drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]
            "
          />

          {/* CONTENEDOR INFO */}
          <div
            className="
              relative z-20
              mt-24 sm:mt-20 md:mt-16
              mx-auto md:ml-auto md:mr-10 lg:mr-16

              w-[92%] sm:w-[600px] md:w-[760px] lg:w-[900px]

              rounded-[20px]
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]

              p-6 sm:p-8 md:p-10

              flex flex-col gap-6
            "
          >

            {/* PROFILE SECTION */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">

              {/* AVATAR */}
              <div className="relative flex-shrink-0">

                <div className="w-36 h-36 sm:w-52 sm:h-52 relative flex items-center justify-center">

                  {/* ARO DEGRADADO */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <linearGradient
                        id="blueGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#3235E5" />
                        <stop offset="50%" stopColor="#4F8CFF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3235E5" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>

                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="url(#blueGradient)"
                      strokeWidth="4"
                      strokeDasharray="220 90"
                      transform="rotate(-90 50 50)"
                    />

                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3235E5"
                      strokeOpacity="0.15"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* FOTO */}
                  <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-white z-10">
                    <img
                      src="/Fotoperfil.png"
                      alt="Foto de perfil"
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>
              </div>

              {/* INFO */}
              <div className="flex flex-col text-left min-w-0">

                <h1 className="text-2xl sm:text-3xl font-bold text-[#14155b] break-words">
                  Alejandro Chavarro
                </h1>

                <div className="w-12 h-1 bg-green-500 rounded-full mt-1 mb-3"></div>

                <p className="text-base sm:text-lg text-gray-700">
                  Gerente Comercial y de Operaciones
                </p>

                <div className="flex items-center gap-2 text-gray-600 mt-1 text-xs sm:text-base">
                  <FaMapMarkerAlt className="text-[#3235E5] text-xs flex-shrink-0" />

                  <span>
                    Cali | Valle del Cauca
                  </span>
                </div>

                <a
                  href="mailto:alejandro.chavarro@papelerafk.com.co"
                  className="flex items-center gap-2 mt-2 text-blue-600 underline min-w-0"
                >
                  <img
                    src="/Sobre.svg"
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  />

                  <span className="text-sm sm:text-base break-all">
                    alejandro.chavarro@papelerafk.com.co
                  </span>
                </a>

              </div>
            </div>

            {/* ACTION CARDS */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-5
              "
            >

              {/* WHATSAPP */}
              <a
                href="https://wa.me/573166497637"
                target="_blank"
                className="
                  bg-white/90
                  backdrop-blur-xl
                  border border-white/40
                  rounded-[20px]
                  p-5

                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]

                  hover:-translate-y-1
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]

                  transition-all duration-300

                  flex flex-col items-center justify-center text-center
                "
              >
                <img
                  src="/whatsapp.svg"
                  className="w-9 h-9 object-contain"
                />

                <h3 className="font-bold text-lg mt-2">
                  WhatsApp
                </h3>

                <p className="text-[#3235E5] text-[10px] sm:text-sm font-semibold truncate">
                  316 649 7637
                </p>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:alejandro.chavarro@papelerafk.com.co"
                className="
                  bg-white/90
                  backdrop-blur-xl
                  border border-white/40
                  rounded-[20px]
                  p-5

                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]

                  transition-all duration-300 ease-out
                  transform-gpu

                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]

                  flex flex-col items-center justify-center text-center min-w-0
                "
              >
                <img
                  src="/Sobre.svg"
                  className="w-9 h-9 object-contain"
                />

                <h3 className="font-bold mt-2">
                  Enviar
                </h3>

                <p className="text-[#3235E5] text-[10px] sm:text-sm font-semibold truncate w-full">
                  Correo electrónico
                </p>
              </a>

              {/* WEB */}
              <a
                href="https://papelerafk.com.co"
                target="_blank"
                className="
                  bg-white/90
                  backdrop-blur-xl
                  border border-white/40
                  rounded-[20px]
                  p-5

                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]

                  transition-all duration-300 ease-out
                  transform-gpu

                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]

                  flex flex-col items-center justify-center text-center min-w-0
                "
              >
                <FaGlobe className="text-3xl text-[#3235E5] mx-auto" />

                <h3 className="font-bold mt-2">
                  Sitio Web
                </h3>

                <p className="text-[#3235E5] text-[10px] sm:text-sm font-semibold truncate">
                  papelerafk.com.co
                </p>
              </a>

              {/* AGREGAR CONTACTO */}
              <a
                href="/alejandro-chavarro.vcf"
                download
                className="
                  md:col-span-3
                  col-span-1

                  bg-[#3235E5]
                  hover:bg-[#2326c7]

                  text-white
                  font-semibold

                  rounded-[16px]

                  py-5 sm:py-4
                  px-6

                  text-base sm:text-sm

                  transition-all duration-300 ease-out
                  transform-gpu

                  flex items-center justify-center gap-3

                  shadow-[0_10px_30px_rgba(50,53,229,0.35)]

                  hover:scale-[1.01]
                  hover:-translate-y-1
                "
              >
                <span className="text-lg sm:text-lg">
                  +
                </span>

                <span>
                  Agregar a Contactos
                </span>
              </a>

            </div>

          </div>

          {/* BANNER INFERIOR */}
          <div className="relative z-20 w-full mt-10 bg-[#090C8E] py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-6">

            {/* CENTRO DISTRIBUCION */}
            <div className="flex items-center gap-4 w-full md:w-1/2">

              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <img
                  src="/Centrod.png"
                  className="w-15 h-15"
                />
              </div>

              <div>
                <h3 className="text-lime-400 font-bold text-sm uppercase">
                  Centro de Distribución
                </h3>

                <p className="text-white text-sm">
                  Calle 15 # 27A – 176 Bloque 10 Bodega 7
                  <br />
                  Zona Industrial Arroyo Hondo
                  <br />
                  Yumbo – Cali – Colombia
                </p>
              </div>

            </div>

            <div className="hidden md:block w-px h-16 bg-white/30"></div>

            {/* PUNTO DE VENTA */}
            <div className="flex items-center gap-4 w-full md:w-1/2">

              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <img
                  src="/Almacen.png"
                  className="w-8 h-8"
                />
              </div>

              <div>
                <h3 className="text-lime-400 font-bold text-sm uppercase">
                  Punto de Venta
                </h3>

                <p className="text-white text-sm">
                  Carrera 4 # 18-24
                  <br />
                  San Nicolás
                  <br />
                  Cali – Colombia
                </p>
              </div>

            </div>

          </div>

          {/* VIDEO CORPORATIVO */}
          <div className="relative z-20 w-full px-4 sm:px-8 pb-10 mt-8">

            <div
              className="
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                rounded-[24px]
                overflow-hidden
                shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              "
            >

              {/* TITULO */}
              <div className="px-6 pt-6">

                <h2 className="text-white text-xl sm:text-2xl font-bold">
                  Conoce Nuestra Empresa
                </h2>

                <p className="text-white/70 text-sm mt-1">
                  Distribución, papelería y soluciones para impresión
                </p>

              </div>

              {/* VIDEO */}
              <div className="relative w-full pt-[56.25%] mt-4">

                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/MiogY-GoEJw?rel=0"
                  title="Video Corporativo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

              </div>

            </div>

          </div>

        </div>
      </div>

    </main>
  );
}