import Icon from "@mdi/react";
import { mdiAccount, mdiCart, mdiSearchWeb } from "@mdi/js";

function Header() {
  return (
    <header>
      <div className="w-screen bg-rose flex justify-center items-center px-4 py-2 gap-4">
        <div className="w-1/5 flex justify-center">
          <a href="/">
            <img
              src={"src/assets/imgs/lua-minguante-logo-1.png"}
              alt="logo"
              width={112}
              height={112}
            />
          </a>
        </div>
        <div className="w-full">
          <div className="flex rounded-md overflow-hidden">
            <input
              className="bg-beige w-full rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="text"
              placeholder="O que você está procurando?"
            />
            <button className="bg-beige flex justify-center items-center px-2">
              <Icon path={mdiSearchWeb} size={1} className="text-purple"></Icon>
            </button>
          </div>
        </div>
        <div>
          <button className="flex flex-row justify-center items-center gap-2 bg-purple p-2 rounded-2xl">
            <Icon
              path={mdiAccount}
              title="Perfil do Usuário"
              size={1}
              className="text-white"
            ></Icon>
            <div className="hidden flex-col items-start sm:flex">
              <div className="text-sm text-white">Olá! entrar na</div>
              <div className="text-lg text-white font-bold text-nowrap">
                Minha Conta
              </div>
            </div>
          </button>
        </div>
        <div>
          <button className="flex flex-row justify-center items-center gap-2 bg-purple p-2 rounded-2xl">
            <Icon
              path={mdiCart}
              title="Carrinho de Compras"
              size={1}
              className="text-white"
            ></Icon>
            <div className="hidden flex-col items-start sm:flex">
              <div className="text-sm text-white">Seu</div>
              <div className="text-lg text-white font-bold">Carrinho</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
