function multiplyBy()
{
        num1 = document.getElementById("length").value;
        num2 = document.getElementById("base").value;
        num3 = document.getElementById("height").value;
        res1=num1*num2*num3;
        document.getElementById("result").innerHTML = res1;
}