import Question from "./Question";

class EventQuestion extends Question{
    constructor(id, infos,events) {
        super(id,infos)
        this.events = events
        this.render();
        
    }

    render() {
        const container = document.getElementById(this.id);
        if (!container) {
            console.error(`Element with id ${this.id} not found.`);
            return;
        }

        // Cria o título e a descrição da questão
        const questionTitle = document.createElement('h4');
        questionTitle.textContent = this.infos.title;
        container.appendChild(questionTitle);

        const questionDesc = document.createElement('p');
        questionDesc.textContent = this.infos.desc;
        container.appendChild(questionDesc);

        // Cria o grupo de alternativas

        this.infos.alternativas.forEach((alt, index) => {
            const alternativesDiv = document.createElement('div');
            alternativesDiv.className = 'form-check';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = this.id; // Nome unico para o grupo de radio buttons
            radio.id = `response_alt_${index}`;
            radio.value = alt;
            radio.className = 'form-check-input';

            const label = document.createElement('label');
            label.htmlFor = radio.id; // Associar o label ao input
            label.className = 'form-check-label';
            label.textContent = alt;

            alternativesDiv.appendChild(radio);
            alternativesDiv.appendChild(label);
            container.appendChild(alternativesDiv);
        });

        
    }
}
export default EventQuestion