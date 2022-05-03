import './scss/style.scss';
import Header from './Header';
import Footer from './Footer';

/*
	컴포넌트 함수는 한번에 하나의 JSX만 반환가능
	복수개의 JSX요소를 반환할때에는 wrapping tag로 감싸줌
	불필요한 부모태그의 생성을 막기 위해서는 <><?> (fragment)로 감싸줌
*/

function App() {
	return (
		<>
		<Header />
		<Footer />
		</>
	);
}

export default App;
