import React from 'react'

const  Todo=()=> {
  return (
      <div className="container p-5">
      
          <div id="myDIV" className="header mt-5">
              <h2 style={{ "margin": "5px" }}>To-Do List App</h2>
              <input type="text" id="myInput" placeholder="Add Todo..." /> <span className="addBtn">Add</span>
          </div>
          <ul id="myUL">
              <li>hi <i className="fa-solid fa-xmark" style={{"float":"right"}}></i></li>
          </ul>
      
      </div>
  )
}

export default Todo