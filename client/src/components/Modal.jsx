import { images } from "../assets/index";

import "./Modal.css";

export const Modal = (props) => {
  return (
    <>
      {props.showLoadingSpinner && (
        <div className="phoneDetailsModal__loadingSpinner"></div>
      )}

      {!props.showLoadingSpinner && (
        <>
          <img
            className="phoneDetailsModal__img"
            src={images[props.phoneDetails.imageFileName]}
            alt={`${props.phoneDetails.name}`}
          />
          <h2 className="phoneDetailsModal__header">
            {props.phoneDetails.name}
          </h2>
          <small className="phoneDetailsModal__manufacturer">
            {props.phoneDetails.manufacturer}
          </small>
          <p className="phoneDetailsModal__description">
            {props.phoneDetails.description}
          </p>
          <p className="phoneDetailsModal__price">
            Price: {props.phoneDetails.price}€
          </p>

          <div className="phoneDetailsModal__technicalDetails">
            <h3 className="phoneDetailsModal__technicalDetails__header">
              Technical details
            </h3>
            <p>Color: {props.phoneDetails.color}</p>
            <p>Screen: {props.phoneDetails.screen}</p>
            <p>Processor: {props.phoneDetails.processor}</p>
            <p>RAM: {props.phoneDetails.ram}</p>
          </div>

          <button
            className="phoneDetailsModal__closeBtn"
            onClick={props.onCloseModal}
          >
            Close
          </button>
        </>
      )}
    </>
  );
};
