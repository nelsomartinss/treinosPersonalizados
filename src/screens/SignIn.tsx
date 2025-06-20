import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom';

import fundoAcademia from '@/assets/academia-fundo-vermelho.png'

export function SignIn() {
  return (
    <main className='h-screen flex bg-cover bg-center'>
        <section className="flex flex-1 justify-center items-center bg-center bg-cover bg-gray-200 p-2" style={{ backgroundImage: `url(${fundoAcademia})` }}>
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Acesse a sua conta</CardTitle>
                <CardDescription>
                  Digite seu e-mail para acessar sua conta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@exemplo.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Senha</Label>
                        <Link to="/password-reset" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                          Esqueceu sua senha?
                        </Link>
                      </div>
                      <Input id="password" type="password" required placeholder="*******"/>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full" asChild> 
                  <Link to='/menu'>Entrar</Link>
                </Button>
                <Button variant="outline" className="w-full" >
                  Entrar com o Google
                </Button>
                <p className='text-muted-foreground text-center text-sm mt-3'>Ao entrar em nossa plataforma você concorda com nossos Termos de Uso e Politíca de Privacidade.</p>
              </CardFooter>
            </Card>
        </section>
    </main>
  )
}

export default SignIn
