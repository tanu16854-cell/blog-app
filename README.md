# Blog App

A simple and responsive Blog application built using React and Next.js.
This project was created as part of my internship learning and practice.

## Features

* Create a new blog post
* Edit existing blog posts
* Update blog posts
* Delete blog posts
* Display all blog posts
* Form validation for title and description
* Posts are saved in the browser using LocalStorage
* Responsive and clean user interface
* Styled using Tailwind CSS

## Technologies Used

* React
* Next.js
* TypeScript
* Tailwind CSS
* JavaScript
* HTML
* LocalStorage
* Git & GitHub

## React Concepts Used

* `useState` – used to manage posts, title, description, and editing state
* `useEffect` – used to save and load posts from LocalStorage
* `map()` – used to display blog posts
* `filter()` – used to delete a post
* Controlled components – used for the title and description inputs

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tanu16854-cell/blog-app.git
```

### 2. Open the project

```bash
cd blog-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project Structure

```text
blog-app/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

## Learning Purpose

This project helped me practice React state management, React Hooks, form handling, CRUD operations, LocalStorage, and Next.js fundamentals.
