export const min = (min: number): number => {
  return min;
};

export const max = (max: number): number => {
  return max;
};

const isEmpty = (data: string | number): boolean => {
  if (
    typeof data === "undefined" ||
    data === null ||
    data === "" ||
    data === "NaN"
  ) {
    return true;
  } else {
    return false;
  }
};

export const isValidate = (
  value: string,
  validate: [number, number]
): boolean => {
  let isValid = true;

  if (!isEmpty(value)) {
    if (value.length < validate[0] || value.length > validate[1]) {
      isValid = false;
    }
  }
  return isValid;
};
