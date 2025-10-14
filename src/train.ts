/* H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

@MITASK */
const getDigits = (array: string) => {
  const digits = array
    .split("")
    .map((ele) => {
      return !isNaN(Number(ele)) ? ele : "";
    })
    .join("");

  return digits;
};

console.log(typeof getDigits("m14i1t"));
console.log(getDigits("m14i1t"));
