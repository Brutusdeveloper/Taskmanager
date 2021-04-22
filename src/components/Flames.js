import React,{useState,useEffect} from "react";
import UI from "./UI"
const initialFormState = {
  Firstname:"",
  Secondname:""
};
const Flames=()=> {
  const [names,setnames]= useState(initialFormState);
  const [relation,setrelation] = useState();
  const onChange = (e) => {
    e.persist();
    setnames(()=>({...names,[e.target.name]: e.target.value}));
    console.log(names)
  };
 const flames=(value)=>{
   console.log("hi i reach flames")
    let flames = ["Friend", "Lover", "Affection", "Marriage", "Enemy", "Sister"];
    let match = "";
    if (names.Firstname !=="" && value === 0) {
      match = "Friend";
    }
    for (let i = 0; i < (value % 6); i++) {
      match = flames[i];
    }
    console.log(match)
    return match;
  }
const makenull=()=>{
  setrelation(null)
}
console.log(relation)
  const matchInput = () => {
    const Arraynames = Object.values(names);
    let array1=Arraynames[0].toUpperCase().replace(/[^a-zA-Z ]/g, "").split("")
    let array2=Arraynames[1].toUpperCase().replace(/[^a-zA-Z ]/g, "").split("")
    let difference = array1
    .filter(x => !array2.includes(x))
    .concat(array2.filter(x => !array1.includes(x)));
// console.log(array1)
// console.log(array2)
//     if(array1.length>array2.length){
//       const lenSec = array2.length;
//       for (var i = 0; i<lenSec; i++) {
//         const arrlen = array1.length;
//         for (var j = 0; j<arrlen; j++) {
//           console.log(array1[j])
//           console.log(array2[i])
//             if (array2[i] == array1[j]) {
//                 array1 = array1.slice(0, j).concat(array1.slice(j+1, arrlen));
//                 array2 = array2.slice(0, i).concat(array2.slice(i+1, lenSec));
//                 console.log(array1)
//                 console.log(array2)
//                 break;
//             }
//         }
//     }
    console.log(array1.length)
    setrelation(flames(difference.length));
    }
    return (
      <UI change={onChange} makenull={makenull} matchInput={matchInput} relation={relation}/>
    );
  }


export default Flames;