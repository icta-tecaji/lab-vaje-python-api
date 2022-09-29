# Laboratorijska vaja 2: Uvod v Python


## Print funkcija

Za izpis nečesa se uporablja funkcija `print()`.

```python
print(10)
```

## Spremenljivke in osnovni podatkovni tipi

Spremenljivka je kot neka beseda v katero shranimo vrednost in do te vrednosti dostopamo kasneje v kodi.

    x = 2

Beri: Vrednost 2 shrani v spremenljivko z imenom x.

Oziroma bolj natančno: Ovrednoti kar je na desni strani enačaja in to shrani v levo stran enačaja

Spremenljivke nam omogočajo shranjevanje vrednosti in lepšo kontrolo nad kodo.

Napišimo naš primer z uporabo spremenljivke.

```python
x = 3 # definiramo našo spremenljivko in vanjo shranimo našo vrednost, katero želimo izpisati 5x
print(x)
print(x)
print(x)
print(x)
print(x)
```

Če sedaj hočemo, da se namesto številke 3 izpiše številka 12 lahko enostavno popravimo 1 vrstico.

```python
x = 12
print(x)
print(x)
print(x)
print(x)
print(x)
```

V Pythonu so spremenljivke dinamične. To pomeni, da nam ni potrebno izrecno povedati računalniku kakšnega tipa je spremenljivka.

Da vidimo kakšnega tipa je spremenljivka, uporabimo funkcijo: `type()`

```python
x = 1
print(x)
print(type(x)) # type(x) nam pove kakšnega tipa je spremenljivka x

print("------------")

x = 1.2
print(x)
print(type(x))
```

### Integer (celo število) - int

V Python3 ni maximalne velikosti integerja. Številka je lahko velika kolikor želimo. Omejeni smo samo z našim pomnilnikom.

```python
x = 5
print(x)
print(type(x))
```

### Floating-point (decimalno število) - float
Float predstavlja decimalno ševilo (število s plavajočo vecijo).

Treba je pazit saj te številke niso popolnoma natančne ampak le aproksimacije (te aproksimacije se vidjo šele pri n-ti decimalki).

```python
x = 5.43
print(x)
print(type(x))
```

### Boolean (True or False) - bool
Boolean spremenljivka lahko zavzeme samo 2 vrednosti. Ali True ali False.

```python
x = True
print(x)
print(type(x))

print("-------")

x = False
print(x)
print(type(x))
```

Tudi, če spremenljivka sama po sebi ni True ali False, se jo še vedno lahko pretvorivmo v tip bool. Tako lahko vidimo, da so naslednje vrednosti False:
- Boolean False
- numerična vrednost 0 (0, 0.0, 0+0j...)
- Empty string
- Keyword None
- Empty object (kot je prazen list, prazna terka...)
- Vse ostalo je True.

Da pretvorivmo neko spremenljivko v boolean tip, uporabimo besedo: `bool(spemenljivka)`

```python
print(bool(False)) # bool(x) pretvor vrednost x v boolean (al true al false)
print(bool(0))
print(bool(""))
print(bool(None))
print(bool([]))
print("********")
print(bool(True))
print(bool(1))
print(bool("abc"))
print(bool([1,2]))
```

Na podoben način lahko spreminjamo spremenljivke v ostale tipe:
- `int(spremenljivka)`
- `str(spremenljivka)`
- `float(spremenljivka)`

### String (stavek) - str

