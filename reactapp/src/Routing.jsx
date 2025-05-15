import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home2 from './Home2';
import Home3 from './Home3';
import PageNotFound from './PageNotFound';
import Users from './Users';
import UserDetail from './UserDetail';
import UserSettings from './UserSettings';


function Routing() {
  return (
      <Routes>
        <Route path="/" element={<Home3/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
         {/* Nested route inside /users */}
         <Route path="/users" element={<Users/>}>
          <Route path=":id" element={<UserDetail/>} />
          <Route path=":id/settings" element={<UserSettings/>} />
        </Route>
        <Route path="*" element={ <PageNotFound/>} />
      </Routes>
  )
}

export default Routing;
