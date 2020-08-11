export type FieldValidatoreType = (value: string) => string | undefined

export const required: FieldValidatoreType = value => {
  if (value) return undefined;

  return 'Заголовок не может быть пустым';
}

export const maxLengthCreator = (maxLength: number): FieldValidatoreType => value => {
  if (value.length > maxLength) return `Максимальная длина ${maxLength} символов`;

  return undefined;
}