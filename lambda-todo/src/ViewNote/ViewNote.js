// import React from "react";
// import "./ViewNote.css";
// import { NavLink, Link } from "react-router-dom";
// import styled from 'styled-components'

// const ViewNote = props => {
//   console.log(props);
//   const note = props.notes.find(note => `${note.id}` === props.match.params.id);
//   if (!note) {
//     return null;
//   }
//   return (
//     <div className="view-page">
//       <div className="note-container">
//         <div className={props.deleting ? "delete" : "hide-delete"}>
//           <div className="delete-box">
//             <p>Are you sure you want to delete this?</p>
//             <div className="box-btn">
//               <Link className="btn" to="/">
//                 <div
//                   className="delete-btn"
//                   onClick={() => props.deleteNote(props.match.params.id)}
//                 >
//                   Delete
//                 </div>
//               </Link>
//               <Link className="btn" to={`/view-note/${note.id}`}>
//                 <div className="no-btn" onClick={props.deleteNote}>
//                   No
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="edit-delete">
//           <NavLink
//             onClick={() => props.noteEdit(note.id)}
//             className="ed"
//             to={`/view-note/edit/${note.id}`}
//           >
//             Edit
//           </NavLink>
//           <NavLink
//             to={`/view-note/${note.id}`}
//             className="ed"
//             onClick={props.deleteBox}
//           >
//             Delete
//           </NavLink>
//         </div>
//         <div className="single-note">
//         <div className="note-title">{note.title}</div>
//         <div className="line-long"></div>
//         <p className="extended-content">{note.content}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ViewNote;
