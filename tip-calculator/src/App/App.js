import Logo from './components/Logo';
import Body from './components/Body';

function App() {
  return (
    <div className="font-['Space_Mono'] font-bold flex flex-col items-center min-h-screen bg-secondary-light-cyan-1">
      <Logo />
      <Body />
    </div>
  );
}

export default App;
