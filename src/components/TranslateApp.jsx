import { useReducer, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import logo from "../assets/logo.svg";
import TranslateForm from "./TranslateForm";
import getTranslation from "../api/MyMemory";

function reducer(state, action) {
  switch (action.type) {
    case "update_text_to_translate": {
      return {
        ...state,
        toTranslate: action.newText,
      };
    }

    case "update_translating_from": {
      return {
        ...state,
        from: action.value,
      };
    }

    case "update_translating_to": {
      return {
        ...state,
        to: action.value,
      };
    }

    case "update_translated_text": {
      return {
        ...state,
        translatedText: action.text,
      };
    }

    case "swap_options": {
      return {
        toTranslate: state.translatedText,
        from: state.to,
        to: state.from,
        translatedText: state.toTranslate,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const initialState = {
  toTranslate: "Hello, how are you?",
  from: "en",
  to: "fr",
  translatedText: "Bonjour, comment allez-vous ?",
};

const TranslateApp = () => {
  const [translateAppState, dispatch] = useReducer(reducer, initialState);

  const [isLoading, setIsLoading] = useState(false);

  const translateText = async (text, from, to) => {
    const formattedText = text.replace(/\s/g, "%20");

    try {
      const translation = await getTranslation(formattedText, from, to);

      if (translation) {
        setIsLoading(false);
        dispatch({
          type: "update_translated_text",
          text: translation.translatedText,
        });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    translateAppState.toTranslate &&
      translateText(
        translateAppState.toTranslate,
        translateAppState.from,
        translateAppState.to,
      );
  };

  // Enable real time translation
  const debouncedValue = useDebounce(translateAppState.toTranslate);

  useEffect(() => {
    const liveRequestHandler = async () => {
      setIsLoading(true);

      debouncedValue &&
        translateText(
          debouncedValue,
          translateAppState.from,
          translateAppState.to,
        );
    };
    liveRequestHandler();
  }, [debouncedValue, translateAppState.from, translateAppState.to]);

  return (
    <main className="min-h-screen space-y-12 bg-[url(/hero_img-sm.jpg)] bg-top bg-no-repeat px-4 py-12 md:bg-[url(/hero_img.jpg)] lg:bg-size-[100%_auto]">
      <div>
        <img
          src={logo}
          width={137}
          height={45}
          alt="Translate app logo"
          className="mx-auto"
        />
      </div>
      <TranslateForm
        toTranslate={translateAppState.toTranslate}
        alreadyTranslated={translateAppState.translatedText}
        translatingFrom={translateAppState.from}
        translatingTo={translateAppState.to}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </main>
  );
};

export default TranslateApp;
