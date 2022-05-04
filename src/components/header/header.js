import api from "../search/search.js";

const Header = () =>{
    return(
        <header>
            <h1>IP Address Tracker</h1>
            <div className="swapper">
                <input type="search" placeholder="Search Ip address" className="input"/>

                <button type="button" onClick={api}>
                    <ion-icon name="search-outline"></ion-icon>
                </button>
            </div>
        </header>
    );
}

Header()

export default Header;