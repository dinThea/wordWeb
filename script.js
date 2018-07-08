var init = new Array();
var begin = new Array();
var end = new Array();
let lista = [];
var placar = document.getElementById('placar');
placar.style.height = 0;
let cc = [];
let words = [];
let wordsPos = [];


// caca palavras do nivel facil
cc1 = [    
    '',    
    '         P F H T O R T A W B          ',// TORTA HOR
    '         G J Y K W F V E X S          ',
    '         S B N M N R C S J T          ',// SALADA COMECO VER +  COMECO DO BOLO DIA
    '         J L O T F A M A T R          ',
    '         F P Y L W N J L B O          ',// COMECO DO PICLES VER
    '         O I Y P O G D A S G          ',// FIM DO BOLO DIA + FRANGO DIA 
    '         L C M Y S O R D M O          ',// COMECO DA MANGA DIA
    '         O L B A T A T A W N          ',//BATATA HOR + FIM DA SALADA VER
    '         K E R F N I X H S O          ',
    '         P S D G O G N M S F          ',// FIM DO PICLE VER
    '         Z B O P U F A N H F          ',// FIM DA MANGA DIA + FIM DO FRANGO DIA
]

//Lista de palavras do cc1
listacc1 =[
    'BATATA',
    'BOLO',
    'FRANGO',
    'MANGA',
    'PICLES',
    'SALADA',
    'TORTA',
]

// caca palavras do nivel medio
cc2 =[    
    '',    
    '   H D M X R F K K J J Y K W C L N    ',
    '   J L H S F C M W T U F A Y M W J    ',// comeco do salsicha ver
    '   L D C A S D W L M M O U B M I I    ',
    '   P L D L G M E G A R O C N X K U    ',// fim do batman dia invertido + CORAGEM INVERTIDO
    '   R Y V S F N K G E L K A A V X C    ',
    '   B B L I F G Y V A B M U G W S Q    ',// COMECO DO STITCH DIA
    '   Q E Q C G I D N X T I M V T H S    ',
    '   V O B H I P I K A C H U I Q W N    ',//pikachu horizontal
    '   F D E A W L O B I S S T Y X P S    ',//comeco do batman dia invertido + fim do salsicha ver
    '   M K A W E I E V F R C P I E R C    ',
    '   H I O J B H G P S H E L U Y E I    ',//FIM DO STITCH DIA
    '   Q Y D A O K U Q A X E G T O R A    ',// FIM DO PERNA LONGA VER INVERTIDA
    '   D E J G S E C X R C A S C I Q G    ',// COMECO DO COISA VER
    '   C Y D F B V O N S S Y U I S E N    ',// COMECO DO DUDU VERTICAL
    '   B A R T B X I M P S S A C K D O    ',//BART HOR
    '   K W D G E L A D O U N H L I O L    ',//FIM DO POOH dia invertido + GELADO HOR
    '   J I U I X K A L F N X W O W Y A    ',// FIM DO COISA VER
    '   S S A M U R A I J A C K P O X N    ',//samuraijack hor
    '   Y S G I S U N G J X T W E H P R    ',// COMECO DO POOH dia INVERTIDA
    '   P S G C K H H G X P F T G M F E    ',
    '   T W E F K U R I L I N L E G L P    ',//comeco do eustacio diagonal + COMECO DE PERNALONGA VERTICAL INVERTIDA + KURILIN HOR
    '   Y L N U Y E N I R E V L O W S N    ',// WOLVERINE HOR INVERTIDO
    '   Y G K N S R R I S N C N E V M H    ',// COMECO DO SEIYA VER
    '   B W E K E T S H L S L O F H S S    ',
    '   M U K H I L A F O X K I S Q U B    ',
    '   V G E R Y F P C M I C K E Y L F    ',// MICKEY HOR
    '   A F K O A L J Q I G P C E M I R    ', // FIM DO SEIYA VER
    '   J L K C G Q L D O O Q R F X A F    ',// fim do eustacio diagonal
    '   C Y T C K I I L G O M D S H V O    ',//mogli hor invertido
    '   A Y D H S Q E N H N E Y G S A W    ',
]

