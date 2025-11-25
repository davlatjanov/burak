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

/*X-TASK:

 Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
 MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

@MITASK
*/

function countOccurrences(obj: T, keyToCount: string): number {
  let count = 0;

  function recursiveCount(obj: T) {
    for (const key in obj) {
      if (key === keyToCount) {
        count++;
      }
      if (typeof obj[key] === "object" && obj[key] !== null) {
        recursiveCount(obj[key] as T);
      }
    }
  }

  recursiveCount(obj);
  return count;
}

const exampleObj = {
  model: "Bugatti",
  steer: {
    model: "HANKOOK",
    size: 30,
  },
};

console.log(countOccurrences(exampleObj, "model"));
