const s="http://localhost:5000",c=async({method:t,url:a,data:n,headers:o})=>await fetch(`${s}${a}`,{method:t,headers:o,body:JSON.stringify(n)});export{c as a};
