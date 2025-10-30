import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiQiita } from "react-icons/si";

const profile = () => {
  return (
    <section className="shadow border border-blue-500 rounded-lg p-2 flex flex-col gap-6">
      <div>
        <div className="flex items-center justify-center">
          <img src="/next.svg" alt="井ノ口 孝輝" className="w-24 h-24 " />
        </div>
        <h2 className="flex items-center justify-center pt-2 pb-2 text-xl font-semibold">
          井ノ口 孝輝
        </h2>
        <p className="text-sm leading-relaxed mt-2">
          UI Lab Studioを運営中。Next.jsやTailwind
          CSSを中心に、モダンなUI/UX設計を探求しています。皆さんと成長していきたいと考えております。
        </p>

        <div className="flex justify-center items-center gap-4 mt-4">
          <a
            href="https://x.com/yourhandle"
            target="_blank"
            className="text-blue-500 hover:text-blue-800 transition"
          >
            <FaTwitter className="w-8 h-8 hover:text-black" />
          </a>
          <a
            href="https://github.com/takaki-inokuchi"
            target="_blank"
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://qiita.com/takaki-inokuchi"
            target="_blank"
            className="text-green-500 hover:text-green-800 transition"
          >
            <SiQiita className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default profile;
