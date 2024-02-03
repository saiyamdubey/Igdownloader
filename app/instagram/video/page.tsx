// UseClientPage.js

import React from "react";

type Props = {
  Video: string; // Assuming Video is a string, change the type if necessary
};

const UseClientPage: React.FC<Props> = ({ Video }) => {
  return (
    <>
      <div className="">
        {Video}
        <h1>hello from page of the iglinks</h1>
      </div>
    </>
  );
};

export default UseClientPage;
