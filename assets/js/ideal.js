/*Array's criado para adicionar imagens dentro de cada card dos bairros */


let imgBairro_ideal = [
    cardImg1 = '<img src="assets/img/cards/card_Ideal/dicas_ideia.jpg";" alt="imagem loja">',
    cardImg2 = '<img src="assets/img/cards/card_Ideal/atacadao.png";" alt="imagem mercado">',
    cardImg3 = '<img src="assets/img/cards/card_Ideal/maxxi.png";" alt="imagem mercado">',
    cardImg4 = '<img src="assets/img/cards/card_Ideal/barbearia125.png";" alt="imagem barbearia">',
    cardImg5 = '<img src="assets/img/cards/card_Ideal/salao.jpg";" alt="imagem salão">',
    cardImg6 = '<img src="assets/img/cards/card_Ideal/kiforma.jpg";" alt="imagem estética">',
    cardImg7 = '<img src="assets/img/cards/card_Ideal/sao_joao.png";" alt="imagem farmácia">',
    cardImg8 = '<img src="assets/img/cards/card_Ideal/agafarma.jpg";" alt="imagem farmácia">',
    cardImg9 = '<img src="assets/img/cards/card_Ideal/palmeira.jpg";" alt="imagem loja">',
    cardImg10 = '<img src="assets/img/cards/card_Ideal/mecanica.jpg";" alt="imagem mecânica">',

];


