document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.answer');
        const question = item.querySelector('.question');
        
        // Toggle open class for smooth height expansion
        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
        } else {
            document.querySelectorAll('.answer').forEach(ans => ans.classList.remove('open')); // Close others
            answer.classList.add('open');
        }

        // Toggle open class for rotation effect on the icon
        question.classList.toggle('open');
    });
});
