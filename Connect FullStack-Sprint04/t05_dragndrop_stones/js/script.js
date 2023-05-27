document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.getElementsByClassName('block');

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        let isDraggable = false;
        let initialX, initialY;

        block.addEventListener('mousedown', function(event) {
            event.preventDefault();

            if (block.classList.contains('draggable')) {
                isDraggable = true;
                block.style.position = 'absolute';
                initialX = event.clientX - block.offsetLeft;
                initialY = event.clientY - block.offsetTop;
            }
        });

        block.addEventListener('mousemove', function(event) {
            if (isDraggable) {
                const container = document.getElementById('container');

                const x = event.clientX - container.offsetLeft - initialX;
                const y = event.clientY - container.offsetTop - initialY;

                block.style.left = x + 'px';
                block.style.top = y + 'px';
            }
        });

        block.addEventListener('mouseup', function() {
            isDraggable = false;
        });

        block.addEventListener('mouseleave', function() {
            isDraggable = false;
        });

        block.addEventListener('click', function() {
            block.classList.toggle('draggable');
        });
    }
});