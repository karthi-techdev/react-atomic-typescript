import { Button } from "../atoms/Button"

type ButtonGroupProps = {
    buttonName: string,
    type: "button" | "submit" | "reset" | undefined,
    onClick: (event: React.MouseEvent<HTMLButtonElement>)=> void
 }
 
 export const ButtonGroup:React.FC<ButtonGroupProps>=({buttonName,type,onClick})=> {
     return(
        <div className="button-grp">
           <Button buttonName={buttonName} type={type} onClick={onClick} />
        </div>
     )
 }