export default function Hero(props){
    return (
        <section className="hero">
            <img className="hero-img" src = {`images/${props.hero_group_img}`}/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}