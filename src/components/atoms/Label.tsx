
type LabelProps = {
   labelName: string,
}

export const Label:React.FC<LabelProps>=({labelName})=> {
    return(
        <label>{labelName}</label>
    )
}