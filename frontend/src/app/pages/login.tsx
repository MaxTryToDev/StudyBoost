import { Input } from 'src/ui/Input';
import { FormBlock } from 'src/ui/FormBlock';
import { Label } from 'src/ui/Label';
import { Stack } from 'src/ui/layouts/Stack/Stack';
import Button from 'src/ui/Button';
import { Link } from 'react-router-dom';
import { useEffect, useContext, useState, FormEvent } from 'react';
import { AuthContext } from "../contexts/auth-context";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const {auth, setAuthData} = useContext(AuthContext);
    const navigate = useNavigate();

    async function loginUser(e: FormEvent) {
      e.preventDefault();
          const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/v1/users//login`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ email, password })
          });
          const data = await response.json();
          if (response.ok) {
              setAuthData(data);
              setMessage(`Connecté en tant que : ${email}`);
              console.log("Data :", data)
              console.log("Email :", auth.data?.email, "Token :", auth.data?.token)
          } else {
              setMessage("Echec de la connexion");
          }
    }

    useEffect(() => {
        console.log("Auth :", auth)
        if (auth.data?.token) {
            navigate("/courses");
            console.log("Email :", auth.data?.email, "Token :", auth.data?.token)
        }
    }, [auth, navigate]);

    return(
        <div className='flex flex-col items-center justify-center h-full'>
            <div className='flex flex-col w-[460px]'>
            <Stack direction='col' gapy={16}>  
                <h1 className="text-2xl font-semibold pb-2">Connexion</h1>
                <form onSubmit={loginUser}>
                    <Stack direction='col' gapy={16}>

                        <FormBlock>
                            <Label htmlFor="email">E-mail : </Label>
                            <Input onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" required />
                        </FormBlock>

                        <FormBlock>
                            <Label htmlFor="pass">Mot de passe : </Label>
                            <Input onChange={e => setPassword(e.target.value)} type="password" id="password" name="password" required />
                        </FormBlock>

                        <div>
                            <Button className="w-full" type="submit">Connexion</Button>
                        </div>
                    </Stack>
                </form>
                <div>Vous n'avez pas de compte ? <Link className="underline" to="/register">Je m'inscrit</Link> </div>
                <div>{message}</div>               
              </Stack>
            </div>
        </div>
    )
}