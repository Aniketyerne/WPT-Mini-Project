import { useState, useRef } from "react";

function Feedback() {
  let formRef = useRef();
  let [sucessBox, setSuccessBox] = useState(false);
  let [todo, setTodo] = useState({ name: "", email: "" ,feedback: ""});

  let handleChnageNameAction = (e) => {
    let newTodo = { ...todo, name: e.target.value };
    setTodo(newTodo);
  };

  let handleChnageEmailAction = (e) => {
    let newTodo = { ...todo, email: e.target.value };
    setTodo(newTodo);
  };

  let handleChangeFeedbackAction = (e) => {
    // console.log(e.target);
    let newTodo = { ...todo, feedback: e.target.value };
    setTodo(newTodo);
  };

  let addTodoAction = async () => {
    console.log(todo);
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      alert();
      return;
    }

    let url = `http://localhost:4000/addtodo?name=${todo.name}&email=${todo.email}&feedback=${todo.feedback}`;
    await fetch(url);

    // clear the box
    let newtodo = { name: "",email: "", feedback: "" };
    setTodo(newtodo);

    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000);

    formRef.current.classList.remove("was-validated");
  };

  return (
    <>
      <div className="row d-flex align-items-center justify-content-center vh-100" >
        <div
          className="col-sm-12 col-md-6 bg-dark-subtle my-auto p-4"
          style={{ borderRadius: "18px", boxShadow: "5px 5px 5px 0.15px, 5px 5px 5px 0.15px"}}
        >
          <div className="fs-2" style={{ textAlign: "center" }}>
            Send us a Feedback!
          </div>

          <form ref={formRef} className="needs-validation">
            <input
              type="text"
              className="form-control form-control-lg mb-2 "
              placeholder="Name"
              value={todo.name}
              onChange={handleChnageNameAction}
              required
            />

            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Email"
              value={todo.email}
              onChange={handleChnageEmailAction}
              required
            />

            <textarea
              className="form-control form-control-lg mb-2"
              cols="30"
              rows="4"
              placeholder="Feedback"
              value={todo.feedback}
              onChange={handleChangeFeedbackAction}
              required
            ></textarea>

            <input
              type="button"
              value="Send"
              className="btn btn-lg btn-secondary"
              onClick={addTodoAction}
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

export default Feedback;
