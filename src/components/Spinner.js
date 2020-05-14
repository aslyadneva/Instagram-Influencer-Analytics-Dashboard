import React, {Fragment} from 'react'; 

const Spinner = () => {
  return (
    <div className="Spinner d-flex flex-column justify-content-center">
      <h3 className="Spinner__Title mb-3">LOADING</h3>
      <div className="lds-ring align-self-center">
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
  ); 
}

export default Spinner; 