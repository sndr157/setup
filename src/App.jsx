import { useEffect, useState } from "react";
import { UserDetail } from "./UserDetail";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/users");
      const friends = await response.json();
      setUsers(friends);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>React Hooks exercise starter</h1>
      <ul>
        {users.map((user) => (
          <li onClick={() => setSelectedUser(user)} key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && <UserDetail user={selectedUser} />}
    </div>
  );
};

export default App;
