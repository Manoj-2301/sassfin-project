import './Style.scss'

const Button = ({icon,text,color, tcolor,p,type}) => {

  return (
    <div>
      <button type={type} className="button" style={{backgroundColor:color, color:tcolor, padding:p}}>{icon}{text}</button>
    </div>
  );
}

export default Button;
