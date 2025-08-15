# 🚀 React + Tailwind Portfolio

A personal portfolio website built with **React** and **Tailwind CSS**.  
It showcases **projects**, **skills**, and **contact information** in a responsive and interactive design.

---

## ✨ Features

- ✅ Fully responsive design using Tailwind CSS
- ✅ Dark/light mode with conditional styling
- ✅ Animated sections using AOS (Animate On Scroll)
- ✅ Interactive 3D model component using `react-three/fiber` or `modelviewer`
- ✅ Contact form integrated with FormSubmit.co
- ✅ Smooth scrolling and transitions
- ✅ Projects section with “Show More” toggle

---

## 🔧 Technologies Used

- **React** – Component-based user interface
- **Vite** – Fast development server and build tool
- **Tailwind CSS** – Utility-first CSS framework
- **AOS** – Scroll animations
- **Remix Icon** – Icon library
- **FormSubmit.co** – Form handling without backend
- **react-three/fiber** or **modelviewer** – 3D model rendering

---

## 🗂 Project Structure

src/
├─ Components/ # Reusable components (Navbar, Footer, Lanyard, PreLoader)
├─ data.js # Project and tool data
├─ App.jsx # Main App component
├─ main.jsx # Entry point, renders App inside ThemeProvider
├─ index.css # Tailwind CSS and custom styles

yaml
Copy
Edit

---

## ⚡ Installation

**Clone the repository:**

```bash
git clone <repo-url>
cd <repo-folder>
Install dependencies:

---

npm install
Start the development server:


npm run dev
Open http://localhost:5173 in your browser.

🌗 Tailwind & Dark Mode
Conditional styling in React for dark/light mode

Backgrounds, text, and cards adjust according to the theme

AOS animations refresh automatically when the theme changes to prevent disappearing elements

🚀 Deployment
Build for production:



npm run build
Preview production build locally:


npm run preview
Deploy to Vercel, Netlify, or GitHub Pages.

🛠 Customization
Add/remove projects in data.js

Update skills/tools in data.js

Customize 3D model in Components/Lanyard/Lanyard.jsx

📄 License
Open-source and free to use for learning or personal portfolio purposes.
```
