const verb = document.getElementById("verb");
const noun = document.getElementById("noun");
const adjective = document.getElementById("adjective");
const adverb = document.getElementById("adverb");
const button = document.getElementById("btn");
const displayPhrase = document.getElementById("displayPhrase");
const paragraph = document.createElement('p')


btn.addEventListener("click", function (e) {
    e.preventDefault();
    displayPhrase.appendChild(paragraph);
    paragraph.innerHTML = madLibs(adjective.value, noun.value, verb.value, adverb.value);
});
  