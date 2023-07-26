const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const createPDF = async (name, age) => {
    //crea el documento
    const pdfDoc = await PDFDocument.create()
    //para agregar el tamaño de la pagina
    const page = pdfDoc.addPage([400, 200])
    //y obtiene el tamaño de la pagina
    const { width, height } = page.getSize();
    //dibuja los datos que le pasamos en la posicion de qu esta asignado hay
    page.drawText(`Name: ${name}`, { x: 50, y: height - 50 });
    page.drawText(`Age: ${age}`, { x: 50, y: height - 80 });

    //y guardamos en el buffer en espera
    const pdfByte = await pdfDoc.save()
    const filepath = path.join(__dirname, 'pdfs/presupuesto.pdf')
    //y lo guarda en un archivo 
    fs.writeFileSync(filepath, pdfByte);
}

module.exports = createPDF