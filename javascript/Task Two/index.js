// Array of data necessary to calculate Simple Interest
const data = [
  {
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time: 5
  },
  {
    principal: 3000,
    time: 1
  },
  {
    principal: 2000,
    time: 3
  }
];

const interestData = [];

let rate;

const simpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

// Interest calculator function
const interestCalculator = dataObj => {
  if (typeof dataObj === "object") {
    dataObj.forEach(data => {
      const { principal, time } = data;
      if (principal >= 2500 && time > 1 && time < 3) {
        rate = 3;
        data.rate = rate;
        data.simpleInterest = simpleInterest(principal, rate, time);
      } else if (principal >= 2500 && time >= 3) {
        rate = 4;
        data.rate = rate;
        data.simpleInterest = simpleInterest(principal, rate, time);
      } else if (principal <= 2500 || time <= 1) {
        rate = 2;
        data.rate = rate;
        data.simpleInterest = simpleInterest(principal, rate, time);
      } else {
        rate = 1;
        data.rate = rate;
        data.simpleInterest = simpleInterest(principal, rate, time);
      }

      interestData.push(data);
      console.log(interestData);
    });
  }
};

// Executing the function
interestCalculator(data);
