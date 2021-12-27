
import './App.css';

export default function App() {
  let movieList = [
    {
      name: "JaiBhim",
      poster:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm8U_-RJoMKrgvpIVLbDV8ovuHIp-p_Ls5I7WHaXJUUCbhjQVd",
      rating: "9.4/10",
      summary:
        "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice."
    },
    {
      name: "Doctor",
      poster:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSCe371X060CPHkKtpyC3IF5eXFvZdjyqgPXsUobjkQZOt9xY-",
      rating: "7.7/10",
      summary:
        "A military doctor embarks on a journey to track down his former fiancee's kidnapped niece. His mission then leads him to the heart of a human trafficking ring in Goa."
    },
    {
      name: "Maanaadu",
      poster:
        "https://www.pinkvilla.com/imageresize/maanaadu_release_date_postponed.jpg?width=752&format=webp&t=pvorg",
      rating: "9.1/10",
      summary:
        "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop."
    },
    {
      name: "Frozen",
      poster:
        "https://boyertownstatetheatre.com/wp-content/uploads/2020/11/frozen-1.jpg",
      rating: "7.4/10",
      summary:
        "Frozen is a 2013 American computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. The 53rd Disney animated feature film, it is inspired by Hans Christian Andersen's fairy tale ,The Snow Queen."
    },
    {
      name: "Bigil",
      poster: "https://upload.wikimedia.org/wikipedia/en/f/f0/Bigil_poster.jpg",
      rating: "6.9/10",
      summary:
        "Michael, an aggressive young man, gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around."
    }
  ];
  return <div className="wholeContainer">{movieList.map(Movie)}</div>;
}

let Movie = ({ name, poster, rating, summary }) => {
  return (
    <div className="container">
      <img src={poster} className="image" alt={name} />
      <div className="card">
        <h5 className="star">
          <span className = "clr">
          <i class="fas fa-star"></i>
          </span>
          {rating}
        </h5>
        <h2 className="title">{name}</h2>
      </div>
      <p className="story">{summary}</p>
    </div>
  );
};
