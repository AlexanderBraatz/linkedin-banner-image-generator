import './page.css';
//components
import Header from './(components)/Header.jsx';
import Instructions from './(components)/(Instructions)/Instructions.jsx';
import Form from './(components)/(Form)/Form.jsx';
import MobileDisclaimer from './(components)/(MobileDisclaimer)/MobileDisclaimer';

export default function HomePage() {
	return (
		<div>
			<div
				id="OuterContainer"
				className="outerContainer"
			>
				<Header />
				<div className="bodyContainer">
					<Instructions />
					<Form />
				</div>
				<MobileDisclaimer />
			</div>
		</div>
	);
}
