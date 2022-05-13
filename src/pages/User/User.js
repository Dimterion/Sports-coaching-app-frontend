import { useParams } from "react-router-dom";
import useFetch from "../../utils/fetch";
import Header from "../../components/Header/Header";
import BarChart from "../../components/BarChart/BarChar";
import ChartArea from "../../components/ChartArea/ChartArea";
import RadarChart from "../../components/RadarChart/RadarChart";
import Card from "../../components/Card/Card";
import PieChart from "../../components/PieChart/PieChart";
import Loader from "../../components/Loader/Loader";
import Error from "../Error/Error";
import "./user.css";

function User() {
  const { id } = useParams();
  const {
    data: user,
    loading,
    error,
  } = useFetch(`http://localhost:3000/user/${id}`);

  const {
    data: averageSessions,
    loading: loadingSessions,
    error: errorSessions,
  } = useFetch(`http://localhost:3000/user/${id}/average-sessions`);

  if (error || errorSessions) {
    return <Error />;
  }

  return loading || loadingSessions ? (
    <Loader />
  ) : (
    <div>
      <Header firstName={user.data.userInfos.firstName} />
      <div className="statistics-container">
        <div className="charts-container">
          <BarChart />
          <ChartArea sessions={averageSessions.data.sessions} />
          <RadarChart />
          <PieChart />
        </div>
        <Card
          firstItemQuantity={user.data.keyData.calorieCount}
          secondItemQuantity={user.data.keyData.proteinCount}
          thirdItemQuantity={user.data.keyData.carbohydrateCount}
          fourthItemQuantity={user.data.keyData.lipidCount}
        />
      </div>
    </div>
  );
}

export default User;
