//AULA 1
//TIPOS DE VARIÁVEIS 

var nameVar = 'Hitalo';
let nameLet = 'Hitalo';
const nameConst = 'Hitalo';

console.log('nameVar: ${nameVar}');
console.log('nameLet: ${nameLet}');
console.log('nameConst: ${nameConst}');

//ESCOPO GLOBAL
var teste = 'Opa'

{
    //ESCOPO DE BLOCO
}

function test() {
    //ESCOPO DE FUNÇÃO
}

//CONST

const name ='Hitalo';

//NÃO PODEMOS ALTERAR O VALOR
name = 'Hitalo';

//CRIANDO OBJETO
const user = {
    name: 'Hitalo'
};

//MAS SE FOR UM OBJETO, PODEMOS TROCAR SUAS PROPRIEDADES
user.name = 'Outro nome';

//NÃO PODEMOS FAZER O OBJETO "APONTAR" PARA OUTRO LUGAR
user = {
    name: 'Hitalo'
};

//ARRAY
const persons = ['Hitalo', 'Tadeu', 'Dantas'];

//PODEMOS ADICIONAR NOVOS ITENS
persons.push('Almeida');

//PODEMOS REMOVER ALGUM ITEM
persons.shift();

//PODEMOS ALTERAR DIRETAMENTE
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);


//AULA 2

//TIPOS DE VARIÁVEIS 2 (6 TIPOS PRIMITIVOS)

String TEXTO
Boolean  -- TRUE OR FALSE
Number -- NÚMERO
null -- NULO
undefined -- INDEFINIDO 
symbol --PERMITE CRIAR VALORES ÚNICOS*/

//OUTROS TIPOS

OBJECT
FUNCTION
ARRAY


//FUNCTION
function fn(){
    return 'Code here';
};

//ARROWFN
const arrowFn = () => 'Code here';
const arrowFn = () => {
    return 'code here';
}

//FUNCTION E ARRAY TAMBÉM SÃO OBJETOS QUE PODEM SER CHAMADOS
fn.prop = 'Posso criar pripiedades';

console.log(fn());
console.log(fn.prop);

// RECEBER PARÂMETROS
const LogValue = value => console.log(value);
const LogFnResult = fnParam => console.log(fnParam());

LogFnResult(fn);

//RECEBER E RETORNAR FUNÇÕES
const controlFnExec => fnParam => allowed => {
    if (allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função
handleFnExecution(); //Não executará a função fn

//controlFnExec como função

function controlFnExec (fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam();
        }
    }
}

const person = [
    {
        name: 'Hitalo',
        age: 28,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 25,
        gender: gender.MAN
    },
    {
        name: 'Brunna',
        age: 27,
        gender: gender.WOMAN
    },

];

//FILTRAR ARRAY (gender)

const mens = persons.filter(person => person.gender == gender.MAN);
console.log('\nNova lista apenas homens:', mens);

//RETORNAR UM NOVO (map)

const personWithCourse = person.map(person =>) {
    person.course = 'Introdução ao javascript';
    return person;
}

console.log('\nPessoas com a adição do course', personWithCourse);

