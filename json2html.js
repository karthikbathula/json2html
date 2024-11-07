export default function json2html(data) {
  let html = '<table data-user="karthikbathula9@gmail.com">';
  html += '<thead><tr>';
  const headers = ["Name", "Age", "Gender"];
  headers.forEach(header => html += `<th>${header}</th>`);
  html += '</tr></thead>';
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    headers.forEach(header => {
      html += `<td>${row[header] || ''}</td>`; 
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  return html;
//json2html
}
