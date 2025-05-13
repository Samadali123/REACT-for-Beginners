import { useLocation, useParams } from 'react-router-dom';

const UserSettings = () => {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div>
      <h4>Settings for User ID: {id}</h4>
      <p>Current URL: {location.pathname}</p>
    </div>
  );
};

export default UserSettings;
