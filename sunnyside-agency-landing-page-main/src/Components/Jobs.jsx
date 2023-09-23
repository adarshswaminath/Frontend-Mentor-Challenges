import image1 from "../assets/image-graphic-design.jpg";
import image2 from "../assets/image-photography.jpg";

function Jobs() {
  // Define styles for the text overlay
  const textOverlayStyle = {
    position: "absolute",
    top: "50%", // Adjust this to position the text vertically
    left: "50%", // Adjust this to position the text horizontally
    transform: "translate(-50%, -50%)", // Center the text both vertically and horizontally
    color: "white", // Text color
  };

  return (
    <div className="grid lg:flex">
      <div style={{ position: "relative" }}>
        <img src={image1} alt="" />
        <div
          style={textOverlayStyle}
          className="text-center  font-fraunces text-white"
        >
          <h1 className="text-2xl font-bold text-green-800">Graphic Design</h1>
          <p className="mt-4 text-base text-green-900">
            <span className="block font-semibold">Great Design Makes You Memorable</span>
            We deliver artwork that underscores your brand message and captures potential clients' attention.
          </p>
        </div>
      </div>
      <div style={{ position: "relative" }} >
        <img src={image2} alt="" />
        <div
          style={textOverlayStyle}
          className="text-center font-fraunces text-white"
        >
          <h1 className="text-2xl font-bold text-blue-900">Photography</h1>
          <p className="mt-4 text-base text-blue-900">
            <span className="block font-semibold">Enhance Your Credibility</span>
            Increase your credibility by obtaining stunning, high-quality photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
