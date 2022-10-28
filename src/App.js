import Profile from "./components/Profile";
import Links from "./components/Links";
import Footer from "./components/Footer"
import Socials from "./components/Socials";

import '../src/styles/App.css'

function App() {
  return (
    <div className="App">
      <Profile
        userName="Tolani Daniel"
        img="https://i.imgur.com/OW6krjH.jpeg"
      />

      <Links buttonName="Twitter Link" />
      <Links id="btn__zuri" buttonName="Zuri Team" />
      <Links id="books" buttonName="Zuri Books" />
      <Links id="book__python" buttonName="Python Books" />
      <Links id="pitch" buttonName="Background Check for Coders" />
      <Links id="book__design" buttonName="Design Books" />

    <Socials />
    <Footer footerText="HNG Internship 9 Frontend Task" />
    </div>
  );
}

export default App;
