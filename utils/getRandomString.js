let rand = Math.floor(Math.random() * 11);
let response1 = null;
switch (rand) {
    case 0:
        response1 = "0"
        break;
    case 1:
        response1 = "1"
        break;
    case 2:
        response1 = "2"
        break;
    case 3:
        response1 = "3"
        break;
    case 4:
        response1 = "4"
        break;
    case 5:
        response1 = "5"
        break;
    case 6:
        response1 = "6"
        break;
    case 7:
        response1 = "7"
        break;
    case 8:
        response1 = "8"
        break;
    case 9:
        response1 = "9"
        break;
    case 10:
        response1 = "10"
        break;
    default:
        console.error("didnt return a correct number from 0-10.")
        response1 = "an error has occured please report this"
}
