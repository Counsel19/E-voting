export function addCandidateValidator(values) {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "Required";
  }
  if (!values.lastname) {
    errors.lastname = "Required";
  }

  return errors;
}
