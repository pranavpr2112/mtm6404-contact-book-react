import { Link, Routes, Route, Navigate } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";
import NewContact from "./pages/NewContact";
import EditContact from "./pages/EditContact";

export default function App() {
  return (
    <div className="app">
      <header className="container">
        <h1>Contact Book</h1>
        <nav>
          <Link to="/">Contacts</Link>
          <Link to="/new">New</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/contacts/:id" element={<Contact />} />
          <Route path="/contacts/:id/edit" element={<EditContact />} />
          <Route path="/new" element={<NewContact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
