import React, { useState } from "react";
import { Sidebar, Header, Button } from "../components";
import { isEmpty } from "../utils";

const CreateVideo: React.FC = () => {
  const [transcript, setTranscript] = useState("");
  const [actor, setActor] = useState("yoyo"); // actor name should match with file name
  const [videoAttribute, setVideoAttribute] = useState("actor");

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
                attr="voice"
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
              <ActorAttribute selectedActor={actor} setActor={setActor} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

type AttributeProps = {
  attr: "actor" | "voice" | "alignment" | "background";
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

const ActorAttribute = ({ selectedActor, setActor }) => {
  const actors = ["anna", "yoyo", "skye", "mike", "vincent", "peter", "may"];
  return (
    <ul className="actors-list">
      {actors.map((actor) => (
        <li
          className={selectedActor === actor ? "active" : ""}
          key={actor}
          onClick={() => setActor(actor)}
        >
          <img src={`./actors/${actor}.png`} alt="actor" />
          <span>{actor}</span>
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

const AlignmentAttribute: React.FC = () => {
  return (
    <div>
      <p>alignment</p>
    </div>
  );
};

const BackgroundAttribute: React.FC = () => {
  return (
    <div>
      <p>background</p>
    </div>
  );
};

export default CreateVideo;
