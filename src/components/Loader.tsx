import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="loader-container">
      <ClipLoader loading={true} size={30} />
    </div>
  );
};

export default Loader;
