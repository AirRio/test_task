function checkType() {
    let first = getCheckedRadioValue('review_type');
    if(first=="cat"){
        Cat();
    }else if(first=="dog"){
        Dog();
    }else if(first=="parrot"){
        Parrot();
    }
}

function getCheckedRadioValue(name) {
    var elements = document.getElementsByName(name);

    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[i].checked) return elements[i].value;
}

function Cat(){
    let z = new Array();
    document.getElementById("head").innerHTML = 'Кошка';
    document.getElementById("text").innerHTML = '<b>Кошка</b> — млекопитающее семейства кошачих отряда хищных.Ранее домашнюю кошку нередко рассматривали как отдельный биологический вид.' + 
                                                'С точки зрения современной биологической систематики домашняя кошка является подвидом лесной кошки.'+ 
                                                'Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное, использующее для общения широкий диапазон звуковых сигналов, а также феромоны и движения тела.'+ 
                                                'В настоящее время в мире насчитывается около <i>600 млн</i> домашних кошек, выведено около <i>200 пород</i>, от длинношёрстных (персидская кошка) до лишённых шерсти (сфинксы),'+
                                                ' признанных и зарегистрированных различными фелинологическими организациями.На протяжении <i>10 000 лет</i> кошки ценятся человеком, в том числе за способность охотиться на грызунов и других домашних вредителей.<br>';
    z[0] = randomInteger(1,9);
    document.getElementById("img").innerHTML = `<img src="image/cat/${z[0]}.jpg" alt="Cat" id="img">`
    for(let i = 1 ; i < 3; i++){
        z[i] = randomInteger(1,9);
        for(j=0; j < z.length - 1; j++){
            if(z[i] == z[j]) z[i] = randomInteger(1,9);
        }
        document.getElementById("img").innerHTML += `<img src="image/cat/${z[i]}.jpg" alt="Cat" id="img">`
    }
}
function Dog(){
    let z = new Array();
    document.getElementById("head").innerHTML = 'Собака';
    document.getElementById("text").innerHTML = '<b>Собака</b> — С зоологической точки зрения, собака — плацентарное млекопитающее отряда хищных семейства псовых.'+
                                                'Собаки известны своими способностями к обучению, любовью к игре, социальным поведением. Выведены специальные породы собак,'+
                                                'предназначенные для различных целей: охоты, охраны, тяги гужевого транспорта и другого, а также декоративные породы (например,'+
                                                ' болонка, пудель).<br>';

    z[0] = randomInteger(1,9);
    document.getElementById("img").innerHTML = `<img src="image/dog/${z[0]}.jpg" alt="Dog" id="img">`
    for(let i = 1 ; i < 3; i++){
        z[i] = randomInteger(1,9);
        for(j=0; j < z.length - 1; j++){
            if(z[i] == z[j]) z[i] = randomInteger(1,9);
        }
        document.getElementById("img").innerHTML += `<img src="image/dog/${z[i]}.jpg" alt="Dog" id="img">`
    }
}
function Parrot(){
    let z = new Array();
    document.getElementById("head").innerHTML = 'Попугай'
    document.getElementById("text").innerHTML = '<b>Попугаевые</b> — семейство птиц отряда попугаеобразных. Включает около 80 родов и более 340 видов.' +
                                                'Попугаи великолепно летают и проворно лазают по деревьям.'+
                                                ' Их мощный клюв служит прекрасным орудием для добывания пищи, долбления дупла, а также грозным оборонительным оружием.'+
                                                ' Взрослый какаду может ударом клюва раздробить человеку палец. Незаменим клюв и для путешествий по веткам. Он служит попугаю третьей лапой.'+
                                                ' Птица выделывает настоящие акробатические номера, повисая на одном клюве.<br>';

    z[0] = randomInteger(1,9);
    document.getElementById("img").innerHTML = `<img src="image/parrot/${z[0]}.jpg" alt="Dog" id="img">`
    for(let i = 1 ; i < 3; i++){
        z[i] = randomInteger(1,9);
        for(j=0; j < z.length - 1; j++){
            if(z[i] == z[j]) z[i] = randomInteger(1,9);
        }
        document.getElementById("img").innerHTML += `<img src="image/parrot/${z[i]}.jpg" alt="Dog" id="img">`
    }
}


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

var numb = 2;
function getAjax() {
    let val = document.getElementById('feed').value;
    if(val){
        document.getElementById('submit').innerHTML += numb + '. ' + val + '<br><br>';
        numb++;
        }
    document.getElementById('feed').value = ''; 
 }