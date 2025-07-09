
type InputProps = {
    type: string,
    name: string,
    value: string,
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
 }
 
 export const Input:React.FC<InputProps>=({type,name,value,onChange})=> {
     return(
        <input type={type} name={name} value={value} onChange={onChange} className="border rounded px-1 py-1"/>
     )
 }