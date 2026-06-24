#  QSkill Task 3 — Client Side Routing

> Internship task submission completed as part of the **QSkill Frontend Development Internship**.

A React application demonstrating client side routing using **react-router-dom**, where multiple pages can be navigated without any full browser refresh.

---

## Live Demo

https://q-skill-task-3-client-side-routing.vercel.app/

---

## Task Preview

<img src="./Screenshot.png" alt="App Screenshot" width="500"/>
<img src="./Screenshot2.png" alt="App Screenshot" width="500"/>
<img src="./Screenshot3.png" alt="App Screenshot" width="500"/>


---

## Task Description

> Create client side routing using **react-router-dom**.

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Component-based UI |
| **react-router-dom** | Client side routing between multiple pages |
| **Vite** | Fast development server and build tool |

---

##  Features

- Multiple pages — Home, About, Users — navigable without any page reload
- Active link highlighting using `NavLink`
- Dynamic user profile pages using route parameters (`/users/:id`)
- Programmatic navigation using `useNavigate`
- Automatic 404 redirect for unknown routes using a wildcard `*` route

---

##  How It Works — Routing Breakdown

**`BrowserRouter`**
Wraps the entire app in `main.jsx` to enable routing throughout the component tree.

**`Routes` and `Route`**
Define which component renders for each URL path. Each `Route` maps a path to a page component.

**`NavLink`**
Used in the navbar — automatically applies active styling to the link matching the current URL, so the user always knows which page they're on.

**`useNavigate`**
Allows programmatic navigation — for example, clicking a user card navigates to that user's profile page without needing an anchor tag.

**`useParams`**
Reads dynamic segments from the URL. For `/users/1`, `useParams()` returns `{ id: "1" }`, which is used to look up and display the correct user's profile.

**`Navigate`**
Used to redirect — any unknown URL hits the `*` wildcard route and gets redirected to the 404 page automatically.

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/users" element={<Users />} />
  <Route path="/users/:id" element={<UserProfile />} />
  <Route path="/404" element={<NotFound />} />
  <Route path="*" element={<Navigate to="/404" replace />} />
</Routes>
```

---

##  Folder Structure

```
task3-router/
├── public/                  → static assets served directly
├── src/
│   ├── assets/               → images used inside components
│   ├── App.jsx                → all routes and page components
│   ├── App.css                → component-level styles
│   ├── main.jsx                → entry point, wraps App with BrowserRouter
│   └── index.css                → global styles
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

##  How to Run Locally

Clone or download the repository, then run:

```bash
npm install
npm run dev
```

Then open the app in your browser at:
```
http://localhost:5173
```
---

##  Author

**Stuti Rai**  
Frontend Development Intern — QSkill
- GitHub: [github.com/stutirai](https://github.com/stutirai)

---

## 📌 Note

This project was built as part of an internship task to demonstrate practical understanding of client side routing in React using react-router-dom, including static routes, dynamic routes, active link styling, programmatic navigation, and 404 handling.
