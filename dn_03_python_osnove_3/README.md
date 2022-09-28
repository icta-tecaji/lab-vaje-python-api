# Naloga 3: Python osnove 3.del

## Gradiva
- [Python funkcije](https://realpython.com/defining-your-own-python-function/)

## Naloge

### Naloga 1
Napišite funkcijo, ki od uporabnika zahteva naj vnese svojo EMŠO število. Funkcija naj nato izpiše koliko let je uporabnik star (upoštevamo samo letnico rojstva) in vrne število let (celoštevilska vrednost). EMŠO ima 14 številk XXXXyyyXXXXXXX. 5.,6.,7. številka predstavljajo letnico rojstva (999 -> 1999 leto rojstva).

```python
def emso_leta_preracun():
    # dopolnite funkcijo z lastno kodo

# primer uporabe 1
starost = emso_leta_preracun()
>>> Vnesi emšo: 0102999500111
>>> Star si 22 let
print(starost)
>>> 22

# primer uporabe 2
starost = emso_leta_preracun()
>>> Vnesi emšo:  0104986505555
>>> Star si 35 let
print(starost)
>>> 35
```

### Naloga 2

Napišite funkcijo, ki sprejme nabor podatkov v obliki dictionary-ja `data` in vrne največjo vrednost vsakega ključa (vrednosti so v obliki lista).

```python
data = {"prices": [41970, 40721, 41197, 41137, 43033],
       "volume": [49135346712, 50768369805, 47472016405, 34809039137, 38700661463]}

def najvecja_vrednost(podatki): 
    # dopolnite funkcijo z lastno kodo

# uporaba
vrednosti = najvecja_vrednost(data)
print(vrednosti)
>>> [43033, 50768369805]
```
