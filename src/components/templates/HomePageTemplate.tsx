import styles from './HomePageTemplate.module.css';

const Section: React.FC<React.PropsWithChildren> = ({children}) => {
	return <section className={styles.section}>{children}</section>;
};

const Main: React.FC<React.PropsWithChildren> = ({children}) => {
	return <main className={styles.main}>{children}</main>;
};

const Sidebar: React.FC<React.PropsWithChildren> = ({children}) => {
	return <aside className={styles.sidebar}>{children}</aside>;
};

const HomePageTemplate = {
	Section,
	Main,
	Sidebar,
};

export default HomePageTemplate;
export {Section, Main, Sidebar};
