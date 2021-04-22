/*Array's criado para adicionar imagens dentro de cada card dos bairros */
let imgBairro_liberdade = [
    cardImg1 = '<img src="assets/img/cards/card_Liberdade/minuano.png";" alt="imagem mercado">',
    cardImg2 = '<img src="assets/img/cards/card_Liberdade/redeforte.png";" alt="imagem mercado">',
    cardImg3 = '<img src="assets/img/cards/card_Liberdade/redmac.png";" alt="imagem loja">',
    cardImg4 = '<img src="assets/img/cards/card_Liberdade/pet.jpg";" alt="imagem loja">',
    cardImg5 = '<img src="assets/img/cards/card_Liberdade/estetica.png";" alt="imagem estética">',
    cardImg6 = '<img src="assets/img/cards/card_Liberdade/barbearia.jpg";" alt="imagem barbearia">',
    cardImg7 = '<img src="assets/img/cards/card_Liberdade/pecas.jpg";" alt="imagem loja">',
    cardImg8 = '<img src="assets/img/cards/card_Liberdade/doarAlimento.jpg";" alt="imagem centro doação">',
    cardImg9 = '<img src="assets/img/cards/card_Liberdade/doar.jpg";" alt="imagem centro doação">',
];



/* Array de Objetos de Bairros, que contem os dados do bairro e cards, para adicionar um bairro basta criar outro objeto bairro dentro deste 
array de objeto, e referenciar no DOM na classe "drop-down" dentro da "ul"*/
let bairro_liberdade = [{

        name: 'Liberdade',
        id: "liberdade",
        cards: [{
                img: imgBairro_liberdade[0],
                titulo: "Mercado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 8:00 - 12:00, 14:00 - 20:00" +
                    "<br>Sábado: 8:00 - 12:00 , 14:00 - 20:00",
                endereco: "<strong>Endereço:</strong> R. Rio Iguaçu, 61 - Liberdade, Novo Hamburgo - RS, 93332-360",
                contato: "Telefone: (51) 3587 - 5534",
                site: "<a href = 'https://www.facebook.com/minuanosupermercado' target = '_blank'>" + "Facebook" + "</a>" +
                    "<a href = 'https://www.instagram.com/minuanosupermercado/' target = '_blank'>" + "Instagram" + "</a>"

            },

            {
                img: imgBairro_liberdade[1],
                titulo: "Mercado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 8:00 - 12:00, 14:00 - 20:00" +
                    "<br>Domingo: 8:00 - 12:00",
                endereco: "<strong>Endereço:</strong> R. Chavantes, 210 - Liberdade, Novo Hamburgo - RS, 93330-290",
                contato: "Telefone: (51) 3587 - 2414",
                site: "<a href = 'https://www.redefort.com.br/site/' target = '_blank'>" + "REDEFORT" + "</a>" +
                    "<a href = 'https://www.facebook.com/SuperSulRedeFort' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_liberdade[2],
                titulo: "Loja Utilidades",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 8:00 - 12:00, 13:30 - 18:30" +
                    "<br>Sábado: 8:00 - 12:00",
                endereco: "<strong>Endereço:</strong> R. Primeiro de Março, 4179 - Liberdade, Novo Hamburgo - RS, 93330-375",
                contato: "Telefone: (51) 3066 - 0038",
                site: "<a href = 'https://www.redemac.com.br/' target = '_blank'>" + "REDEMAC" + "</a>" +
                    "<a href = 'https://www.facebook.com/redemac/about/?ref=page_internal' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_liberdade[3],
                titulo: "Pet Place NH",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 8:30 - 18:15" +
                    "<br>Sábado: 8:30 - 12:00",
                endereco: "<strong>Endereço:</strong> Avenida Pedro Adams Filho 4710 Loja 03 93340148 Novo Hamburgo, RS",
                contato: "Telefone: (51) 3781 - 2262",
                site: "<a href = 'https://www.instagram.com/petplacenh/?fbclid=IwAR1pad8ngmlPRvdNyvIUPdY5GwWrMun0dIX9PM4PWmDJeJ_YEKTZ_iEz5bk' target = '_blank'>" + "Instagram" + "</a>" +
                    "<a href = 'https://www.facebook.com/petplacenh' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_liberdade[4],
                titulo: "Estética",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 7:00 - 20:00" +
                    "<br>Sábado: 7:00 - 17:00",
                endereco: "<strong>Endereço:</strong> R. Rio Iguaçu, 61 - Liberdade, Novo Hamburgo - RS, 93332-360",
                contato: "Telefone: (51) 99171-5131",
                site: "<a href = 'https://www.facebook.com/esteticanh/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_liberdade[5],
                titulo: "Barbearia",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 9:00 - 11:30, 13:30 - 19:00" +
                    "<br>Sábado: 9:00 - 11:30, 13:30 - 19:00",
                endereco: "<strong>Endereço:</strong>  Rua Minuano, 250. Liberdade. 93330150 Novo Hamburgo, RS",
                contato: "Telefone: (51) 98627-9491",
                site: "<a href = 'https://www.instagram.com/gunzelbarber/' target = '_blank'>" + "Instagram" + "</a>" +
                    "<a href = 'https://www.facebook.com/barbeariagunzelbarber/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_liberdade[6],
                titulo: "Auto Peças",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 8:00 - 12:00, 13:00 - 18:30" +
                    "<br>Sábado: 8:00 - 12:00",
                endereco: "<strong>Endereço:</strong> R. Primeiro de Março, 3791 - Liberdade, Novo Hamburgo - RS, 93330-375",
                contato: "Telefone: (51) 3587-1314",
                site: "<a href = 'https://rosoautopecas.com.br/' target = '_blank'>" + "ROSO" + "</a>" +
                    "<a href = 'https://www.facebook.com/ROSOAUTOPECAS' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_liberdade[7],
                titulo: "Doações",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta:  13:30 - 17:30",
                endereco: "<strong>Endereço:</strong> R. 5 de Abril, nº 29 93310-070 Novo Hamburgo, RS",
                contato: "Agendar entrega: (51) 3527 - 0044",
                site: "<a href = 'https://www.facebook.com/bancoalimentosbarc/' target = '_blank'>" + "Facebook" + "</a>" +
                    "<a href = 'https://www.cliquealimentos.com.br/Inicial' target = '_blank'>" + "Clique Alimentos" + "</a>"

            },
            {
                img: imgBairro_liberdade[8],
                titulo: "Ações",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta:  16:00 - 20:00",
                endereco: "<strong>Endereço:</strong> R. Araxá, nº 505 Novo Hamburgo, RS",
                contato: "Não leve doações ao hospital, para que os profissionais se dediquem exclusivamente ao atendimento médico. Veja como proceder pelo site.",
                site: "<a href = 'https://www.jornalnh.com.br/noticias/especial_coronavirus/2020/03/26/novo-hamburgo-disponibiliza-canais-para-doacao-de-materiais-e-insumos-para-enfrentamento-da-covd-19.html' target = '_blank'>" + "Mais informações" + "</a>"
            },

        ]
    },



];



/* Funçao criada para mostrar e construir na DOM as informações de cada bairro*/
const mostraLiberdade = (idBairro) => {

    // Sempre que selecionar outro bairro, o DOM é esvaziado e mostrado novamente os dados do bairro selecionado
    $(".row-2").empty();

    bairro_liberdade.filter((b) => { return b.id == idBairro }).forEach((bairro) => {

        bairro.cards.forEach((cards) => {

            $(".row-2").append("<div class=\"col-lg-4 col-md-6 d-flex align-items-stretch\">" +
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