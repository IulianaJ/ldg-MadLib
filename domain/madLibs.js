function madLibs(myAdjective, myNoun, myVerb, myAdverb){

    if(myAdjective === "" || myNoun === "" || myVerb === "" || myAdverb === ""){
        return "Please complete all the inputs."
    }

    if(!isNaN(myAdjective) || !isNaN(myNoun) || !isNaN(myVerb) || !isNaN(myAdverb)){
        return "Please enter only words, not numbers."
    }

    return "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " " + "than my dog.";
}

madLibs("brown", "cat", "jumped", "higher");

module.exports = madLibs;
