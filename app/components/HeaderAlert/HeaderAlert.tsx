"use client";

import React from "react";

const HeaderAlert = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-blue text-white text-center py-4 z-50 shadow-lg">
      <p className="text-lg font-inter">
        Precisa de ajuda?{" "}
        <a
          href="https://nwdsk.co/c17SA"
          target="_blank"
          className="text-yellow underline"
        >
          Clique aqui
        </a>{" "}
        para falar conosco!
      </p>
    </div>
  );
};

export default HeaderAlert;
