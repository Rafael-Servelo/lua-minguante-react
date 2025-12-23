import Icon from "@mdi/react";
import { mdiPhone, mdiEmail, mdiInstagram, mdiWhatsapp } from "@mdi/js";
import Divider from "./Divider";

const mockList = [
  "Acessorios",
  "Capilar",
  "Facial",
  "Labial",
  "Olhos",
  "Corporal",
  "Intimo",
];

function Footer() {
  return (
    <div className="w-screen bg-purple text-white px-8 py-8 text-body">
      <div className="info flex flex-col sm:flex-row gap-8 sm:justify-between sm:w-full mb-4">
        <div className="category sm:sm:w-1/3">
          <div className="font-bold text-xl">Categorias</div>
          <Divider />
          <ul className="list-disc ml-5 text-white">
            {mockList.map((item) => (
              <li key={item} className="opacity-60 hover:opacity-100">
                <a href={`/?group=${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="about sm:w-1/3">
          <div className="font-bold text-xl">Sobre a loja</div>
          <div>
            <Divider />
          </div>
          <div className="text-sm">
            <strong>✨ Lua Minguante Cosméticos ✨</strong>
            <br />A Beleza começa com o autocuidado. Na Lua Minguante,
            acreditamos que cuidar de si deve ser um ritual diário — leve,
            especial e ao seu alcance. Por isso, oferecemos cosméticos de
            qualidade, com preços justos, para você se sentir especial todos os
            dias. 🌙 Qualidade que encanta e preço que cabe no seu bolso.
          </div>
        </div>
        <div className="contact sm:w-1/3">
          <div className="font-bold text-xl">Contato</div>
          <Divider />
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex gap-2">
              <Icon
                path={mdiPhone}
                title="Telefone"
                size={1}
                className="text-rose"
              ></Icon>
              <div>Telefone:</div>
              <a className="hover:underline" href="tel://11999358498">
                (11) 99935-8498
              </a>
            </div>
            <div className="flex gap-2">
              <Icon
                path={mdiEmail}
                title="E-mail"
                size={1}
                className="text-rose"
              ></Icon>
              <div>Email:</div>
              <span>
                <a
                  href="mailto:isabellazoccoler@gmail.com"
                  className="hover:underline"
                >
                  isabellazoccoler@gmail.com
                </a>
              </span>
            </div>
            <div className="flex gap-2">
              <Icon
                path={mdiInstagram}
                title="Instagram"
                size={1}
                className="text-rose"
              ></Icon>
              <div>Instagram:</div>
              <span>
                <a
                  href="https://www.instagram.com/luaminguanteloja/"
                  target="_blank"
                  className="hover:underline"
                >
                  @luaminguanteloja
                </a>
              </span>
            </div>
            <div className="flex gap-2">
              <Icon
                path={mdiWhatsapp}
                title="WhatsApp"
                size={1}
                className="text-rose"
              ></Icon>
              <div>WhatsApp:</div>
              <a
                href="https://wa.me/5511999358498?text=Ol%C3%A1%20eu%20vim%20pelo%20site%20da%20Loja%20Minguante!"
                target="_blank"
              >
                <span className="hover:underline">(11) 99935-8498</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="copyright">
          <Divider />
          <div className="text-center">
            <strong className="text-rose">
              Lua Minguante Cosméticos &copy;{" "}
            </strong>
            Todos os direitos reservados 2024.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
