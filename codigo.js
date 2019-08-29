var calculo = document.getElementById("calculo");
var resultado = document.getElementById("resultado");

var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");
var btn4 = document.getElementById("4");
var btn5 = document.getElementById("5");
var btn6 = document.getElementById("6");
var btn7 = document.getElementById("7");
var btn8 = document.getElementById("8");
var btn9 = document.getElementById("9");
var btn0 = document.getElementById("0");
var btnPunto = document.getElementById("punto");
var btnS = document.getElementById("sumar");
var btnR = document.getElementById("restar");
var btnM = document.getElementById("multiplicar");
var btnD = document.getElementById("dividir");
var btnmasmenos = document.getElementById("masmenos");
var btnC = document.getElementById("C");
var btnCE = document.getElementById("CE");
var btnAns = document.getElementById("Ans");
var btnRespuesta = document.getElementById("respuesta");

btn1.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        calculo.value = valor + "1";
    }
});

btn2.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        calculo.value = valor + "2";
    }
});

btn3.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        calculo.value = valor + "3";
    }
});

btn4.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        calculo.value = valor + "4";
    }
});

btn5.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        calculo.value = valor + "5";
    }
});

btn6.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        calculo.value = valor + "6";
    }
});

btn7.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        calculo.value = valor + "7";
    }
});

btn8.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        calculo.value = valor + "8";
    }
});

btn9.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        calculo.value = valor + "9";
    }
});

btn0.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        if(valor=="0"){
            calculo.value = valor;
        }else{
            calculo.value = valor + "0";
        }
    }
});

btnPunto.addEventListener("click",function(){
    var valor = calculo.value;    
    if(valor == ""){
        calculo.value = "0.";
    }else{
        if(String(valor).length == 19){
            calculo.value = valor;
                }else{
                    calculo.value = valor + ".";
                }
                
    }
    
});

btnS.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        if(String(valor).length == 0){
            calculo.value = valor;
        }else{
            if(String(valor).indexOf("+")>=0 || String(valor).indexOf("*")>=0 || String(valor).indexOf("/")>=0 || String(valor).lastIndexOf("-")>0){
                calculo.value = valor;
            }else{
                calculo.value = valor + "+";
            }
        }
        
    }
});

btnR.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        if(String(valor).length == 0){
            calculo.value ="-" ;
        }else{
            if(String(valor).indexOf("+")>=0 || String(valor).indexOf("*")>=0 || String(valor).indexOf("/")>=0 || String(valor).lastIndexOf("-")>0){
                calculo.value = valor;
            }else{
                calculo.value = valor + "-";
            }
        }
        
    }
});

btnM.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        if(String(valor).length == 0){
            calculo.value = valor;
        }else{
            if(String(valor).indexOf("+")>=0 || String(valor).indexOf("*")>=0 || String(valor).indexOf("/")>=0 || String(valor).lastIndexOf("-")>0){
                calculo.value = valor;
            }else{
                calculo.value = valor + "*";
            }
        }
        
    }
});

btnD.addEventListener("click",function(){
    var valor = calculo.value;
    if(String(valor).length == 19){
        calculo.value = valor;
    }else{
        if(String(valor).length == 0){
            calculo.value = valor;
        }else{
            if(String(valor).indexOf("+")>=0 || String(valor).indexOf("*")>=0 || String(valor).indexOf("/")>=0 || String(valor).lastIndexOf("-")>0){
                calculo.value = valor;
            }else{
                calculo.value = valor + "/";
            }
        }
        
    }
});

btnmasmenos.addEventListener("click",function(){
    var resul = resultado.innerHTML;
    if(String(resul) == ""){
        resultado.innerHTML = "";
    }else{
        if(String(resul)==0){
            resultado.innerHTML ="0";
        }else{
            if(String(resul).indexOf("-")==0){            
                resultado.innerHTML = String(resul).substring(1);
            }else{
                resultado.innerHTML = "-" + resul;
            }
        }
    }

});

btnC.addEventListener("click",function(){
    calculo.value = "";
});

btnCE.addEventListener("click",function(){
    var valor = calculo.value;
    var nuevoValor = String(valor).substring(0,String(valor).length-1);
    calculo.value = nuevoValor;
});

btnAns.addEventListener("click",function(){
    var resul = resultado.innerHTML;
    if(String(resul) == ""){
        resultado.innerHTML = "";
    }else{
        calculo.value = String(resul);
    }

});

btnRespuesta.addEventListener("click",function(){
    var valor = calculo.value;
    if(repetir(valor,"-")>2 || repetir(valor,"+")>1 || repetir(valor,"*")>1 || repetir(valor,"/")>1 || repetir(valor,".")>2){
        calculo.value = "";
        alert("La operación es solo entre dos valores númericos, intente nuevamente");
    }else{
        if(isNumber(valor)){
            resultado.innerHTML = valor;
        }
        if(String(valor).indexOf("+")>0){
            var arreglo = String(valor).split("+");
            var solucion = sumar(arreglo[0],arreglo[1]);
            resultado.innerHTML = solucion;
        }
        if(String(valor).lastIndexOf("-")>0){
            var numero1 = String(valor).substring(0,String(valor).lastIndexOf("-"));
            var numero2 = String(valor).substring(String(valor).lastIndexOf("-")+1);
            var solucion = restar(numero1,numero2);
            resultado.innerHTML = solucion;
        }
        if(String(valor).indexOf("*")>0){
            var arreglo = String(valor).split("*");
            var solucion = multiplicar(arreglo[0],arreglo[1]);
            resultado.innerHTML = solucion;
        }
        if(String(valor).indexOf("/")>0){
            var arreglo = String(valor).split("/");
            var solucion = dividir(arreglo[0],arreglo[1]);
            resultado.innerHTML = solucion;
        }
    }
});

function sumar (n1,n2){
    if(isNumber(n1)){
        if(isNumber(n2)){
            return parseFloat(n1)+parseFloat(n2);
        }else{
            alert("ERROR: La operación es solo entre dos valores numéricos.");
        }
    }else{
        alert("ERROR: La operación es solo entre dos valores numéricos.");
    }
}

function restar (n1,n2){
    if(isNumber(n1)){
        if(isNumber(n2)){
            return parseFloat(n1)-parseFloat(n2);
        }else{
            alert("ERROR: La operación es solo entre dos valores numéricos.");
        }
    }else{
        alert("ERROR: La operación es solo entre dos valores numéricos.");
    }
}

function dividir (n1,n2){
    if(isNumber(n1)){
        if(isNumber(n2)){
            if(parseFloat(n2)!=0){
                return parseFloat(n1)/parseFloat(n2);
            }else{
                alert("ERROR: El segundo número no puede ser 0.");
            }
        }else{
            alert("ERROR: La operación es solo entre dos valores numéricos.");
        }
    }else{
        alert("ERROR: La operación es solo entre dos valores numéricos.");
    }
}

function multiplicar(n1,n2){
    if(isNumber(n1)){
        if(isNumber(n2)){
            return parseFloat(n1)*parseFloat(n2);
        }else{
            alert("ERROR: La operación es solo entre dos valores numéricos.");
        }
    }else{
        alert("ERROR: La operación es solo entre dos valores numéricos.");
    }
}
// repetir n1:cadena de texto, n2:vaor que busca si se repite
function repetir (n1,n2){

    var repeticion=0;
    for(i=0;i<String(n1).length;i++){
        if(String(n1).charAt(i) == n2){
            repeticion++;
        }
    }
    return repeticion;
}

// funcion para verificar si es un numero 
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}