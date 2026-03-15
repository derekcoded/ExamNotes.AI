# ExamNotes AI 📚🤖

**ExamNotes AI** is an AI-powered study assistant that generates **structured, exam-focused notes instantly** from any topic.
Students can generate revision-ready notes, include diagrams/charts, download PDFs, and manage their notes history — all powered by AI.

The platform also includes a **credit-based system with online payments** for premium usage.

---
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React (Vite)](https://img.shields.io/badge/React_Vite-20232A?style=flat&logo=react&logoColor=61DAFB)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)]()
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)]()
[![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=flat&logo=razorpay&logoColor=white)]()


# 🌐 Live Demo

🚀 Try the application here:
    URL: https://examnotes-aiclient2.onrender.com

    ---

# ✨ Features

### 🤖 AI-Powered Notes Generation

* Generate **exam-focused notes instantly**
* Supports **topic-based learning**
* Structured output optimized for **quick revision**

### 🎯 Smart Study Options

* Exam revision mode
* Include diagrams
* Include charts
* Custom exam type (CBSE, JEE, NEET, etc.)
* Class/level specific notes

### 💳 Credit-Based System

* Users receive credits
* Each note generation consumes credits
* Credits can be purchased via payment gateway

### 📄 PDF Export

* Download generated notes as **high-quality PDFs**

### 📚 Notes History

* View previously generated notes
* Access them anytime

### 🔐 Authentication

* Secure login & signup
* HTTP-only cookie authentication
* Protected routes

### ⚡ Fast UI

* Smooth animations
* Real-time generation progress
* Modern responsive UI

---

# 🛠️ Tech Stack

### Frontend

* React
* Redux Toolkit
* React Router
* Axios
* Motion / Framer Motion
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### AI Integration

* Google Gemini API

### Payments

* Razorpay

### Deployment

* Frontend: Render
* Backend: Render
* Database: MongoDB Atlas

---

# 📂 Project Structure

```
ExamNotes.AI
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── services
│   │   └── App.jsx
│
├── server
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── utils
│   └── index.js
│
└── README.md
```

---

# ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/ExamNotes.AI.git
cd ExamNotes.AI
```

---

### 2️⃣ Install dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

Example:

```
PORT=8000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

NODE_ENV=production
```

---

# ▶️ Running the Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

---

# 🚀 Deployment

The project is deployed using:

* Frontend → Render
* Backend → Render
* Database → MongoDB Atlas

Steps:

1. Deploy backend on Render
2. Set environment variables
3. Deploy frontend
4. Update API base URL in frontend

Example:

```javascript
export const serverUrl = "https://your-backend.onrender.com"
```

---

# 🔐 Authentication

Authentication is handled using **JWT stored in HTTP-only cookies**.

Cookie configuration:

* httpOnly
* secure (production)
* sameSite: None
* 7-day expiration

This ensures **secure cross-origin authentication**.

---

# 💳 Payments

Payments are handled via **Razorpay**.

Flow:

1. User selects credit plan
2. Razorpay order is created on backend
3. User completes payment
4. Backend verifies payment
5. Credits are added to user account

---


# 🧠 Future Improvements

* AI quiz generation
* Flashcards
* Multi-language notes
* Voice input
* Collaborative study rooms

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork the repository
2. Create a new branch
3. Make changes
4. Submit a pull request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Alok Singh**

AI Developer | Full Stack Developer

---

# ⭐ Support

If you like this project, please **give it a star ⭐ on GitHub**.

It helps others discover the project.
