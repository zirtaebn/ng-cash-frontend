import { useNavigate } from 'react-router-dom';

// styles
import * as C from './styles';

type ButtonProps = {

    text:string,
    redirect:string,
    invert?:boolean
}

const Button = ({ text, redirect, invert }:ButtonProps) => {

    const navigate = useNavigate();

    const handleRedirect = () => navigate(`/${redirect}`);

    return(

        <C.Container 
            onClick={handleRedirect}
            style={{
                
                backgroundColor: invert ? '#000' : '#fff', 
                color: invert ? '#fff' : '#000',
                textDecoration: invert ? 'underline' : 'none'
                
            }}
        >
            {text}
        </C.Container>
    )
}

export default Button;