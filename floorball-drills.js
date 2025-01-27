document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#section-nav a');
    const exercises = document.querySelectorAll('.exercise');

    // Function to filter exercises by tag
    function filterExercises(tag) {
        exercises.forEach(exercise => {
            if (tag === 'all-drills' || exercise.getAttribute('data-tag') === tag) {
                exercise.style.display = 'block'; // Show matching exercises
            } else {
                exercise.style.display = 'none'; // Hide non-matching exercises
            }
        });
    }

    // Function to update active link highlighting
    function highlightActiveLink(selectedTag) {
        navLinks.forEach(link => {
            if (link.getAttribute('data-section') === selectedTag) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Set default view to show all exercises and highlight the "All Drills" link
    const defaultTag = 'all-drills';
    filterExercises(defaultTag);
    highlightActiveLink(defaultTag);

    // Add event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedTag = this.getAttribute('data-section');

            // Filter exercises based on selected tag
            filterExercises(selectedTag);

            // Highlight the active link
            highlightActiveLink(selectedTag);
        });
    });
});


