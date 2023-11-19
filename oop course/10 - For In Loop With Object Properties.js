/*
  For ... In Loop
  Loop Through The Properties Of The Objects
*/

const user = {
    name: "Osama",
    country: "Egypt",
    age: 37,
    ss:{wq:12},
  };
  
  let finalData = "";
  
  for (let info in user) {
    console.log(`The ${info} Is => ${user[info]}`);
    finalData += `<div>The ${info} Is => ${user[info]}</div>`;
  }
  
  // console.log(user.country);
  // console.log(user["country"]);
  
  console.log(finalData);
  
  document.getElementById("info").innerHTML = finalData;