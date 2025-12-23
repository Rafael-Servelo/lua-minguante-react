import Icon from "@mdi/react";
import { mdiAccount, mdiCart } from "@mdi/js";

function Header() {
  return (
    <header>
      <div className="w-screen bg-rose flex justify-center items-center px-4 py-2 gap-4">
        <div className="w-1/4 flex justify-center">
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
          <input
            className="bg-beige w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="text"
            placeholder="Pesquisar..."
          />
        </div>
        <div>
          <button>
            <Icon
              path={mdiAccount}
              title="User Profile"
              size={1}
              className="text-white"
            ></Icon>
          </button>
        </div>
        <div>
          <button>
            <Icon
              path={mdiCart}
              title="User Profile"
              size={1}
              className="text-white"
            ></Icon>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
