import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { getContact, updateContact } from "../services/contacts";

export default function EditContact() {
  const { id } = useParams();
  const nav = useNavigate();
  const [initial, setInitial] = useState(null);

  useEffect(() => { getContact(id).then(setInitial); }, [id]);
  if (!initial) return <p style={{padding:16}}>Loading…</p>;

  async function onSubmit(data) {
    await updateContact(id, data);
    nav(`/contacts/${id}`);
  }

  return (
    <div className="card">
      <h2>Edit Contact</h2>
      <ContactForm initialValues={initial} onSubmit={onSubmit} />
    </div>
  );
}
