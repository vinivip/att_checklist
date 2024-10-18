export default class PositionDynamicList {
  constructor(elementos, posicoes) {
    this.elementos = elementos;
    this.posicoes = posicoes;
    this.lista = document.createElement("ul");
    this.customElements = []

   
    this.renderModalPosicoes();
    this.adicionarItem(0);
    
  }

  criarItem(id) {
    const item = document.createElement("li");
    item.classList.add("customElement")
    item.id = ("customElement_"+id)

    this.customElements.push({
      "elementId": 0,
      "positionId" : 0
    })

    // Select de elementos
    const selectElemento = document.createElement("select");
    this.elementos.forEach(elemento => {
      const option = document.createElement("option");
      option.value = elemento.id;
      option.text = elemento.elemento;
      selectElemento.appendChild(option);
    });
    item.appendChild(selectElemento);

    // Position Buttons
    const botaoPosicao = document.createElement("button");
    botaoPosicao.textContent = "Posição";
    botaoPosicao.addEventListener("click", (e) => {
      e.preventDefault()
      this.openPositionsModal(id);
    });
    item.appendChild(botaoPosicao);

    // Obs Input
    const inputObservacoes = document.createElement("input");
    inputObservacoes.type = "text";
    inputObservacoes.placeholder = "Observações do elemento";
    item.appendChild(inputObservacoes);

    if (id!==0) {
      // Botão de deletar 
      const botaoDeletar = document.createElement("button");
      botaoDeletar.textContent = "Deletar";
      botaoDeletar.addEventListener("click", () => {
        item.remove(); // Remove o item da lista
      });
      item.appendChild(botaoDeletar);
    }

    return item;
  }

  adicionarItem(id) {
    const novoItem = this.criarItem(id);
    this.lista.appendChild(novoItem);

    // Adiciona um novo item quando o select for alterado
    const selectElemento = novoItem.querySelector("select");
    const listener = () => {
      const newId = document.getElementsByClassName("customElement")
      this.adicionarItem(newId.length);
      // Remove o listener após adicionar o novo item
      selectElemento.removeEventListener("change", listener);
    };
    selectElemento.addEventListener("change", listener);
  }

  openPositionsModal(itemId) {
    const modal = document.getElementById("positionModal")
    const modalOptionsContainer = document.getElementById("modalOptionsContainer")


    this.posicoes.forEach(posicao => {
      const botaoPosicao = document.createElement("button");
      botaoPosicao.textContent = posicao.nome;
      botaoPosicao.id = "positionSelect_"+posicao.id // Assumindo que cada posi��o tem um nome
      botaoPosicao.addEventListener("click", (event) => {
        // Aqui você deve implementar a logica para selecionar a posição no item
        const selectedPosition = event.target
        const selectedPositionId = selectedPosition.id.split("_")[1]
        document.querySelector(".selectedPosition").classList.remove("selectedPosition")
        selectedPosition.classList.add("selectedPosition")
        this.customElements[itemId].positionId = selectedPositionId
        
      });
      modalOptionsContainer.appendChild(botaoPosicao);
    });
    const botaoPosicao = document.createElement("button");
      botaoPosicao.textContent = "fechar"; // Assumindo que cada posi��o tem um nome
      botaoPosicao.addEventListener("click", () => {
        // Aqui você deve implementar a logica para selecionar a posição no item
        this.closePositionsModal()
      });
      modalOptionsContainer.appendChild(botaoPosicao);

    const selected = document.querySelector("#positionSelect_"+this.customElements[itemId].positionId)
    selected.classList.add("selectedPosition")
    modal.style.display = "flex"
  }
  closePositionsModal() {
    const modal = document.getElementById("positionModal")
    modal.style.display = "none"
  }
  renderModalPosicoes() {
    const modal = document.createElement("div");
    modal.id = "positionModal";
    modal.style.display = "none";
    const modalOptionsContainer = document.createElement("div");
    modalOptionsContainer.id ="modalOptionsContainer"
    modal.appendChild(modalOptionsContainer);
    document.body.appendChild(modal);
  }
}


