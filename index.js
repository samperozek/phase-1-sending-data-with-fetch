// // Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);


function submitData(userName, userEmail){
    fetch("http://localhost:3000/users",{
        method:"POST",
        headers: {
            "Content-Type": "applciation/json",
            "Accept": "application/json",
        }
    })
}