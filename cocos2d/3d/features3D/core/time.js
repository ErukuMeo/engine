cc3d.extend(cc3d, (function () {
    /**
     * @private
     * @name cc3d.Timer
     * @description Create a new Timer instance
     * @class A Timer counts milliseconds from when start() is called until when stop() is called.
     */
    var Timer = function Timer() {
        this._isRunning = false;
        this._a = 0;
        this._b = 0;
    };

    Timer.prototype = {
        /**
         * @private
         * @function
         * @name cc3d.Timer#start
         * @description Start the timer
         */
        start: function () {
            this._isRunning = true;
            this._a = (new Date()).getTime();
        },

        /**
         * @private
         * @function
         * @name cc3d.Timer#stop
         * @description Stop the timer
         */
        stop: function () {
            this._isRunning = false;
            this._b = (new Date()).getTime();
        },

        /**
         * @private
         * @function
         * @name cc3d.Timer#getMilliseconds
         * @description Get the number of milliseconds that passed between start() and stop() being called
         */
        getMilliseconds: function () {
            return this._b - this._a;
        }
    };

    return {
        Timer: Timer,

        /**
         * @private
         * @function
         * @name cc3d.now
         * @description Get current time in milliseconds. Use it to measure time difference. Reference time may differ on different platforms.
         * @return {Number} The time in milliseconds
         */
        //now: (!window || !window.performance || !window.performance.now || !window.performance.timing)? Date.now : function () {
        //    return window.performance.now();
        //}
        now: Date.now
    };
}()));
