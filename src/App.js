import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import {Wrapper} from "./styles/app";
import BottomNav from "./components/BottomNav";
import {useSelector} from "react-redux";
import Menu from "./components/Menu";
import Drawer from "@mui/material/Drawer";
import {useActions} from "./hooks/useActions";

function App() {
    const {drawer} = useSelector(state => state.modals);
    const {setDrawer, setFavorite} = useActions();

    useEffect(() => {
        setFavorite(JSON.parse(localStorage.getItem('favorite')));
    },[]);

    return (
        <>
            <Header/>
            <Drawer open={drawer} onClose={() => setDrawer(false)}>
                <Menu/>
            </Drawer>
            <Wrapper>
                <AppRouter/>
            </Wrapper>
            <BottomNav/>
        </>
    );
}

export default App;
