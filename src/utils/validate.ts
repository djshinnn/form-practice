// min(5)
export const min = (min: number) => (value: string) => {
  console.log(value);
  if (value !== undefined && min > value.length) {
    return `${min}글자 이상 입력해주세요`;
  }
};
export const max = (max: number) => (value: string) => {
  if (value !== undefined && max < value.length) {
    return `${max}글자 이하로 입력해주세요`;
  }
};