Stringi so zaporedja črk. Začnejo in končajo se z dvojnim (") ali enojnim (') narekovajem.

Vsebuje lahko neomejeno število črk. Edina omejitev je naš pomnilnik.

Lahko je tudi prazen stavek.

```python
x = "Stavek" # navaden string z dvojnim narekovajem ""
print(x)
print(type(x))
```

## Input() funkcija

S pomočjo te funkcije lahko uporabnika vprašamo za nek input.

```python
age = input('Enter your age: ')
print('You have lived for', age, "years.")
```

Potrebno je paziti, ker nam input vrne vrednost datatipa string. V primeru da od uporabnika želimo število moremo vrednost pred uporabo pretvoriti.

## Osnovni operatorji
- `+ seštevanje`
- `- odštevanje`
- `* množenje`
- `/ deljenje`
- `// celoštevilsko deljenje`
- `** eksponent`
- `% ostanek pri deljenju`

Vsaka operacija ima določeno pomembnost.

V izrazu se prvo izvedejo operacije z najvišjo pomembnostjo. Ko pridobimo te rezultate, se nato izvedejo naslednje najpomembnejše operacije in tako do konca.

V primeru operacij z enako pomembnostjo se le te izvajajo od leve-proti-desni.

Potek operacij se lahko spremeni z uporabo oklepajev ().

Izrazi v okepajih se izvedejo pred izrazi, ki niso v oklepajih.

Nič ni narobe s pretirano uporabo oklepajev tudi, če niso potrebni. Uporaba oklepajev velja za dobro prakso, saj izboljša berljivost kode.

```python
x = 20 + (4 * 10) # prvo se izvede oklepaj in dobimo 20 + 40 = 60
y = (20 + 4) * 10 # prvo se izvede oklepaj in dobimo 24 * 10 = 240
print(x)
print(y)
```

Za primerjanje različnih vrednosti in spremenljivk med seboj imamo primerjalne operacije. Te primerjajo dve vrednosti in nam vrnejo rezultat, ki je ali True ali False.

- `< manjši`
- `> večji`
- `<= manjše ali enako`
- `>= večje ali enako`
- `== enako`
- `!= neenako`

Logične operacije:
- `not`
- `or`
- `and`
- `is` > Primerja identiteto
- `in` > Preverja, če je vrednost znotraj primerjalne vrednosti

## Naprednejši podatkovni tipi

### List

List je zbirka elementov. (V drugih programskih jezikih je znan kot "array").

Uporablja se, da več različnih vrednosti ali spremenljivk shranimo znotraj ene spremenljivke. Tako lahko preko ene spremenljivke dostopamo do več različnih stringov, števil, itd...

V Pythonu je list definiran z oglatimi oklepaji [], elementi v listu pa so ločeni z vejico `,`.
```python
živali  = ["pingvin", "medved", "los", "volk"]
print(živali)
```

Glavne karakteristike list-ov so:
- Lists are ordered
- Lists can contain any arbitrary objects.
- List elements can be accessed by index.
- Lists can be nested to arbitrary depth.
- Lists are mutable.
- Lists are dynamic.

V Pythonu se indexiranje začne z 0.

```python
a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']
print(a[0])
print(a[2])
print(a[3])
```

### Tuples

Imajo enake lastnosti kot list, vendar so "immutable" - Njihovih vrednosti ne moremo spreminjati.

Definira se jih z navadnimi oklepaji ()

```python
t  = ("pingvin", "medved", "los", "volk")
print(t)
```

### Dictionaries
Njihove lastnosti so sledeče:
- Are insertion ordered (vrstni red elementov je odvisen od vrstega reda dodajanja) (to velja od python 3.6+)
- Element accession (do elementov se dostopa preko ključev, ne preko indexov)
- Can be nested (kot element ima lahko še en dictionary, list, touple, ....)
- Are mutable (vrednosti elementov se lahko spreminjajo)
- Are dynamic (sej to velja za vse pr pythonu)

Dictionary je sestavljen iz parov ključa in vrednosti. Vsak Ključ ima svojo vrednost.

```python
d = {
'macek' : 'Silvestre',
'pes'   : 'Fido',
'papagaj': 'Kakadu'
}
print(d)
print(type(d))
```
Vrednosti najdemo preko ključev.

```python
d = {
'macek' : 'Silvestre',
'pes'   : 'Fido',
'papagaj': 'Kakadu'
}
print(d['papagaj'])
```

## Kontrola programa

### If, elif, else stavek

```python
x = 0
y = 5

if x < y:
    print("Smo znotraj if.")
    print("End if")

print("End")
```

Pri Pythonu se zamikanje (indentation) uporablja za definiranje blokov kode. Vse vrstice z istim zamikom se smatrajo kot isti blok kode.

Bloke kode se lahko poljubno globoko "nesta".

Zamikanje je določeno z tabulatorjem ali presledki. Ni važno točno število, važno je, da je skozi kodo enako. V praksi se uporabljajo 4 presledki.

Včasih želimo, da če je nekaj res se izvede določen blok kode, če stvar ni res pa naj se izvede drug del kode.

To dosežemo z else.

```python
x = 100

if x < 50:
    print('(first block)')
    print('x is small')
else:
    print('(second block)')
    print('x is large')

print("End")
```
Če želimo še večjo razvejanost naših možnosti lahko uporabimo elif (else if). Python preveri vsak stavek posebej. Pri ta prvem, ki bo True, bo izvedel njegov blok kode. Če ni nobeden True se bo izvedel else blok kode.

```python
x = 20
if x > 100:
    print('x je večje od 100')
elif x > 50:
    print('x večje od 50 in manjše od 100')
elif x > 30:
    print('x večje od 30 in manjše od 50')
elif x > 10:
    print('x večje od 10 in manjše od 30')
else:
    print("x manjše od 10")
    
print("End")
```

### For stavek
Uporablja se kadar hočemo izvesti blok kode za vnaprej določeno število ponovitev.

Primer: kadar hočemo izvesti blok kode za vsak element v list-u.

```python
for <var> in <iterable>:
    <statement(s)>
```

```python
primes = [2, 3, 5, 7, 11] #itrable
for prime in primes:
    print(f'{prime} is  a prime number.')
```
Velikokrat se skupaj z for-loop uporablja funkcija `range()`.

- `range(start, stop, step)`:
    - start - Optional. An integer number specifying at which position to start. Default is 0
    - stop - An integer number specifying at which position to end, excluding this number.
    - step - Optional. An integer number specifying the incrementation. Default is 1

Funkcija range nam zgenerira list števil.

```python
x = range(-5, 10, 1)
print(type(x))
print(list(x))
```

```python
for number in range(1,20,2):
    print(number)
```

Iteracija čez dictionary:
```python
pets = {
    'macka': 6,
    'pes': 12,
    'krava': 20
}

for pet, years in pets.items():
    print(f'{pet} je star/a {years} let.')
```

## Funkcije

Velikokrat se nam zgodi, da imamo v programu zelo podobno kodo, ki dela zelo podobno reč, napisano večkrat. Recimo, da želimo izračunati produkt elementov v seznamu, v našem programu pa imamo 3 sezname, ali pa še huje, imamo zelo veliko seznamov, ki nam jih je podal uporabnik. Lahko pa koda postane tudi zelo zapletena, saj znotraj ene zanke preverjamo, kaj drugega z drugo zanko in tako naprej...

Funkcijo si lahko predstavljamo kot neko črno škatlo, ki ji nekaj damo, funkcija pa potem s tem nekaj naredi in/ali nam nekaj vrne. Velika prednost funkcij je to, da ni potrebno vedeti, kako točno deluje (lahko nam kakšno funkcijo npr. napiše kdo drug, jo skopiramo iz interneta itd.). Poleg tega funkcije naredijo kodo lažje za vzdrževanje, saj omogočajo preprosto popravljanje in spreminjanje. Če namreč v funkciji pride do kakšne napake, lahko napako popravimo le v definiciji, namesto da bi jo morali popraviti povsod, kjer funkcijo uporabimo.

```python
def imeFunkcije(parameter1, parameter2):
    Koda, ki se izvede, ko pokličemo funkcijo
```

Funkciji lahko pošljemo določene spremenljivke, katere želimo uporabiti v funkciji.

Primer: Če vemo ime uporabnika, ga lahko kličemo po imenu, kadar od njega zahtevamo input.

Vrednost, ki jo pošljemo v funkcijo, se reče argument. To funkcija sprejme kot parameter.

```python
def funkcija_1(x, y, z):
    print(f"X vrednost: {x}")
    print(f"Y vrednost: {y}")
    print(f"Z vrednost: {z}")
    
funkcija_1(1,2,3)
```
V zgornjem primeru se ob klicu funkcije:
- vrednost 1 shrani v spremenljivko x
- vrednost 2 shrani v spremenljivko y
- vrednost 3 shrani v spremenljivko z

Zato je vrstni red argumentov pomemben!

Pomembno je tudi, da podamo pravilno število argumentov!

Če funkcija pričakuje 3 argumente, ji moramo podatki 3 argumente. Nič več. nič manj. V nasprotnem primeru dobimo napako.

Vsaka funkcija tudi vrne določeno vrednost.

Če funkciji nismo eksplicitno določili katero vrednost naj vrne, vrne vrednost None.

```python
def funkcija():
    print("Pozdrav")
    
x = funkcija()
print(x)
```

Da vrnemo specifično vrednost uporabimo besedo return.

```python
def sestevalnik(x, y):
    print("Seštevam...")
    vsota = x + y
    return vsota

x = sestevalnik(1, 2)
print(x)
```

Ko se izvede ukaz return se vrne vrednost in koda znotraj funkcije se neha izvajati.

```python
def sestevalnik(x, y):
    print("Seštevam...")
    vsota = x + y
    return vsota
    print("Končano")

x = sestevalnik(1, 2)
print(x)
```
Znotraj funkcije imamo lahko tudi več return statements, ki vrnejo različne vrednosti, glede na logiko funkcije.

```python
def vecje_od_5(x):
    if x > 5:
        return True
    elif x <= 5:
        return False
    
print(vecje_od_5(1))
print(vecje_od_5(10))
```
Funkcija lahko vrne le eno vrednost (bolje rečeno: le en objekt).

Če želimo vrniti več vrednosti jih preprosto zapakiramo v list, touple, dictionary in posredujemo tega.

```python
def add_numbers(x, y, z):
    a = x + y
    b = x + z
    c = y + z
    return a, b, c # isto kot return (a, b, c)

sums = add_numbers(1, 2, 3)
print(sums)
print(type(sums))
```

## Uporaba knjižnic

Python ima veliko knjižnic. Nekaj jih je vključenih skupaj s Pythonom in jih verjetno že poznate (npr. `random`, `time`). Ostale knjižnice je potrebno namestiti. Za to uporabimo ukaz `pip` (PIP Installs Python).

Če želimo namestiti npr. knjižnico `requests`, napišemo: `pip install requests`

S tem je knjižnica numpy dostopna vsem python programom, ki jih poganjamo na računalniku. V program jo uvozimo z ukazom: `import requests`