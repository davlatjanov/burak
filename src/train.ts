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
ZM-TASK

Shunday function yozing, u function parametrda berilgan sonni har bir raqamini kvadratiga ogirib qaytarsin. MASALAN: squareDigits(9119) return "811181".

@MITASK
*/

function squareDigits(num: number): string {
  return num
    .toString()
    .split("")
    .map((digit) => Math.pow(parseInt(digit), 2))
    .join("");
}
console.log(squareDigits(9119));
