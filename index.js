// import inquirer to import inquirer functions like inquirer.prompt
import inquirer from "inquirer";
// create a variable for question with await async function
const { paragraph } = await inquirer.prompt({
    message: "Write a Paragraph: ",
    type: "input",
    name: "paragraph"
});
//create a variable where you are replacing the extra white spaces from your paragraph with .replace and the regular expression
const replace_extra_whiteSpace = paragraph.replace(/\s + /g, ' ');
//create a variable to convert paragraph into array and remove whitespaces from start and end
const convert_paragraph = replace_extra_whiteSpace.trim().split(" ");
//create a variable word_counter to count count paragraph words 
const word_counter = (`${paragraph}\nTotal counts of words: ${convert_paragraph.length}`);
// show the final result
console.log(word_counter);
