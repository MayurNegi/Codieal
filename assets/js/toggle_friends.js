{
  let toggleFriends = function () {
    let friendsHandler = $("#friends-handler");

    console.log(friendsHandler);

    friendsHandler.submit(function (e) {
      e.preventDefault();

      $.ajax({
        type: "POST",
        url: friendsHandler.attr("href"),
        success: function (data) {
          console.log(data);
        },
        error: function (err) {
          console.log(err.responseText);
        },
      });
    });
  };

  toggleFriends();
}
