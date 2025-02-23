document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('infoForm').style.display = 'block';
    document.getElementById('pt-line').style.display = 'block';
    document.getElementById('bottomSection').style.display = 'block';
    document.getElementById('suss').style.display = 'block';
  });
  
  document.getElementById('suss').addEventListener('click', async function(event) {
    event.preventDefault();
  
    const data = {
      name: document.getElementById('ip_name').value,
      studentNumber: document.querySelector('input[name="studentNumber"]').value,
      instagramId: document.querySelector('input[name="instagramId"]').value,
      age: document.getElementById('ip_age').value,
      gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').id : '',
      department: document.getElementById('dp_major').value,
      mbti: document.getElementById('dp_mbti').value,
      one_liner: document.querySelector('input[name="one_liner"]').value,
      selectGender: document.querySelector('input[name="selectGender"]:checked') ? document.querySelector('input[name="selectGender"]:checked').id : '',
      agree: document.querySelector('input[name="agree"]').checked
    };
  
    try {
      const response = await axios.post('https://likelion.hellofriend.cc/api/users/create-info', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 200) {
        console.log('Success:', response.data);
        alert('등록이 완료되었습니다!');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('등록에 실패하였습니다. 다시 시도해주세요.');
    }
  });
  