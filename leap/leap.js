//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
    this.value = input;
};

Year.prototype.isLeap = function() {
    let yr = this.value;
    if(yr % 400 == 0) {
        return true;
    } else if(yr % 4 == 0) {
        if(yr % 100 == 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

module.exports = Year;
