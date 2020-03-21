const GetDate = () => {
    const correctNum = function (num) {
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    };
    let date = new Date(),
        day = date.getUTCDate(),
        month = date.getUTCMonth() + 1,
        year = date.getUTCFullYear(),
        hour = date.getUTCHours(),
        minutes = date.getUTCMinutes(),
        seconds = date.getUTCSeconds();

    day = correctNum(day);
    month = correctNum(month);
    year = correctNum(year);
    hour = correctNum(hour);
    minutes = correctNum(minutes);
    seconds = correctNum(seconds);

    return `${year}.${month}.${day} ${hour}:${minutes}:${seconds}`;
}
module.exports = GetDate;