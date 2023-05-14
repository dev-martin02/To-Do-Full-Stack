import { useState } from "react";
import Content from "../components/content";
import { useNavigate, Routes, Route, Switch } from "react-router-dom";

function App() {
  const [userName, setUserName] = useState("");
  const [showContent, setShowContent] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/content");
  }
  const inputValue = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowContent(true);
  };

  return (
    <div>
      <div>
        <h1>What's your name?</h1>
        <input
          type="text"
          placeholder="Write your name"
          required
          onChange={inputValue}
        />
        <button onClick={handleClick}>Done</button>
      </div>
      <div>
        <Routes>
          <Switch>
            <Route exact path="/content" element={<Content />} />
          </Switch>
        </Routes>
      </div>
    </div>
  );
}
export default App;
