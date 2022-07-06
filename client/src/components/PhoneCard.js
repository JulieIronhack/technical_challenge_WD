import StyledLink from "./styled/StyledLink";
import { PhoneImg, Content, Name, Manufacturer } from "./styled/PhoneCard.styled";

const PhoneCard = ({ _id, image, name, manufacturer }) => (
    <section>
        <StyledLink to={`/${_id}`}>
            <Content>
                <PhoneImg src={image} alt={name} />
                <div>
                    <Name>{name}</Name>
                    <Manufacturer>{manufacturer}</Manufacturer>
                </div>
            </Content>
        </StyledLink>
        <hr />
    </section>
);

export default PhoneCard;