import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Series from "../interfaces/Series";
import { series } from "../services/seriesService";
import Navbar from "./Navbar";

interface SeriesDetailsProps {
    
}
 
const SeriesDetails: FunctionComponent<SeriesDetailsProps> = () => {
  let navigate = useNavigate();
    let { rank } = useParams();
    let currentSeries: Series = series.find((s) => s.rank == Number(rank)) as Series;

    return <>
    <Navbar/>
<div className="card mb-3 container">
    <div className="row g-2">
    <div className="col-md-3">
      <img src={currentSeries.img} className="img-fluid rounded-start" alt={currentSeries.name} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{currentSeries.name}</h3>
        <h5 className="card-text">{currentSeries.rate}</h5>
        <p className="card-text">{currentSeries.description}</p>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-secondary mt-3" onClick={()=> navigate(-1)}>
            <i className="fa-solid fa-chevron-left"></i>GoBack</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>;
};
 
export default SeriesDetails;