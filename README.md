# 🍕 Menu Italiano

Menú digital interactivo para un restaurante italiano, construido con **Next.js 15**, **TypeScript** y **Tailwind CSS**. Permite a los clientes explorar las categorías del menú con imágenes, descripciones y precios en una interfaz limpia y responsiva.

🔗 **Demo en vivo:** [menu-italiano.vercel.app](https://menu-italiano.vercel.app)

---

## ✨ Características

- Navegación por categorías: Pasta, Pizza, Antipasti, Secondi Piatti, Postres y Bebidas
- Rutas dinámicas con App Router de Next.js (`/menu/[slug]`)
- Imágenes optimizadas con el componente `next/image`
- Diseño responsivo adaptado a móvil y escritorio
- Animaciones suaves con Tailwind CSS (`hover:scale`, `transition`)

---

## 🛠️ Tecnologías

| Tecnología | Versión |
|---|---|
| Next.js | ^16.1.4 |
| React | ^18.2.0 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| Lucide React | ^0.562.0 |
| Node.js | 20.x |

---

## 📁 Estructura del proyecto

```
Menu-italiano/
├── app/
│   ├── page.tsx          # Página principal con grid de categorías
│   ├── layout.tsx        # Layout global
│   └── menu/
│       └── [slug]/
│           └── page.tsx  # Página dinámica por categoría
├── public/
│   ├── antipasti/
│   ├── bebidas/
│   ├── food-grid/
│   ├── pasta/
│   ├── pizza/
│   ├── postres/
│   └── secondipiatti/
├── package.json
└── tsconfig.json
```

---

## 🚀 Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Richie-270/Menu-italiano.git

# 2. Entrar al directorio
cd Menu-italiano

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📦 Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter con ESLint
```

---

## 🌐 Deploy

El proyecto está desplegado en **Vercel** con deploy automático al hacer push a la rama `main`.

---

## 👨‍💻 Autor

**Ricardo** — [@Richie-270](https://github.com/Richie-270) · [LinkedIn](https://linkedin.com/in/ricardodev27)
