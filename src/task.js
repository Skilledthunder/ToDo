export default class Task {
    constructor(text, priority, dueDate) {
        this.text = text
        this.priority = priority
        this.dueDate = dueDate
    }

    summary() {
        console.log("Summary goes here")
    }
}