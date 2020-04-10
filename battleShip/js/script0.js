/*начало игры, обращение к пользователю начинаем или нет*/
let communication, name;
let shotlocation = 0
    , shots = 0
    , hits = 0
    , enemy = 'Здоров!';
do {
    communication = prompt('Вы запустили игру "Морской бой". \nХотите продолжить?\nда / нет');
    switch (communication) {
    case 'да':
        name = prompt('Приветствуем тебя, Капитан!\nНазови своё имя!');
        break;
    case 'нет':
        alert('Пока!');
        break;
    default:
        alert('Ошибка ввода значения!!!');
    }
} while (communication != 'да' && communication != 'нет');
//тело игры
if (communication == 'да') {
    alert('Капитан, ' + name + '!\nВот Ваша приборная панель:\nКоординаты выстрела: ' + shotlocation + '\nКоличество выстрелов: ' + shots + '\nКоличество попаданий: ' + hits + '\nСтатус противника: ' + enemy);
    //алгоритм определения координат корабля противника
    let location1, location2, location3;
    location1 = Math.random() * (6 - 0) + 0;
    location1 = Math.trunc(location1);
    //alert(location1);
    if (location1 <= 4) {
        location2 = location1 + 1;
    }
    else {
        location2 = location1 - 1;
    }
    //alert(location1 + '' + location2);
    if (location1 <= 4) {
        location3 = location1 + 2;
    }
    else {
        location3 = location1 - 2;
    }
    // alert(location1 + '' + location2 + '' + location3); //проверка
    do {
        shotlocation = prompt('Корабль занимает 3 квадрата в секторе от 0 до 6.\nВыберите сектор поражения - цифру от 0 до 6!');
        (shotlocation == location1 || shotlocation == location2 || shotlocation == location3) ? hits += 1: hits = hits;
        //alert(hits);
        shots += 1;
        switch (hits) {
        case 0:
            enemy = 'Здоров!';
            break;
        case 1:
            enemy = 'Ранен!';
            break;
        case 2:
            enemy = 'Ранен!';
            break;
        case 3:
            (enemy = 'Убит!!!');
            break;
        default:
            break;
        }
        alert('Капитан, ' + name + '!\nКоординаты выстрела: ' + shotlocation + '\nКоличество выстрелов: ' + shots + '\nКоличество попаданий: ' + hits + '\nСтатус противника: ' + enemy);
    } while (enemy != 'Убит!!!');
    let score = 0;
    alert('Ваш рейтинг - ' + Math.trunc(hits / shots * 100) + ' %')
}