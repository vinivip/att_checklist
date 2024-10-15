class Question{
    main(){
        $("#design_nao_justify").hide()
        
        $("#design_nao").on('change',()=>$("#design_nao_justify").fadeIn())
        $("#design_sim").on('change',()=>{
            $("#design_nao_justify").val("")
            $("#design_nao_justify").hide()}
        )
    }
}

export default new Question()