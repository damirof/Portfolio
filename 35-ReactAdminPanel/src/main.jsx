import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/strore/store.js';
import Wishlist from "./components/wishlist/Wishlist.jsx"
import Contact from "./pages/Contact.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home.jsx';
import Basket from './components/basket/Basket.jsx';
import Detail from './components/detail/Detail.jsx';
import Admin from './components/admin/Admin.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/wishlist', element:<Wishlist/>},
      { path: '/contact', element: <Contact />},
      { path: '/about', element: <About />},
      { path: '/', element: <Home />},
      { path: '/basket', element: <Basket />},
      { path: '/detail', element: <Detail />},
      { path: '/admin', element: <Admin />},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
