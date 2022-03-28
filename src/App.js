import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from 'data'
function App() {
    const cardElements = cardData.map (item => {
        return (<Card 
            card_img = {item.coverImg}
            card_star = "card-star.png"
            
            card_rating = {item.stats.rating}
            card_popularity = {item.stats.reviewCount}
            card_location = {item.location}
            card_title = {item.title}
            card_pricing = {item.price}
        />)
    })
    
    return (
        <div className="Container">
        <Navbar nav_logo = "airbnb-logo.png"/>
        <Hero hero_group_img = "hero-group.png"/>
        {cardElements}
        </div>
    );
}

export default App;
