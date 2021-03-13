import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';

const routes = [
	{
		path: '/login',
		component: Login,
		isPrivate: false,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		isPrivate: true,
	},
];

export default routes;
