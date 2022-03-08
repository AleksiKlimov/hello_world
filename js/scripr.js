//ТОЧКА С ЗАПЯТОЙ

//console.log('Учим JS')
//циклы
/*let num = 0;
for (; num <5; num++) {
  if (num == 2) continue
    console.log(num)
}


let num1 = 0;
for (; num1 <5; num1++) {

    console.log(num1)
}

let num2 = 0;
for (; num2 <5; num2++) {
  if (num2 == 2) break
    console.log(num2)
}


firstFor: for (let num4 = 0; num4 < 2; num4++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            break firstFor
        }
        console.log(size)
    }
}*/
/*for (let A1 = 0; A1 <6; A1++) {
    console.log(A1)
}
let A2 = 0
while (A2 < 6) {
    console.log(A2)

A2++}*/
/*let num = 8;
while (num) {
    console.log(num);
    num--
}*/
/*let num = 0;
while(num < 3) {
    console.log(`Число: ${num}`)
    num++
} */
/*firstFor: for (let num = 0; num<2; num++) {
    for (let size = 0; size<3; size++) {
       if (size == 2) {
            break firstFor }
        console.log(size)
        console.log(num)
    }
}*/
//функции
//локальная переменная
/*function showMessage() {
    let message = "Сообщение"
    console.log(message)
}
*/
//showMessage()
//внешняя переменная
/*let message;
    function showMessage() {
        message="Сообщение"
    }
    showMessage()
    function getSumm(numOne, numTwo) {
        let numSumm = calcSumm(numOne, numTwo)

        console.log(numSumm)
    }
        function calcSumm(numOne, numTwo) {
            return numOne + numTwo
        }
     getSumm(5, 5)

     function calcSumm(numOne, numTwo) {
         let result = 12

        for(let i = 0; i < numTwo; i++) {
            result *= numOne
        }
            return result
    }
            console.log(calcSumm(5, 2))

            function calcSumm(numOne, numTwo) {
                if(numTwo === 1) {
                    return numOne
                } else {
                    return numOne * calcSumm(numOne, numTwo - 1)
                }

            }
            console.log(calcSumm(2, 3))
             let showMessage = function() {
                 console.log('HELLO')
             }
             showMessage()

             function getSumm() {
                 let summ = 1 + 2
                console.log(summ)
                }

             let varSumm = getSumm

             getSumm()
             varSumm()*/
             //объявление функции function Declaration
             /*getSumm()

             function getSumm() {
                 let summ = 1 + 2
                console.log(summ)
             }
             getSumm()

                //Функциональное выражение function expression

                let showMessage = function() {
                    console.log('HELLO')
                }
                showMessage()*/
                //'use strick'
                /*if(2 > 1) {
                    function getSumm() {
                        let numSumm = 1 + 2

                       console.log('numSumm')
                }}

                getSumm()*/

                /*let getSumm
                    if (2 > 1) {
                getSumm = function() {
                    let numm = 1 + 2

               console.log(numm)
                }

            }
             getSumm()*/
            //  let getMessage = (text, name) => text+', '+name+'!'
            //  console.log(getMessage('Hello' , 'Vasya'))
            //  let getMessage1 = (text1, name1) => text1+', '+name1+'!'
            //  console.log(getMessage1('Hi', 'Vasya'))
            // let getMessage = (text, name) => {
            //     let message = text+', '+name+'!'
            //     return message
            // }
            // console.log(getMessage('Hello', 'Victoria'))
            // function showMessage(text, name) {
            //     console.log(`${text}, ${name}`)
            // }
            // setTimeout(showMessage, 3000, 'Hello', 'Vasilii')

            // function showAlarm(munits, seconds) {
            //     console.log(`${seconds}, ${munits}`)
            // }
            // setTimeout(showAlarm, 2000, '11', '10')
            // function showMessage() {
            //     console.log('Study')
            //     console.log('JS')
            // }
            // showMessage()
            // let A1 = 0
            // while (A1 < 5) {
            //     console.log(A1)
            //     A1++
            // }
            // let A2 = 5;
            // while(A2 > 0) {
            //     console.log(A2)
            //     A2--
            // }
            // let firstCikl = 0
            // do {
            //     console.log(firstCikl)
            //     firstCikl++
            // } while(firstCikl < 5)

            // let num = 0;
            // do {
            //     console.log(num)
            //     num++
            // } while( num < 0)

            // for(let num = 0; num < 5; num++) {
            //     console.log(num)
            // }
            // function calcSumm(numOne, numTwo) {
            //     console.log(`Переменная numOne ${numOne}`);
            //     console.log(`Переменная numTwo ${numTwo}`);

            //     let numSumm = numOne + numTwo;

            //     console.log(`Сумма ${numSumm}`);

            // }
            // calcSumm(23, 30)

            // for (let num = 0; num < 5; num++) {

            //     console.log(num)

            // }
            // for(let num1 = 15; num1 > 0; num1--) {
            //     console.log(num1)
            // }

            // let A1 = 0
            // while  (A1 < 5) {

            // console.log(A1)
            // A1++}

            // let A1 = 15
            // if (A1 >= 14) {
            //     console.log(`Вовка писька немытая`)
            // } else  {
            //     console.log(`Алексей тупица`)}

                // let num = 1
                // if (num = 1) {
                //     for(let A1 = 0; A1 < 5; A1++)
                //     console.log(A1)

                // } else {
                //     console.log(`Ничего не получилось`)
                // }

                // let A2 ='Hello '
                // let A1 =(5 > 1)? "Vasya": "Olya!";
                // A2 += A1
                // console.log(A2)


                // let A2 = 'Hello ';
                // let A1;
                // if (4 >1) {
                //     A1 = "Vasya!";
                // }  else {
                //     A1 = "Olya"
                // }
                // A2 += A1
                // console.log(A2);
                // let A3 = "suck my "
                // let A2 ="Hello ";
                // let A1 = 5 > 10? "Vasya ": 5 > 30? "Vika ":
                // 51 == 051? "Olya ": "Anzhelika "
                // let A4 = 14 >= 10? "Dick? ": "Член";
                // A2+=(A1 + A3 + A4)


                // console.log(A2)

               //Функция коллбэк

                // function A1(numOne, numTwo, more, less) {
                //     let A2 = numOne + numTwo;
                //     if (A2 > 015) {
                //        more();
                //  } else {
                //     less();
                //  }
                // }
                // function showMoreMessage() {
                //     console.log('Больше сообщений')
                //     }
                // function showLessMessage() {
                //     console.log('Меньше сообщений')
                // }


                // A1(004, 015, showMoreMessage, showLessMessage)
                //
                //  function calcSumm1(numOne, numTwo) {
                //      let numSumm1 = numOne + numTwo

                //  }
                //  let numSumm1 =  calcSumm1(1, 2)
                //   console.log(`сумма ${numSumm1}`)





                //  function calcSumm(numOne, numTwo) {
                //     let numSumm = numOne + numTwo

                //     return numSumm
                //  }

                //  calcSumm(1, 2)
                // let endSumm = calcSumm(1, 2)
                //  console.log(`сумма ${endSumm}`)


                // function oneSumm(numOne, numTwo) {
                //     let threeSumm = twoSumm(numOne, numTwo)

                // console.log(threeSumm)
                // }
                // function twoSumm(numOne, numTwo) {
                //     return numOne + numTwo

                // }
                // oneSumm(22, 33)

                // function A1(numOne, numTwo) {
                // let A3 = A2(numOne, numTwo)
                // console.log(A3)

                // }
                // function A2(numOne, numTwo) {
                //     return numOne + numTwo
                // }
                // A1(12267, 10)

              /*  let A1
                let A2
                A1 = 'Фтор' > 'Ртор'? "Hello" : "Привет"

                 A2 = 5 <1? "Piter" : "сэм":
                5 != 1? "how" : "как":
                5 < 1? "dela" : "дела";

               A1 += A2
                console.log(A1)
            */

                // function getSumm(numOne, numTwo) {
                //     let oneSumm = twoSumm(numOne, numTwo)
                //     console.log(oneSumm)
                // }
                // function twoSumm(numOne, numTwo) {
                //     return numOne + numTwo
                // }
                //     getSumm(1, 3)


        // function oneSumm(numOne, numTwo) {
        //     let result = 1
        //     for(let i = 0; i < numTwo  ;i++) {
        //         result *= numOne
        //     }
        //         return result

        // }
        // console.log(oneSumm(2, 3))

        // function calcSumm(numOne, numTwo) {
        //     if(numTwo ===1) {
        //         return numOne
        //     } else {
        //         return numOne  * calcSumm(numOne, numTwo - 1)
        //     }
        // }
        // console.log(calcSumm(2, 3))
       // let showMessage = (text = 'Hello', name = 'Vasya') => text+','+name+'!'
        //    console.log(showMessage('Привет', 'пидаар'))

            // let showMessage = (text, name) => {
            //     let textName = text+' ,'+name+'!'
            //     return textName

            // }
            // console.log(showMessage('Hello', 'Vasilii'))

            // let showMessage = (text, name) => {
            //     console.log(`${text}, ${name}`)
            // }
            // setTimeout(showMessage, 3000, 'HELLO', 'vfsilii')
            //     let showDick = (fuck, suck) => {
            //         console.log(`${suck}, ${fuck}`)
            //     return
            //     }
            //     setInterval(showDick, 500, 'boobs', 'vaginas')
            // let showMessage = (text, name) => {
            //     console.log(`${text}, ${name}`)
            //     setTimeout(showMessage, 3000, text, name)
            // }
            //     setInterval(showMessage, 30, 'Hello', 'vadim')

            //  function calcNum(num) {
            //     console.log(num)
            //     if(num < 5) {
            //     setTimeout(calcNum, 1000, ++num)
            //     }
            // }
            // setTimeout(calcNum, 1000, 1)

            // function calcNum(num) {
            //     console.log(num)

            //     setTimeout(calcNum, 1000, ++num)

            // }
            // setTimeout(calcNum, 1000, 1)


            // function showNumber(num) {
            //     console.log(num)
            //     let numOne = setTimeout(showNumber, 1, ++num)
            //     if(num === 60) {
            //         clearTimeout(numOne)
            //     }

            // }
            // setTimeout(showNumber, 10, 1)


            // function  showNumber(num) {
            //    console.log(num)
            //     let numOne = setTimeout(showNumber, 1000, ++num)
            //     if(num === 6) {
            //         clearTimeout(numOne)

            // function showNumber(num) {
            //     console.log(num)
            //     let numOne = setTimeout(showNumber, 1000, ++num)
            //     if (num === 6) {
            //         clearTimeout(numOne)
            //     }
            // }
            // setTimeout(showNumber, 1000, 1)
            //     }

            // }
            // setTimeout(showNumber, 1000, 1)

            // let result = 0;
            // function showMessage(num) {
            //     result *= num
            //     console.log(result)
            //     if(result === 5) {
            //         clearInterval(ny)
            //     }
            // }
            // let ny = setInterval(showMessage, 1000, 1)
            // function showNumber(num) {
            //     console.log(num)
            //     let numOne = setTimeout(showNumber, 1000, ++num)
            //     if(num === 6) {
            //         clearTimeout(numOne)

            //     }
            //      }
            //      setTimeout(showNumber, 1000, 1)



            // function show(num) {
            //     console.log(num)
            //     let numOne = setTimeout(show, 100, ++num)
            //     if (num === 60) {
            //         clearTimeout(numOne)
            //     }
            // }
            // setTimeout(show, 100, 1)
            // let result = 0;
            // function showNumber(num) {

            //     result += num
            //     console.log(result)
            //     if (result === 6) {
            //         clearInterval(numTwo)
            //     }
            //  }
            // let numTwo = setInterval(showNumber, 1000, 1)
            // function showMessage(text, name) {
            //     return(`${text}, ${name}`)
            // }
            // function showParms(message) {
            //     console.log(message)
            // }
            // function showName(text, name) {
            //     showParms(showMessage(text, name))
            // }
            // showName('Helllo', 'Freelancerrrr')
        //     function showMessage() {
        //         console.log('Kolya')
        //     }
        //    showMessage
        //     console.log('Vasya')





        // let show = function (  ) {
        //     console.log('HelloRussia')
        // }
        // show()




        // shew()

        // function shew() {
        //     console.log('huillo')
        // }
        // shew()
        'use strict'
        // if (2 > 1) {
        //    function showMessage() {
        //        console.log('Message')
        //    }
        // }
        // showMessage()

        // let num
        // if (2 > 1) {

        //    num = function () {


        //     console.log('Message')
        //     }
        // }
        // num()
        // let userInfo = new Object ()// конструктор объекта



        // let userUserInfo = { // дитерал объекта


        // let userInfo = {
        //     name: "Alexey",
        //     age: 30,
        //     "size dick": 20,
        // }
        // console.log(userInfo)
        // console.log(userInfo["size dick"])
        // console.log(userInfo.age);
        // let info = "likes";
        // let userInfo = {
        //     name: "Alexey",
        //     age: 30,
        //     [info + " javascript"]: true,

        // }
        // console.log(userInfo["likes javascript"]);

       //если ключ свойства состоит из двух слов
        // let info = "welcom";
        // let userInfo = {
        //     name: "vasilii",
        //     age: 20,
        //     [ info]: true,
        // }
        // console.log(userInfo[info]);

        //символ
        // let id = Symbol('id');
        // let userName = {
        //     name: "Alexey",
        //     age: 30,
        //     [id]: "Некое значение",
        // }
        // console.log(userName);

       //вложенность
        // let userInfo = {
        //     name: "Alexey",
        //     age: 30,
        //     addres: {
        //         city: "Uzhhorod",
        //         street: "Lukili"
        //     }
        // }
        // console.log(userInfo);
        // console.log(userInfo.addres);
        // console.log(userInfo.addres.city);
        // function makeUserInfo(name, age) {
        //     return {
        //         name: name,
        //         age: age,

        //     }
        // }
        // let user = makeUserInfo("Vasilii", 30);
        // console.log(user);


        //добавление свойства
        // let user = {
        //     name: "Alexey"
        // }
        // console.log(user);
        // user.age = 30,
        // console.log(user);
        // user['likes javascript'] = true,
        // console.log(user);
        // user.addres = {
        //     city: "Uzhhorod",
        //     street: "Freedom",
        // }
        //     console.log(user);
        //     console.log(user.addres);

        //     console.log(user[addres]);
        //удаление свойства

            // let user = {
            //     name: "Vasilii",
            //     age: 30,
            // ['likes javascript']: true,
            // }
            // console.log(user);

            // delete user.age;
            // console.log(user);

            // delete user['likes javascript']
            // console.log(user);

            // const userInfo = {
            //     name: "Vasilii",
            //     age: 30,
            //     "likes javascript": true
            // }
            // console.log(userInfo);
            // userInfo.addres = {
            //     city: "tagan",
            //     street: "Freedom"
            // }
            // console.log(userInfo);
            // console.log(userInfo.addres);

            // delete userInfo['likes javascript']
            // console.log(userInfo);

            // let userInfo = {
            //     name: "Vasilii",
            //     age: 30,
            // }
            // console.log(userInfo);
            // let user = userInfo;

            // console.log(user);

            // delete user.name;

            // console.log(user);

            // user.sizeDick = "Max";

            // console.log(user);
            // userInfo.age = 20;
            // console.log(userInfo);

            // let userUserInfo = {
            //     name: "Vasilii",
            //     age: 30,
            // }
            // let user = Object.assign({}, userUserInfo);

            // user.age = 20;
            // console.log(userUserInfo);
            // console.log(user);


            // let user = {
            //     name: "Vasilii",
            //     age: 30
            // }
            // console.log(user);
            // Object.assign(user,{['likes javascript']: true, city: "Tagan"});
            // console.log(user);


            //Проверка существования свойства
            // let user = {
            //     name: "Vasilii",
            //     age: 30,
            //     agee: "fifty",
            // }

            // if (user.agee) {
            //     console.log(user.age);
            // } else  {
            //     console.log(user.agee);
            // }


            //роверка ссуществования свойства
           //опциональная цепочка
            // let user = {
            //     name: "Vasilii",
            //     age: 30,
            //     addres: {
            //         city: "Tagan",
            //         street: "1line"
            //     }
            // }
            // console.log(user);
            // console.log(user?.addres?.city);
            // console.log(user?.addres?.login);

    //пример оператора  in

    //         let user ={
    //     name: "Vasilii",
    //     age: 30,
    //     addres: {
    //         city: "Tagan"
    //     }
    // }
    // if ("name" in user) {
    //     console.log(user.name);
    // } else {
    //     console.log(user.addres);
    // }
    //проверка наличия свойства с undefined
