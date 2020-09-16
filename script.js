class Pelicula{
    constructor(id, titulo, director, año, pais, genero, calificacion){
        this.id = id
        this.titulo = titulo
        this.titulo = titulo
        this.director = director
        this.año = año
        this.pais = pais
        this.genero = genero
        this.calificacion = calificacion
        this.validarIMDB(id)
    }
    validarCadena(valor){
        if(!valor) return console.error("No se ha ingresado ningun valor")
        if(typeof valor !== "string") return console.error("El dato ingresado no es una cadena de texto")
        return true
    }

    validarLongitudCadena(propiedad, valor, longitud){
        // if(valor.length)  NO ME TOMA LA PROPIEDAD LENGTH 

    }

    validarIMDB(id){
        if(this.validarCadena(id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`${id} no es valido,debe tener 9 caracteres, los 2 primeros
            letras minúsculas, los 7 restantes deben ser números`)
        }
    }
}


const peli1 = new Pelicula("tt1234567","avatar")
