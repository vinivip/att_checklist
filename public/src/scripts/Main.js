import Question from "./questions/Question.js"
import ElementsList  from "./helpers/ElementsList.js"
import ModalPositionOption from "./helpers/ModalPositionOption.js";

class Main {
    constructor(){
        this.positions = [{name: "peito centro"}, {name: "peito direito"}, {name: "peito esquerdo"}]
      
    }
    async preload() {
        new ModalPositionOption(this.positions)
        
        const elementsList = new ElementsList(this.elementsTypes);
        document.querySelector("#addElementsButton").addEventListener("click",()=>{
            elementsList.createElement()
        })
        this.formSectionRender('src/data/Customization.json')
        document.querySelector("#submitButton").addEventListener("click",()=>this.submitHandler(elementsList.values))

        this.main()
    }
    main() {
        

    }
    async formSectionRender(data) {
        let questionData = await fetch(data);
        questionData = await questionData.json()
        for (let i = 0; i < questionData.length; i++) {
            document.querySelector("#"+questionData[i].id).innerHTML= ""
            new Question(questionData[i].id, questionData[i].infos)
        }
    }
    getCheckedBoxes(divId) {
        // Seleciona todos os checkboxes dentro da div
        const checkboxes = document.querySelectorAll(`#numerationSection input[type="radio"]`);
        
        const checkedBoxes = [];
        
        // Itera sobre os checkboxes
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            const answer = {"name": checkboxes[i].name,"answer" : checkboxes[i].value}
            const answerObs = document.querySelector("#obs"+checkboxes[i].name).value
            if(document.querySelector("#justify"+checkboxes[i].name).classList.contains("required")){
                if(answerObs){
                    answer["obs"] = answerObs
                }else{
                    throw new Error("Preencha todos campos requeridos")
                }
            }
            checkedBoxes.push(answer);
          }
        }
        if(checkedBoxes.length< document.getElementsByClassName("form-group").length && document.getElementsByClassName("form-group").length){
            throw new Error("Marque todos campos requeridos")
        }
        return checkedBoxes;
    }

    submitHandler(elementsList){ 
       try{
        const retorno = {
            "elementos": elementsList,
            "numeração": this.getCheckedBoxes(numerationSection)
        }
        if(elementsList.length == 1 && Object.values(elementsList[0]).includes('-1')){
            throw new Error("Informe pelomenos 1 elemento!")
        }
        elementsList.forEach(element => {
            if(Object.values(element).includes('-1')){
                throw new Error("Preencha todos os campos do elemento")
            }
        });

        console.log("retorno",retorno)
        Swal.fire({
            title: 'Sucesso!',
            text: 'Informações Validadas',
            icon: 'success',
            confirmButtonText: 'OK'
        })
       }catch(e){
        Swal.fire({
            title: 'Informação Inconsistente!',
            text: e.message,
            icon: 'error',
            confirmButtonText: 'CORRIGIR'
          })
       }
    }


}

const App = new Main()
App.preload()
