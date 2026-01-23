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

/*
ZU-TASK

Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin. MASALAN: sumOfUnique([1,2,3,2]) return 4.

@MITASK
*/

function sumOfUnique(arr: number[]): number {
  const numCount: { [key: number]: number } = {};
  let sum = 0;

  for (const num of arr) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num in numCount) {
    if (numCount[num] === 1) {
      sum += Number(num);
    }
  }

  return sum;
}
console.log(sumOfUnique([1, 2, 3, 2]));
