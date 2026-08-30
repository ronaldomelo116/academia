const faqs = document.querySelectorAll('.item-faq');

faqs.forEach(faq => {
    const pergunta = faq.querySelector('summary');

    pergunta.addEventListener('click', (evento) => {

        evento.preventDefault();

        if (faq.hasAttribute('open')) {

            faq.classList.add('closing');

            setTimeout(() => {
                faq.removeAttribute('open');
                faq.classList.remove('closing');
            }, 400);
        } else {
            faq.setAttribute('open', '');
        }
    });

});

const btnEnviar = document.getElementById('btn-enviar-zap');

btnEnviar.addEventListener('click', () => {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome === '' || email === '') {

        alert('Por favor, preencha seu Nome e E-mail para continuar!');
        return;

    }

    const mensagem = `Olá, vim pelo site! Gostaria de agendar uma aula experimental.%0A%0A*Meus dados:*%0ANome: ${nome}%0AE-mail: ${email}`;
    const numeroWhatsApp = '5584900000000';
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    window.open(url, '_blank');

    document.getElementById('form-matricula').reset();
});