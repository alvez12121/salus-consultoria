document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const empresa = document.getElementById('empresa').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const contactMethod = document.getElementById('contact-method').value;

    // Função para enviar por e-mail
    function enviarEmail() {
        const emailDestino = 'seuemail@dominio.com'; // Substitua pelo seu endereço de e-mail
        const assunto = 'Formulário de Contato';
        let corpoEmail = `Nome: ${nome}%0A`;
        corpoEmail += `Empresa: ${empresa}%0A`;
        corpoEmail += `Telefone: ${telefone}%0A`;
        corpoEmail += `Email: ${email}%0A`;
        
        if (mensagem) {
            corpoEmail += `Mensagem: ${mensagem}%0A`;
        }

        const mailtoLink = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;
        window.location.href = mailtoLink;
    }

    // Função para enviar pelo WhatsApp
    function enviarWhatsApp() {
        const numeroWhatsApp = '5537999386472'; // Número formatado corretamente para o WhatsApp
        let texto = `*Nome:* ${nome}%0A`;
        texto += `*Empresa:* ${empresa}%0A`;
        texto += `*Telefone:* ${telefone}%0A`;
        texto += `*Email:* ${email}%0A`;
        
        if (mensagem) {
            texto += `*Mensagem:* ${mensagem}%0A`;
        }

        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        window.open(urlWhatsApp, '_blank');
    }

    // Verifica o método de contato selecionado e chama a função correspondente
    if (contactMethod === 'email') {
        enviarEmail();
    } else if (contactMethod === 'whatsapp') {
        enviarWhatsApp();
    }
});

document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const empresa = document.getElementById('empresa').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Monta a mensagem com os dados
    let texto = `**Nome:** ${nome}\n**Empresa:** ${empresa}\n**Telefone:** ${telefone}\n**Email:** ${email}`;
    
    // Adiciona a mensagem se estiver preenchida
    if (mensagem) {
        texto += `\n**Mensagem:** ${mensagem}`;
    }

    // Exibe a mensagem no console (para teste)
    console.log(texto);
    
    // Exibe a mensagem de confirmação
    exibirMensagemConfirmacao();
});

function exibirMensagemConfirmacao() {
    // Exibe a div de confirmação
    const mensagemConfirmacao = document.getElementById('mensagem-confirmacao');
    mensagemConfirmacao.style.display = 'block';

    // Define um temporizador para ocultar a mensagem após alguns segundos
    setTimeout(function() {
        mensagemConfirmacao.style.display = 'none';
    }, 5000); // Tempo em milissegundos (5 segundos)
}
