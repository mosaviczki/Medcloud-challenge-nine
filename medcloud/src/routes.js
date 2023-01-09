import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Forms from './pages/Forms';
import Erro from './pages/Error';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/formulario' element={<Forms/>}/>

                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;