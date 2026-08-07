document.addEventListener("DOMContentLoaded", () => {
  const videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach(container => {
    container.addEventListener("click", function () {
      const videoId = this.getAttribute("data-id");
      this.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
          title="YouTube video player"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>`;
    });
  });
});