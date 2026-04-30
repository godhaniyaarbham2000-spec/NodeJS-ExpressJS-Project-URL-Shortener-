# 🔗 URL Shortener (Node.js + Express.js)

A simple and fast URL Shortener web application built using **Node.js, Express.js, EJS, and File System (JSON storage)**.  
It allows users to shorten long URLs with custom short codes and redirect using generated links.

---

## 🚀 Features

- 🔗 Shorten long URLs instantly  
- ✏️ Custom short code support  
- 📄 Stores data in JSON file (no database required)  
- ⚡ Fast redirection system  
- 🧾 Shows last 3 shortened URLs  
- 🎨 Clean and responsive UI  
- 📱 Mobile-friendly design  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- EJS (Template Engine)  
- HTML, CSS, JavaScript  
- File System (fs module for storage)

---

## 📁 Project Structure
```
url-shortener/
│
├── controllers/
│ └── postshortener.controller.js
│
├── models/
│ └── shortener.model.js
│
├── router/
│ └── shortener.routes.js
│
├── views/
│ └── index.ejs
│
├── public/
│ └── style.css
│
├── app.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone repository
```
git clone https://github.com/your-username/url-shortener.git
```
2. Go to project folder
```
cd url-shortener
```
3. Install dependencies
```
npm install
```
4. Run project
```
npm run dev
```
5. Open in browser
```
http://localhost:3007
```
