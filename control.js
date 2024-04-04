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
    let i=5
    while(i>5 && i<[4]){
        console.log("This is  not index four")
        if (i=[4]){
            console.log("This is index four")
            break;
        }
    }
}
takeArray()