import { Routes, Route, NavLink, useNavigate, useParams, Navigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{textAlign:"center",padding:"60px 20px"}}>
      <h2 style={{fontSize:"32px",color:"white",marginBottom:"16px"}}>🏠 Home</h2>
      <p style={{color:"#9ca3af",marginBottom:"24px"}}>Welcome to the Home page!</p>
      <button onClick={() => navigate("/about")}
        style={{background:"#7c3aed",color:"white",border:"none",padding:"10px 24px",borderRadius:"10px",cursor:"pointer",fontSize:"14px"}}>
        Go to About →
      </button>
    </div>
  );
}

function About() {
  return (
    <div style={{textAlign:"center",padding:"60px 20px"}}>
      <h2 style={{fontSize:"32px",color:"white",marginBottom:"16px"}}>ℹ️ About</h2>
      <p style={{color:"#9ca3af"}}>This app uses react-router-dom for client side routing.</p>
    </div>
  );
}

const USERS = [
  { id: 1, name: "Alice", role: "Engineer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Carol", role: "Manager" },
];

function Users() {
  const navigate = useNavigate();
  return (
    <div style={{padding:"40px 20px",maxWidth:"400px",margin:"0 auto"}}>
      <h2 style={{fontSize:"28px",color:"white",marginBottom:"16px",textAlign:"center"}}>👥 Users</h2>
      {USERS.map((u) => (
        <div key={u.id} onClick={() => navigate(`/users/${u.id}`)}
          style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"12px",padding:"16px",marginBottom:"10px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <p style={{color:"white",margin:0,fontWeight:"bold"}}>{u.name}</p>
            <p style={{color:"#9ca3af",margin:0,fontSize:"13px"}}>{u.role}</p>
          </div>
          <span style={{color:"#9ca3af",fontSize:"20px"}}>›</span>
        </div>
      ))}
    </div>
  );
}

function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = USERS.find((u) => u.id === Number(id));
  if (!user) return <Navigate to="/404" replace />;
  return (
    <div style={{textAlign:"center",padding:"60px 20px"}}>
      <div style={{width:"70px",height:"70px",borderRadius:"50%",background:"#7c3aed",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",fontWeight:"bold",color:"white",margin:"0 auto 16px"}}>
        {user.name[0]}
      </div>
      <h2 style={{color:"white",fontSize:"24px",margin:"0 0 8px"}}>{user.name}</h2>
      <p style={{color:"#7c3aed",marginBottom:"24px"}}>{user.role}</p>
      <button onClick={() => navigate("/users")}
        style={{background:"none",border:"none",color:"#9ca3af",cursor:"pointer",fontSize:"14px"}}>
        ← Back to Users
      </button>
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{textAlign:"center",padding:"60px 20px"}}>
      <h2 style={{fontSize:"48px",color:"white",margin:"0 0 16px"}}>404</h2>
      <p style={{color:"#9ca3af",marginBottom:"24px"}}>Page not found!</p>
      <button onClick={() => navigate("/")}
        style={{background:"#7c3aed",color:"white",border:"none",padding:"10px 24px",borderRadius:"10px",cursor:"pointer"}}>
        Go Home
      </button>
    </div>
  );
}

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/users", label: "Users" },
];

export default function App() {
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",fontFamily:"sans-serif"}}>
      <header style={{background:"#1e293b",borderBottom:"1px solid #334155",padding:"12px 24px",display:"flex",gap:"8px",alignItems:"center"}}>
        <span style={{color:"#7c3aed",fontWeight:"bold",marginRight:"16px"}}>RouterDemo</span>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink key={to} to={to} end={to === "/"}
            style={({ isActive }) => ({
              padding:"6px 16px",borderRadius:"8px",textDecoration:"none",fontSize:"14px",fontWeight:"500",
              background: isActive ? "#7c3aed" : "transparent",
              color: isActive ? "white" : "#9ca3af",
            })}>
            {label}
          </NavLink>
        ))}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}