//TRANSFORMAR UM ARRAY EM OUTRO TIPO (reduce)
const totalAge = persons.reduce ((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

//FILTRAR ARRAY (filter)

.filter(person => person.age % 2 == 0)

//OPERADORES ARITMÉTICOS, ATRIBUIÇÃO, COMPARAÇÃO, CONDICIONAL, LÓGICOS, SPREAD


// OPERADOR BINÁRIO
operando1 operador operando2
//ex:
1 + 2

//OPERADOR UNÁRIO
operando1 operador
operador operando1
//ex:
x++
++x

//MÓDULO (%)
//OPERADOR BINÁRIO. RETORNA O INTEIRO RESTANTE

12 % 5 // retorna 2

// INCREMENTO (++) E DECREMENTO (--)
++x
x++

const a = ++2; //3
const b = 2++; //2

--x
x--

//NEGAÇÃO (-) ADIÇÃO (+)
-3
+"3" //retorna 3
+true // retorna 1
+false // retorna 0
-true // retorna -1

// OPERADOR DE EXPONENCIAÇÃO (**)

2 ** 3 // RETORNA 8
10 ** -1 // RETORNA 0.1

//OPERADOR DE AGRUPAMENTO ()
2 * (3 + 2)

//ATRIBUIÇÃO
x = y

//ATRIBUIÇÃO DE ADIÇÃO
x = x + y //ou
x += y

//ATRIBUIÇÃO DE SUBTRAÇÃO
x = x - y //ou
x -= y

//ATRIBUIÇÃO DE MULTIPLICAÇÃO
x = x * y //ou
x *= y

//ATRIBUIÇÃO DE DIVISÃO
x = x/ y //ou
x /= y

//ATRIBUIÇÃO DE RESTO
X = X % y //ou
x %= y

//COMPARAÇÃO

//IGUAL (==)
//retorna verdadeiro caso os operadores sejam iguais.

"3" == var1
3 == '3'

//NÃO IGUAL (!=)
//retorna verdadeiro caso os oepradores não sejam iguais

var2 != 3

//ESTRIRAMENTE IGUAL (===)
//retorna verdadeiro caso os operadores sejam iguaise do mesmo tipo
3 === var1

//ESTRITAMENTE NÃO IGUAL (!==)
//retorna verdadeiro caso os operadores não sejam iguais

var1 != "3"
3 != '3'


//CONDICIONAL TERNÁRIO

condicao ? valor1 : valor2

true ? 'foo' : 'bar'  //retorna 'foo'
false ? 'foo' : 'bar' //retorna 'bar'

//OPERADORES LÓGICOS (&&) e o (||)

// AND LÓGICO (&&)

exp1 && exp2 //Só precisa de 1 false pra ser FALSE

var a1 = true && true; // retorna true
var a2 = true && false; //retorna false
var a3 = false && true; // retorna false
var a4 = false && (3 == 4); //retorna false
var a5 = "Gato" && "Cão"; //retorna Cão
var a6 = false && "Gato"; //retorna false
var a7 = "Gato" && false; //retorna false

// OU LÓGICO (||)

exp1 || exp2 //SÓ PRECISA DE UM TRUE PRA SER TRUE

var o1 = true || true; //retorna true
var o2 = false || true;//retorna true
var o3 = true || false; //retorna true
var o4 = false || (3 == 4);//retorna false
var o5 = "Gato" || "Cão";//retorna Gato
var o6 = false || "Gato";//retorna Gato
var o7 = "Gato" || false;//retorna Gato

//NOT LÓGICO (!)
!exp1 //NEGANDO

var n1 = !true; // retorna false
var n2 = !false; //retorna true             //VAI RETORNAR TRUE SE A STRING "TIVER ALGUMA COISA"    //RETORNA TRUE**
var n3 = !"Gato"; //retorna false           //CASO A STRING ESTEJA VAZIA ""                         //RETORNA FALSE**

//SPREAD OPERATION
//ex:
var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés']; //PUXEI o (var partes) para dentro do array (musica)

//ex2:

function fn(x, y, z) { }
var args = [0, 1, 2];
fn (...args);

//UNÁRIOS 2

//deletar algo
delete something;

//determinar tipo

typeof something;

//BINÁRIOS 2

//in
something in somethingItems

//Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicomoro");
0 in arvores; //retorna true
3 in arvores; //retorna true
6 in arvores; //retorna false
"cedro" in arvores; // retorna false (voce deve especificar o número do índice, não o valor naquele índice)
"lenght" in arvores // retorna true (lenght é uma propriedade de Array)

//objetos predefinidos (LENGTH POSSUI NA STRING)
"PI" in Math; // retorna true

var minhaString = new String("coral");
"length" in minhaString; //retorna true

//objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano:2020};
"marca" in meucarro; //retorna true
"modelo" in meucarro: //retorna true

//instaceof
objeto instaceof tipoObjeto

var dia = new Date(2018, 12, 17);
if (dia instanceof Date) {
    //code here;
}

//CONDICIONAIS E REPETIÇÃO

//IF
if (condition) {
    //code
}

const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
    if (item % 2 === 0){
        console.log(' O número ${item} é par.');
    } else {
        console.log('O número ${item} é ímpar.');
    }
});

//ELSE IF
if (condition) {
    //code
} else if (condition){
    //code
}

