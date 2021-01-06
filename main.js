
function getMelonValues(melon='') {
    
    const rinds = Array.from(document.querySelectorAll(`[name="rind${melon}"]`));
    const rind = rinds.filter(rind => rind.checked && rind.checked === true)[0];
    const thickness = rind && rind.value || '';

    const fleshs = Array.from(document.querySelectorAll(`[name="flesh${melon}"]`));
    const flesh = fleshs.filter(flesh => flesh.checked && flesh.checked === true)[0];
    const averageness = flesh && flesh.value || '';

    const seeds = Array.from(document.querySelectorAll(`[name="seeds${melon}"]`));
    const seed = seeds.filter(seed => seed.checked && seed.checked === true)[0];
    const hasSeeds = seed && seed.value || '';
    
    const result = {
        rind: thickness === 'thick' ? ['R','R','R','r'] : ['r','r','r','r'],
        flesh: averageness === 'average' ? ['F','F','F','f'] : ['f','f','f','f'],
        seeds: hasSeeds === 'seeds' ? ['S','S','S','s'] : ['s','s','s','s'],
    }

    return result;
}

function getTableCells(table='#rind-table') {
    return {
        r1c1: document.querySelector(`${table} .row-1 .cell1`),
        r1c2: document.querySelector(`${table} .row-1 .cell2`),
        r1c3: document.querySelector(`${table} .row-1 .cell3`),
        r1c4: document.querySelector(`${table} .row-1 .cell4`),
        r1c5: document.querySelector(`${table} .row-1 .cell5`),
        r2c1: document.querySelector(`${table} .row-2 .cell1`),
        r2c2: document.querySelector(`${table} .row-2 .cell2`),
        r2c3: document.querySelector(`${table} .row-2 .cell3`),
        r2c4: document.querySelector(`${table} .row-2 .cell4`),
        r2c5: document.querySelector(`${table} .row-2 .cell5`),
        r3c1: document.querySelector(`${table} .row-3 .cell1`),
        r3c2: document.querySelector(`${table} .row-3 .cell2`),
        r3c3: document.querySelector(`${table} .row-3 .cell3`),
        r3c4: document.querySelector(`${table} .row-3 .cell4`),
        r3c5: document.querySelector(`${table} .row-3 .cell5`),
        r4c1: document.querySelector(`${table} .row-4 .cell1`),
        r4c2: document.querySelector(`${table} .row-4 .cell2`),
        r4c3: document.querySelector(`${table} .row-4 .cell3`),
        r4c4: document.querySelector(`${table} .row-4 .cell4`),
        r4c5: document.querySelector(`${table} .row-4 .cell5`),
        r5c1: document.querySelector(`${table} .row-5 .cell1`),
        r5c2: document.querySelector(`${table} .row-5 .cell2`),
        r5c3: document.querySelector(`${table} .row-5 .cell3`),
        r5c4: document.querySelector(`${table} .row-5 .cell4`),
        r5c5: document.querySelector(`${table} .row-5 .cell5`),
    }
}

function updateTableCells(table, melon1, melon2, type) {
    // alleles
    table.r1c2.innerHTML = melon1[type][0];
    table.r1c3.innerHTML = melon1[type][1];
    table.r1c4.innerHTML = melon1[type][2];
    table.r1c5.innerHTML = melon1[type][3];
    table.r2c1.innerHTML = melon2[type][0];
    table.r3c1.innerHTML = melon2[type][1];
    table.r4c1.innerHTML = melon2[type][2];
    table.r5c1.innerHTML = melon2[type][3];
    
    // row 2
    table.r2c2.innerHTML = melon1[type][0] + melon2[type][0];
    table.r2c3.innerHTML = melon1[type][1] + melon2[type][0];
    table.r2c4.innerHTML = melon1[type][2] + melon2[type][0];
    table.r2c5.innerHTML = melon1[type][3] + melon2[type][0];
    // row 3
    table.r3c2.innerHTML = melon1[type][0] + melon2[type][1];
    table.r3c3.innerHTML = melon1[type][1] + melon2[type][1];
    table.r3c4.innerHTML = melon1[type][2] + melon2[type][1];
    table.r3c5.innerHTML = melon1[type][3] + melon2[type][1];
    // row 4
    table.r4c2.innerHTML = melon1[type][0] + melon2[type][2];
    table.r4c3.innerHTML = melon1[type][1] + melon2[type][2];
    table.r4c4.innerHTML = melon1[type][2] + melon2[type][2];
    table.r4c5.innerHTML = melon1[type][3] + melon2[type][2];
    // row 5
    table.r5c2.innerHTML = melon1[type][0] + melon2[type][3];
    table.r5c3.innerHTML = melon1[type][1] + melon2[type][3];
    table.r5c4.innerHTML = melon1[type][2] + melon2[type][3];
    table.r5c5.innerHTML = melon1[type][3] + melon2[type][3];
    
}

(function(){
    const btn = document.querySelector('[type="submit"]');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const melon1 = getMelonValues();
        const melon2 = getMelonValues('2');

        console.log("melon1: ", melon1);
        console.log("melon2: ", melon2);
        
        const rindCells = getTableCells('#rind-table');
        const fleshCells = getTableCells('#flesh-table');
        const seedCells = getTableCells('#seed-table');
        
        updateTableCells(rindCells, melon1, melon2, 'rind');
        updateTableCells(fleshCells, melon1, melon2, 'flesh');
        updateTableCells(seedCells, melon1, melon2, 'seeds');

    })
})()

