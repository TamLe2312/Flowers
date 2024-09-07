document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('container');
  var audio = new Audio(
    './song/Bruno Mars - When I Was Your Man (Official Music Video).mp3'
  );
  audio.play().catch((error) => {
    console.log('Không thể phát âm thanh:', error);
  });
});
