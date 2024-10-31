declare global {
  interface Window {
    _mfq: any[];
  }
}

export const useMouseFlow = () => {
  // Initialize _mfq if it doesn't exist
  if (!window._mfq) {
    window._mfq = [];
  }

  // Load the MouseFlow script only once
  if (!document.getElementById("mouseflow-script")) {
    const mf = document.createElement("script");
    mf.type = "text/javascript";
    mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/0ee659fa-187c-4915-867c-7430740192c4.js";
    mf.id = "mouseflow-script"; // Mark script for one-time loading
    document.head.appendChild(mf);

    console.log("Mouseflow initialized!");
  }
};