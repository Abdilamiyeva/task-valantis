import { PiTelegramLogoLight } from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../../../assets/logo.svg";

export const Footer = () => (
  <div>
    <div className="mt-16 container flex justify-between items-center">
      <a href="#">
        <img src={logo} alt="logo" />
        <span className="block text-[#515458] text-xs max-w-[186px] my-3">
          Мастерская по изготовлению и ремонту ювелирных украшений
        </span>
      </a>
      <div>
        <p className="text-sm text-[#515458] leading-6">Позвоните нам</p>
        <a
          className="font-medium leading-5 text-[#20232e]"
          href="tel:+79851349294"
        >
          +7 (985) 134 92 94
        </a>
      </div>
      <div>
        <p className="text-sm text-[#515458] leading-6">Напишите нам</p>
        <a
          className="font-medium leading-5 text-[#20232e]"
          href="mailto:zolotaya-tochka@yandex.ru"
        >
          zolotaya-tochka@yandex.ru
        </a>
      </div>
      <div>
        <p className="text-sm text-[#515458] leading-6">Мы в соцсетях</p>
        <div className="flex justify-between  gap-2 items-center mt-2">
          <a className="border p-2 rounded-full" href="#">
            <PiTelegramLogoLight className="text-[#299ed8]" />
          </a>
          <a className="border p-2 rounded-full" href="#">
            <FaWhatsapp className="text-green-500" />
          </a>
          <a className="border p-2 rounded-full" href="#">
            <SlSocialVkontakte className="text-blue-900" />
          </a>
        </div>
      </div>
    </div>
    <div className="w-full h-[2px] mt-3 bg-[#f1f2f2]"></div>
    <div className="container flex gap-14 my-7">
      <p className="text-xs max-w-[580px] text-[#515458] leading-6">
        «Валантис» использует файлы «cookie», с целью персонализации сервисов и
        повышения удобства пользования веб-сайтом. «Cookie» представляют собой
        небольшие файлы, содержащие информацию о предыдущих посещениях
        веб-сайта. Если вы не хотите использовать файлы «cookie», измените
        настройки браузера.
      </p>
      <div>
        <p className="text-xs max-w-[313px] leading-6 text-[#515458]">
          © 2019–2024, ООО «Валантис».Все права защищены.
        </p>
        <p className="text-xs max-w-[350px] leading-6 text-[#515458]">
          ИП Залесский Кирилл Андреевич ОГРНИП 321508100159491
        </p>
        <p className="mt-5">
          <span className="text-xs leading-6 text-[#515458]">
            Разработка сайта
          </span>
          <a href="#" className="ml-1 font-black italic">
            VALANTIS
          </a>
        </p>
      </div>
    </div>
  </div>
);
