import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";


const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

const Calculadora = () => {
    return (
        <div>
                <Wrapper>
                    <Screen value={0} />
                    <ButtonBox>
                        {
                            btnValues.flat().map((btn, i) => {
                                return (
                                    <Button
                                        key={i}
                                        className={btn === "=" ? "equals" : ""}
                                        value={btn}
                                        onClick={() => {
                                            console.log(`${btn} clicked!`);
                                        }}
                                    />
                                );
                            })
                        }
                    </ButtonBox>
                </Wrapper>
        </div>
    );
};

export default Calculadora