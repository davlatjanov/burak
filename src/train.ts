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

ZS-TASK

Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin. MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4.

@MITASK

@MITASK
*/

function singleNumber(arr: number[]): number | null {
  const numCount: { [key: number]: number } = {};

  for (const num of arr) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num in numCount) {
    if (numCount[num] === 1) {
      return parseInt(num);
    }
  }

  return null;
}

console.log(singleNumber([4, 2, 1, 2, 1]));
