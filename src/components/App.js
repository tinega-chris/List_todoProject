
import './App.css';
import Header from "./Header"
import ContactList from "./ContactList"

import AddContact from "./AddContact"

function App() {
  const contacts=[{id:1,name:"chris",email:"chris@gmail.com"},
    {id:2,name:"alex",email:"alex@gmail.com"}
  ]
  return (
    <div className="App">
      
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
