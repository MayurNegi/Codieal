const nodeMailer = require("../config/nodemailer");
const { getMaxListeners } = require("../models/user");

// this is another way of exporting method
exports.newComment = (comment) => {
  let htmlString = nodeMailer.renderTemplate(
    { comment: comment },
    "/comments/new_comment.ejs"
  );

  console.log("inside newComment mailer", comment);

  nodeMailer.transporter.sendMail(
    {
      from: "mayurnegi1999@gmail.com",
      to: "mayurnegi1999@gmail.com", // comment.user.email,
      subject: "New Comment Published",
      html: htmlString,
    },
    (err, info) => {
      if (err) {
        console.log("error in sending mail", err);
        return;
      }

      console.log("Message sent/Delivered", info);
      return;
    }
  );
};
