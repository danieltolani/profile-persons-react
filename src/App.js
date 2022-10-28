import Profile from "./components/Profile";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

import "../src/styles/App.css";

function App() {
  return (
    <div className="App">
      <Profile
        userName="Tolani Daniel"
        img="https://i.imgur.com/OW6krjH.jpeg"
      />

      <Links
        linkAddress="https://twitter.com/daniel_tolani_"
        id="btn__twit"
        linkName="Twitter Link"
      />
      <Links
        linkAddress="https://training.zuri.team"
        id="btn__zuri"
        linkName="Zuri Team"
      />
      <Links
        linkAddress="http://books.zuri.team"
        id="books"
        linkName="Zuri Books"
      />
      <Links
        linkAddress="https://books.zuri.team/python-for-beginners?ref_id=<TDo8>"
        id="book__python"
        linkName="Python Books"
      />
      <Links
        linkAddress="https://background.zuri.team"
        id="pitch"
        linkName="Background Check for Coders"
      />
      <Links
        linkAddress="http://books.zuri.team/design-rules"
        id="book__design"
        linkName="Design Books"
      />

      <Socials />
      <Footer footerText="HNG Internship 9 Frontend Task" />
    </div>
  );
}

export default App;
