interface ButtonProps{
    label:string,
    isActive:boolean,
    onClick:()=>void
}
const Button:React.FC<ButtonProps> = ({label,isActive,onClick}) => {
    return ( <div onClick={()=>{onClick()}} className={`${isActive?' font-bold':''}  duration-300`}>
       {label} 
    </div> );
}
 
export default Button;