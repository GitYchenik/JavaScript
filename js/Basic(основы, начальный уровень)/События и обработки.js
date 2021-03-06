//продолжаем изучать события в документе

const btn = document.querySelector('button'),                   //создаем переменную = издокумента.селекторзапроса(связать кнопку)
        overlay = document.querySelector('.overlay'),           //создаем переменную = издокумента.селекторзапроса(родителя - новый класс)
        btns = document.querySelectorAll('button');             //создаем переменную = издокумента.селекторзапросаВсе(связать кнопки)

/*btn.onclick = function() {                //простой вариант проверить события - при нажатии на кнопку появляетя сообщение clik
    alert('click');
};*/

let i = 0;                                      //создадим переменную = 0
const deleteElement = (event) => {              //создадим переменную deleteElement присвоим = event выполнить 
    console.log(event.target);                  //вывести в консоль информацио о элементе
    console.log(event.type);                    //вывести в консоль тип операции
   /* i++;                                      //увеличть счетчик
    if (i == 1) {                               //если счетчик равен 1 (т.е. одно действие)
        btn.removeEventListener("click", deleteElement);            //кнопка.удалить(при нажатии, вывести информацию)
    }*/
}

//данный вариант обработки события лучше использовать т.к. данный метод не заменяет предыдущий результат а дополняет его

btn.addEventListener("click", () => {               //btn.добавить действие (при нажатии на клик выпонить далее ниже)
    alert('Click');                                 //вывести на экран click
});

btn.addEventListener("click", () => {               //btn.добавить действие (при нажатии на клик выпонить далее ниже)
    alert('SecondClick');                           //вывести на экран SecondClick -- самое интерессно выведет первый результат а потом второй
});
/*
btn.addEventListener("mouseenter", (event) => {     //btn.добавить событие(при наведении на объект, event) выполни ниже
    console.log(event.target);                      //вывести в консоль (event, информация об объекте)
    event.target.remove();                          //полученный объект.удалить
    console.log('Hover');                           //вывести в консоль hover  -- при каждом наведении будет появляться это сообщение
});*/

//если мы перерабатываем несколько элементов ALL то получим псевдомассив который обрабатываем по каждому элеменут

btns.forEach(items => {                 //что бы каждой кнопке дать событие используем цикл и выполнить ниже
    items.addEventListener('click', deleteElement, {once:true});            //каждому элементу (есть 3 кнопки и каждой кнопке) добавить событие ('клик', вызвать deleteElement, (можно указать 3 параметр при котором действия если уже выполненог то повторно не выполняется))
});
btn.addEventListener("click", deleteElement);           //btn.добавить действия (при клике, (deleteElement)вывести информацию)
overlay.addEventListener("click", deleteElement);       //overlay.добавить действия (при клике, (deleteElement)вывести информацию)

const link = document.querySelector('a');               //создать паеременную = документ.выбрать объект( с 'а' ---т.к. ссылки начинаются с тэгом а)

//можно при нажатии на ссылку изменить стандртное событие и вместо перехода выполнить не переход и вывести информацию в консоль

link.addEventListener('click', function(event) {        //link.добавить действия (при клике, (запустить функцию)
    event.preventDefault();                             //браузер стой()

    console.log(event.target);                          //вывести в консоль событие
});