const sheetID = "1_nKJnVr07ndM3kcX-o9u4_E3BmXULs0-CBlABuRWiCg";  
const sheetName = "Responses";   
const apiKey = "AIzaSyB7HAllRnGGtOzV4POBqmkS8-gfrKaBeKU";   

const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?key=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {
    console.log("Full API Response:", data);

    if (!data.values || !Array.isArray(data.values) || data.values.length === 0) {
        throw new Error("No data found in Google Sheet.");
    }

    const rows = data.values;
    let html = "<table>";
    html += "<tr><th>EMAIL</th><th>MATH SUBJECTS</th><th>SCIENCE SUBJECTS</th><th>ENGLISH SKILLS</th><th>HISTORY SUBJECTS</th><th>ADDITIONAL SUBJECTS</th><th>WEEKDAY AVAILABILITY</th><th>WEEKEND AVAILABILITY</tr>";
    
    for (let i = 1; i < rows.length; i++) {
        html += "<tr>";
        html += `<td>${rows[i][1] || ""}</td>`;
        html += `<td>${rows[i][2] || ""}</td>`;
        html += `<td>${rows[i][3] || ""}</td>`;
        html += `<td>${rows[i][4] || ""}</td>`;
        html += `<td>${rows[i][5] || ""}</td>`;
        html += `<td>${rows[i][6] || ""}</td>`;
        html += `<td>${rows[i][7] || ""}</td>`;
        html += `<td>${rows[i][8] || ""}</td>`;
        html += "</tr>";
    }

    html += "</table>";
    document.getElementById("data-container").innerHTML = html;
})
.catch(error => {
    console.error("Error fetching data:", error);
    document.getElementById("data-container").innerHTML = `<p style="color:red;">Error loading data. Check console for details.</p>`;
});
