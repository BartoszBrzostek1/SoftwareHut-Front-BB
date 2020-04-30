class Prostokat
{
	a = 0;
	b = 0;
	
	set ustawProst(wartoscA, wartoscB)
	{
		this.a = wartoscA;
		this.b = wartoscB;
	}
	
	get aktualnaAiB()
	{
		return this.a this.b;
	}
	
	obwod()
	{
		return a*2 + b*2;
	}
	
	pole()
	{
		return a*b;
	}
}

class Kwadrat
{
	a = 0;
	
	set ustawKwad(wartoscA)
	{
		this.a = wartoscA;
	}
	
	get aktualnaA()
	{
		return this.a;
	}
	
	obwod()
	{
		return a*4;
	}
	
	pole()
	{
		return a*a;
	}
}

class Trojkat
{
	a = 0;
	b = 0;
	c = 0;
	
	set ustawTroj(wartoscA, wartoscB, wartosc C)
	{
		this.a = wartoscA;
		this.b = wartoscB;
		this.c = wartoscC;
	}
	
	get aktualnaAiBiC()
	{
		return this.a this.b this.c;
	}
	
	obwod()
	{
		return a*b*c;
	}
	
	pole()
	{
		return (a*2*sqrt(3))/4;
	}
}



