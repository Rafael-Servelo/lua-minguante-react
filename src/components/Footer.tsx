import Icon from "@mdi/react";
import { mdiPhone, mdiEmail, mdiInstagram, mdiWhatsapp } from "@mdi/js";

function Footer() {
  return (
    <div className="w-screen bg-purple text-white px-8 py-8 mt-8 text-body">
      <div className="info flex flex-col sm:flex-row gap-8 sm:justify-between sm:w-full mb-4">
        <div className="category sm:sm:w-1/3">
          <div className="font-bold text-xl">Categorias</div>
          <hr className="h-px my-4 bg-purple-400 border-0"></hr>
          <ul className="list-disc ml-5 text-white">
            <li className="opacity-60 hover:opacity-100">
              <a href="/?group=acessorios">Acessorios</a>
            </li>
            <li className="opacity-60 hover:opacity-100">
              <a href="/?group=capilar">Capilar</a>
            </li>
            <li className="opacity-60 hover:opacity-100">
              <a href="/?group=facial">Facial</a>
            </li>
            <li className="opacity-60 hover:opacity-100">
              <a href="/?group=labial">Labial</a>
            </li>
            <li className="opacity-60 hover:opacity-100">
              <a href="/?group=olhos">Olhos</a>
            </li>
            <li className="opacity-60 hover:opacity-100">
              <a href="/?group=corporal">Corporal</a>
            </li>
            <li className="opacity-60 hover:opacity-100">
              <a href="/?group=intimo">Intimo</a>
            </li>
          </ul>
        </div>
        <div className="about sm:w-1/3">
          <div className="font-bold text-xl">Sobre a loja</div>
          <div>
            <hr className="h-px my-4 bg-purple-400 border-0"></hr>
          </div>
          <div className="text-sm">
            ✨ Lua Minguante Cosméticos ✨ A Beleza começa com o autocuidado. Na
            Lua Minguante, acreditamos que cuidar de si deve ser um ritual
            diário — leve, especial e ao seu alcance. Por isso, oferecemos
            cosméticos de qualidade, com preços justos, para você se sentir
            especial todos os dias. 🌙 Qualidade que encanta e preço que cabe no
            seu bolso.
          </div>
        </div>
        <div className="contact sm:w-1/3">
          <div className="font-bold text-xl">Contato</div>
          <hr className="h-px my-4 bg-purple-400 border-0"></hr>
          <div className="text-start">
            <div className="flex gap-2">
              <Icon
                path={mdiPhone}
                title="User Profile"
                size={1}
                color="white"
              ></Icon>
              <div>Telefone:</div>
              <span>(11) 99935-8498</span>
            </div>
            <div className="flex gap-2">
              <Icon
                path={mdiEmail}
                title="User Profile"
                size={1}
                color="white"
              ></Icon>
              <div>Email:</div>
              <span>
                <a
                  href="mailto:isabellazoccoler@gmail.com"
                  className="underline"
                >
                  isabellazoccoler@gmail.com
                </a>
              </span>
            </div>
            <div className="flex gap-2">
              <Icon
                path={mdiInstagram}
                title="User Profile"
                size={1}
                color="white"
              ></Icon>
              <div>Instagram:</div>
              <span>
                <a
                  href="https://www.instagram.com/luaminguanteloja/"
                  target="_blank"
                >
                  @luaminguanteloja
                </a>
              </span>
            </div>
            <div className="flex gap-2">
              <Icon
                path={mdiWhatsapp}
                title="User Profile"
                size={1}
                color="white"
              ></Icon>
              <div>WhatsApp:</div>
              <a
                href="https://wa.me/5511999358498?text=Ol%C3%A1%20eu%20vim%20pelo%20site%20da%20Loja%20Minguante!"
                target="_blank"
              >
                <span>(11) 99935-8498</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="copyright">
          <hr className="h-px my-4 bg-purple-400 border-0"></hr>
          <div className="text-center">
            <strong>Lua Minguante Cosméticos &copy; </strong>Todos os direitos
            reservados 2024.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
