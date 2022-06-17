function sendEmail() {
  const userEmail = document.querySelector("#email").value;
  const userName = document.querySelector("#name").value;
  const userPhone = document.querySelector("#phone").value;
  const userMsg = document.querySelector("#message").value;

  Email.send({
    SecureToken: "cf713e50-584b-4cd3-b038-ab95b3a902b7",
    To: "contact@leonhochwimmer.com",
    From: userEmail,
    Subject: "New Contact Form Enquiry",
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
