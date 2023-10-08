var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const creds = require("./config");

var transport = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", async (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    replyTo: email,
    to: "angela.xu1709@gmail.com",
    subject: "New Message from Contact Form",
    html: `<p> ${content} </p>`,
  };

  try {
    let info = await transporter.sendMail(mail);
    console.log(info.messageId);
    res.json({
      status: "success",
    });
  } catch (err) {
    console.error("Error sending email:", err);
    res.json({
      status: "fail",
    });
  }
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
