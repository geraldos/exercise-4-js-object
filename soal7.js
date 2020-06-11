const biodata = {
  name: "Laila Ali",
  age: 20,
  college: "University of Indonesia",
  hobbies: {
    sleeping: "sleeping",
    shopping: "shopping",
  },
  address: {
    street: "Kemang Raya",
    province: "Jakarta Selatan",
    country: "Indonesia",
  },
  contact: {
    email: "laila@gmail.com",
    phone: {
      countryCode: 021,
      number: 153138,
    },
  },
  skills: {
    language: "english",
    programming: {
      language: "javascript",
      framework1: "react.js",
      language2: "java",
      language3: "C++",
    },
  },
};

let name = "Hai, my name is ";
let studied = ", I studied in ";
let programming = ". My programming skills are ";
let framework = " including using its framework ";
let java = ", ";
let cpp = ", ";
let cpp2 = ", and ";
let hobby = ". My hobbies are ";
let hobby1 = " and also ";
let live = ". Right now I live at ";
let live1 = ", ";
let live2 = " - ";
let dataPerson1 = ". You can reach me on my email ";
let dataPerson2 = " or my phone number ";
let symboll = "-";
let endWord = ". Thank you and have a nice day.";

console.log(
  name +
    biodata.name +
    studied +
    biodata.college +
    programming +
    biodata.skills.programming.language +
    framework +
    biodata.skills.programming.framework1 +
    java +
    biodata.skills.programming.language2 +
    +cpp +
    cpp2 +
    biodata.skills.programming.language3 +
    hobby +
    biodata.hobbies.sleeping +
    hobby1 +
    biodata.hobbies.shopping +
    live +
    biodata.address.street +
    live1 +
    biodata.address.province +
    live2 +
    biodata.address.country +
    dataPerson1 +
    biodata.contact.email +
    dataPerson2 +
    biodata.contact.phone.countryCode +
    symboll +
    biodata.contact.phone.number +
    endWord
);
