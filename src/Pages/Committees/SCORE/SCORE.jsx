import React from "react";
import "./SCORE.scss";
import logo from "../../../Assets/Committees/SCORE/logo.svg";
import WorkforceCard from "../../../Components/Workforce/WorkforceCard";
import { Button } from "react-bootstrap";
import CardList from "../../../Components/Cards/CardList";
import WFList from "./WFList";
import axios from "axios";
import publications from "./publications";

import colgate from "../../../Assets/Committees/SCORE/projectColgate.svg";
import zhermack from "../../../Assets/Committees/SCORE/projectZhermack.svg";
import research from "../../../Assets/Committees/SCORE/research.svg";

import delegate from "../../../Assets/Committees/SCORE/irem.png";
import { useEffect } from "react";
import { useState } from "react";

const SCORE = () => {
  // const [publications, setPublications] = useState(null);

  // const getPublications = async () => {
  //   const { data } = await axios.get(
  //     "localhost:3001/api/Committees/SCORE/Publications"
  //   );
  //   setPublications(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getPublications();
  // }, []);

  return (
    <div className="container scorePage">
      <img className="logo" src={logo} />
      <p className="description">
        The Standing Committee on Research and Education (SCORE) stresses the
        need for the students’ involvement within the dental scientific
        community by offering opportunities for the ones who desire to make a
        difference within the society.
      </p>
      {/* <WorkforceCard
        delegateImage={delegate}
        delegateName="Irem Türkan"
        delegatePosition="Vice President of Science & Research"
        WFList={WFList}
      /> */}

      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div
            className="col-lg-3 col-sm-12"
            style={{ borderRight: "1px solid #1D015C" }}
          >
            <img style={{ borderRadius: "100%" }} src={delegate} />
            <h3 className="subtitle">Dr. İrem Türkan</h3>
            <p className="position" style={{ marginBottom: "0px" }}>
              Vice President of Science & Research
            </p>
            <p className="position">Email: vpsr@iads-web.org</p>
            {/* <Button className="photoUpload">Upload Photo</Button>
            <br />
            <Button className="editWorkforce">Edit Workforce</Button> */}
          </div>
          <div className="col offset-1">
            <div className="row subtitle">Workforce Members</div>
            <div className="row">
              <div className="col-3 WF_memberList">
                <h4 className="role">Human Resources:</h4>
                <h4 className="name">Aneeqa Aslam</h4>
                <p className="country">Pakistan</p>
                <h4 className="name">Monisha Chintala</h4>
                <p className="country">India</p>

                <h4 className="role">IDRP:</h4>
                <h4 className="name">Ataberk Kayhan</h4>
                <p className="country">Turkey</p>
                <h4 className="name">İrem Erdoğdu</h4>
                <p className="country">Turkey</p>
              </div>
              <div className="col-3 WF_memberList">
                <h4 className="role">IDRP:</h4>
                <h4 className="name">Farih Aminah</h4>
                <p className="country">Indonesia</p>
                <h4 className="name">Dilara Kılıç </h4>
                <p className="country">Turkey</p>

                <h4 className="role">Content Manegement:</h4>
                <h4 className="name">Jana Alalami</h4>
                <p className="country">Northen Cyprus</p>
                <h4 className="name">Tarteel Barakat</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Efe Töre</h4>
                <p className="country">Turkey</p>
              </div>
              <div className="col-3 WF_memberList">
                <h4 className="role">Members:</h4>
                <h4 className="name">Marah Lahlouh</h4>
                <p className="country">Jordan</p>
                <h4 className="name">Mayar Danadna</h4>
                <p className="country">Palestine</p>

                <h4 className="name">Samin Sirous</h4>
                <p className="country">Iran</p>
                <h4 className="name">Serra Özdenak</h4>
                <p className="country">Northen Cyprus</p>
                <h4 className="name">Salar Chaychi</h4>
                <p className="country">Iran</p>
              </div>
              <div className="col-3 WF_memberList">
                <h4 className="role">Webinar Coordinator:</h4>
                <h4 className="name">Zhengis Zhamashev</h4>
                <p className="country">Kazakhstan</p>
                <h4 className="name">Yaren Sönmez</h4>
                <p className="country">Turkey</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="title" style={{ marginTop: "50px", marginBottom: "55px" }}>
        Projects
      </h1>

      <div className="projectsCards">
        <div className="projectCard colgate">
          <div className="ellipse">
            <img src={colgate} />
          </div>
          <h3 className="title" style={{ marginBottom: "0px" }}>
            International Bright Smiles Bright Future (İBSBF) Contest
          </h3>
          <p className="description">
            By enabling IADS members to produce and execute their innovative
            ideas, the international BSBF Contest will emanate Colgate's mission
            to connect underserved communities to oral health education, free
            dental screenings and treatment referrals.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              href="https://iads-web.com/projects/colgate"
              className="btn"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="projectCard zhermack">
          <div className="ellipse">
            <img src={zhermack} />
          </div>
          <h3 className="title">Zhermack© Webinars</h3>
          <p className="description">
            Expand your knowledge and skills with a variety of webinars on
            different topics such as Smile Esthetics, Prosthodontology,
            Periodontology and more and discover many tips and tricks for your
            learning journey and daily practice all the way from Itally provided
            by Zhermack.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              href="https://iads-web.com/projects/zhermack"
              className="btn"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="projectCard research">
          <div className="ellipse">
            <img src={research} />
          </div>
          <h3 className="title">
            International Bright Smiles Bright Future (İBSBF) Contest
          </h3>
          <p className="description">Coming soon!</p>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              className="btn"
              style={{ backgroundColor: "#676769 !important", border: "none" }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="publications">
        <h1
          className="title"
          style={{ marginTop: "50px", marginBottom: "55px" }}
        >
          Publications
        </h1>
        <CardList
          className="card-list"
          data={publications}
          textColor="blue"
        ></CardList>
        <br />
        <br />
      </div>
    </div>
  );
};

export default SCORE;
