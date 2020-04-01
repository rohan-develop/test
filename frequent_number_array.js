const arr=[3, 'a', 'a', 'a', 2,2,2,2,2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mostFreq = 1;
let m = 0;
let item;
for (let i=0; i<arr.length; i++)
{
        for (let j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (mostFreq<m)
                {
                mostFreq=m; 
                  item = arr[i];
                }
        }
        m=0;
}
console.log(item+" occured " +mostFreq +" times") ;