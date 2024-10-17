<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Atendimento - VIP Sports</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="src/css/style.css">
    <style>
        .form-check {
            display: flex;
            flex-direction: column;
        }

        .modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0,
                    0.3);
        }
    </style>
</head>

<body>

    <div class="container mt-5">
        <h1 class="text-center mb-4">Formulário de Atendimento - VIP Sports</h1>

        <form action="/submit" method="POST">
            <!--       
            <div id="Color_1" class="form-group"></div>
            <div id="justifyColor_1" class="justifyContainer">
                <div id="Imput_Colors" class="d-flex flex-column rounded form-floating"></div>
            </div> -->
            <div id="Custom_1" class="form-group"></div>
            <div id="justifyCustom_1" class="justifyContainer">
                <input type="text" class="form-control mb-2" placeholder="Numero a ser pulado">
            </div>

            <div id="Custom_2" class="form-group"></div>
            <div id="justifyCustom_2" class="justifyContainer">
                <textarea placeholder="Intervalos da numeração" class="form-control mb-2"></textarea>
            </div>

            <div id="Position_1">

            </div>


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