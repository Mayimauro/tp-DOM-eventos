//1
const miParrafo = document.getElementById('miParrafo');
miParrafo.textContent = ("Hola mundo!");

//2
const miDiv = document.getElementById('miDiv');
miDiv.classList.add('resaltado');
//3
const miLista = document.getElementById('miLista');
miLista.remove();
//4
const miBoton = document.getElementById('miBoton');
miBoton.addEventListener('click', () => {alert("me clicaste")})

//5
miDiv.addEventListener('mouseover', (e) => {miDiv.style.backgroundColor = "red";});
miDiv.addEventListener('mouseout', (e) => {miDiv.style.backgroundColor = "yellowgreen";});
//6
const botonFormulario = document.getElementById('botonFormulario');
botonFormulario.addEventListener('click', (e) => {
  e.preventDefault();
  let escribido = document.getElementById('campoTexto').value;
 let resultado = document.getElementById('resultado');
 resultado.textContent = "Escribiste esto " + escribido;
})
//7
const presionarTecla = document.getElementById('resultado2');
document.addEventListener('keydown', (e) => {
  presionarTecla.textContent = "apretaste la tecla " + e.key;
})
//8
const miLista2 = document.getElementById('miLista2');
miLista2.addEventListener('click', (evento) => {
  if(evento.target.tagName === "LI" && evento.target.style.backgroundColor !== "red") {
    evento.target.style.backgroundColor = "red";
  }else
  {
    evento.target.style.backgroundColor = "yellowgreen";
  }
})
//9
const miBoton2 = document.getElementById('miBoton2');
const parrafoContador = document.getElementById('parrafoContadorId');
const miBoton3 = document.getElementById('miBoton3');
let contador=0;
let parrafoTexto = document.getElementById('parrafoContadorId').textContent;
miBoton2.addEventListener('click', (evento) => {
  contador++;
  parrafoContador.textContent = "click numero " + contador;
})
miBoton3.addEventListener('click', (evento) => {
  parrafoContador.textContent = parrafoTexto;
  contador =0;
})
//10
const miDiv2 = document.getElementById('Div2');
miDiv2.addEventListener('click', (evento) => {
  let parrafoDescriptivo = document.getElementById('parrafoDescriptivo')
  if(parrafoDescriptivo.textContent === ""){
    parrafoDescriptivo.textContent = "Esta imagen es del multicampeon de la copa piston rayo macuin";
  }else
  {
      parrafoDescriptivo.textContent = "";
  }
})
//11
const apagarDiv = document.getElementById('apagarDiv');
apagarDiv.addEventListener('click', (e) => {
  if(miDiv.style.display === "none"){
    miDiv.style.display = "block";
    apagarDiv.textContent = "apagar Div"
  }else
  {
    miDiv.style.display = "none";
    apagarDiv.textContent = "enceder div";
  }
})
//12
const menuD = document.getElementById('menuDesplegable');
menuD.addEventListener('click', (e) => {
  let txtMenu = document.getElementById('txtMDId');
  if(menuD.value !== "0")
  {
    txtMenu.textContent = "seleccionaste la opcion " + menuD.value;
  }else
  {
    txtMenu.textContent = "Selecciona una opcion";
  }
})
//13
function actualizarReloj()
{
  const reloj = document.getElementById('reloj');
  const ahora = new Date;

  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  reloj.textContent = `${hora}:${minutos}:${segundos}`;
}
setInterval(actualizarReloj, 1000);
//14
const tabla = document.getElementById('tabla');
const celdas= tabla.querySelectorAll('td')
celdas.forEach(celda => {
  celda.style.backgroundColor = "red";
  celda.addEventListener('click', (e) => {
    if(celda.style.backgroundColor === "red")
    {
      celda.style.backgroundColor = "limegreen";
    }else
    {
      celda.style.backgroundColor = "red"
    }
  })
})
//15
const formulario = document.getElementById('form1');
const emailinput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const validacion = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

emailinput.addEventListener('input', (e) => {
  if(validacion.test(email.value)){
    emailError.style.display = "none";
  }else
  {
    emailError.style.display = "inline";
  }
})
formulario.addEventListener('submit', (e) => {
  if(!validacion.test(emailinput.value)){
    e.preventDefault();
    alert('ingrese un mail valido')
  }
})
//16
let operacionActual ='';
let operador ='';
let valorAnterior ='';

function agregarNumero(numero){
  operacionActual += numero;
  document.getElementById('resultadoCalcu').value = operacionActual;
}

function operacion(op)
{
  operador = op;
  valorAnterior = operacionActual;
  operacionActual = '';
}

function calcular()
{
  if (valorAnterior === '' || operacionActual === '') return;
  let resultado;
  switch (operador) {
    case '+':
      resultado = parseFloat(valorAnterior) + parseFloat(operacionActual);
      break;
    case '-':
      resultado = parseFloat(valorAnterior) - parseFloat(operacionActual);
      break;
    case '*':
      resultado = parseFloat(valorAnterior) * parseFloat(operacionActual);
      break;
    case '/':
      resultado = parseFloat(valorAnterior) / parseFloat(operacionActual);
      break;
    default:
      return;
  }
  document.getElementById('resultadoCalcu').value = resultado;
  operacionActual = resultado.toString();
}

function limpiar()
{
  operacionActual = '';
  operador = '';
  valorAnterior = '';
  document.getElementById('resultadoCalcu').value =' ';
}
//17
let numRandom = Math.floor(Math.random() * 5) + 1;
function RevelarResultado()
{
  if(document.getElementById('numero').value === '') return;
  if(document.getElementById('numero').value === numRandom.toString())
  {
    document.getElementById('adivinoNumero').style.display = "block";
    document.getElementById('noAdivino').style.display = "none";
  }else
  {
    document.getElementById('adivinoNumero').style.display = "none";
    document.getElementById('noAdivino').style.display = "block";
  }
}
