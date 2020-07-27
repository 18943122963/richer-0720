// 加载图片
export const loadPicture = () => {
    return {
        bg,
        upBox,
        gameBox,
    };
};

//column文件
const bg = () => {
    return {
        backgroundImage: `url("${require("../assets/img/column/background.png")}") `,
    };
};
const upBox = () => {
    return {
        backgroundImage: `url("${require("../assets/img/column/top.png")}") `,
    };
};
const gameBox = () => {
    return {
        backgroundImage: `url("${require("../assets/img/column/game-box.png")}") `,
    };
};

//row文件
