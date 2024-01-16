document.getElementById('btn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'admin' && password === 'adminpass') {
      // Successful login
      window.location.href = 'test.html'; // Redirect to test.html
    } else {
      // Handle incorrect username or password
      var output = document.createElement('output');
      output.textContent = "Incorrect username or password"; // Set the content of the output element
      document.body.appendChild(output); // Append the output element to the document
    }
  });