/* 
VPS =====> Vertual Private Server
A virtual machine running on a physical server.

VPC =====> Vertual Private Cloud
A private network inside a cloud platform

*/

import { T } from "./libs/types/common";

/* Project Standards:
-Logging standards(Morgan Format)
- Naming standards
    function, method, variable => CAMEL case
    class => PASCAL case
    folder => KEBAB case
    css => SNAKE case

-ERROR HANDLING 

*/

/*TASK U

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

*/

function sumOdd(enteredNumbers: number) {
  if (enteredNumbers < 0) {
    return "enter Positive numbers";
  }
  let count: number[] = [];

  for (let i = 0; i < enteredNumbers; i++) {
    if (i % 2 === 1) {
      count.push(i);
    }
  }

  return count.length;
}

console.log(sumOdd(9));