// let user = {
//     name: undefined,
//     age: 30

// }
// if (user.name) {
//     console.log(user.name);
// }
// if ("name" in user) {
//     console.log(user.name);
// }

        //     //цикл for in
        // let user = {
        //     name: "Vasili",
        //     age: 29,
        //     addres : {
        //         city: "Tagan",
        //         street: "1line"
        //     }
        // }
        // for (let key in user) {
        //     console.log(key);
        //     console.log(user[key]);
        // }
        // for (let key in user.addres) {
        //     console.log(key);
        //     console.log(user.addres[key]);
        // }
         //function declaration
        // function sims(a, b) {
            //     sims = a + b;
            //     console.log(sims);
            // }
            // sims(10, 11)
           //function expression
            // let a1 = function a1(name, age) {

            //    console.log();
            // }
           // let show = (параметр) =>  тело функции

          //методы объекта
        //    let user = {
        //        name: "vasilii",
        //        age: 30,
        //        addres: {
        //            city: "Tagan",
        //            street: "1line",
        //        },

            //showUse: function () {
             //   console.log(`${user.name} имя, ${user.age} лет, Адрес:${user.addres.city} город, ${user.addres.street} улица`);
            //  },


        //     showUs() {
        //      console.log(`${user.name} имя, ${user.age} лет, Адрес:${user.addres.city}город, ${user.addres.street}улица`);
        //    }
        // }
        // user.showUs()

        // let user = {
        //     name: "Vassssssssssssya",
        //     age: 20,
        //     high: 159,
        //     addres: {
        //         city: "tagan",
        //         street: "freedom",
        //     }
        // }
        // if ("high" in user) {
        //     console.log(user.high);
        // }
        // for (let key in user) {
        //     console.log(key);
        //     console.log(user[key]);
        // }
        // for (let key in user.addres) {
        //     console.log(key);
        //     console.log(user.addres[key]);
        // }

    //     let user = {
    //         name: "Vasilii",
    //         age: 29,
    //         high: 149,
    //         addres: {
    //             city: "tagan",
    //             street: "freedom",
    //         },

    //     showInfo() {
    //         console.log(`${user.name} имя, ${user.age} возраст, ${user.addres.city} город проживания, ${user.addres.street} улица`);
    //     }
    //     }
    // user.showInfo()
    //     let user = {
    //         name: "Vasil",
    //         age: 29,
    //         high: 159,
    //         addres: {
    //             city: "Tagan",
    //             street: "freedom",
    //         },
    //     //     showInfo() {
    //     //         function show() {
    //     //         console.log(`${this.name} имя, ${this.high} рост, город проживания ${this.addres.street}`);
    //     //         }
    //     //    show()
    //     //     }
    //                                             //это все ошибка
    //     // }
    //     // user.showInfo()
    //     showInfo() {
    //         let show = () => console.log(`${this.name} имя, ${this.high} рост, город проживания ${this.addres.city}`);
    //         show()
    //     }

    // }
    // user.showInfo()
