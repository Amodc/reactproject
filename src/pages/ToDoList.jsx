import React, { useState } from 'react'

function ToDoList() {

const [activity, setActivity] = useState("");
const [listData, setListData] = useState([]);

function addActivity () {
    setListData((listData) =>{
    const updateList = [...listData, activity]
    setActivity('');
    return updateList;
    })
}

function removeActivity (i) {
    const updateListData = listData.filter((elem, id) => {
        return i!== id;
    })
    setListData(updateListData);
}

function removeAll () {
    setListData([]);
}

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Todo List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add todo activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addActivity}>
          Add
        </button>
      </div>
      <ul className="list-group">
      {listData!=[] && listData.map((data, i) =>(
        <li key={i} className="list-group-item d-flex p-3 justify-content-between align-items-center">
            {data}

            <button className="btn btn-danger btn-sm" onClick={() => removeActivity(i)}>
              Delete
            </button>
        </li>
      ))}

      {listData.length>=1 && <button className='btn btn-warning m-5' onClick={removeAll}>Remove all todo list</button>}
      </ul>
    </div>
  )
}
export default ToDoList
