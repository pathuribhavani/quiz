function multiplyBy()
{
        num1 = document.getElementById("items per bag").value;
        num2 = document.getElementById("bags").value;
        res=num1*num2;
        document.getElementById("result").innerHTML = res;
}