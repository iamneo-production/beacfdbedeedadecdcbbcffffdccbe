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
  { path: '/user/homepage', element: <Homepage /> },
  { path: '/admin', element: <AdminHomePage /> },
  { path: '/admin/addServiceCenter/:userId', element: <AddCenter /> },
  { path: '/user/dashboard/:id', element: <Dashboard /> },
  { path: '/user/dashboardGrid', element: <DashboardGrid /> },
  { path: '/user/appointment', element: <Appointment /> },
  { path: '/admin/CenterProfile/:userId', element: <CenterProfile />},
  { path: '/admin/editServiceCenter/:userId/:serviceCenterId', element: <EditServiceCenter />},
  { path: '/admin/AdminAppointmentView/:userId', element: <AdminAppointmentView />},
  { path: '/admin/AdminHomePage/:userId', element: <AdminHomePage />}
];
