$(document).ready(function() {
    $('#trigger').click(function() {
        $('#overlay').fadeIn(300);
    });

    $('#close').click(function() {
        $('#overlay').fadeOut(300);
    });
});

const init = () => {

    const errorHandler = () => {
        submitButton.classList.remove('loading');
        submitButton.classList.remove('success');
        submitButton.classList.add('error');
        submitButton.textContent = "Erro, tente novamente";
    }

    const successHandler = () => {
        submitButton.classList.remove('loading');
        submitButton.classList.remove('error');
        submitButton.classList.add('success');
        submitButton.textContent = "Usuário logado";

    }

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            submitButton.textContent = "Loading...";

            fetch('https://reqres.in/api/login', { //COLOCAR API AQUI 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) => {
                if (response.status !== 200) {
                    return errorHandler();
                }

                successHandler();


            }).catch(() => {
                errorHandler();
            })
        })
    }
}

window.onload = init;