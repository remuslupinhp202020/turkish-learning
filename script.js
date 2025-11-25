document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('content-container');

    syllabus.forEach(section => {
        // 1. Create the Section Card Container
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section-card';

        // 2. Add Title
        const title = document.createElement('h2');
        title.className = 'section-title';
        title.innerText = section.title;
        sectionDiv.appendChild(title);

        // 3. Add Description (Explanation) if it exists
        if (section.description) {
            const desc = document.createElement('p');
            desc.className = 'section-desc';
            desc.innerHTML = section.description; // Allow innerHTML for bolding inside desc
            sectionDiv.appendChild(desc);
        }

        // 4. Create Table
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // 5. Create Headers
        const headerRow = document.createElement('tr');
        section.headers.forEach(headerText => {
            const th = document.createElement('th');
            th.innerText = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // 6. Create Data Rows
        section.rows.forEach(rowData => {
            const tr = document.createElement('tr');
            
            // English
            const tdEng = document.createElement('td');
            tdEng.innerText = rowData[0];
            tr.appendChild(tdEng);

            // Hindi
            const tdHin = document.createElement('td');
            tdHin.innerText = rowData[1];
            tdHin.className = 'hindi-text';
            tr.appendChild(tdHin);

            // Turkish
            const tdTurk = document.createElement('td');
            // We use the helper function to make the (Hindi Pronunciation) bold/grey
            tdTurk.innerHTML = formatTurkishCell(rowData[2]);
            tr.appendChild(tdTurk);

            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        sectionDiv.appendChild(table);
        container.appendChild(sectionDiv);
    });
});

// Helper: Formats "Word (Pronunciation)" -> "Word <br> <span class='phonetic'>(Pronunciation)</span>"
function formatTurkishCell(text) {
    if(text.includes("(")) {
        // Splitting by first parenthesis to separate Word from Pronunciation
        const parts = text.split('(');
        const word = parts[0];
        const pron = '(' + parts.slice(1).join('('); // Rejoin just in case there are multiple
        return `${word} <br> <span class="phonetic">${pron}</span>`;
    }
    return text;
}
