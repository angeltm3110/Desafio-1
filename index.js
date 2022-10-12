

class Usuario{
    constructor(name,lastName,){
        this.nombre = name;
        this.apellido = lastName;
        this.libros= libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        return `hola soy ${this.nombre} , ${this.apellido}`
    }

    addMascotas(mascotas){
        this.mascotas.push(mascotas)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre,autor){
        this.libros.push({nombre:nombre,autor:autor})
    }

    getBooksNames(){
        return this.libros.map(e=>e.nombre)
    }

}

const persona1 = new Usuario("Angel", "Tirado", [{nombre:"Yo Antes de Ti", autor:"Jojo Moyes"}],["Perro,gato"])
console.log(persona1.getFullName());
persona1.addMascotas("Mono")
console.log(persona1.mascotas);
console.log(persona1.countMascotas());
persona1.addBook("Harry Potter" ,"J. K. Rowling");
persona1.addBook("Cien Años de Soledad" ,"Gabriel G Marquez");
console.log(persona1.libros);
console.log(persona1.getBooksNames());




 






 



