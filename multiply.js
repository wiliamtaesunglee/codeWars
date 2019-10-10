function factorial(n)
{
    let resp = 1
    for (let i = 1; i <= n; i++) {
        resp *= i
    }
    console.log(resp)
return resp
}

factorial(5)