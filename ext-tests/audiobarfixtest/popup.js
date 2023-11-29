document.addEventListener('DOMContentLoaded', function() {
  const volumeSlider = document.getElementById('volumeSlider');

  // Load initial volume value from storage (if available)
  chrome.storage.local.get(['volume'], function(result) {
    const initialVolume = result.volume || 50; // Default to 50 if not set
    volumeSlider.value = initialVolume;
  });

  // Update storage when volume changes
  volumeSlider.addEventListener('input', function() {
    const currentVolume = parseInt(volumeSlider.value, 10);
    chrome.storage.local.set({ 'volume': currentVolume });
  });
});
