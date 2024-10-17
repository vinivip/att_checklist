export default class PositionDynamicList {
    constructor(elementos, posicoes) {
      this.elementos = elementos;
      this.posicoes = posicoes;
      this.lista = document.createElement("ul");
      this.adicionarItem();
    }
  
    criarItem() {
      const item = document.createElement("li");
  
      // Select de elementos
      const selectElemento = document.createElement("select");
      this.elementos.forEach(elemento => {
        const option = document.createElement("option");
        option.value = elemento.id;
        option.text = elemento.elemento;
        selectElemento.appendChild(option);
      });
      item.appendChild(selectElemento);
  
      // Bot�o de posi��es
      const botaoPosicao = document.createElement("button");
      botaoPosicao.textContent = "Posição";
      botaoPosicao.addEventListener("click", () => {
        this.abrirModalPosicoes(item);
      });
      item.appendChild(botaoPosicao);
  
      // Input de observa��es
      const inputObservacoes = document.createElement("input");
      inputObservacoes.type = "text";
      inputObservacoes.placeholder = "Observações do elemento";
      item.appendChild(inputObservacoes);
  
      return item;
    }
  
    adicionarItem() {
      const novoItem = this.criarItem();
      this.lista.appendChild(novoItem);
  
      // Adiciona um novo item quando o select for alterado
      const selectElemento = novoItem.querySelector("select");
      const listener = () => {
        this.adicionarItem();
        // Remove o listener após adicionar o novo item
        selectElemento.removeEventListener("change", listener); 
      };
      selectElemento.addEventListener("change", listener);
    }
  
    abrirModalPosicoes(item) {
      const modal = document.createElement("div");
      modal.classList.add("modal");
  
      this.posicoes.forEach(posicao => {
        const botaoPosicao = document.createElement("button");
        botaoPosicao.textContent = posicao.nome; // Assumindo que cada posi��o tem um nome
        botaoPosicao.addEventListener("click", () => {
          // Aqui voc� deve implementar a l�gica para selecionar a posi��o no item
          console.log(`Posi��o selecionada: ${posicao.nome}`);
          modal.remove();
        });
        modal.appendChild(botaoPosicao);
      });
  
      document.body.appendChild(modal);
    }
  }
  

  