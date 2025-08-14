// src/pages/Contacts.jsx
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { listContacts } from "../services/contacts";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);

  // Load contacts from Firestore, already ordered by lastName in listContacts()
  useEffect(() => {
    let live = true;
    listContacts().then(items => {
      if (live) {
        setContacts(items);
        setLoading(false);
      }
    });
    return () => { live = false; };
  }, []);

  // Client side filter by first and last name
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return contacts;
    return contacts.filter(c =>
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(term)
    );
  }, [q, contacts]);

  if (loading) return <p className="muted">Loading…</p>;

  return (
    <div>
      <div className="toolbar">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search by name"
          aria-label="Search contacts"
        />
        <Link className="btn primary" to="/new">Add contact</Link>
      </div>

      <ul className="list">
        {filtered.map(c => (
          <li key={c.id} className="card">
            <Link to={`/contacts/${c.id}`}>
              <strong>{c.lastName}, {c.firstName}</strong>
              <div className="muted">{c.email}</div>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && <p className="muted">No matches.</p>}
    </div>
  );
}
