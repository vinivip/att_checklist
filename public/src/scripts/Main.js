import Question from "./questions/Question.js"
class Main{
    async preload(){
        this.colorSectionPreloader()
        this.customizationSectionPreloader()

        
        
        this.main()
    }
    main(){
        
    }
    async colorSectionPreloader(){
        let questionData = await fetch('src/data/Color.json');
        questionData = await questionData.json()
        for(let i = 0; i<questionData.length;i++){
            new Question(questionData[i].id, questionData[i].infos)
        } 
    }
    async elementsSectionPreloader(){
        let questionData = await fetch('src/data/Elements.json');
        questionData = await questionData.json()
        for(let i = 0; i<questionData.length;i++){
            new Question(questionData[i].id, questionData[i].infos)
        } 
    }
    async customizationSectionPreloader(){
        let questionData = await fetch('src/data/Customization.json');
        questionData = await questionData.json()
        for(let i = 0; i<questionData.length;i++){
            new Question(questionData[i].id, questionData[i].infos)
        } 
    }
}

const App = new Main() 
App.preload()
