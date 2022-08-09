import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import styles from "./typeJobs.module.scss";
import { getListTypeMainJobAction } from "store/manageMainJob/mainJob.action";
import { RootState } from "store";
import { listMainJob } from "store/manageMainJob/mainJob.reducer";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 0,
        slidesToScroll: 1,
      },
    },
  ],
};

function TypeJobs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listMainJob } = useSelector((state: RootState) => state.manageMainJobReducer);
  const [showTooltip, setShowTooltip] = useState<string>("");

  useEffect(() => {
    dispatch(getListTypeMainJobAction());
  }, []);

  const renderToolTip = (props: any, job: listMainJob) => {
    let styleTooltip = {
      ...props,
      style: {
        ...props.style,
        top: "-10px",
      },
    };
    let columnCount = Math.floor(job.subTypeJobs.length / 7) || 1;
    return (
      <Tooltip id={job._id} {...styleTooltip}>
        <div
          className="list-group list-group-jobs"
          style={{ columnCount: columnCount }}
          onMouseLeave={() => setShowTooltip("")}
          onMouseMove={() => setShowTooltip(job._id)}
        >
          {job.subTypeJobs.map((subTypeJob: any) => (
            <Link
              key={subTypeJob._id}
              to={`/listJobs/type-job-id=${subTypeJob.typeJob}`}
              className="list-group-item list-group-item-action h6"
            >
              {subTypeJob.name}
            </Link>
          ))}
        </div>
      </Tooltip>
    );
  };

  return (
    <div className={`py-3 border-top d-none d-md-block ${styles.typeJobs}`}>
      <Slider {...settings}>
        {listMainJob?.map((job: listMainJob) => (
          <div className="text-center position-relative" key={job._id}>
            <OverlayTrigger
              placement="bottom"
              show={showTooltip === job._id ? true : false}
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderToolTip(props, job)}
            >
              <div
                role="button"
                className="py-2 job-name"
                onMouseLeave={() => setShowTooltip("")}
                onMouseMove={() => setShowTooltip(job._id)}
                onClick={() => {
                  navigate(`/detailmainjob/${job._id}`);
                  setShowTooltip("");
                }}
                style={{ color: showTooltip === job._id ? "green" : "inherit" }}
              >
                {job.name}
              </div>
            </OverlayTrigger>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TypeJobs;
