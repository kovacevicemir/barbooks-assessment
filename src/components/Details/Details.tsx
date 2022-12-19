import { useNavigate, useParams } from "react-router-dom";
import useApi from "../useApi";

const Details = () => {
  const navigation = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useApi({ type: "details", searchQuery: id });

  if (data) {
    return (
      <div>
        <h2 style={{ color: "red" }}>{data.title}</h2>
        <p style={{ color: "whitesmoke" }}>{JSON.stringify(data, null, 2)}</p>
        <button style={{ color: "white" }} onClick={() => navigation("/")}>
          Go Back
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <h3 style={{ color: "white" }}>Loading...</h3>
      </div>
    );
  }

  return <div>Something went wrong...</div>;
};

export default Details;
