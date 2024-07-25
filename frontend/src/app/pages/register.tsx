import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod'
import { Input } from 'src/ui/Input';
import { FormBlock } from 'src/ui/FormBlock';
import { Label } from 'src/ui/Label';
import { Stack } from 'src/ui/layouts/Stack/Stack';
import Button from 'src/ui/Button';
import { Link } from 'react-router-dom';

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type RegisterData = z.infer<typeof registerSchema>

export function Register() {
    const { 
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<RegisterData>({
        resolver: zodResolver(registerSchema),
      });

    async function registerUser(values : RegisterData) {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/v1/users/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        });
        const data = await response.json();
    }

    return(
        <div className='flex flex-col items-center justify-center h-full'>
            <div className='flex flex-col w-[460px]'>
                <Stack direction='col' gapy={16}>  
                    <h1 className="text-2xl font-semibold pb-2">Inscription</h1>
                    <div className="pb-6">Bienvenue sur StudyBoost, inscrivez-vous pour booster vos révisions dès maintenant.</div>
                    <form onSubmit={handleSubmit(registerUser)}>
                        <Stack direction='col' gapy={16}>

                            <FormBlock>
                                <Label htmlFor="email">E-mail : </Label>
                                <Input {...register('email')} type="email" placeholder='Email' />
                                {errors.email?.message && <p>{errors.email?.message}</p>}
                            </FormBlock>

                            <FormBlock>
                                <Label htmlFor="pass">Mot de passe : </Label>
                                <Input {...register('password')} type="password" placeholder='Mot de passe' />
                                {errors.password?.message && <p>{errors.password?.message}</p>}
                            </FormBlock>
                            
                            <div>
                                <Button className="w-full" type="submit">Je m'inscrit</Button>
                            </div>
                        </Stack>
                    </form>
                    <div>Vous avez déja un compte ? <Link className="underline" to="/login">Je me connecte</Link> </div>
                </Stack>
            </div>
        </div>
    )
}