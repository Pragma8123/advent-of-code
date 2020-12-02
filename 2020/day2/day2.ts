const PASSWORD_MATCHER = /(\d+)-(\d+) (.+): (.+)/;

const parsePassword = (
  rawPasswordData: string,
): { min: number; max: number; char: string; password: string } | null => {
  const match = rawPasswordData.match(PASSWORD_MATCHER);
  if (!match) return null;
  const [, min, max, char, password] = match;
  if (!(min && max && char && password)) return null;
  return { min: Number(min), max: Number(max), char, password };
};

export const isValidPassword = (rawPasswordData: string) => {
  const passwordData = parsePassword(rawPasswordData);
  if (!passwordData) return false;
  const { min, max, char, password } = passwordData;
  const pwChars = [...password];
  const charCount = pwChars.filter((c) => char === c).length;
  if (charCount < min) return false;
  if (charCount > max) return false;
  return true;
};
