// ✅ Convert boolean values to strings 'Yes' or 'No'.
// ❗ Description: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
/*
function boolToWord( bool ){
  you_code
}
*/
// ❗ Описание: Завершите метод, который принимает логическое значение и возвращает строку "Yes" вместо true или строку "No" вместо false.

function boolToWord( bool ){
    return bool ? "Yes" : "No"
  }

  let testVariable = boolToWord(true);
  console.log(testVariable)