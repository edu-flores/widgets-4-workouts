export const formatNumber = number => number.toLocaleString('en-US');

export const formatSeconds = seconds => {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  mins = mins < 10 ? '0' + mins : mins;
  secs = secs < 10 ? '0' + secs : secs;
  return mins + ':' + secs;
}
