fetch('https://likelion.hellofriend.cc/api/users/check-info')
    .then(reposne => reposne.json())
    .then(data => {
        console.log('서버 응답:', data);
    

        document.getElementById('name').textContent = `이름: ${data.name}`;
        document.getElementById('studentNumber').textContent = `학번: $${data.student_id}`;

    })
    .catch(error => {
        console.log('오류', error);
        
    }
    );