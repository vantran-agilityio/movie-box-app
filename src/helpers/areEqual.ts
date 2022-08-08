export const areEqual = <T>(
  prevProps: Readonly<T>,
  nextProps: Readonly<T>
): boolean => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};
