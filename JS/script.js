function showOption(category) {
    if (category === 'itp') {
        document.getElementById('itp-grid').innerHTML = `
            <div class="expanded">
                <a href="itp24.html" class="option">ITP24</a>
                <div class="back-button" onclick="restoreBox('itp')">&times;</div>
            </div>
        `;
    } else if (category === 'sut') {
        document.getElementById('sut-grid').innerHTML = `
            <div class="expanded">
                <a href="sut24.html" class="option">SUT24</a>
                <div class="back-button" onclick="restoreBox('sut')">&times;</div>
            </div>
        `;
    }
}

function restoreBox(category) {
    if (category === 'itp') {
        document.getElementById('itp-grid').innerHTML = `<button class="grid-item" onclick="showOption('itp')">ITP</button>`;
    } else if (category === 'sut') {
        document.getElementById('sut-grid').innerHTML = `<button class="grid-item" onclick="showOption('sut')">SUT</button>`;
    }
}