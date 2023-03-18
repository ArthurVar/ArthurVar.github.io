import { useEffect, useRef } from 'react';
import About from './components/Abaut/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Option from './components/Option/Option';
import Process from './components/Process/Process';
import Services from './components/Services/Services';
import Technologies from './components/Technologies/Technologies';

function App() {

  const autoScroll = useRef(null)

  useEffect(() => {
    autoScroll.current?.scrollIntoView()
  },[])

  return (
      <div className="App">
        <div ref={autoScroll}/>
        <Header/>
        <About/>
        <Services/>
        <Technologies/>
        <Process/>
        <Option/>
        <Footer/>
      </div>
  );
}

export default App;
