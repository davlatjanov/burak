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

/*ZH-TASK:

Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

@MITASK*/

function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length;
  const present = new Array(n + 1).fill(false);
  const result: number[] = [];

  for (const num of nums) {
    if (num >= 1 && num <= n) {
      present[num] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!present[i]) {
      result.push(i);
    }
  }

  return result;
}

console.log(findDisappearedNumbers([1, 3, 4, 7]));
