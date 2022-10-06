let button = document.getElementById("btn");

let resultEmi = document.getElementById("monthlyemi");
let resultInterest = document.getElementById("interestloan");
let resultPa = document.getElementById("pa");
let resultAmount = document.getElementById("totalamount");

button.addEventListener("click", () => {
  let loanAmount = document.getElementById("loanamount").value;
  let tenure = document.getElementById("tenure").value;
  let interestR = document.getElementById("interest").value / 12 / 100;

  let emi =
    (loanAmount * interestR * (1 + interestR) ** tenure) /
    ((1 + interestR) ** tenure - 1);

  let tAmount = Math.round(emi * tenure);
  let tInterest = tAmount - loanAmount;

  if (!loanAmount || !tenure || !interestR) {
    resultEmi.textContent = "Enter all details to calculate emi";
    resultInterest.style.display = "none";
    resultPa.style.display = "none";
    resultAmount.style.display = "none";
  } else {
    resultInterest.style.display = "block";
    resultPa.style.display = "block";
    resultAmount.style.display = "block";
    chart.style.display = "block";

    resultEmi.textContent = "Montly EMI : " + Math.round(emi);
    resultInterest.textContent = "Interest On Loan : " + tInterest;
    resultPa.textContent = "Principle Amount : " + loanAmount;
    resultAmount.textContent = "Total Amount to Pay : " + tAmount;

    let xValues = ["Principle Amount", "Total Interest"];
    let yValues = [loanAmount, tInterest];

    let barColors = ["#F8D89F", "#C62827"];

    new Chart("chart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
      },
    });
  }
});
