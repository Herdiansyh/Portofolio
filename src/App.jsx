import { useEffect, useState } from "react";
import Lanyard from "./Components/Lanyard/Lanyard";
import DataImage, { listProyek } from "./data";
import { listTools } from "./data";
function App() {
  const [position, setPosition] = useState([0, 0, 10]);

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
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-0  items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s ">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="" className="w-10 rounded-md" />
            <q>Kode yang indah, lahir dari ketekunan😊</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Herdiansyah</h1>
          <p className="text-base/loose opacity-60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            dignissimos quidem maxime! Magni, repellat mollitia maiores quas
            obcaecati exercitationem quod tempora rerum earum voluptates est!
            Nobis modi libero alias quia corporis, eligendi consequatur repellat
            blanditiis sapiente odio! Voluptatum quod quo animi aut provident
            quia deleniti exercitationem quas amet vitae, porro minus odit,
            reprehenderit nulla aliquid tempora adipisci assumenda eveniet
            neque, expedita distinctio ea qui? Modi exercitationem repellendus
            reiciendis voluptatem quidem!
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
        <div className="lg:-mt-29">
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
          <img
            src={DataImage.HeroImage}
            alt=""
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            vitae impedit commodi labore enim reprehenderit ad, earum suscipit
            non eveniet vero. Modi unde nulla deserunt iste, cum totam quos at
            omnis? Quaerat sequi aperiam fugit nobis accusamus mollitia quas
            ullam harum necessitatibus! Dolores explicabo, voluptas inventore
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt=""
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>tahun selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>tahun pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
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
          Berikut ini projects yang telah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
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

      {/* contact */}
    </>
  );
}

export default App;
