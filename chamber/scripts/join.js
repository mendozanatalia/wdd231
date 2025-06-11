document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.querySelector("#timestamp");
    if (timestampField) {
        const now = new Date();
        timestampField.value = now.toISOString();
        console.log("Timestamp generado:", timestampField.value);
    }
});