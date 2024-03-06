alert("Are you 21?")
// выводит диалоговое окно с сообщением для пользователя


const y = document.querySelector("#dfdf")
y.addEventListener("click", () => {   //событие обрабатыватету //жазган событиены обрабатыватетды   //жазган функцияга байланысты 
    window.location.href = "login.html"
})


const ys = document.querySelector("#fdfd")
ys.addEventListener("click", () => {
    window.location.href = "card.html"
})



// виндоу локатион адресс страницы





// split БОЛЕДы АЙДИДЫ ТАБУ УШын


// пуш массивтын сонына эллемент косады


// мап арбыр элементтке трансформация жасайды (ол фильтр )
// быр маисвтан екыншы трансформированный НОВЫЙ масив жасайды


// джойн карточкаларды косып жатыр 
// иннер хтмл толыктай элементтерды озгертеды


// локал сторадже это локальное хранилище 

// кей веллоумен сохроняем 

// фильтр массивтан массив кайтарады

// джейсон стрингифай для того чтоб   джэсты в джисон

// 

// создаем главный контайнер 
const container = document.createElement('div');
container.classList.add('container');
 
// джойн массивтын ышынде барын быр строка косады 

// мап ол масивтын методы жана массив кайтарады
// и массивтегы данныйларды катар катарына шыгарып береды




// Создание основного контейнера для карточек продуктов
const firstCardContainer = document.createElement('div');
firstCardContainer.classList.add('card__container');

// Функция для создания карточки продукта
function createProductCard(product) {
    const article = document.createElement('article');
    article.classList.add('card__article');

    const img = document.createElement('img');
    img.src = product.imgSrc;
    img.alt = product.alt;
    img.classList.add('card__img');

    const div = document.createElement('div');
    div.classList.add('card__data');

    const span = document.createElement('span');
    span.classList.add('card__description');
    span.textContent = product.description;

    const h2 = document.createElement('h2');
    h2.classList.add('card__title');
    h2.textContent = product.price;

    const a = document.createElement('a');
    a.href = '#';
    a.classList.add('card__button');
    a.id = '' 
    a.textContent = 'BUY';
    
   if (isAddedToCart(product)) { 
    a.textContent = "YOU BOUGHT";
    a.enabled = false; //егер заттарды корзинага косу керек болса  осыны басканда added to cart деп шыгады
  } else {
    a.textContent = "BUY";
    a.addEventListener("click", () => { 
      addToCart(product);
    });
  }

    div.appendChild(span);
    div.appendChild(h2);
    div.appendChild(a);

    article.appendChild(img);
    article.appendChild(div);

    return article;
}






// Получение данных о продуктах с сервера и добавление их в контейнер
const url = 'https://65d6c5caf6967ba8e3be87d8.mockapi.io/product';
fetch(url)  //это промис, серверга запрос жасап быздын карточканы шыгарып береды
    .then(response => response.json())  //орындалса осы зен шыгады
    .then(data => {
        data.forEach(product => {
            firstCardContainer.appendChild(createProductCard(product));
        });
        container.appendChild(firstCardContainer);
    })
    .catch(error => console.error(error));  //орындалмаса кетч

// Добавление контейнера в тело документа
document.body.appendChild(container);

function isAddedToCart(product) {  //баттон
    const cart = JSON.parse(localStorage.getItem("wine"))||[];
    return cart.find((p) => p.id == product.id) != null;
}

// корзинада быздын коскан карточка туру ушын, осы функция орындалады
function addToCart(product) {
    const cart = localStorage.getItem("wine");
    const cartItems = JSON.parse(cart)||[];  
    if (cartItems.find(item  => item.id ==product.id)) {
      return;
    }
    cartItems.push({...product, quantity: 1}); //обьект курады
    localStorage.setItem("wine", JSON.stringify(cartItems)); //object-JSON
    window.location.reload() //страница автоматический обновляется
}




