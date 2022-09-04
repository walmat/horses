import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type Props = {
    amount: number;
    setAmount: Dispatch<SetStateAction<number>>;
    totalMinted: number;
};

export const blockInvalidChar = (e: any) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

export const Counter = ({ amount, setAmount, totalMinted }: Props): any => {
    return (
        <Flex>
            <Button
                onClick={() =>
                    setAmount((prev) => {
                        if (Number(prev) === 1) {
                            return Number(prev);
                        }

                        return Number(prev - 1);
                    })
                }
            >
                -
            </Button>
            <Input
                id="amount"
                onKeyDown={blockInvalidChar}
                value={amount}
                onBlur={(e: any) => {
                    const n = Number(e.target.value);
                    const nanny = Number.isNaN(n);
                    if (nanny || n <= 0) {
                        return setAmount(1);
                    }

                    if (n > 7777 - totalMinted) {
                        return setAmount(7777 - totalMinted);
                    }

                    setAmount(n);
                }}
                onChange={(e: any) => {
                    const n = Number(e.target.value);
                    const nanny = Number.isNaN(n);
                    if (nanny || n <= 0) {
                        return setAmount(1);
                    }

                    setAmount(n);
                }}
            />

            <Button
                onClick={() =>
                    setAmount((prev) => {
                        if (Number(prev) === 7777) {
                            return Number(prev);
                        }

                        return Number(prev + 1);
                    })
                }
            >
                +
            </Button>
        </Flex>
    );
};

export const Flex = styled.div`
    display: flex;
    height: 58px;
    width: 128px;
    background-color: #456c92;
    align-items: center;
    border-radius: 8px;
    justify-content: center;
    border: 2px solid;
    padding: 4px 12px;
    margin: 0 auto;
    box-shadow: 1px 3px 0;
    font-size: 16px;
`;

export const Button = styled.button`
    z-index: 2;
    min-width: 24px;
    min-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
    border-radius: 4px;
    background-color: #e54738 !important;
`;

export const Input = styled.input`
    z-index: 1;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 4px;
    background-color: #d8d2bf;
    border: 2px solid #000;

    margin: 0 4px;
    padding: 4px 0;
    height: 32px;
    min-width: 36px;
`;
