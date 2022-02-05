import Logo from './components/Logo';
import Body from './components/Body';

function App() {
  return (
    <div className="font-['Space_Mono'] font-bold flex flex-col items-center justify-center min-h-screen bg-secondary-light-cyan-1
                    xl:px-48">
      <Logo />
      <Body />
    </div>
  );
}

export default App;
