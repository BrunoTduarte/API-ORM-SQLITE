const Controller = require('./Controller.js')
const PessoaServices = require('../services/PessoaServices.js')

const pessoaServices =  new PessoaServices();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices)
    }

    async pegaMatricula(req,res) {
        const {estudanteId } = req.params;
        try {
            const listamatriculas = await pessoaServices.pegaMatriculaPorEstudante(Number(estudanteId));
            return res.sttaus(200).json(listaMatricula);
        } catch (error) {
            
        }
    }
}  

module.exports = PessoaController;
