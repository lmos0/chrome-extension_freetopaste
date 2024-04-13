(function () {
    document.addEventListener('copy', function (event) {
      // Allow copying text
      event.stopPropagation();
      
      // Prevent default behavior for other actions
      event.preventDefault();
  
      // Get the selected text and copy it to the clipboard
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        event.clipboardData.setData('text/plain', selectedText);
      }
  
      return false;
    }, true);
  })();