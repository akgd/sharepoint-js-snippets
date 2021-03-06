// Use to determine the classic SP form type the user is currently 
// viewing. Run specific functions based on whether it is a NewForm,
// EditForm or DispForm. In the example below, I add a class to the 
// form based on the type and move the save and cancel buttons to a
// custom element.

// Check item form view
function checkFormView(currentUrl) {
    var newForm = checkForSubstring(currentUrl, 'newform');
    var dispForm = checkForSubstring(currentUrl, 'dispform');
    var editForm = checkForSubstring(currentUrl, 'editform');

    if (newForm) {
        spNewForm();
    } else if (dispForm) {
        spDispForm();
    } else if (editForm) {
        spEditForm();
    } else {
        //console.log('Not a valid form URL.')
    }
}

// Check if string contains substring (not case sensitive)
function checkForSubstring(fullStr, subStr) {
    fullStr = fullStr.toLowerCase();
    subStr = subStr.toLowerCase();
    if (fullStr.indexOf(subStr) !== -1) {
        return true;
    } else {
        return false;
    }
}

// New form
function spNewForm() {
    // Add class to our custom form div
    document.getElementById('root').classList.add('sp-new-form');

    // Move save button to our actions area
    var saveBtn = document.querySelector('.ms-toolbar input[value="Save"]');
    var saveEl = document.querySelector('#sp-form-save');
    saveEl.appendChild(saveBtn);

    //move cancel button to our actions area
    var cancelBtn = document.querySelector('.ms-toolbar input[value="Cancel"]');
    var cancelEl = document.querySelector('#sp-form-cancel');
    saveEl.appendChild(saveBtn);
}

// Disp form
function spDispForm() {
    // Add class to our custom form div
    document.getElementById('root').classList.add('sp-disp-form');
}

// Edit form
function spEditForm() {
    // Add class to our custom form div
    document.getElementById('root').classList.add('sp-edit-form');

    // Move save button to our actions area
    var saveBtn = document.querySelector('.ms-toolbar input[value="Save"]');
    var saveEl = document.querySelector('#sp-form-save');
    saveEl.appendChild(saveBtn);

    // Move cancel button to our actions area
    var cancelBtn = document.querySelector('.ms-toolbar input[value="Cancel"]');
    var cancelEl = document.querySelector('#sp-form-cancel');
    saveEl.appendChild(saveBtn);
}
