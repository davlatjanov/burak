/* H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

@MITASK */

const givePositive = (array: number[]): string => {
  const positive = array.filter((ele) => ele > 0).join("");
  return positive;
};

console.log(typeof givePositive([1, -3, 2]));
console.log(givePositive([1, -3, 2]));
