import ElementItem from "./ElementItem.js";
export default class ElementsList {
  constructor() {
    this.values = []; // Inicializa a lista de elementos vazia
    
    this.createElement({ typeOfElement: "0", elementPosition: "-1", elementDescription: "" })
    this.createElement({ typeOfElement: "1", elementPosition: "-1", elementDescription: "" })

  }

  alterType(index, newType) {
    if (index >= 0 && index < this.values.length) {
      this.values[index].typeOfElement = newType;
    } else {
      console.error("Índice inválido para alteração do tipo do elemento.");
    }
  }

  alterPosition(index, newPosition) {
    if (index >= 0 && index < this.values.length) {
      this.values[index].elementPosition = newPosition;
    } else {
      console.error("Índice inválido para alteração da posição do elemento.");
    }
  }

  alterDescription(index, newDescription) {
    if (index >= 0 && index < this.values.length) {
      this.values[index].elementDescription = newDescription;
    } else {
      console.error("Índice inválido para alteração da descrição do elemento.");
    }
  }
  createElement(element = { typeOfElement: "-1", elementPosition: "-1", elementDescription: "" }) {
    this.values.push(element);
    new ElementItem(element, this.values.length-1 , this);
    console.log(this.values)
  }
  deleteElement(index) {
    this.values.splice(index,1)
    document.querySelector(`#elementContainer${index}`).remove()
    
  }
}
