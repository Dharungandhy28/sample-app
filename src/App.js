import logo from './logo.svg';
import './App.css';

function App() {
  const film_review = [
    {
      name: "Love Today",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOc_LmV_XWJy1IITO5lxf1hNsEi5rRxTysVRbXTwdgLh0EDSZ4Fb_Umci4Yt2V8Q3nNw&usqp=CAU",
      rating: "9.1",
      
      review:
        " Though the idea seemed interesting, there were some doubts about how Pradeep would have managed to stretch this premise into a feature-length film.  The best thing about Love Today is that the film is relatable and has normal, flawed characters who are trying to become better at its centre.",
    },
    {
      name: "Beast",
      poster: "https://pbs.twimg.com/media/E4bQvR5XwAI3Dzp.jpg",
      rating: "7.5",
      review:
        "Beast is a 2022 Indian Tamil-language action film[5] written and directed by Nelson. The film stars Vijay, Pooja Hegde and Selvaraghavan. It revolves around an ex-RAW agent's quest to rescue people held hostage in a shopping mall by terrorists.",
    },
    {
      name: "Ponniyin selvan",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Ponniyin_Selvan_I.jpg",
      rating: "9.8",
      review:
        "Vandiyathevan sets out to cross the Chola land to deliver a message from the Crown Prince Aditha Karikalan. Kundavai attempts to establish political peace as vassals and petty chieftains plot against the throne. Unrest grips the land as a long-tailed comet arrives, signalling a time of turmoil.",
    },
    {
      name: "Asuran",
      poster: "https://1847884116.rsc.cdn77.org/tamil/gallery/movies/asuran/main.jpg",
      rating: "8.4",
      review:
        "Asuran it is a crime based of two family and it turns into two village fight for poor family and rich family it is good to watch it have sentimants actions and fast moving movies and it is a caste related movie.",
    },
    {
      name: "Kaidhi",
      poster: "https://gumlet.assettype.com/nationalherald%2F2019-10%2F337a7751-e25e-4f91-9b33-cb2785f6f4f1%2FKarthi_Kaithi.jpg?rect=0%2C27%2C700%2C394&w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
      rating: "8.5",
      review:
        "Kaidhi it is a crime based story which is also interesting to watch, it is full of drugs and kidnaps and completely based on flashback and two other film connected movies so we have to wait till the 2nd part come out to understand the complete story.",
    },
    {
      name: "Sardar",
      poster:
        "https://www.filmibeat.com/img/popcorn/movie_posters/sardar-20220901165519-20078.jpg",
      rating: "8.2",
      review:
        "This film is a depiction of contrast between father and son's beliefs. The son, a police officer, believes that any deed of his should be broadcasted whereas the father, an intelligence officer, spent thirty two years in a prison for the greater good.",
    },
  ];
  return (
    <div className="App">
      {film_review.map((fm) => (
        <Films
          name={fm.name}
          poster={fm.poster}
          rating={fm.rating}
          // star={fm.star}
          review={fm.review}
        />
      ))}
    </div>
  );
}

function Films({ name, poster, rating, review }) {
  return (
    <section className="container">
      <img className="poster" src={poster} alt={name} />

      {/* <h3 className="header"></h3> */}

      <div className="header">
        {name}
        <span><i class="fa-solid fa-star"></i>
        {rating}</span>
      </div>

      <p className="review-sec">{review}</p>
    </section>
  );
}
export default App;