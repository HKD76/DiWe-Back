const admin = require('../Firebase/firebaseConfig');
// "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJhNjI1OTZmNTJmNTJlZDQ0MDQ5Mzk2YmU3ZGYzNGQyYzY0ZjQ1M2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyZS1kaXdlIiwiYXVkIjoiZmlyZS1kaXdlIiwiYXV0aF90aW1lIjoxNzExMzcyMjE1LCJ1c2VyX2lkIjoiaVlxMWY4TmJKemZPMG9jc1pQTHk4ZWpDVEhIMyIsInN1YiI6ImlZcTFmOE5iSnpmTzBvY3NaUEx5OGVqQ1RISDMiLCJpYXQiOjE3MTEzNzIyMTYsImV4cCI6MTcxMTM3NTgxNiwiZW1haWwiOiJhemVhemVAYXplLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhemVhemVAYXplLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eCjT0kDMjm7k8cKQGcCBLtKZYSavRuVpGBOJ5qg3D4Na5wN0GmEPChJmvf6Spsz8MjuucbU1TBQ1149CKDcCRl5ThLXVPuORcriWV8ScJeEXnwuMnGelldWVry-0w-bzje5xEHLy-F6wUPD1skuZSfUfPhadFo3zMnsBls_VeKNamoOWv_ndY2L4t70VNDPMQdlvKTA26Pi_EJ3L2H7czbfKaCtwyFxHXBu-Domd81ui9x_rmaCB5cCfuOh_EK8o3iW94y1ZEPMcEDcFPsbrYOvm4_ZeXP4C_McPeeJ2Pn8MabXEqFxrq_xSAP5ZJ8vE7v6H8-QmsxNprRBCWXu_Pw"
const verifyToken = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization?.split('Bearer ')[1];
    console.log('idToken',idToken);
    console.log('reqBody',req.body);
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    console.log('decodedToken',decodedToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Unauthorized' });
  }
};

module.exports = verifyToken;