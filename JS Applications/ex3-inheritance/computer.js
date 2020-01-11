function createComputerHierarchy() {
    class Keyboard {
        manufacturer;
        responseTime;
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        manufacturer;
        width;
        height;
        constructor(manufacturer, w, h){
            this.manufacturer = manufacturer;
            this.width = w;
            this.height = h;
        }
    }

    class Battery {
        manufacturer;
        expectedLife;
        constructor(manufacturer, life){
            this.manufacturer = manufacturer;
            this.expectedLife = life;
        }
    }

    class Computer {
        manufacturer;
        processorSpeed;
        ram;
        hardDiskSpace;
        constructor(manufacturer, speed, ram, space){
            if (new.target === Computer){
                throw new Error();
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = speed;
            this.ram = ram;
            this.hardDiskSpace = space;
        }
    }

    class Laptop extends Computer{
        weight;
        color;
        _battery;
        constructor(manufacturer, speed, ram, space, weight, color, battery){
            super(manufacturer, speed, ram, space);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        set battery(battery){
            if (battery instanceof Battery){
                this._battery = battery;
            }else{
                throw new TypeError();
            }
        }

        get battery(){
            return this._battery;
        }

    }

    class Desktop extends Computer{
        _keyboard;
        _monitor;
        constructor(manufacturer, speed, ram, space, keyboard, monitor) {
            super(manufacturer, speed, ram, space);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;
        }

        get monitor(){
            return this._monitor;
        }

        set keyboard(keyboard){
            if (keyboard instanceof Keyboard){
                this._keyboard = keyboard;
            }else {
                throw new TypeError();
            }
        }

        set monitor(monitor){
            if (monitor instanceof Monitor){
                this._monitor = monitor;
            }else{
                throw new TypeError();
            }
        }

    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}



function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return Number((this.processorSpeed + this.ram + this.hardDiskSpace) / 3);
        };

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return (this.manufacturer === this.keyboard.manufacturer &&
                this.manufacturer === this.monitor.manufacturer &&
                this.keyboard.manufacturer === this.monitor.manufacturer);
        };

        classToExtend.prototype.isClassy = function () {
            return (this.battery.expectedLife >= 3 &&
                (this.color === "Silver" || this.color === "Black") &&
                this.weight < 3);
        };
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}