//Lista para o cc2
listacc2 =[
    'BART',
    'BATMAN',
    'COISA',
    'CORARGEM',
    'DUDU',
    'EUSTACIO',
    'GELADO',
    'KURULIN',
    'MICKEY',
    'MOGLI',
    'PERNALONGA',
    'PIKACHU',
    'POOH',
    'SALSICHA',
    'SAMURAIJACK',
    'SEIYA',
    'STITCH',
    'WOLVERINE',
    
]
// caca palavras do nivel dificil
cc3 = [
    '',
    ' C A T B D V A A A U O M E T E O R O X R',
    ' R A U F T G A E P F E O P O E I R A Z X',
    ' U S I U E N U O A P L U T A O L A C C H',
    ' B M E M L C S E D I A A T E S A O A J C',
    ' M C O M E T A S E U T E R R A X U E U O',
    ' O U G O S O R O X S I S T E M A T H A H',
    ' N F A O C D E A A E Z H A E T I O N E S',
    ' R Z L L O E I T D S O P R O C H N C I O',
    ' U O A U P E X I I X H O T W A X O H J R',
    ' T S X A I U O B V B Z R O A E A S T E T',
    ' A O I J O Y E R E T I P U J C A Q H U S',
    ' S O A I M Q V O A F S P P S O O A K O A',
    ' E D I O R E T S A A U A P G E S X O E A',
    ' O O I R U C R E M L N O E O N U T E N I',
    ' O I N E G I X O P Z E G E I O F W J S P',
    ' A R E V A M I R P C V V A A L O A R E V',
    ' S E S E M O E L A C Y D A F U T S E T O',
    ' A B O D J N T U A M S M O E N Y A N I J',
    ' O D O O C A P S E A G U O N O K O F N B',
    ' Z N O N A R R P L R E N Z E Q S C A Q R',
    ' T G O M R U O U J T E D I O T E N A L P',
    ' A Z N S N A C C E E L O S C U T O R A O',
    ' C A R A H O Z S H O R A R I O S Q E A O',
    ' B C E T R A N S L A C A O O B E R F U O',
    ' R I V E E V N V D E U U O T O L A S D U',
    ' F M N L E A O A E O P W A I C E L O V A',
    ' O S I I T W T Q B E I B E E I C O I W E',
    ' Q O K T C A A A V O E I Q F O K S L C A',
    ' X C G E O A C A T O R U I E S T R E L A',
    ' N J I S A E U N I V E R S O A O Z H A Z'
]

//Lista para o cc3
listacc3 = [
    'ANO',
    'ASTEROIDE',
    'ASTROS',
    'CELESTES',
    'COMETAS',
    'CORPOS',
    'COSMICA',
    'DIA',
    'EFEITO',
    'ESPACO',
    'ESTRELA',
    'ESTUFA',
    'FUSO',
    'GALAXIA',
    'HELIOSFERA',
    'HORARIO',
    'INVERNO',
    'JUPITER',
    'LUA',
    'MARTE',
    'MERCURIO',
    'MESES',
    'METEORO',
    'MUNDO',
    'NETUNO',
    'NOITE',
    'OUTONO',
    'OXIGENIO',
    'PLANETOIDE',
    'PLUTAO',
    'POEIRA',
    'PRIMAVERA',
    'ROTACAO',
    'SATURNO',
    'SATELITES',
    'SISTEMA',
    'SOL',
    'SOLAR',
    'TELESCOPIO',
    'TERRA',
    'TRANSLACAO',
    'UNIVERSO',
    'URANO',
    'VERAO',
    'VIDA',
    'VENUS',
    'ORBITA',
]
    
// Funcao que guardara as palavras do caca palavra
var findWords = (cy1, cx1, cy2, cx2) => {
    var ret = '';
    console.log(cy1, cx1, cy2, cx2);
    if(cx1 == cx2){
        if(cy1 < cy2){
            for(j = cy1; j <= cy2; j++){
                if (cc[cx1][j] != ' ')
                    ret+=cc[cx1][j];
                console.log(ret)
                
            }
        }
        if(cy1 > cy2){
            for(j = cy2; j <= cy1; j--){
                if (cc[cx1][j] != ' ')               
                    ret+=cc[cx1][j];
                console.log(ret)                    
            }
        }
    } else if(cy1 == cy2){
        if(cx1 < cx2){
            for(i = cx1; i <= cx2; i++ ){
                if (cc[i][cy1] != ' ')
                    ret+=cc[i][cy1];
                console.log(ret)
            }
        }
        else if(cx1 > cx2){
            for(i = cx2; i <= cx1; i--){
                if (cc[i][cy1] != ' ')                    
                    ret+=cc[i][cy1];
                console.log(ret)
                
            }    
        }
    } else {
        console.log('diagonal');
        var stepx = (cx1 > cx2)? -1: 1, stepy = (cy1 > cy2)? -2: 2;
        console.log(stepx, stepy);
        for (var i = cx1, j = cy1; i != (cx2+stepx); i+=stepx, j+=stepy){
            ret+=cc[i][j];
            console.log(ret);                
        }
    }

    return ret;
}
// leitura do html no javascript
var c = document.getElementById('c');
var element = document.getElementById('abrircp');
var menuW = document.getElementById('menuW'); 
var ctx = c.getContext('2d');    
var plq = placar.getContext('2d'); 
console.log(ctx.canvas.width, ctx.canvas.height);
// funcao que mostra as palavras
let showWords = (fillStyle) => {

    wordsPos = [];
    for (var i = 0; i < cc.length; i++) {
        wordsPos.push([]);
        for (var j = 0; j < cc[i].length; j++) {
            wordsPos[i].push([]);
            wordsPos[i][j] = [padding + j*xoffset, i*offset, cc[i][j]];
            ctx.fillText(cc[i][j], padding + j*xoffset, i*offset);         
        }
    }

}

