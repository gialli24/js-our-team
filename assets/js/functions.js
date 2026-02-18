/**
 * 
 * @param {string} image 
 * @param {string} name 
 * @param {string} email 
 * @param {string} role 
 * @returns HTML markup
 */
function renderMarkup(image, name, email, role) {
    const markup = `
        <div class="col">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${image}" class="rounded">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${email}</p>
                        </div>
                        <div class="card-footer">
                            <p class="card-text">${role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return markup;
}

/**
 * 
 * @returns Member object
 */
function createMember() {
    /* Retrive data */
    const firstName = firstNameField.value;
    const lastName = lastNameField.value;
    const email = emailField.value;
    const image = imageField.value;
    const role = roleField.value;

    if(firstName && lastName && email && image && role) {
        const name = firstName + " " + lastName;
    
        /* Create member object */
        const newMember = {
            name,
            role,
            email,
            image
        }
    
        return newMember;
    } else {
        return;
    }
}