function handleInput(currentInput) {
    const maxLength = parseInt(currentInput.getAttribute('maxlength'));
    const currentInputId = currentInput.id;

    if (currentInput.value.length === maxLength) {
      
        const nextInputId = "digit" + (parseInt(currentInputId.charAt(currentInputId.length - 1)) + 1);
        document.getElementById(nextInputId)?.focus();
    } else if (currentInput.value.length === 0 && event.inputType === 'deleteContentBackward') {
      
        const prevInputId = "digit" + (parseInt(currentInputId.charAt(currentInputId.length - 1)) - 1);
        document.getElementById(prevInputId)?.focus();
    }
}