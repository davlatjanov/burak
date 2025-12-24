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
TASK ZI

Shundan function yozing, bu function 3 soniydan so'ng
"Hello World!" so'zini qaytarsin.

MASALAN: delayHelloWorld("Hello World"); return "Hello World";


*/

function delayHelloWorld(message: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 3000);
  });
}

delayHelloWorld("Hello World!").then((result) => {
  console.log(result);
});
