const admin = require('firebase-admin');
const serviceAccount = require('./services/fire-diwe-firebase-adminsdk-99xx2-978175eed2.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
