import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
function App() {
  return (
    <div className="Container">
      <Navbar nav_logo = "airbnb-logo.png"/>
      <Hero hero_group_img = "hero-group.png"/>
      <Card 
        card_img = "card-image-1.png"
        card_star = "card-star.png"
        card_status = "Sold out"
        card_rating = "5.0"
        card_popularity = {6}
        card_location = "USA"
        card_description = "Life lessons with this swimmer"
        card_pricing = {136}
      />
    </div>
  );
}

export default App;
