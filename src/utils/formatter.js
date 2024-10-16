var Formatter = /** @class */ (function () {
    function Formatter() {
    }
    Formatter.formatDate = function (value) {
        var date = new Date(value);
        return Intl.DateTimeFormat('ca-ES', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(date);
    };
    return Formatter;
}());
export { Formatter };
