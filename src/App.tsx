import Footer from './components/Footer.tsx'
import SectionOurTeam from './pages/SectionOurTeam.tsx'
import Header from './components/Header.tsx'
import SectionContact from './pages/SectionContact.tsx'
import Carousel from './pages/Carousel.tsx'
import Hero from './pages/Hero.tsx'
import BentoGrid from './pages/BentoGrid.tsx'

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Carousel />
			<SectionOurTeam />
			<BentoGrid />
			<SectionContact />
			<Footer />
		</>
	)
}

export default App
