import { cn } from "../lib/utils/cn";

import SoundMax from "../assets/sound_max_fill.svg";
import Copy from "../assets/Copy.svg";
import Alfa from "../assets/Sort_alfa.svg";
import Swap from "../assets/Horizontal_top_left_main.svg";

const MAX_LENGTH = 500;

const TranslateForm = (props) => {
  const {
    toTranslate,
    alreadyTranslated,
    translatingFrom,
    translatingTo,
    dispatch,
    handleSubmit,
  } = props;

  const handleTextChange = (event) => {
    event.preventDefault();

    const newText = event.target.value;

    newText.length <= MAX_LENGTH
      ? dispatch({ type: "update_text_to_translate", newText })
      : alert("Maximum characters reached!");
  };

  const updateSourceLanguage = (event) => {
    event.preventDefault();
    dispatch({ type: "update_translating_from", value: event.target.value });
  };

  const updateTargetLanguage = (event) => {
    event.preventDefault();
    dispatch({ type: "update_translating_to", value: event.target.value });
  };

  const handleSwap = (event) => {
    event.preventDefault();
    dispatch({ type: "swap_options" });
  };

  const getLanguage = () => {
    switch (translatingTo) {
      case "en":
        return "English";

      case "fr":
        return "French";

      case "es":
        return "Spanish";

      default:
        break;
    }
  };

  return (
    <form
      className="space-y-4 lg:flex lg:justify-center lg:gap-4 lg:space-y-0"
      onSubmit={handleSubmit}
    >
      <fieldset
        name="translate-from"
        className="bg-accent-300 mx-auto w-full max-w-2xl rounded-3xl border-2 border-neutral-200 p-6 backdrop-blur-md lg:mx-0"
      >
        <div className="flex flex-wrap items-center gap-4">
          {/* <label
            htmlFor="detect-language"
            className={cn(
              "sans-16 text-text-100 cursor-pointer rounded-xl px-2.5 py-1.5",
              translatingFrom === "detect-language" ? "bg-neutral-200" : null,
            )}
          >
            Detect Language
            <input
              type="radio"
              name="from"
              id="detect-language"
              value="detect-language"
              className="absolute top-0 left-0 opacity-0"
              defaultChecked={translatingFrom === "detect-language"}
              onChange={updateSourceLanguage}
            />
          </label> */}
          <label
            htmlFor="from-en"
            className={cn(
              "sans-16 text-text-100 cursor-pointer rounded-xl px-2.5 py-1.5",
              translatingFrom === "en" ? "bg-neutral-200" : null,
            )}
          >
            English
            <input
              type="radio"
              name="from"
              id="from-en"
              value="en"
              defaultChecked={translatingFrom === "en"}
              className="absolute top-0 left-0 opacity-0"
              onChange={updateSourceLanguage}
            />
          </label>
          <label
            htmlFor="from-fr"
            className={cn(
              "sans-16 text-text-100 cursor-pointer rounded-xl px-2.5 py-1.5",
              translatingFrom === "fr" ? "bg-neutral-200" : null,
            )}
          >
            French
            <input
              type="radio"
              name="from"
              id="from-fr"
              value="fr"
              defaultChecked={translatingFrom === "fr"}
              className="absolute top-0 left-0 opacity-0"
              onChange={updateSourceLanguage}
            />
          </label>
          <label
            htmlFor="from-es"
            className={cn(
              "sans-16 text-text-100 cursor-pointer rounded-xl px-2.5 py-1.5",
              translatingFrom === "es" ? "bg-neutral-200" : null,
            )}
          >
            Spanish
            <input
              type="radio"
              name="from"
              id="from-es"
              value="es"
              defaultChecked={translatingFrom === "es"}
              className="absolute top-0 left-0 opacity-0"
              onChange={updateSourceLanguage}
            />
          </label>
        </div>

        <div className="my-6 h-0.5 w-full bg-neutral-200"></div>

        <textarea
          name="input-from"
          id="input-from"
          value={toTranslate ?? "Hello, how are you?"}
          className="sans-16 text-text-50 field-sizing-content min-h-[120px] w-full resize-none border-0 outline-0"
          onChange={handleTextChange}
          aria-label={
            toTranslate.length > 0
              ? "Text to translate"
              : "Enter text to translate"
          }
        ></textarea>

        <div className="sans-12 text-text-100 mb-2 text-right">
          {toTranslate?.length}/500
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-2">
            <button
              aria-label="Play audio of input text"
              className="flex items-center justify-center rounded-xl border-2 border-neutral-200 p-1"
            >
              <img src={SoundMax} width={20} height={20} aria-hidden="true" />
            </button>
            <button
              aria-label="Copy input text"
              className="flex items-center justify-center rounded-xl border-2 border-neutral-200 p-1"
            >
              <img src={Copy} width={20} height={20} aria-hidden="true" />
            </button>
          </div>
          <button
            aria-label={`Translate Text to ${getLanguage()}`}
            type="submit"
            className="sans-16 text-text-50 flex cursor-pointer items-center gap-2 rounded-xl border border-blue-200 bg-blue-400 px-4 py-2"
          >
            <img src={Alfa} width={24} height={24} aria-hidden="true" />
            <span>Translate</span>
          </button>
        </div>
      </fieldset>
      <fieldset
        name="translate-to"
        className="bg-accent-300 mx-auto flex w-full max-w-2xl flex-col rounded-3xl border-2 border-neutral-200 p-6 backdrop-blur-md lg:mx-0"
      >
        <div className="flex flex-wrap items-center gap-4">
          <label
            htmlFor="to-en"
            className={cn(
              "sans-16 text-text-100 cursor-pointer rounded-xl px-2.5 py-1.5",
              translatingTo === "en" ? "bg-neutral-200" : null,
            )}
          >
            English
            <input
              type="radio"
              name="to"
              id="to-en"
              value="en"
              defaultChecked={translatingTo === "en"}
              className="absolute top-0 left-0 opacity-0"
              onChange={updateTargetLanguage}
            />
          </label>
          <label
            htmlFor="to-fr"
            className={cn(
              "sans-16 text-text-100 cursor-pointer rounded-xl px-2.5 py-1.5",
              translatingTo === "fr" ? "bg-neutral-200" : null,
            )}
          >
            French
            <input
              type="radio"
              name="to"
              id="to-fr"
              value="fr"
              defaultChecked={translatingTo === "fr"}
              className="absolute top-0 left-0 opacity-0"
              onChange={updateTargetLanguage}
            />
          </label>
          <label
            htmlFor="to-es"
            className={cn(
              "sans-16 text-text-100 cursor-pointer rounded-xl px-2.5 py-1.5",
              translatingTo === "es" ? "bg-neutral-200" : null,
            )}
          >
            Spanish
            <input
              type="radio"
              name="to"
              id="to-es"
              value="es"
              defaultChecked={translatingTo === "es"}
              className="absolute top-0 left-0 opacity-0"
              onChange={updateTargetLanguage}
            />
          </label>
          <button
            aria-label="Swap languages and text"
            className="ml-auto flex cursor-pointer items-center justify-center rounded-xl border-2 border-neutral-200 p-1"
            onClick={handleSwap}
          >
            <img src={Swap} width={20} height={20} aria-hidden="true" />
          </button>
        </div>

        <div className="my-6 h-0.5 w-full bg-neutral-200"></div>

        <textarea
          name="input-to"
          id="input-to"
          value={alreadyTranslated}
          className="sans-16 text-text-50 field-sizing-content min-h-[140px] w-full resize-none border-0 outline-0"
          disabled
          aria-label={`Translated text in ${getLanguage()}`}
        ></textarea>

        <div className="flex grow items-end justify-between">
          <div className="flex items-center gap-2">
            <button
              aria-label="Play audio of translated text"
              className="flex items-center justify-center rounded-xl border-2 border-neutral-200 p-1"
            >
              <img src={SoundMax} width={20} height={20} aria-hidden="true" />
            </button>
            <button
              aria-label="Copy translated text"
              className="flex items-center justify-center rounded-xl border-2 border-neutral-200 p-1"
            >
              <img src={Copy} width={20} height={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default TranslateForm;
