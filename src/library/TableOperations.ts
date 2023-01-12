function DisplayTableNoDataLabel(): string {
  return 'Loading resource! Please wait!';
}

function DisplayTableRowsPerPage(): number[] {
  return [10, 20, 30, 50, 0];
}

function DisplayTableTitle(title: string | undefined): string {
  if (title !== undefined) {
    return title;
  } else {
    return 'Generic table title';
  }
}

function DisplayTableDescription(description: string | undefined): string {
  if (description !== undefined) {
    return description;
  } else {
    return 'Generic table description';
  }
}

export {
  DisplayTableNoDataLabel,
  DisplayTableRowsPerPage,
  DisplayTableTitle,
  DisplayTableDescription,
};
