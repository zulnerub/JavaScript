class Computer {
    constructor(ramMemory, cpuGHz, hddMemory){
        this.ramMemory = Number(ramMemory);
        this.cpuGHz = Number(cpuGHz);
        this.hddMemory = Number(hddMemory);
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace){
        if (this.hddMemory < Number(requiredSpace)){
            throw new Error("There is not enough space on the hard drive");
        }

        let newProgram = {
            name,
            requiredSpace
        };

        this.hddMemory -= Number(requiredSpace);

        this.installedPrograms.push(newProgram);

        return newProgram;
    }

    uninstallAProgram(name){
        let program = this.programExists(name);

        if (!program){
            throw new Error("Control panel is not responding");
        }

        this.hddMemory += program.requiredSpace;

        this.installedPrograms.splice(this.installedPrograms.indexOf(program), 1);

        return this.installedPrograms;

    }

    openAProgram(name){
        let program = this.programExists(name);
        if (!program){
            throw new Error(`The ${name} is not recognized`);
        }

        if (this.programIsOpen(name)){
            throw new Error(`The ${name} is already open`)
        }

        let ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        let programObject = {
            name,
            ramUsage,
            cpuUsage
        };

        if ((this.totalRamUsage() + ramUsage) >= 100){
            throw new Error(`${name} caused out of memory exception`);
        }else{
            if ((this.totalCPUUsage() + cpuUsage) >= 100 ){
                throw new Error(`${name} caused out of cpu exception`);
            }
        }

        this.taskManager.push(programObject);

        return programObject;
    }

    taskManagerView(){
        if (this.taskManager.length === 0){
            return "All running smooth so far";
        }

        let result =  "";

            this.taskManager
            .forEach(
                program => result += `Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%\n`);

        return result.trim();
    }

    programExists(name){
        return this.installedPrograms.find(prog => prog.name === name);
    }

    programIsOpen(name){
        return this.taskManager.find(prog => prog.name === name);
    }

    totalRamUsage(){
        let totalRamUsage = 0;
        this.taskManager.forEach(prog => totalRamUsage += prog.ramUsage);
        return totalRamUsage;
    }

    totalCPUUsage(){
        let totalCPUUsage = 0;
        this.taskManager.forEach(prog => totalCPUUsage += prog.cpuUsage);
        return totalCPUUsage;
    }


}