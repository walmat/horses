import React from "react";

import { Wrapper, Main } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Home: React.FC = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <Main />
        </Wrapper>
    );
};
export default Home;
