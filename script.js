
function sendEmail() {
  var receiverEmail = document.getElementById('receiverEmail').value;
  var message = document.getElementById('message').value;

  // This is where you would make a server request to send the email
  // You need a server-side language to handle email sending, e.g., Node.js, PHP

  // For demonstration purposes, log the details to the console
  console.log('Email sent to:', receiverEmail);
  console.log('Message:', message);

  // You can also add a confirmation message to the user
  alert('Email sent successfully!');
}
