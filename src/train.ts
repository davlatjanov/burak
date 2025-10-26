/* 
VPS =====> Vertual Private Server
A virtual machine running on a physical server.

VPC =====> Vertual Private Cloud
A private network inside a cloud platform

*/

/* Project Standards:
-Logging standards(Morgan Format)
- Naming standards
    function, method, variable => CAMEL case
    class => PASCAL case
    folder => KEBAB case
    css => SNAKE case

-ERROR HANDLING 

*/

/*L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

@MITASK
*/

const reverseSentence = (sentance: string) => {
  return sentance
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseSentence("we like coding"));
