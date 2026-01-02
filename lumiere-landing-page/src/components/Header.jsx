import Navbar from "./Navbar"
function Header( {title, subtitle}) {
    return(
        <div>
            <div>
            <img src="/Logo1.svg" alt="Logo nome Lumière" ></img>
                <Navbar />
            </div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
}

export default Header