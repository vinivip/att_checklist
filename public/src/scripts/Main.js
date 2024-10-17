import Question from "./questions/Question.js"
import DynamicInputFields from "./helpers/DynamicInputFields.js"
import PositionDynamicList from "./helpers/PositionDynamicList.js"
class Main {
    async preload() {
        // this.questionSectionRender('src/data/Color.json')
        this.questionSectionRender('src/data/Customization.json')
        // new DynamicInputFields("Imput_Colors", "Insira o código da cor")

        this.main()
    }
    main() {
        // Exemplo de uso
        const elementos = [
            { id: 1, elemento: "Logotipo" },
            { id: 2, elemento: "Desenho" },
            { id: 3, elemento: "Numeração" }
        ];

        const posicoes = [
            { id: 1, nome: "Superior Esquerda" },
            { id: 2, nome: "Superior Direita" },
            { id: 3, nome: "Inferior Esquerda" },
            { id: 4, nome: "Inferior Direita" }
        ];

        const listaDinamica = new PositionDynamicList(elementos, posicoes);
        document.getElementById("Position_1").appendChild(listaDinamica.lista);
    }
    async questionSectionRender(data) {
        let questionData = await fetch(data);
        questionData = await questionData.json()
        for (let i = 0; i < questionData.length; i++) {
            new Question(questionData[i].id, questionData[i].infos)
        }
    }


}

const App = new Main()
App.preload()
