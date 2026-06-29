document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const heroCtas = document.querySelectorAll('.hero-ctas .btn');

    // Handle tab switching
    function switchTab(targetId) {
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to target tab button and content
        const targetBtn = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
        const targetContent = document.getElementById(targetId);

        if (targetBtn && targetContent) {
            targetBtn.classList.add('active');
            targetContent.classList.add('active');
        }
    }

    // Add click event listeners to tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            switchTab(targetId);
        });
    });

    // Add click event listeners to hero CTA buttons
    heroCtas.forEach(cta => {
        cta.addEventListener('click', (e) => {
            const targetTab = cta.getAttribute('data-tab');
            if (targetTab === 'mentor') {
                switchTab('mentor-form');
            } else if (targetTab === 'mentee') {
                switchTab('mentee-form');
            }
        });
    });
});
