import Auth from './components/Auth/Auth';
import SignUp from './components/Auth/SignUp/SignUp';
import Login from './components/Auth/Login/Login';
import Homepage from './components/Customer/Homepage';
import AdminHomePage from './components/Admin/AdminHomePage';
import AddCenter from './components/Admin/AddCenter';
import Dashboard from './components/Customer/Dashboard';
import DashboardGrid from './components/Customer/DashboardGrid';
import Appointment from './components/Customer/Appointment';
import CenterProfile from './components/Admin/CenterProfile';
import EditServiceCenter from './components/Admin/EditServiceCenter';
import AdminAppointmentView from './components/Admin/AdminAppointmentView';


export const routes = [
  { path: '/', element: <Auth /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/user/homepage/:id', element: <Homepage /> },
  { path: '/admin/:id', element: <AdminHomePage /> },
  { path: '/admin/addServiceCenter/:id', element: <AddCenter /> },
  { path: '/user/dashboard/:id', element: <Dashboard /> },
  { path: '/user/dashboardGrid/id', element: <DashboardGrid /> },
  { path: '/user/appointment/id', element: <Appointment /> },
  { path: '/admin/CenterProfile/:id', element: <CenterProfile />},
  { path: '/admin/editServiceCenter/:id', element: <EditServiceCenter />},
  { path: '/admin/AdminAppointmentView/id', element: <AdminAppointmentView />},
  { path: '/admin/AdminHomePage/id', element: <AdminHomePage />}
];
