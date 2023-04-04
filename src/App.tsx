
import { useLocation, useNavigate, useParams } from "react-router-dom"

function App() {

  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  console.log({params, location, navigate})

  return (
    <div className="bg-dark">
    </div>
  )
}

export default App
