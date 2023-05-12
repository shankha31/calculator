let result = document.getElementById("result");

function insert(value) {
  result.value += value;
}

function clearAll() {
  result.value = "";
}

function back() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  result.value = eval(result.value);
}
