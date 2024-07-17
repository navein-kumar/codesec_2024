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

let faqSection1 = document.getElementById("faqs");

const dbRef = ref(getDatabase());
get(child(dbRef, `faqList`)).then((snapshot) => {
    faqSection1.innerHTML = `<h3 class="text-lg-left text-center">General FAQs</h3><br><br>`;
      snapshot.forEach((child1) => {
        faqSection1.innerHTML += `
            <div class="cyber-content accordian-text">
                <div class="accordian-inner">
                    <div id="accordion${child1.key}">
                        <div class="accordion-card">
                            <div class="" id="heading${child1.key}">
                                <a href="#" class="btn btn-link text-decoration-none" data-toggle="collapse" data-target="#${child1.key}" aria-expanded="false" aria-controls="${child1.key}">
                                    <h5 class="faq-btn-text">${child1.val().question}</h5>
                                </a> 
                            </div>
                            <div id="${child1.key}" class="collapse" aria-labelledby="heading${child1.key}">
                                <div class="card-body">
                                    <p class="text-left accordian-text-color">
                                        ${child1.val().answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}).then(() => {
});