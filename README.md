# QR_CODE-GENERATOR
The QR Code Generator project is a web application designed to facilitate the quick and effortless creation of QR codes from user-provided text or URLs. Developed using a combination of HTML, CSS, and JavaScript, this application offers a user-friendly interface that streamlines the QR code generation process. The primary goal of this project is to empower users to convert any arbitrary text or URL into a scannable QR code, enhancing accessibility and convenience in sharing information.
<br/>
<br/>
<img src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png" width="180" height="180">
<br/>
<h2>Explanation:</h2>
<p>JavaScript Logic (script.js):</p>
<ul>
  <li><code>const wrapper = document.querySelector(".wrapper")</code>: Selects the main content wrapper.</li>
  <li><code>const formInput = wrapper.querySelector(".form input")</code>: Selects the input field.</li>
  <li><code>const generateBtn = wrapper.querySelector(".form buton")</code>: Selects the generate button.</li>
  <li><code>const qrImg = wrapper.querySelector(".qr-code img")</code>: Selects the image tag where the QR code will be displayed.</li>
  <li><code>let preValue</code>: Holds the previous value of the input.</li>
</ul>
<p>Event Listeners:</p>
<ul>
  <li><code>generateBtn.addEventListener("click", () => {...})</code>: Listens for a click on the generate button.</li>
  <li>It checks if the input value is not empty and is different from the previous value.</li>
  <li>Updates preValue and changes the button text to indicate QR code generation.</li>
  <li>Dynamically sets the src attribute of the qrImg to the QR code generated from the entered value using an API.</li>
  <li>Adds a load event listener to the qrImg to handle the completion of image loading.</li>
  <li>Updates the UI by adding the “active” class and resetting the button text.</li>
</ul>
<ul>
  <li><code>formInput.addEventListener("keyup", () => {...})</code>: Listens for keyup events in the input field.</li>
  <li>If the input field is empty, removes the “active” class and resets preValue.</li>
</ul>
<br/>
<p>Purpose of Functions:</p>
<p><strong>Generate QR Code Function:</strong></p>
<ul>
  <li><strong>Purpose:</strong> To generate the QR code when the button is clicked.</li>
  <li><strong>Steps:</strong></li>
  <li>Get the trimmed value from the input.</li>
  <li>Check if the value is not empty and has changed.</li>
  <li>Update preValue to the current value.</li>
  <li>Change the button text to indicate QR code generation.</li>
  <li>Set the src attribute of qrImg to the generated QR code.</li>
  <li>Add a load event listener to handle UI updates after image loading.</li>
</ul>
<p><strong>Keyup Event Listener Function:</strong></p>
<ul>
  <li><strong>Purpose:</strong> To reset the UI when the input field is empty.</li>
  <li><strong>Steps:</strong></li>
  <li>Check if the input field is empty.</li>
  <li>If empty, remove the “active” class and reset preValue.</li>
</ul>
