import React from 'react';
import qr from "./assets/images/image-qr-code.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="p-3 bg-white w-60 rounded-lg">
        <img src={qr} alt="QR code" className="rounded-lg h-52 w-52 mx-auto" />
        <div className="mt-4">
          <h3 className="text-center font-bold text-lg">Improve your front-end skills by building projects</h3>
          <p className="mt-2 text-sm text-center text-gray-600">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
