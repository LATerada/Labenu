export const fixacao = (text: any): Array<string> | null => {
  if (typeof text !== "string") {
    return null;
  }
  const textArray = text.split("");
  return textArray;
};
