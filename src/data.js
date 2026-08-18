import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/laravel.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/php.png";
export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  // {
  //   id: 3,
  //   gambar: Tools3,
  //   nama: "Next JS",
  //   ket: "Framework",
  //   dad: "300",
  // },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laravel",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "PHP",
    ket: "Language",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.webp";
import Proyek7 from "/assets/proyek/proyek7.png";
import Proyek8 from "/assets/proyek/proyek8.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Plannify",
    desk: "Website kanban board untuk mengelola tugas dan proyek secara visual. Dibangun dengan React, Laravel, dan Inertia.js, serta menggunakan Dnd Kit untuk fitur drag & drop.",
    tools: ["React", "Laravel", "Inertia", "Dnd Kit"],
    dad: "200",
    // url: "https://inventorymu.vercel.app"
  },
  {
    id: 2,
    gambar: Proyek4,
    nama: "Web Digital Approval",
    desk: "sebuah website pengajuan dokumen secara digital yang memudahkan proses persetujuan dan pelacakan dokumen dalam organisasi. untuk mencoba website silahkan login dengan akun admin (admin@admin.com, password:123123123)",
    tools: ["React", "Laravel", "Inertia.js", "TailwindCSS"],
    dad: "300",
    url: "https://digital-approval.omadi.web.id/",
  },
  {
    id: 3,
    gambar: Proyek5,
    nama: "Chill Movie",
    desk: "Aplikasi web untuk menampilkan berbagai koleksi film dari berbagai genre. Dibangun dengan ReactJS dan TailwindCSS, serta memanfaatkan fake api untuk data film dan user authentication. serta menggunakan state management dengan Redux Toolkit",
    tools: ["ReactJS", "TailwindCSS", "Redux Toolkit"],
    dad: "400",
    url: "https://movies-v4.vercel.app/",
  },
  {
    id: 4,
    gambar: Proyek2,
    nama: "Website Inventory",
    desk: "Website Inventory ini adalah aplikasi inventory untuk mengelola stok dan transaksi barang secara real-time.",
    tools: ["React", "Laravel (RESTful API)", "JWT Auth", "Axios", "Tailwind"],
    dad: "500",
    // url: "https://inventorymu.vercel.app"
  },
  {
    id: 5,
    gambar: Proyek3,
    nama: "Web Company Profile",
    desk: "Website multi-purpose company profile dengan CMS untuk memudahkan pengelolaan konten. Fitur meliputi halaman dinamis, manajemen pengguna, dan dashboard admin.",
    tools: ["Laravel", "TailwindCSS", "MySQL", "PHP"],
    dad: "600",
    // url: "https://inventorymu.vercel.app"
  },
  {
    id: 6,
    gambar: Proyek7,
    nama: "Checksheet ESD",
    desk: "Aplikasi web untuk digitalisasi proses inspeksi Electrostatic Discharge (ESD). Dilengkapi dengan fitur scan dan cetak QR Code, pengelolaan checksheet digital, pelaporan hasil inspeksi, serta workflow untuk meneruskan temuan NG (Not Good) ke department terkait dan tim maintenance hingga proses tindak lanjut selesai.",
    tools: ["Laravel", "TailwindCSS", "SQL Server", "PHP"],
    dad: "700",
  },
  {
    id: 7,
    gambar: Proyek8,
    nama: "Workforce Evaluation Management System",
    desk: "Aplikasi web untuk mengelola dan mengevaluasi kinerja tenaga kerja secara terstruktur. Dibangun dengan Laravel sebagai backend (REST API) dan React TypeScript sebagai frontend, menggunakan Chakra UI v3 untuk komponen antarmuka, serta di-deploy pada IIS dengan SQL Server sebagai database.",
    tools: ["Laravel", "React TS", "Chakra UI v3", "SQL Server", "IIS"],
    dad: "800",
    // url: ""
  },

  // {
  //   id: 4,
  //   gambar: Proyek4,
  //   nama: "Website Course",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
  //   dad: "500",
  // },
  // {
  //   id: 5,
  //   gambar: Proyek5,
  //   nama: "Web Portfolio",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
  //   dad: "600",
  // },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];
