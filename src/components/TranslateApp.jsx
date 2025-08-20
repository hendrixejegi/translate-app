import { useReducer } from "react";
import logo from "../assets/logo.svg";
import TranslateForm from "./TranslateForm";

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
      />
    </main>
  );
};

export default TranslateApp;
