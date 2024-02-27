
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { NavBar } from "./Components/NavBar/NavBar";
import {Cart } from "./Components/Cart/Cart";
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';


export const App = () => {
    return (
        <>
            <BrowserRouter>

            <NavBar/>
        
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/Item/:id" element={<ItemDetailContainer />} />
                    <Route path="/category/:category" element={<ItemListContainer />} />
                    <Route path="/Cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};