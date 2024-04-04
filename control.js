//Question 1
function multiply(){
    const arrayOfNumbers=[2,5,7,9,10,11,12]
    const x=arrayOfNumbers.slice(0,4).map(y=>y*y);
        const z=arrayOfNumbers.slice(-2).map(w=>w+10);
        const d=arrayOfNumbers.slice(4,-2);
        const merged = [ ...x, ...d, ...z];
        console.log(merged)
        return merged 
        
}

multiply()
//Question 2
function takeArray(){
    let arrNum=[1,2,3,4,5,6,7,8,9];
    
    while(arrNum.length=[4]){
        console.log(arrNum)
    
            break;
        }
    }

takeArray()
//Question 3
function contStatement(){
    let fruits=["apple","plum","banana","strawberries","kiwi"]
    for(i=0;i<fruits.length;i++){
        if(i==2)
        continue;
        console.log(fruits[i])
    }
   
}
contStatement()
//Question 4
function acceptArr(){
    const arr=["Val","Eve","Jane","Erick"]
    arr.forEach((x)=>{
        console.log(arr)
    })
}
contStatement()
//Question 5
function takeString(){
    let a="Patrick"
}