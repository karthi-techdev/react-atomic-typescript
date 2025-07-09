import { Label } from "../atoms/Label"
import { Input } from "../atoms/Input"
import { useEffect, useState } from "react";

type InputGroupProps = {
    type: string,
    name: string,
    labelName: string,
    value: string,
    error?: string,
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
 }
 
 export const InputGroup:React.FC<InputGroupProps>=({name,type,labelName,value,error,onChange})=> {

   const [shake, setShake] = useState(false);

   useEffect(() => {
       if (error) {
           setShake(true);
           const timer = setTimeout(() => setShake(false), 300); // match animation duration
           return () => clearTimeout(timer);
       }
   }, [error]);

     return(
        <div className="input-group d-flex flex-column">
           <Label labelName={labelName} />
           <Input type={type} name={name} value={value} onChange={onChange} />
           <span
                className={`${error ? "text-danger" : "invisible"}${shake ? " shake" : ""}`}
            >
                {error || "placeholder"}
            </span>
        </div>
     )
 }