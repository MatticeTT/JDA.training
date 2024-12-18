let lists = document.querySelectorAll(".list");
let containers = document.querySelectorAll(".container > div");

let selected = null; // Initialize selected variable

// Add dragstart event listener to each list item
lists.forEach(list => {
    list.addEventListener("dragstart", function(e){
        e.dataTransfer.setData("text", e.target.id); // Store the dragged item's ID
        selected = e.target;
        e.target.classList.add('dragging'); // Add dragging class for visual feedback
    });

    list.addEventListener("dragend", function(e) {
        e.target.classList.remove('dragging'); // Remove dragging class after the drag ends
    });
});

// Add dragover and drop event listeners to each container
containers.forEach(container => {
    container.addEventListener("dragover", function(e){
        e.preventDefault(); // Allow dropping by preventing the default behavior
        container.classList.add('drag-over'); // Add visual feedback on hover
    });

    container.addEventListener("dragleave", function(e){
        container.classList.remove('drag-over'); // Remove the hover effect when the dragged item leaves
    });

    container.addEventListener("drop", function(e){
        e.preventDefault(); // Prevent default behavior for drop
        container.classList.remove('drag-over'); // Remove the hover effect
        if (selected && selected !== container) {
            container.appendChild(selected); // Append the dragged item to the target container
        }
    });
});

// Check the lists after drag and drop operation
function checkLists() {
    let settings = document.getElementById('settings');
    let settingLists = settings.querySelectorAll('.list');
    let password = Array.from(settingLists).find(list => list.textContent.includes('Password'));
    let sessionSettings = Array.from(settingLists).find(list => list.textContent.includes('Session Settings'));

    let admin = document.getElementById('Administration');
    let adminLists = admin.querySelectorAll('.list');
    let generalAdmin = Array.from(adminLists).find(list => list.textContent.includes('General'));
    let logfiles = Array.from(adminLists).find(list => list.textContent.includes('Logfiles'));
    let setup = Array.from(adminLists).find(list => list.textContent.includes('Setup'));
    let user = Array.from(adminLists).find(list => list.textContent.includes('User'));

    let operations = document.getElementById('Operations');
    let operationsLists = operations.querySelectorAll('.list');
    let inventory = Array.from(operationsLists).find(list => list.textContent.includes('Inventory'));
    let moveTask = Array.from(operationsLists).find(list => list.textContent.includes('Move Task'));
    let order = Array.from(operationsLists).find(list => list.textContent.includes('Order'));
    let receiving = Array.from(operationsLists).find(list => list.textContent.includes('Receiving'));
    let warehouseMap = Array.from(operationsLists).find(list => list.textContent.includes('Warehouse Map'));

    let reports = document.getElementById('Reports');
    let reportsLists = reports.querySelectorAll('.list');
    let reportsSelection = Array.from(reportsLists).find(list => list.textContent.includes('Reports Selection'));

    let data = document.getElementById('Data');
    let dataLists = data.querySelectorAll('.list');
    let algorithms = Array.from(dataLists).find(list => list.textContent.includes('Algorithms'));
    let generalData = Array.from(dataLists).find(list => list.textContent.includes('General'));
    let archive = Array.from(dataLists).find(list => list.textContent.includes('Archive'));
    let inventoryData = Array.from(dataLists).find(list => list.textContent.includes('Inventory'));
    let location = Array.from(dataLists).find(list => list.textContent.includes('Location'));
    let moveTaskData = Array.from(dataLists).find(list => list.textContent.includes('Move Task'));
    let orderData = Array.from(dataLists).find(list => list.textContent.includes('Order'));
    let preAdvice = Array.from(dataLists).find(list => list.textContent.includes('Pre-Advice'));
    let sku = Array.from(dataLists).find(list => list.textContent.includes('SKU'));

    let incorrectItems = []; // Array to store incorrect items

    // Check if each item is in the correct container
    if (!password) incorrectItems.push('Password');
    if (!sessionSettings) incorrectItems.push('Session Settings');
    if (!generalAdmin) incorrectItems.push('General');
    if (!logfiles) incorrectItems.push('Logfiles');
    if (!setup) incorrectItems.push('Setup');
    if (!user) incorrectItems.push('User');
    if (!inventory) incorrectItems.push('Inventory');
    if (!moveTask) incorrectItems.push('Move Task');
    if (!order) incorrectItems.push('Order');
    if (!receiving) incorrectItems.push('Receiving');
    if (!warehouseMap) incorrectItems.push('Warehouse Map');
    if (!reportsSelection) incorrectItems.push('Reports Selection');
    if (!algorithms) incorrectItems.push('Algorithms');
    if (!generalData) incorrectItems.push('General');
    if (!archive) incorrectItems.push('Archive');
    if (!inventoryData) incorrectItems.push('Inventory');
    if (!location) incorrectItems.push('Location');
    if (!moveTaskData) incorrectItems.push('Move Task');
    if (!orderData) incorrectItems.push('Order');
    if (!preAdvice) incorrectItems.push('Pre-Advice');
    if (!sku) incorrectItems.push('SKU');

    // Prepare the message based on the missing items
    let message = '';
    if (incorrectItems.length === 0) {
        message = 'Congratulations! All items are in the correct containers.';
    } else {
        message = `The following items are still in the wrong containers: ${incorrectItems.join(', ')}`;
    }

    // Show the alert with the result
    alert(message);
}
