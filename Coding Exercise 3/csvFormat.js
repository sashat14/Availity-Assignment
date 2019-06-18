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
  console.log(results[1]);

 const filtered = results.filter(obj=>{
     console.log(obj)
      obj["Insurance Company"]==="Atena";
  })

  console.log(filtered);
//   patients = results.map((patient)=>{
//     console.log(patient);
//      return new Patient(patient);
//   })
//   console.log(patients);
})

console.log(patients);
// let patients = [];
// fs.open('cities.csv', 'r',  (err, fd)=>{
//     console.log(fd)
// } )
// fs.readFile('cities.csv', 'utf8', (err, data)=>{
//    //data;
// //    let patient = {
// //        userId: "",
// //        name: "",
// //        version: 0,
// //        insuranceCompany:""
// //    }
//     people = data.split("\n");
//     console.log(people[1]);

//     for(let i =0; i<people.length; i++){
//         // let pArr = (people[i].replace(",", ""))
//      let pArr = String(people[i].slice(0, people[i].length-1));
//        patients.push(pArr);
//        console.log(patients)
//     }

//     console.log(patients[1].split(','));

//     const patientObjects = patients.map((patient)=>{
//         let newPatient = patient.split(',');
//         return new Patient(newPatient);
//     })

//     console.log(patientObjects)

// });

