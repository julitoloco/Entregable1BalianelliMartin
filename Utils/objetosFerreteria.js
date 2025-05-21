const electricidad = [
    {
        id: 1,
        nombre: "Lamparita", 
        categoria: "Electricidad",
        marca: "Philips",
        precio: 100,
        descripcion: "Lamparita de 60w",
        stock: 0,
    },
     {
        id: 2,
        nombre: "Térmica", 
        categoria: "Electricidad",
        marca: "Baw",
        precio: 1000,
        descripcion: "Térmica hasta 30 amp",
         stock: 10,
    },
     {
        id: 3,
        nombre: "Disyuntor", 
        categoria: "Electricidad",
        marca: "Samsung",
        precio: 1500,
        descripcion: "Disyuntor hasta 60 amp",
         stock: 5,
    },
]

const maquinarias = [
    {
        id: 4,
        nombre: "Taladro", 
        categoria: "Maquinarias",
        marca: "Makita",
        precio: 5000,
        descripcion: "Taladro de 10mm",
         stock: 0,
    },
     {
        id: 5,
        nombre: "Amoladora", 
        categoria: "Maquinarias",
        marca: "Bosch",
        precio: 7000,
        descripcion: "Amoladora de 115mm",
         stock: 10,
    },
     {
        id: 6,
        nombre: "Compresora", 
        categoria: "Maquinarias",
        marca: "Black & Decker",
        precio: 8000,
         stock: 20,
    }
]

let herramientas = [
    {
        id: 7,
        nombre: "Destornillador", 
        categoria: "Herramientas",
        marca: "Stanley",
        precio: 500,
        descripcion: "Destornillador de cruz",
         stock: 0,
    },
     {
        id: 8,
        nombre: "Martillo", 
        categoria: "Herramientas",
        marca: "DeWalt",
        precio: 800,
        descripcion: "Martillo de 500gr",   
         stock: 8,
     },
        {
            id: 9,
            nombre: "Pinza", 
            categoria: "Herramientas",
            marca: "Irwin",
            precio: 600,
            descripcion: "Pinza",
             stock: 30,
        }
    ]

    export const articulos = [
   ...electricidad, ...herramientas, ...maquinarias
]