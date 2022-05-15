import React, { useState } from "react";
import { Sidebar, Header, Button } from "../components";
import { isEmpty } from "../utils";

const actors = ["anna", "yoyo", "skye", "mike", "vincent", "peter", "may"];
const backgrounds = [
  "office",
  "space",
  "noise",
  "meeting room",
  "books",
  "desk",
];

const CreateVideo: React.FC = () => {
  const [transcript, setTranscript] = useState("");
  const [videoAttribute, setVideoAttribute] = useState("actor");
  const [actor, setActor] = useState("yoyo"); // actor name should match with file name
  const [background, setBackground] = useState("office"); // background name should match with file name
  const [alignment, setAlignment] = useState("center");

  return (
    <div className="app-wrapper create-video-container">
      <Sidebar />
      <div className="app-body-container">
        <Header title="create video" />
        <div className="video-editor">
          <div className="video-preview-container">
            <div className="video-preview">
              <img src={`./actors/${actor}.png`} alt="actor" />
              <Button
                additionalClass="preview-button"
                text="Preview"
                btntype="secondary"
              />
            </div>
            <div className="video-text">
              <textarea
                placeholder="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages"
                onChange={(val) => setTranscript(val.target.value)}
              />
              <Button
                text="Listen"
                btntype={isEmpty(transcript) ? "default" : "primary"}
                disabled={isEmpty(transcript)}
              />
            </div>
          </div>
          <div className="video-customisation">
            <ul className="video-attributes-tab">
              <VideoAttributeItem
                attr="actor"
                selectedAttr={videoAttribute}
                setAttr={setVideoAttribute}
              />
              <VideoAttributeItem
                attr="alignment"
                selectedAttr={videoAttribute}
                setAttr={setVideoAttribute}
              />
              <VideoAttributeItem
                attr="background"
                selectedAttr={videoAttribute}
                setAttr={setVideoAttribute}
              />
            </ul>
            {videoAttribute === "actor" && (
              <ImagesList
                selctedVal={actor}
                setVal={setActor}
                type="actors"
                list={actors}
              />
            )}
            {videoAttribute === "voice" && <VoiceAttribute />}
            {videoAttribute === "alignment" && (
              <AlignmentAttribute
                selectedAlignment={alignment}
                setAlignment={setAlignment}
              />
            )}
            {videoAttribute === "background" && (
              <ImagesList
                selctedVal={background}
                setVal={setBackground}
                type="backgrounds"
                list={backgrounds}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

type AttributeProps = {
  attr: "actor" | "alignment" | "background";
  selectedAttr: string;
  setAttr: (attr: string) => void;
};

const VideoAttributeItem: React.FC<AttributeProps> = ({
  attr,
  selectedAttr,
  setAttr,
}) => {
  return (
    <li
      className={attr === selectedAttr ? "active" : ""}
      onClick={() => setAttr(attr)}
    >
      {attr}
    </li>
  );
};

const ImagesList = ({ selctedVal, setVal, type, list }) => {
  return (
    <ul className="images-list">
      {list.map((val) => (
        <li
          className={selctedVal === val ? "active" : ""}
          key={val}
          onClick={() => setVal(val)}
        >
          <img src={`./${type}/${val}.png`} alt={`${type} pic`} />
          <span>{val}</span>
        </li>
      ))}
    </ul>
  );
};

const VoiceAttribute: React.FC = () => {
  return (
    <div>
      <p>voice</p>
    </div>
  );
};

const AlignmentAttribute = ({ selectedAlignment, setAlignment }) => {
  return (
    <ul className="alignment-list">
      <li
        className={selectedAlignment === "left" ? "active" : ""}
        onClick={() => setAlignment("left")}
      >
        Left
      </li>
      <li
        className={selectedAlignment === "center" ? "active" : ""}
        onClick={() => setAlignment("center")}
      >
        Center
      </li>
      <li
        className={selectedAlignment === "right" ? "active" : ""}
        onClick={() => setAlignment("right")}
      >
        Right
      </li>
    </ul>
  );
};

export default CreateVideo;
