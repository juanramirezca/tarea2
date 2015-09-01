input = "5\n3  9\n17  24\n1  45\n1  100\n1  10000";
array= input.split("\n");
tests = array[0];
for (j=1; j <= tests; j++)
{
array1 = array[j].split("  ");
A = array1[0];
B = array1[1];
//console.log(A);
//console.log(B);
calculaSquare(A,B);
}



function calculaSquare(A,B)
{
contador = 0;
//tests = 1;
//A = 2;
//B = 9999;
cuadrado = 1;
while(cuadrado < A)
{
cuadrado = Math.sqrt(cuadrado);
cuadrado++;
cuadrado = cuadrado * cuadrado;
}
i = A;
while ( i >=A && i <=B)
{
if(i == cuadrado)
{
contador ++;
cuadrado = Math.sqrt(cuadrado);
cuadrado++;
cuadrado = cuadrado * cuadrado;
}
i++
}
console.log(contador);
}

