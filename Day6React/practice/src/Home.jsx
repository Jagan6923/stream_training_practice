// import heroImage from "../assets/hero.png";

// const Home = (props) => {
//   console.log(props);

//   let {
//     firstname,
//     age,
//     place,
//     employee: { eName, eCompany },
//   } = props;

//   return (
//     <div>
//       <h1>Home Page</h1>
//       {/* <h3>Name: {props.firstname}</h3>
//       <h3>Age: {props.age}</h3>
//       <h3>Place: {props.place}</h3>

//       <h2>Employee Details: </h2>
//       <h4>Emp Name: {props.employee.eName}</h4>
//       <h4>Emp Company: {props.employee.eCompany}</h4> */}
//       <h3>Name: {firstname}</h3>
//       <h3>Age: {age}</h3>
//       <h3>Place: {place}</h3>
//       {/* <h4>Emp Name: {employee.eName}</h4>
//       <h4>Emp Company: {employee.eCompany}</h4> */}
//       <h4>Emp Name: {eName}</h4>
//       <h4>Emp Company: {eCompany}</h4>
//     </div>
//   );
// };

// const Home = ({ firstname, age, place }) => {
//   // console.log(props);

//   // let { firstname, age, place } = props;

//   return (
//     <div>
//       <h1>Home Page</h1>
//       {/* <h3>Name: {props.firstname}</h3>
//       <h3>Age: {props.age}</h3>
//       <h3>Place: {props.place}</h3> */}

//       <h3>Name: {firstname}</h3>
//       <h3>Age: {age}</h3>
//       <h3>Place: {place}</h3>
//     </div>
//   );
// };

const Home = (props) => {
  let { firstname, age, place, employee } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/9131/9131478.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Name: {employee.eName}</h5>
        <p className="card-text">Company: {employee.eCompany}</p>
        <p className="card-text">Location: {employee.eLoc}</p>
      </div>
    </div>
  );
};

export default Home;
 