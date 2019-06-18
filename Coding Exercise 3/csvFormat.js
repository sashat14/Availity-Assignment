// Coding exercise:  Availity receives enrollment files from various benefits management and enrollment solutions (I.e. HR platforms, payroll platforms).  Most of these files are typically in EDI format.  However, there are some files in CSV format.  For the files in CSV format, write a program that will read the content of the file and separate enrollees by insurance company in its own file. Additionally, sort the contents of each file by last and first name (ascending).  Lastly, if there are duplicate User Ids for the same Insurance Company, then only the record with the highest version should be included. The following data points are included in the file:
// User Id (string)
// First and Last Name (string)
// Version (integer)
// Insurance Company (string)
const fs = require('fs');
const csv = require('csv-parser');

class Patient {
    constructor(id, name, version, insuranceCompany){
        this.id = id;
        this.name = name;
        this.version = version;
        this.insuranceCompany = insuranceCompany;

    }
}

let results = [];
let patients = [] 
fs.createReadStream('patients.csv')
.pipe(csv())
.on('data', (data) => results.push(data))
.on('end', () => {
  console.log(results);
})