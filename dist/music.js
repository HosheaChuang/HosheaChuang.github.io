const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "灰色头像",
        artist: '许嵩',
        url: 'http://www.ytmp3.cn/down/59697.mp3',
        cover: 'http://img.ytmp3.cn/image/79.jpg',
      },
      {
        name: '多余的解释',
        artist: '许嵩',
        url: 'http://www.ytmp3.cn/down/60447.mp3',
        cover: 'http://img.ytmp3.cn/image/78.jpg',
      }
    ]
});