// function UserName() {
//     //this = {} //создается пустой объект (неявно)
//     this.name = name;
//     this.age = 29;
//     //return this возвращается объект неявно
// }
// console.log(new UserName('Vasil'));
// console.log(new UserName('Elena'));
// function User() {
//     this.name = name;
//     this.age = 28
// }
// console.log(new User ('Vas'));
// console.log(new User ('Lenas'));
            // let user = {
            //     name: "Vasya",
            //     age: 30,
            //     "58": 'значение свойства'
            // }
            // let use = user
            // use.age = 45
            // console.log(use.age);
            // let user = {
            //     name: "Vasya",
            //     age: 45,
            //     show() {
            //         console.log(`${this.name}, ${this.age}`);
            //     }
            // }
            // let use = user;
            // user = null
            // use.show()
            // let user = {
            //     name: "vasya",
            //     age: 30
            // }
            // for (const key in user) {
            //     const use = user[key];
            //     console.log(use);
            // }
            // let use = {
            //     name: "Vasya",
            //     age: 30,
            //     addres: {
            //         city: "Tagan"
            //     }
            // }
            // for (const key in use.addres) {

            //     console.log(use.addres[key]);
            // }
            // const user = {

            // }
            // user.name = "Vasya";
            // user.age = 29;
            // console.log(user);
            // user.name = "Lena";
            // console.log(user);
            // delete user.name;
            // console.log(user);


            // let num = 584;
            // let numOne = 5.84;
            // let numTwo = Math.floor(2.2, 5.8, -2.2);
            // let numThree = Math.ceil(2.2, 5.8, -2.2);
            // let numFour = Math.round(2.2)
            // console.log(num, numOne, numTwo, numThree);
            // let num = Math.random(100)
            // console.log(num);
            // let num2 = Math.floor(num * 100) / 100
            // console.log(num2);
            // let num = 5.845;
            // console.log(num.toFixed(2));
            // console.log(+num.toFixed(2));
            // console.log(Number(num.toFixed(2)));


            // let num = 0.1 + 0.2 ;
            // let num1 = 0.1 + 0.2 == 0.3;
            // let num2 = 0.1 + 0.2 === 0.3;
            // let num3 = 0.1 + 0.2 != 0.3;
            // console.log(num, num1, num2, num3);
            // console.log(Number(25 + "Hello!"));
            // console.log(isNaN(25 + "Hello!"))
            // if (NaN !== 25 + "Hello!") {
            //     console.log('I don\'t NaN');
            // }
            // console.log(NaN === NaN);
            // console.log(isFinite("25"));
            // console.log(isFinite(25));
            // console.log(isFinite("Hello!"));
            // console.log(isFinite("10 / 0"))
            // let numOne = +"140";
            // console.log(numOne);
            // console.log(typeof numOne);

            // let numTwo = +"140px";
            // console.log(numTwo);
            // console.log(typeof numTwo);

            // let numOne = parseInt("150.58px");
            // console.log(numOne);
            // console.log(typeof numOne);
            // let numTwo = parseFloat("150.58px");
            // console.log(numTwo);
            // console.log(typeof numTwo);
            // let numOne = parseInt("a150.58px");
            // console.log(numOne);
            // console.log(typeof numOne);
            // console.log(parseInt("0xff", 16));
            // console.log(parseInt("ff", 16));
            // console.log(parseInt("fb", 16));
            // console.log(parseInt("0x1f", 16));
            // console.log(parseInt("0x4f", 16));
            // console.log(parseInt("0xef", 16));
            // console.log(parseInt("249", 2));
            // console.log(parseInt("120", 2));
            // console.log(parseInt("2", 2));
            // console.log(parseInt("24932", 8));
            // console.log(parseInt("249111", 8));
            // console.log(parseInt("1249", 2));

            // console.log(Math.random());
            // console.log(Math.random());
            // console.log(Math.random());
            // console.log(Math.max(40, 40, 50, 0.0005));
            // console.log(Math.min(0.00005, 0.55, 0,));
            // console.log(Math.abs(-0.0505050));
            // console.log(Math.pow(5, 2));
            // console.log(Math.pow(5, 100));

            // let numOne = 1.005 + Number.EPSILON
            // let numTwo = Math.round(numOne * 100) / 100;
            // console.log(numTwo);

            // let value = parseFloat("135.58px");
            // console.log(value);
            // let numOne = 25 + "Alexey";
            // if (numOne !== NaN) {
            //     console.log('i dont NaN');
            // }
            // console.log(Math.max(10, 58, 39, -50, 0));

            // let numOne = Math.floor(58.589);
            // console.log(numOne);

            // let textHi = "Hello MF!";
            // let textAll = `${textHi} imString`;
            // console.log(textAll);\


            // function summAll(a,b) {
            //     return a+ b
            // }
            // console.log(`summ: ${summAll(4, 7)}`)

            // let text = "Hello!";
            // let textOne = `${text} i'mstring`;
            // console.log(textOne);


            // function numOne(a, b) {
            //     return a + b;
            // }
            // console.log(`summ: ${numOne(50, -12)}`);

            // let text = `hello,
            // im from
            // Russia
            // Federation
            // `
            // console.log(text);

            // let num = 158;
            // console.log(num);
            // console.log(typeof num);
            // let numOne = "158";
            // console.log(numOne);
            // console.log(typeof numOne);
            // console.log(num + numOne);

            // let text = `Hi
            // my name
            // is
            // Aleksey
            // `;
            // console.log(text);
            // let textOne = "Hi\n my names \n Alexey";


            //  console.log(textOne);
            // console.log(`${text} ${textOne}`);


            // let text = "Hi \n\t\tmy name\n\t is \t\tAlexey"
            // console.log(text);


            // let text = "Hi my name is Alexey, i\\ from Taganrog";
            // console.log(text);
            // Math.gcd = function () {
            //     if ( arguments.length == 2) {
            //         if (arguments[1] == 0)
            //         return arguments[0];
            //         else
            //         return Math.gcd (arguments[1], arguments[0] % arguments[1]);
            //          }  else if (arguments.length > 2) {

            //          var result = Math.gcd (arguments[0], arguments[1])
            //          for (var i = 2; i < arguments.length; i++)
            //          result = Math.gcd(result, arguments[i]);
            //          return result;
            //          }
            //         }
            //         console.log(Math.gcd(20, 30, 15, 70, 40,));//5

            // let text = "Hi my name is \'Alexey\"";
            // console.log(text);

            // let text = "Hi my name is alexey!\"\'\'\'\'\u0x10COC \u{1F62D}"
            // console.log(text);


            // let text = "HELLO my dear friends";
            // console.log(text.length);

            // let text = "Hello my friend";
            // let firstText = text[0];
            // let lasttText = text[text.length -1];
            // console.log(firstText);
            // console.log(lasttText);

            // let text = "Hello my friend";
            // let text1 = text[2];
            // let text2 = text[text.length -1];
            // console.log(text1);
            // console.log(text2);
            // for ( const one of text) {
            //     console.log(one);
            // }
            // let text = "Hello";
            // console.log(text.toUpperCase());
            // console.log(text.toLowerCase());

            // let text = "Hellomy";
            // console.log(text.indexOf("llo"));
            // console.log(text.indexOf("om", 7));

            // let text = "Hellomy";
            // console.log(text.includes("omy"));
            // console.log(text.includes("omy", 2));
            // console.log(text.startsWith("Hell"));
            // console.log(text.startsWith("Hell"));
            // console.log(text.startsWith("hell"));
            // console.log(text.endsWith("omy"));
            // console.log(text.endsWith("om"));

            // let text = "Hello!";
            // let searchTest = "hE";
            // console.log(text.toLowerCase().includes(searchTest.toLowerCase()));


            // let text = "Hello";
            // console.log(text.slice(1, 2));
            // console.log(text.slice(-4, -3));
            // console.log(text.slice(1));

            // let text = "Freelance";
            // let textOne = `Hello im ${text}`;
            // console.log(textOne);

            // let text = "Freelance";
            // let textOne = text[6];
            // console.log(textOne);

            // let text = 123 + "456";
            // console.log(text);

            // let text = "Freelancer";
            // console.log(text.toUpperCase());

            // let text = "Freelancer";
            // console.log(text.slice(4, 7));

            // let text = "Freelancer";
            // console.log(text.includes("lan", 4));

            // let arrOne = ['vasy', 'lera', 'irina',]
            // console.log(arrOne[1],[2],[3],[6]);
            // console.log(arrOne[6]);
            // console.log(arrOne[3]);
            // console.log(arrOne[2]);

        //     let arrOne = [
        //         "kolya",
        //         {
        //             type: "js",
        //             language: "english",
        //         },
        //         true,
        //         function getName() {
        //             console.log("hello my name Alexey");
        //         }

        //     ]
        //     // console.log(`${arrOne[0]} number 1`)
        //     // console.log(`number 2: ${arrOne[1]}`);
        //     // console.log(`number 3: ${arrOne[2]}`);
        //     // console.log(`number 4: ${arrOne[3]}`);
        //      console.log(`all Masive: ${arrOne}`);
        //    console.log(arrOne);
        //      arrOne[3]()
            // let arrOne = [
            //     [1, 2, 3,],
            //     [4, 5, 6,],
            //     [7, 8, 9,],
            // ];
            // console.log(arrOne[2][2]);
            // console.log(arrOne);

            // let arrOne = ['vasya', 'irina', 'elena','masha',];
            // console.log(arrOne);
            // let arr = arrOne;
            // arr.length = [30];
            // console.log(arr);
            // arr[20],[21], [23], [24] = [11, 12, 13, 14,];
            // console.log(arr);
            // let arr = [1, 2, 3, 4,];
            // arr.push(4, 6, 8,);
            // console.log(arr);

            // let arr = [1, 2, 3, 4, 'Vasya'];

            // arr.push(13, 'ivan');
            // console.log(arr);

            // arr.shift();
            // console.log(arr);

            // arr.pop();
            // console.log(arr);

            // arr.unshift(12, 'ivar');
            // console.log(arr);

        //     let arrOne = ['Elena', 'Ivan', 'Serega', 'Alex'];
        //     //arrOne.splice(0, 3);

        //     // let remove = arrOne.splice(2, 1);


        //   //  arrOne.splice(1, 1, 'Igor')

        //   //arrOne.splice(3, 3, 'Art', 'karl')
        //   //console.log(arrOne);
        //  // arrOne.splice(2, 1, 'Art', 'karl')
        //  arrOne.splice(-1, 4)
        //  console.log(arrOne);

        //     // console.log(remove);

        // let arrOne = ['Ivan', 'Ishtvan', 'Olya',];
        // arrOne.splice(1, 1);
        // console.log(arrOne);
        // let arrOne1 = ['Ivan', 'Ishtvan', 'Olya',];
        // arrOne1.splice(0, 2);
        // console.log(arrOne1);

        // let arrOne2 = ['Ivan', 'Ishtvan', 'Olya',];
        // arrOne2.splice(1, 2);
        // console.log(arrOne2);

        // let arrOne3 = ['Ivan', 'Ishtvan', 'Olya',];
        // arrOne3.splice(2, 1);
        // console.log(arrOne3);



        // let arrOne3 = ['Ivan', 'Ishtvan', 'Olya',];
        // let arrOne = arrOne3.splice(1, 1)
        // console.log(arrOne);

        // let arrOne3 = ['Ivan', 'Ishtvan', 'Olya',];
        // arrOne3.splice(0, 1, 'Kolya')
        // console.log(arrOne3);

        // let arrOne4 = ['Ivan', 'Ishtvan', 'Olya',];
        // arrOne4.splice(2, 1, 'Kolya')
        // console.log(arrOne4);

        // let arrOne5 = ['Ivan', 'Ishtvan', 'Olya',];
        // arrOne5.splice(1, 1, 'Kolya')
        // console.log(arrOne5);


        // let arrOne5 = ['Ivan', 'Ishtvan', 'Olya',];
        // arrOne5.splice(0, 0, 'Masha', 'Igor',);
        //     console.log(arrOne5);

        //     let arrOne6 = ['Ivan', 'Ishtvan', 'Olya',];
        //     arrOne6.splice(1, 0, 'Masha', 'Igor',);
        //         console.log(arrOne6);

        //         let arrOne1 = ['Ivan', 'Ishtvan', 'Olya',];
        //         arrOne1.splice(2, 0, 'Masha', 'Igor',);
        //             console.log(arrOne1);

                    // let arrOne2 = ['Ivan', 'Ishtvan', 'Olya',];
                    // arrOne2.splice(-1, 1);
                    //     console.log(arrOne2);

                    //     let arrOne1 = ['Ivan', 'Ishtvan', 'Olya',];
                    //     arrOne1.splice(1, 1);
                    //         console.log(arrOne1);

                    //         let arrOne3 = ['Ivan', 'Ishtvan', 'Olya',];
                    //         arrOne3.splice(-2, 1);
    //                 //             console.log(arrOne3);
    //  let arrOne5 = ['Ivan', 'Ishtvan', 'Olya',]
    //  let arrOne = arrOne5.slice(1, 2);
    // console.log(arrOne);

    //  let arrOne1 = ['Ivan', 'Ishtvan', 'Olya',]
    //  let arrOne2 = arrOne1.slice(0, 1);
    // console.log(arrOne2);

