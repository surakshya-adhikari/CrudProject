import { Posts } from "./components/Posts";
import { getPost, deletePost, postData } from "./api/PostApi";
import { Form } from "./components/Form";
const App = () => {
  return (
    <section className="main-section ">
      <Posts />
    </section>
  );
};
export default App;
