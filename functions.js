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