const { readFile } = require('node:fs/promises')
const { EOL } = require('node:os')

/**
 * Converte um arquivo csv em uma lista de objetos.
 */
module.exports = class CSVReader {
  /**
   * Lê um arquivo e converte seu conteúdo no formato CSV em uma lista de objetos.
   * @param {string} filePath 
   * @returns {Promise<Object[]>} lista de objetos
   */
  static async readFile(filePath) {
    try {
      const content = await readFile(filePath, { encoding: 'utf8' })
      return this.parse(content)
    } catch (err) {
      console.error(err.message)
    }
  }

  /**
   * Converte uma string no formato CSV em uma lista de objetos.
   * A primeira linha define as chaves dos objetos.
   * As linhas seguintes define os valores de cada objeto.
   * @param {string} str 
   * @returns {Object[]} lista de objetos
   */
  static parse(str) {
    const [ keys, ...values ] = str.split(EOL).filter(l => !!l).map(l => l.trim().split(','))
    return values.map(value => value.reduce((obj, v, ci) => { obj[keys[ci]] = v; return obj }, {}))
  }
}
