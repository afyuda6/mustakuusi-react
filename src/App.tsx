import {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Marquee} from "./components/Marquee/Marquee";
import {Footer} from "./components/Footer/Footer";
import {HomePage} from "./pages/HomePage";
import {GamePage} from "./pages/GamePage";
import {CharacterPage} from "./pages/CharacterPage";
import {PrivacyPolicyPage} from "./pages/PrivacyPolicyPage";
import styles from "./App.module.css";

function App() {
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.slice(1);
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({behavior: "smooth"});
        }
    }, []);

    return (
        <div className={styles.App}>
            <BrowserRouter basename="/react">
                <Marquee/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/:id" element={<GamePage/>}/>
                    <Route path="/character/:id" element={<CharacterPage/>}/>
                    <Route path="/privacy-policy/:id" element={<PrivacyPolicyPage/>}/>
                    <Route path="*" element={<div></div>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
