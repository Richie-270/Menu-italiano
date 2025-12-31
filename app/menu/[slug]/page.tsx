interface Menuitem {
    name: string;
    description: string;
    price: string;
}

const DataMenu: Record<string, Menuitem[]> = {
    pasta: [
        { name: "Lasagna", description: "Capas de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "22.00$" },
        { name: "Carbonara", description: "Pasta con salsa cremosa de huevo, queso, panceta y pimienta negra. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "22.00$" },
        { name: "Fetuccine", description: "Capas Pasta larga y plana, suave y cremosa, ideal para salsas espesas como Alfredo. larga y plana, suave y cremosa, ideal para salsas espesas como Alfredo. con salsa cremosa de huevo, queso, panceta y pimienta negra. pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "22.00$" },
        { name: "Ravioli", description: "Capas Pasta rellena de queso, carne o vegetales, servida con salsa suave o de tomate. pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "22.00$" },
        { name: "Tagliatelle con tocino y champiñones", description: "Pasta larga acompañada de tocino dorado y champiñones en una salsa cremosa. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "22.00$" },
    ],

    pizza : [
        { name: "Margherita", description: "Pizza clásica con salsa de tomate, mozzarella fresca y albahaca. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "18.00$" },
        { name: "Pepperoni", description: "Mozzarella italiana y pepperoni curado sobre base de tomate artesanal. clásica con salsa de tomate, mozzarella fresca y albahaca. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "18.00$" },
        { name: "Quattro Formaggi", description: "ProscMozzarella, gorgonzola, parmesano y ricotta sobre base de tomate.iutto, piña fresca y mozzarella fundida en salsa de tomate.Pizza clásica con salsa de tomate, mozzarella fresca y albahaca. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "18.00$" },
        { name: "Pizza Vegetariana", description: "Verduras frescas salteadas, aceitunas y mozzarella italiana.", price : "18.00$"  },
    ],

    antipasti : [
        { name: "Bruschetta al Pomodoro", description: "Pizza clásica con salsa de tomate, mozzarella fresca y albahaca. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "18.00$" },
        { name: "Caprese", description: "Mozzarella italiana y pepperoni curado sobre base de tomate artesanal. clásica con salsa de tomate, mozzarella fresca y albahaca. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "18.00$" },
        { name: "Prosciutto e Melone", description: "ProscMozzarella, gorgonzola, parmesano y ricotta sobre base de tomate.iutto, piña fresca y mozzarella fundida en salsa de tomate.Pizza clásica con salsa de tomate, mozzarella fresca y albahaca. de pasta rellenas con carne o verduras, salsa de tomate y queso gratinado al horno", price: "18.00$" },
        { name: "Carpaccio di Manzo", description: "Verduras frescas salteadas, aceitunas y mozzarella italiana.", price : "18.00$"  },
         { name:"Olive Miste", description: "Mix de aceitunas marinadas en hierbas aromáticas.", price : "18.00$"  },
    ]
}

interface Props {
    params: Promise<{ slug: string }>
}

export default async function Menu({ params }: Props) {
    const { slug } = await params; 
    const items = DataMenu[slug];

    return (
        <>
            {items?.map((item, index) => (
                <main key={index} className="w-full max-w-[1200px] mx-auto p-4 sm:p-7 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 mt-10">
                    <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
                    <p>{item.description}</p>
                    <p className="text-lg font-semibold">{item.price}</p>
                </div>
                </main>
               
            ))}
        </>
    )
}