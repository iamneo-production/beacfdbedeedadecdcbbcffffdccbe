import Auth from './components/Auth/Auth';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import Homepage from './components/Customer/Homepage';
import AdminHomePage from './components/Admin/AdminHomePage';
import AddCenter from './components/Admin/AddCenter';
import Dashboard from './components/Customer/Dashboard';
import DashboardGrid from './components/Customer/DashboardGrid';
import Appointment from './components/Customer/Appointment';
import CenterProfile from './components/Admin/CenterProfile';
import EditServiceCenter from './components/Admin/EditServiceCenter';


export const routes = [
  { path: '/', element: <Auth /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/user/homepage', element: <Homepage /> },
  { path: '/admin', element: <AdminHomePage /> },
  { path: '/admin/addServiceCenter', element: <AddCenter /> },
  { path: '/user/dashboard/grid1', element: <Dashboard /> },
  { path: '/user/dashboardGrid', element: <DashboardGrid /> },
  { path: '/user/appointment', element: <Appointment /> },
  { path: '/admin/CenterProfile', element: <CenterProfile />},
  { path: '/admin/editServiceCenter/grid1', element: <EditServiceCenter />}
];
