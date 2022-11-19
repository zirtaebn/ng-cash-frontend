// components
import Button from '../../components/Button';

// styles
import * as C from './styles';

const Home = () => {

    return(
        
        <C.Container>
            <h1>NG.CASH</h1>

            <div>
                <Button
                    redirect='signup'
                    text='criar conta'
                />

                <Button
                    redirect='login'
                    text='acessar minha conta'
                    invert
                />
            </div>
        </C.Container>
    )
}

export default Home;