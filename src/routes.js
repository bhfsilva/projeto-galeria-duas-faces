import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplatePage from './components/TemplatePage';
import IndexPage from './pages/IndexPage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import ArtistsPage from './pages/ArtistsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<TemplatePage/>}>
                        <Route index element={<IndexPage/>}/>
                        <Route path='exibicoes' element={<ExhibitionsPage/>}/>
                        <Route path='artistas' element={<ArtistsPage/>}>
                            <Route path=':artista' element={<ArtistsPage/>}/>
                        </Route>
                    </Route>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </main>
    );
}