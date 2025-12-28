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
ZK-TASK:

Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers()

@MITASK
*/

function printNumbers() {
  let count = 1;
  const interval = setInterval(() => {
    if (count > 5) {
      clearInterval(interval);
    } else {
      console.log(count);
      count++;
    }
  }, 1000);
}

console.log("Print numbers from 1 to 5 every second:");
printNumbers();
