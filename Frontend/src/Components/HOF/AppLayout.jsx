import React from "react";
import Title from "../Shared/Title";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <div>Header</div>
        <WrappedComponent {...props} />
        <div>Footer</div>
      </>
    );
  };
};

export default AppLayout;
