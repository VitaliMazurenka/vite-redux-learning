import Input from "components/Input";
import Button from "components/Button";
import { Homework29Wrapper } from "./styles";
import { useState, ChangeEvent } from "react";

function Homework29 (){
    const [inputData,setInputData] = useState<string>("");
    const [data,setData] = useState <string>("");

    const onChangeData = (event: ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value);
      };


    return ( 
    <Homework29Wrapper>
        
    </Homework29Wrapper>
    )
}

export default Homework29;