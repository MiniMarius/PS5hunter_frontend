import StartView from "../view/StartView";
import { useNavigate } from "react-router-dom";
function StartPresenter () {
  
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate("/results");
    };


    return (
        <StartView handleNavigate={handleNavigate}></StartView>
    )

}
export default StartPresenter;
