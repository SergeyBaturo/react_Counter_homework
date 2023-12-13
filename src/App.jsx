import './assets/styles/App.css'
import { useState } from 'react'
import dt from './assets/usersJSON/dt.json'
import AllUsers from './assets/Components/AllUsers/AllUsers';
import ActiveUsers from './assets/Components/ActiveUsers/ActiveUsers';

function App() {

  function addToActiveUsers(user) {
    const trueUser = activeUsers.find((item) => item.userName === user.userName)
    if (trueUser) return;
    const lastId = activeUsers[activeUsers.length - 1].id;
    user.id = lastId + 1;
    setActiveUsers(prevState=>[...prevState, user]);
  }

  const [allUsers, setAllUsers] = useState(dt.allUsers);
  const [activeUsers, setActiveUsers] = useState(dt.activeUsers);

  return (
    <>
      <div className='container'>
        <div className="cont_allUsers">
          <AllUsers allUsers={allUsers} setAllUsers={setAllUsers} addTActiveUsers={addToActiveUsers} />
        </div>
        <div className="cont_activeUsers">
          <ActiveUsers activeUsers={activeUsers} setActiveUsers={setActiveUsers} />
        </div>
      </div>
    </>
  )
}

export default App
