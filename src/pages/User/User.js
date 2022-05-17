import { useParams } from "react-router-dom";
import useFetch from "../../utils/fetch";
import Header from "../../components/Header/Header";
import ChartBar from "../../components/ChartBar/ChartBar";
import ChartArea from "../../components/ChartArea/ChartArea";
import ChartRadar from "../../components/ChartRadar/ChartRadar";
import Card from "../../components/Card/Card";
import ChartRadialBar from "../../components/ChartRadialBar/ChartRadialBar";
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

  const {
    data: activities,
    loading: loadingActivities,
    error: errorActivities,
  } = useFetch(`http://localhost:3000/user/${id}/activity`);

  const {
    data: performance,
    loading: loadingPerformance,
    error: errorPerformance,
  } = useFetch(`http://localhost:3000/user/${id}/performance`);

  if (error || errorSessions || errorActivities || errorPerformance) {
    return <Error />;
  }

  return loading ||
    loadingSessions ||
    loadingActivities ||
    loadingPerformance ? (
    <Loader />
  ) : (
    <div>
      <Header firstName={user.data.userInfos.firstName} />
      <div className="statistics-container">
        <div className="charts-container">
          <ChartBar activities={activities.data.sessions} />
          <div className="lowerCharts">
            <ChartArea sessions={averageSessions.data.sessions} />
            <ChartRadar
              indicators={performance.data.kind}
              performance={performance.data.data}
            />
            <ChartRadialBar score={user.data.todayScore || user.data.score} />
          </div>
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
