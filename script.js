document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('content-container');

    syllabus.forEach(section => {
        // 1. Create the Section Card
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section-card';

        // 2. Add Title
        const title = document.createElement('h2');
        title.className = 'section-title';
        title.innerText = section.title;
        sectionDiv.appendChild(title);

        // 3. Create Table
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // 4. Create Headers
        const headerRow = document.createElement('tr');
        section.headers.forEach(headerText => {
            const th = document.createElement('th');
            th.innerText = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // 5. Create Data Rows
        section.rows.forEach(rowData => {
            const tr = document.createElement('tr');
            
            // English Column
            const tdEng = document.createElement('td');
            tdEng.innerText = rowData[0];
            tr.appendChild(tdEng);

            // Hindi Column (Add specific class for styling)
            const tdHin = document.createElement('td');
            tdHin.innerText = rowData[1];
            tdHin.className = 'hindi-text';
            tr.appendChild(tdHin);

            // Turkish Column (Add specific class for Hindi phonetics styling if needed)
            const tdTurk = document.createElement('td');
            tdTurk.innerHTML = highlightPhonetic(rowData[2]);
            tr.appendChild(tdTurk);

            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        sectionDiv.appendChild(table);
        container.appendChild(sectionDiv);
    });
});

// Helper function to bold the Hindi pronunciation inside the parenthesis
function highlightPhonetic(text) {
    // If text contains parenthesis, wrap the part inside () with a span or bold tag
    // This assumes format: "TurkishWord (HindiPronunciation)"
    return text.replace(/\(([^)]+)\)/g, '<strong>($1)</strong>');
}
