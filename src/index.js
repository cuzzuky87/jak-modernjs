import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 *
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん!`);
sayHello();

/**
 * スプレッド構文
 */

const ary1 = [1, 2];
console.log(ary1);
console.log(...ary1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(ary1[0], ary1[1]);
sumFunc(...ary1);

const ary2 = [1, 2, 3, 4, 5];
const [num1, num2, ...ary3] = ary2;
console.log(num1);
console.log(num2);
console.log(ary3);

const ary4 = [10, 20];
const ary5 = [30, 40];

const ary6 = [...ary4, ...ary5];
console.log(ary6);

/**
 * 参考演算子
 */
const val1 = 1 > 0 ? "True" : "False";
console.log(val1);

const num = "1300";
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "input the number";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "Over!!!" : "許容範囲内です";
};

console.log(checkSum(40, 100));
