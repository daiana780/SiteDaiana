// Função para adicionar interatividade (opcional)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    // Adiciona animação ao rolar a página
    window.addEventListener("scroll", () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });

    // Inicializa as animações
    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
    });
});