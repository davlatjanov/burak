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

/*S-TASK:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2

@MITASK
*/

function missingNumber(arr: number[]) {
  const fullArray: number[] = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  for (let i: number = min; i <= max; i++) {
    fullArray.push(i);
  }

  const missings = fullArray.filter((ele) => !arr.includes(ele));
  return missings;
}

console.log(missingNumber([4, 2, 6, 7, 5, 10]));
