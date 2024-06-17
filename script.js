var container = document.createElement('div')
container.className = 'calculator'

function linebreak(){

    var br = document.createElement('br')
    return br
}

function create_input(tagname){

    var input_ele = document.createElement(tagname)
    return input_ele

}

var input_elements = ['Text_area','button_1','button_2','button_3','button_4','button_5','button_6','button_7','button_8','button_9','button_0','button_div','button_mul','button_sub','button_add','button_equal','button_dot','button_clear']

var button_ele = {}

for(var i=0;i<input_elements.length;i++){

    button_ele[input_elements[i]] = create_input('input');
}

button_ele.Text_area.setAttribute('type','text')
button_ele.Text_area.setAttribute('id','display')
text_area_br = linebreak();
firstline_br = linebreak();
secondline_br = linebreak();
thirdline_br = linebreak();
fourthline_br = linebreak();

button_ele.button_1.setAttribute('type','button')
button_ele.button_1.setAttribute('value','1')
button_ele.button_1.setAttribute('onclick','addToDisplay(\'1\')')

button_ele.button_2.setAttribute('type','button')
button_ele.button_2.setAttribute('value','2')
button_ele.button_2.setAttribute('onclick','addToDisplay(\'2\')')

button_ele.button_3.setAttribute('type','button')
button_ele.button_3.setAttribute('value','3')
button_ele.button_3.setAttribute('onclick','addToDisplay(\'3\')')

button_ele.button_4.setAttribute('type','button')
button_ele.button_4.setAttribute('value','4')
button_ele.button_4.setAttribute('onclick','addToDisplay(\'4\')')

button_ele.button_5.setAttribute('type','button')
button_ele.button_5.setAttribute('value','5')
button_ele.button_5.setAttribute('onclick','addToDisplay(\'5\')')

button_ele.button_6.setAttribute('type','button')
button_ele.button_6.setAttribute('value','6')
button_ele.button_6.setAttribute('onclick','addToDisplay(\'6\')')

button_ele.button_7.setAttribute('type','button')
button_ele.button_7.setAttribute('value','7')
button_ele.button_7.setAttribute('onclick','addToDisplay(\'7\')')

button_ele.button_8.setAttribute('type','button')
button_ele.button_8.setAttribute('value','8')
button_ele.button_8.setAttribute('onclick','addToDisplay(\'8\')')

button_ele.button_9.setAttribute('type','button')
button_ele.button_9.setAttribute('value','9')
button_ele.button_9.setAttribute('onclick','addToDisplay(\'9\')')

button_ele.button_0.setAttribute('type','button')
button_ele.button_0.setAttribute('value','0')
button_ele.button_0.setAttribute('onclick','addToDisplay(\'0\')')

button_ele.button_add.setAttribute('type','button')
button_ele.button_add.setAttribute('value','+')
button_ele.button_add.setAttribute('onclick','addToDisplay(\'+\')')

button_ele.button_sub.setAttribute('type','button')
button_ele.button_sub.setAttribute('value','-')
button_ele.button_sub.setAttribute('onclick','addToDisplay(\'-\')')

button_ele.button_mul.setAttribute('type','button')
button_ele.button_mul.setAttribute('value','*')
button_ele.button_mul.setAttribute('onclick','addToDisplay(\'*\')')

button_ele.button_div.setAttribute('type','button')
button_ele.button_div.setAttribute('value','/')
button_ele.button_div.setAttribute('onclick','addToDisplay(\'/\')')

button_ele.button_equal.setAttribute('type','button')
button_ele.button_equal.setAttribute('value','=')
button_ele.button_equal.setAttribute('onclick','calculate()')

button_ele.button_dot.setAttribute('type','button')
button_ele.button_dot.setAttribute('value','.')
button_ele.button_dot.setAttribute('onclick','addToDisplay(\'.\')')

button_ele.button_clear.setAttribute('type','button')
button_ele.button_clear.setAttribute('value','C')
button_ele.button_clear.setAttribute('onclick','clearDisplay()')
button_ele.button_clear.style.width = '310px'


document.body.append(container)
container.append(button_ele.Text_area,text_area_br)
container.append(button_ele.button_7,button_ele.button_8,button_ele.button_9,button_ele.button_div)
container.append(firstline_br,button_ele.button_4,button_ele.button_5,button_ele.button_6,button_ele.button_mul)
container.append(secondline_br,button_ele.button_1,button_ele.button_2,button_ele.button_3,button_ele.button_sub)
container.append(thirdline_br,button_ele.button_0,button_ele.button_dot,button_ele.button_equal,button_ele.button_add)
container.append(fourthline_br,button_ele.button_clear)

function addToDisplay(value) {
    button_ele.Text_area.value += value;
}

function clearDisplay() {
    button_ele.Text_area.value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    button_ele.Text_area.value = result;
}