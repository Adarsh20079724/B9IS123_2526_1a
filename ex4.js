///////Create a function to read a string of the form:
// factors : multiples
//and output a string:
// result : factors : multiples

//where factors and multiples are space separated lists of integers

// Example Input : 
// 3 5 : 1 2 3 4 5 6 7 8 9

// Example Output : 
// 23 : 3 5 : 1 2 3 4 5 6 7 8 9

const inputStr = "35:123456789";

const euler1 = (str) => {
    
    let sum = 0, output = [];
    let [div, range] = str.split(":")
    console.log("multiples : ",div)
    const multiples = div.split("")
    
    for(let i = 1; i <= range.split("").findLast(x => x) ; i++){
        if(i%multiples[0] == 0 || i%multiples[1] == 0){
            sum += i;
        }
    }
    
    output = [sum, div, range];
  return console.log("output string = ", output.join(":"))
}

euler1(inputStr) ;

//keep code DRY (Don't repeat yourself)

//if you're finished, code it into a page

//let f2 = (a,l) => l.filter(i=>a.some(j=>i%j == 0).reduce((x,y) => x+y,0))