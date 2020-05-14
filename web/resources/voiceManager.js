let working = false;
let x = 0;
let y = 0;
let isSay_x = false;
let isSay_y = false;

$(document).ready(function () {
    startRecognizer();
});

function startRecognizer() {
    // console.log("(0_0)");
    let rec = new webkitSpeechRecognition();
    rec.lang = 'ru';

    rec.onresult = function (e) {
        let rez = e.results[e.resultIndex];
        let string = rez[0].transcript;
        let str = string.split(" ");
        // console.log(str.length);
        if (str.length == 1){
            if (string.indexOf('X') == 0 || string.indexOf('x') == 0) {
                str[0] = 'x';
                str[1] = string.substring(1);
            }else if (string.indexOf('Y') == 0 || string.indexOf('y') == 0) {
                str[0] = 'y';
                str[1] = string.substring(1,string.length-1);
            }
            if (str.length>0) {
                // console.log(str[1]);
            }
        }
        console.log(string);
        if (str[0] == 'X' || str[0] == 'x' || str[0] == 'Икс' || str[0] == 'икс'){
            if (str[1] == 'равен'){
                x = Number(str[2].replace(',','.'));
                isSay_x = true;
                // console.log(x);
                $("#j_idt11-formHiddenX").val(x);
            }else {
                try {
                    x = Number(str[1].replace(',','.'));
                    isSay_x = true;
                    // console.log(x + "ccc");
                    $("#j_idt11-formHiddenX").val(x);
                }catch (e) {
                    isSay_x = false;
                }
            }
        }
        if (str[0] == 'Y' || str[0] == 'y' || str[0] == 'игрек' || str[0] == 'игрик') {
            if (str[1] == 'равен') {
                y = Number(str[2].replace(',','.'));
                isSay_y = true;
                // console.log(y);
                $("#j_idt11-formHiddenY").val(y);
            }else{
                try {
                    y = Number(str[1].replace(',','.'));
                    isSay_y = true;
                    // console.log(y);
                    $("#j_idt11-formHiddenY").val(y);
                }catch (e) {
                    isSay_y = false
                }
            }
        }
        if (string.indexOf("вадрат")>=0){
            drawCone();
        }
        if (string.indexOf('Назад') >= 0||string.indexOf('назад') >= 0 ||string.indexOf('Back') >= 0|| string.indexOf('back') >= 0){
            $("#j_idt11-suputton").click();
        }
        if (string.indexOf("Start") >=0 || string.indexOf("start") >=0 || string.indexOf("Старт") >=0 || string.indexOf("старт") >=0){
            $("#j_idt11-start").click();
        }
        if (string.indexOf('Help') >= 0 || string.indexOf('help') >=0 || string.indexOf('Info') >=0 || string.indexOf('info')>= 0 || string.indexOf('инфо')>=0 || string.indexOf('Инфо')>=0)
            info();
        if (string.indexOf('отправить')>=0 || string.indexOf('Отправить')>=0 || string.indexOf('готово')>=0 || string.indexOf('Готово')>=0){
           if ( $("#j_idt11-formHiddenX").val() == undefined ||  $("#j_idt11-formHiddenX").val() == "" ){
               $("#messageX").html("X is not choosed");
           }else if ( $("#j_idt11-formHiddenY").val() == undefined ||  $("#j_idt11-formHiddenY").val() == "" || Number($("#j_idt11-formHiddenY").val()) <= -3||Number($("#j_idt11-formHiddenY").val()) >=5){
                $("#messageY").html("Y must be a number in the range (-3;5)");
           }else if (validateR()) {
               if (!(Number($("#j_idt11-formHiddenX").val()) < -6) ||!(Number($("#j_idt11-formHiddenX").val()) > 6))
                   canvasAction();
           }
        }

    }

    rec.onend = function(){
        startRecognizer();
    }

    rec.start();
}

// startRecognizer();
function info() {
    alert("Для ввода \"X\" скажите медленно по словам:\"X равен необходимое_число\", либо \"Х необходимое_число\"\n" +
        "Для ввода \"Y\" скажите медленно по словам:\"Y равен необходимое_число\", либо \"Y необходимое_число\"\n");  }
