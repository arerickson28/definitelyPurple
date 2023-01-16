const router = require("express").Router();
const { User, Thought } = require("../../models");
const reactionSchema = require("../../models/Reaction");
// const { listIndexes } = require("../models/Thought");


//get all users
router.get("/",  async (req, res) => {
    // res.send("hey, Liy is great!")
    await User.find({})
    .then(users => {
      res.json(users);
    })
    .catch(err => {
    //   res.status(404).json(err);
    res.send("your route is working")
    });
})

// //get a single user by id with populated though and friend data
// router.get("/:userId", (req, res) => {

// })

// //post a new user
// router.post("/", async ({body}, res) => {
//     try{
//         const data = await users.create(body);
//         res.json(data);

//     } catch(err) {
//         console.log(err);
//         res.status(400).json(err);
//     }

// })


router.post("/", async ({ body }, res) => {
    // res.json(body)
    try{
        const data = await User.create(body);
        res.json(data);

    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
})
// //put to updata a user by id
// router.put("/:userId", (req, res) => {

// })

// //delete to remove user by id
// router.delete("/:userId", (req, res) => {

// })

// //post to add a new friend to a users friend list
// router.post("/:userId/friends/:friendId", ({body}, res) => {

// })
// // delete to remove a freiend from a users friend list
// router.delete("/:userId/friend/friendId", ({body}, res) => {

// })

module.exports = router