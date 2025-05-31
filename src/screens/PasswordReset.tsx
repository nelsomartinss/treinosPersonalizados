import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';
import fundoAcademia from '../assets/academia-fundo-vermelho.png'

export function PasswordReset() {
  return (
    <main className="h-screen flex bg-cover bg-center">
      <section className="flex flex-1 justify-center items-center bg-center bg-cover bg-gray-200 p-2" style={{ backgroundImage: `url(${fundoAcademia})` }}>
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-6">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 15 15"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            <CardTitle>Problemas para entrar?</CardTitle>
            <CardDescription>
              Insira o seu email e enviaremos um link para você voltar a acessar
              a sua conta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Enviar link para login
            </Button>
            <Button variant="link">Não consegue redefinir sua senha?</Button>
            <Button variant="outline" className="w-full" asChild><Link to="/" >Voltar ao login</Link></Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

export default PasswordReset