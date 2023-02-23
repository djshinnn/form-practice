export const min = (min) => {
  return min;
};

export const max = (max) => {
  return max;
};

const isEmpty = (data) => {
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

export const isValidate = (value, validate) => {
  let isValid = true;

  if (!isEmpty(value)) {
    if (value.length < validate[0] || value.length > validate[1]) {
      isValid = false;
    }
  }
  return isValid;
};
