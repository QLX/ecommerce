export default function getMonth() {
    const monthArr = ["January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October", "November", "December"];
    return monthArr[new Date().getMonth()];
};