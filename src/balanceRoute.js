const Conta = require('./structures/Conta.js')
const Database = require('./structures/Database.js')

module.exports = async function (req, res) {
  const map = await Database.getContas(req.params.id || 1)

  const json = []
  const instanciarConta = (conta) => {
    // Instancia classe Conta usando as propriedades do banco de dados
    const newConta = map[conta.id] = new Conta(conta)

    // Se um pai existir, precisamos adicionar essa conta a array 'children' do pai 
    if (newConta.father) {
      // Se houver pai, encontra a instância pai dessa conta
      let father = map[newConta.father]
      if (!(father instanceof Conta)) {
        // Se o pai ainda não foi instanciado, instancia recursivamente
        father = instanciarConta(father)
      }

      // Adiciona conta atual a lista de filhos da conta pai.
      father.children.push(newConta)
    } else {
      // Se não houver pai, adiciona conta atual ao json de retorno
      json.push(newConta)
    }

    return newConta
  }

  for (const conta of Object.values(map)) {
    // Se essa conta já foi instanciada, pula para a próxima
    if (conta instanceof Conta) {
      continue
    }
    // Instancia conta
    instanciarConta(conta)
  }

  res.json(json)
}
