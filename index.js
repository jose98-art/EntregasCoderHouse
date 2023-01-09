class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  agregarProducts(title, description, price, thumbnail, code, stock) {
    const product = {
      id: this.#generarId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);
  }

  validacionProducts(codeProduct) { 
    let field = false;
    this.products.forEach(codeProd => {
      codeProd.code === codeProduct.code && (field = true)
    });
    if (!field) {
      if (
        codeProduct.title !== "" &&
        codeProduct.description !== "" &&
        codeProduct.price !== "" &&
        codeProduct.thumbnail !== "" &&
        codeProduct.code !== "" &&
        codeProduct.stock !== ""
      ) {
        return true;
      } else {
        return console.log(
          "Se han detectado campos vacíos, por favor llenarlos"
        );
      }
    } else {
        return console.log(`Producto existente, ${products.title}`)
    }
  }

  addProduct(product){
    const validarProduct = this.validacionProducts(product)
    if(validarProduct === true){
      
         return `Se ha guardado el producto correctamente`
    }else{
        return validarProduct
    }
  }

  getProductById(id){
    return this.products.find(product => product.id === id) || `El producto no existe`
  }
  
  #generarId() {
    let id = 1;
    if (this.products.length !== 0) {
      id = this.products[this.products.length - 1].id + 1;
    }
    return id;
  }

}


const productos = new ProductManager()

const prod1 = productos.agregarProducts('Tenis',
     'Tenis Converse', 
     1500,
     'imgA', 
     12978,
        3)
const prod2 = productos.agregarProducts('Playera',
     'Playera Converse', 
     500,
     'imgB', 
     12978,
        3)
const prod3 = productos.agregarProducts('Pantalon',
     'Pantalon Converse', 
     1900,
     'imgc', 
     15778,
        9)
const prod4 = productos.agregarProducts('Camisa',
        'Camisa Converse', 
        500,
        'imgB', 
        14278,
           3)
const prod5 = productos.agregarProducts('Mochila','','','','','')


console.log(productos.getProducts())
console.log(productos.getProductById(2))
console.log(productos.getProductById(7))
console.log(productos.addProduct(1))
console.log(productos.addProduct(5))
