/*
var tbody = document.getElementsByTagName('tbody')[0];


var dataRuim = '1997-11-24'

var dataBoa = dataRuim.split('-')

var ano = dataBoa[0]
var mes = dataBoa[1]
var dia =dataBoa[2]


var dataFinal = `${dia}/${mes}/${ano}`

var data2 = '' 

console.log(dataFinal)

for (var i = 0; i < 3; i++) {

    var td = document.createElement('td')
    var tr = document.createElement('tr')

    if (i % 2 == 0)
        tr.classList.add('even')
    
    else
        tr.classList.add('odd')
    
    td.textContent = dataFinal

    tr.appendChild(td)
    tbody.appendChild(tr)
}
var body =document.getElementsByTagName('body')[0]

var button = document.createElement('button')
button.innerText = 'AAAAA'
button.onclick = abreSite

body.appendChild(button)
function abreSite(){
    var largura = window.screen.availWidth * 0.6
    var altura = window.screen.availHeight * 0.9
    window.open("https://google.com/", "_blank", `toolbar=no, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=${largura}, height=${altura}`)

}
console.log(window.screen.availHeight)












var Filtro = document.querySelector('#data1').value;
var Filtro2 = document.querySelector('#data2').value;
var tbody = document.getElementsByTagName('tbody')[0];
var titulo = document.getElementById('tituloComPeriodo');

var dataFormatada = formataData(Filtro)
var dataFormatada2 = formataData(Filtro2)

titulo.textContent = `Mostrando dados de ${dataFormatada} a ${dataFormatada2}`;

var data = { "filtro": Filtro, "filtro2": Filtro2 };

$.ajax({
    url: "/Consultas/listaTrafegoForaDoPop",
    type: "POST",
    datatype: "json",
    data: data,
    responseType: "json",
    success: function (response) {
        //console.log(JSON.stringify(response)) //Mostra resultado sem formato
        var resultado = JSON.parse(response)  //Cria objetos
        const indices = ['Periodo', 'TipoNum', 'CN', 'Operadora', 'Minutos']; 

        for (var i = 0; i < resultado.length; i++) {
            var tr = document.createElement('tr')
            var td = document.createElement('td')

            if (i % 2 == 0)
                tr.classList.add('even')
            else
                tr.classList.add('odd')

            for (var j = 1; j < indices.length; j++){
                var td = document.createElement('td')
                td.textContent = resultado[i][indices[j]]
                tr.appendChild(td)
            }

            var button = document.createElement('button')
            button.style.marginLeft = "10%"
            button.style.marginTop = "5%"
            button.type = 'button'
            button.onclick = abreJanelaDetalhes

            var iElement = document.createElement('i')
            iElement.classList.add('fas', 'fa-info', 'fa-fw')
            iElement.title = 'Detalhes'

            button.appendChild(iElement)
            tr.appendChild(button)
            tbody.appendChild(tr)
            
        }
    },
    error: function (xhr) {
        alert(xhr.responseText);
    }
});
*/

var linhasTabela = document.getElementsByTagName('tr')

for (let linha of linhasTabela) {
    linha.addEventListener('click', function () {
        console.log(this);
        var childs = this.childNodes;


    })
}
/*
console.log(linhasTabela);
linhasTabela.forEach(e => {
    console.log(e)
});



*/





















