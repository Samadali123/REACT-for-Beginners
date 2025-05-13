import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home3 from './Home3';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import Users from './Users';
import UserDetail from './UserDetail';
import UserSettings from './UserSettings';

const Routing3 = () => {

    const routes = useRoutes([
        { path : "/", element : <Home3/>},
        { path : "/", element : <About/>},
        {path : "/contact", element: <Contact/>},
        {
            path: "/users", element : <Users/>,
            children : [
                {path : ":id", element: <UserDetail/>},
                {path : ":id/settings", element: <UserSettings/>}
            ]
        },
        {path : '*', element: <PageNotFound/>}

    ])
      return routes
}

export default Routing3