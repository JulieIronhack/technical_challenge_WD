import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PhoneCard(props) {
  return (
    <>
      <Accordion className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordionHeader">
            {props.name}
          </Accordion.Header>
          <Accordion.Body>
            <h4>{props.manufacturer}</h4>
            <h4>{props.color}</h4>
            <h4>{props.screen}</h4>
            <p>{props.description}</p>
            <h4>{props.price}</h4>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default PhoneCard;
