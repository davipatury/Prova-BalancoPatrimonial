module.exports = class Conta {
  /**
   * Representa uma conta contábil
   * @constructor
   * @param {Object} conta
   * @param {number} conta.id - Identificador único da conta
   * @param {string} conta.name - Nome da conta
   * @param {number} conta.father - Identificador do pai (assume o valor 0 se não houver pai)
   * @param {number} conta.initial_value - Valor inicial da conta
   */
  constructor ({ id, name, father, initial_value }) {
    this.id = parseInt(id)
    this.name = name
    this.father = parseInt(father)
    this.initial_value = parseInt(initial_value)

    /**
     * Array de contas filhas
     * @type {Conta[]}
     */
    this.children = []
  }

  /**
   * Valor da conta.
   * Se houver filhos, retorna a soma dos valores dos filhos, caso contrário, retorna o valor inicial.
   * A propriedade '_value' serve como cache do resultado da soma.
   * Como a chamada é recursiva, esse caching ajuda a acelerar a computação do valor.
   * @readonly
   */
  get value() {
    if (this._value === undefined) {
      this._value = this.children.length
        ? this.children.reduce((acc, { value }) => acc + value, 0)
        : this.initial_value
    }
    return this._value
  }

  /**
   * Serializa a classe Conta em um objeto para ser transformado em JSON.
   * É necessário, pois, na serialização comum, os getters não são serializados.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      value: this.value,
      father: this.father,
      children: this.children
    }
  }
}
