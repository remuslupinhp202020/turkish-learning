document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('content-container');

    syllabus.forEach((section, index) => {
        // Create Card
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section-card';

        // Add Title
        const title = document.createElement('h2');
        title.className = 'section-title';
        title.innerText = section.title;
        sectionDiv.appendChild(title);

        // --- RENDER LOGIC BASED ON SECTION TYPE ---

        // TYPE 1: THEORY (Pure explanation)
        if (section.type === 'theory') {
            const content = document.createElement('div');
            content.className = 'theory-content';
            content.innerHTML = section.content; // Allows bolding, line breaks, etc.
            sectionDiv.appendChild(content);
        }
        
        // TYPE 2: TABLE (Standard Data)
        else if (section.type === 'table') {
            if (section.description) {
                const desc = document.createElement('div');
                desc.className = 'section-desc';
                desc.innerHTML = section.description;
                sectionDiv.appendChild(desc);
            }

            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            // Headers
            const headerRow = document.createElement('tr');
            section.headers.forEach(headerText => {
                const th = document.createElement('th');
                th.innerText = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);

            // Rows
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
                tdTurk.innerHTML = formatTurkishCell(rowData[2]);
                tr.appendChild(tdTurk);

                tbody.appendChild(tr);
            });
            table.appendChild(thead);
            table.appendChild(tbody);
            sectionDiv.appendChild(table);
        }

        // TYPE 3: EXERCISE (Quiz)
        else if (section.type === 'exercise') {
            const exerciseContainer = document.createElement('div');
            exerciseContainer.className = 'exercise-container';

            section.questions.forEach((q, qIndex) => {
                const qBlock = document.createElement('div');
                qBlock.className = 'question-block';

                const questionText = document.createElement('p');
                questionText.innerHTML = `<strong>Q${qIndex + 1}:</strong> ${q.question}`;
                
                const revealBtn = document.createElement('button');
                revealBtn.innerText = "Show Answer";
                revealBtn.className = "reveal-btn";
                
                const answerText = document.createElement('p');
                answerText.className = "answer hidden";
                answerText.innerText = q.answer;

                // Click event to toggle answer
                revealBtn.onclick = () => {
                    answerText.classList.toggle('hidden');
                    revealBtn.innerText = answerText.classList.contains('hidden') ? "Show Answer" : "Hide Answer";
                };

                qBlock.appendChild(questionText);
                qBlock.appendChild(revealBtn);
                qBlock.appendChild(answerText);
                exerciseContainer.appendChild(qBlock);
            });
            sectionDiv.appendChild(exerciseContainer);
        }

        container.appendChild(sectionDiv);
    });
});

// Helper for formatting pronunciation
function formatTurkishCell(text) {
    if(text.includes("(")) {
        const parts = text.split('(');
        return `${parts[0]} <br> <span class="phonetic">(${parts.slice(1).join('(')}</span>`;
    }
    return text;
}
