import { Content, PhoneImg, SameLine, Manufacturer, Description } from "./styled/PhoneDetails.styled";

const PhoneDetails = ({ image, name, manufacturer, description, color, price, screen, processor, ram }) => {
    return (
        <Content>
            <PhoneImg>
                <img src={image} alt={name} />
            </PhoneImg>
            <SameLine>
                <h1>{name}</h1>
                <Manufacturer>{manufacturer}</Manufacturer>
            </SameLine>
            <Description>{description}</Description>
            <div>
                <h4>Info</h4>
                <p>
                    Color: {color}<br />
                    Price: {price}<br />
                    Screen: {screen}<br />
                    Processor: {processor}<br />
                    Ram: {ram}
                </p>
            </div>
        </Content>
    );
};

export default PhoneDetails;