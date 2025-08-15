import { useTheme } from "./ThemeProvider";

function Footer() {
  const { theme } = useTheme();

  const h1Color =
    theme === "dark" ? "text-white" : "text-black hover:text-gray-50";
  const pColor = theme === "dark" ? "text-white" : "text-black ";

  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 justify-between items-center">
      <h1 className={`text-2xl font-bold hidden md:block ${pColor}`}>
        Portofolio
      </h1>
      <div className=" flex gap-7">
        <a href="#home" className={`hover:text-gray-600 ${h1Color}`}>
          Home
        </a>
        <a href="#about" className={`hover:text-gray-600 ${h1Color}`}>
          About
        </a>
        <a href="#projects" className={`hover:text-gray-600 ${h1Color}`}>
          Projects
        </a>
      </div>
      <div className={`items-center flex gap-3 `}>
        <a href="https://github.com/Herdiansyh">
          <i
            className={`ri-github-fill ri-2x hover:text-gray-500 ${pColor}`}
          ></i>
        </a>
        <a href="https://www.instagram.com/hrdian00s?utm_source=ig_web_button_share_sheet&igsh=MXBtaHp2NDJmcWgwcw==">
          <i
            className={`ri-instagram-fill ri-2x hover:text-gray-500 ${pColor}`}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/moh-herdiansyah-171868341/">
          <i
            className={`ri-linkedin-fill ri-2x hover:text-gray-500 ${pColor}`}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
