document.addEventListener('DOMContentLoaded', function() {
    const inputs = Array.from(
      document.querySelectorAll('input[name=phoneNumber], input[name=email]')
    );
  
    const inputListener = e => {
      inputs
        .filter(i => i !== e.target)
        .forEach(i => (i.required = !e.target.value.length));
    };
  
    inputs.forEach(i => i.addEventListener('input', inputListener));
  });