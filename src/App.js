import Stories from "../components/Stories";
import "./styles.css";

export default function App({ stories, onArchive }) {
  return (
    <div className="App">
      <Stories stories={stories} onArchive={onArchive} />
    </div>
  );
}
