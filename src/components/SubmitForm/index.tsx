import { useForm, SubmitHandler } from 'react-hook-form';
import { AiOutlineCheckCircle } from 'react-icons/ai';

// utilities
import { UserRequest } from '../../@types/UserRequest';

// styles
import * as C from './styles';

type SubmitFormProps = {

    handleSubmitClick:SubmitHandler<UserRequest>,
    submitButtonText:string
    errorMessage:string,
    successMessage?:string,
    password?:boolean  
}

const SubmitForm = ({ handleSubmitClick, successMessage, errorMessage, submitButtonText, password }:SubmitFormProps) => {

    const { register, handleSubmit } = useForm<UserRequest>();

    return (

        <C.Container onSubmit={handleSubmit(handleSubmitClick)}>

            { !successMessage &&
                <C.Form>  
                    <label htmlFor="username" >
                        Username
                    </label>
                    <input
                        {...register('username')}
                        id="username"
                        type="text"
                        required
                        placeholder="Digite um username"
                    />

                    <label htmlFor={password ? 'password' : 'value'} >
                        {password ? 'Senha' : 'Valor'}
                    </label>
                    <input
                        {...password ? {...register('password')} : {...register('value')}}
                        id={password ? 'password': 'value'}
                        type={password ? 'password' : 'number'}
                        required
                        placeholder={password ? 'Digite uma senha' : 'Digite um valor'}
                    />

                    { errorMessage && <p>{errorMessage}</p>}

                    <button>
                        {submitButtonText}          
                    </button>
                </C.Form>
            }

          { successMessage &&
            <>
                {successMessage}
                <br/>
                <AiOutlineCheckCircle  size={60}/>
            </>
          }

        </C.Container>
    )
}

export default SubmitForm;