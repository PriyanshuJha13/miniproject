import React from "react";

export default function Footer() {
  return (
    <div className="row ">
      <footer className="bg-gray-100 text-center">
        
        <div
          className="text-center text-gray-700 p-4"
          style={{ backgroundColor: "rgba(243,243,243,1)" }}
    
        >
          Email us at support@brightchamps.com
          <>
            <br />© Copyright 2022 BrightChamps
          </>
          <a
            className="text-gray-800"
            href="https://tailwind-elements.com/"
          ></a>
        </div>
      </footer>
    </div>
  );
}
