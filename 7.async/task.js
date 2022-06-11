

class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if (id == undefined){
            throw new Error('параметр id не задан')
        }

        const chekId = this.alarmCollection.find(item => item.id === id)
        if (chekId !== undefined){
            return console.error('звонок существует')
        }

        this.alarmCollection.push({
            time: time,
            callback: callback,
            id: id
        });
    }

    removeClock(id){
        const removeId = this.alarmCollection.filter(item => item.id !== id)
        if (removeId == undefined){
            return false
        } else {
            this.alarmCollection = removeId
            return true
        }
    }

    getCurrentFormattedTime(){
        let date = new Date();
        let hours = date.getHours();
        hours = hours < 10 ? `0${hours}`: hours;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? `0${minutes}`: minutes;
        let time = `${hours}:${minutes}`
        return time
    }

    start(){
        if (!this.timer){
            this.timer = setInterval(()=> {
                this.alarmCollection.forEach(call => {
                    if (call.time === this.getCurrentFormattedTime()){
                        call.callback();
                    }
                });
            });
        }
    }

    stop(){
        if (this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }   
    }

    printAlarms(){
        console.log(`печать всех будильников в количестве: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведен на ${item.time}`))
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}