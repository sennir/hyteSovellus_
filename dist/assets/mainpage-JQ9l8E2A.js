import"./style-rfZJKnZa.js";import{f as a}from"./fetch-wtUFcH3C.js";function i(){localStorage.removeItem("token"),window.location.href="/login-page.html"}document.getElementById("diaryForm").addEventListener("submit",async function(t){t.preventDefault();const e=new FormData(this),o={date:e.get("date"),mood:e.get("mood"),weight:e.get("weight"),sleep:e.get("sleep"),exerciseDuration:e.get("exerciseDuration"),exerciseIntensity:e.get("exerciseIntensity"),content:e.get("content")};try{(await fetch("http://localhost:3000/api/diary",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify(o)})).ok?alert("Päiväkirjamerkintä tallennettu onnistuneesti!"):alert("Virhe tallennettaessa päiväkirjamerkintää.")}catch(n){console.error("Virhe:",n),alert("Jotain meni pieleen. Yritä uudelleen myöhemmin.")}});document.getElementById("logoutButton").addEventListener("click",function(t){t.preventDefault(),i()});async function r(){console.log("Hei täällä ollaan! Nyt pitäisi hakea käyttäjän tiedot");const t="http://localhost:3000/api/auth/me",o={method:"GET",headers:{Authorization:"Bearer: "+localStorage.getItem("token")}};a(t,o).then(n=>{console.log(n),document.getElementById("name").innerHTML=n.user.username})}r();