import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/Authorization/login";
import Change from "./pages/Profile/ChangePassWord";
import Menus from "./pages/menu";
import ListUser from "./pages/Profile/Profile";
import UserUpdate from "./pages/Profile/Update";
import UserManager from "./pages/User/UserManager";
import Details from "./pages/User/Detail";
import Create from "./pages/User/Create";
import Edit from "./pages/User/Edit";
import DeviceManager from './pages/Device/DeviceManager'
import CreateDevice from "./pages/Device/CreateDevice";
import EditDevice from "./pages/Device/EditDevice";
import DetailsDevice from "./pages/Device/DetailsDevice";
const userRole = localStorage.getItem('role');
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    children :[{
      path: '/ChangePassWord',
      element: <Change />,
    }, {
      path: '/ChangePassWord',
      element:<Menus />
    },
    {
      path: '/ListUser',
      element:<ListUser />,
    },
    {
      path: '/UserUpdate/:id',
      element:<UserUpdate />,
    },
    {
      path: '/UserManager',
      element:<UserManager />,
    },
    {
      path: '/Details/:id',
      element:<Details />,
    },
    {
      path: '/Create',
      element: userRole === '1' ? <UserManager /> : <Create />,
    },
    {
      
      path: '/Edit/:id',
      element: userRole === '1' ? <UserManager /> : <Edit />,
    },
    {
      path: '/DeviceManager',
      element:<DeviceManager />,
    },
    {
      path: '/CreateDevice',
      element:<CreateDevice />,
    },
    {
      
      path: '/EditDevice/:id',
      element:<EditDevice />,
    },
    {
      path:'/DetailsDevice/:id',
      element:<DetailsDevice/>
    }
  ]
  }
]);

export default router;

