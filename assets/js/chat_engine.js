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
  }
}
