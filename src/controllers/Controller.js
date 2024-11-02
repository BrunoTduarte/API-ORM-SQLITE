const { where } = require("sequelize");

class Controller {
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        } catch (error) {
            
        }
    }

    async atualiza(req,res) {
        const { id } = req.params; //extrai os parametros da rota id 
        const dadosAtualizados = req.body //extrai os dados enviados do corpo da requesicao 
        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
            if(!foiAtualizado) {
                return res.status(400).json({messagem: 'Registro não foi atualizado'})
            }
            return res.status(200).json({messagem: 'Atualizadao com sucesso'})
        } catch (error) {
                return res.status(500).json({ mensagem: 'Erro ao atualizar o registro', erro: error.message });
        }
    }

   
}

module.exports = Controller