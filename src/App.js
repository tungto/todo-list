import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AddTaskItemPage from './pages/AddTaskItemPage/AddTaskItemPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/' component={() => <HomePage />} exact={true} />
        <Route
          path='/add'
          component={({ match, history }) => (
            <AddTaskItemPage match={match} history={history} />
          )}
          exact={true}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
