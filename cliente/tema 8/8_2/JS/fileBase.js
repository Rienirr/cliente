/*Esta clase se encarga de proporcionar los datos necesarios para conectarnos a la base de datos  Firebase*/
"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyC4TxXcMo1SY2m3UDH9YNNgZjMo6bVLBkg",
    authDomain: "lista-de-la-compra-83c82.firebaseapp.com",
    projectId: "lista-de-la-compra-83c82",
    storageBucket: "lista-de-la-compra-83c82.appspot.com",
    messagingSenderId: "1058261646163",
    appId: "1:1058261646163:web:cac607cbb191770785bfa6"
  };

export const app = initializeApp(firebaseConfig);
