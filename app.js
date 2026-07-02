document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const heroCtas = document.querySelectorAll('.hero-ctas .btn');

    function switchTab(targetId) {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        const targetBtn = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
        const targetContent = document.getElementById(targetId);

        if (targetBtn && targetContent) {
            targetBtn.classList.add('active');
            targetContent.classList.add('active');
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            switchTab(targetId);
        });
    });

    heroCtas.forEach(cta => {
        cta.addEventListener('click', () => {
            const targetTab = cta.getAttribute('data-tab');
            if (targetTab === 'mentor') {
                switchTab('mentor-form');
            } else if (targetTab === 'mentee') {
                switchTab('mentee-form');
            }
        });
    });
});
