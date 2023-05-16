import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExhibitionsPage from './pages/ExhibitionsPage';
import TemplatePage from './components/TemplatePage';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<TemplatePage/>}>
                        {/* <Route index element={<IndexPage/>}/> */}
                        <Route path='exibicoes' element={<ExhibitionsPage/>}/>
                    </Route>
                    <Route path='*' element={<h1>Página não encontrada</h1>}/>
                </Routes>
            </Router>
        </main>
    );
}