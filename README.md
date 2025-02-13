# 🚀 Markdown Editor Backend

This is the backend API for the **Markdown Editor**. It provides an endpoint to convert **Markdown to HTML** using `marked.js` and is built with **Node.js**, **Express**, and **Worker Threads**.

---

## 📌 Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** – [Download Here](https://nodejs.org/)
- **npm** (Node Package Manager) – Comes with Node.js

---

## 📂 1. Clone the Repository
If this project is hosted on GitHub, clone it using:
```sh
git clone https://github.com/Abhijeet259/markdownConverterBackend.git
cd markdownConverterBackend
```


## 📦 2. Install Dependencies
Navigate to the backend folder and install all required dependencies:

```sh
npm install
```
This installs the necessary Node.js modules required for the project.

## 📝 3. Environment Configuration (Optional)
If needed, create a .env file in the root directory to store configuration variables.

Example .env file:

env
```sh
PORT=8000
```

## 🚀 4. Start the Server
To start the backend server, run:

```sh
node server.js
```
or, if using nodemon for automatic restarts:

```sh
npm start
```

## 🛠 5. Check if the Server is Running
A test route is available at / to check if the server is running.

Modify server.js to include this route:

javascript
```sh
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});
```
To test the server, open your browser or use Postman and visit:

```sh
http://localhost:8000/
```
✅ Expected Response:

```sh
✅ Server is running!
```

## 🎯 Conclusion
The backend is now set up and running on http://localhost:8000/.
You can test API endpoints using Postman or a browser.