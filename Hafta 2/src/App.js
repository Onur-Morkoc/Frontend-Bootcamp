import data from "./data.json";
import Assistant from "./components/Assistant/Assistant.js";
import User from "./components/User/User.js";
import "./index.css"

function App() {

  let assistants = data.filter(member => member.assistant) // asistanların listesi
  let users = data.filter(member => !member.assistant)// asistan olmayanların listesi

  return (

    <div className="container">
      {assistants.map(assistant =>  <Assistant key={assistant.id} data={assistant} />)}
      {users.map(user =>  <User key={user.id} data={user} />)}
    </div>
  )

}

export default App;
