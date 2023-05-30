import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// App에서는 router를 렌더링할 예정
function App() {
  return (

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="movie">영화 목록</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* id 자리 마련해둠. React Router한테 여기오는 id값이 무엇인지 알고싶다고 말함. 이 id대신에 다른 값을 써도됨. 이 url이 변수를 받을것이라 말해주는 것*/}
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Router>

  );
}

export default App;
