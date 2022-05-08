const appConfigMixin = {
    data() {
      return {
        modeName: process.env.VITE_modeName
      }
    }
  }

export default appConfigMixin;

export const printFormat = {
  rows:4,
  cols:6
};

export const printStatus = {All: "A", No:"N", Individual:"I"}
export const tabs = { live: "Live", dead: "Dead", ancestor: "Ancestor" }
export const printTabs = { changshen: "changshen", yuanqin:"yuanqin", dead: "Dead", ancestor: "Ancestor" }
export const fontSizes = [
  { max:10, size:'font1'},
  { max:15, size: 'font2'},
  { max:20, size: 'font3'}
]

export const columnsConfig = {
  Live: [
    {name:"LiveName", isRequired:true},
    {name:"IsPrint", isRequired:false},
    {name:"LastPrint", isRequired:false}
  ],
  Dead: [
    {name:"DeadName", isRequired:true},
    {name:"LiveName", isRequired:true},
    {name:"Relation", isRequired:true},
    {name:"IsPrint", isRequired:false},
    {name:"LastPrint", isRequired:false}
  ],
  Ancestor:[
    {name:"Surname", isRequired:true},
    {name:"LiveName", isRequired:true},
    {name:"IsPrint", isRequired:false},
    {name:"LastPrint", isRequired:false}
  ]
}

export function isChinese(char){
  return escape(char).indexOf("%u")>=0
}

export function validateDetailInput(type, rec){
  let config = columnsConfig[type];
  if (!config) {
    return "Invalid type: "+type;
  }
  let error = "";
  config.forEach((item)=>{
    if (!rec[item.name] && item.isRequired){
        error += "please enter "+ item.name + ". ";
    }
  });
  return error;
}

export function getMainNameCharListFunc(name){
  let list = [];
  if (!name) return list;
  let currSeg = "";
  for (var i = 0; i < name.length; i++) {
      let char = name[i];
      if (isChinese(char)){
          list.push(char);
      }else if (char===" "){
          list.push(currSeg);
          currSeg="";
      }else {
          currSeg = currSeg + char;
      }
  }
  if (currSeg!=''){
      list.push(currSeg);
      currSeg="";
  }
  return list;
}

export function getMainFontSizeFunc(name){
  let list = getMainNameCharListFunc(name);
  var longest = list.reduce(function (a, b) {return a.length > b.length ? a : b;});
  for(let i=0; i<fontSizes.length; i++){
      if (longest.length<fontSizes[i].max){
          return fontSizes[i].size;
      }
  }
  return fontSizes[fontSizes.length-1].size;
}


export function getSideNameCharListFunc(name){
  let hasEnglish = false;
  let hasChinese = false;
  let list = [];
  if (!name) return list;
  let currSeg = "";
  for (var i = 0; i < name.length; i++) {
      let char = name[i];
      if (isChinese(char)){
          list.push(char);
          hasChinese = true;
      }else if (char !== ' ') {
          hasEnglish = true;
      }
  }

  if (hasEnglish) return [name]; //print all words in oneline

  return list;

}