let corrX = -9, corrY = -33; // correcao das posicao de x e y
let proportion = [1, 1];
elemLeft = element.offsetLeft + menuW.offsetLeft; // correcao de posicao
elemTop = element.offsetTop + menuW.offsetTop;// vericacao de estado
var clickHandler = true;// verificacao de estado
var ccexists = true;// verificacao de estado
var actualCc = 0;// verificacao de estado

if (clickHandler) {
    document.getElementById('abrircp').style.visibility = 'hidden';
    document.getElementById('c').style.visibility = 'hidden';    
    document.getElementById('c').style.height = '0';  
    document.getElementById('abrircp').style.height = '0';       
    placar.style.height = '0'; 
            
        
} else {
    document.getElementById('abrircp').style.visibility = 'visible';
    document.getElementById('abrircp').style.height = '180px';    
    placar.style.height = '180px';            
    if (ccexists) {
        console.log(ccexists);
        document.getElementById('c').style.visibility = 'visible';     
        document.getElementById('c').style.height = '900px';
    } else {
        document.getElementById('c').style.visibility = 'hidden';
    }        
                    
}

// chamada da funcao onClickItem
document.getElementById('clickable').onclick = function() {onClick()};
document.getElementById('cc1').onclick = function() {onClickItem(this.id)};
document.getElementById('cc2').onclick = function() {onClickItem(this.id)};
document.getElementById('cc3').onclick = function() {onClickItem(this.id)};

var desenharPalavras = (lista) => {
    plq.fillStyle = 'black';
    plq.rect(-10000,-10000,100000,100000);  
    plq.fill();
    plq.closePath();          

    lista.forEach((element, index) => {
        console.log(words);
        if (words.includes(element)){
            plq.beginPath();
            plq.moveTo(padding,index*offset/1.5+43-5);
            plq.lineWidth = 2;
            plq.lineTo(padding + element.length*12,index*offset/1.5+43-5);
            plq.strokeStyle='white';
            plq.stroke(); 
            plq.closePath();
        }
        plq.fillStyle = 'white';
        plq.fillText(element, padding, index*offset/1.5+43);                     
    });
}

// funcao que faz cada item se tornar clicavel
var onClickItem = (id) => {

    words = [];
    plq.fillStyle = 'black'
    plq.strokeStyle = 'black'      
    plq.font = '18px Arial';        
    plq.rect(-10000,-10000,100000,100000);  
    plq.fill();
    plq.closePath();          
    var size;

    plq.fillStyle = 'white'
    plq.strokeStyle = 'white'      

    switch (id) {
        case 'cc1':
            cc = cc1;
            lista = listacc1;
            size = '1300px';
        break;
        case 'cc2':
            cc = cc2;
            lista = listacc2;
            size = '1300px';
        break;
        case 'cc3':
            cc = cc3;
            lista = listacc3;
            size = '1300px';
        break;
    }

    desenharPalavras(lista);

    console.log(cc);

    document.getElementById('abrircp').style.visibility = 'hidden';
    document.getElementById('abrircp').style.height = '0px'; 
    placar.style.height = '180px';                                                          

    // caso caca palavras existe ele se torna visivel
    if (ccexists) {
        console.log(ccexists);
        document.getElementById('c').style.visibility = 'visible'; 
        document.getElementById('c').style.height = size;
        placar.style.height = size;                                                              
    
    // caso nao exsita ele deixa invisivel
    } else {
        document.getElementById('c').style.visibility = 'hidden';  
        
    }

    clickHandler = !clickHandler;
    ctx.fillStyle = 'black'
    ctx.strokeStyle = 'black'      
    plq.fillStyle = 'black'
    plq.strokeStyle = 'black'      

    ctx.rect(0,0,10000,10000);            
    ctx.stroke();
    ctx.fill(); 
    ctx.closePath();
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'white'
    init = new Array();
    begin = new Array();
    counter = 0;
    end = new Array();
    showWords();
    
    console.log('click');     
    
}

