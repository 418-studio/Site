import '../styles/components/navButton.css'

interface NavButtonProps {
	handleOnclick: () => void
}

export default function NavButton({ handleOnclick }: NavButtonProps) {
	return (
		<button className="navButton" onClick={handleOnclick}>
			Démarrez votre projet
		</button>
	)
}
