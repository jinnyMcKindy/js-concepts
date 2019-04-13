import React from 'react'
import ReactDOM from 'react-dom'
import styled, { injectGlobal } from 'styled-components'

import { Presentation, Slide } from '../src'
import { H1, H2, H3, H4, Code } from '../src/blocks'
import VideoBackground from '../src/blocks/video-background'

import { Presa } from '../src/assets/icons'
import SidebarLayout from './sidebar-layout'
import GithubButton from './github-button'

const baseTextColor = '#444'
const primaryColor = '#3c59ff'

const PitchDeck = () => (
  <Presentation name="Presa pitch deck" theme={{ textColor: baseTextColor }}>
    <Slide
      name="FP на JavaScript"
      layout={children => (
        <SidebarLayout
          src={require('./images/lambda.jpg')}
          proportion="6/9"
          children={children}
        />
      )}
    >
      <PresaTitle>Принципы ФП в JavaScript</PresaTitle>
      <PresaSlogan>
        Функциональное программирование - это парадигма программирования, стиль
        построения структуры и элементов компьютерных программ, который
        интерпретирует вычисления в виде математических функций, избегает
        мутации данных и изменения стейта 💅
      </PresaSlogan>
      <Footnote>
        —<br />
        Нажмите ➡️ кнопку для прокрутки слайда
      </Footnote>
    </Slide>
    <Slide name="Фичи ФП" centered>
      <H1>Фичи ФП</H1>
      <div>
        <img width="500px" height="auto" src={require('./images/char.png')} />
      </div>
    </Slide>
    <Slide name="Чистые функции" fade={0.2} centered>
      <Numbered number={1}>
        <H1>Чистые функции</H1>
        <H3>Признаки чистой функции: </H3>
        <ul>
          <li>
            Возвращает один и тот же результат при передаче одних и тех же
            аргументов (детерминированность)
          </li>
          <li>Не порождает side-effects</li>
        </ul>
      </Numbered>
    </Slide>
    <Slide name="Примеры pure functions" fade={0.2}>
      <H1>Примеры</H1>
      <Code>
        {` 
function pure(a){
  return a+2; //pure function
}
let f = 0;
function notPure(a){
  f++; //has side effects
  return a; 
}
function notPure(a){
  return Math.random(); //returns different result
}
`}
      </Code>
    </Slide>
    <Slide name="Returns the same result" fade={0.2}>
      <H1>The same result</H1>
      <Description>
        Функция не чистая, т.к. использует глобальную переменную. Вернет другой
        результат при одинаковых аргументах, если глобальная переменная
        изменится
      </Description>
      <Code>
        {` 
  let PI = 3.14;
  const calculateArea = (radius) => radius * radius * PI;
  calculateArea(10); // returns 314.0
  `}
      </Code>
    </Slide>
    <Slide name="Let's fix it!" fade={0.2}>
      <H1>Let's fix it!</H1>
      <Description>
        Передаем PI в качестве аргумента. Теперь у функции нет сайд эффектов, а
        результат всегда одинаков для одинаковых аргументов.
      </Description>
      <Code>
        {` 
let PI = 3.14;
const calculateArea = (radius, pi) => radius * radius * pi;
calculateArea(10, PI); // returns 314.0
  `}
      </Code>
      <p>
        <b>Вывод</b>: мутабельность не поощряется в функциональном
        программировании
      </p>
    </Slide>
    <Slide name="Преимущества чистых функций">
      <H1>Преимущества чистых функций</H1>
      <PresaSlogan>
        Чистые функции стабильны, согласованны и предсказуемы
      </PresaSlogan>
      <Description>
        Код становится тестируемым. Не надо мокать функции. Можно тестировать
        чистые функции с разным контекстом
      </Description>
      <ul>
        <li>Given a parameter A → expect the function to return value B</li>
        <li>Given a parameter C → expect the function to return value D</li>
      </ul>
      <Image width="350" src={require('./images/char.png')} />
    </Slide>
    <Slide name="Пример чистой функции">
      <p>
        Пример функции, которая получает на вход коллекцию чисел и увеличивает
        каждое число в коллекции
      </p>
      <Code>
        {` 
let list = [1, 2, 3, 4, 5];
const incrementNumbers = (list) => list.map(number => number + 1);
incrementNumbers(list); // [2, 3, 4, 5, 6]`}
      </Code>
      <img width="600px" src={require('./images/evolve.png')} />
    </Slide>
    <Slide
      name="Иммутабельность"
      layout={children => (
        <SidebarLayout
          src={require('./images/imm.png')}
          proportion="6/9"
          children={children}
        />
      )}
    >
      <H1>Иммутабельность</H1>
      <PresaSlogan>
        Неизменяемость со временем или не способность измениться
      </PresaSlogan>
      <Description>
        Если данные иммутабельны, то их стейт не может измениться после
        создания. Если вы хотите изменить иммутабельный объект - то это
        невозможно. Вместо этого создается новый объект с новым значением.
      </Description>
    </Slide>

    <Slide name="Циклы">
      <H1>Императивные циклы</H1>В JS часто используются циклы, которые мутируют
      данные
      <Code>{`
var values = [1, 2, 3, 4, 5];
var sumOfValues = 0;

for (var i = 0; i < values.length; i++) {
  sumOfValues += values[i];
}

sumOfValues // 15
`}</Code>
      <p>В примере выше изменяется переменная `sumOfValues`</p>
    </Slide>
    <Slide name="Декларативные циклы">
      <PresaSlogan>Как написать иммутабельную итерацию?</PresaSlogan>
      <p>
        {' '}
        С рекурсией перменные остаются иммутабельны. `list` and `the
        accumulator` не меняются.
      </p>
      <Code>{`let list = [1, 2, 3, 4, 5];
let accumulator = 0;
function sum(list, accumulator) {
  if (list.length == 0) {
    return accumulator;
  }
  return sum(list.slice(1), accumulator + list[0]);
}
sum(list, accumulator); // 15
list; // [1, 2, 3, 4, 5]
accumulator; // 0
`}</Code>
    </Slide>
    <Slide name="Композиция функций">
      <H1>Композиция функций</H1>
      <Description>
        Композиция функций и <i>function chaining</i> оставляет начальный объект
        неизменным Результат функции используется, как инпут в следующей функции
        не модифицируя <i>original input</i>
      </Description>
      <Code>{`let string = " I will be a url slug   ";
function slugify(string) {
  return string.toLowerCase()
    .trim()
    .split(" ")
    .join("-");
}
slugify(string); // i-will-be-a-url-slug
`}</Code>
    </Slide>
    <Slide name="Фукнции как объекты первого класса">
      <PresaSlogan>Фукнции как объекты первого класса</PresaSlogan>
      <PresaSlogan>Functions as first-class entities</PresaSlogan>
      <Description>
        <p>
          Иммутабельность + чистые функции позволяют кэшировать (запоминать)
          результат.
        </p>
        <p>
          Идея использования функций, как объектов первого класса, заключается в
          передачи их, как знечений, и использовании в качестве данных
        </p>
      </Description>
      Возможности функций, как объектов первого класса:
      <ul>
        <li>К ним можно обращаться как к константам или переменным</li>
        <li>Могут возвращаться, как результат, из других функций</li>
        <li>Передаваться в качестве параметра другим функциям</li>
      </ul>
      <Image width="300" src={require('./images/first.jpeg')} />
    </Slide>
    <Slide name="Фукнции высшего порядка" class="Фукнции высшего порядка">
      <PresaSlogan>Фукнции высшего порядка</PresaSlogan>
      <p>
        Функции высшего порядка используют другие функции в качестве объектов
        первого класса.
      </p>
      <p>Функции высшего порядка может: </p>
      <ul>
        <li>Принимают функции в качестве аргументов</li>
        <li>Возвращают функцию, как результат</li>
      </ul>
      <Code>{`
    let func = () => 2;
    function highOrder(func){
      return function(){
        return func()+2;
      }
    }
    highOrder(func)()
    `}</Code>
    </Slide>
    <Slide name="Filter">
      <H1>Imperative filter</H1>
      <PresaSlogan>
        Императивная фильтрация через создание нового массива
      </PresaSlogan>
      <Code>{`var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers); // (6) [0, 2, 4, 6, 8, 10]
`}</Code>
    </Slide>
    <Slide name="Declarative filter">
      <PresaSlogan>
        Декларативное решение через `filter` с использованием функции высшего
        порядка
      </PresaSlogan>
      <Code>{`
const even = n => n % 2 == 0;
const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
listOfNumbers.filter(even); // [0, 2, 4, 6, 8, 10]
function smaller(number) {
  return number < this;
}
function filterArray(x, listOfNumbers) {
  return listOfNumbers.filter(smaller, x);
}
let numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];
filterArray(3, numbers); // [2, 1, 0]
`}</Code>
    </Slide>
    <Slide name="map">
      <H1>Map</H1>
      <PresaSlogan>
        Map - применяет колбек ко всем элементам коллекции и возвращает новую
        коллекцию
      </PresaSlogan>
      <p>Декларативно</p>
      <Code>{`
const people = [{name: "Ivan", age: 25},
               {name: "Oleg", age: 50}]
const makeSentence = (person) => \`$\{person.name\} 
is $\{person.age\} years old\`;
const peopleSentences = (people) => people.map(makeSentence);
peopleSentences(people); //Ivan is 25 years old
`}</Code>
    </Slide>
    <Slide name="Reduce">
      <H1>Reduce</H1>
      <PresaSlogan>
        Reduce - возвращает коллекцию из скомбинерованных значений
      </PresaSlogan>
      <Code>{`let shoppingCart = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 }
];
const sumAmount = (currentTotalAmount, order) => currentTotalAmount 
+ order.amount;
const getTotalAmount = (shoppingCart) => 
shoppingCart.reduce(sumAmount, 0);
getTotalAmount(shoppingCart); // 120
  `}</Code>
    </Slide>
    <Slide
      name="The end"
      layout={children => (
        <SidebarLayout
          src={require('./images/func.jpeg')}
          proportion="9/9"
          children={children}
        />
      )}
      centered
    >
      <H1>Thanks!</H1>

      <Footnote>
        Powered by <a href="https://github.com/molefrog/presa">Presa</a>
      </Footnote>
    </Slide>
  </Presentation>
)
const NumberedNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  font-size: 26px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  color: ${props => props.color};
  border: 3px solid ${props => props.color};
  text-shadow: none;
