document.addEventListener('DOMContentLoaded', () => {
    // 프로젝트 데이터 가져오기 (projects.json)
    fetch('data/projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectsContainer = document.getElementById('projects');

            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                // 이미지 슬라이드
                const imagesContainer = document.createElement('div');
                imagesContainer.classList.add('project-images');

                project.images.forEach(imageSrc => {
                    const imageElement = document.createElement('img');
                    imageElement.src = imageSrc;
                    imageElement.alt = project.title;
                    imagesContainer.appendChild(imageElement);
                });

                projectElement.appendChild(imagesContainer);

                const titleElement = document.createElement('h3');
                titleElement.textContent = project.title;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = project.description;

                const linkElement = document.createElement('a');
                linkElement.href = project.link;
                linkElement.textContent = '자세히 보기';

                projectElement.appendChild(titleElement);
                projectElement.appendChild(descriptionElement);
                projectElement.appendChild(linkElement);

                projectsContainer.appendChild(projectElement);
            });

            // slick.js 초기화 (프로젝트 추가 후 실행)
            $('.project-images').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
            });
        })
        .catch(error => console.error('Error loading projects:', error));

    // 연락처 폼 제출 처리 (contact form)
    const contactForm = document.querySelector('#contact form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 기본 제출 동작 방지

        // 폼 데이터 가져오기
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // (선택 사항) 폼 데이터를 서버로 전송하거나 처리하는 로직 추가
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // (선택 사항) 폼 제출 후 추가 동작 (예: 메시지 표시, 폼 초기화)
        alert('메시지가 성공적으로 제출되었습니다.');
        contactForm.reset();
    });
});