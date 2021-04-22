const d = document,
  w = window;

export default function narrador() {
  let synth = w.speechSynthesis;
  let voices = [];

  const $select = d.querySelector(".select-narrador"),
    $textarea = d.querySelector(".textarea-narrador"),
    $btn = d.querySelector(".btn-narrador");

    const texto = new SpeechSynthesisUtterance();

    

  d.addEventListener("DOMContentLoaded", (e) => {
    synth.addEventListener("voiceschanged", (e) => {
      voices = synth.getVoices();

      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} *** ${voice.lang}`;
        $select.appendChild($option);
      });
    });
  });

  d.addEventListener("change", (e) => {
    if (e.target === $select) {
      texto.voice = voices.find((voice) => voice.name === e.target.value);
    }    
    
  });

  d.addEventListener("click", (e) => {
    if (e.target === $btn) {
      texto.text = $textarea.value;
      synth.speak(texto);
    }
  });
}
