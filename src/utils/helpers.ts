export function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 a 11, se suma 1 y se asegura 2 dígitos
    const day = date.getDate().toString().padStart(2, '0'); // Asegura 2 dígitos

    const dateFormat = `${year}-${month}-${day}`;
    return dateFormat
}