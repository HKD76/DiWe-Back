const admin = require('../Firebase/firebaseConfig');
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