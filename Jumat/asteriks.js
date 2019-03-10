var row1 = 5;

for(i=row1;row1>0;row1--)
{
	console.log('*');
}


//asterik ukuran persegi
console.log('\n\nAsterik Persegi');
var row2 = 5;
var temp = '*';
var solid;
for(i=row2;row2>0;row2--)
{
  temp = '';

  for(j=0;j<5;j++)
  {
    temp += '*'
	}
  console.log(temp);

}


//ini untuk asterik yang diagonal
console.log('\n\nAsterik Diagonal')
var row3 = 5;
var temp = '*';
for(i=row3;row3>0;row3--)
{
  console.log(temp);
	for(j=0;j<=0;j++)
	{
		temp = temp + '*';
    
	}

}