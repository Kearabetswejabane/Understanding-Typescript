type combinable = number|string
type ConversionDescriptor = 'as-number'|'as-text'


function add(input1:combinable,input2:combinable,resultConversion: ConversionDescriptor){
    let result; 
    if(typeof input1 === 'number' && typeof input2 === 'number'|| resultConversion === 'as-number'){
      result = +input1 + +input2  
    }else{
       result = input1.toString() + input2.toString();
    }
   return result
}
const combinedAges = add(30,26,'as-number');
console.log(combinedAges);

const combinedStringAges = add(30,26,'as-number');
console.log(combinedStringAges);

const combinedNames = add('Max','Anna','as-text');
console.log(combinedNames);