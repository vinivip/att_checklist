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
      
            <div id="question_1" class="form-group"></div>
            <div id="question_2" class="form-group"></div>
            <div id="question_3" class="form-group"></div>

           
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