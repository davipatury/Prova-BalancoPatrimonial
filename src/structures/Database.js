const CSVReader = require('./CSVReader.js')
const path = require('path')

module.exports = class Database {
  /**
   * Lê do "banco de dados" as contas respectivas ao ID fornecido.
   * @param {string} id 
   * @returns {Promise<Object[]>}
   */
  static getContas(id) {
    // Limita o ID aos 3 exemplos (csv)
    if (id < 1 || id > 3) {
      throw new Error('ID inválido')
    }
    // Lê o arquivo CSV correspondente ao ID requerido.
    return CSVReader.readFile(path.join(__dirname, `../../db/contas_${id}.csv`))
  }
}
