import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Forms from './pages/Forms';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/forms' element={<Forms/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;