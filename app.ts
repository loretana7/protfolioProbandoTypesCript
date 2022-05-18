class Persona {
 private  nombre: string ;
 private apellido: string;
 private fechaNac? : Date; /*para no necesariamente tener la fecha de nacimiento le pongo el signo de pregunta*/
 constructor(nombre:string, apellido:string){
    this.nombre = nombre;
    this.apellido = apellido;
   }

 setNombre(nombre: string):void{
     this.nombre = nombre;
     }
getNombre(): string {
    return this.nombre;
   } 
setApellido(apellido: string):void{
    this.apellido = apellido;
  }
  getApellido(): string {
    return this.apellido;
   }
   setFechaNac(fechaNac: Date):void{ /*me deja asignar un valor al objeto fecha*/
       this.fechaNac= fechaNac;
   }
getFechaNac(): Date | undefined{/*me deja obtener los datos*/
    return this.fechaNac;
}
getEdad():number{ /*para calcular los años de la persona con la fecha de nacimiento.*/
    return 0;
}
 
 toString(): string {
     if(this.getFechaNac())
     return this.nombre + " " + this.apellido +" " + this.fechaNac;
     return this.nombre + " " + this.apellido;
    
 }


}
class Estudiante extends Persona{ /*un estudiante es una persona solo para ver herencia*/
carrera?:string;
setCarrera(carrera:string):void{  
    this.carrera=carrera;
     }
     toString():string{
         return super.toString()+ "  " + " Estudio" +" "+ this.carrera;
     }
}
function loadPersonas():void{/*crea los objetos los guardo en el arreglo y los muestro por la consola*/
    let personas: Persona[]= new Array;
 
    let persona: Persona = new Persona("Eustaquia","Pancracia");
    persona.setFechaNac(new Date(1990,7,5));
    personas.push(persona);

    persona = new Persona('armonia','luna');
    personas.push(persona);

 let estudiante :Estudiante= new Estudiante("Lorena","Benitez");/*creo el estudiante y lo guardo en el arreglo*/ 
    estudiante.setCarrera("Sistemas de Informacion");
    console.log(personas);
    personas.push(estudiante);

 personas.forEach(
     function(persona){
         console.log(persona.toString());
     }
 );
}