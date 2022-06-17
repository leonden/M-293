function sendEmail() {
  const userEmail = document.querySelector("#email").value;
  const userName = document.querySelector("#name").value;
  const userPhone = document.querySelector("#phone").value;
  const userMsg = document.querySelector("#message").value;

  Email.send({
    SecureToken: "bd49c411-cb2b-42a9-bbc8-59f8e05a8b88",
    To: "contact@leonhochwimmer.com",
    From: userEmail,
    Subject: "Neue Kontaktanfrage von " + userName,
    Body:
      "Name: " +
      userName +
      "<br> Email: " +
      userEmail +
      "<br> Phone Number: " +
      userPhone +
      "<br> Message: " +
      userMsg,
  }).then((message) => alert(message));
}
