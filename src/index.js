// returnを省略したアロー関数 ＊処理が一行のときは省略できる＊
// const func1 = (num) => num + 1;
// console.log(func1(1));

// returnを省略しない場合
// const func2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func2(1, 2));

/**
 * 分割代入
 */
// const myProfile = {
// name: "Mutchie",
// age: 19
// };
// const myProfileArray = ["Mutchie", 19];

// 配列やオブジェクトで可能
// const { name, age } = myProfile;
// const [name, age] = myProfileArray;
// const message = `名前：${name}\n年齢：${age}`;
// console.log(message);

//　引数のデフォルト値を設定できる
// const sayHello = (name = "Mutchie") => console.log(`こんにちは、${name}さん！`);
// sayHello();

/**
 * スプレット構文
 */
//　配列の展開
// const array1 = [1, 2];
// console.log(array1);
// console.log(...array1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...array1);

//　まとめて複数の変数に代入
// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...array3] = array2;
// console.log(arr3);

// 配列のコピー、結合
// const array4 = [10, 20];
// const array5 = [30, 40];
// const array6 = [...array4];
// console.log(array6);

// const array7 = [...array4, ...array5];
// console.log(array7);

// const array8 = array4;
// console.log(array8);
// array8[0] = 9999;
//そのまま代入してしまうと参照がおなじになってしまう
// console.log(array8);
// console.log(array4);

/**
 * map や filterを使った配列の処理
 */

//for文での書き方
// const nameArr = ["mutchie", "sk", "wow"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

//map
// nameArr.map((name) => console.log(name));
//mapは2つ目の引数を取るとインデックスが入る。

//filter
// const numArr = [1, 2, 3, 4, 5];
// const numArrOdd = numArr.filter((num) => num % 2 === 1);
// console.log(numArrOdd);

// || はまたはという意味ではなく、正確には、左がfalseなら右を返す
// && は左がTrueなら右を返す
const num = null;
const fee = num || "金額未設定です。";
console.log(fee);
