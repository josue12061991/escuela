import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Eye,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

const items = [
  {
    titulo: "Historia",
    icono: BookOpen,
    texto:
      "Smart Kids nació hace 18 años como una cuna dedicada al cuidado y formación inicial de los más pequeños. Con esfuerzo y compromiso, creció junto a las familias, ampliando sus servicios hasta consolidarse como una institución educativa con nivel primario.",
  },
  {
    titulo: "Visión",
    icono: Eye,
    texto:
      "Ser una institución educativa referente en formación integral, reconocida por promover valores, excelencia académica e innovación, formando estudiantes capaces de desenvolverse con responsabilidad, creatividad y compromiso en una sociedad en constante transformación.",
  },
  {
    titulo: "Misión",
    icono: Target,
    texto:
      "Brindar una educación de calidad basada en valores, desarrollando las capacidades académicas, sociales y emocionales de nuestros estudiantes, mediante una enseñanza innovadora y un acompañamiento cercano que favorezca su crecimiento integral.",
  },
  {
    titulo: "Propuesta educativa",
    icono: Lightbulb,
    texto:
      "Ofrecemos una educación integral que combina aprendizaje significativo, desarrollo de valores, innovación pedagógica y atención personalizada, fomentando el pensamiento crítico, la creatividad y las habilidades necesarias para afrontar los desafíos del futuro.",
  },
];

export default function About() {
  return (
    <>
      {/* Encabezado */}
      <header className="">
        <div className="flex items-center gap-3">
          <span className="h-0.5 w-8 bg-orange-400 lg:w-12" />
          <h2 className="text-lg font-semibold text-orange-400 md:text-xl lg:text-2xl xl:text-3xl">
            Sobre nosotros
          </h2>
        </div>

        <h3 className="mt-2 text-2xl font-extrabold uppercase md:text-3xl lg:text-4xl xl:text-5xl">
          Institución <span className="text-blue-500">Educativa</span>
        </h3>

        <p className="mt-3 hidden text-sm font-light text-letras md:text-base md:flex lg:text-lg xl:text-xl">
          Más de 15 años formando niños con valores, excelente formación
          integral y con las cualidades de un mundo moderno.
        </p>
      </header>

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-12 ">
            {/* Imagen circular */}
            <article className="justify-center items-center hidden md:flex relative mx-auto aspect-square w-full max-w-xs md:max-w-sm lg:max-w-md ">
                    {/* Arco amarillo */}
                    <span className=" absolute inset-12 rounded-full  border-4 border-transparent border-l-orange-400 border-t-orange-400" />

                    {/* Anillo azul + foto */}
                    <div className=" relative h-[70%] w-[70%] rounded-full border-2 border-blue-700/70 p-2">
                            <div className=" relative size-full overflow-hidden rounded-full">
                                <Image
                                    src="/secretaria.png"
                                    alt="Atención al usuario"
                                    fill
                                    sizes="(max-width: 600px) 320px, 320px"
                                    className="object-cover"
                                />
                            </div>
                    </div>

                    {/* Insignia gorro de graduación */}
                    <div className="absolute left-10 bottom-20 flex size-20 items-center justify-center rounded-full border-2 border-blue-800 bg-[#0f2247] shadow-lg md:size-20">
                        <span className="pointer-events-none absolute -inset-1.5 rounded-full border-4 border-transparent border-l-orange-400" />
                        <GraduationCap className="size-9 text-white md:size-11" />
                    </div>
            </article>

        {/* Estadísticas + acordeones */}
        <article>
          {/* Estadísticas */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-xl border bg-gray-300 backdrop-blur-md dark:border-blue-700 dark:bg-blue-950/60 p-2">
                <span className="flex p-2 items-center justify-center rounded-full bg-blue-600">
                  <Users className=" text-white" />
                </span>
                <div>
                  <p className="text-base font-bold md:text-xl">17+</p>
                  <p className="text-base text-[#121213] dark:text-blue-300 md:text-lg">
                    años de trayectoria
                  </p>
                </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border bg-gray-300 backdrop-blur-md dark:border-orange-400/70 dark:bg-orange-950/20 p-2 ">
              <span className="flex p-2 items-center justify-center rounded-full bg-orange-400">
                <GraduationCap className="text-slate-900" />
              </span>
              <div>
                <p className="text-base font-bold md:text-xl">200+</p>
                <p className="text-base text-[#121213] dark:text-orange-300 md:text-lg">
                  estudiantes activos
                </p>
              </div>
            </div>
          </div>

          {/* Acordeones */}
          <div className="mt-4 flex flex-col gap-3">
            {items.map(({ titulo, icono: Icono, texto }) => (
              <details
                key={titulo}
                name="institucional"
                className="group rounded-xl border border-gray-500 dark:border-blue-900 bg-white/10 dark:bg-[#0d1d3d]"
              >
                <summary className="flex p-2 cursor-pointer list-none items-center gap-4  font-semibold md:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-900/70">
                    <Icono className="size-4 text-blue-300" />
                  </span>
                  {titulo}
                  <ChevronDown className="ml-auto size-4 transition-transform duration-300 group-open:rotate-180" />
                </summary>

                <p className="font-light px-4 pb-4 text-sm leading-relaxed text-letras md:px-[4.5rem] md:text-base">
                  {texto}
                </p>
              </details>
            ))}
          </div>

          {/* Botón */}
          <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#1153aa] dark:bg-orange-400 px-6 py-3 font-semibold text-white  transition hover:bg-orange-300">
            Conocer más
            <ArrowRight className="size-5" />
          </button>
        </article>
      </div>
    </>
  );
}