const Services = require('./Services.js')

class PessoaServices extends Services {
    constructor() {
        super('Pessoa')
    }

    async pegaMatriculaPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatricula = await estudante.getAulasMatriculadas();
        return listaMatricula;
    }
}

module.exports = PessoaServices;