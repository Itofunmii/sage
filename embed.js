const widgetContainer = document.querySelector('.elfsight-app-be6c2680-1e19-4e35-b766-fc340c0a5de9');

if (widgetContainer) {
  console.log({ widgetContainer });
  // Clear existing content
  widgetContainer.innerHTML = '';
  document.body.innerHTML = "";


  // Set styles for full width/height
  // widgetContainer.style.width = '100%';
  // widgetContainer.style.height = '800px';
  // widgetContainer.style.overflow = 'hidden';

  // add a container for the whole application

  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = 0;
  container.style.bottom = 0;
  container.style.left = 0;
  container.style.right = 0;
  container.style.overflow = "hidden";
  container.style.width = "100%";
  container.style.height = "100%";


  const iframe = document.createElement('iframe');
  iframe.src = 'https://testsage.netlify.app/';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.allowFullscreen = true;

  document.body.appendChild(container);
  // Create and insert iframe
  container.appendChild(iframe);

}