// funcao que faz aparecer ou desaparecer quando clicado
var onClick = () => {

    words = [];
    document.getElementById('c').style.visibility = 'hidden';
    document.getElementById('c').style.height = '0px';                

    if (clickHandler) {
        document.getElementById('abrircp').style.visibility = 'hidden';
        document.getElementById('abrircp').style.height = '0px';
        placar.style.height = '0';   
        plq.fillStyle = 'black'
        plq.strokeStyle = 'black'      

        plq.rect(0,0,10000,10000);  
        plq.fill();
        plq.closePath();          
                                                
                    
    } else {
        document.getElementById('abrircp').style.visibility = 'visible';
        document.getElementById('abrircp').style.height = '180px';  
        placar.style.height = '180px';                             
        plq.fillStyle = 'black'
        plq.strokeStyle = 'black'      

        plq.rect(0,0,10000,10000);            
        plq.fill();
        plq.closePath();                   
        
    }

    clickHandler = !clickHandler;
    console.log('click');        
}

// desenha as linhas de selecao nas palavras do caca
var drawDoubleStrokedLine = (beginx, beginy, endx, endy, tickness, ctx) => {
    ctx.beginPath();
    ctx.moveTo(beginx, beginy+tickness/2);
    ctx.lineTo(endx, endy+tickness/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(beginx, beginy-tickness/2);
    ctx.lineTo(endx, endy-tickness/2);
    ctx.stroke();
    ctx.closePath();
}

// https://raw.githubusercontent.com/dinThea/wordhunter/master/cc.txt

// definicao de posicoes
let center = 30;
let h1pos = 60;
let bgpos = 60;
let size = c.width;
let lineLength = size - center + 475;   
let offset = 40; 
let xoffset = 19;
let counter = 0;
let originValues = [];    
let lastValues = [];
let testRelease = false;
let padding = 0;
let wordsCoord = [1,1,1,1];
//ctx.scale(.25,.25);

var headerCanvas = document.getElementById('header');// variavel do titulo da pagina
var ctxHeader = headerCanvas.getContext('2d');// contexto sobre a variavel headerCanvas
ctxHeader.font = '60px Arial';//definicao da fonte do titulo
ctxHeader.fillStyle = 'white'// definicao da cor do preenchimento
ctxHeader.arcStyle = 'white'    // definicao da cor do arco
ctxHeader.strokeStyle = 'white'// defin definicao da cor do tracado
ctxHeader.lineWidth = 2;// definicao do tamanho da linha
ctxHeader.fillText('WORDHUNTER', center, h1pos);// definicao do nome do jogo
drawDoubleStrokedLine(center - 10, h1pos+bgpos/2.5, center+lineLength, h1pos+bgpos/2.5, 10, ctxHeader);// definicao do tracado duplo   
ctxHeader.font = '20px Arial';//   tamanho das letras do caca palavras

originValues  = [];
//adiciona um eventlistener para o movimento descendete do mouse
c.addEventListener('mousedown', function(event) {
    wordsCoord = [1,1,1,1];
    var x = event.pageX - elemLeft,
    y = event.pageY - elemTop;

    testRelease = true;
    console.log('aqui');
    originValues = [x - x%(xoffset*2) + padding, y - y%offset];
    lastValues = [x - x%(xoffset*2) + padding, y - y%offset]; 
    init.push([lastValues[0], lastValues[1]]);
    console.log(init);     
    counter++;
    wordsCoord[0] = Math.floor(originValues[0]/(xoffset)) - 1; wordsCoord[1] = Math.floor(originValues[1]/(offset));
    console.log('wordsCoord', wordsCoord);        
    console.log('primeira letra:', cc[wordsCoord[1]][wordsCoord[0]]);//console.log(cc[Math.floor(x/(offset))-1][Math.floor(y/(offset)) + 8])

}, false);

// adiciona um eventlistener para o movimento do mouse
c.addEventListener('mousemove', function(event) {
    ctx.strokeStyle = 'black'      
    ctx.fillStyle = 'black'            
    ctx.rect(0,0,10000,10000);     
    ctx.stroke();
    ctx.fill(); 
    ctx.closePath();
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'white'
    showWords();         

    var x = event.pageX - elemLeft,
    y = event.pageY - elemTop;

    drawDoubleStrokedLineWArc(x - x%(xoffset*2) + padding - 12, y - y%offset - 6, x - x%(xoffset*2) + padding-12.001, y - y%offset-6.001, 36);                        
    if (end.length > 0) {
        for (var i = 0; i < init.length; i++) {
            if (i < end.length)
                drawDoubleStrokedLineWArc(init[i][0] - 12 , init[i][1] - 6, end[i][0] - 12, end[i][1] - 6, 36);                          
        }
    }

    if (testRelease) { 
        drawDoubleStrokedLineWArc(originValues[0] - 12, originValues[1] - 6, x - x%(xoffset*2) + padding - 12, y - y%offset - 6, 36);    
        lastValues = [x - x%(xoffset*2) + padding, y - y%offset];
        wordsCoord[2] = Math.floor(lastValues[0]/(xoffset)) - 1; wordsCoord[3] = Math.floor(lastValues[1]/(offset));
    }

}, false);

// adiciona um eventlistener para quando ha o movimento ascendente do mouse
c.addEventListener('mouseup', function(event) {
    var x = event.pageX - elemLeft;
    y = event.pageY - elemTop;
    x*=proportion[0];
    y*=proportion[1];
    testRelease = false;
    end.push([lastValues[0], lastValues[1]]);
    //console.log(end, begin);
    lastValues = []; 
    console.log(wordsCoord);       
    var result = '';
    // Collision detection between clicked offset and element.
    if (wordsCoord[0] == wordsCoord[2] || wordsCoord[1] == wordsCoord[3] || (wordsCoord[0]/2 - wordsCoord[1]) == (wordsCoord[2]/2 - wordsCoord[3])){
        console.log('yis')
        wordsCoord
        console.log(...wordsCoord);
        result = findWords(...wordsCoord)
    }
    
    showWords();
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'white'
    if (!lista.includes(result)){
        init = init.slice(0, -1);
        counter--;
        end = end.slice(0, -1);
    }else{
        words.push(result);
    }
    desenharPalavras(lista);

    for (var i = 0; i < init.length; i++) {
        if (i < end.length)        
            drawDoubleStrokedLineWArc(init[i][0] - 12, init[i][1]-6, end[i][0]-12, end[i][1]-6, 36);                          
    }

    // begin.forEach((element, index) => {
        // drawDoubleStrokedLineWArc(element[0], element[1], end[index][0], end[index][1], 28);    
    // });
    lastValues = [x, y];
        

}, false);

// desenha o arco na caixa de selecao do caca palavras
var drawDoubleStrokedLineWArc = (beginx, beginy, endx, endy, tickness)=> {
    let factor = Math.pow(2, beginx-endx)/Math.pow(2, beginy-endy);
    let angle = Math.atan((beginy-endy)/(beginx-endx));
    let factor2 = Math.pow(2, beginy-endy)/Math.pow(2, beginx-endx);
    let newPos = [
        beginx+Math.sin(angle)*tickness/2,
        beginy-Math.cos(angle)*tickness/2,
        endx+Math.sin(angle)*tickness/2,
        endy-Math.cos(angle)*tickness/2
    ]
    let newPos2 = [
        beginx-Math.sin(angle)*tickness/2,
        beginy+Math.cos(angle)*tickness/2,
        endx-Math.sin(angle)*tickness/2,
        endy+Math.cos(angle)*tickness/2
    ]
    //console.log('angle: ', angle);
    // Desenhando as linhas
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(newPos2[0], newPos2[1]);
    ctx.lineTo(newPos2[2], newPos2[3]);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(newPos[0], newPos[1]);
    ctx.lineTo(newPos[2], newPos[3]);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();             

    if ((endx - beginx) <= 0) {
        ctx.arc(beginx, beginy, tickness/2 - .1, angle + 3*Math.PI/2, angle + Math.PI/2);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();             
        ctx.arc(endx, endy, tickness/2 - .2, angle + Math.PI/2, angle + 3*Math.PI/2);
    } else {
        ctx.arc(beginx, beginy, tickness/2 - .1, angle + Math.PI/2, angle + 3*Math.PI/2);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();             
        ctx.arc(endx, endy, tickness/2 - .2, angle + 3*Math.PI/2, angle + Math.PI/2);
    }    
    ctx.stroke();
    ctx.closePath();
    //ctx.fill();

}


ctx.fillStyle = 'black'
ctx.strokeStyle = 'black'      

ctx.rect(0,0,1000,1000);            
ctx.stroke();
ctx.fill(); 
ctx.closePath();
ctx.fillStyle = 'white'
ctx.strokeStyle = 'white'

ctx.fillStyle = 'white'
ctx.arcStyle = 'white'    
ctx.strokeStyle = 'white'    
ctx.font = '20px Arial';    

showWords();
