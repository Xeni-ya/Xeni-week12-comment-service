// Создадим сервис комментариев. В нём будет три поля ввода:

// поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее. Например, было введено пользователем : иВаН . Стало: Иван .
// поле для ввода ссылки на аватар;
// поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию checkSpam(str), заменяющую 'viagra' или 'XXX' на *** ;
// функция должна быть нечувствительна к регистру:
// const comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
// const comment2 = checkSpam('free xxx'); //результат free ***
// const comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit

function checkSpam(str) {
  return str.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
}

function addComment() {
  const usernameInput = document.getElementById('username');
  const linkInput = document.getElementById('link');
  const commentInput = document.getElementById('comment');
  const button = document.querySelector('.submit');
  const chat = document.getElementById('chat');
    
  const textComment = usernameInput.value;
//checkSpam();
  chat.innerText = console.log('textComment')
}
//button.EventListener
addComment();