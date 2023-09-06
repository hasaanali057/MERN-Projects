const User = require('../../models/userSchema');

const addUserController = async (req, res) => {
  try{
    const user = new User(req.body);
    console.log(user);
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    return res.status(200).header('x-auth-token', user.genAuthToken()).send(_.pick(user, ['_id', 'name', 'email']));
  }catch(err){
    return res.status(500).send("failed" + err);
  }
}

const getUserController = async (req, res) => {
  try {
    const user = await User.find();
    if(user){
      return res.status(200).send(user);
    }else{
      res.send("User Not Found");
    }
  } catch (error) {
    return res.status(500).send(error);
    console.log(error)
  }
}

module.exports = {
  addUserController,
  getUserController
}