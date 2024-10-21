<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Atendimento - VIP Sports</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="src/css/style.css">
    <style>
        .form-check {
            display: flex;
            flex-direction: column;
        }


    </style>
</head>

<body>
    <div id="exampleModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Selecione a posição do elemento</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div id="positionOptions" class="modal-body">
           
        </div>
    
        </div>
    </div>
    </div>
    

    <div class="container mt-5">
        <h1 class="text-center mb-4">Formulário de Atendimento - VIP Sports</h1>
        <div id="Position_1">
            <h1>
                Elementos da peça
            </h1>
            <ul id="elementsListContainer">
                
            </ul>
            <div class="d-flex justify-content-center">
            <button id="addElementsButton">
                ADICIONAR ELEMENTO
            </button>
            </div>
        </div>

        <section class="" id="numerationSection">
            <div id="Custom_1" class="form-group"></div>
            <div id="justifyCustom_1" class="justifyContainer">
                <input type="text" id="obsCustom_1" class="form-control mb-2" placeholder="Numero a ser pulado">
            </div>

            <div id="Custom_2" class="form-group"></div>
            <div id="justifyCustom_2" class="justifyContainer">
                <textarea  id="obsCustom_2" placeholder="Intervalos da numeração" class="form-control mb-2"></textarea>
            </div>

        </section>


        <!-- Botão de Envio -->
        <button type="submit" id="submitButton" class="btn btn-primary btn-block">Enviar Formulário</button>
    </div>

    <!-- Bootstrap JS e dependências -->
    <script src="./src/scripts/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="./src/scripts/Main.js" type="Module"></script>
</body>

</html>