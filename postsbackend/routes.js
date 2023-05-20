const express = require('express');
const router = express.Router();
const Post = require('./posts');

router.get('/posts', async(req, res) => {
    const allPosts = await Post.find();
    if(!allPosts) {
        res.status(404).json({message: 'No posts found'});
    } else {
        res.send(allPosts);
    }
});

router.post('/post', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        location: req.body.location,
        image_id: req.body.image_id
    });
    await post.save()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({message: error});
        });
});


module.exports = router;