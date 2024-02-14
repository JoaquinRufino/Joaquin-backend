import fs from 'fs'
import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);


const app = express()
const port = 8080

app.listen(port, () => console.log("Servidor corriendo en el puerto", port))


app.use(express.urlencoded({extended:true}))



app.get("/", (req,res) => {

  res.send(users)

})


app.get("/home", (req,res) => {

  res.sendFile(path.resolve(__dirname, "./index.html"))

})

app.get("/usuario", (req,res) => {


    let user = {
      nombre: "mario",
      apellido:"ruiz",
      edad: 35,
      correo: "MarioRuiz@gmail.com"
    }

    res.json(user)

})

app.get("/usuario/:userId", (req,res) => {

  let userId = req.params.userId
  let limit = req.query.limit
  console.log(limit)

  let data = users.find((user) => (user.id == userId))

  if (!data) return res.send("Usuario no encontrado")

  res.send(data)

})


app.get("/usuario", (req,res) => {

  let userName = req.query.name
  let finalName = userName.charAt(0).tpUpperCase() + userName.substring(1, userName.length)

  let data = users.find((user) => (user.name == finalName))

  if (!data) return res.send("Usuario no encontrado")

  res.send(data)

})



let users = [
  {id:1, name:"marcelo", lastname:"Roger" , gender: "m"},
  {id:2, name:"lucia", lastname:"Maidana" , gender: "f"},
  {id:3, name:"raul", lastname:"Perez" , gender: "m"},
  {id:4, name:"martina", lastname:"Recalde" , gender: "f"},
];





const PATH = "./Usuarios.json"

class ManagerUsuarios{

  constructor(path){

    path = this.path

  }

  consultarUsuarios = async() => {
    const data = await fs.promises.readFile(PATH, 'utf-8')
    const users = JSON.parse(data)

    return users
  }

  crearUsuario = async(usuario) => {
    usuario.id = 0
    const users = await this.consultarUsuarios()
    
    if (users.length === 0){
        usuario.id = 1
    }else{
      usuario.id = users[users.length-1].id+1
    }

    users.push(usuario)

    await fs.promises.writeFile(PATH, JSON.stringify(users, null , "\t"))
    return usuario

  }
}

const Usuarios = new ManagerUsuarios()

let user = {

  nombre: "Jorge",
  apellido: "Dominguez",
  edad: 34 
}

await Usuarios.crearUsuario(user)
