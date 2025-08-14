import { useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { createContact } from "../services/contacts";

export default function NewContact() {
  const nav = useNavigate();
  async function onSubmit(data) {
    const id = await createContact(data);
    nav(`/contacts/${id}`);
  }
  return (
    <div className="card">
      <h2>New Contact</h2>
      <ContactForm onSubmit={onSubmit} />
    </div>
  );
}
