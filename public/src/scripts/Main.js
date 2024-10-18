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
            { id: 0, elemento: "Logotipo" },
            { id: 1, elemento: "Ilustração" },
            { id: 2, elemento: "Numeração" }
        ];

        const posicoes = [
            { id: 0, nome: "Peito Direito" },
            { id: 1, nome: "Peito Centro" },
            { id: 2, nome: "Peito Esquerdo" },
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
