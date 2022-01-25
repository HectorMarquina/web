

//const save = () => {
  //const name = document.getElementById("name").value
    //const username = document.getElementById("username").value

    //console.log(name)
    //console.log(username)

    //result.innerHTML = `Hola ${name} tu nombre de usuario es ${username}`
//}


//const jsonMovie = [
    
  //  {
    //    name: "Bob Esponja",
      //  createBy: "1999-05-12",
        //author: "John Cena",
       // address: {
         //   street: "Palo Escrito",
           // number: 8
       // }
   // },

    //{
      //  name: "Spiderman",
        //createBy: "2021-12-12",
       // author: "Sony"
   // }
//]
//console.log(jsonMovie[0].name)



const petition = () => {
    fetch('http://example.com/movies.json')
        .then(response => response.json())
        .then(data => console.log(data));
}

const profile = {
    username: "ErickM",
    name: "Erick",
    surname: "Mireles",
    secondSurname: "Merchant",
    address: {
        street: "Palo Escrito",
        number: 10,
        longlat:{
            longitude: 166123,
            latitude: 15674355
        }
    },
    school:{
        name: "Universidad Tecnologica de Emiliano Zapata"
    },
    phone: "7771223425",
    email: "erickmireles@utez.edu.mx",
    photo: "https://www.drshaneholmes.com/wp-content/uploads/2020/03/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
}

//nombre, primer apellido, segundo apellido, correo y ubicacion

const {name,surname,secondSurname, photo, email,address:{longlat:{longitude,latitude}}} = profile;
 console.log(name);
 console.log(surname);
 console.log(secondSurname);
 console.log(longitude);
 console.log(latitude);
 console.log(email);
console.log(photo);
 const save = () => {
    const nombre = document.getElementById("result")
 
    result.innerHTML = `Hola ${name} tu primer apellido es ${surname}, tu segundo apellido es ${secondSurname}, tu correo es ${email}, tu latitud ${latitude}, tu longitud ${longitude}, tu longitud ${photo}`
}