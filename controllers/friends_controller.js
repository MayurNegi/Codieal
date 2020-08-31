const User = require("../models/friendship");
const Friendship = require("../models/friendship");

module.exports.toggleFriendship = async (req, res) => {
  try {
    // /friends/toggle/ friends's id

    // check if existing friend

    let value = false; // false means not added
    let user = await User.findById(req.user._id);

    let existingFriend = Friendship.findOne({
      from_user: req.user._id,
      to_user: req.query.id,
    });

    if (existingFriend) {
      user.friendships.pull(existingFriend);
      user.friendships.save();

      existingFriend.remove();

      value = true;
    } else {
      // make new friendship
      let createFriendship = await Friendship.create({
        from_user: req.user._id,
        to_user: req.query.id,
      });

      // add friendships to respective user

      user.friendships.push(createFriendship);
      user.friendships.save();

      createFriendship.save();
    }

    return res.status(200).json({
      message: "friend added",
      data: {
        value: value,
      },
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
