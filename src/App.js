import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data'
function App() {
    // mapping each data set to a Card component, return that list of Card components
    const cardElements = cardData.map (item => {
        return (<Card 
            key = {item.id}
            {...item}
        />)
    })
    
    return (
        <div className="Container">
        <Navbar nav_logo = "airbnb-logo.png"/>
        <Hero hero_group_img = "hero-group.png"/>
        <section className='cards-list'>
            {cardElements}
        </section>
        </div>
    );
}

export default App;