const array = [0, 1, 2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nelse if');
array.forEach(item => {
    if (item % 2 === 0){
    console.log('O número ${item} é divisivel por 2.');
    }else if (item % 3 === 0){
    console.log('O número ${item} é divisivel por 3.');
    }else if (item % 5 === 0){
        console.log('O número ${item} é divisivel por 5.');
    }
});

//SWITCH

//identação
switch (espressão){
    case valor1:
        [break;]
    case valueN:
        [break;]
    
    default:
        [break;]    
}

const fruit = 'manga';

switch (fruit){
    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 / kg');
        break;
    default:
        console.log('Produto não existe no estoque');
        break;        
}

//ESTRUTURAS DE REPETIÇÃO (FOR, WHILE, DO...WHILE. FOR...IN, CONTINUE, BREAK)

//FOR

/*

for ([expressãoInicial]; [condição]; [incremento])
    declaração

*/

const array = ['one', 'two', 'three'];

for (let index = 0; index < array.length; index++){
    const element = array[index];
    console.log('Element #${index}: ${element}.');
}

//WHILE

/*

while (condicao)
    declaracao

*/

var n = 0;
var x = 0;

while (n > 3){
    n++;
    x += n;       // 1, 3, 6
}

console.log(x);

//DO WHILE

/*

do {
    declaração
} while (condicao);

*/

let i = 0;

do {
    i += 1;
    console.log(i);
} while (i < 5);

// FOR IN, FOR OF

let arr = [3, 5, 7];
arr.foo = "hello";

//FOR IN
for (let i in arr){
    console.log(i); // logs "0", "1", "2", "foo"
}

//FOR OF

for (let i of arr) {
    console.log(i); // logs "3", "5", "7"
}

//CONTROLE DE REPETIÇÃO BREAK E CONTINUE

//BREAK

const fruit = 'manga';

switch (fruit){
    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 / kg');
        break;
    default:
        console.log('Produto não existe no estoque');
        break;        
}

//CONTINUE

console.log('\nExemplo da utilização do continue');
const array = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element % 2 === 0) {
        continue;
    }

    console.log(element);
}

//ORIENTAÇÃO A OBJETOS

//PROTOTYPE DONE!

//CLASS

'use strict';

