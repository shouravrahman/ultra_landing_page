import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/homePage/Home';
import Services from './pages/services/Services';
import Products from './pages/products/Products';
import SignUp from './pages/sign-up/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<ScrollToTop />
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/services' exact component={Services} />
				<Route path='/products' exact component={Products} />
				<Route path='/sign-up' exact component={SignUp} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
