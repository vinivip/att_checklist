import Question from "./questions/Question.js"
import ElementsList  from "./helpers/ElementsPositionList.js"
class Main {
    async preload() {
        this.questionSectionRender('src/data/Customization.json')
        this.main()
    }
    main() {
        const elementsList = new ElementsList();

        // Adicionando elementos à lista (substitua pelos seus dados reais)
        elementsList.createElement({ 
          typeOfElement: "1", 
          elementPosition: "0", 
          elementDescription: "Exemplo 1" 
        });
        elementsList.createElement();
        
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
