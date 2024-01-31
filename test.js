const ropa = [

    {
      remera: 15,

      pantalon: 25,

      zapatillas: 70,

      gorra: 5,


},

    {
        remera: 5,

        pantalon: 35,
  
        zapatillas: 30,
  
        gorra: 15,

    }

  ];

  const totalProductos = ropa.reduce((acumulador, ropa) => {

    Object.entries(ropa).forEach(([producto, cantidad]) => {

      acumulador[producto] = (acumulador[producto] || 0) + cantidad;

    });

    return acumulador;

  }, {});

  const listaProductos = Object.keys(totalProductos);

  console.log("Lista de productos:", listaProductos);

  console.log("Cantidad de cada producto:", totalProductos);