
    let name='sumon';
    let age='30';
    let hobby='Kite flying';

    //console.log(typeof name);

    let userDetails = {
        name:'sumon',
        age:'30',
        hobby:'Kite flying',
    }

    let friends = ['sumon','nanai','saheb'];


    function getDataResult(call1,call2){
        let sumofdata = call1+call2;
        return sumofdata;
    }
    const data = getDataResult(5,2);
    //console.log(data);


    

 ///////////////////////////////--DO while--//////////////////////////////////////////   
let index = 100;

while(index <=5){
    //console.log('Hi sumon ',index);
    index++;
}

let service = 100;

do {
    //console.log('Hi sonia ',service);
    service++;
}while(service <=5);
//////////////////////////////////--DO while end--/////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////

const objs = {
    name : 'Ariyan',
    age : 20
}
for(let key in objs){
    //console.log(key, objs[key]);
}

let numbers = [1,2,3,4];

for(let index in numbers){
    //console.log(index, numbers[index]);
}

//////////////////////////////////////////////////////////////////////////


//////////////35. Break and continue//////////////////////////////////////

for(let index=1; index <=20; index++){
    
    //console.log(index);
    if(index==10){
        break
    }
}

for(i=1;i<=30;i++){
    if(i==9){
        continue
    }
    //console.log(i);
}

///////////////////35. Break and continue////////////////////////////////////////////

//////////////////36. Infinite loops////////////////////////////////////////

//for(let index=1; ; index++){
    
    //console.log(index);
    
//}

//////////////////36. Infinite loops/////////////////////////////////////////

//////////////////37. Nested Loops/////////////////////////////////////////

// for(let ariyan=1; ariyan<=10; ariyan++){
//     for(let kazi=1; kazi<=3; kazi++){
//         console.log(ariyan, kazi);
//     }
    
// }

//////////////////37. Nested Loops/////////////////////////////////////////

////////////////38. String Basics/////////////////////

// var country ='India';
// console.log(country);
// console.log(country.length);
// console.log(country.charAt(1));

////////////////38. String Basics/////////////////////


//39. String Methods: charAt, toUpperCase, toLowerCase, includes, startsWith, endsWith//

var country ='India is my country';
// console.log(country);
// console.log(country[1]);
// console.log(country.charAt(1));

console.log(country.toLowerCase());
console.log(country.toUpperCase());

//39. String Methods: charAt, toUpperCase, toLowerCase, includes, startsWith, endsWith//
    