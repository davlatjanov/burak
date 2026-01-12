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
ZP-TASK

Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin. MASALAN: countNumberAndLetters("string152%\¥") return {number:3, letter:6}.

@MITASK
*/

function countNumberAndLetters(str: string): {
  number: number;
  letter: number;
} {
  let number = 0;
  let letter = 0;

  for (const char of str) {
    if (/[0-9]/.test(char)) {
      number++;
    } else if (/[a-zA-Z]/.test(char)) {
      letter++;
    }
  }

  return { number, letter };
}

console.log(countNumberAndLetters("string152%\\¥"));
