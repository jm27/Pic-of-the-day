import { useState, React } from "react";
import backUpImg from "../imgs/funky.png";

const Card = ({
  img = backUpImg,
  alt = "...",
  title = "date",
  subTitle = `Date:`,
  desc = "Nice pic man!",
  copyright = "Last updated 3 mins ago",
  id,
  loading,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   console.log(loading);
  //   if (!loading) {
  //     setIsLoading(true);
  //   }

  //   if (!loading && isLoading) {
  //     const timeout = setTimeout(() => {
  //       setIsLoading(false);
  //     }, 5000);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [loading, isLoading]);

  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const getText = () => {
    return isOpen ? desc : desc.slice(0, 150);
  };

  return (
    <div id={id} className="card m-4 p-1 mb-4 col-11 col-md-3 ">
      {/* {isLoading ? <h1>loading</h1> : <h2>not loading</h2>} */}
      <img
        src={img}
        className="card-img-top mt-2 img-thumbnail"
        alt={alt}
        style={{ height: "220px", maxHeight: "220px" }}
      ></img>
      <div className="card-body mt-2 align-middle">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <small className="text-muted">{subTitle}</small>
        </p>
        <p className="card-text text-wrap ">{getText()}</p>
        <button className="btn btn-secondary m-2" onClick={toggle}>
          {isOpen ? "Show Less" : "Read More"}
        </button>
        <p className="card-text mt-2">
          <small className="text-muted">Copyright: {copyright}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
