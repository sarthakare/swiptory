const User = require('../models/user');
const Story = require('../models/story');
const {hashPassword, comparedPassword } = require('../helper/auth')

const test = (req, res) => {
    res.json('test is working')
}

//register endpoint
const registerUser = async (req, res) =>{
    try {
        const {username, password} = req.body;
        //check username is entered
        if(!username){
            return res.json({
                error: 'name is required!'
            })
        };
        if(!password){
            return res.json({
                error: 'pssowrd is required!'
            })
        };

        // check user exist
        const exist = await User.findOne({username});
        if(exist){
            res.json({
                error:'User is already exists!'
            })
        };
        
        const hashedPassword = await hashPassword(password);
        // create user in database
        const user = await User.create({
            username, password: hashedPassword 
        });

        return res.json(user);

    } catch (error) {
        console.log(error);
    }
}

//login endpoint
const loginUser = async (req, res) =>{
    try {
        const {username, password} = req.body;

        //check if user exist
        const user = await User.findOne({username});
        if(!user){
            return res.json({
                error: 'No user found'
            })
        }

        //check pass matched
        const match = await comparedPassword(password, user.password);
        if(match){
            res.json('password matched')
        }
        if(!match){
            res.json({
                error: 'password do not matched!'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const userStory = async (req, res) => {
  try {
    const { heading, description, image, category } = req.body;
    //check data is entered
    if (!heading) {
      return res.json({
        error: "heading is required!",
      });
    }
    if (!description) {
      return res.json({
        error: "description is required!",
      });
    }
    if (!image) {
      return res.json({
        error: "image url is required!",
      });
    }
    if (!category) {
      return res.json({
        error: "category is required!",
      });
    }

    // add story in database
    const story = await Story.create({
      heading,
      description,
      image,
      category,
    });

    return res.json(story);
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    test,
    registerUser,
    loginUser,
    userStory
}