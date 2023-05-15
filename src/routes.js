import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import TemplatePage from './components/TemplatePage';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<TemplatePage/>}>
                        <Route index element={<IndexPage/>}/>
                    </Route>
                    <Route path='*' element={<h1>Página não encontrada</h1>}/>
                </Routes>
            </Router>
        </main>
    );
}