import Question from "./questions/Question.js"
import ElementsList  from "./helpers/ElementsList.js"
import ModalPositionOption from "./helpers/ModalPositionOption.js";
import FormSection from "./questions/FormSection.js";

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
       
        this.main(elementsList)
    }
    async main(elementsList) {
        
        let teste = await fetch("./src/data/Aditional.json")
        teste = await teste.json()

        teste.forEach((section, code)=>{
            new FormSection(section, code)
        })
        document.querySelector("#submitButton").addEventListener("click",()=>{
            this.submitHandler(elementsList.values)
        })
        
    }


    submitHandler(elementsList){ 
       try{
        const retorno = {
            "elementos": elementsList,
            
        }
        if(elementsList.length == 1 && Object.values(elementsList[0]).includes('-1')){
            throw new Error("Informe pelomenos 1 elemento!")
        }
        elementsList.forEach(element => {
            if(Object.values(element).includes('-1')){
                throw new Error("Preencha todos os campos do elemento")
            }
        });

        Swal.fire({
            title: 'Sucesso!',
            text: 'Informações Validadas',
            icon: 'success',
            confirmButtonText: 'OK'
        })
       }catch(e){
        // console.console.log(e)
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
