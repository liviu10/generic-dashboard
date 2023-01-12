function CheckIfObjectHasProperty(objectToVerify: object, property: string): boolean {
  if (typeof objectToVerify === 'object') {
    return objectToVerify.hasOwnProperty(property)
  } else {
    return false
  }
}

export { CheckIfObjectHasProperty };
