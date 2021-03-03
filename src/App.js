import { React, useState, useEffect } from "react";
import dotenv from "dotenv";
import { getImage } from "./auth/apiCore";
import dateFormat from "dateformat";
import "./App.css";
import Nabvar from "./Components/Navbar";
import NavItem from "./Components/NavItem";
import Icon from "./Components/Icon";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Pagination from "./Components/Pagination";

dotenv.config();

function App() {
  const apiKey = `https://api.nasa.gov/planetary/apod?api_key=UNGhJmUc9LxwxgrdDUCjSTUnddcp87cQrPJPCONq`;
  // Create state for Url, object, date, loading
  const [url, setUrl] = useState(apiKey);
  const [pictures, setPictures] = useState([]);
  const [date, setDate] = useState("2019-06-16");
  const [loading, setLoading] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);
  const [random, setRandom] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [picsPerPage] = useState(3);

  // Get current pics
  const indexOfLastPic = currentPage * picsPerPage;
  const indexOfFirsPic = indexOfLastPic - picsPerPage;
  const currentPics = pictures.slice(indexOfFirsPic, indexOfLastPic);

  // Change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
  };

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setPictures([data]))
        .catch((err) => console.log(err));
    };

    if (loading) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2500);

      return () => {
        clearTimeout(timeout);
      };
    }
    if (!random) {
      fetchData();
    }
  }, [url, loading, random]);

  const singleDateChange = (event) => {
    setDate("");
    setDate(event.target.value);
    console.log(event.target.value);
  };

  const singleDateSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setPictures([]);
    setRandom(false);
    setUrl(`${apiKey}&date=${date}`);
  };

  const showSingleDateForm = () => {
    setToggleForm(true);
  };

  const hideForm = () => {
    setToggleForm(false);
  };

  const displayForm = () => {
    return toggleForm ? (
      <Form handleChange={singleDateChange} handleSubmit={singleDateSubmit}>
        <Button
          className="col-md-2 btn btn-outline-dark me-3"
          name="Submit"
          type="submit"
          onclick={singleDateSubmit}
        ></Button>
        <Button
          className="col-md-2 btn btn-outline-dark me-2"
          name="Back"
          type="button"
          onclick={hideForm}
        ></Button>
      </Form>
    ) : (
      <>
        <Button onclick={showSingleDateForm}></Button>
        <Button name="Random Image" onclick={setRandomDate}></Button>
        <Button name="Get Random Images" onclick={randomImages}></Button>
      </>
    );
  };

  const randomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toString();
  };

  const setRandomDate = () => {
    setLoading(true);
    setDate("");
    setPictures([]);
    setRandom(false);
    setDate(
      dateFormat(randomDate(new Date(1996, 0, 16), new Date()), "isoDate")
    );
    setUrl(`${apiKey}&date=${date}`);
  };

  const randomImages = () => {
    setLoading(true);
    setRandom(true);
    setDate("");
    setPictures([]);
    getImage("&count=14").then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPictures(data);
      }
    });
  };

  const displayCards = (picture) => {
    return loading ? (
      <div className="loader"></div>
    ) : (
      picture.map((pic, i) => (
        <Card
          id={i}
          img={pic.url}
          alt={pic.title}
          title={pic.title}
          subTitle={`Date: ${pic.date}`}
          desc={pic.explanation}
          copyright={pic.copyright}
          // loading={loading}
        ></Card>
      ))
    );
  };

  return (
    <>
      <div className="App">
        <Nabvar brand={<i className="fa fa-cog fa-spin fa-2x fa-fw"></i>}>
          <NavItem
            href="https://www.linkedin.com/in/j-esquer/"
            tooltip="Let's connect with Linkedin"
          >
            <Icon></Icon>
          </NavItem>
          <NavItem
            href="https://github.com/jm27"
            tooltip="Checkout my Github page"
          >
            <Icon iconName="fa-1x fab fa-github-alt fa-stack-1x fa-inverse"></Icon>
          </NavItem>
          <NavItem
            href="mailto:jme2791@gmail.com?Subject=Hello"
            tooltip="Send me an email"
          >
            <Icon iconName="fa-1x fas fa-envelope-open-text fa-stack-1x fa-inverse"></Icon>
          </NavItem>
        </Nabvar>
        <h2 className="header mt-4 p-4 my-0 mx-0 display-4">
          Picture of the day NASA
        </h2>
        <div className="d-grid gap-2 d-md-block p-2">{displayForm()}</div>
        <div className="row mt-4 pt-4 mb-4 pb-4 m-0 justify-content-center">
          {random ? displayCards(currentPics) : displayCards(pictures)}
          <div>
            {random && !loading ? (
              <Pagination
                picsPerPage={picsPerPage}
                totalPics={pictures.length}
                paginate={paginate}
              ></Pagination>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
