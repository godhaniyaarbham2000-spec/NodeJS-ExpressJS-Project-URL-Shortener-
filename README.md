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
NodeJS-ExpressJS-Project-URL-Shortener-WebApp/
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
├── data/
│ └── links.json
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
git clone https://github.com/godhaniyaarbham2000-spec/NodeJS-ExpressJS-Project-URL-Shortener-WebApp.git
```
### 2. Go to project folder
```
cd NodeJS-ExpressJS-Project-URL-Shortener-WebApp
```

### 3. Install dependencies
```
npm install
```
### 4. Run Project
```
npm run dev
```
### 5. Open In Browser
```
http://localhost:3007
```
---

## 💡 Usage

- Enter a long URL in the input field  
- Click on "Generate Short URL"  
- System will create a unique short code  
- Copy and use the generated short link  
- Open short URL → it will redirect to original URL  

---

## 🧠 How It Works

1. User submits a long URL  
2. Server generates a unique short ID  
3. Data is stored inside `data/links.json`  
4. When short URL is hit:
   - Server reads JSON file  
   - Finds original URL  
   - Redirects user instantly  

---

## 📌 API Flow (Basic Logic)

- `POST /shorten` → Create short URL  
- `GET /:shortId` → Redirect to original URL  

---

## 📸 UI Preview

- Simple input box for URL  
- Button to generate short link  
- List of recently created links  
- Clickable short URLs  

---

## ⚠️ Notes

- No database used (File System based storage)  
- Data is stored in `links.json`  
- Suitable for learning backend basics  
- Not production scalable (for learning purpose only)  

---

## 📌 Future Improvements

- 🗄️ MongoDB / Database integration  
- 👤 User authentication system  
- 📊 Analytics (click tracking)  
- ⏳ Expiry time for links  
- 🌐 Custom domain support  
- 🔒 Validation & security improvements  

---

## 👨‍💻 Author

**Arbham Godhaniya**  
MERN Stack Developer 🚀
