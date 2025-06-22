import ListUser from './ListUser.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from "react";
import Home from "./New";


import ListUser from './ListUser.jsx';
function App() {
  const [count, setCount] = useState(0)
  let [user, setUser] = useState({ name: "Suresh", username: "Rikash" })
  let [userList, setUserList] = useState([]);
  let [user1, setUser1] = useState({ name: '', email: '', password: '' });

  return (
    <>
      <Home name="Rikash" usenmae="Suresh5" />
      <form onSubmit={(e) => {
        e.preventDefault()
        setUserList([...userList, { ...user }]);// ...(triple dots) are used to avoid the recent updated data to all 
      }
      }>
        <input type="text" placeholder="Enter your Name" onChange={(e) => { user.name = e.target.value; }} />
        <input type="text" placeholder="Enter your e-mail" onChange={(e) => { user.email = e.target.value; }} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <table className="table table-striped" style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ListUser />
    </>
  )
} 