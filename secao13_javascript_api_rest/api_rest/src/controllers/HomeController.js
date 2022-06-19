import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Angelita',
      email: 'maria@email.com',
      idade: 23,
      peso: 55.3,
      altura: 1.63,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
