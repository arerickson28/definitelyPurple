const router = require("express").Router();
const { User, Thought } = require("../../models");
const reactionSchema = require("../../models/Reaction");

//get all thoughts
// router.get("api/thoughts", async ({body}, res) => {
//     await User.find({}).sort({date: -1})
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// })

// //get a single thought by id
// router.get("api/thoughts/:thoughtId", (req, res) => {

// })

// //post a new thought
// // post to create a ndw thought (dont forget to push the created thoughts id to the associated useers thoughts array field)
// router.post("api/thoughts") 
// //??????

// //put to update a thought by id
// router.put("api/thoughts/:thoughtId", ({body}, res) => {

// })
 
// //delete to remove thought by id
// router.delete("api/thoughts/:thoughtId", (req, res) => {

// })
    

// //post to create reaction stored in a single thought's reaction array field
// router.post("/api/thought/:thoughtId/reaction", ({body}, res) => {

// })

// // delete to pull and remove a reaction by the reactions reactionid value
// router.delete("/api/thought/thoughtId/reaction/:reactionId", (req, res) => {

// })

module.exports = router