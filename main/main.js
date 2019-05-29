/*
 console.log(LCDInput)
[ '._.|_|..|', '.....|..|', '._.|.||_|' ]    


console.log(LCDSecArr)
[ [ '._. ', '|_| ', '..| ' ],
[ '... ', '..| ', '..| ' ],
[ '._. ', '|.| ', '|_| ' ] ]


console.log(result)
._. ... ._.
|_| ..| |.|
..| ..| |_|
*/

/*
1.   定义了 LCDArray常量

2.  根据man()函数传进来的变量找到对应的LCDArray值，放在LCDInput数组中

3.  将LCDInput变成一个二维数组，三个字符串一组

4.  将这个二维数组分层（注意空格！！！！）

5.  加起来输出 over





*/


const LCDArray = [

    `._.|.||_|`,

    `.....|..|`,

    `._.._||_.`,

    `._.._|._|`,

    `...|_|..|`,

    `._.|_.._|`,

    `._.|_.|_|`,

    `._...|..|`,

    `._.|_||_|`,

    `._.|_|..|`
]



// console.log(map);

function getLevel(LCDSecArr) {
    // 分层
    let firstFloor = ''; //第一层
    let secondFloor = ''; //第二层
    let threeFloor = ''; //第三层
    LCDSecArr.forEach((val, index) => {
        val.forEach((val, index) => {
            switch (index) {
                case 0:
                    firstFloor += val;
                    break;
                case 1:
                    secondFloor += val;
                    break;
                case 2:
                    threeFloor += val;
                    break;
            }
        });
    });
    return { firstFloor, secondFloor, threeFloor };
}


// 将ledInput 转为二位数组 
function transArr(LCDInput) {
    return LCDInput.map((val, index) => {
        let arr = [];
        let data = [...val];
        for (let i = 0, len = data.length; i < len; i += 3) {
            //三三为一组转成字符串，删除‘，’添加空格
            arr.push(data.slice(i, i + 3).toString().replace(',', '').replace(',', '') + ' ');
        }
        return arr;
    });
}

function delLast(arr) {
    //删除字符串最后一个空格
    let len = arr.length;
    return arr.substr(0, len - 1)
}

module.exports = function main() {

    let result = '';//终极结果
    let LCDInput = [];
    let LCDSecArr = []; //二维数组 
    [...arguments[0]].forEach(
        (val) => {
            LCDInput.push(LCDArray[val])
        }
    );
    LCDSecArr = transArr(LCDInput)
    let { firstFloor, secondFloor, threeFloor } = getLevel(LCDSecArr);
    result = delLast(firstFloor) + '\n' + delLast(secondFloor) + '\n' + delLast(threeFloor) + '\n';
    return result;
};