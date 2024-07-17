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

let blogsSection = document.getElementById("blogs");
let lastSection = document.getElementById("blogs");

blogsSection.innerHTML = ``;

const dbRef = ref(getDatabase());
get(child(dbRef, `blogsList`)).then((snapshot) => {
    let i = 0;
    let j = 0;
    blogsSection.innerHTML += `
        <div class="row" id="row${j}"></div>
    `;
    lastSection = document.getElementById("row" + j);
    j++;
    snapshot.forEach((child1) => {
        if (i == 2) {
            i = 0;
            blogsSection.innerHTML += `
                <div class="row" id="row${j}" style="margin-top: 2vh;"></div>
            `;
            lastSection = document.getElementById("row" + j);
            lastSection.innerHTML += `
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="blogs-section">
                    <a href="blog.html?b=${child1.key}">
                            <div class="images-blog aos-init" data-aos="fade-up">
                                <figure class="mb-0"><img class="img-fluid" src="${child1.val().header}" alt="">
                                </figure>
                            </div>
                            <h5 class="blogs-h5">${child1.val().title}</h5>
                            <p class="blogs-p">${child1.val().content.substring(0, 200) + '...'}</p>
                        </a>
                    </div>
                </div>
            `;
            j++;
        } else {
            lastSection.innerHTML += `
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="blogs-section">
                        <a href="blog.html?b=${child1.key}">
                            <div class="images-blog aos-init" data-aos="fade-up">
                                <figure class="mb-0"><img class="img-fluid" src="${child1.val().header}" alt="">
                                </figure>
                            </div>
                            <h5 class="blogs-h5">${child1.val().title}</h5>
                            <p class="blogs-p">${child1.val().content.substring(0, 200) + '...'}</p>
                        </a>
                    </div>
                </div>
            `;
        }
        i++;
    });
}).then(() => {
    
});