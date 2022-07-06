import { Background } from "./styled/Loading.styled";
import { CircularProgress } from "@mui/material";

const Loading = () => (
    <Background>
        <CircularProgress size="5rem" />
    </Background>
);

export default Loading;