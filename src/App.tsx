import Footer from './components/Footer.tsx'
import SectionOurTeam from './pages/SectionOurTeam.tsx'
import Header from './components/Header.tsx'
import Carousel from './pages/Carousel.tsx'
import Hero from './pages/Hero.tsx'
import BentoGrid from './pages/BentoGrid.tsx'

function App() {
	return (
		<>
			<Header />
			<Carousel />
			<Hero />
			<SectionOurTeam />
			<BentoGrid />
			<Footer />
		</>
	)
}

export default App
