import { action, makeObservable, observable, runInAction } from "mobx";
import { aspectRatioObj } from "../Data/AspectRatioObject";


class Recorder {
    duration: number = 5000;
    durationTimer: number = this.duration / 1000
    sound: boolean = true;
    camera: boolean = true
    aspectRatio: number = 16 / 9
    preRecordisDIsplayed: boolean = false
    preRecordTime: number = 3
    setTimeOutIds: any[] = []
    constructor() {
        makeObservable(this, {
            duration: observable,
            sound: observable,
            camera: observable,
            durationTimer: observable,
            aspectRatio: observable,
            preRecordisDIsplayed: observable,
            preRecordTime: observable,
            setTimeOutIds: observable,
            muteUnmute: action.bound,
            closeCamera: action.bound,
            openCamera: action.bound,
            changerecordLength: action.bound,
            changeAspectRatio: action.bound,
            showPreRecordisDIsplayed: action.bound,
            hidePreRecordisDIsplayed: action.bound,
            startPreRecordingTimer: action.bound,
            decreaseTime: action.bound,
            clearSetTimouts: action.bound
        })
    }


    muteUnmute() {
        this.sound = !this.sound
    }


    closeCamera() {
        this.camera = false
    }
    openCamera() {
        this.camera = true
    }
    changerecordLength(newDUration: number) {
        this.duration = newDUration
        this.durationTimer = newDUration
    }
    changeAspectRatio(aspectRatioKey: string) {
        const value = aspectRatioObj[aspectRatioKey as keyof typeof aspectRatioObj]
        this.aspectRatio = value.code


    }

    decreaseTime() {
        for (var i = 1; i < this.durationTimer + 1; i++) {
            this.setTimeOutIds.push(setTimeout(() => {
                runInAction(() => {
                    this.durationTimer--
                })
            }, i * 1000))

        }
        this.setTimeOutIds.push(setTimeout(() => {
            runInAction(() => {
                this.durationTimer = this.duration / 1000
            })
        }, i * 1000))

    }
    showPreRecordisDIsplayed() {
        this.preRecordisDIsplayed = true
    }
    hidePreRecordisDIsplayed() {
        this.preRecordisDIsplayed = false
        this.preRecordTime = 3
    }

    startPreRecordingTimer() {
        this.preRecordisDIsplayed = true
        for (var i = 1; i < this.preRecordTime + 1; i++) {
            setTimeout(() => {
                runInAction(() => {
                    this.preRecordTime--
                })

            }, i * 1000)

        }
    }

    clearSetTimouts() {
        for (const timeOut of this.setTimeOutIds) {
            clearTimeout(timeOut);

        }
        this.durationTimer = this.duration / 1000
    }


}


export const RecorderInstance = new Recorder()