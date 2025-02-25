import "./homeGuest.css"
const HomeGuest = () => {
  return (
    <div className="homeGuest">
      <div className="homeGuestItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="homeGuestImg"
        />
        <span className="homeGuestName">Aparthotel Stare Miasto</span>
        <span className="homeGuestCity">Madrid</span>
        <span className="homeGuestPrice">Starting from $120</span>
        <div className="homeGuestRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="homeGuestItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square240/404037966.jpg?k=f5033a610bb591fe4fcdf10a12858b09e84006b805d352e272d482650dc92df7&o="
          alt=""
          className="homeGuestImg"
        />
        <span className="homeGuestName">Comfort Suites Airport</span>
        <span className="homeGuestCity">Austin</span>
        <span className="homeGuestPrice">Starting from $140</span>
        <div className="homeGuestRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="homeGuestItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square240/592704085.jpg?k=168faf68d608585caa3ba16a4e27b9b394c5efb311e6d660b30ab66e6831d589&o="
          alt=""
          className="homeGuestImg"
        />
        <span className="homeGuestName">Four Seasons Hotel</span>
        <span className="homeGuestCity">Lisbon</span>
        <span className="homeGuestPrice">Starting from $99</span>
        <div className="homeGuestRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="homeGuestItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square240/302086991.jpg?k=cb78b7a4a840aaeee6ee44a2f9d1dce5c1bf34b6422177ae7382242beff582e1&o="
          alt=""
          className="homeGuestImg"
        />
        <span className="homeGuestName">Hilton Garden Inn</span>
        <span className="homeGuestCity">Berlin</span>
        <span className="homeGuestPrice">Starting from $105</span>
        <div className="homeGuestRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default HomeGuest