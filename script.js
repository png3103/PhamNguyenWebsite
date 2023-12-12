document.querySelectorAll('.image-container').forEach(function(container) {
    container.addEventListener('touchstart', function() {
        // Add a class to mark the container as tapped
        container.classList.add('tapped');
        
    });
    document.getElementById('revealButton').addEventListener('click', function() {
        // Show the big image page
        document.getElementById('bigImagePage').style.display = 'block';
    
        // Optionally, you can add code here to start any animations or further actions
    });
});