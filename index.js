// создаем главный container
const container = document.createElement('div');
container.classList.add('container');

// потом кароче болады card__container
const firstCardContainer = document.createElement('div');
firstCardContainer.classList.add('card__container');

// первые продукты кетты
const firstWines = [
    {
        imgSrc: 'imj/BadiaAPassignano.jpg',
        alt: 'image',
        description: 'Вино Badia A Passignano, Chianti Classico DOCG Gran Selezione 15%',
        price: '195 355 tg'
    },
    {
        imgSrc: 'imj/ChateuLatour-Martillac.jpeg',
        alt: 'image',
        description: 'Вино Chateau Latour-Martillac, Pessac-Leognan AOC 14%, 2015',
        price: '35 840 tg'
    },
    {
        imgSrc: 'imj/MirvalRose.jpeg',
        alt: 'image',
        description: 'Вино Miraval Rose, Cotes de Provence AOC 13% (0,75L)',
        price: '15 780 tg'
        // поменять стринг на цифры
    }
];

// див аймж спан аш2 а и баттон создать еттык и аппенд чайлд калдык дивке бырыншы потом артикльга содан онын барын родительский элементке тыктык (дивке саламыз)
firstWines.forEach(wine => {
    const article = document.createElement('article');
    article.classList.add('card__article');

    const img = document.createElement('img');
    img.src = wine.imgSrc;
    img.alt = wine.alt;
    img.classList.add('card__img');

    const div = document.createElement('div');
    div.classList.add('card__data');

    const span = document.createElement('span');
    span.classList.add('card__description');
    span.textContent = wine.description;

    const h2 = document.createElement('h2');
    h2.classList.add('card__title');
    h2.textContent = wine.price;

    const a = document.createElement('a');
    a.href = '#';
    a.classList.add('card__button');
    a.textContent = 'BUY';

    div.appendChild(span);
    div.appendChild(h2);
    div.appendChild(a);

    article.appendChild(img);
    article.appendChild(div);

    firstCardContainer.appendChild(article);
});

// тут тоже самое но уже 2шы карточканыкы
const secondCardContainer = document.createElement('div');
secondCardContainer.classList.add('card__container');

// Array of wine data for the second container
const secondWines = [
    {
        imgSrc: 'imj/PierreZeroMerlot.jpeg',
        alt: 'image',
        description: 'Вино Pierre Zero Merlot 0% (0,75L)',
        price: '5 780tg'
    },
    {
        imgSrc: 'imj/Pouilly-FumeAOC.jpeg',
        alt: 'image',
        description: 'Вино Pouilly-Fume AOC `En Travertin` Henri Bourgeois 13%',
        price: '18 265 tg'
    },
    {
        imgSrc: 'imj/Tignanello.jpeg',
        alt: 'image',
        description: 'Вино Tignanello, Toscana IGT 13,5%, 2018 (0,75L)',
        price: '112 735 tg'
    }
];

// тоже сондай элементтер создаем и аппенд чайлд в див потом в артикль 
secondWines.forEach(wine => {
    const article = document.createElement('article');
    article.classList.add('card__article');

    const img = document.createElement('img');
    img.src = wine.imgSrc;
    img.alt = wine.alt;
    img.classList.add('card__img');

    const div = document.createElement('div');
    div.classList.add('card__data');

    const span = document.createElement('span');
    span.classList.add('card__description');
    span.textContent = wine.description;

    const h2 = document.createElement('h2');
    h2.classList.add('card__title');
    h2.textContent = wine.price;

    const a = document.createElement('a');
    a.href = '#';
    a.classList.add('card__button');
    a.textContent = 'BUY';

    div.appendChild(span);
    div.appendChild(h2);
    div.appendChild(a);

    article.appendChild(img);
    article.appendChild(div);

    secondCardContainer.appendChild(article);
});

// содан екеуын быр ГЛЛАААААВВВНЫЙ дивка саламыз вощем
container.appendChild(firstCardContainer);
container.appendChild(secondCardContainer);

// и сол ГЛААААВНЫЙ дивы приютили документке 
document.body.appendChild(container);
