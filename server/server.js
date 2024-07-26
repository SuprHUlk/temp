const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const smtpTransport = nodemailer.createTransport({
  service: "Gmail", // You can use other services like 'Yahoo', 'Outlook', etc.
  auth: {
    user: "ayush123kumar.ak@gmail.com",
    pass: "oosr krkq zald roem",
  },
});

app.post("/send", (req, res) => {
  console.log(req.body);
  const mailOptions = {
    from: req.body.email,
    replyTo: req.body.email,
    to: "ayush123kumar.ak@gmail.com",
    subject: `Contact Us Form: ${req.body.subject}`,
    text: req.body.message,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      console.log("Email sent: " + response.response);
      res.status(200).send({ message: "Email sent successfully" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
