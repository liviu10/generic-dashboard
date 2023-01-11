function CapitalizeFirstLetter(text: string) {
  if (typeof text === 'string') {
    if (text.indexOf('_') > -1) {
      return (text.charAt(0).toUpperCase() + text.slice(1)).replace(/_/g, ' ');
    } else {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  } else {
    console.log(
      'The string you have specified is not a string! The default date format will be used!'
    );
    return '—';
  }
}

export { CapitalizeFirstLetter };
