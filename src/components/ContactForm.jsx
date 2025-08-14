import { useState } from "react";
const EMPTY = { firstName: "", lastName: "", email: "", phone: "", notes: "" };

export default function ContactForm({ initialValues = EMPTY, onSubmit }) {
  const [form, setForm] = useState(initialValues);
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email) {
      alert("First name, last name, and email are required");
      return;
    }
    onSubmit({
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone?.trim() || "",
      notes: form.notes?.trim() || ""
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>First name<input value={form.firstName} onChange={e => set("firstName", e.target.value)} /></label>
      <label>Last name<input value={form.lastName} onChange={e => set("lastName", e.target.value)} /></label>
      <label>Email<input type="email" value={form.email} onChange={e => set("email", e.target.value)} /></label>
      <label>Phone<input value={form.phone} onChange={e => set("phone", e.target.value)} /></label>
      <label>Notes<textarea value={form.notes} onChange={e => set("notes", e.target.value)} /></label>
      <div className="row"><button className="btn" type="submit">Save</button></div>
    </form>
  );
}
