import ElementItem from "./ElementItem.js";
export default class ElementsList {
  constructor(elementTypes) {
    this.values = []; // Inicializa a lista de elementos vazia
    this.elementTypes = elementTypes
    this.createElement({ typeOfElement: "0", elementPosition: "1", elementDescription: "Teste de descrição" })
    this.createElement({ typeOfElement: "1", elementPosition: "-1", elementDescription: "" })

  }

  alterType(index, newType) {
    if (index >= 0 && index < this.values.length) {
      this.values[index].typeOfElement = newType;
      const section = document.querySelector("#aditionalFormSection_"+newType)
      if(section){
        section.style.display = 'flex'
      }
      
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
    new ElementItem(element, this.values.length - 1, this,this.elementTypes);
    if(element.typeOfElement !== '-1'){
      const section = document.querySelector("#aditionalFormSection_"+element.typeOfElement)
      if(section){
        section.style.display = 'flex'
      }
      
    }
  }
  deleteElement(index) {
     const removido = this.values.splice(index, 1)
    document.querySelector(`#elementContainer${index}`).remove()
    if (!this.typesOfElements(removido[0].typeOfElement)){
      const section = document.querySelector("#aditionalFormSection_"+removido[0].typeOfElement)
      if(section){
        section.style.display = 'none'
      }
      
    }

  }
  typesOfElements(find=false) {
    const tiposDeElementos = [];
    for (const objeto of this.values) {
      tiposDeElementos.push(objeto.typeOfElement);
    }
    const types = [...new Set(tiposDeElementos)];
    return find? types.includes(find)  :  types
  }
  getAnswers(){
    if(this.values.length == 1 && Object.values(this.values[0]).includes('-1')){
      throw new Error("Informe pelomenos 1 elemento!")
    }
    this.values.forEach(element => {
        if(Object.values(element).includes('-1')){
            throw new Error("Preencha todos os campos do elemento")
        }
    });
    return this.values
  }
}