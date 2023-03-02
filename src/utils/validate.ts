// min(5)
export const min = (min: number) => (value: string) => {
  if (value !== undefined) {
    return min > value.length;
  }
};
export const max = (max: number) => (value: string) => {
  if (value !== undefined) {
    return max < value.length;
  }
};
