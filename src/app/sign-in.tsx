import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import authService from '../services/auth-service'
import { Loader } from 'lucide-react';
import { toast } from 'sonner';

const SignInSchema = z.object({
  email: z
    .email({ error: 'Email inválido.' }),
  password: z
    .string({ error: 'A senha é obrigatória' })
    .trim()
    .min(4, { error: 'A senha deve conter pelo menos 4 caracteres' })
});

type SignInPayload = z.infer<typeof SignInSchema>;

export function SignIn() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: authService.signIn,
    onError: (err) => {
      toast.error(err.message, {
        style: {
          color: 'white',
          background: 'red'
        }
      })
    },
  })

  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '' 
    }
  })

  const onSubmit = async (payload: SignInPayload) => {
    const { token } = await mutateAsync(payload)
    
    toast.success('Logado com sucesso.', {
      style: {
        color: 'white',
        background: 'green'
      }
    })
  }

  return (
    <div className="max-w-[1400px] w-full m-auto py-4 flex flex-col items-center gap-16 mt-32">
      <h1 className="text-2xl"> Entre com sua conta</h1>

      <form 
        autoComplete="off"
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-lg w-full flex flex-col gap-4" 
      >
        <Controller 
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="flex flex-col w-full">
              <label htmlFor="email"> Email </label>
              <Input 
                {...field} 
                className={fieldState.invalid ? 'border-red-500' : ''}
                type='email'
                id="email" 
                name="email" 
              />
              {fieldState.invalid && (
                <small className='text-red-500 mt-2'>
                  {fieldState.error?.message}
                </small>
              )}
            </div>
          )}
        />
        
        <Controller 
          name='password'
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="flex flex-col w-full">
              <label htmlFor="password"> Senha </label>
              <Input 
                {...field}
                className={fieldState.invalid ? 'border-red-500' : ''}
                type="password" 
                id="password" 
                name="password" 
              />
              {fieldState.invalid && (
                <small className='text-red-500 mt-2'>
                  {fieldState.error?.message}
                </small>
              )}
            </div>
          )}
        />

        <Button 
          disabled={isPending}
          className="w-full mt-8 flex justify-center items-center gap-2"
        >
          Entrar
          {isPending && (
            <Loader className='w-4 h-4 animate-spin'/>
          )}
        </Button>
      </form>
    </div>
  );
}
