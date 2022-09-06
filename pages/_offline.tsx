import React from "react";

import { Wrapper, Main } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Fallback: React.FC = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <Main />
        </Wrapper>
    );
};
export default Fallback;
