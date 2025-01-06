// 별자리 선택 페이지 기능
document.addEventListener('DOMContentLoaded', () => {
  const zodiacButtons = document.querySelectorAll('.zodiac');

  zodiacButtons.forEach(button => {
    button.addEventListener('click', () => {
      const zodiac = button.getAttribute('data-sign');
      localStorage.setItem('selectedZodiac', zodiac);
      window.location.href = 'fortune.html';
    });
  });

  // 운세 페이지 기능
  const fortuneElement = document.getElementById('fortune');
  const zodiacNameElement = document.getElementById('zodiac-name');

  if (fortuneElement && zodiacNameElement) {
    const zodiac = localStorage.getItem('selectedZodiac');

    // 운세 데이터
    const fortunes = [
      "오늘은 멋진 하루가 될 것입니다!",
      "작은 행운이 찾아올 거예요.",
      "조금 더 신중한 선택이 필요합니다.",
      "기분 좋은 소식을 들을 수 있을 거예요.",
      "평소보다 건강에 신경 쓰세요.",
      "사람들과의 관계에서 좋은 일이 생길 것입니다.",
    ];

    // 랜덤 운세 생성
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    zodiacNameElement.textContent = `${zodiac}의 오늘의 운세`;
    fortuneElement.textContent = randomFortune;
  }
});
