# Naloga 5: Odjemalec za spletne strani

## Gradiva
- [Uvod v Requests knjižnico](https://realpython.com/python-requests/)


## Naloge

### Naloga 1
Dopolnite spodnjo funkcijo, ki sprejeme kot parameter URL spletne strani, vrne pa HTML kodo strani v tekstovnem formatu. Uporabite knjižnico `request`. Po prejemu odgovora preverite ali je status koda enaka 200 (v tem primeru vrnenmo HTML kodo). V vseh drugih primerih vrnemo vrednost `False`. 

```python

def get_html(url):
    # dodajte kodo po zgornjih navodilih


# preizkusite na primerih
page = get_html("https://example.com/")
print(page)
>>> <!doctype html>
>>> <html>
>>> <head>
>>>     <title>Example Domain</title>
...

page = get_html("http://example.com/neobstaja")
print(page)
>>> False
```

### Naloga 2

Podobno kot v prvem primeru napišite funkcijo ki sprejme URL API-ja (vrača vrednosti v JSNO formatu) in vrnite vrednost kot slovar. Še vedno izvedite validacijo.

```python

def get_api_data(url):
    # dodajte kodo po zgornjih navodilih


# preizkusite na primerih
data = get_api_data("https://jsonplaceholder.typicode.com/todos/1")
print(data)
>>> {'userId': 1, 'id': 1, 'title': 'delectus aut autem', 'completed': False}

data = get_api_data("https://jsonplaceholder.typicode.com/nedala/nedala")
print(data)
>>> False
```

