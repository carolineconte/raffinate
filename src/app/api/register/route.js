import mongoose from "mongoose";
import { User } from "@/models/User";

export async function POST(req, res) {

  mongoose.connect(process.env.MONGODB_URL)

  try {
    const newUser = await req.json();
    const { password, username } = newUser

    if (!username || !password) {
      return Response.json({ message: "Preencha todos os campos" });
    }

    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return Response.json({ message: "Username já existe, tente outro!" });
    }

    const userCreated = await User.create(newUser)

    return Response.json({ message: "Novo usuario registrado com sucesso", userCreated });

  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error" });
  }
}
