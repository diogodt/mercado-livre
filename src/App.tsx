import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';

// Components
import SearchBar from './components/SearchBar';

// Pages
import LandingPage from './pages/LandingPage';
import SearchResultsPage from './pages/SearchResultsPage';
import SelectedProductPage from './pages/SelectedProductPage';

const App: React.FC = () => {
    return (
        <div className='wrapper'>
            <Provider store={store}>
                <Router>
                    <SearchBar />
                    <Routes>
                        <Route path="/" element={<LandingPage/>} />
                        <Route path="/items" element={<SearchResultsPage/>} />
                        <Route path="/items/:id" element={<SelectedProductPage/>} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
            </Provider>
        </div>
    );
}

export default App;