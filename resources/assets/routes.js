import App from './components/App'
import Login from './components/Login'
import Navigation from './components/Navigation'
import Note from './components/Note'

const routes = [
	{ path: '/login', component: Login},
	{ path: '/dashboard', component: Navigation},
	{ path: '/note/:id', component: Note }
]

export default routes
