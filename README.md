# 🌐 My Portfolio

![Portfolio screenshot](./src/assets/portfolio-screenshot.png)

**Custom Domain:** [marinescumv.ro](marinescumv.ro)

A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS—showcasing my projects and skills, deployed via GitHub Pages.

---

## 🗂️ Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Running Locally](#running-locally)  
5. [Build & Deploy](#build--deploy)  
6. [Project Structure](#project-structure)  
7. [Custom Domain](#custom-domain)  
8. [License](#license)  

---

## 🔍 Overview

This portfolio is designed to be:

- **Component-driven:** built with React and Vite for fast iteration.  
- **Utility-first styling:** using Tailwind CSS for a sleek, maintainable design.  
- **Mobile-first & responsive:** layouts adapt gracefully from phones to wide screens.  
- **Easy to extend:** modular data and components let me add new projects with minimal code.

---

## ✨ Features

- **Dark, professional theme** with hover and focus states  
- **Sticky navbar** with “Made using” icons linking to React, Tailwind, and Vite  
- **Animated Hero** text entrance via Framer Motion  
- **Responsive Project Cards** with 16:9 thumbnails, equal-height layout, and view buttons  
- **Swipeable mobile gallery** and grid layouts on larger screens  
- **Easy deployment** to GitHub Pages (with custom domain support)  

---

## 🛠️ Tech Stack

- **Framework & Bundler:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (+ Typography plugin)  
- **Animations:** [Framer Motion](https://www.framer.com/motion/)  
- **Icons:** [React Icons](https://react-icons.github.io/) (Heroicons pack)  
- **Deployment:** [gh-pages](https://github.com/tschaub/gh-pages) → GitHub Pages  
- **Version Control:** Git & GitHub (Conventional Commits)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or later  
- **npm** (comes with Node.js)  
- A terminal/command shell

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/username/portfolio-v2.git
   cd portfolio-v2
2. **Install dependencies**
   ```bash
   npm install
3. **Running Locally**

Start the Vite dev server with hot-reload:
   ```bash
   npm run dev
   ```
Open your browser at http://localhost:5173 to view the site. Any saved changes will reload automatically.

---

## 🌐 Custom Domain

    Ensure public/CNAME contains your domain:

www.yourdomain.com

Update DNS records at your registrar:

- A @   → 185.199.108.153
- A @   → 185.199.109.153
- A @   → 185.199.110.153
- A @   → 185.199.111.153
- CNAME www → username.github.io.

Deploy (npm run deploy) and confirm under GitHub → Settings → Pages.

---

## 📄 License

This project is licensed under the MIT License.
Feel free to browse, fork, and learn!

