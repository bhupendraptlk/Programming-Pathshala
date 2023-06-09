// Count vowels in a String
// let string = "hopeoei"
// string=string.toLowerCase();
// let count=0;
// for(let i=0;i<string.length;i++){
//     if(string[i]=='a' || string[i]=='e' || string[i]=='i' || string[i]=='o' || string[i]=='u'){
//         count++;
//     }
// }
// console.log(count);

const express = require("express");
const app = express();
app.use(express.json());
const IP = "localhost";
const PORT = 3001;

const vowels = ["a", "e", "i", "o", "u"];
const CountVowels = (string) => {
  string = string.toLowerCase();
  count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
};

app.get("/count", (req, res) => {
  let string = req.body.str;
  let count = CountVowels(string);
  res.send({ "Vowels Count": count });
});

app.get("/add", (req, res) => {
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ status:"400",error: "Invalid Input" });
    return;
  }
  res.send({ Sum: num1 + num2 });
});
app.get("/subtract", (req, res) => {
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ status:"400",error: "Invalid Input" });
    return;
  }
  res.send({ Difference: num1 - num2 });
});
app.get("/multiply", (req, res) => {
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ status:"400",error: "Invalid Input" });
    return;
  }
  res.send({ Product: num1 * num2 });
});
app.get("/divide", (req, res) => {
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ status:"400",error: "Invalid Input" });
    return;
  }
  let ans;
  if(num2!=0){
    ans = num1/num2;
  }
  else ans="Invalid Input"
  res.send({ Answer: ans });
});

app.listen(PORT, IP, () => {
  console.log("Server running on PORT : " + PORT);
  console.log("Server running on IP : " + IP);
});
