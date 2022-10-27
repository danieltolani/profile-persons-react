import Profile from "./components/Profile";
import Links from "./components/Links";
import '../src/styles/App.css'

function App() {
  return (
    <div className="App">
      <Profile
        userName="Tolani Daniel"
        img="https://i.imgur.com/OW6krjH.jpeg"
      />

      <Links />
    </div>
  );
}

export default App;
