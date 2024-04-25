export const productos = [
    {
    id: 1,
    title: "COMEDERO DE PLÁSTICO",
    price: 980,
    description: "COMEDERO PLÁSTICO, CAPACIDAD 200 ML (13.5 X 13.5 X 4 CM)",
    category: "Accesorios",
    stock: 10,
    image: "https://dcdn.mitiendanube.com/stores/001/542/943/products/comedero-chico-plast-436078177fd831804917073358726702-640-0.webp",

    },
    {
    id: 2,
    title: "JUGUETE PARA GATOS",
    price: 3980,
    description: "RATONES DE HULE CON CHIFLE X4",
    category: "Accesorios",
    stock: 10,
    image: "https://dcdn.mitiendanube.com/stores/001/542/943/products/ratas-hule-06039db7093855314e17071525259024-480-0.webp", 
    },
    {
    id: 3,
    title: "COLCHONETAS",
    price: 20000,
    description: "COLCHONETAS TELA ANTI DESGARRO",
    category: "Accesorios",
    stock: 10,
    image: "https://dcdn.mitiendanube.com/stores/001/542/943/products/picsart_24-02-07_16-39-17-300-4c5abcfd1cb59ea52817073349481244-1024-1024.webp",
    },
    {
    id: 4,
    title: "EUKANUBA ADULT LARGE. 15kG",
    price: 45500,
    description: "Alimento balanceado completo para perros adultos de más de 12 meses de edad en el caso de razas grandes o 24 meses para razas gigantes.",
    category: "Alimentos",
    stock: 10,
    image: "https://dcdn.mitiendanube.com/stores/001/542/943/products/ar-l-eukanuba-packshot-adult-large-breed-4484ac3a5c546050bb17038640838975-1024-1024.webp",
    },
    {
    id: 5,
    title: "PRO PLAN STERILIZED GATO. 1kG",
    price: 13500,
    description: "Alimento completo y balanceado para gatos adultos castrados o esterilizados.",
    category: "Alimentos",
    stock: 10,
    image: "https://dcdn.mitiendanube.com/stores/001/542/943/products/gato_sterilize_frente_pro_plan-871f4967864ca1ff9817037956523372-640-0.webp",
    },
    {
    id: 6,
    title: "UNIK PERRO CACHORRO RAZA PEQUEÑA 7,5KG",
    price: 38500,
    description: "Ünik Pet Cachorros Talla Pequeña, cubre las necesidades del cachorro hasta los 10 meses de edad proporcionándole una nutrición precisa para favorecer su crecimiento y desarrollo, garantizando una buena palatabilidad y salud en general.",
    category: "Alimentos",
    stock: 10,
    image: "https://dcdn.mitiendanube.com/stores/001/542/943/products/unik-cachorro-chico-7-5-7a42a2cf544a1b099617049207585712-1024-1024.webp",
    },
    {
    id: 7,
    title: "MINI ALICATE TIJERA PARA PERROS Y GATOS",
    price: 2000,
    description: "Mini alicate tijera para perros y gatos",
    category: "Sale",
    stock: 2,
    image: "https://dcdn.mitiendanube.com/stores/001/542/943/products/cortaunas-5c61c04a9222f956d417073292368639-1024-1024.webp",
    },
    {
    id: 8,
    title: "PEINE PARA GATOS Y PERROS CON CERDAS PLASTICAS",
    price: 3000,
    description: " Peine para gatos y perros con cerdas plasticas",
    category: "Sale",
    stock: 3,
    image: "https://dcdn.mitiendanube.com/stores/001/542/943/products/peine-2c20c4294834dfdd3a17073296505595-1024-1024.webp",
    },
    {
    id: 9,
    title: "MANOPLA CARDINA QUITAPELOS PARA PERROS Y GATOS",
    price: 2800,
    description: "Manopla cardina quitapelos para perros y gatos",
    category: "Sale",
    stock: 1,
    image: "https://dcdn.mitiendanube.com/stores/001/542/943/products/manopla-91446051bf42d1786b17073261325565-480-0.webp",
    },
];



export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      const productosFiltrados = productos.filter(
        (prod) => prod.category === category
      );
      setTimeout(() => {
        resolve(productosFiltrados);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
      
      setTimeout(() => {
        resolve(productoFiltrado);
      }, 2000);
        
       });
  };