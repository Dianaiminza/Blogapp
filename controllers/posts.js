
var Post =require("../models/posts.js");
var express =require ('express');
var router=express.Router();
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

router.get("/:id", async (req, res) => {
  const { id: _id } = req.params;
  const post = await Post.findById({ _id });
  if (post) {
    res.send(post);
  } else {
    res.status(404).send("Blog Not Found.")
  }
});

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
});

router.patch("/:id",async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
 const { id: _id } = req.params;
  try {
    const deletedPost = await Post.findByIdAndRemove(_id);
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
});
