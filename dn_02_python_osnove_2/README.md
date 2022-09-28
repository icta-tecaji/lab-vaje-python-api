# Naloga 2: Python osnove 2.del

## Gradiva
- [Seznami in terke (Lists and tuples)](https://realpython.com/python-lists-tuples/)
- [Slovarji (Dictionaries)](https://realpython.com/python-dicts/)
- [Pogojni stavki](https://realpython.com/python-conditional-statements/)
- [For stavki](https://realpython.com/python-for-loop/)

## Naloge

### Naloga 1
Iz sledečega list-a pridobite vrednost **ffff** in jo shranite v spremenljivko `f_vrednost`:

```python
our_list = ["a", ["bb", "cc"], "d", [["eee"], ["ffff"], "ggg"]]
```

### Naloga 2
Iz sledečega lista `our_list` odstranite vrednost, ki se nahaja na indexu 4. Vrednost dodajte v dictionary pod ključ `d`. Nato iz dictionary `our_dict` pridobite vse vrednosti. Te vrednosti shranite v nov tuple in novonastali tuple primerjajte ali je enak podanemu tuple-u `our_tuple`.

```python
our_list = [1,2,3,4,5,6,7]
our_dict = {
    "a": 2,
    "b": 5,
    "c": 8,
    "d": 12,
    "e": 357,
    "f": 12
}
our_tuple = (357, 12, 12, 8, 5, 2, 2)
```

### Naloga 3
Iz danega dictionary-ja `d` izpišite vse ključe, katerih vrednost vsebuje črko `r` (more vsebovati tudi veliko tiskano črko `R`).

```python
d = {
    "mačka": "Micka",
    "pes": "Fido",
    "volk": "Rex",
    "medved": "Žan",
    "slon": "Jan",
    "žirafa": "Helga",
    "lev": "Gašper",
    "tiger": "Anže",
    "papagaj": "Črt",
    "ribica": "Elena",
    "krokodil": "Kasper",
    "zajec": "Lars",
    "kamela": "Manca" 
}

# Pričakovan odgovor
volk
lev
papagaj
krokodil
zajec
```

### Naloga 4

Poiščite vsa praštevila med 2 in 50 (vključno).
