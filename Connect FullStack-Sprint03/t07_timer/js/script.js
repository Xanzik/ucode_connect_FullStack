class Timer {
    constructor(title, delay, stopCount) {
      this.title = title;
      this.delay = delay;
      this.stopCount = stopCount;
      this.currentCount = 0;
      this.timerId = null;
    }
  
    start() {
      console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`);
      this.timerId = setInterval(() => {
        this.tick();
      }, this.delay);
    }
  
    tick() {
      const cyclesLeft = this.stopCount - this.currentCount;
      console.log(`Timer ${this.title} Tick! | cycles left ${cyclesLeft}`);
      this.currentCount++;
      if (this.currentCount === this.stopCount) {
        this.stop();
      }
    }
  
    stop() {
      console.log(`Timer ${this.title} stopped`);
      clearInterval(this.timerId);
    }
  }
  
  function runTimer(id, delay, counter) {
    const timer = new Timer(id, delay, counter);
    timer.start();
  }
  
  