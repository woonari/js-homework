//enf - 기본
// export const functionName = (params) => {
    
// }

//edf - default로 설정한것은 import에서 {중괄호}필요없음!
// default는 한 파일에 하나씩만 존재함
// export default () => {
//     console.log("export default");    
// };


export const first = (params) => {
    console.log("first");
}


const arrowDefault = () => {
    console.log("export default2");
};

export default arrowDefault;