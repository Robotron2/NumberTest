const checkNum = () => {
    let userNum = interFace.value;
    if (userNum == 0) {
        interFace.value = "Math Error!";
    } else if (userNum % 2 == userNum % 3 && userNum % 2 == userNum % 5) {
        interFace.value = userNum + " is definitely an even number";
    } else if (userNum % 2 == 0) {
        interFace.value = userNum + " is an even Number!!";
    } else if (userNum % 3 == 0) {
        interFace.value = userNum + "  is divisible by 3.";
    } else if (userNum % 5 == 0) {
        interFace.value = userNum + " is divisible by 5. ";
    } else {
        interFace.value = userNum + " is an odd number!!";
    }
};

const clr = () => {
    interFace.value = "";
};
