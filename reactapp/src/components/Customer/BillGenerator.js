import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generatePDF = () => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Set font size and style
  doc.setFontSize(16);
  doc.setFont('helvetica','bold');

  // Add a heading
  doc.text('VacServ - Invoice', 10, 15);

  // Reset font size and style
  doc.setFontSize(12);
  doc.setFont('normal');

  // Add bill details
  doc.text('Bill To:', 10, 30);
  doc.text('John Doe', 20, 40);
  doc.text('123 Main Street', 20, 50);
  doc.text('City, State, Zip Code', 20, 60);

  doc.text('Invoice Date:', 100, 30);
  doc.text('Due Date:', 100, 40);
  doc.text('2023-09-12', 120, 30);
  doc.text('2023-09-30', 120, 40);

  // Add a table for bill items
  const items = [
    ['Item', 'Description', 'Time', 'Unit Price', 'Total'],
    ['Item 1', 'Description 1', '12:00-13:00', '$10', '$20'],
    ['Item 2', 'Description 2', '13:00-14:00', '$15', '$45'],
  ];

  doc.autoTable({
    startY: 80,
    head: [items[0]],
    body: items.slice(1),
    headStyles: { fillColor: [0, 51, 102] }, // Header background color
    theme: 'striped', // Table style
  });

  // Add a total
  doc.text('Total:', 160, doc.autoTable.previous.finalY + 10);
  doc.text('$65', 190, doc.autoTable.previous.finalY + 10);

  // Save the PDF
  doc.save('bill.pdf');
};