//     let arrOne6 = ['Ivan', 'Ishtvan', 'Olya',]
//     let arrOne8 = arrOne6.concat('Petya');
//    console.log(arrOne8);

            // let arr = ['Vanya', 'Ishtvan', 'Olya',];
            // console.log(arr.indexOf('Ishtvan'));
            // console.log(arr.indexOf('Vasya'));
            // console.log(arr.indexOf('Ishtvan', 2));
            // console.log(arr.includes('Ishtvan'));
            // console.log(arr.includes('Vasya'));
            // console.log(arr.includes('Ishtvan', 2));

    // let arrOne = [
    //     {name: 'Vasilii', age: 30},
    //     {name: 'Kolya', age: 18},
    //     {name: 'Olya', age: 'don\'t say'},
    // ]
    //     // let result = arrOne.find(function(item, index, array) {
    //     //     return item.age === 18
    //     // })
    //     let result = arrOne.find(item => item.age === 18);
    //     console.log(result);
    //     let resultOne = arrOne.findIndex(item => item.age >= 18);
    //     console.log(resultOne);

    // let arr = [
    //     {name: 'Vasya', age: 30},
    //     {name: 'Ivan', age: 19},
    //     {name: 'aleks', age: 21},
    //     {name: 'Olya', age: 'don\'t say'},
    //     ]
    //     let arrOne = arr.filter(function(item, index, array) {
    //         return item.age >= 18
    //     })
    //     console.log(arrOne);

    // let arrOne = ['Ivan', 'vanya', 'Olya', 'maks', 'Oleg', 'Maks', 'Vanya', 'ivan', 'oleg'];
    //         console.log(arrOne.sort());

    // console.log('8' >= '22');
    // console.log( 8 > 22);
    // console.log('8' > 22);

