//Цель: Разработать веб-приложение, которое каждый день будет //отображать новое случайное изображение из коллекции Unsplash, давая //пользователю возможность узнать больше о фотографе и сделать "лайк" //изображению.

//Регистрация на Unsplash:

//• Перейдите на веб-сайт Unsplash (https://unsplash.com/).
//• Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было //регистрации до этого, новый аккаунт создавать не нужно).

//Создание приложения:

//• Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
//• Нажмите "New Application".
//• Заполните необходимую информацию о приложении (можете //использовать http://localhost для тестирования).
//• Получите свой API-ключ после создания приложения.

//Разработка веб-приложения:

//• Создайте HTML-страницу с элементами: изображение, имя фотографа, //кнопка "лайк" и счетчик лайков.
//// Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
//• Отобразите информацию о фотографе под изображением.
//• Реализуйте функционал "лайка". Каждый раз, когда пользователь //нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

//* Дополнительные задачи (по желанию):

//• Добавьте функцию сохранения количества лайков в локальное //хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
//• Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

console.log(window.innerWidth);

let pic, single = true,
    rndNum = Math.floor(Math.random() * 10);
const photoContainer = document.querySelector('.photo-container');
console.log(photoContainer);
const authorName = document.querySelector('.author');
const likeBtn = document.querySelector('.like-btn');
const likeCounter = document.querySelector('.like-counter');

async function showPic() {
    const url = 'https://api.unsplash.com/photos/?client_id=1DhuRLpy6hTjlkBQdfxUJIQ55M6RV-u__uT4pNKPNls';
    const response = await fetch(url);

    pic = await response.json();
    console.log(pic);
    //const urlsImg = Array.from(pic[0].urls);
    
   pic.forEach((element, i) => {
       if (i == rndNum || !single) {
           const image = document.createElement('img');          
           
       
            image.setAttribute('src', `${element.urls.regular}`);
           image.setAttribute('width', 600);
           image.setAttribute('height', 400);
           image.classList.add('img');
         
            photoContainer.append(image);
           authorName.innerText = `${element.user.name}`;
        }
   });
}

document.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        single = false;
        showPic();
    }
});

showPic();



likeBtn.addEventListener('click', function() {    
    const currentCount = parseInt(likeCounter.textContent, 10);
    likeCounter.textContent = currentCount + 1;
  });