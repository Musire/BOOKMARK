import { Navbar, Hero, Features, Downloads, Frequent, Newsletter, Footer } from "./"

const HomePage = () => {
    return ( 
        <section className="centered-col w-screen min-h-screen h-auto">
            <Navbar />
            <Hero />
            <Features />
            <Downloads />
            <Frequent />
            <Newsletter />
            <Footer />
        </section>
     );
}
 
export default HomePage;