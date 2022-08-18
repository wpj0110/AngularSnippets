export class CounterService {
    activeToInactive = 0;
    inactiveToActive = 0;

    toInactive() {
        this.activeToInactive += 1;
        console.log("Active -> Inactive Count: " + this.activeToInactive);
    }

    toActive() {
        this.inactiveToActive += 1;
        console.log("Inactive -> Active Count: " + this.inactiveToActive);
    }
}