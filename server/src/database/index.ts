import * as admin from "firebase-admin"
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nasa-project-265f3.firebaseio.com",
});

let db = admin.firestore();
  
module.exports = db;