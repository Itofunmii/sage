const widgetContainer = document.querySelector('.elfsight-app-be6c2680-1e19-4e35-b766-fc340c0a5de9');

if (widgetContainer) {
  console.log("Found Elfsight widget:", widgetContainer);

  // Remove the existing widget container
  widgetContainer.remove();

  // Create a full-page container
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.overflow = "hidden";

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.src = "";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.allowFullscreen = true;

  // Append elements
  document.body.appendChild(container);
  container.appendChild(iframe);
}
