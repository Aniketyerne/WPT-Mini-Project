import { useState, useRef } from "react";

function ContactUs() {
  let formRef = useRef();
  let [sucessBox, setSuccessBox] = useState(false);
  let [contact, setContact] = useState({ name: "", email: "", message: "" });

  let handleChnageNameAction = (e) => {
    let newTodo = { ...contact, name: e.target.value };
    setContact(newTodo);
  };

  let handleChangeEmailAction = (e) => {
    let newTodo = { ...contact, email: e.target.value };
    setContact(newTodo);
  };

  let handleChangeMessageAction = (e) => {
    // console.log(e.target);
    let newTodo = { ...contact, message: e.target.value };
    setContact(newTodo);
  };

  let addContactAction = async () => {
    console.log(contact);
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      alert();
      return;
    }

    let url = `http://localhost:4000/addcontact?name=${contact.name}&email=${contact.email}&message=${contact.message}`;
    await fetch(url);

    // clear the box
    let newtodo = { name: "", email: "", message: "" };
    setContact(newtodo);

    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000);

    formRef.current.classList.remove("was-validated");
  };

  return (
    <>
      <div className="row d-flex align-items-center justify-content-center vh-100">
        <div
          className="col-sm-12 col-md-6 bg-dark-subtle my-auto p-4"
          style={{
            borderRadius: "18px",
            boxShadow: "5px 5px 5px 0.15px, 5px 5px 5px 0.15px",
          }}
        >
          <div className="fs-2" style={{ textAlign: "center" }}>
            To Contact Us!
          </div>

          <form ref={formRef} className="needs-validation">
            <input
              type="text"
              className="form-control form-control-lg mb-2 "
              placeholder="Name"
              value={contact.name}
              onChange={handleChnageNameAction}
              required
            />

            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Email"
              value={contact.email}
              onChange={handleChangeEmailAction}
              required
            />

            <textarea
              className="form-control form-control-lg mb-2"
              cols="30"
              rows="4"
              placeholder="message"
              value={contact.message}
              onChange={handleChangeMessageAction}
              required
            ></textarea>

            <input
              type="button"
              value="Send"
              className="btn btn-lg btn-secondary"
              onClick={addContactAction}
            />
          </form>
          {sucessBox && (
            <div className="alert alert-success">Operation Success</div>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactUs;
