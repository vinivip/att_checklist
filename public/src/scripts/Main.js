import ElementsList  from "./GraphicElements/ElementsList.js"
import ModalPositionOption from "./GraphicElements/ModalPositionOption.js";
import FormSection from "./questions/FormSection.js";

export default class Main {
    static elementsTypes 
    static aditionalQuestions 
    static productPositions 
    static AdditionalInfosForm
    
    constructor(){
        this.preload()
    }
    async fetchData(url){
        let raw = await fetch(url)
        return await raw.json()
    }
    async preload() {
        Main.productPositions = await this.fetchData("./src/data/ProductPositions.json")
        Main.aditionalQuestions = await this.fetchData("./src/data/AditionalQuestions.json")
        Main.elementsTypes = await this.fetchData("./src/data/ElementsTypes.json")

        this.main()
    }
    async main() {
        Main.AdditionalInfosForm = []
         Main.aditionalQuestions.forEach((section, code)=>{
            Main.AdditionalInfosForm.push(new FormSection(section, code))
        })
        new ModalPositionOption(Main.productPositions)
        const elementsList = new ElementsList(Main.elementsTypes);
        elementsList.loadData([{ typeOfElement: "0", elementPosition: "1", elementDescription: "" },{ typeOfElement: "1", elementPosition: "0", elementDescription: "" }])
    
        document.querySelector("#submitButton").addEventListener("click",()=>{
            this.submitHandler(elementsList)
        })
        document.querySelector("#addElementsButton").addEventListener("click",()=>{
            elementsList.createElement()
        })
    }
   

    submitHandler(elementsList){ 
       try{
        const elementos = elementsList.getAnswers()
        const complements = []
        elementsList.typesOfElements().forEach(element=>{
            const section = Main.AdditionalInfosForm[parseInt(element)].getAnswers()
            if(section.length !== 0 ){
                 complements.push({
                "elementType": element,
                "infos": section
            })
            }
           
        })
        const retorno = {
            "elementos": elementos,
            "complementos": complements,
        }
        console.log(retorno)
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

const app = new Main() 