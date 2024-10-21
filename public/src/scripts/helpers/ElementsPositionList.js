export default class ElementsList {
  constructor() {
    this.values = []; // Inicializa a lista de elementos vazia
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

  createElement(element = { typeOfElement: "0", elementPosition: "0", elementDescription: "" }) {
    this.values.push(element);
    new ElementItem(element, this.values.length-1 , this);
  }
}

class ElementItem {
  constructor(element, index, elementsList) {
    this.element = element;
    this.index = index;
    this.elementsList = elementsList; 
    this.createItem();
  }

  createItem() {
    const li = document.createElement("li");
    li.id = this.index;

    const div = document.createElement("div");
    div.id = `element${this.index}`;

    const typeSelect = document.createElement("select");
    typeSelect.name = `type${this.index}`;
    typeSelect.id = `type${this.index}`;
    typeSelect.classList.add("elementType");
    typeSelect.innerHTML = `
      <option value="0">Logotipo</option>
      <option value="1">Numeração</option>
    `;
    // Define o valor selecionado com base no objeto
    typeSelect.value = this.element.typeOfElement; 

    const positionSelect = document.createElement("select");
    positionSelect.name = `position${this.index}`;
    positionSelect.id = `position${this.index}`;
    positionSelect.classList.add("elementPosition");
    positionSelect.innerHTML = `
      <option value="1">Peito Esquerdo</option>
      <option value="0">Peito Direito</option>
    `;
    // Define o valor selecionado com base no objeto
    positionSelect.value = this.element.elementPosition;

    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.placeholder = "Descrição do elemento";
    // Define o valor do input com base no objeto
    descriptionInput.value = this.element.elementDescription; 

    div.appendChild(typeSelect);
    div.appendChild(positionSelect);
    div.appendChild(descriptionInput);
    li.appendChild(div);

    const elementsListContainer = document.getElementById("elementsListContainer");
    elementsListContainer.appendChild(li);

    // Adiciona os observadores de eventos
    this.addObservers(typeSelect, positionSelect, descriptionInput);
  }

  addObservers(typeSelect, positionSelect, descriptionInput) {
    typeSelect.addEventListener("change", (event) => {
      this.elementsList.alterType(this.index, event.target.value);
      console.log(this.elementsList.values)
    });

    positionSelect.addEventListener("change", (event) => {
      this.elementsList.alterPosition(this.index, event.target.value);
      console.log(this.elementsList.values)
    });

    descriptionInput.addEventListener("input", (event) => {
      this.elementsList.alterDescription(this.index, event.target.value);
      console.log(this.elementsList.values)
    });
  }
}

// Exemplo de uso:
