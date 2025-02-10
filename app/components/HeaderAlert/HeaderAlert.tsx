"use client";

import React from "react";

const HeaderAlert = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-green text-white text-center py-4 z-50 shadow-lg">
      <p className="text-lg font-inter">
        Novo Número Oficial{" "}
        <a
          href="https://wa.me/message/ZQW6XHYT6UVGI1"
          target="_blank"
          className="text-green underline"
        >
          +55 44 9855-2045
        </a>{" "}
        
      </p>
    </div>
  );
};

export default HeaderAlert;
