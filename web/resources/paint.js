let context;

function changeChristmas() {
    if (($("#j_idt11-formHiddenR").val() == "" || $("#j_idt11-formHiddenR").val() == undefined )){
        paint(1);
        drawPoints();
    }else {
        paint(Number($("#j_idt11-formHiddenR").val()));
        drawPoints();
    }
}

function validateForm(){
    console.log("send");
    let flag = true;
    if (!validateX()){
        flag = false;
    }
    if (!validateY() || !validateCanvY()){
        flag=false;
    }
    if ( ($("#j_idt11-formHiddenR").val() == "")){
        flag=false;
        $("#messageR").html("Please choose R");
    }
    return flag;
}

function validateX() {
    let choose = false;
    for (let j=-4;j<5;j++){
        if ( $('#j_idt11-bcb'+j).prop('checked') == true){
            $("#j_idt11-formHiddenX").val(j);
            if (choose){
                $('#j_idt11-bcb'+j).prop('checked',false);
            }
            if (!choose){
                $('#j_idt11-formHiddenX').val(j);
            }
            choose = true;
        }
        console.log( $("#j_idt11-formHiddenX").val())
    }
    if (!choose)
        $("#messageX").html("X is not choosed");
    return choose;
}

function valitaeXYR(x,y,r) {
    let inArea = false;
    if(x>0 && y>0){
        inArea = false;
        return inArea;
    }
    if (x>=0 && y<=0){
        if (y >= 2*x - r) {
            inArea = true;
            return inArea;
        }
        else {
            inArea = false;
            return inArea;
        }
        if (x>2.5) {
            inArea = false;
            return inArea;
        }
    }
    if (x<0 && y<=0){
        if (Math.sqrt((x*x) + (y*y)) <=r/2){
            inArea = true;
            return inArea;
        }
        else {
            inArea = false;
            return inArea;
        }
    }
    if (x<=0 && y>=0) {
        if (-x<=r && y<=r/2 ){
            inArea = true;
            return inArea;
        }
        else {
            inArea = false;
            return inArea;
        }
    }
    if (x>2.5)
        inArea = false;
    inArea = false;
    return inArea;
}

function validateCanvY() {
    let y = $('#j_idt11-formHiddenY').val().trim();
    $("#messageY").html("<br/>");
    if(y==""){
        $("#messageY").html("Y must be a number in the range (-3;5)");
    } else {
        if(!/^(-?\d+)([.,]\d+)?$/.test(y)) {
            $("#messageY").html("Y must be a number in the range (-3;5)");
        } else {
            y = y.replace(',','.');
            y = Number(y);
            if (!(y > -3 && y < 5)) {
                $("#messageY").html("Y must be a number in the range (-3;5)");
            } else {
                return true;
            }
        }
    }
    return false;
}

function validateY(){
    let y = $('#j_idt11-Y').val().trim();
    $("#messageY").html("<br/>");
    if(y==""){
        $("#messageY").html("Y must be a number in the range (-3;5)");
    } else {
        if(!/^(-?\d+)([.,]\d+)?$/.test(y)) {
            $("#messageY").html("Y must be a number in the range (-3;5)");
        } else {
            y = y.replace(',','.');
            y = Number(y);
            if (!(y > -3 && y < 5)) {
                $("#messageY").html("Y must be a number in the range (-3;5)");
            } else {
                return true;
            }
        }
    }
    return false;
}

function validateR(){
    let flagR = false;
    for (let i =1 ; i<=6;i++){
        $('j_idt11-cL'+i).click(function () {
            R=$('j_idt11-cL'+i).val();
            flagR = true;
        })
    }
    if ($("#j_idt11-formHiddenR").val()!="" ){
        flagR = true;
    }
    if ($("#j_idt11-formHiddenR").val()== undefined ){
        flagR = false;
        $("#messageR").html("Please choose R");
    }
    if (flagR == false){
        $("#messageR").html("Please choose R");
    }
    console.log( $("#j_idt11-formHiddenR").val())

    return flagR;
}

function kek(R){
    let choose = false;
    for (let j=-4;j<5;j++){
        if ( $('#j_idt11-bcb'+j).prop('checked') == true){
            $("#j_idt11-formHiddenX").val(j);
            if (choose){
                $('#j_idt11-bcb'+j).prop('checked',false);
            }
            if (!choose){
                $("#j_idt11-formHiddenX").val(j);
            }
            choose = true;
        }
    }
    $("#j_idt11-formHiddenR").val(R);
}