//     let arrOne = [8, 22, 1,];
//    console.log(arrOne.sort());

// //     function compareNumeric(a, b) {
// //        console.log(`сравниваем ${a}, & ${b}`);
// //     //     if (a > b) return 1;
// //     //    if (a = b) return 0;
// //     //     if (a < b) return -1;
// //         return a - b
// // }
// //     console.log(arrOne.sort(compareNumeric));
//             console.log(arrOne.sort((a, b)  => a - b));

            // let arrOne = [11, -11, 0, -198, -100.005, -100.05, 2, 1, 23, 43, 33,]
            // console.log(arrOne.sort((a, b) => a - b));

          //  let arrOne = ['Ivan', 'Armen', 'Olya',];
            // let result = arrOne.map(function (item, index, array) {
            //    // return item [0];
            //    // return index [0];
            //     return array [2];
            // })
            // let result = arrOne.map(item => item[0]);
            // console.log(arrOne);
            // console.log(result);

            // let str = 'Ivan,Ishtvan,Olya';
            // let atr = str.split(',');
            // console.log(atr);
            // let arrTwo = str.split(',', 2);
            // console.log(arrTwo);

            // let arr = ['Ivan', 'Oleg', 'Vasilii',];
            // let arrOne = arr.join('; ');
            // console.log(arrOne);
            // let arr = ['Ivan', 'Misha', 'Olya',];
            // console.log(String(arr));

            // let arr = [];
            // let obj = {};
            // if (Array. isArray(obj)) {
            //     console.log(' it\'s array');
            // } else {
            //     console.log('it\'s no array');
            // }
            // let arr = ['Ivan', 'Vasya', 'Ollya',];
            // for (let one of arr) {
            //     console.log(one);

            // }

            // let arr = ['Ivan', 'Vasya', 'Roma',];
            // for (let i = 0; i < arr.length; i++) {

            //     console.log(arr[i]);
            // }

        //     let arr = ['vasya', 'ivan', 'olya',];
        //    // arr.forEach(function (item, index, array) {
        //      //   console.log(`${item} находиться ${index} позиции ${array}`);
                
        //     //})
        //     arr.forEach((item, index, array,) => {
        //         console.log(`${item} from is ${index} in posihion ${array}`);
        //     })

        // let arr = ['Ivan', 'Vasya', 'Oleg',];
        // arr.forEach(show);
        // function show(item) {
        //     console.log(item);
        // }
        // let arr = ['Ivan', 'Vasya', 'Oleg',];
        // arr.forEach(show);
        // function show(item) {
        //     console.log(item);
        // }
            // let arr = [1, 2, 3, 4,];
            // let arrOne = arr.reduce(function (previousValue, item, index, array,) {
            //     return item + previousValue
            // }, 0)
            // console.log(arrOne);
            // let arr = ['Ivan', 'Ira', 'lera',];
            // let arrOne = arr.reduce(function (previousValue, item, index, array) {
            //     console.log(previousValue);
            //     console.log(item);
            //     return `${item} ${previousValue}`
            // }
                
            // )
            // console.log(`users: ${arrOne}`);

            // let arr = ['Ivan', 'Lera', 'Serega'];
            // let arrOne = arr;
            // arrOne.push('Petr');
            // console.log(arr.length);
            // console.log(String(arr));
            // let srt = arr.join(',')
            // console.log(srt);

            // let users = ['Vanya', 'Ishtvan',];
            // users.push('Olya');
            // console.log(users);
            // users[1] = 'Petr';
            // console.log(users);
            // let usersOne = users.splice(0, 1)
            // console.log(usersOne);
            // console.log(users);
            // users.unshift('masha', 'PASHA')
            // console.log(users);

            // let arrOne = ['Ivan', 'Ishtvan', 'Oleg',];
            // let arr = arrOne.splice(2, 1);
            // console.log(arr);
            // console.log(arrOne);

            // let arr = 'Ivan, Oleg, Vasya';
            // let arr1 = arr.split(',');
            // console.log(arr1);
           // e.log(arr1);
            

            
            

            // let arr = [9, 2, 8,];
            // let arrOne = arr.reduce(function(previousValue, item, index, array) {
            //     console.log(previousValue);
            //     console.log(item);
            //     console.log(index);8888888
            //     console.log(array);
            // },0)

            // let wWidth = window.innerWidth;
            // console.log(`ширина окна: ${wWidth}`);

            // console.log(navigator.userAgent);

            // if (navigator.userAgent.includes('Chrome')) {
            //     console.log('it\'s chrome');
            // } else if (navigator.userAgent.includes('Mozila')) {
            //     console.log('it\'s mozila');
            // }
            // console.log(navigator.platform);

            // console.log(location.href//);
            //alert('hello mfka!!!');

            // let result = confirm('do you study webDeveloper');
            // console.log(result);
            // if (result == true) {
            //     console.log('It\'s right');     
            // } else if (result != true) {
            //     console.log('it\'s false'); 
                
            // }

            // const htmlElement = document.documentElement;
            // const headElement = document.head;
            // const bodyElement = document.body;
            // console.log(htmlElement);
            // console.log(headElement);
            // console.log(bodyElement);

            // const bodyElement = document.body;
            // const first = bodyElement.firstChild;
            // const last = bodyElement.lastChild;
            // console.log(first);
            // console.log(last);

            // const body = document.body;
            // const body1 = body.childNodes;
            // console.log(body1);

            // console.log(body.hasChildNodes());

            // let a1 = +210;
            // console.log(a1);

            // let a1 = 'Hello';
            // let a2 = 5;
            // if (a2 > 50) {
            //     console.log('5 bigger 50');
            // } else if (a2 > 30) {
            //     console.log('5 biggest 30');    
            // }   else if (a2 > 40) {
            //     console.log('5 little 40');     
            // } else {
            //     console.log('don\'t make');
            // }
            // let summ = function name(params) {
                
            // }
            // function getSumm() {
            //     let numOne, numTwo
            //     function getNumOne() {
            //         numOne = 1;
            //     }
            //     function getNumTwo() {
            //         numTwo = 2;
            //     }
            //     getNumOne();
            //     getNumTwo();
            //     let numSumm = numOne + numTwo;
            //     console.log(numSumm);
            // }
            // getSumm()

            // let message;
            // function showMessage() {
            //     message = 'showMessagessfucker';
            //     console.log(message);
            // }
            // showMessage()
            //'use strick'
            // function calcSumm(numOne, numTwo, more, less) {
            //     let numSumm = numOne + numTwo;
            //     if (numSumm > 3) {
            //         more ()  ; 
            //     } else { 
            //         less();
            //     }
            // }
            //     function showMoreMessage() {
            //         console.log('moreeeeee');
            //     }
            //     function showLessMessage() {
            //         console.log('lesssMessage');
            //     }
            
            // calcSumm(2, 2, showMoreMessage, showLessMessage);
            // let getMessage = (text, name) => {
            //     let message = text+ ','+name+'!'
            //     return message

            // }
            // console.log(getMessage('hello','Ivan'));

            // const a1 = document.documentElement;
            // const a2 = document.body;
            // const a4 = document.head;
            // console.log(a1);
            // console.log(a2);
            // console.log(a4);

            // const bodyElement = document.body;
            // const  firstChild = bodyElement.firstChild;
            // const lastChild = bodyElement.lastChild;
            // console.log(firstChild);
            // console.log(lastChild);

            // const bodyElement = document.body;
            // const childNodes = bodyElement.childNodes;
            // console.log(childNodes);
            // console.log(bodyElement.hasChildNodes());
            // for (const node of childNodes) {
            //     console.log(node);
            // }

                // let admin;
                // let name = 'John';
                // console.log(admin);
                // console.log(name);
                // admin = name;
                // console.log(admin);
                // console.log(name);
            //     // alert(admin)

            // let planetEarth;
            // let userName;
            // bodyElement = document.body;
            // // let previousSiblingNode = bodyElement.previousElementSibling;
            // // let nextSiblingNode = bodyElement.nextElementSibling;
            // // let parentNode = bodyElement.parentNode;
            // // console.log(previousSiblingNode);
            // // console.log(nextSiblingNode);
            // // console.log(parentNode);
            // const bodyChildren = bodyElement.children;
            // console.log(bodyChildren);
             
            // const bodyElement = document.body;
            // const previousSibling = bodyElement.previousElementSibling;
            // const nextSibling = bodyElement.nextElementSibling;
            // const parentElement = bodyElement.parentElement;
            // console.log(previousSibling);
            // console.log(nextSibling);
            // console.log(parentElement);
            
            //     //селектор класса
            // const elemOne = document.querySelectorAll('.lesson__list');
            // console.log(elemOne);
            // //селектор тега
            // const elemTwo = document.querySelectorAll('li');
            // console.log(elemTwo);
            // //селектор тега и класса 
            // const elemThree = document.querySelectorAll('li.lesson__item-list');
            // console.log(elemThree);
            // //тег первого уровня вложенности
            // const elemFour = document.querySelectorAll('.lesson__list > li');
            // console.log(elemFour);
            // //по нескольким классам
            // const elemFive = document.querySelectorAll('.lesson__list, .lesson__text');
            // console.log(elemFive);
            // //по вложенным классам
            // const elemSix = document.querySelectorAll('.lesson__list .lesson__text');
            // console.log(elemSix);
            // //по  ID
            // const elemSeven = document.querySelectorAll('#listItem');
            // console.log(elemSeven);
            // //по атрибутту
            // const elemEight = document.querySelectorAll('[data-item]');
            // console.log(elemEight);
            // //по атрибуту со значением
            // const elemNine = document.querySelectorAll('[data-item = "85"]');
            // console.log(elemNine);
            // // const elemTwo = document.querySelectorAll
            // // const elemTwo = document.querySelectorAll
            // // const elemTwo = document.querySelectorAll
            // // const elemTwo = document.querySelectorAll
            // // const elemTwo = document.querySelectorAll

            // const elem = document.querySelectorAll('li');
            // console.log(elem.length);
            // // console.log(elem[0]);
            // //     console.log(elem[1]);
            // //         console.log(elem[2]);
            // //             console.log(elem[3]);
            // //                 console.log(elem[4]);
            // //                     console.log(elem[5]);
            // //                         console.log(elem[6]);
            // //                             console.log(elem[7]);
            // //                                 console.log(elem[8]);
            // // for (const item of elem) {
            // //     console.log(item);
            // // }

            // elem.forEach(item => {
            //     console.log(item);
            // });

            // const subList = document.querySelectorAll('.lesson__sub-list');
            // const subItems = subList[0].querySelectorAll('li');
            // console.log(subItems);

            