/* Array de Objetos de Bairros, que contem os dados do bairro e cards, para adicionar um bairro basta criar outro objeto bairro dentro deste 
array de objeto, e referenciar no DOM na classe "drop-down" dentro da "ul"*/
let bairro_ideal = [{

        name: 'Ideal',
        id: "ideal",
        cards: [{
                img: imgBairro_ideal[0],
                titulo: "Minimercado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 9:00 - 12:00, 14:30 - 19:30" +
                    "<br>Domingo: 8:00 - 12:00",
                endereco: "<strong>Endereço:</strong> Av. Cel. Frederico Linck, 384 - Ideal, Novo Hamburgo - RS, 93336-001",
                contato: "Telefone: (51) 3594 - 4958" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'https://www.facebook.com/Mercearia-Dicas-Ideias-389339911238199' target = '_blank'>" + "Facebook" + "</a>"
            },

            {
                img: imgBairro_ideal[1],
                titulo: "Hiper Mercado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 8:00 - 22:00" +
                    "<br>Domingo: 8:00 - 18:00",
                endereco: "<strong>Endereço:</strong> R. Primeiro de Março, 2711 - Ideal, Novo Hamburgo - RS, 93320-010",
                contato: "Telefone: (51) 3553 - 3200" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'https://www.atacadao.com.br/?fbclid=IwAR0iIRVeRvPZlMdOWeiLsooJdA2ZQu0XP_E7WIN_cxQep-yFTA53bHuOzFs' target = '_blank'>" + "ATACADÃO" + "</a>" +
                    "<a href = 'https://www.facebook.com/Atacad%C3%A3o-SA-491618757900660/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_ideal[2],
                titulo: "Hiper Mercado",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 8:00 - 21:00" +
                    "<br>Domingo: 9:00 - 18:00",
                endereco: "<strong>Endereço:</strong> R. Primeiro de Março, 2400 - Centro, Novo Hamburgo - RS, 93320-100",
                contato: "Telefone: (51) 3271 - 1870" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'https://www.maxxiatacado.com.br/site/onde-encontrar/unidade/216' target = '_blank'>" + "MAXXI" + "</a>" +
                    "<a href = 'https://www.facebook.com/maxxiatacado/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_ideal[3],
                titulo: "Barbearia",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda: 14:00 - 22:00" +
                    "<br> Terça - sábado: 8:30 - 22:00",
                endereco: "<strong>Endereço:</strong> Av. Cel. Frederico Linck, 125 - Ideal, Novo Hamburgo - RS, 93336-001",
                contato: "Telefone: (51) 99898-1738",
                site: "<a href = 'https://www.facebook.com/BarbeariaClub125' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_ideal[4],
                titulo: "Salão Beleza",
                texto_1: "<u>Horários</u>",
                texto_2: "terça - sexta: 9:15 - 18:30" +
                    "<br>Sábado: 8:30 - 17:30",
                endereco: "<strong>Endereço:</strong> R. Guarujá, 56 - Ideal, Novo Hamburgo - RS, 93336-110",
                contato: "Telefone: (51)  3939 - 2924",
                site: "<a href = 'https://www.facebook.com/anapurezaa/?rf=1258182234220149' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_ideal[5],
                titulo: "Estética",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 8:30 - 19:00" +
                    "<br>Sábado: 9:00 - 17:00",
                endereco: "<strong>Endereço:</strong> R. Tapes, 1240 - Ideal, Novo Hamburgo - RS, 93320-080",
                contato: "Telefone: (51) 3593 - 6385 <br>(51) 98236-3555",
                site: "<a href = 'https://www.instagram.com/kiformanhoficial/' target = '_blank'>" + "Instagram" + "</a>" +
                    "<a href = 'https://www.facebook.com/Atacad%C3%A3o-SA-491618757900660/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_ideal[6],
                titulo: "Farmácia",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 7:30 - 22:00" +
                    "<br>Domingo: 8:00 - 21:00",
                endereco: "<strong>Endereço:</strong> R. Primeiro de Março, 3150 - Ideal, Novo Hamburgo - RS, 93332-044",
                contato: "Telefone: (51) 3595 - 2114" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'https://www.saojoaofarmacias.com.br/' target = '_blank'>" + "SÃO JOÃO" + "</a>\n" +
                    "<a href = 'https://www.facebook.com/farmaciassaojoao' target = '_blank'>" + "Facebook" + "</a>\n"
            },
            {
                img: imgBairro_ideal[7],
                titulo: "Farmácia",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sábado: 8:00 - 22:00" +
                    "<br>Domingo: 8:00 - 18:00",
                endereco: "<strong>Endereço:</strong> R. Pau Brasil, 565 - Ideal, Novo Hamburgo - RS, 93332-100",
                contato: "Telefone: (51) 3553 - 3200" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'http://www.agafarma.com.br/' target = '_blank'>" + "AGAFARMA" + "</a>" +
                    "<a href = 'https://www.facebook.com/redeagafarma/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_ideal[8],
                titulo: "Auto Peças",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 8:00 - 12:00, 13:00 - 18:00" +
                    "<br>Sábado: 8:00 - 12:00",
                endereco: "<strong>Endereço:</strong> Av. Sete de Setembro, 586 - Ideal, Novo Hamburgo - RS, 93332-470",
                contato: "Telefone: (51) 3587-5341" + "<br>*Fazemos tele-entrga*",
                site: "<a href = 'https://www.autopalmeira.com.br/?fbclid=IwAR3U7Is8zFeh_-HiVQAIFwbNWXW7roQgVUhh90BshX2uRc-SZyrHj03v0T4' target = '_blank'>" + "PALMEIRA" + "</a>" +
                    "<a href = 'https://www.facebook.com/PalmeiraAutoPecas/' target = '_blank'>" + "Facebook" + "</a>"
            },
            {
                img: imgBairro_ideal[9],
                titulo: "Oficina Mecânica",
                texto_1: "<u>Horários</u>",
                texto_2: "segunda - sexta: 7:50 - 18:00",
                endereco: "<strong>Endereço:</strong> Av. Cel. Frederico Linck, 221 - Rio Branco, Novo Hamburgo - RS, 93336-001",
                contato: "Telefone: (51) 3066 - 7519" + "<br>*Buscamos seu carro.*",
                site: "<a href = 'https://www.dyegocar.com.br/?fbclid=IwAR1wSFuJC5m5xWfkNMkw3OQG7ZQneF08HX4pnM9FCcITW27lFLXk8iWxJIY' target = '_blank'>" + "DYEGO CAR" + "</a>" +
                    "<a href = 'https://www.facebook.com/DyegoCar' target = '_blank'>" + "Facebook" + "</a>"
            },


        ]
    },



];

/* Funçao criada para mostrar e construir na DOM as informações de cada bairro*/
const mostraIdeal = (idBairro) => {

    // Sempre que selecionar outro bairro, o DOM é esvaziado e mostrado novamente os dados do bairro selecionado
    $(".row-2").empty();

    bairro_ideal.filter((b) => { return b.id == idBairro }).forEach((bairro) => {

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