class ProductManager {
  constructor() {
      this.products = [];
      this.nextProductId = 1; //Variable ID Autoincrementable
  }


  //Método addProduct
  addProduct(title, description, price, thumbnail, code, stock) {
      //Validación campos vacíos
      if (!title || !description || !price || !thumbnail || !code || !stock) {
          console.log("Completa todos los campos.");
          return;
      }
      //Verificación de código en uso
      const isCodeTaken = this.products.some(product => product.code === code);
      if (isCodeTaken) {
          console.log("El código ya está en uso.");
          return;
      }
      //Nuevo producto
      const newProduct = {
          id: this.nextProductId++,
          title,
          description,
          price,
          thumbnail,
          code,
          stock
      };
      //Agregar nuevo producto
      this.products.push(newProduct);
  }
  //Método getProducts
  getProducts() {
      return this.products;
  }
  //Método getProductByID
  getProductByID(id) {
      const result = this.products.find(product => product.id === id);


      //Verificar si el producto con ID se encontró
      if (!result) {
          const mensaje = `Producto con ID ${id} no encontrado.`;
          return mensaje;
      }


      return result;
  }
}


//Test
const myProductManager = new ProductManager();
myProductManager.addProduct("Ropa 1", "Ropa de verano", 10.000, "thumbnail1.jpg", 20); //Campos Vacios
myProductManager.addProduct("Ropa 2", "Ropa de verano", 5.000, "thumbnail1.jpg", "codigo1", 20);//Creación
myProductManager.addProduct("Ropa 3", "Ropa invierno", 20.500, "thumbnail2.jpg", "codigo2", 30);//Creación
myProductManager.addProduct("Ropa 4", "Ropa invierno", 8.000, "thumbnail1.jpg", "codigo1", 10);//CreaciónRepetido


const productList = myProductManager.getProducts();
console.log(productList);
const productByID1 = myProductManager.getProductByID(1); // ID ¿Existe?
const productByID2 = myProductManager.getProductByID(2); // ID ¿Existe?
const productByID3 = myProductManager.getProductByID(9); // ID ¿Existe?
console.log(productByID1);
console.log(productByID2);