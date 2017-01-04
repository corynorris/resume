export default function getProjection(fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
    const fields = projections;
    fields[selection.name.value] = 1;
    return fields;
  }, {});
}