`

const NumberedCont = styled.div`
  display: flex;
  flex-flow: column;
  align-items: ${props => (props.centered ? 'center' : 'flex-start')};
  text-align: ${props => (props.centered ? 'center' : 'left')};

  padding-bottom: 100px;

  ${props =>
    props.inverse &&
    `
    color: white;
    text-shadow: 1px 2px rgba(0,0,0,0.6);`};
`

const Numbered = props => (
  <NumberedCont centered={props.centered} inverse={props.inverse}>
    <NumberedNumber color={props.inverse ? 'white' : primaryColor}>
      {props.number}
    </NumberedNumber>
    {props.children}
  </NumberedCont>
)

const Footnote = styled.div`
  color: #999;
  font-size: 18px;
`

const PresaTitle = styled(H1)`
  color: ${primaryColor};
`

const PresaSlogan = styled(H3)`
  color: #444;
  margin-bottom: 40px;
`
const Image = styled.img`
  max-width: ${props => props.width}px;
  float: right;
  margin-top: -150;
  margin-right: -100px;
`
const StarOnGithub = styled.div`
  margin-top: 20px;
  margin-bottom: 90px;
`

const Description = styled.p`
  margin: 40px 0;
  text-align: left;
  line-height: 1.5;
`

const InlineCode = styled.code`
  letter-spacing: -0.5px;
  background: rgba(60, 89, 255, 0.07);
  color: ${primaryColor};
  padding: 3px 8px;
  border-radius: 3px;
`

const PresaIcon = styled(Presa)`
  display: inline-block;
  margin-right: 14px;
  width: 40px;
  height: 40px;
`

// to prevent additional scrollbars
injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`

const rerenderApp = () => {
  const container = document.getElementById('container')

  // clean up and render
  ReactDOM.unmountComponentAtNode(container)
  ReactDOM.render(<PitchDeck />, container)
}

if (module.hot) {
  module.hot.accept(rerenderApp)
}

document.addEventListener('DOMContentLoaded', () => {
  rerenderApp()
})
