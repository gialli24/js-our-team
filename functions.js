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
            <div class="card text-center my-4">
                <img src="${image}" class="card-img" alt="">
                
                <div class="card-body">
                    <h3>${name}</h3>
                    ${email}
                </div>

                <div class="card-footer">
                    ${role}
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