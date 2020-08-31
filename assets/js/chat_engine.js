class ChatEngine {
  constructor(chatBoxId, userEmail) {
    this.chatBox = $(`#${chatBoxId}`);
    this.userEmail = userEmail;

    this.socket = io.connect("http://localhost:5000"); // io variable given by library

    if (this.userEmail) {
      this.connectionHandler();
    }
  }

  // will have to and fro connection with observer and subscriber
  connectionHandler() {
    let self = this;

    this.socket.on("connect", function () {
      console.log("connection established using sockets");

      self.socket.emit("join_room", {
        user_email: self.userEmail,
        chatroom: "codeial",
      });

      self.socket.on("user_joined", function (data) {
        console.log("user joined", data);
      });
    });

    // CHANGE :: send a message on clicking the send message button
    $("#send-message").click(function () {
      let msg = $("#chat-message-input").val();

      if (msg != "") {
        self.socket.emit("send_message", {
          message: msg,
          user_email: self.userEmail,
          chatroom: "codeial",
        });
      }
    });

    self.socket.on("receive_message", function (data) {
      console.log("message received", data.message);

      let newMessage = $("<li>");

      let messageType = "other-message";

      if (data.user_email == self.userEmail) {
        messageType = "self-message";
      }

      newMessage.append(
        $("<span>", {
          html: data.message,
        })
      );

      newMessage.append($("<br>"));

      newMessage.append(
        $("<sub>", {
          html: data.user_email,
        })
      );

      newMessage.addClass(messageType);

      $("#chat-messages-list").append(newMessage);
    });
  }
}