class Animal {
    constructor(qtdePatas){
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal  {
    constructor(morde) {
        super(4);
        this.morde = 4;
    }
}

console pug = new Cachorro(false); //Cachorro {qtdePatas: 4, morde: 4}

//GET E SET FUNCTION

'use strict';

function Person( initialName) {
    var name = initialName;

    Object.defineProperty(this, 'name', {
        get: function() {
            return name;
        },
        set: function(value) {
            name = value;
        }
    });
}

//GET E SET CLASS

'use strict';

class Person {
    #name = '';

    constructor (name) {
        this.#name = name;
    }

    get name () {
        return this.#name;
    }

    set name (name) {
        this.#name = name;
    }
}

//STATIC

'use strict';

class Person {
    static walk() {
        console.log('walking...');
    }
}

console.log(Person.walk()); // "walking..."


/////////////////////////////////////////// DESIGN PATTERNS //////////////////////////////////////////////////

//TIPOS CRIAÇÃO, ESTRUTURAIS, COMPORTAMENTAIS

///////PADRÕES DE CRIAÇÃO

/*SÃO AQUELES QUE ABSTRAEM OU ADIAM O PROCESSO DE CRIAÇÃO DE OBJETOS
TORNA O SISTEMA INDEPENDENTE DE COMO SEUS OBJETOS SÃO CRIADOS, COMPOSTOS E REPRESENTADOS.*/

//ABSTRACT FACTORY
//BUILDER
//FACTORY METHOD
//PROTOTYPE
//SINGLETON



///////PADRÕES ESTRUTURAIS

/* REFERE-SE A COMO AS CLASSES E OBJETOS SÃO COMPOSTOS PARA FORMAR ESTRUTURAS MAIORES*/

//ADAPTER
//BRIGDE
//COMPOSITE
//DECORATOR
//FACADE
//BUSINESS DELEGATE
//FLYWEIGHT
//PROXY



///////PADRÕES COMPORTAMENTAIS 

/*SE CONCENTRAÇÃO NOS ALGORITMOS E ATRIBUIÇÃO DE VALORES ENTRE OS OBJETOS,
ELES NÃO DESCREVEM APENAS PDRÕES DE OBJETOS OU  DE CLASSSES, MAS TAMBÉM OS PADRÕES DE COMUNICAÇÃO ENTRE OS OBJETOS*/

//CHAIN OF RESPONSIBILITY
//COMMAND
//INTERPRETER
//ITERATOR
//MEDIATOR
//OBSERVER
//STATE
//STRATEGY
//TEMPLATE METHOD
//VISITOR



/////// PATTERNS MAIS UTILIZADOS NO JAVASCRIPT

//FACTORY
//SINGLETON
//DECORATOR
//OBSERVER
//MODULE


//FACTORY

/*Todas as funções que retornam um objeto, sem a necessidade de chamalas com o NEW, 
são consideradas FUNÇÕES FACTORY(Fábrica)*/

function Pessoa(){
    return {
        name:'Hitalo', 
        lastname:'Dantas'
    }
}

const p = Pessoa();
console.log(p);

//SINGLETON

/*A função desse  pattern é criar uma única instância de função construtora
e retorná-la toda vez em que for necessário utilizá-la.*/

//*** JQUERY ***

function Myapp(){
    if (!Myapp.instace){
        Myapp.instace = this;
    }

    return Myapp.instace;
}

//DECORATOR

/*Uma função decorator recebe uma outra função como parâmentro e estende o
seu comportamento  sem modificá-la explicitamente*/
//arrow function ==>

function readonly(target, name, descriptor){
    descriptor.writable = false;
    return descriptor;
}

class Job {
    @readonly
    title() { return 'CEO' }
}

//OBSERVER

/*É um pattern muito popular em aplicações javascript. A instância
(subscriber) mantém uma coleção de objetos (observers) e modifica todos eles
quando ocorrem mudanças no estado.*/

// ***VUE.JS***

class Observable {
    constructor() {
        this.observables = [];
    }

    subscribe(fn) {
        this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }

}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

//MODULE

/*É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais.*/

class Person {
    constructor(name){
        this.name = name;
    }
}

export default Person;

//utilizar Person
import Person From './models/person';


//CRIANDO E MANIPULANDO ARRAY

//array.of
/* Cria uma nova instância de array a partir do número
de parâmetros informados.*/

const arr = Array.of(1, 2, 3);

//array

/*Cria uma nova isntância de array de acordo com os parâmetros
informados*/

//array.from

/*Cria uma nova instância de array a partir de um parâmetro
(array-like) ou (iterable object)*/

//NodeList

const divs = document.querySelectorAll('div')

//PUSH

/*Adicionar um ou mais elementos no final do array e retorna 
o tamanho do novo array*/

const frutas = ['melancia', 'laranja'];

frutas.push = ['maça'];//adiciona maça na ultima posição

console.log = (frutas);

//POP

/*Remove o último elemento de um array e retorna o elemento
removido*/

const arr = ['banana', 'melancia', 'laranja'];
const removedItem = arr.pop();

console.log(removedItem)

console.log(arr);


//UNSHIFT

/*Adiciona no inicio um ou mais elementos e retorna o tamanho do
novo array*/

const arr = ['banana', 'melancia', 'laranja'];
const arrLength = arr.unshift('acerola');

console.log(arrLength)

console.log(arr);

//SHIFT

/*Remove o primeiro elemento de um array e retorna o elemento
removido*/

const arr = ['banana', 'melancia', 'laranja'];
const removedItem = arr.shift();

console.log(removedItem)

console.log(arr);

//CONCAT

/*Concatena um ou mais arrays retornando um novo array.*/

const salgados = ['coxinha', 'empada', 'kibe'];

const frutas = ['banana', 'melancia', 'laranja'];

const alimentos = frutas.concat(salgados);

console.log(alimentos)


//SLICE

/*Retorna um novo array 'Fatiando' o  array de acordo com
o início e fim*/

const  arr = [1, 2, 3, 4, 5];

arr.slice(0, 2); //[1, 2]

arr.slice(2); // [3, 4, 5]

arr.slice(-1); //[5]

arr.slice(-3); // [3, 4, 5]

//SPLICE

/*Altera um arry adicionando novos elementos enquanto remove
elementos antigos*/

const arr = [1, 2, 3, 4, 5];

arr.splice(2); //[3, 4, 5]

console.log(arr); //[1, 2]

arr.splice(0, 0, 'first'); // []

console.log(arr); //["first", 1, 2]

//INTERAR ELEMENTOS

//ForEach

/*Iteração de cada item dentro de um array*/

const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}´);
});

frutas.forEach(fruta => console.log(fruta))

frutas.forEach(fruta, index => console.log(index, fruta))


//MAP

/*Retorna um novo array, de mesmo tamanho, iterando cada item de um array*/

const arr = [1, 2, 3, 4, 5];

arr.map(value => value * 2); // [2, 4, 6, 8, 10]

