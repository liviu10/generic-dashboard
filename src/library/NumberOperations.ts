function RoundNumber(
  numberToRound: number
): number | string {
  if (
    typeof numberToRound === 'number'
  ) {
    return Math.round(numberToRound * 100) / 100;
  } else {
    return '—';
  }
}

export { RoundNumber };
