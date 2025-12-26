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
TASK ZJ:

Shunday function yozing, u berilgan array ichidagi
raqamlarni qiymatini hisoblab qaytarsin.

MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;


*/

function reduceNestedArray(arr: any[]): number {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc + reduceNestedArray(curr);
    }
    return acc + (typeof curr === "number" ? curr : 0);
  }, 0);
}

console.log(reduceNestedArray([1, [1, 2, [4]]]));
