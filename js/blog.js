import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getDatabase, ref, onValue, child, get, remove, set, push, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDCSwvibB-YyZuKLPC41I9vlpDQ3rOrw08",
    authDomain: "code-5bf0d.firebaseapp.com",
    databaseURL: "https://code-5bf0d-default-rtdb.firebaseio.com",
    projectId: "code-5bf0d",
    storageBucket: "code-5bf0d.appspot.com",
    messagingSenderId: "877035089882",
    appId: "1:877035089882:web:a50d11ebdb407dd5cd5ae3",
    measurementId: "G-TYFM81BY5P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let blogSection = document.getElementById("blog");
let title = document.getElementById("title");

var url_string = window.location;
var url = new URL(url_string);
var id = url.searchParams.get("b");

const dbRef = ref(getDatabase());
get(child(dbRef, `blogsList/${id}`)).then((snapshot) => {
    if (snapshot.val() != null) {
        blogSection.innerHTML += `
            <span style="color: gray; font-size: small;">Published On: ${snapshot.val().publishedOn}<br></span>
            <span style="color: gray; font-size: small;">Read Time: ${calculateReadTime(snapshot.val().content)} minutes<br><br></span><br>
            ${snapshot.val().content}
        `;
        //blogSection.innerHTML += snapshot.val().content;
        title.innerHTML = snapshot.val().title;
    } else {
        window.location = "404.html";
    }
}).then(() => {
    
});

function calculateReadTime(content, wordsPerMinute = 250) {
    const words = content.trim().split(/\s+/).length;
    const readTimeMinutes = words / wordsPerMinute;
    const readTime = Math.ceil(readTimeMinutes);   
    return readTime;
}