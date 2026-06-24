function enviarcursoWhatsApp() {
    const meuNumerWhatsApp = "5542984219532"; 

    const Mensagem = `Olá, tudo bem? 
Gostaria de mais informações sobre os cursos...`;

    // 4. Codificar a mensagem para a URL (suporta acentos e espaços)
    const mensageCodificada = encodeURIComponent(Mensagem);

    // 5. Gerar o link wa.me
    const urlWhatsApp = `https://wa.me/${meuNumerWhatsApp}?text=${mensageCodificada}`;

    // 6. Abrir o WhatsApp (em uma nova aba)
    window.open(urlWhatsApp, '_blank');
}

function enviarParaWhatsApp() {
    //variavel com o numero do meu cliente
    const meuNumeroWhatsApp = "5542984219532"; 

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('tel').value;
    const data = document.getElementById('data').value;

    if (!nome ) {
        alert("Por favor, preencha seu nome.");
        return;
    }
    
    // Antes de formatar, verifique se a data existe
    if (!data) {
        alert("Por favor, selecione uma data para o agendamento.");
        return;
    }
    
    //Formata a data
    const dataFormatada = data.split('-').reverse().join('/');
    

    //Montar o texto no whats
    const textoMensagem = `Olá, tudo bem? 
Meu nome é ${nome}, gostaria de agendar uma maquiagem no dia ${dataFormatada}! 
Qual a disponibilidade de horário?`;

    // 4. Codificar a mensagem para a URL (suporta acentos e espaços)
    const mensagemCodificada = encodeURIComponent(textoMensagem);

    // 5. Gerar o link wa.me
    const urlWhatsApp = `https://wa.me/${meuNumeroWhatsApp}?text=${mensagemCodificada}`;

    // 6. Abrir o WhatsApp (em uma nova aba)
    window.open(urlWhatsApp, '_blank');
}

data.addEventListener('focus', function (ev) {
    try {
        ev.target.showPicker();
    } catch (error) {
        console.log("showPicker não suportado neste navegador.");
    }
});

const element = document.getElementById('tel');
const maskOptions = {
  mask: '(00) 0 0000-0000'
};
const mask = IMask(element, maskOptions);