import Image from "next/image";

interface Menuitem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

const DataMenu: Record<string, Menuitem[]> = {
  pasta: [
    {
      name: "Lasagna",
      description:
        "Capas de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno",
      price: "22.00$",
      image: "/pasta/lasagna.jpg",
    },
    {
      name: "Carbonara",
      description:
        "Pasta con salsa cremosa de huevo, queso, panceta y pimienta negra. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno",
      price: "22.00$",
      image: "/pasta/carbonara.jpg",
    },
    {
      name: "Fetuccine",
      description:
        "Fettuccine en cremosa salsa Alfredo con mantequilla, nata y parmesano.",
      price: "22.00$",
      image: "/pasta/fetuccine.jpg",
    },
    {
      name: "Ravioli",
      description:
        "Capas Pasta rellena de queso, carne o vegetales, servida con salsa suave o de tomate. pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno",
      price: "22.00$",
      image: "/pasta/ravioli.jpg",
    },
  ],

  pizza: [
    {
      name: "Margherita",
      description:
        "Pizza clásica con salsa de tomate, mozzarella fresca y albahaca. de pasta rellenas con carne o verduras, y queso gratinado al horno",
      price: "18.00$",
      image: "/pizza/pizza-Margherita.jpg",
    },
    {
      name: "Pepperoni",
      description:
        "Mozzarella italiana y pepperoni curado sobre base de tomate artesanal, mozzarella fresca.",
      price: "18.00$",
      image: "/pizza/Pepperoni.jpg",
    },
    {
      name: "Quattro Formaggi",
      description:"Mozzarella, gorgonzola, parmesano y ricott.",
      price: "18.00$",
      image: "/pizza/cuatro-quesos.jpg",
    },
    {
      name: "Pizza Vegetariana",
      description:
        "Verduras frescas salteadas, aceitunas y mozzarella italiana.",
      price: "18.00$",
      image: "/pizza/Vegetariana.jpg",
    },
  ],

  antipasti: [
    {
      name: "Bruschetta al Pomodoro",
      description:
        "PPan artesanal tostado, cubierto con tomate fresco en cubos, ajo, albahaca y un toque de aceite de oliva extra virgen.",
      price: "18.00$",
      image: "/antipasti/Bruschetta-al-Pomodoro.jpg",
    },
    {
      name: "Caprese",
      description:
        "Finas rodajas de tomate fresco y mozzarella italiana, acompañadas de albahaca y aceite de oliva extra virgen.",
      price: "18.00$",
      image: "/antipasti/Caprese.jpg",
    },
    {
      name: "Prosciutto e Melone",
      description:
        "Delicado jamón prosciutto italiano servido con melón fresco, una combinación suave y refrescante.",
      price: "18.00$",
      image: "/antipasti/Prosciutto-e-Melone.png",
    },
    {
      name: "Carpaccio di Manzo",
      description:
        "Finas láminas de res cruda, aderezadas con aceite de oliva, limón, parmesano y rúcula fresca.",
      price: "18.00$",
      image: "/antipasti/Carpaccio-di-Manzo.jpg",
    },
  ],

  secondiPiatti: [
    {
      name: "Pollo alla Parmigiana",
      description:
        "Pechuga de pollo empanizada con salsa de tomate y queso gratinado.",
      price: "28.00$",
      image: "/secondipiatti/pollo-alla-parmesano.jpg",
    },
    {
      name: "Salmone alla Griglia",
      description: "Salmón a la parrilla con limón y hierbas italianas.",
      price: "32.00$",
      image: "/secondipiatti/Salmone-alla-Griglia.jpg",
    },
    {
      name: "Bistecca alla Griglia",
      description:
        "Corte de res a la parrilla acompañado de vegetales salteados.",
      price: "35.00$",
      image: "/secondipiatti/bistec-alla-grilla.jpg",
    },
    {
      name: "Orata al Forno",
      description:
        "Dorada al horno con hierbas aromáticas, aceite de oliva y limón, servida jugosa y llena de sabor.",
      price: "35.00$",
      image: "/secondipiatti/orata-al-horno.jpg",
    },
  ],

  postres: [
    {
      name: "Tiramisù",
      description: "Clásico postre italiano de café, mascarpone y cacao.",
      price: "15.00$",
      image: "/postres/tiramisu.jpg",
    },
    {
      name: "Panna Cotta",
      description: "Crema cocida con salsa de frutos rojos.",
      price: "14.00$",
      image: "/postres/Panna-Cotta.jpg",
    },
    {
      name: "Gelato Artigianale",
      description: "Helado artesanal italiano (vainilla, chocolate o fresa).",
      price: "12.00$",
      image: "/postres/helado.jpg",
    },
    {
      name: "Cannoli Siciliani",
      description:
        "Crujientes tubos de masa rellenos de crema dulce de ricotta, con un toque de vainilla y chocolate.",
      price: "12.00$",
      image: "/postres/Cannoli-Siciliani.jpg",
    },
  ],

  bebidas: [
    {
      name: "Agua Mineral",
      description: "Agua mineral con o sin gas.",
      price: "6.00$",
      image: "/bebidas/agua-mineral.jpg",
    },
    {
      name: "Limonata Italiana",
      description: "Limonada natural al estilo italiano.",
      price: "8.00$",
      image: "/bebidas/Limonada.jpg",
    },
    {
      name: "Coca-Cola",
      description: "Bebida gaseosa clásica.",
      price: "7.00$",
      image: "/bebidas/coca-cola.jpg",
    },
    {
      name: "Vino de la Casa",
      description: "Copa de vino tinto o blanco.",
      price: "12.00$",
      image: "/bebidas/vino.jpg",
    },
  ],
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Menu({ params }: Props) {
  const { slug } = await params;
  const items = DataMenu[slug];

  return (
    <main className="w-full max-w-[1200px] shadow-2xl mx-auto p-4 sm:p-7 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 mt-10">
        {items?.map((item, index) => (
          <article
            key={index}
            className="relative bg-gray-100/50 border rounded-2xl h-full flex flex-col justify-between transition-transform duration-300 hover:scale-105 overflow-hidden p-4">
            <div className="flex-1">
              <h2 className="text-2xl text-center font-semibold text-gray-800">
                {item.name}
              </h2>

              {item.image && (
                <div className="relative mt-3 w-full h-[500px] bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              <p className="mt-5 text-center text-gray-600 text-lg leading-relaxed mb-4 line-clamp-3">
                {item.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xl font-bold text-center">{item.price}</p>
              <button className="w-full bg-green-600 hover:bg-green-700 border-2 border-red-600 hover:border-red-700 text-white text-xl font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Agregar
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
