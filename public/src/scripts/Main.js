import Question from "./questions/Question.js"
class Main{
    async preload(){
        let questionData = await fetch('src/data/Questions.json');
        questionData = await questionData.json()
        for(let i = 0; i<questionData.length;i++){
            new Question(questionData[i].id, questionData[i].infos)
        } 
        
        this.main()
    }
    main(){
        
    }
}

const App = new Main() 
App.preload()
