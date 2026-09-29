
// Lista de elementos que precisam ser traduzidos, com suas respectivas traduções em português e inglês
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
        "discord-bot-title": "Bot de Monitoramento - Twitter (X)",
        "discord-bot-description": "Sistema desenvolvido em Python para monitorar publicações de contas específicas do Twitter (X) e encaminhar automaticamente novos conteúdos para o Discord, utilizando APIs, autenticação JWT, SQLite e processamento assíncrono.",
        "portfolio-title": "Portfólio Online",
        "portfolio-description": "Portfólio pessoal desenvolvido para apresentar projetos, habilidades, diplomas e certificados, com suporte a português e inglês e layout responsivo.",
        "github-btn": "Ver no GitHub",
        "demo-btn": "Ver Demo",
        contact: "Contatos",
        technologies: "Tecnologias usadas no projeto",
        certificates: "Diplomas e Certificados",
        "view-document": "Ver Documento",
        "support-title": "Apoie meu trabalho! 💙",
        "support-description": "Se você gostou dos meus projetos e quiser apoiar minha jornada como desenvolvedor, você pode contribuir via PIX.",
        "pix-key": "Chave PIX",
        "copy-pix": "Copiar chave",
        "pix-copied": "Chave copiada!",
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
        "discord-bot-title": "Monitoring Bot - Twitter (X)",
        "discord-bot-description": "Python-based system that monitors posts from specific Twitter (X) accounts and automatically forwards new content to Discord, using APIs, JWT authentication, SQLite, and asynchronous processing.",
        "portfolio-title": "Online Portfolio",
        "portfolio-description": "Personal portfolio developed to showcase projects, skills, diplomas, and certificates, with Portuguese and English support and a responsive layout.",
        "github-btn": "View on GitHub",
        "demo-btn": "View Demo",
        contact: "Contacts",
        technologies: "Technologies used in the project",
        certificates: "Diplomas and Certificates",
        "view-document": "View Document",
        "support-title": "Support my work! 💙",
        "support-description": "If you enjoyed my projects and would like to support my journey as a developer, you can contribute via PIX.",
        "pix-key": "PIX Key",
        "copy-pix": "Copy key",
        "pix-copied": "Key copied!",

    }

};


// Função para alterar o idioma do site
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


// Adiciona eventos de clique aos botões de idioma
const languageButtons = document.querySelectorAll(".language-btn"); 

languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const language = button.getAttribute("data-lang");

        changeLanguage(language);
        
    });

});


// Verifica se há um idioma salvo no localStorage e aplica-o ao carregar a página
const savedLanguage = localStorage.getItem("language")  ||  "pt";

changeLanguage(savedLanguage);


// Modal dos projetos
const projectModal = document.querySelector("#project-modal");
const projectModalClose = document.querySelector("#project-modal-close");
const projectCards = document.querySelectorAll(".project-card");

const projectModalImage = document.querySelector("#project-modal-image");
const projectModalTitle = document.querySelector("#project-modal-title");
const projectModalDescription = document.querySelector("#project-modal-description");
const projectModalTechList = document.querySelector(".project-modal-tech-list");
const projectModalGithub = document.querySelector(".project-modal-content .project-btn");

const projectsData = {
    discord: {
        image: "img/discord_bot.png",
        alt: "Prévia do Bot de Monitoramento do Twitter (X)",
        titleKey: "discord-bot-title",
        descriptionKey: "discord-bot-description",
        technologies: [
            "Python",
            "FastAPI",
            "Discord.py",
            "SQLite",
            "JWT",
            "HTTPX",
            "Asyncio"
        ],
        github: "https://github.com/pedrolfreiresousa/discord_bots"
    },

    portfolio: {
        image: "img/portfolio.png",
        alt: "Prévia do Portfólio Online",
        titleKey: "portfolio-title",
        descriptionKey: "portfolio-description",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],
        github: "https://github.com/pedrolfreiresousa/Site_Responsivo"
    }
};

projectCards.forEach((card) => {

    card.addEventListener("click", (event) => {

        if (event.target.closest(".project-btn")) {
            return;
        }

        const projectId = card.dataset.project || "discord";
        const project = projectsData[projectId];

        if (!project) {
            return;
        }

        projectModalImage.src = project.image;
        projectModalImage.alt = project.alt;

        const currentLanguage = localStorage.getItem("language") || "pt";

        projectModalTitle.textContent =
            translation[currentLanguage][project.titleKey];

        projectModalDescription.textContent =
            translation[currentLanguage][project.descriptionKey];
        
        projectModalTechList.innerHTML = "";

        project.technologies.forEach((technology) => {
            const technologyElement = document.createElement("span");
            technologyElement.textContent = technology;
            projectModalTechList.appendChild(technologyElement);
        });

        projectModalGithub.href = project.github;

        projectModal.classList.add("active");
    });
});

// Fecha pelo botão X
projectModalClose.addEventListener("click", () => {
    projectModal.classList.remove("active");
});

// Fecha ao clicar fora da janela
projectModal.addEventListener("click", (event) => {

    if (event.target === projectModal) {
        projectModal.classList.remove("active");
    }

});

// Modal de apoio via PIX
const supportModal = document.querySelector("#support-modal");
const supportModalClose = document.querySelector("#support-modal-close");
const supportButton = document.querySelector(".support-btn");

supportButton.addEventListener("click", (event) => {
    event.preventDefault();

    supportModal.classList.add("active");
});

supportModalClose.addEventListener("click", () => {
    supportModal.classList.remove("active");
});

supportModal.addEventListener("click", (event) => {
    if (event.target === supportModal) {
        supportModal.classList.remove("active");
    }
});

const pixCopyButton = document.querySelector("#pix-copy-btn");
const pixKey = document.querySelector("#pix-key");

pixCopyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(pixKey.textContent.trim());

    const currentLanguage = localStorage.getItem("language") || "pt";

    pixCopyButton.textContent = translation[currentLanguage]["pix-copied"];

    setTimeout(() => {
        pixCopyButton.textContent = translation[currentLanguage]["copy-pix"];
    }, 2000);
});

//Fecha o modal ao clicar "Esc"
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        projectModal.classList.remove("active");
        supportModal.classList.remove("active");
    }

});