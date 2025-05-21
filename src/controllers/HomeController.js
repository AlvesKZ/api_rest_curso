import Aluno from "../models/Aluno.js";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Luiz",
      sobrenome: "Otavio",
      email: "luiz@gmail.com",
      idade: 112,
      peso: 300,
      altura: 2.30,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

