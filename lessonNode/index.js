const fs = require('fs');


const rates = fs.readFileSync('./files/rates.csv', 'utf8');
const toArrayrates = rates.split('\n');
// const ff = `{${toArrayrates[0]}}`
// console.log(ff);
const personalInfo = fs.readFileSync('./files/personalInfo.csv', 'utf8');
const toArrayInfo = personalInfo.split('\n');
 for(let i= 0;i<toArrayInfo.length;i++){
    // toArrayInfo[i].JSON.parse()
    // toArrayrates[i].JSON.parse()
    console.log(toArrayInfo[i],toArrayrates[i]);
 }

