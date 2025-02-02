(function () {
    document.addEventListener('copy', function (event) {
     
      event.stopPropagation();
      
      
      event.preventDefault();
  
      
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        event.clipboardData.setData('text/plain', selectedText);
      }
  
      
    });
  })();