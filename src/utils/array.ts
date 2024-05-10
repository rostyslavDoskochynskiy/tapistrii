export const chunkArray = (arr: any, chunkSize: number) => {
    const chunkedArray = [];
    let index = 0;
    
    while (index < arr.length) {
        chunkedArray.push(arr.slice(index, index + chunkSize));
        index += chunkSize;
    }
    
    return chunkedArray;
}