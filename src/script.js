const ol = document.querySelector("ol");
const input = document.getElementById("row");
const btn = document.querySelector("button");
const results = document.getElementById("result");

btn.addEventListener("click", () => {
  let inputVal = input.value.replace(/[\s\._\-'"=]+/g, "");
  const valArr = inputVal.split("");
  let numArr = valArr.map(e => {
    if (e <= 6) return Number.parseInt(e);
  });
  if (isNaN(inputVal)) {
    ol.style.display = "none";
    return (results.innerHTML =
      "<span><center>Input Value is Not a Number!<br><br> <img src='a.png' width='35px' height='40px' ></center><span>");
  } else if (inputVal === "") {
    ol.style.display = "none";
    return (results.innerHTML =
      "<span><center>Input field cannot be empty! <br><br> <img src='a.png' width='35px' height='40px' ></center></span>");
  } else if (numArr.length < 3) {
    ol.style.display = "none";
    return (results.innerHTML =
      "<span><center>Input value <b>must</b> be equal or morethan 3 Digits<br><br><img src='t.png' width='35px' height='40px' > </center><span>");
  } else {
    ol.style.display = "none";
    rolls(numArr);
  }
});

function rolls(arr) {
  let sum = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "undefined")
      return (results.innerHTML =
        "<span><center>Number digits must range within 1 - 6<br><br> <img src='a.png' width='35px' height='40px' ></center></span>");
    if (temp !== 1 && temp !== 6) {
      sum += arr[i];
      if (arr[i] === 1) {
        temp = 1;
      } else if (temp === 6) {
        temp = 6;
      }
    } else {
      if (temp === 1 && arr[i] !== 1) {
        sum += 0;
        temp = arr[i];
      } else if (temp === 6 && arr[i] !== 6) {
        sum += 2 * arr[i];
        temp = arr[i];
      } else if (temp === arr[i]) {
        if (arr[i] === 1) {
          sum += 0;
          temp = arr[i];
        } else if (arr[i] === 6) {
          sum += 2 * arr[i];
          temp = arr[i];
        }
      }
    }
  }
  return (results.innerHTML =
    "<p><small>Results:</small><br><br><b>=> sum of rolls: </b><i style='color: green'>" +
    sum +
    "</i><br><br>" +
    "<b>=> Number of rolls played: </b><i style='color: green'>" +
    arr.length +
    "</i>");
}
