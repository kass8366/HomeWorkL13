// Задача №1


function WovelsChecker(MyString) {
    let WovelCounter = 0
    const wovels = ['a','e','i','o','y','u']
    for (char of MyString.toLowerCase()){
        if(wovels.includes(char)){
            WovelCounter++
        }
    }
    return WovelCounter
}
while(true){   
    let MyString = prompt("Введите строку для подсчета глассных")
    if (MyString.length<=15) {  
        let counter = WovelsChecker(MyString)
        alert (`Количество глассных в строке: ${counter}`)  
    } else {
        alert('Введите строку не более 15 символов')
    }
}


// Задача №2

/*

function AaChecker(MyString) {
    let newString = ''
    const symbol_a = 'a',
          symbol_A = 'A'
    for (char of MyString){
        if(char==symbol_a){
            newString = newString+'#'
        } else if (char==symbol_A){
            newString = newString+'#'
        }
        else{
            newString = newString+char
        }
    }
    return newString
}
while(true){   
    let MyString = prompt('Введите строку для поиска - "A" и "a" ')
    if (MyString.length<=15) {  
        alert (AaChecker(MyString))  
    } else {
        alert('Введите строку не более 15 символов')
    }
}

*/

// 3 задача 

/*

function SpaceChecker(MyString) {
    let newString = ''
    const symbol = ' '
    let firstSymbol = true
    for (char of MyString){
        if (firstSymbol) {
            newString = newString + char.toUpperCase()
            firstSymbol=false
        }
        else if (char==symbol){
            newString = newString + char
            firstSymbol=true
        }
        else {
            newString = newString+char
        }
    }
    return newString
}
while(true){   
    let MyString = prompt('Введите строку')
    if (MyString.length<=15) {  
        alert (SpaceChecker(MyString))  
    } else {
        alert('Введите строку не более 15 символов')
    }
}

*/

// 4 задача

/*

function SumArrElements(array) {
    let sum = 0
    for (i=0; i<array.length; i++) {
        sum = sum + array[i]
    }
    return sum
}

let array = [0,1,2,5,6,7,8,7]
console.log(`Сумма элементов массива ${SumArrElements(array)}`)

*/

// 5 задача


/*

let i = 0
while (i<=20) {
    if(i%2==1) {
        i++
    }
    else {
        console.log(i)
        i++
    }
}

*/

// 6 задача

/*

function lengthArrayElements(array) {
    newArray =[]
    for (i=0; i<array.length; i++) {
        newArray[i]=array[i].length
    }
    return newArray
}

let array = ['bober','enot','cat','dog','kurwa']
console.log(lengthArrayElements(array))

*/

// 7 задача 

/*

function uniqueArrayElements(array) {
    newArray =[]
    let counter = 0
    for (i=0; i<array.length; i++) {
        for(j=0; j<array.length; j++) {
            if(array[i]==array[j] && i!=j) {
                break
            }
            else if (j==array.length-1) {
                newArray.push(array[i])
            }
        }
    }
    return newArray
}

let array = [1,1,5,6,5,7,9,7,7,7,7,4,3]
console.log(uniqueArrayElements(array))

*/