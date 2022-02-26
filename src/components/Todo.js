import React,{useState} from 'react'

const Todo = () => {
    const [inputvalue, setInputvalue] = useState('');
    const [data, setData] = useState([]);
    const deleteitem = (id) => {
        const res = data.filter((cur,i) => {
            return id !==i 
        })
        setData(res);
    }
    // function adddata 
    const AddFun = () => {
        setData([...data,inputvalue]);
        setInputvalue("");

    }

  return (
      <div className="container p-5">
          <div id="myDIV" className="header mt-5 ">
              <h3 style={{ "margin": "5px" }}>TODO-LIST: {data.length}</h3>
              <input type="text" id="myInput" value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} placeholder="Add Todo..." />
              <span className="addBtn" onClick={()=>AddFun()}>Add</span>
          </div>
          <ul id="myUL">
              {
                  data.map((val,i) => {
                      return (
                          <li key={i}>{val}<i className="fa-solid fa-xmark cross p-2" onClick={()=>deleteitem(i)} style={{ "float":"right" }}></i></li>
                      )
                  })
              }
              
          </ul>
      
      </div>
  )
}

export default Todo