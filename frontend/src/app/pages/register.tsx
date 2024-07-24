import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod'

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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, 
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
        <div className='flex flex-col'>  
            <h1 className="text-2xl font-semibold pb-2" p->Inscription</h1>
            <div className="pb-6">Bienvenue sur StydyBoost, inscrivez-vous pour booster vos révisions dès maintenant.</div>
            <form onSubmit={handleSubmit(registerUser)}>
                <div className="pb-4">
                    <label htmlFor="email">E-mail : </label>
                    <input className='border text-black' {...register('email')} type="email" placeholder='Email' />
                    {errors.email?.message && <p>{errors.email?.message}</p>}
                </div>
                <div className="pb-4">
                    <label htmlFor="pass">Mot de passe : </label>
                    <input className='border text-black' {...register('password')} type="password" placeholder='Mot de passe' />
                    {errors.password?.message && <p>{errors.password?.message}</p>}
                </div>
                <div>
                    <button className="border bg-blue-600 rounded-md w-[20rem]" type="submit">Je m'inscrit</button>
                </div>
            </form>
        </div>
    )
}