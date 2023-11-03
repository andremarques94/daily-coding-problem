/* 
a mensagem 111 retorna 3, porque poderia ser descodificada como aaa, ka, ak.
a mensagem 1826 retorna 4 porque poderia ser descodificada como ahbf, ahz, rbf, rz.
*/

const FIRST_CHAR = 97
const alpha = Array.from(Array(26)).map((elem, i) => i + FIRST_CHAR)
                    .map((x) => String.fromCharCode(x))
                        .reduce((acc, elem) => {
                            acc[acc.length] = elem;
                            acc.length++;
                            return acc;
                        }, {length : 1});



console.log(alpha) 
const gus_bem_podre = (code) => {


  const combinations = combinator(code);
  console.log(combinations);
}

const combinator = (code, start, end) => {

  const combinations = [];

  //each one separated
  combinations.push(code.split(''));
  
  combinations.push()


  return combinations;
}

gus_bem_podre("1826");

/*
1 8 2 6
1 82 6 //invalid
18 26
18 2 6*/






