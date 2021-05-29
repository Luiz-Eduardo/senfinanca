export default function validateInfo(values) {
  let errors = {};

  if (values.title === undefined || !values.title.trim()) {
    errors.title = "Title required";
  }

  if (values.category === undefined || !values.category.trim()) {
    errors.category = "Category required";
  }

  if (values.value === undefined || !values.value.trim()) {
    errors.value = "Amount required";
  } else if (values.value < 0) {
    errors.value = "You can't put a negative amount";
  }

  return errors;
}
