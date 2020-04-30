class Czlowiek
{
	constructor(imie, nazwisko)
	{
		this.imie = imie;
		this.nazwisko = nazwisko;
	}
	
	przedstawSie()
	{
		return "Nazywam sie ${this.imie} ${this.nazwisko}";
	}
	
	static kimJestem()
	{
		return "Jestem czlowiekiem!";
	}
}

class Dziecko extends Czlowiek
{
	constructor(imie, nazwisko, wiek)
	{
		super(imie, nazwisko);
		this.wiek = wiek;
	}
	
	jakSieNazywasz()
	{
		const text = this.przedstawSie();
		return "${text} i mam ${this.wiek} lat";
	}
}

const andrzej = new Czlowiek('Andrzej', 'Nowak');

console.log(andrzej.przedstawSie());
console.log(Czlowiek.kimJestem());

const andrzejek = new Dziecko("Andrzejek", "Nowak", 10);

console.log(andrzejek.przedstawSie());


class Liczba
{
	liczba = 0;
	
	set ustawLiczbe(wartosc)
	{
		this.liczba = wartosc;
	}
	
	get aktualnaWartosc()
	{
		return this.liczba;
	}
}

constliczba = new Liczba();

console.log(liczba);
liczba.ustawLiczbe = 5;
console.log(liczba);











