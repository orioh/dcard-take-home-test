
class Tools {

    static uniqueId() {
        var date = new Date();
        return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ].join('');
    }
}

export default Tools;