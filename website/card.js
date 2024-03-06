
function createCartItem(cartItemData)  { //функциянын аты, объекттын аты
    const { imgSrc,description, price, quantity } = cartItemData; //объектте алган барлык айнымалыларды картайтамга тенестыремыз
  
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
  
    const cartItemLeft = document.createElement("div");
    cartItemLeft.classList.add("cart-item-left");
  
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "";
  
    const cartItemLeftActions = document.createElement("div");
    cartItemLeftActions.classList.add("cart-item-left-actions");
  
    const itemNameLink = document.createElement("p");
   
    itemNameLink.textContent =description;   //описание
  
    const cartItemAmount = document.createElement("div");
    cartItemAmount.classList.add("cart-item-amount");
  
    const trashButton = document.createElement("button");
    trashButton.innerHTML =  // джэс аркылы хтмл кодын жазу
      cartItemData.quantity > 1
        ? '<ion-icon name="remove"></ion-icon>'
        : '<ion-icon name="trash-outline"></ion-icon>';  //треш баттон
    trashButton.addEventListener("click",()=>{decreaseQuantity(cartItemData)})    
  
    const amountText = document.createElement("span");
    amountText.textContent = quantity; //штук
    
  
    const addButton = document.createElement("button");
    addButton.innerHTML = '<ion-icon name="add-outline"></ion-icon>'; 
    addButton.addEventListener("click",()=>{increaseQuantity(cartItemData)})  //increaseQuantity баскан кезде штук косылады
  
    cartItemAmount.appendChild(trashButton);
    cartItemAmount.appendChild(amountText);
    cartItemAmount.appendChild(addButton);
  
    cartItemLeftActions.appendChild(itemNameLink);
    cartItemLeftActions.appendChild(cartItemAmount);
  
    cartItemLeft.appendChild(img);
    cartItemLeft.appendChild(cartItemLeftActions);
  
    const cartItemRight = document.createElement("div");
    cartItemRight.classList.add("cart-item-right");
  
    const closeButton = document.createElement("button");
    closeButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>'; 
    closeButton.addEventListener("click",()=>{removeProduct(cartItemData)})  //removeProduct басканда удаляет продукт с карзины
  
    const priceText = document.createElement("p");
    priceText.textContent = getPrice(price*quantity) + " ₸";  
  
    cartItemRight.appendChild(closeButton);
    cartItemRight.appendChild(priceText);
  
    cartItem.appendChild(cartItemLeft);
    cartItem.appendChild(cartItemRight);
  
    return cartItem;
  }
  
//кей для того чтоб сохранять  данные

  function getPrice(price) { //алу
    let priceStr = String(price);
    if (priceStr.length > 4) {
      const priceSlices = [];  //
      for (let i = priceStr.length - 3; i >= 0; i -= 3) {    //фор для создания цикла
        priceSlices.unshift(priceStr.slice(i > 0 ? i : 0, i + 3));  //для добавление 1 или несколько элементов алдыга   //
        priceStr = priceStr.slice(0, i); // он извлекает часть этой строки и возвращает новую строку, не изменяя исходную
      }
      priceSlices.unshift(priceStr);  
      priceStr = priceSlices.join(" ");  // джойн массивты строкага айналдырады  //сплит строканы массивке айналдырады
    }
    return priceStr;
  }

  // баганы боледы 3 цифра справа 
  
  
  function removeProduct(product) {
    let cart = JSON.parse(localStorage.getItem("wine")) || [];   //парс стрингты джисонга айналдырады
    // Получает содержимое корзины из локального хранилища браузера, 
    // используя ключ "wine". Если в хранилище ничего не сохранено 
    // или сохранено не корректное значение JSON,
    //  то переменной cart присваивается пустой массив.
    cart = cart.filter((p) => p.id != product.id);   //
    localStorage.setItem("wine", JSON.stringify(cart)); //сет айтм сохранитетеды   //джисонды срингке айналдырады
    window.location.reload(); //
    // remove a one product(удаления продукта из корзины и обновления содержимого страницы.)
  }
  

  
  function increaseQuantity(product) {
    let cart = JSON.parse(localStorage.getItem("wine")) || [];
    cart = cart.map((p) =>     // мап ол масивтын методы жана массив кайтарады
                               // и массивтегы эдементтерды проверяет по условию (катар катарына шыгарып)
      p.id == product.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    localStorage.setItem("wine", JSON.stringify(cart));
    window.location.reload();
  }
   // kousamyz продукттарды


  function decreaseQuantity(product) { 
    let cart = JSON.parse(localStorage.getItem("wine")) || []; //парс джисонды в объект джаваскрипт
    if (product.quantity > 1) {
      cart = cart.map((p) =>   
        p.id == product.id ? { ...p, quantity: p.quantity - 1 } : p
      );
    } else {
      cart = cart.filter((p) => p.id !== product.id);
    }
    localStorage.setItem("wine", JSON.stringify(cart));   //сет айтм локл сториджге сохраньтету
    window.location.reload(); //для перезагрузки страницы и применения изменений.
  }

  //minus продуктов



  const cart=localStorage.getItem("wine")
  const cartItems=JSON.parse(cart)   
  console.log(cartItems)
  for(const item of cartItems){
    const card=createCartItem(item)
    document.querySelector(".cart-items").appendChild(card)
  }
  

  // PRICE FIND AND SHOW
  

  const productsPriceBox = document.querySelector("#products-price");

  const totalPriceTextBox = document.querySelector("#total-price");
  console.log(getPrices());
  const { productsPrice, totalPrice } = getPrices();
  
  productsPriceBox.textContent = getPrice(productsPrice) + " ₸";

  totalPriceTextBox.textContent = getPrice(totalPrice) + " ₸";
  //  багаларга тенге дегенд косад
  
  
  function getPrices() {
    let cart = JSON.parse(localStorage.getItem("wine")) || []; 
    if (cart.length == 0) {
      return {
        productsPrice: 0,

        totalPrice: 0
      };
      // это если карзина пустая
    } else {
      const itemPrices = cart.map((p) => p.price * p.quantity); // мап ол масивтын методы жана массив кайтарады
                                                                // и массивтегы данныйларды катар катарына шыгарып береды
      let productsPrice = 0;
      itemPrices.forEach((p) => (productsPrice += p));  //// фор ич ол массивтын методы ар элементты алады

      return {
        productsPrice: productsPrice,

        totalPrice: productsPrice ,
      };
    }
  }

  
