function loadYouTubeVideo(container, videoId) {
  // Prevent any parent link triggers
  if (window.event) window.event.stopPropagation();

  container.innerHTML = `
    <iframe 
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen
      style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; border: none; border-radius: inherit;"
    ></iframe>
  `;
}