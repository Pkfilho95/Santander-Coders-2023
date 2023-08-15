/*
    Você foi contratado como programador para uma grande rede de lojas de automóveis (CarStore) e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição (sejam criativos).
    
    - Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada, onde estarão armazenados os emails dos clientes.
    - A lista de emails armazenará, além do email de cada cliente, uma flag com a decisão do cliente sobre receber ou não comunicações de marketing.
    - Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do e-mail para um cliente.

    Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, a entrega completa da funcionalidade:
    
    1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.

    2. Criar uma função para montar o corpo do e-mail a ser enviado.

    3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.

    Os passos acima são um guia, mas não obrigatórios. Podem desenvolver uma lógica diferente, que atenda ao solicitado.
*/

const enviarEmail = require('./envia-email.js')

// função que verifica o dia da semana
// retorna true se for segunda-feira
const verifyDay = () => {
    const today = new Date().getDay()
    return true ? today === 1 : false
}

// função que cria o corpo do email a partir de um template
// retorna o corpo do email
const createBody = (client) => {
    let body = `
    Prezado(a) ${client.name},

    Esperamos que você esteja tendo um ótimo dia!

    Estamos enviando as últimas novidades de nossas lojas.

    Novos carros:
    =======================

    1. Modelo Zephyr 2023 - Motor potente e tecnologia de última geração.
    2. Elegance X1 2023 - Design sofisticado e eficiência energética.
    3. Velocity Prime 2023 - Esportividade combinada com conforto de luxo.

    Mais vendidos:
    =======================

    1. City Cruiser 2022 - Praticidade urbana e baixo consumo de combustível.
    2. Adventure Explorer 2022 - Versatilidade para aventuras off-road.
    3. Urban Compact 2022 - Compacto, ideal para navegar pela cidade com estilo.

    Condições de Aquisição:
    =======================

    Como o(a) senhor(a) visitou nossas lojas no mês passado, temos uma oferta imperdível!
    Na compra de um automóvel, a loja pagará pelo licenciamento e pelo IPVA. Além disso, a primeira revisão é por nossa conta!

    Essa condição fica válida até o final do mês e é válido para qualquer automóvel de nossas lojas!
    Não perca a oportunidade!
    `

    return body
}

// array de clientes contendo nome, email e se recebe notificações
let clients = [
    {
        name: 'João da Silva',
        email: 'joao@example.com',
        notification: true
    },
    {
        name: 'Maria Souza',
        email: 'maria@example.com',
        notification: false
    },
    {
        name: 'Pedro Oliveira',
        email: 'pedro@example.com',
        notification: true
    },
    {
        name: 'Ana Santos',
        email: 'ana@example.com',
        notification: true
    },
    {
        name: 'Carlos Ferreira',
        email: 'carlos@example.com',
        notification: false
    }
]

// bloco principal
if (verifyDay()) {

    // filtra quais clientes podem receber notificações
    clients = clients.filter((client) => client.notification)
    
    // envia email para cada cliente
    for (let client of clients) {
        enviarEmail(
            client.email, 
            "Novidades imperdíveis",
            createBody(client))
    }
}
