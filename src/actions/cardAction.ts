export const deleteCard = (id: number) => {
  return {
    type: 'delete user',
    payload: id
  }
}