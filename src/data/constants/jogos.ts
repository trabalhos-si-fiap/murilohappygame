import Jogo from "../models/Jogo"

const jogos: Jogo[] = [
    {
        id: 1,
        nome: 'Code Panda',
        link: '//html5.gamedistribution.com/rvvASMiM/a673d7286acc41c898d159aba8f1fe0e/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.coquinhos.com%2Fprogramar-o-panda%2Fplay%2F&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5jb3F1aW5ob3MuY29tL3Byb2dyYW1hci1vLXBhbmRhL3BsYXkvIiwicGFyZW50RG9tYWluIjoiY29xdWluaG9zLmNvbSIsInRvcERvbWFpbiI6ImNvcXVpbmhvcy5jb20iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D(https://html5.gamedistribution.com/rvvASMiM/a673d7286acc41c898d159aba8f1fe0e/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.coquinhos.com%2Fprogramar-o-panda%2Fplay%2F&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5jb3F1aW5ob3MuY29tL3Byb2dyYW1hci1vLXBhbmRhL3BsYXkvIiwicGFyZW50RG9tYWluIjoiY29xdWluaG9zLmNvbSIsInRvcERvbWFpbiI6ImNvcXVpbmhvcy5jb20iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D)',
        imagem: "https://media.licdn.com/dms/image/v2/C4D0BAQHaWOxGTL1pHA/company-logo_200_200/company-logo_200_200/0/1660646528824/code_panda_academy_logo?e=2147483647&v=beta&t=fMw_pC6-rq91zEvOdtDrAne7rVnq9MQHVTsgfzDrz-8",
        descricao: 'O Code Panda é um jogo interativo que ensina programação de forma divertida, acompanhando um panda em desafios coloridos.',
        isActive: true,
        recommendedAge: 5
    },

    {
        id: 2,
        nome: 'Jogo do Plural',
        link: 'https://assets.escolagames.com.br/jogos/jogo-do-plural/',
        imagem: "https://adm.escolagames.com.br/uploads/jogo_do_plural_dbd01d63ed.jpg",
        descricao: 'O Jogo do Plural é uma atividade lúdica que ensina pluralização de palavras através de desafios e perguntas.',
        isActive: true,
        recommendedAge: 5
    },
    
    {
        id: 3,
        nome: 'Texto Mate',
        link: 'https://www.cokitos.com/juegos/texto-mate/',
        imagem: "https://www.coquinhos.com/wp-content/uploads/2021/12/jogo-math-game.jpeg",
        descricao: 'O Texto Mate é um jogo educativo que ajuda a resolver problemas de texto e interpretação, melhorando a leitura e compreensão.',
        isActive: true,
        recommendedAge: 5
    },
   
]

export default jogos;