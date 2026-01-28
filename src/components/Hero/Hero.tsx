import {useLocation} from "react-router-dom";
import {useInView} from "../../hooks/useInView";
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils.ts";

interface HeroProps {
    title: string;
    description?: string;
    downloadLink?: string;
    playLink?: string;
    imageUrl: string;
}

export const Hero = ({title, description, downloadLink, playLink, imageUrl}: HeroProps) => {
    const {ref, isVisible} = useInView(0.18);

    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isCharacterPage = location.pathname.startsWith("/character/");
    const isGamePage = (location.pathname !== "/") && !isCharacterPage;

    return (
        <section ref={ref} className={`${styles.container} ${styles.fadeUp} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
                {isHomePage && (
                    <a href="#games" className={styles.gameBtn} onClick={() => {
                        setTimeout(() => {
                            history.replaceState(null, '', window.location.pathname);
                        }, 200);
                    }}>Cari Gim</a>
                )}
                {isGamePage && (
                    <div className={styles.buttonGroup}>
                        {downloadLink && (
                            <a href={downloadLink} target="_blank" rel="noopener"><img
                                src={getImageUrl("googlebadge.png")}
                                alt="Unduh di Google Play"
                                className={styles.badge}
                            /></a>)}
                        {playLink && (
                            <a href={playLink} target="_blank" rel="noopener"><img
                                src={getImageUrl("itchbadge.png")}
                                alt="Main di itch.io"
                                className={styles.badge}
                            /></a>)}
                    </div>
                )}
            </div>
            <img src={getImageUrl(`${imageUrl}`)} alt="hero"
                 className={isCharacterPage ? styles.characterHeroImg : styles.heroImg}/>
        </section>
    )
}