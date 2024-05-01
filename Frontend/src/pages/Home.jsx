import '../components/css/Home.css';
import All_cards from "../assets/images/all_cards_image.png";
import Food_card from "../assets/images/food_image.png";
import Health_card from "../assets/images/health_image.png";
import Travel_card from "../assets/images/travel_image.png";
import Movie_card from "../assets/images/movies_image.png";
import Education_card from "../assets/images/education_image.png";

function Home() {
  return (
    <div className="container">
      <div className="cards" id="card_all">
        <img src={All_cards} alt="All" />
        <div className="card_name">All</div>
      </div>
      <div className="cards" id="card_food">
        <img src={Food_card} alt="Food" />
        <div className="card_name">Food</div>
      </div>
      <div className="cards" id="card_health">
        <img src={Health_card} alt="Health" />
        <div className="card_name">Health and Fitness</div>
      </div>
      <div className="cards" id="card_travel">
        <img src={Travel_card} alt="Travel" />
        <div className="card_name">Travel</div>
      </div>
      <div className="cards" id="card_movies">
        <img src={Movie_card} alt="Movies" />
        <div className="card_name">Movies</div>
      </div>
      <div className="cards" id="card_education">
        <img src={Education_card} alt="Education" />
        <div className="card_name">Education</div>
      </div>
    </div>
  );
}

export default Home;
