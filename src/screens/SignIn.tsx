import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
                <CardAction>
                  <Button variant="link">Cadastrar</Button>
                </CardAction>
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
                        <a
                          href="#"
                          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                        >
                         Esqueceu sua senha?
                        </a>
                      </div>
                      <Input id="password" type="password" required placeholder="*******"/>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Entrar
                </Button>
                <Button variant="outline" className="w-full">
                  Entrar com o Google
                </Button>
              </CardFooter>
            </Card>
        </section>
    </main>
  )
}

export default SignIn
