import React, { useState } from "react";

const TaskBoard2 = () => {
    const [taskList, setTaskList] = useState([]);
    const [value, setValue] = useState("");

    const handleChange = e => {
        const newValue = e.target.value;
        setValue(newValue); 
  };

  const addTask = () => {
      const newTask = [...taskList,value];
      setTaskList(newTask);
      setValue("");
  };

      return(
          <div>
            <div>
                <h1>タスクリスト</h1>
                <input type="text" value={this.state.value}  onChange={e => this.handeChange(e)}/>
                <button onClick={() => this.addTask()}>追加</button>
                {/* <p>{this.state.value}</p> */}
            </div>
            <div>
                <ul>
                    {this.state.taskList.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
          </div>
      );
  }

export default taskBoard2;