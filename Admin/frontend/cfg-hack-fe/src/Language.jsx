import { useState, useEffect } from "react";

export default function Language() {
  const [language, setLanguage] = useState(null);
  useEffect(() => {
    let cookie = document.cookie;
    let arr = cookie.split("/");
    if (arr && arr.length > 0) {
      setLanguage(arr[arr.length - 1]);
    }
  }, []);

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    // debugger
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: true,
        },
        "google_translate_element"
      );
    };
  }, []);

  useEffect(() => {
    var container = document.getElementById("google_translate_element");
    var select = container.getElementsByTagName("select")[0];
    if (select) {
      document.cookie = "googtrans=/en/" + language;
      window.location.reload();
    }
  }, [language]);

  return (
    <>
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
        className="select-lang"
      >
        <option value="en" className="option-lang">
          <div className="notranslate">English</div>
        </option>
        <option value="bn" className="option-lang">
          <div className="notranslate">
            Bengali&nbsp;&nbsp;&nbsp;&nbsp; বাংলা
          </div>
        </option>
        <option value="hi" className="option-lang">
          <div className="notranslate">
            Hindi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; हिन्दी
          </div>
        </option>
        <option value="kn" className="option-lang">
          <div className="notranslate">Kannada&nbsp; ಕನ್ನಡ</div>
        </option>
        <option value="ta" className="option-lang">
          <div className="notranslate">
            Tamil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; தமிழ்
          </div>
        </option>
        <option value="te" className="option-lang">
          <div className="notranslate">
            Telugu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; తెలుగు
          </div>
        </option>
        <option value="ur" className="option-lang">
          <div className="notranslate">
            Urdu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; اُردُو{" "}
          </div>
        </option>
      </select>
      <div id="google_translate_element" hidden></div>
    </>
  );
}
