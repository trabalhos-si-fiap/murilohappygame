import Jogo from "../models/Jogo"

const jogos: Jogo[] = [
    {
        id: 1,
        nome: 'Code Panda',
        link: '//html5.gamedistribution.com/rvvASMiM/a673d7286acc41c898d159aba8f1fe0e/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.coquinhos.com%2Fprogramar-o-panda%2Fplay%2F&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5jb3F1aW5ob3MuY29tL3Byb2dyYW1hci1vLXBhbmRhL3BsYXkvIiwicGFyZW50RG9tYWluIjoiY29xdWluaG9zLmNvbSIsInRvcERvbWFpbiI6ImNvcXVpbmhvcy5jb20iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D(https://html5.gamedistribution.com/rvvASMiM/a673d7286acc41c898d159aba8f1fe0e/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.coquinhos.com%2Fprogramar-o-panda%2Fplay%2F&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5jb3F1aW5ob3MuY29tL3Byb2dyYW1hci1vLXBhbmRhL3BsYXkvIiwicGFyZW50RG9tYWluIjoiY29xdWluaG9zLmNvbSIsInRvcERvbWFpbiI6ImNvcXVpbmhvcy5jb20iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D)',
        imagem: "../../../public/static/imgs/code_panda.webp",
        descricao: 'Code Panda é um jogo interativo e divertido que ensina programação de forma acessível e envolvente. O jogador acompanha um adorável panda, que precisa resolver uma série de desafios e quebra-cabeças em um mundo colorido e vibrante.',
        isActive: true,
        recommendedAge: 5
    },

    {
        id: 2,
        nome: 'Jogo do Plural',
        link: 'https://assets.escolagames.com.br/jogos/jogo-do-plural/',
        imagem: "../../../public/static/imgs/jogo_do_plural_dbd01d63ed.jpg",
        descricao: 'O Jogo do Plural é uma atividade divertida que ajuda os jogadores a aprenderem sobre pluralização de palavras de forma lúdica e interativa. Através de desafios e perguntas, os jogadores praticam e reforçam suas habilidades de gramática.',
        isActive: true,
        recommendedAge: 5
    },
    
    {
        id: 3,
        nome: 'Texto Mate',
        link: 'https://www.cokitos.com/juegos/texto-mate/',
        imagem: "../../../public/static/imgs/texto-mate.png",
        descricao: 'Texto Mate é um jogo educativo que desafia os jogadores a resolverem problemas de texto e interpretação. Com uma variedade de questões, os usuários podem melhorar suas habilidades de leitura e compreensão em um ambiente divertido.',
        isActive: true,
        recommendedAge: 5
    },
    
    {
        id: 4,
        nome: 'Keyboard Puzzle',
        link: 'https://www.digipuzzle.net/minigames/keyboardpuzzle/keyboardpuzzle.htm?language=english',
        imagem: "../../../public/static/imgs/keyboard-puzzle.jpg",
        descricao: 'Keyboard Puzzle é um jogo que desafia os jogadores a resolverem quebra-cabeças usando o teclado. É uma ótima maneira de aprender sobre digitação e agilidade enquanto se divertem.',
        isActive: true,
        recommendedAge: 5
    
    },
    
]