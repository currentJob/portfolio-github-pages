document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const iconSpan = toggleBtn?.querySelector('.icon');
    
    // giscus iframe 테마 동기화 함수
    function updateGiscusTheme(theme) {
        const iframe = document.querySelector('iframe.giscus-frame');
        if (!iframe) return;
        iframe.contentWindow.postMessage({
            giscus: { setConfig: { theme: theme } }
        }, 'https://giscus.app');
    }

    // 테마 설정 함수
    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (iconSpan) {
            iconSpan.textContent = theme === 'dark' ? '🌜' : '🌞';
        }
        updateGiscusTheme(theme);
    }

    // 초기 로드 시 버튼 아이콘 설정
    if (toggleBtn) {
        const initialTheme = root.getAttribute('data-theme') || 'light';
        if (iconSpan) {
            iconSpan.textContent = initialTheme === 'dark' ? '🌜' : '🌞';
        }

        // 토글 버튼 클릭 이벤트
        toggleBtn.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    // giscus가 로드되었을 때 현재 테마 적용
    window.addEventListener('message', function(event) {
        if (event.origin !== 'https://giscus.app') return;
        if (!(typeof event.data === 'object' && event.data.giscus)) return;
        updateGiscusTheme(root.getAttribute('data-theme'));
    });
});
