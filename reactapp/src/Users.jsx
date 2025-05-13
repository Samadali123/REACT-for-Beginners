import { Outlet, Link } from 'react-router-dom';

const Users = () => {
  const dummyUsers = [
    { id: '101', name: 'Samad' },
    { id: '102', name: 'Arham' },
    { id: '103', name: 'Adeeb' },
    { id: '104', name: 'Armaan' },
    { id: '105', name: 'salim' },
    { id: '106', name: 'tahoor' }
  ];

  return (
    <div>
      <h2>Users List</h2>
      {dummyUsers.map((user) => (
        <div key={user.id}>
    
          <Link to={`/users/${user.id}`}>{user.name}</Link>
           
        </div>
      ))}
      <hr />
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
};

export default Users;
