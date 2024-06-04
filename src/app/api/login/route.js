import mongoose from "mongoose"
import { User } from "@/models/User"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function POST(req) {

  mongoose.connect(process.env.MONGODB_URL)

  try {
    const { username, password } = await req.json();

    // Verificação de se os campos estão presentes
    if (!username || !password) {
      return Response.json({ message: "Preencher todos os campos!" });
    }

    const user = await User.findOne({ username });

    // Verifica se o usuário existe
    if (!user) {
      return Response.json({ message: "Username nao encontrado" });
    }

    const passwordConf = bcrypt.compareSync(password, user.password);

    // Gera o token de acesso
    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '3h',
    });

    if (passwordConf) {
      return Response.json({ user, token }); // Retorna o usuário como JSON
    } else {
      return Response.json({ message: "Username ou senha incorretos" });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Erro no sistema, por favor tentar mais tarde" });
  }
}

