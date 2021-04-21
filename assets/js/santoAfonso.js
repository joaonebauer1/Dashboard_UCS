/*Array's criado para adicionar imagens dentro de cada card dos bairros */
let imgBairro_santoAfonso = [
    cardImg1 = '<img src="assets/img/cards/card_SantoAfonso/mercado.jpg";" alt="imagem mercado">',
    cardImg2 = '<img src="assets/img/cards/card_SantoAfonso/alemao.jpg";" alt="imagem mercado">',
    cardImg3 = '<img src="assets/img/cards/card_SantoAfonso/monaco.png";" alt="imagem mercado">',
    cardImg4 = '<img src="assets/img/cards/card_SantoAfonso/barbearia19.png";" alt="imagem barbearia">',
    cardImg5 = '<img src="assets/img/cards/card_SantoAfonso/vagalume.png";" alt="imagem mecânica">',
    cardImg6 = '<img src="assets/img/cards/card_SantoAfonso/tche_farmacia.jpg";" alt="imagem farmácia">',
    cardImg7 = '<img src="assets/img/cards/card_SantoAfonso/vida.png";" alt="imagem farmácia">',
];



/* Array de Objetos de Bairros, que contem os dados do bairro e cards, para adicionar um bairro basta criar outro objeto bairro dentro deste 
array de objeto, e referenciar no DOM na classe "drop-down" dentro da "ul"*/
let bairro_santoAfonso = [{

        name: 'Santo Afonso',
        id: "santo_afonso",
        cards: [{
                img: imgBairro_santoAfonso[0],
                titulo: "Supermarcado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 8:00 - 12:00, 14:00 - 20:00" +
                    "<br>Domingo: 8:00 - 12:00",
                endereco: "<strong>Endereço:</strong> R. Alfredo Rui Rheinheimer, 431 - Santo Afonso, Novo Hamburgo - RS, 93420-245",
                contato: "Telefone: (51) 3586 - 0556" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'https://www.facebook.com/Supermarcados-S%C3%A3o-Jorge-421150884596389/' target = '_blank'>" + "Facebook" + "</a>"

            },

            {
                img: imgBairro_santoAfonso[1],
                titulo: "Mercado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 8:00 - 12:00, 14:00 - 20:00" +
                    "<br>Domingo: 8:00 - 12:00",
                endereco: "<strong>Endereço:</strong> R. Dez de Dezembro, 118 - Santo Afonso, Novo Hamburgo - RS, 93420-544",
                contato: "Telefone: (51) 3398 - 9500" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'https://www.facebook.com/mercadodoalemaosantoafonso' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_santoAfonso[2],
                titulo: "Mercado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 8:00 - 12:00, 14:00 - 19:30",
                endereco: "<strong>Endereço:</strong> Av. Montevidéu, 777 - Santo Afonso, Novo Hamburgo - RS, 93420-400",
                contato: "Telefone: (51) 3035 - 1430" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'https://monacoatacado.com.br/' target = '_blank'>" + "MONACO" + "</a>" +
                    "<a href = 'https://www.facebook.com/monacoatacadoevarejo/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_santoAfonso[3],
                titulo: "Barbearia",
                texto_1: "<u>Horários</u>",
                texto_2: "Segunda: 14:00 - 19:30" +
                    "<br>Terça - sexta: 9:00 - 19:30" +
                    "<br>Sábado: 8:00 - 18:00",
                endereco: "<strong>Endereço:</strong> R. Assuncion, 907 - Santo Afonso, Novo Hamburgo - RS, 93420-320",
                contato: "Telefone: (51) 98682-0812",
                site: "<a href = 'https://www.instagram.com/barbearia19sp/' target = '_blank'>" + "Instagram" + "</a>" +
                    "<a href = 'https://www.facebook.com/Barbearia19SP/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_santoAfonso[4],
                titulo: "Oficina Mecânica",
                texto_1: "<u>Horários</u>",
                texto_2: "Segunda - sexta: 8:00 - 12:00, 13:00 - 22:00" +
                    "<br>Sábado: 8:00 - 12:00",
                endereco: "<strong>Endereço:</strong> R. Assuncion, 192 - Santo Afonso, Novo Hamburgo - RS, 93420-370",
                contato: "Telefone: (51) 3066-6444" + "<br>*Buscamos seu carro*",
                site: "<a href = 'https://www.vagalumeautocenter.com.br/' target = '_blank'>" + "VAGALUME" + "</a>" +
                    "<a href = 'https://www.facebook.com/oficinamecanicavagalume' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_santoAfonso[5],
                titulo: "Farmácia",
                texto_1: "<u>Horários</u>",
                texto_2: "Segunda - sábado: 8:00 - 20:00",
                endereco: "<strong>Endereço:</strong> R. México, 429 - Santo Afonso, Novo Hamburgo - RS, 93420-310",
                contato: "Telefone: (51) 3065 - 6918" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'http://tchefarmacias.com.br/' target = '_blank'>" + "TCHÊ FARMACIAS" + "</a>" +
                    "<a href = 'https://www.facebook.com/RedeTcheFarmacias/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_santoAfonso[6],
                titulo: "Farmácia",
                texto_1: "<u>Horários</u>",
                texto_2: "Segunda - sábado: 8:00 - 20:00",
                endereco: "<strong>Endereço:</strong> R. Guia Lopes, 855 - Santo Afonso, Novo Hamburgo - RS, 93425-257",
                contato: "Telefone: (51) 3527 - 4984" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'http://www.vidafarmacias.com.br/' target = '_blank'>" + "FARMÁCIA" + "</a>" +
                    "<a href = 'https://www.facebook.com/farmaciashamburguesa' target = '_blank'>" + "Facebook" + "</a>"
            },

        ]
    },



];

/* Funçao criada para mostrar e construir na DOM as informações de cada bairro*/
const mostraSantoAfonso = (idBairro) => {

    // Sempre que selecionar outro bairro, o DOM é esvaziado e mostrado novamente os dados do bairro selecionado
    $(".row-2").empty();

    bairro_santoAfonso.filter((b) => { return b.id == idBairro }).forEach((bairro) => {

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