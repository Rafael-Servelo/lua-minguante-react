import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiCart,
  mdiMagnify,
  mdiCartOutline,
  mdiMenuDown,
  mdiMenuUp,
} from "@mdi/js";
import Button from "./Button";
import { useState } from "react";

function Header() {
  const [hoverCart, setHoverCart] = useState(false);

  return (
    <header>
      <div className="w-full bg-purple flex justify-center items-center px-4 py-2 gap-4">
        <div className="w-1/5 flex justify-center">
          <a href="/">
            <img
              src={"src/assets/imgs/lua-minguante-logo-2.png"}
              alt="Lua Minguante"
              width={112}
              height={112}
            />
          </a>
        </div>
        <div className="w-full">
          <div className="flex rounded-md">
            <input
              className="bg-beige w-full rounded-l-md px-2 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-md"
              type="text"
              placeholder="O que você está procurando?"
            />
            <button className="rounded-r-md bg-beige flex justify-center items-center px-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm">
              <Icon
                path={mdiMagnify}
                size={1}
                className="text-purple"
                title={"Pesquisar"}
              ></Icon>
            </button>
          </div>
        </div>
        <div>
          <Button>
            <Icon path={mdiAccount} title="Perfil do Usuário" size={1}></Icon>
            <div className="hidden flex-col items-start sm:flex">
              <div className="text-sm">Olá! entrar na</div>
              <div className="text-lg font-bold text-nowrap">Minha Conta</div>
            </div>
          </Button>
        </div>
        <div>
          {hoverCart ? (
            <div>
              <div className="absolute top-0 left-0 w-full h-full backdrop-blur-xs backdrop-brightness-50 transition"></div>
            </div>
          ) : (
            ""
          )}

          <div className="relative">
            {hoverCart ? (
              <div onMouseLeave={() => setHoverCart(false)}>
                <div className="absolute -bottom-45.5 right-0 w-75 bg-rose text-white rounded-b-2xl rounded-tl-lg">
                  <div className="flex flex-col px-2 py-4 gap-2 items-center justify-center">
                    <Icon path={mdiCartOutline} size={3} />
                    <h2 className="font-medium text-md">
                      Carrinho de compras vazio!
                    </h2>
                    <p className="text-sm font-normal text-center">
                      Continue navegando no nosso site para adicionar produtos
                      ao carrinho!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div>
              <Button
                onMouseEnter={() => setHoverCart(true)}
                onClick={() =>
                  hoverCart ? setHoverCart(false) : setHoverCart(true)
                }
              >
                <Icon
                  path={mdiCart}
                  title="Carrinho de Compras"
                  size={1}
                ></Icon>
                <div className="hidden flex-col items-start sm:flex">
                  <div className="text-sm">Seu</div>
                  <div className="text-lg font-bold">Carrinho</div>
                </div>
                <Icon
                  className="hidden sm:block"
                  path={!hoverCart ? mdiMenuDown : mdiMenuUp}
                  title="Carrinho de Compras"
                  size={1}
                ></Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
