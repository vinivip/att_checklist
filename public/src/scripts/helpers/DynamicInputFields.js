export default class DynamicInputFields {
  constructor(containerId, placeholderText) {
    this.container = document.getElementById(containerId);
    this.placeholder = placeholderText;
    this.createInput();
  }

  createInput() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = this.placeholder;

    // Adiciona o evento para criar/remover novos campos
    input.addEventListener('input', (event) => {
      if (event.target.value && !input.nextElementSibling) {
        // Cria um novo campo abaixo quando o campo atual é preenchido
        this.createInput();
      } else if (!event.target.value && input.nextElementSibling) {
        // Remove o próximo campo quando o campo atual fica vazio
        this.container.removeChild(input.nextElementSibling);
      }
    });
    input.addEventListener('keyup', (event) => {

      const input = event.target;
      let value = input.value;

      // Verifica se o valor é numérico e se tem entre 3 e 6 dígitos
      if (/^\d{3,6}$/.test(value)) {
        // Adiciona o "#" para formar o código hexadecimal
        const hexColor = `#${value} solid 2px`;
        
        // Atualiza a cor da borda do input
        input.style.outline= hexColor;
        input.style.border = hexColor;
        input.style.borderLeft = `#${value} solid 29px`;
      } else {
        // Reseta a cor da borda se o valor não for válido
        input.style.borderColor = 'initial';
      }

    });
    // Adiciona o campo na div container
    this.container.appendChild(input);
  }
}

