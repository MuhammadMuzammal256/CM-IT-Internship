let myhambuger = document.querySelector(".navText img");
let menu = document.querySelector(".navText ul");

let dateInput = document.querySelector(".dateInput");
let timeInput = document.querySelector(".timeInput");

dateInput.addEventListener("click", function () {
    this.showPicker();
});

timeInput.addEventListener("click", function () {
    this.showPicker();
});




myhambuger.addEventListener("click", function () {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    console.log("clic");
  } else {
    menu.style.display = "flex";
  }
});
let nameRegex = /^[A-Za-z ]+$/;
let numRegex = /^03[0-9]{9}$/;
let orderRegex = /^[a-zA-Z0-9 ]+$/;

let myName = document.querySelector("#nameFeild input");
let myNum = document.querySelector("#numFeild input");
let myOrder = document.querySelector("#orderFeild input");
let myAdditionFeild = document.querySelector("#additionFeild input");
let myHowMuchFeild = document.querySelector("#howMuchFeild input");
let myDateTimeFast = document.querySelector("#dateTimeFast input");
let myAddressFeild = document.querySelector("#addressFeild textarea");
let myMessageFeild = document.querySelector("#messageFeild textarea");

let bookTablebtd = document.querySelector(".btd input");
let bookTablebtt = document.querySelector(".btt input");
let bookTablebttext = document.querySelector(".bttext input");

console.log(bookTablebtd);
// function showError(input, message) {
//   input.nextElementSibling.innerText = message;
// }
function showError(input, message) {
  input.parentElement.lastElementChild.innerText = message;
}

document
  .querySelector(".formFastFoodCard")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;
    let myError = document.querySelectorAll(".error");
    for (let i = 0; i < myError.length; i++) {
      myError[i].innerText = "";
    }

    if (myName.value.trim() === "") {
      showError(myName, "Require Name");
      isValid = false;
    } else if (!nameRegex.test(myName.value)) {
      showError(myName, "only Use Alphabets");
      isValid = false;
    }

    if (myNum.value.trim() === "") {
      showError(myNum, "Require Number");
      isValid = false;
    } else if (!numRegex.test(myNum.value)) {
      showError(myNum, "Require Number");
      isValid = false;
    }

    if (myOrder.value.trim() === "") {
      showError(myOrder, "Require Order");
      isValid = false;
    } else if (!orderRegex.test(myOrder.value)) {
      showError(myOrder, "only Use Alphabets");
      isValid = false;
    }

    if (myAdditionFeild.value.trim() === "") {
      showError(myAdditionFeild, "Require Addition");
      isValid = false;
    } else if (!orderRegex.test(myOrder.value)) {
      showError(myOrder, "only Use Alphabets");
      isValid = false;
    }

    if (myHowMuchFeild.value.trim() === "") {
      showError(myHowMuchFeild, "Require How Much");
      isValid = false;
    } else if (!orderRegex.test(myOrder.value)) {
      showError(myOrder, "only Use Alphabets");
      isValid = false;
    }

    if (myDateTimeFast.value.trim() === "") {
      showError(myDateTimeFast, "Require Date Time");
      isValid = false;
    }

    if (myAddressFeild.value.trim() === "") {
      showError(myAddressFeild, "Require Address");
      isValid = false;
    }

    // if(isValid)
    // {
    //   localStorage.setItem("Name", myName.value);
    //   localStorage.setItem("Number", myNum.value);
    //   localStorage.setItem("Order", myOrder.value);
    //   localStorage.setItem("Addition", myAdditionFeild.value);
    //   localStorage.setItem("How Much", myHowMuchFeild.value);
    //   localStorage.setItem("Date Time", myDateTimeFast.value);
    //   localStorage.setItem("Address", myAddressFeild.value);
    //   localStorage.setItem("Message", myMessageFeild.value);

    // console.log("My Name:", localStorage.getItem("Name"));

    // }
    if (isValid) {
      let userData = {
        name: myName.value,
        number: myNum.value,
        order: myOrder.value,
        addition: myAdditionFeild.value,
        howMuch: myHowMuchFeild.value,
        dateTime: myDateTimeFast.value,
        address: myAddressFeild.value,
        message: myMessageFeild.value,
      };
      localStorage.setItem("myUserData", JSON.stringify(userData));
      let getData = JSON.parse(localStorage.getItem("myUserData"));
      console.log("My Name:", getData.name);
      console.log("My Number:", getData.number);
      console.log("My Order:", getData.order);
      console.log("My Addition:", getData.addition);
      console.log("My How Much:", getData.howMuch);
      console.log("My Date Time:", getData.dateTime);
      console.log("My Address:", getData.address);
      console.log("My Message:", getData.message);
    }
  });

document
  .querySelector(".formBookTable")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    let myError = document.querySelectorAll(".error");
    for (let i = 0; i < myError.length; i++) {
      myError[i].innerText = "";
    }

    if (bookTablebtd.value.trim() === "") {
      showError(bookTablebtd, "Require Date");
      valid = false;
    }

    if (bookTablebtt.value.trim() === "") {
      showError(bookTablebtt, "Require Time");
      valid = false;
    }

    if (bookTablebttext.value.trim() === "") {
      showError(bookTablebttext, "Require Text");
      valid = false;
    }

 
    if (valid) {
      let tableData = {
        date: bookTablebtd.value.trim(),
        time: bookTablebtt.value.trim(),
        text: bookTablebttext.value.trim(),
      };

      localStorage.setItem("myTableData", JSON.stringify(tableData));

      let getTableData = JSON.parse(localStorage.getItem("myTableData"));

      console.log("My Date:", getTableData.date);
      console.log("My Time:", getTableData.time);
      console.log("My Text:", getTableData.text);
    }
  });