document.addEventListener('DOMContentLoaded', () => {
    const dataTitle = document.getElementById('dataTitle');
    const data = document.getElementById('data');
    const dataForm = document.getElementById('dataForm');
    const nameInput = document.getElementById('nameInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const photoInput = document.getElementById('photoInput');
    const superpowersInput = document.getElementById('superpowersInput');
    const publicInput = document.getElementById('publicInput');
    const submitButton = document.getElementById('submitButton');
    const forgetButton = document.getElementById('forgetButton');

    dataForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput.value;
        const description = descriptionInput.value;
        const photo = photoInput.value;
        const superpowers = superpowersInput.value;
        const publicness = publicInput.value;

        // Display the submitted data
        dataTitle.textContent = 'Submitted Data:';
        document.getElementById('name').textContent = name;
        document.getElementById('description').textContent = description;
        document.getElementById('photo').textContent = photo;
        document.getElementById('superpowers').textContent = superpowers;
        document.getElementById('public').textContent = publicness;
    });

    forgetButton.addEventListener('click', () => {
        // Clear the form fields
        nameInput.value = '';
        descriptionInput.value = '';
        photoInput.value = '';
        superpowersInput.value = '';
        publicInput.value = 'public';

        // Reset the displayed data
        dataTitle.textContent = 'Data:';
        document.getElementById('name').textContent = '';
        document.getElementById('description').textContent = '';
        document.getElementById('photo').textContent = '';
        document.getElementById('superpowers').textContent = '';
        document.getElementById('public').textContent = '';
    });
});
