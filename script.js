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
    const now = new Date();

    // 운세 데이터 (20문장)
    const fortunes = [
      "오늘은 새로운 도전이 행운을 가져다 줄 것입니다.",
      "좋은 소식이 들려올 것입니다. 마음을 열어보세요.",
      "조금 더 침착하게 행동하면 결과가 더 좋아질 것입니다.",
      "친구와의 대화에서 힌트를 얻을 수 있을 것입니다.",
      "건강에 신경 쓰고 균형 잡힌 식사를 유지하세요.",
      "감사하는 마음이 더 큰 행운을 불러올 것입니다.",
      "오늘은 창의적인 에너지가 넘치는 날입니다.",
      "작은 일에 집중하면 큰 성과를 얻을 수 있을 것입니다.",
      "귀인을 만날 가능성이 높으니 주변을 잘 살펴보세요.",
      "평소보다 더 활기차게 움직이면 좋은 일이 생길 것입니다.",
      "긍정적인 생각이 하루를 밝게 만들어 줄 것입니다.",
      "계획을 세우고 차근차근 실행에 옮기세요.",
      "재정적인 면에서 좋은 기회가 다가오고 있습니다.",
      "자연 속에서 힐링을 찾으면 에너지가 충전될 것입니다.",
      "오늘은 배우자나 연인과 깊은 대화를 나눠보세요.",
      "새로운 취미를 시작하면 인생에 활력을 더할 수 있습니다.",
      "용기를 내어 첫걸음을 내딛으면 결과가 좋을 것입니다.",
      "오래된 문제의 해결책이 의외의 곳에서 찾아올 것입니다.",
      "오늘은 자기 계발에 집중하기 좋은 날입니다.",
      "주변 사람들과의 협력이 더 큰 성과를 가져올 것입니다."
    ];

    // 1분마다 운세 변경
    function updateFortune() {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      zodiacNameElement.textContent = `${zodiac}의 오늘의 운세`;
      fortuneElement.textContent = randomFortune;
    }

    // 즉시 한 번 운세를 설정
    updateFortune();

    // 1분마다 운세 갱신
    setInterval(updateFortune, 60000);
  }
});