$(document).ready(function(){
    let plot = document.getElementById("areas");
    context = plot.getContext('2d');
    plot.addEventListener("click", clickCanvas, false);
    refresh();
    $('#j_idt11-Y').val('');
    $('#j_idt11-formHiddenY').val('');
    paint(37.5);
    drawPoints();
    $('#result').bind("DOMSubtreeModified",function(){
        drawPoints();
        refresh();
    });

    function refresh() {
        $('#j_idt11-formHiddenX').val('');
        $('#j_idt11-formHiddenY').val('');
        $('#j_idt11-Y').val('');
        $('#messageR').html('<br/>');
        $('#messageX').html('<br/>');
        $('#messageY').html('<br/>');
        for(let i=1; i<6;i++){
            $('#j_idt11-cL'+i).css('color','white');
        }
        for (let j=-4;j<5;j++){
            $('#j_idt11-bcb'+j).prop('checked',false);
        }
        $('#messageR').html('<br/>');
        $('#messageX').html('<br/>');
        $('#messageY').html('<br/>');
    }


    let choose = false;
    for (let j=-4;j<5;j++){
        if ( $('#j_idt11-bcb'+j).prop('checked') == true){
            $("#j_idt11-formHiddenX").val(j);
            if (choose){
                $('#j_idt11-bcb'+j).prop('checked',false);
            }
            if (!choose){
                $("#j_idt11-formHiddenX").val(j);
            }
            choose = true;
        }
    }

    for(let i=1; i<6;i++){
        $('#j_idt11-cL'+i).click(function () {
            changeR(i)
        });
    }

    function changeR(valueR) {
        $("#messageR").html("<br/>");
        for(let i=1; i<6;i++){
            $('#j_idt11-cL'+i).css('color','white');
        }
        $('#j_idt11-cL'+valueR).css('color','grey');
        $('#j_idt11-formHiddenR').val(valueR);
        paint(valueR *37.5);
        drawPoints();
    }


    $('#j_idt11-Y').blur( function () {
        if(validateY()){
            let Y = Number($(this).val().trim().replace(',','.'));
            $('#j_idt11-formHiddenY').val(Y);
        }
    });


    function clickCanvas(e){
        console.log("press");
        let x = e.offsetX;
        let y = e.offsetY;
        x = (x-225.5)/37.5;
        y=-(y-225.5)/37.5;
            if ($("#j_idt11-formHiddenR").val() != undefined) {
                $("#j_idt11-formHiddenX").val(x);
                $("#j_idt11-formHiddenY").val(y);
                canvasAction();
            }
    }
});

function drawLine() {
    context.beginPath();
    context.moveTo(225.5,450);
    context.lineTo(225.5,0);
    context.moveTo(220,15);
    context.lineTo(225.5,0);
    context.lineTo(231,15);

    context.moveTo(0,225.5);
    context.lineTo(450,225.5);
    context.moveTo(435,220);
    context.lineTo(450,225.5);
    context.lineTo(435,231);
    for (let i=37.5; i<=412.5;i+=18.75){
        context.moveTo(i,220);
        context.lineTo(i,231);
        context.moveTo(220,i);
        context.lineTo(231,i);
    }
    for (let j=37.5;j<=410.5;j+=37.5){
        context.moveTo(j,217);
        context.lineTo(j,234);
        context.moveTo(217,j);
        context.lineTo(234,j);
    }
    context.stroke();
    context.font = " bold 20px Arial black";
    context.fillText("x",435,255);
    context.fillText("y",245,15);
}
function paint(R){
    console.log("Draw...");
    context.fillStyle = "rgba(255,255,255,0)"
    context.fillRect(0,0,500,500);
    context.fillStyle = "rgba(255,255,255,1)"

    context.fillRect(0,0,450,450);

    context.fillStyle="#6c4480";
    context.fillRect(225-R,225-R/2,R,R/2);
    context.beginPath();
    context.arc(226,226,R/2,Math.PI*0.5,Math.PI,false);
    context.lineTo(226,226);
    context.closePath();
    context.fill();
    context.beginPath();
    context.moveTo(225.5,225.5);
    context.lineTo(225.5+R/2,225.5);
    context.lineTo(225.5,225.5+R);
    context.closePath();
    context.fill();

    drawLine();
}
function drawPoints(){
    let rows = $('#result_table').find('tr');
    let number = rows.length;
    for(let i = 1; i < number; i++){
        let tdSet = $(rows[i]).find('td');
        let r = Number($(tdSet[2]).text().trim());
        let R = Number($('#j_idt11-formHiddenR').val());
        if ($('#j_idt11-formHiddenR').val() == ""){
            context.fillStyle = '#2A2A2A';

        }else {
            if (valitaeXYR(Number($(tdSet[0]).text()), Number($(tdSet[1]).text()), Number($('#j_idt11-formHiddenR').val()))) {
                context.fillStyle = 'pink';
            } else {
                context.fillStyle = '#2A2A2A';
            }
        }
        paintPoint(Number($(tdSet[0]).text()), Number($(tdSet[1]).text()));
    }
}

function paintPoint(x, y){
    let X = x*37.5+225.5;
    let Y = -y*37.5 + 225.5;
    context.beginPath();
    context.arc(X,Y,3,0,Math.PI*2,false);
    context.closePath();
    context.fill();
}
