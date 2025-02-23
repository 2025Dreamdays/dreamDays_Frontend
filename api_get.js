document.getElementById('form').addEventListener('submit', function(e)
{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const studentNumber = document.getElementById('studentNumber').value;

    fetch('https://likelion.hellofriend.cc/api/users/check-info' , {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        },

    }) 
    .then(response => response.json())
    .then(data => {
        if(data.isDraw === false) {
            alert("사전등록이 되어 있지 않는 사용자입니다. 등록을 먼저 진행해주세요")
        } else {
            window.location.href = 'viewInfo.html';
        }
    }) 
    .catch(error => {
        console.log('오류발생', error);
        
    });
    
});