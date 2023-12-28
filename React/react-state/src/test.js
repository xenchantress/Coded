import { useState} from "react";

function Test(){
    const [x, setX] = useState(0);
    function updateX(){
        setX(x+1);
    }
return <div onClick={updateX}>
    {x}
</div>;
}
export default Test;