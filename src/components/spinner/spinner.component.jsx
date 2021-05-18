import {SpinnerContainer, SpinnerOverlay} from "./spinner.styles";
import React from 'react';

const SpinnerComponent = WrappedComponent => (
  {isLoading, ...otherProps}) => {
  return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    ) :
    (<WrappedComponent {...otherProps}/>)
}


export default SpinnerComponent;
