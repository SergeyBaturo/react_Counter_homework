import './ActiveUsers.css'

export default function ActiveUsers({activeUsers, setActiveUsers}) {
  return (
    <div>{activeUsers.map(item=>(
        <div className="act_user" key={item.id}>
            <h1>Active</h1>
            <h2>{item.userName}</h2>
            <p>{item.city}</p>
            <p>{item.age}</p>
        </div>
    ))}</div>
  )
}
