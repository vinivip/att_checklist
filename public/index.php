<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Atendimento - VIP Sports</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .form-check{
            display: flex;
            flex-direction: column;
        }
    </style>
</head>

<body >

    <div class="container mt-5">
        <h1 class="text-center mb-4">Formulário de Atendimento - VIP Sports</h1>

        <form action="/submit" method="POST">
      
            <div id="Color_1" class="form-group"></div>
            <div class="d-flex flex-column rounded form-floating">
                <input type="text" class="form-control mb-2" placeholder="Codigo da Cor">
                <input type="text" class="form-control mb-2" placeholder="Codigo da Cor">
            </div>
            <div id="Custom_1" class="form-group"></div>
                <input type="text" class="form-control mb-2" placeholder="Numero a ser pulado">
            <div id="Custom_2" class="form-group"></div>
                <textarea  placeholder="Intervalos da numeração" class="form-control mb-2"></textarea>
    

           
            <!-- Botão de Envio -->
            <button type="submit" class="btn btn-primary btn-block">Enviar Formulário</button>
        </form>
    </div>

    <!-- Bootstrap JS e dependências -->
    <script src="./src/scripts/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="./src/scripts/Main.js" type="Module"></script>
</body>

</html>