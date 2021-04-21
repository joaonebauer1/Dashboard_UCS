/*Array's criado para adicionar imagens dentro de cada card dos bairros */

let imgBairro_centro = [
    cardImg1 = '<img src="assets/img/cards/card_Centro/big.jpeg";" alt="imagem mercado big">',
    cardImg2 = '<img src="assets/img/cards/card_Centro/zaffari.jpg";" alt="imagem mercado zaffari">',
    cardImg3 = '<img src="assets/img/cards/card_Centro/americanas.jpg";" alt="imagem americanas">',
    cardImg4 = '<img src="assets/img/cards/card_Centro/pnp.jpg";" alt="imagem loja pnp">',
    cardImg5 = '<img src="assets/img/cards/card_Centro/lamafia.png";" alt="imagem barbearia">',
    cardImg6 = '<img src="assets/img/cards/card_Centro/joli.jpg";" alt="imagem salão">',
    cardImg7 = '<img src="assets/img/cards/card_Centro/padaria.png";" alt="imagem padaria">',
    cardImg8 = '<img src="assets/img/cards/card_Centro/takeo.jpg";" alt="imagem sushi bar">',
    cardImg9 = '<img src="assets/img/cards/card_Centro/doacao.jpg";" alt="imagem centro doação">',
    cardImg10 = '<img src="assets/img/cards/card_Centro/severo.png";" alt="imagem lancheria">',
    cardImg11 = '<img src="assets/img/cards/card_Centro/sao_joao.png";" alt="imagem farmácia">',
    cardImg12 = '<img src="assets/img/cards/card_Centro/panvel.png";" alt="imagem farmácia">',
];

