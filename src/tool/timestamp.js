export const Timestamp = new class {
    Now() {
        return new Date().getTime().toString().slice(0, 10);
    }
}
