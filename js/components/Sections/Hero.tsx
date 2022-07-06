import ButtonCTA from "../Parts/ButtonCTA";

function Hero(props) {
    return (
        <section id="HeroSection">
            <h1 className="text-center text-5xl text-blue-700">
                This is the Hero Section
            </h1>
            <ButtonCTA href="/call-to-action-link" text="Call To Action" type="primary" />
        </section>
    );
}

export default Hero;