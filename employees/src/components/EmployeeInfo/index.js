import React from "react";

const EmployeeInfo = (props) => {
    return (
    <>
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Age</th>
            </tr>
        </thead>
    </table>
    </>
    );
}

// function FriendCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.occupation}
//           </li>
//           <li>
//             <strong>Location:</strong> {props.location}
//           </li>
//         </ul>
//       </div>
//       <span onClick={() => props.removeFriend(props.id)} className="remove">
//         𝘅
//       </span>
//     </div>
//   );
// }

export default EmployeeInfo;