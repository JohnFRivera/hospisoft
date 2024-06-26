import { Router } from "express";
import { getUsuarios, postUsuarios, putUsuarios, deleteUsuario, loginUser} from "../controller/usuario.controller.js";
const usuario = Router()

usuario.get("/usuario/listing", getUsuarios)
usuario.post("/usuario/add", postUsuarios)
usuario.put("/usuario/edit/:id", putUsuarios)
usuario.delete("/usuario/delete/:id", deleteUsuario)
usuario.post("/usuario/login", loginUser)

export default usuario