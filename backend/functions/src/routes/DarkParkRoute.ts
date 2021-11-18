import express from 'express';
import { getClient } from '../db';
import DarkPark from "../models/DarkPark";
import { Comments } from "../models/DarkPark";
import { ObjectId } from 'bson';


const routes = express.Router();

routes.get("/darkparks", async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection("darkparks").find().toArray();
        res.json(results);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: "Internal server error"});
    }
})

routes.put(`/darkparks/addcomment/:id`, async (req, res) => {
    const newComment: Comments = {
        rating: req.body.rating,
        comment: req.body.comment,
<<<<<<< HEAD
        userName: req.body.userName, 
=======
        userName: req.body.userName,
>>>>>>> 29331b807931ad0eb6e4056f97e907824e4410ea
        photoURL: req.body.photoURL
    }
    const id = req.params.id;
    // delete newComment.id

    try {
        const client = await getClient();
        await client.db()
        //adding comments from user to change/edit our database for there needs
        //uses array called comments to view the comments 
        .collection<DarkPark>('darkparks')
        .updateOne({_id: new ObjectId(id)}, {$push: {comments: newComment}});
        res.status(200).json(newComment)
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: "Internal Service Error."})
    }
})


export default routes;