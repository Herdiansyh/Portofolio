import { useEffect, useState } from "react";
import Lanyard from "./Components/Lanyard/Lanyard";
import DataImage, { listProyek } from "./data";
import { listTools } from "./data";
import { useTheme } from "./Components/ThemeProvider";
function App() {
  const [position, setPosition] = useState([0, 0, 10]);
  const { theme } = useTheme(); // Dapatkan tema saat ini

  // Warna untuk dark/light mode
  const bgColor = theme === "dark" ? "bg-zinc-900" : "bg-gray-100";
  const textColor = theme === "dark" ? "text-white" : "text-gray-100";
  const h1Color = theme === "dark" ? "text-white" : "text-black";
  const pColor = theme === "dark" ? "text-white opacity-80" : "text-black";
  const cardBg = theme === "dark" ? "bg-zinc-800" : "bg-white";
  const borderColor = theme === "dark" ? "bg-zinc-600" : "bg-gray-500";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // ukuran layar kecil (HP)
        setPosition([0, 0, 12]); // lebih kecil
      } else {
        setPosition([0, 0, 10]); // ukuran normal
      }
    };

    window.addEventListener("resize", handleResize);

    // panggil sekali supaya langsung sesuai ukuran layar
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showAll, setShowAll] = useState(false); // state untuk toggle tampil semua

  // Batasi project yang ditampilkan
  const displayedProyek = showAll ? listProyek : listProyek.slice(0, 6);

  return (
    <>
      <div className={`min-h-screen transition-colors duration-300 ${bgColor}`}>
        <div className="hero grid md:grid-cols-2 pt-0  items-center xl:gap-0 gap-6 grid-cols-1 ">
          <div className="animate__animated animate__fadeInUp animate__delay-2s ">
            <div className="-mt-21 sm:hidden">
              <Lanyard position={position} gravity={[0, -60, 0]} />
            </div>
            <div
              className={`flex items-center gap-3 mb-6  w-fit p-4 rounded-2xl ${borderColor}`}
            >
              <img
                src={DataImage.HeroImage}
                alt=""
                className="w-10 rounded-md"
              />
              <q className={`${textColor}`}>
                Every line of code reflects learning, patience, and creativity😊
              </q>
            </div>
            <h1 className={`text-5xl/tight font-bold mb-6 ${h1Color}`}>
              Hi, I'm Herdiansyah
            </h1>
            <p className={`text-lg/loose  mb-10 ${pColor}`}>
              I’m passionate about learning and building web experiences that
              truly matter. Every line of code I write is a step toward growing
              my skills and creating interfaces that users enjoy
            </p>
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="#"
                className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
              >
                Download CV <i className="ri-download-line"></i>
              </a>
              <a
                href="#projects"
                className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
              >
                lihat Projects <i className="ri-arrow-down-line"></i>
              </a>
            </div>
          </div>
          <div className="lg:-mt-29 hidden md:block">
            <Lanyard position={position} gravity={[0, -60, 0]} />
          </div>
        </div>
        {/* About */}
        <div className="tentang mt-32 py-10" id="about">
          <div
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          >
            <div className="flex flex-col m-auto items-center gap-3 mb-6  w-fit p-4 border-b border-zinc-200">
              About Me
            </div>

            <p className="text-base/loose mb-10">
              Ever since I discovered the world of web development, I’ve been
              driven by curiosity and a desire to learn. I love exploring new
              technologies, tackling challenges, and turning ideas into websites
              that work and inspire. Each project I take on is an opportunity to
              grow and create something meaningful
            </p>
          </div>
          <div className="tools mt-32">
            <h1
              className="text-4xl/snug font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Skills
            </h1>
            <p
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full   text-base/loose opacity-50"
            >
              Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
              website
            </p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {listTools.map((tool) => (
                <div
                  className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 "
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                  data-aos-once="true"
                >
                  <img
                    src={tool.gambar}
                    alt=""
                    className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  />
                  <div>
                    <h4 className="font-bold">{tool.nama}</h4>
                    <p className="opacity-50">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* akhir about */}
        {/* Projects */}
        <div className="proyek mt-32 py-10" id="projects">
          <h1
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center text-4xl font-bold mb-2"
          >
            Projects
          </h1>
          <p
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="text-base/loose text-center opacity-50"
          >
            Berikut ini proyek yang telah saya buat
          </p>

          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {displayedProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="p-4 bg-zinc-800 rounded-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
                data-aos-once="true"
              >
                <img src={proyek.gambar} alt="proyek gambar" />
                <div>
                  <h1 className="text-2xl font-bold my-4 ">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        key={index}
                        className="py-1 px-2 border bg-zinc-600 border-zinc-500 rounded-md font-semibold"
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a
                      href="#"
                      className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                    >
                      lihat website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Show More */}
          {listProyek.length > 6 && !showAll && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="bg-zinc-700 p-3 rounded-lg border border-zinc-600 hover:bg-zinc-600"
              >
                Show More
              </button>
            </div>
          )}
        </div>

        {/* akhir projects */}
        {/* contact */}
        <div className="kontak mt-32  p-0 sm:p-10" id="contact">
          <h1
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-4xl mb-2 font-bold text-center"
          >
            Contact
          </h1>
          <p
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="text-base/loose text-center mb-10 opacity-50"
          >
            Let's Connect with me
          </p>
          <form
            action="https://formsubmit.co/mohammadherdiansyah84@gmail.com"
            method="POST"
            className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Masukan nama..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="border border-zinc-500 p-2 rounded-md"
                  placeholder="Masukan email..."
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="pesan">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="45"
                  rows="7"
                  className="border border-zinc-500 p-2 rounded-md"
                  placeholder="Pesan..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* contact */}
    </>
  );
}

export default App;
