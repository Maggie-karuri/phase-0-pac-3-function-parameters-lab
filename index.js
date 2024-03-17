// Define the functions
function introduction(name) {
    const result = `Hi, my name is ${name}.`;
    console.log(result);
    return result;
  }
  
  function introductionWithLanguage(name, language) {
    const result = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(result);
    return result;
  }
  
  function introductionWithLanguageOptional(name, language = 'JavaScript') {
    const result = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(result);
    return result;
  }
  
  // Call the functions with appropriate arguments
  introduction("Aki");
  introduction("Samip");
  
  introductionWithLanguage("Aki", "Ember.js");
  introductionWithLanguage("Samip", "React");
  
  introductionWithLanguageOptional("Gracie");
  introductionWithLanguageOptional("Gracie", "Python");
  