let a=[5,3,4,6,7];
let b=[1,2,3,4,5];
let m=a.length;
let n=b.length;


var mp =new Map();

for(var i=0;i<m;i++){
    mp.set(a[i],i);
}
for(var i=0;i<n;i++){
    mp.set(b[i],i);
}
for(var key of mp.keys()){
    console.log(key + " ");
}
