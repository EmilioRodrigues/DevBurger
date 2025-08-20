/*
- store => cadastrar/ adicionar
- index => listar vários
- show => listar apenas um
- update => Atualizar
- delete => deletar/ remover
*/

import { v4 } from "uuid";

import User from "../models/User";

class UserController {
  async store(request, response) {
    const { name, email, password_hash, admin } = request.body;

    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    });

    return response.status(201).json(user);
  }
}

export default new UserController();
