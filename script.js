const translation = {

    pt:{
        support: "Apoie o meu trabalho!",
        role: "Desenvolvedor Back-end",
        subtitle1: "Técnico em Informática",
        subtitle2: "Estudante de Análise e Desenvolvimento de Sistemas",
        about: "Sobre mim",
        "about-text": "Olá! Sou Pedro Lucas Freire Sousa, estudante de Análise e Desenvolvimento de Sistemas e formado como Técnico em Informática. Tenho experiência em desenvolvimento Back-end, com participação em projetos voltados ao ecossistema Web3, além de conhecimentos em Python, Node.js, JavaScript, HTML, CSS, SQL, AWS e Git/GitHub. Sou apaixonado por tecnologia e estou sempre em busca de novos desafios que me permitam evoluir como desenvolvedor. Gosto de criar soluções que resolvam problemas reais, aprender novas ferramentas e transformar ideias em projetos funcionais. Neste portfólio você encontrará alguns dos projetos que desenvolvi ao longo da minha jornada, demonstrando minhas habilidades técnicas e meu compromisso com o aprendizado contínuo.",
        skills: "Habilidades",
        projects: "Projetos",
        "project-title": "Projeto 1",
        "project-description": "Descrição do projeto 1...",
        "github-btn": "Ver no GitHub",
        "demo-btn": "Ver Demo",
        contact: "Contatos",
    },

    en:{
        support: "Support my work!",
        role: "Back-end Developer",
        subtitle1: "It Technician",
        subtitle2: "Student of Systems Analysis and Development",
        about: "About me",
        "about-text": "Hello! I'm Pedro Lucas Freire Sousa, a Systems Analysis and Development student and a qualified IT Technician. I have experience in back-end development, with participation in projects focused on the Web3 ecosystem, as well as knowledge of Python, Node.js, JavaScript, HTML, CSS, SQL, AWS, and Git/GitHub. I'm passionate about technology and always looking for new challenges that allow me to grow as a developer. I enjoy creating solutions that solve real-world problems, learning new tools, and turning ideas into functional projects. In this portfolio, you will find some of the projects I have developed throughout my journey, demonstrating my technical skills and commitment to continuous learning.",
        skills: "Skills",
        projects: "Projects",
        "project-title": "Project 1",
        "project-description": "Description of Project 1...",
        "github-btn": "View on GitHub",
        "demo-btn": "View Demo",
        contact: "Contacts",
    }

};

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-i18n]");
    
    elements.forEach((element) => {

        const key = element.getAttribute("data-i18n");
        
        if (translation[language] [key]) {

            element.textContent = translation[language] [key];
        }
    });

    document.documentElement.lang = language == "pt" ? "pt-BR" : "en-US";

    localStorage.setItem("language", language);
}

const languageButtons = document.querySelectorAll(".language-btn"); 

languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const language = button.getAttribute("data-lang");

        changeLanguage(language);
        
    });

});

const savedLanguage = localStorage.getItem("language")  ||  "pt";

changeLanguage(savedLanguage);