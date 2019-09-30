const fixDateString = string => {
  //Accepts ISO date string and converts it to Norwegian value
  let match = string.match(/\d{4}-(\d{2})-(\d{2})/)
  let norDate = match[2] + "/" + match[1]
  return norDate
}
//Gets default MySQL time value and converts it to "minutes:seconds" only
const fixTimeString = string => {
  let match = string.match(/(\d{2}:\d{2}):/)
  let returnString = match[1]
  return returnString
}
//Replaces line breaks with paragraph tags
const fixLineBreaks = string => {
  string = string.split('\n')
  let textArray = []
  for(let i = 0; i < string.length; i++){
    if((string[i].length !== 0) && (string[i].length !== 1)) textArray.push(string[i])
  }
  return textArray
}

export {
  fixDateString,
  fixTimeString,
  fixLineBreaks
}