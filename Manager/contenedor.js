// import fs from 'fs';
// const path = './files/productos.json'

// class Contenedor{

//     getAll = async() =>{
//         try {
//             if(fs.existsSync(path)){      
//                 let fileData = await fs.promises.readFile(path,'utf-8');
//                 let lista = JSON.parse(fileData);
//                 return lista;
//             }else{
//                 return [];
//             }
//         } catch (error) {
//             console.log("Hay un error " + error)
//         }
//     }

//     save = async(producto) =>{
//         try {
//             let lista = await this.getAll();
//             if(lista.length===0){
//                 producto.id= 1;
//                 lista.push(producto);
//                 await fs.promises.writeFile(path,JSON.stringify(lista,null,'\t'));
//             }else{
//                 producto.id = lista[lista.length-1].id+1
//                 lista.push(producto)
//                 console.log(producto)
//                 await fs.promises.writeFile(path,JSON.stringify(lista,null,'\t'))
//             }
//         } catch (error) {
//             console.log("Hay un error: "+ error )
//         }
//     }

 
// }

// export default Contenedor;

import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'castanedalondonod@gmail.com', // generated ethereal user
      pass: 'jkthqsrkbmmsrdqv', // generated ethereal password
    },
  });

  transporter.verify().then(() =>{
    console.log('LISTO PARA ENVIAR MENSAJES ')
  })
export default  transporter