const personas = {
    nombre: "Ana",
    edad: 25,
    ocupacion: "Ingeniera",
    ciudad: "Madrid"
};

for (persona in personas){
    console.log(`${persona} : ${personas[persona]}`)
}