//FLAT OR DEPTH

/*Retorna um novo array com todos os elementos de um sub-array
concatenados de forma recursiva de  acordo com  a profundidade
especificada(depth)*/

const arr = [1, 2, [3, 4]];

arr.flat(); //[1, 2, 3, 4]

//FLATMAP

/*Retorna um novo array assim como a função map executa um flat
de profundidade 1*/

const arr = [1, 2, 3, 4];

arr.flatMap(vlaue =>[value * 2]); //[2, 4, 6, 8]

arr.flatMap(value => [[value * 2]]); //[[2], [4], [6], [8]]


//KEYS

/*Retorna um ARRAY ITERATOR que contém as chaves para cada
elemento do array*/

const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

arrIterator.next(); //{value: 0, done: false}

arrIterator.next(); //{value: 1, done: false}

arrIterator.next(); //{value: 2, done: false}

arrIterator.next(); //{value: 3, done: true}


//VALUES

/*Retorna um ARRAY ITERATOR que contém os  valores para cada elemento do array*/

const arr = [1, 2, 3, 4];

const arrIterator = arr.values();

arrIterator.next(); //{value: 1, done: false}

arrIterator.next(); //{value: 2, done: false}

arrIterator.next(); //{value: 3, done: false}

arrIterator.next(); //{value: 4, done: true}


//ENTRIES

/*Retorna um ARRAY ITERATOR que contém os  pares chaves/valor para cada 
elemento do array*/


const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

arrIterator.next(); //{value: [0, 1], done: false}

arrIterator.next(); //{value: [1, 2], done: false}

arrIterator.next(); //{value: [2, 3], done: false}

arrIterator.next(); //{value: [3, 4], done: true}

//FIND

/*Retorna o primeiro item de um array que satisfaz a condição*/

const arr = [1, 2, 3, 4];

const firstGreaterThanTwo = arr.find(value => value > 2);

console.log(firstGreaterThanTwo); //3

//FINDINDEX

/*Retorna o índice do primeiro item de um array que satisfaz a condição*/


const arr = [1, 2, 3, 4];

const firstGreaterThanTwo = arr.findIndex(value => value > 2);

console.log(firstGreaterThanTwo); //2

//FILTER

/*Retorna um novo array com todos os elementos que satisfazem a condição*/


const arr = [1, 2, 3, 4];

const allValuesGreaterThanTwo = arr.filter(value => value > 2);

console.log(allValuesGreaterThanTwo); //[3, 4]

//INDEXOF

/*Retorna o primeiro índice em que um elemento pode ser encontrado no array*/


const arr = [1, 3, 3, 4, 3];

const firstIndexOfItem = arr.indexOf(3);

console.log(firstIndexOfItem); // 1

//LASTINDEXOF

/*Retorna o útimo índice em que um elemento pode ser encontrado no array*/


const arr = [1, 3, 3, 4, 3];

const lastIndexOfItem = arr.lastIndexOf(3);

console.log(lastIndexOfItem); // 4

//INCLUDES

/*Retorna um booleano verificando se determinado elemento
existe no array*/

const arr = [1, 3, 3, 4, 3];

const hasItemOne = arr.include(1); //true

const hasItemOne = arr.include(2); //false

//SOME

/*Retorna um booleano verificando se pelo menos um item de um
array satisfaz a condição*/

const arr = [1, 3, 3, 4, 3];

const hasSomeEvenNumber = arr.some(value => % 2 === 0); //true

//EVERY

/*Retorna um booleano verificando se todos os itens de um array
satisfazem a condição*/

const arr = [1, 3, 3, 4, 3];

const EvenNumber = arr.every(value => value % 2 === 0); //false

//SORT

/*Ordena os elementos de um array de acordo  com a condição*/

const arr = [1, 3, 2, 5, 4];

arr.sort();
console.log(arr);

//REVERSE

/*Inverte os elementos de um array*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.reverse();
console.log(arr);

//TRANFORMAR UM ARRAY EM OUTRO TIPO DE DADO

//JOIN

/*Junta todos os elementos de um array, separados por um delimitador
e retorna uma string*/

const arr = [1, 2, 3, 4, 5];

arr.join('-');
console.log(arr); //"1-2-3-4-5"

//REDUCE

/*Retorna um novo tipo de dado iterando cada posição de um array*/

const arr = [1, 2, 3, 4, 5];

arr.reduce((total, value) => total += value, 0); // 15

















































