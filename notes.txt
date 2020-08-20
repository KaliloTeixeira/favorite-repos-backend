- Package-json: Guarda as informações das dependencias utilizadas e suas versões.



***** Iniciando o Projeto *****

    - npm init -y

    * Instalar EXPRESS
        - npm install EXPRESS - tratar rotas e views

    * Configurar o servidor
        - criar novo arquivo 'server.js'

    * Nodemon
        - Reinicia o server automaticamente quando tem alteracoes no codigo.
        - npm install nodemon -D

        - criar script para rodar o nodemon
        - "dev": "nodemon server.js"

    * MongoDB
        - Instalar utilizando o docker para facilitar o manuseio

        - Conectando com o DB:
            - Substitui a utilização de codigos em QUERY, para a utilizacao de JS
            - Instale o mongoose
                - npm install mongoose -D

            - Importar o mongoose
        
        - Mongoose paginate
            - serve para listar todos os 'objetos' cadastrados em paginas com um valor maximo de objetos por pagina

            - npm install mongoose-paginate
            - importar no model

    * Cors
        - Permitir que outros endereços acessem a nossa API
        - npm install cors
        - Importar cors no server.js e..
            app.use(cors());

    - Para utilizar a estrutura de Json dentro do app deve-se utilizar:
        - app.use(express.json()); - No arquivo principal do app
        ... Mais detalhes em server.js
