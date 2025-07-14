const jwt = require("jsonwebtoken")

function generateAuthToken(payload)
{
return jwt.sign(payload,process.env.JWT_SECRET)
}


function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}


module.exports={
    generateAuthToken,
    verifyToken
}