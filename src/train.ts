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
 TRADITIONAL API
 REST API
 GraphQL API
*/

/*
I-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

@MITASK */

function majorityElement(arr: number[]): number {
  let maxCount = 0;
  let mostRepeated: number = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }

    if (count > maxCount) {
      maxCount = count;
      mostRepeated = arr[i];
    }
  }

  return mostRepeated;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4, 3, 3, 3]));
