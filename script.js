const btn = document.querySelector("#btn");
btn.addEventListener("click", notification);

function notification() {
  switch (Notification.permission) {
    case "default":
      Notification.requestPermission();
      break;
    case "granted":
      new Notification("すぐるんちゃっとのメッセージ");
      break;
    case "denied":
      alert("通知が拒否されています");
      break;
  }
}
