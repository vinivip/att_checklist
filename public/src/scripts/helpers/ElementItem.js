
export default class ElementItem {
    constructor(element, index, elementsList, elementsTypes) {
      this.element = element;
      this.index = index;
      this.elementsList = elementsList;
      this.elementsTypes = [{name: "Logotipo"}, {name: "Numeração"}]
      this.createItem();
    }
  
    createItem() {
      const li = document.createElement("li");
      li.id = "elementContainer"+this.index;
      li.classList.add("p-2")
      
  
      const div = document.createElement("div");
      div.id = `element${this.index}`;
     

  
      const typeSelect = document.createElement("select");
      typeSelect.name = `type${this.index}`;
      typeSelect.id = `type${this.index}`;
      typeSelect.classList.add("elementType");
      typeSelect.classList.add("custom-select");
      typeSelect.classList.add("col-4");
      typeSelect.innerHTML = `
        <option value="-1" disabled selected>Selecione uma Opção</option>
      `;
      this.elementsTypes.forEach((element,index) => {
            typeSelect.innerHTML += `
        <option value="${index}" >${element.name}</option>`
      });
      // Define o valor selecionado com base no objeto
      typeSelect.value = this.element.typeOfElement; 

      const positionModalButton = document.createElement("button")
      positionModalButton.textContent = "Selecionar Posição"
      positionModalButton.classList.add("btn")
      positionModalButton.classList.add("mx-3")
      positionModalButton.id = "positionButton_"+this.index
      positionModalButton.classList.add("btn-secondary");
      positionModalButton.setAttribute('data-toggle','modal')
      positionModalButton.setAttribute('data-target','#exampleModal')
      positionModalButton.onclick = ()=>{
        document.querySelectorAll(".positionOption").forEach(option=>{
            option.onclick = (e)=>{
                const selected = document.querySelector("#"+e.target.closest('button').id)
                const button = document.querySelector("#positionButton_"+this.index)
                button.textContent = selected.textContent.toUpperCase()
                this.elementsList.alterPosition(this.index, selected.id.split("_")[1]);
            }
        })
      }
     
  
      const descriptionInput = document.createElement("input");
      descriptionInput.type = "text";
      descriptionInput.placeholder = "Descrição do elemento";
      // Define o valor do input com base no objeto
      descriptionInput.value = this.element.elementDescription; 
  
      const deleteButton = document.createElement("button");
      deleteButton.id = `deleteElement${this.index}`
      deleteButton.classList.add("button")
      deleteButton.innerHTML = "<i class='bi bi-trash-fill'></i>"
      deleteButton.onclick = ()=>this.elementsList.deleteElement(this.index)
  
      div.appendChild(typeSelect);
      div.appendChild(positionModalButton)
      div.appendChild(descriptionInput);
     
      if(this.index > 0){
        div.appendChild(deleteButton)
      }
      li.appendChild(div);
  
      const elementsListContainer = document.getElementById("elementsListContainer");
      elementsListContainer.appendChild(li);
  
      // Adiciona os observadores de eventos
      this.addObservers(typeSelect, positionSelect, descriptionInput);
    }
  
    addObservers(typeSelect, positionSelect, descriptionInput) {
      typeSelect.addEventListener("change", (event) => {
        this.elementsList.alterType(this.index, event.target.value);
      });
  
      positionSelect.addEventListener("change", (event) => {
        this.elementsList.alterPosition(this.index, event.target.value);
      });
  
      descriptionInput.addEventListener("input", (event) => {
        this.elementsList.alterDescription(this.index, event.target.value);
      });
    }
  }
