function validateForm() {
    const title = document.forms['upload-form']['title'].value;
    if (title.length < 5) {
      alert('The "Title" field must be at least 5 characters long.');
      return false;
    }
  }
  const express = require('express');
  const app = express();
  const nodemailer = require('nodemailer');
  const multer = require('multer');
  const upload = multer();
  
  app.post('/send-email', upload.array('fileToUpload', 12), (req, res) => {
    const { title, description } = req.body;
    const attachments = req.files.map(file => ({
      filename: file.originalname,
      content: file.buffer
    }));
  
    // Set up the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'you@gmail.com',
        pass: 'your-password'
      }
    });
  
    // Send the email
    transporter.sendMail({
      from: 'you@gmail.com',
      to: 'recipient@example.com',
      subject: title,
      text: description,
      attachments
    }, (error, info) => {
      if (error) {
        console.log(error);
        res.send('Error occurred');
        return process.exit(1);
      }
  
      console.log('Message sent: %s', info.messageId);
      res.send('Email has been sent');
    });
  });
  
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  }); 


    <button onclick="changeBackground()">Change Background</button>
  

      function changeBackground() {
        var newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = newColor;
      }

  // Get form element
  const form = document.getElementById('feedback-form');
  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Check if all required fields are filled out
    let isValid = true;
    for (const input of form.elements) {
      if (input.hasAttribute('required') && !input.value) {
        isValid = false;
      }
    }

    // If all required fields are filled out, send form data to server
    if (isValid) {
      // Get form data
      const formData = new FormData(form);

      // Send form data to server
      fetch('/submit-feedback.php', {
        method: 'POST',
        body: formData
      })
        .then((response) => {
          // Do something with the response here
        });
    }
  });

  function validateForm() {
    const title = document.forms['upload-form']['title'].value;
    if (title.length < 5) {
      alert('The "Title" field must be at least 5 characters long.');
      return false;
    }
  }




