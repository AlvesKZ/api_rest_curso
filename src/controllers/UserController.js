import User from "../models/User.js";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error("Erro no store:", e);
      return res.status(400).json({
        errors: e?.errors?.map((err) => err.message) || [e.message || "Erro inesperado"],
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      return res.json(users);
    } catch (e) {
      console.error("Erro no index:", e);
      return res.status(400).json({
        errors: [e.message || "Erro ao listar usuários"],
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({ errors: ["Usuário não encontrado"] });
      }

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error("Erro no show:", e);
      return res.status(400).json({
        errors: [e.message || "Erro ao buscar usuário"],
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ["Usuário não existe"],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error("Erro no update:", e);
      return res.status(400).json({
        errors: e?.errors?.map((err) => err.message) || [e.message || "Erro ao atualizar"],
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ["Usuário não existe"],
        });
      }

      await user.destroy();
      return res.json({ apagado: true });
    } catch (e) {
      console.error("Erro no delete:", e);
      return res.status(400).json({
        errors: e?.errors?.map((err) => err.message) || [e.message || "Erro ao deletar"],
      });
    }
  }
}

export default new UserController();
