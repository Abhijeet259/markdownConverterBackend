# 🚀 Markdown Editor Backend

This is the backend API for the **Markdown Editor**. It provides an endpoint to convert **Markdown to HTML** using `marked.js` and is built with **Node.js**, **Express**, and **Worker Threads**.


## 📂 1. Clone the Repository
If this project is hosted on GitHub, clone it using:
```sh
git clone https://github.com/Abhijeet259/markdownConverterBackend.git
cd markdownConverterBackend


📦 2. Install Dependencies
Navigate to the backend folder and install all required dependencies:

sh
Copy
Edit
npm install
This installs the necessary Node.js modules required for the project.

📝 3. Environment Configuration (Optional)
If needed, create a .env file in the root directory to store configuration variables.

Example .env file:

env
Copy
Edit
PORT=8000
🚀 4. Start the Server
To start the backend server, run:

sh
Copy
Edit
node server.js
or, if using nodemon for automatic restarts:

sh
Copy
Edit
npx nodemon server.js
🛠 5. Check if the Server is Running
A test route is available at / to check if the server is running.

Modify server.js to include this route:

javascript
Copy
Edit
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});
To test the server, open your browser or use Postman and visit:

arduino
Copy
Edit
http://localhost:8000/
✅ Expected Response:

json
Copy
Edit
✅ Server is running!
