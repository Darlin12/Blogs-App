import "./App.css";
import NavBar from "./components/NavBar";
import Blog from "./components/blog";
import posts from "./posts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="root">
      <NavBar className="navbar" />
      <div className="blogs-container">
        {posts.map((post) => {
          return (
            <Blog
              title={post.title}
              author={post.author}
              date={post.date}
              content={post.content}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
