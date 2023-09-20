import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generatePDF = (appointmentDetails) => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Set font size and style
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');

  // Add a heading
  doc.text('VacServ - Invoice', 10, 15);

  // Reset font size and style
  doc.setFontSize(12);
  doc.setFont('normal');

  // Add user details
  // Add a table for appointment details
  const appointmentsData = [
    ['Product Name', 'Product Model No.', 'Service Center', 'Date', 'Price',],
    ...appointmentDetails.map((appointment) => [
      appointment.productName,
      appointment.productModelNo,
      appointment.serviceCenterName,
      appointment.availableSlots,
      appointment.serviceCenterPrice
    ]),
  ];

  doc.autoTable({
    startY: 80,
    head: appointmentsData.slice(0, 1), // Header row
    body: appointmentsData.slice(1), // Data rows
    headStyles: { fillColor: [0, 51, 102] },
    theme: 'striped',
  });

  // Save the PDF
  doc.save('bill.pdf');
};