/* Array de Objetos de Bairros, que contem os dados do bairro e cards, para adicionar um bairro basta criar outro objeto bairro dentro deste 
array de objeto, e referenciar no DOM na classe "drop-down" dentro da "ul"*/
let bairro_centro = [{

        name: 'Centro',
        id: "centro",
        cards: [{
                img: imgBairro_centro[0],
                titulo: "Hiper Mercado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 7:30 - 21:00" +
                    "<br>Domingo: 8:20 - 20:00",
                endereco: "<strong>Endereço:</strong> Av. Nicolau Becker, 345 - Centro, Novo Hamburgo - RS, 93510-060",
                contato: "Telefone: (51) 3587 - 5534",
                site: "<a href = 'https://www.big.com.br/' target = '_blank'>" + "BIG" + "</a>" +
                    "<a href = 'https://www.facebook.com/hipermercadobig/' target = '_blank'>" + "facebook" + "</a>"
            },

            {
                img: imgBairro_centro[1],
                titulo: "Hiper Mercado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 8:00 - 22:00" +
                    "<br>Domingo: 9:00 - 20:00" +
                    "<br> *8:00 - 9:00, exclusivo para grupo de risco*",
                endereco: "<strong>Endereço:</strong> R. Primeiro de Março, 1111 - Centro, Novo Hamburgo - RS, 93320-010",
                contato: "Telefone: (51) 4004 - 1112",
                site: "<a href = 'https://www2.zaffari.com.br/' target = '_blank'>" + "ZAFFARI" + "</a>" +
                    "<a href = 'https://www.facebook.com/zaffari' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_centro[2],
                titulo: "Mercado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 12:00 - 20:00" +
                    "<br>Domingo: 14:00 - 20:00",
                endereco: "<strong>Endereço:</strong> Av. Nações Unidas, 2001 - Rio Branco, Novo Hamburgo - RS, 93320-021",
                contato: "Telefone: (51) 98594 - 7814",
                site: "<a href = 'https://www.americanas.com.br/busca/novo-hamburgo' target = '_blank'>" + "AMERICANAS" + "</a>" +
                    "<a href = 'https://www.facebook.com/americanascom/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_centro[3],
                titulo: "Componentes eletrônicos",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 8:30 - 12:00, 13:00 - 18:30" +
                    "<br>Sábado: 8:00 - 12:00",
                endereco: "<strong>Endereço:</strong> : R. Joaquim Nabuco, 77 - Rio Branco, Novo Hamburgo - RS, 93310-001",
                contato: "Telefone: (51) 3594 - 6677",
                site: "<a href = 'https://www.facebook.com/pnpeletronica/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_centro[4],
                titulo: "Barbearia",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 9:00 - 20:00" +
                    "<br>Sábado: 9:00 - 19:00",
                endereco: "<strong>Endereço:</strong> R. Bento Gonçalves, 2059 - Centro, Novo Hamburgo - RS, 93410-183",
                contato: "Telefone: (51) 3781 - 2608",
                site: "<a href = 'https://www.lamafiabarbearia.com.br/agendamento/' target = '_blank'>" + "LA MAFIA" + "</a>" +
                    "<a href = 'https://www.facebook.com/lamafiabarbearia/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_centro[5],
                titulo: "Salão de beleza",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 8:00 - 21:00" +
                    "<br>Sábado: 8:00 - 18:00",
                endereco: "<strong>Endereço:</strong> R. Lima e Silva, 45 - Centro, Novo Hamburgo - RS, 93510-030",
                contato: "Telefone: (51) 3065 - 3325",
                site: "<a href = 'https://www.instagram.com/lejolihair/?hl=pt-br' target = '_blank'>" + "Instagram" + "</a>" +
                    "<a href = 'https://www.facebook.com/lejolihairestetica/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_centro[6],
                titulo: "Padaria Confeitaria",
                texto_1: "<u>Horários</u>",
                texto_2: "Atendimento 24 horas",
                endereco: "<strong>Endereço:</strong> R. Joaquim Nabuco, 23 - Centro, Novo Hamburgo - RS, 93310-001",
                contato: "Telefone: (51) 3593 - 1311" + "<br>*Não precisa sair de casa, não se arrisque, levamos até você.*",
                site: "<a href = 'http://padariabrasil.com.br/' target = '_blank'>" + "PADARIA" + "</a>" +
                    "<a href = 'https://www.facebook.com/padariabrasilnh' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_centro[7],
                titulo: "Sushi Bar",
                texto_1: "<u>Horários</u>",
                texto_2: "terça - sábado: 11:30 - 14:00, 19:30 - 23:30" +
                    "<br>Domingo: 19:00 - 23:00",
                endereco: "<strong>Endereço:</strong> Rua Heller, 308 - Centro, Novo Hamburgo - RS, 93510-330",
                contato: "Telefone: (51) 3035 - 2060" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'http://www.takeosushi.com.br/#BEBIDAS-SEM-ALCOOL' target = '_blank'>" + "TAKEO" + "</a>" +
                    "<a href = 'https://www.facebook.com/TAKEOSUSHINH' target = '_blank'>" + "Facebook" + "</a>"

            },
            {
                img: imgBairro_centro[8],
                titulo: "Doações",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 16:00 - 20:00",
                endereco: "Doações de materiais e insumos ao Hospital Municipal devem ser entregues na Fenac.",
                contato: "Telefone: (51) 3587 - 5534",
                site: "<a href = 'https://www.novohamburgo.rs.gov.br/noticia/doar-luta-coronavirus-novo-hamburgo' target = '_blank'>" + "Mais Informações" + "</a>"
            },
            {
                img: imgBairro_centro[9],
                titulo: "Severo Garage",
                texto_1: "<u>Horários</u>",
                texto_2: "terça - sábado: 11:30 - 14:00, 19:30 - 23:30" +
                    "<br>Domingo: 19:00 - 23:00",
                endereco: "<strong>Endereço:</strong> R. José do Patrocínio, 893 - centro, Novo Hamburgo - RS, 93310-240",
                contato: "Telefone: (51) 3600-6861" + "<br>*Não se arrisque, levamos até você.*",
                site: "<a href = 'https://severogarage.com.br/' target = '_blank'>" + "SEVERO" + "</a>" +
                    "<a href = 'https://www.facebook.com/severogarage/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_centro[10],
                titulo: "Farmácia",
                texto_1: "<u>Horários</u>",
                texto_2: "Atendimento 24 horas",
                endereco: "<strong>Endereço:</strong> R. Primeiro de Março, 415 - Centro, Novo Hamburgo - RS, 93320-043",
                contato: "Telefone: (51) 3035 - 2060" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'https://www.saojoaofarmacias.com.br/' target = '_blank'>" + "SÃO JOÃO" + "</a>" +
                    "<a href = 'https://www.facebook.com/farmaciassaojoao' target = '_blank'>" + "Facebook" + "</a>"

            },
            {
                img: imgBairro_centro[11],
                titulo: "Farmácia",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 8:00 - 20:00" +
                    "<br> Sábado: 8:00 - 19:00",
                endereco: "<strong>Endereço:</strong> Av. Pedro Adams Filho, 5573 - Centro, Novo Hamburgo - RS, 93310-002",
                contato: "Telefone: (51) 3218 - 9000" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'https://www.panvel.com/panvel/main.do' target = '_blank'>" + "Panvel" + "</a>"
            },

        ]
    },



];

/* Funçao criada para mostrar e construir na DOM as informações de cada bairro*/
const mostraCentro = (idBairro) => {

    // Sempre que selecionar outro bairro, o DOM é esvaziado e mostrado novamente os dados do bairro selecionado
    $(".row-2").empty();

    bairro_centro.filter((b) => { return b.id == idBairro }).forEach((bairro) => {

        bairro.cards.forEach((cards) => {

            $(".row-2").append("<div class=\"col-lg-4 col-md-6 d-flex align-items-stretch\">\n" +
                "<div class=\"flip-card-container\">\n" +
                "<div class=\"flip-card\">\n" +
                "<div class=\"flip-card-front\">" + cards.img + "</div>\n" +
                "<div class=\"flip-card-back\">\n" +
                "<h1>" + cards.titulo + "</h1>\n" +
                "<h6 class=\"texto_1\">" + cards.texto_1 + "</h6>\n" +
                "<h2 id=\"horas\">" + cards.texto_2 + "</h2>\n" +
                "<p id=\"endereco\">" + cards.endereco + "</p>\n" +
                "<p id=\"contato\">" + cards.contato + "</p>\n" +
                "<p id=\"link\">" + cards.site + "</p>\n" +
                "\n")
        })

    })
}