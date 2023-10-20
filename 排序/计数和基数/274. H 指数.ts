function hIndex(citations: number[]): number {
  citations.sort((a,b)=> a-b)

  let h = 1
  
  for(let i = citations.length - 1;i >= 0;i--) {
    if(citations[i] >= h) h++
    else break
  }


  return h - 1
};