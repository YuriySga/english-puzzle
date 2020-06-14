export function setYear(year) {
    return {
      type: 'SET_YEAR',
      payload: year
    }
  } 
  
export function setPage(nextUrl) {
  return {  
        type: 'SET_PAGE',
        payload: nextUrl,
  }
}
  