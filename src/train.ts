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

/*ZC-TASK:

Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
MASALAN: celsiusToFahrenheit(0) return 32

@MITASK
*/

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(0));
