import './AllUsers.css';

export default function AllUsers({allUsers, addTActiveUsers}) {
  return (
    <div>{allUsers.map(item=>(
      <div className="all_user" key={item.id}>
          <h1>All</h1>
          <h2>{item.userName}</h2>
          <p>{item.city}</p>
          <p>{item.age}</p>
          <button onClick={()=>addTActiveUsers(item)} >Add to active users</button>
      </div>
  ))}</div>
  )
}
