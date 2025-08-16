import { useEffect, useState } from "react";
import Lanyard from "./Components/Lanyard/Lanyard";
import DataImage, { listProyek } from "./data";
import { listTools } from "./data";
import { useTheme } from "./Components/ThemeProvider";
import AOS from "aos";
import Swal from "sweetalert2";

function App() {
  const [position, setPosition] = useState([0, 0, 10]);
  const { theme } = useTheme(); // Dapatkan tema saat ini

  // Warna untuk dark/light mode
  const projectBg = theme === "dark" ? "bg-zinc-800" : "bg-gray-300 shadow-lg";
  const textColor = theme === "dark" ? "text-white" : "text-gray-700";
  const h1Color = theme === "dark" ? "text-white" : "text-black";
  const contactBg = theme === "dark" ? "bg-zinc-800" : "bg-gray-200 shadow-lg";
  const inputBg =
    theme === "dark"
      ? "border-zinc-500 text-white"
      : "border-gray-500 text-black";
  const tooltext =
    theme === "dark"
      ? "bg-zinc-600 border-zinc-500"
      : "bg-gray-400 border-gray-100 text-black opacity-80";
  const h1About =
    theme === "dark" ? "text-white" : "text-black border-b border-zinc-700";
  const pColor = theme === "dark" ? "text-white opacity-80" : "text-black";
  const toolsBg =
    theme === "dark"
      ? "border-zinc-600 hover:bg-zinc-800 "
      : "border-gray-200 bg-gray-200 shadow-lg hover:bg-gray-400 ";
  const bgAbout = theme === "dark" ? "bg-zinc-800" : "bg-gray-200 shadow-lg";
  const imgTools =
    theme === "dark"
      ? "bg-zinc-800 group-hover:bg-zinc-900"
      : "bg-gray-400 group-hover:bg-gray-200";

  const borderColor =
    theme === "dark" ? "bg-zinc-600" : "bg-gray-200 shadow-lg";

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

  // refresh AOS saat theme berubah
  useEffect(() => {
    AOS.refreshHard(); // lebih agresif
  }, [theme]);

  const handleDownload = () => {
    Swal.fire({
      title: "Download CV?",
      text: "File akan diunduh ke perangkat Anda.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, download",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        // trigger download
        window.location.href = "/Cv/cv.pdf"; // pastikan file ada di public/CV.pdf
        // Atau bisa pakai tag <a> programmatically
      }
    });
  };

  return (
    <>
      <div className={`min-h-screen transition-colors duration-300 `}>
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
              <button
                onClick={handleDownload}
                className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 hover:cursor-pointer"
              >
                Download CV <i className="ri-download-line"></i>
              </button>

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
            className={`xl:w-2/3 lg:w-3/4 w-full mx-auto p-7  rounded-lg 
            ${bgAbout} `}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div
              className={`flex flex-col m-auto items-center gap-3 mb-6  w-fit p-4 border-b border-zinc-200 ${h1About}`}
            >
              About Me
            </div>

            <p className={`text-base/loose mb-10 text-center ${pColor}`}>
              I am a graduate in Informatics Engineering. My journey into
              programming began after high school when I first worked as a
              production operator in a factory. After a year of working, I
              decided to pursue a degree in Informatics. I was always fascinated
              by the idea that IT professionals are seen as skilled and
              innovative, which sparked my interest in programming. Since then,
              I have been passionate about learning IT, especially web
              development, and I continue to strive to improve my skills and
              grow every day.
            </p>
          </div>
          <div className="tools mt-32">
            <h1
              className={`text-4xl/snug font-bold mb-4 ${h1Color}`}
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
              className={`xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full   text-base/loose opacity-50 ${pColor}`}
            >
              Berikut ini adalah skill dan tools yang biasa saya gunakan dalam
              pengembangan website.
            </p>
            <div
              className={`tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 `}
            >
              {listTools.map((tool) => (
                <div
                  className={`group flex items-center gap-2 p-3 border  rounded-md  ${toolsBg}`}
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                  data-aos-once="true"
                >
                  <img
                    src={tool.gambar}
                    alt=""
                    className={`w-14 p-1 ${imgTools}`}
                  />
                  <div>
                    <h4 className={`font-bold ${h1Color}`}>{tool.nama}</h4>
                    <p className={`opacity-50 ${pColor}`}>{tool.ket}</p>
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
            className={`text-center text-4xl font-bold mb-2 ${h1Color}`}
          >
            Projects
          </h1>
          <p
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={`text-base/loose text-center opacity-50 ${pColor}`}
          >
            Berikut ini proyek yang telah saya buat
          </p>

          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {displayedProyek.map((proyek) => (
              <div
                key={proyek.id}
                className={`p-4  rounded-lg flex flex-col h-full ${projectBg}`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
                data-aos-once="true"
              >
                <img src={proyek.gambar} alt="proyek gambar" />
                <div className="flex-1">
                  <h1 className={`text-2xl font-bold my-4 ${h1Color}`}>
                    {proyek.nama}
                  </h1>
                  <p className={`text-base/loose mb-4 ${pColor}`}>
                    {proyek.desk}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        key={index}
                        className={`py-1 px-2 border  rounded-lg font-semibold ${tooltext}`}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="./ComingSoon/index.html"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    lihat website
                  </a>
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
            className={`text-4xl mb-2 font-bold text-center ${h1Color}`}
          >
            Contact
          </h1>
          <p
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={`text-base/loose text-center mb-10 opacity-50 ${pColor}`}
          >
            Let's Connect with me
          </p>
          <form
            action="https://formsubmit.co/mohammadherdiansyah84@gmail.com"
            method="POST"
            className={`p-10 sm:w-fit w-full mx-auto rounded-lg ${contactBg}`}
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className={`font-semibold ${h1Color}`}>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Masukan nama..."
                  className={`border  p-2 rounded-md ${inputBg}`}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className={`font-semibold ${h1Color}`}>Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`border  p-2 rounded-md ${inputBg}`}
                  placeholder="Masukan email..."
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className={`font-semibold ${inputBg}`} htmlFor="pesan">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="45"
                  rows="7"
                  className={`border p-2 rounded-md ${inputBg}`}
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
