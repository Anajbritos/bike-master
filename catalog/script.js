
document.addEventListener("DOMContentLoaded", function () {
    const bikes = [
        {
            nome: "Speed Pro 700",
            descricao: "Bicicleta de estrada leve e rápida, ideal para velocidade.",
            preco: "R$ 5.299",
            imagem: "bike1.png",
            tag: "Speed",
            tagClass: ""
        },
        {
            nome: "Mountain XT 29",
            descricao: "Pronta para trilhas e terrenos difíceis, com suspensão moderna.",
            preco: "R$ 4.899",
            imagem: "bike2.png",
            tag: "MTB",
            tagClass: "green"
        },
        {
            nome: "Urban Flex 500",
            descricao: "Ideal para a cidade, confortável e estilosa para o dia a dia.",
            preco: "R$ 3.150",
            imagem: "bike3.png",
            tag: "Urbana",
            tagClass: "red"
        },
        {
            nome: "Groove Overdrive",
            descricao: "Diversão garantida para os pequenos, com rodinhas de apoio.",
            preco: "R$ 33.000,00",
            imagem: "bike4.png",
            tag: "Urbana",
            tagClass: "red"
        },
        {
            nome: "Fold Urban 2024",
            descricao: "Modelo dobrável e prático para o dia a dia.",
            preco: "R$ 2.799",
            imagem: "bike5.png",
            tag: "Dobrável",
            tagClass: ""
        },
        {
            nome: "E-Bike Premium",
            descricao: "Mobilidade sustentável com assistência elétrica.",
            preco: "R$ 8.990",
            imagem: "bike6.png",
            tag: "Elétrica",
            tagClass: ""
        },
        {
            nome: "Lady Comfort",
            descricao: "Design elegante e confortável, perfeita para passeios urbanos.",
            preco: "R$ 2.350",
            imagem: "bike1.png",
            tag: "Feminina",
            tagClass: ""
        },
        {
            nome: "Retro Classic",
            descricao: "Visual vintage, charme incomparável para passeios nostálgicos.",
            preco: "R$ 2.650",
            imagem: "bike2.png",
            tag: "Retrô",
            tagClass: ""
        },
        {
            nome: "Kids Fun 16",
            descricao: "Para crianças iniciantes, com rodinhas de apoio e segurança.",
            preco: "R$ 1.399",
            imagem: "bike3.png",
            tag: "Infantil",
            tagClass: "yellow"
        },
        {
            nome: "Explorer 900",
            descricao: "Alta performance em terrenos irregulares e trilhas longas.",
            preco: "R$ 6.899",
            imagem: "bike4.png",
            tag: "MTB",
            tagClass: "green"
        },
        {
            nome: "City Move 700",
            descricao: "Compacta e funcional para a rotina urbana agitada.",
            preco: "R$ 3.599",
            imagem: "bike5.png",
            tag: "Urbana",
            tagClass: "red"
        },
        {
            nome: "BMX Xtreme",
            descricao: "Para manobras radicais e pistas de skate.",
            preco: "R$ 2.499",
            imagem: "bike6.png",
            tag: "BMX",
            tagClass: ""
        },
        {
            nome: "Gravel Pro",
            descricao: "Combina velocidade e resistência para longas distâncias.",
            preco: "R$ 7.199",
            imagem: "bike1.png",
            tag: "Gravel",
            tagClass: ""
        }
    ];

    const grid = document.querySelector(".bike-grid");
    const searchInput = document.querySelector(".catalog-search input");

    const verMaisBtn = document.createElement("button");
    verMaisBtn.textContent = "Ver mais";
    verMaisBtn.className = "btn-ver-mais";
    grid.after(verMaisBtn);

    let mostrando = 10;
    let termoAtual = "";

    function renderBikes(lista) {
        grid.innerHTML = "";

        const bikesParaMostrar = lista.slice(0, mostrando);

        if (bikesParaMostrar.length === 0) {
            grid.innerHTML = "<p style='grid-column: 1 / -1;'>Nenhuma bicicleta encontrada.</p>";
            verMaisBtn.style.display = "none";
            return;
        }

        bikesParaMostrar.forEach(bike => {
            const card = document.createElement("div");
            card.className = "bike-card";

            card.innerHTML = `
                <img src="${bike.imagem}" alt="${bike.nome}">
                <h3>${bike.nome}</h3>
                <p>${bike.descricao}</p>
                <div class="bike-meta">
                    <span class="price">${bike.preco}</span>
                    <span class="tag ${bike.tagClass}">${bike.tag}</span>
                </div>
                <button>🚲 Comprar</button>
            `;

            grid.appendChild(card);
        });

        if (lista.length > 10) {
            verMaisBtn.style.display = "block";
            verMaisBtn.textContent = mostrando >= lista.length ? "Ver menos" : "Ver mais";
        } else {
            verMaisBtn.style.display = "none";
        }
    }

    function aplicarFiltro() {
        const termo = termoAtual.toLowerCase();

        const filtradas = bikes.filter(bike =>
            bike.nome.toLowerCase().includes(termo) ||
            bike.tag.toLowerCase().includes(termo)
        );

        renderBikes(filtradas);
    }

    searchInput.addEventListener("input", function () {
        termoAtual = this.value;
        mostrando = 10;
        aplicarFiltro();
    });

    verMaisBtn.addEventListener("click", function () {
        const filtradas = bikes.filter(bike =>
            bike.nome.toLowerCase().includes(termoAtual.toLowerCase()) ||
            bike.tag.toLowerCase().includes(termoAtual.toLowerCase())
        );

        if (mostrando >= filtradas.length) {
            mostrando = 10;
        } else {
            mostrando += 7;
        }

        renderBikes(filtradas);
    });

    aplicarFiltro();
});
