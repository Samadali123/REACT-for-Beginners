
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NameProvider from './NameContext.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './Routing2.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <NameProvider>
        <App/>
    </NameProvider>
    </BrowserRouter>
    // <RouterProvider router={router} />
)
