// ✅ Return Negative
// ❗ Description: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
/*
Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/
// ❗ Описание: В этом простом задании вам дается число, и вы должны сделать его отрицательным. Но, может быть, число уже отрицательное?
/*
Примечания
Число уже может быть отрицательным, и в этом случае никаких изменений не требуется.
Ноль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.
*/

function makeNegative_1(num) {
    return (num <= 0) ? num : (-num);
  }

  function makeNegative_2(num) {
    return num === 0 ? num : -Math.abs(num);
  }

  let testVariable_1 = makeNegative_1(0);
  console.log(testVariable_1);

  let testVariable_2 = makeNegative_2(0);
  console.log(testVariable_2);