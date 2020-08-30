const Like = require("../models/like");
const Post = require("../models/post");
const Comment = require("../models/comment");

module.exports.toggle = async function (req, res) {
  let likeable;
  let deleted = false;

  if (req.query.type == "POST") {
    likeable = await Post.findById(req.query._id).populate("likes");
  } else {
    likeable = await Comment.findById(req.query._id).populate("likes");
  }

  // check if a like is already made by user
  let existingLike = await Like.findOne({
    user: req.user,
    likeable: req.query.id,
    onModel: req.query.type,
  });

  // if user already like it
  if (existingLike) {
    likeable.likes.pull(existingLike._id);
    likeable.save();

    existingLike.remove();

    deleted = true;
  } else {
    // else make a like
    let newLike = await Like.create({
      user: req.user._id,
      likeable: req.query.id,
      onModel: req.query.type,
    });
    likeable.push(newLike._id);
    likeable.save();

    deleted = false;
  }

  return res.json(200, {
    data: {
      deleted: deleted,
    },
    message: "request successful",
  });
};
