import Question from "./Question.js";
export default class FormSection {
    constructor(questionsData, codigo) {
        this.questionsData = questionsData;
        this.codigo = codigo;
        this.id = `aditionalFormSection_${codigo}`;
        this.render();
    }

    render() {
        const container = document.createElement('div');
        container.id = this.id;
        container.className = 'form-section'; 

        document.querySelector("#AditionalInfos").appendChild(container);
        this.questionsData.forEach(questionData => {
            const questionContainer = document.createElement('div');
            questionContainer.className = 'question-container';
            questionContainer.id = questionData.id 

            // Renderiza a questão
            

            // Cria a área de justificativa
            const justifyArea = document.createElement('div');
            justifyArea.id = `justify${questionData.id}`;
            justifyArea.className = 'justify-area'; 
            justifyArea.style.display = 'none'; 

            // Adiciona um campo de texto para a justificativa
            const textArea = document.createElement('textarea');
            textArea.id = `obs${questionData.id}`;
            textArea.placeholder = 'Justifique sua resposta aqui...';
            justifyArea.appendChild(textArea);


            container.appendChild(questionContainer);
            new Question(questionData.id, questionData.infos);
            questionContainer.appendChild(justifyArea);
        });

        // Adiciona a seção ao documento
    }
    enable(){
        document.querySelector("#aditionalFormSection_"+this.codigo).style.display = "block"
      
    }
    enable(){
       
        document.querySelector("#aditionalFormSection_"+this.codigo).style.display = "none"
    }
    getAnswers() {
        const answers = [];
        this.questionsData.forEach(questionData => {
            const answer = {
                question: questionData.id,
                resume: questionData.infos.resume,
                response: null,
                justify: null
            };

            // Obtem a resposta selecionada
            const selectedAnswer = document.querySelector(`input[name="${questionData.id}"]:checked`);
            if (selectedAnswer) {
                answer.response = selectedAnswer.value;
            }

            // Obtem a justificativa, se houver
            const justifyTextArea = document.getElementById(`obs${questionData.id}`);
            if (justifyTextArea) {
                answer.justify = justifyTextArea.value;
            }

            answers.push(answer);
        });
        return answers;
    }
}