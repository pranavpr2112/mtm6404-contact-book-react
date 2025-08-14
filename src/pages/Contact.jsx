import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getContact, deleteContact } from "../services/contacts";

export default function Contact() {
  const { id } = useParams();
  const nav = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => { getContact(id).then(setContact); }, [id]);
  if (!contact) return <p style={{padding:16}}>Loading…</p>;

  async function onDelete() {
    if (confirm("Delete this contact?")) {
      await deleteContact(id);
      nav("/");
    }
  }

  return (
    <div className="card">
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p><b>Email:</b> {contact.email}</p>
      {contact.phone && <p><b>Phone:</b> {contact.phone}</p>}
      {contact.notes && <p><b>Notes:</b> {contact.notes}</p>}
      <div className="row">
        <Link className="btn" to={`/contacts/${id}/edit`}>Edit</Link>
        <button className="btn danger" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
