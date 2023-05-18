function Calculator() {
    this.result = 0;
  
    this.init = function(num) {
      this.result = num;
      return this;
    };
  
    this.add = function(num) {
      this.result += num;
      return this;
    };
  
    this.sub = function(num) {
      this.result -= num;
      return this;
    };
  
    this.mul = function(num) {
      this.result *= num;
      return this;
    };
  
    this.div = function(num) {
      this.result /= num;
      return this;
    };
    this.alert = function() {
        var self = this; // Store a reference to the calculator object
        setTimeout(function() {
          alert("Current result: " + self.result);
        }, 5000);
      };
}
