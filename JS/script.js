function showOption(option) {
    const continer = document.getElementById("grids");

    let newContent = '';

    if (option === 'itp') {
        newContent = `
         <a href="./HTML/itp24.html" class="grid-item">ITP24</a> 
        `;
    } else if (option === "sut") {
        newContent = `
         <a href="./HTML/sut24.html" class="grid-item">SUT24</a> 
        `;
    }

    continer.innerHTML = `
        ${newContent}
        <div class="back-button" onclick="restoreGrid()>Tillbaka</div>
    `;
}

function restoreGrid() {
    document.getElementById("grids").innerHTML = `
        <div class="grid-item" onclick="showOption('itp')">ITP</div>
        <div class="grid-item" onclick="showOption('sut')">SUT</div>
    `;
}
