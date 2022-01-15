interface EditableAttribute<T> {
  value: T;
  setAttribute: (a: T) => void;
  label: string | JSX.Element;
}

export default EditableAttribute;
