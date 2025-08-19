import SoundMax from "../assets/sound_max_fill.svg";
import Copy from "../assets/Copy.svg";
import Alfa from "../assets/Sort_alfa.svg";
import Swap from "../assets/Horizontal_top_left_main.svg";

const TranslateForm = () => {
  return (
    <form className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
      <fieldset
        name="translate-from"
        className="bg-accent-300 mx-auto max-w-2xl rounded-3xl border-2 border-neutral-200 p-6 backdrop-blur-md lg:mx-0"
      >
        <div className="flex flex-wrap items-center gap-4">
          <label
            htmlFor="detect-language"
            className="sans-16 text-text-100 cursor-pointer rounded-xl px-2.5 py-1.5"
          >
            Detect Language
            <input
              type="radio"
              name="from"
              id="detect-language"
              value="detect-language"
              className="absolute top-0 left-0 opacity-0"
            />
          </label>
          <label
            htmlFor="from-en"
            className="sans-16 text-text-100 cursor-pointer rounded-xl bg-neutral-200 px-2.5 py-1.5"
          >
            English
            <input
              type="radio"
              name="from"
              id="from-en"
              value="english"
              checked
              className="absolute top-0 left-0 opacity-0"
            />
          </label>
          <label
            htmlFor="from-fr"
            className="sans-16 text-text-100 cursor-pointer rounded-xl px-2.5 py-1.5"
          >
            French
            <input
              type="radio"
              name="from"
              id="from-fr"
              value="french"
              className="absolute top-0 left-0 opacity-0"
            />
          </label>
          <select
            name="from-options"
            id="from-options"
            className="sans-16 text-text-100 cursor-pointer border-0 outline-0"
          >
            <option value="spanish">Spanish</option>
          </select>
        </div>

        <div className="my-6 h-0.5 w-full bg-neutral-200"></div>

        <textarea
          name="input-from"
          id="input-from"
          value="Hello, how are you?"
          className="sans-16 text-text-50 field-sizing-content min-h-[120px] w-full resize-none border-0 outline-0"
        ></textarea>

        <div className="sans-12 text-text-100 mb-2 text-right">19/500</div>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-xl border-2 border-neutral-200 p-1">
              <img src={SoundMax} width={20} height={20} aria-hidden="true" />
            </button>
            <button className="flex items-center justify-center rounded-xl border-2 border-neutral-200 p-1">
              <img src={Copy} width={20} height={20} aria-hidden="true" />
            </button>
          </div>
          <button className="sans-16 text-text-50 flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-400 px-4 py-2">
            <img src={Alfa} width={24} height={24} aria-hidden="true" />
            <span>Translate</span>
          </button>
        </div>
      </fieldset>
      <fieldset
        name="translate-to"
        className="bg-accent-300 mx-auto flex max-w-2xl flex-col rounded-3xl border-2 border-neutral-200 p-6 backdrop-blur-md lg:mx-0"
      >
        <div className="flex flex-wrap items-center gap-4">
          <label
            htmlFor="to-en"
            className="sans-16 text-text-100 cursor-pointer rounded-xl px-2.5 py-1.5"
          >
            English
            <input
              type="radio"
              name="to"
              id="to-en"
              value="english"
              className="absolute top-0 left-0 opacity-0"
            />
          </label>
          <label
            htmlFor="to-fr"
            className="sans-16 text-text-100 cursor-pointer rounded-xl bg-neutral-200 px-2.5 py-1.5"
          >
            French
            <input
              type="radio"
              name="to"
              id="to-fr"
              value="french"
              checked
              className="absolute top-0 left-0 opacity-0"
            />
          </label>
          <select
            name="to-options"
            id="to-options"
            className="sans-16 text-text-100 cursor-pointer border-0 outline-0"
          >
            <option value="spanish">Spanish</option>
          </select>
          <button className="ml-auto flex items-center justify-center rounded-xl border-2 border-neutral-200 p-1">
            <img src={Swap} width={20} height={20} aria-hidden="true" />
          </button>
        </div>

        <div className="my-6 h-0.5 w-full bg-neutral-200"></div>

        <textarea
          name="input-to"
          id="input-to"
          value="Bonjour, comment allez-vous ?"
          className="sans-16 text-text-50 field-sizing-content min-h-[140px] w-full resize-none border-0 outline-0"
          disabled
        ></textarea>

        <div className="flex grow items-end justify-between">
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-xl border-2 border-neutral-200 p-1">
              <img src={SoundMax} width={20} height={20} aria-hidden="true" />
            </button>
            <button className="flex items-center justify-center rounded-xl border-2 border-neutral-200 p-1">
              <img src={Copy} width={20} height={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default TranslateForm;
