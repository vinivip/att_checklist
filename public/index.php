<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Atendimento - VIP Sports</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body >

    <div class="container mt-5">
        <h1 class="text-center mb-4">Formulário de Atendimento - VIP Sports</h1>

        <form action="/submit" method="POST">
            <!-- 1. Natureza da Referência Visual -->
            <div class="form-group">
                <h4>1. Natureza da Referência Visual</h4>
                <p>O design das referências deve ser seguido à risca?</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="design_sim" name="design_referencia" value="Sim">
                    <label class="form-check-label" for="design_sim">Sim</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="design_nao" name="design_referencia" value="Não">
                    <label class="form-check-label" for="design_nao">Não</label>
                </div>
                <textarea placeholder="Especificar as modificações permitidas:" id="design_nao_justify" class="form-control mt-2" name="modificacoes_permitidas" rows="3"></textarea>
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