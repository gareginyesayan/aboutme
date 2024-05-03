/* document.querySelectorAll('.hymn-title').forEach(function(title) {
    title.addEventListener('click', function() {
        // Using a more robust check for the display style.
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}); */

document.querySelectorAll('.hymn-title').forEach(function(entry) {
    entry.addEventListener('click', function() {
        // this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none';
        this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.timeline-title').forEach(function(title) {
    title.addEventListener('click', function() {
        // this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none';
        this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    });
});