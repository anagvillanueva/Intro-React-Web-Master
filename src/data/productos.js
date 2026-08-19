//Generamos un arreglo estatico de 5,000 elementos
//Buscamos simular un dataset grande 

export const productosIniciales = Array.from({ length: 5000 }, (_, index) => ({

    //Calculamos un ID unico (se va incremento)
    id: index + 1,

    nombre: `Producto ${index + 1} - ${
        ['Laptop', 'Smartphone', 'Teclado', 'Monitor', 'Auriculares'][index % 5]
    }`,
    // Divide el indice entre 5 y usa el residuo para escoger entre los 5 tipos de productos

    categoria: ['Electrónica', 'Accesorios', 'Hogar'][index % 3],

    precio: Math.floor(Math.random() * 1000) + 10,
}));