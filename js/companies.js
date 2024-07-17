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

let companiesMarquee = document.getElementById("companiesMarquee");

    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for(let i=0; i<marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
;