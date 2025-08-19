import logo from "../assets/logo.svg";
import TranslateForm from "./TranslateForm";

const TranslateApp = () => {
  return (
    <main className="space-y-12 bg-[url(/hero_img-sm.jpg)] bg-top bg-no-repeat px-4 py-12">
      <div>
        <img
          src={logo}
          width={137}
          height={45}
          alt="Translate app logo"
          className="mx-auto"
        />
      </div>
      <TranslateForm />
    </main>
  );
};

export default TranslateApp;
