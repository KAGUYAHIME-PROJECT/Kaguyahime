const normalRepliesEN = [
  "She returned to the moon",
  "A thousand years may pass",
  "What is happiness",
  "What is life"
];

const coreRepliesEN = [
  "You think so",
  "You seem to think so"
];

const coreWords = [
  "life",
  "happiness",
  "meaning",
  "exist",
  "why",
  "live"
];

function containsCoreWord(text) {
  return coreWords.some(word =>
    text.toLowerCase().includes(word)
  );
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function respond(text) {
  const isCore = containsCoreWord(text);
  const reply = isCore
    ? randomFrom(coreRepliesEN)
    : randomFrom(normalRepliesEN);

  document.getElementById("response").innerText =
    reply + "\n— End";
}

function submitQuestion() {
  const text = document.getElementById("questionInput").value;
  if (!text) return;
  respond(text);
}

function askPreset(index) {
  const presets = [
    "What is the KAGUYAHIME PROJECT",
    "What did you do"
  ];
  respond(presets[index]);
}
