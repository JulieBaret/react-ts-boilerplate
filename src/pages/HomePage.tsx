// Components
import HomePageTemplate from '../components/templates/HomePageTemplate';

export const HomePage = () => {
	return (
		<HomePageTemplate.Section>
			<HomePageTemplate.Main>
				<h1>Home page</h1>
			</HomePageTemplate.Main>
			<HomePageTemplate.Sidebar>
				<p>Sidebar content</p>
			</HomePageTemplate.Sidebar>
		</HomePageTemplate.Section>
	);
};
