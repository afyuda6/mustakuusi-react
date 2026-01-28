import {Link, useLocation} from "react-router-dom";
import {useInView} from "../../hooks/useInView";
import styles from "./About.module.css";

interface AboutProps {
    about: string;
    itemDescription: string;
    privacyPolicyLink?: string;
}

export const About = ({about, itemDescription, privacyPolicyLink}: AboutProps) => {
    const {ref, isVisible} = useInView(0.18);

    const location = useLocation();
    const isGamePage = location.pathname !== "/";

    return (
        <section ref={ref} className={`${styles.container} ${styles.fadeUp} ${isVisible ? styles.visible : ""}`}
                 id="about">
            <h2 className={styles.title}>{about}</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>{itemDescription}</p>
                            <br/>
                            {isGamePage && privacyPolicyLink && (<p>
                                📄 <Link
                                to={privacyPolicyLink}
                                onClick={() => {
                                    const html = document.documentElement;
                                    html.style.scrollBehavior = "auto";

                                    requestAnimationFrame(() => {
                                        window.scrollTo(0, 0);
                                        requestAnimationFrame(() => {
                                            html.style.scrollBehavior = "smooth";
                                        });
                                    });
                                }}
                            >Privacy Policy</Link>
                            </p>)}
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}