import React, { useRef, useState } from "react";

const Forms = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [lang, setLang] = useState("");
  let [technology, setTechnology] = useState([]);

  let fname = useRef();
  let lname = useRef();

  const emailHandler = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };

  const langHandler = (e) => {
    setLang(e.target.value);
  };

  const techHandler = (e) => {
    //   [react]
    // [react, node]
    // [react, node, next]
    if (e.target.checked) {
      setTechnology([...technology, e.target.value]);
    } else {
      // [react, node, next, js]
      setTechnology(technology.filter((tech) => tech != e.target.value));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(fname.current.value, lname.current.value);

    // let user = {fname: fname.current.value, lastname: lname.current.value}
    // api
    // axios.post("api url", user).then().catch()
  };

  return (
    <div>
      <h1>Controlled Forms</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address - {email}
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={emailHandler}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password - {password}
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <h3>Select Language: {lang} </h3>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
            value="German"
            onChange={langHandler}
          />
          <label className="form-check-label" htmlFor="radioDefault1">
            German
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            value="French"
            onChange={langHandler}
          />
          <label className="form-check-label" htmlFor="radioDefault2">
            French
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault3"
            value="Spanish"
            onChange={langHandler}
          />
          <label className="form-check-label" htmlFor="radioDefault3">
            Spanish
          </label>
        </div>
        <h3>Select Technology: {technology}</h3>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="ReactJS"
            id="checkDefault"
            onChange={techHandler}
          />
          <label className="form-check-label" htmlFor="checkDefault">
            ReactJS
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="NodeJS"
            id="checkChecked"
            onChange={techHandler}
          />
          <label className="form-check-label" htmlFor="checkChecked">
            NodeJS
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="NextJS"
            id="checkChecked1"
            onChange={techHandler}
          />
          <label className="form-check-label" htmlFor="checkChecked1">
            NextJS
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Javascript"
            id="checkChecked2"
            onChange={techHandler}
          />
          <label className="form-check-label" htmlFor="checkChecked2">
            Javascript
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h1>UnControlled Forms</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail11" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail11"
            aria-describedby="emailHelp"
            ref={fname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword11" className="form-label">
            LastName
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword11"
            ref={lname}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
 