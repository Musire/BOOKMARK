import { Navbar, Hero, Features, Downloads, Frequent, Newsletter, Footer } from "./"

const HomePage = () => {
    return ( 
        <section className="w-screen h-auto min-h-screen centered-col">
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