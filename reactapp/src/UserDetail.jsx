import { Link, useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams(); // extract dynamic id
  return <div>
    
    Showing details for User ID: {id}
    <Link to={`/users/${id}/settings`}>Settings</Link>
    </div>;
};

export default UserDetail;
