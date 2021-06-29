import './App.css';
import UserList from './UserList';

const titleStyle= {
  color:"red",
};






  const App = () => {
 
  return (
    <div className="App">
      <h1 style={titleStyle}>List of Users</h1>
      <UserList/>
      
    </div>
  );
}

export default App;
