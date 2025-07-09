
type ButtonProps = {
    buttonName: string,
    type: "button" | "submit" | "reset" | undefined,
    onClick: (event: React.MouseEvent<HTMLButtonElement>)=> void
 }
 
 export const Button:React.FC<ButtonProps>=({buttonName,type,onClick})=> {
     return(
        <button className="btn btn-primary w-100" onClick={onClick} type={type}>{buttonName}</button>
     )
 }