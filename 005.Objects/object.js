let obj = {};

let person = {
  name: "Tushar Arora",
  age: 21,
};
console.log(person);
console.log(person.age);

let candidate = {
  name: "Tushar Arora",
  age: 21,
  gender: "Male",
  skills: ["Java", "JS", "React.js", "Node.js", "SQL", "MongoDb"],
  address: {
    city: "Gajsinghpur",
    tehsil: "Padampur",
    district: "Sri Ganganagar",
    state: "Rajasthan",
  },
  message: function () {
    console.log("Pre-Final year CSE Student");
  },
};
console.log(candidate);
console.log(candidate.skills[0]);
candidate.message(); //FUNCTION CALL OF OBJECT

for (let i in candidate) {
  //FOR-IN LOOP TO TRAVERSE OBJECTS
  //FOR-IN LOOP FOR OBJECT
  console.log("key = ", i, " Value = ", candidate[i]);
}

candidate.hobbies = ["Singing", "Badminton", "Movies"]; //WILL ADD PROPERTY IF NOT EXIST

delete candidate.gender; //DELETE PROPERTY FROM THE OBJECT

console.log(candidate);
