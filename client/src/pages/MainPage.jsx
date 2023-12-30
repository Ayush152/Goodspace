import React, { useEffect, useState } from "react";
import { PassageUser } from '@passageidentity/passage-elements/passage-user';


import SideBar from "../components/SideBar";
import CameraPage from "./CameraPage";
import ResultPage from "./ResultPage";
import LocationPage from "./LocationPage";


const MainPage = () => {
  const [click, setClick] = useState("camera");
  const [data, setData] = useState([]);
  const [emotions, setEmotions] = useState({
    angry: 0,
    neutral: 0,
    happy: 0,
    surprised: 0,
    sad: 0,
    fearful: 0,
    disgusted: 0,
  });
  const [recordings, setRecordings] = useState({});
  const [userInfo, setUserInfo] = useState(null);


  useEffect(() => {
    let cancelRequest = false;


    new PassageUser().userInfo().then(userInfo => {
      if (!cancelRequest) {
        setUserInfo(userInfo);
        console.log(userInfo);
      }
    });


    return () => {
      cancelRequest = true;
    };
  }, []);

  return (
    <div>
        <div>
          <SideBar
            click={click}
            setClick={(clickInput) => {
              setClick(clickInput);
            }}
          />
          {click === "camera" ? (
            <CameraPage
              setNext={() => {
                setClick("bullet");
              }}
              data={data}
              setData={setData}
              setEmotions={setEmotions}
              setRecordings={setRecordings}
            />
          ) : click === "bullet" ? (
            <ResultPage emotionData={emotions} heartData={data} />
          ) : click === "location" ? (
            <LocationPage />
          ) : (
            <></>
          )}
        </div>
    </div>
  );
};


export default MainPage;