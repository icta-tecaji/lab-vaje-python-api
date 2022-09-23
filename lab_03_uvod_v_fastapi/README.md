# Laboratorijska vaja 3: Uvod v FastAPI

## Uvod
Na laboratorijskih vajah bomo za delo z API-ji uporabljali Python in knjižnico [FastAPI](https://fastapi.tiangolo.com/).

FastApi je moderno in hitro spletno ogrodje za izdelavo APijev v Python-u. Glavne prednosti FastAPI-ja so enostavnost uporabe, intuitivnost, robustnost, hitrost in avtomatsko generiranje dokumentacije.

> Uporabne strani: [Github](https://github.com/tiangolo/fastapi), [dokumentacija](https://fastapi.tiangolo.com). Dokumentacija projekta je zelo dobro spisana, tako da omogoča odlično začetno točko za delo.

## Namestitev

Da lahko uporabimo FastAPI je potrebno namestiti sledeče knjižnice (pred namestitvijo se prepričamo da je virtualno okolje aktivirano - `.\.venv\Scripts\activate`):
- `pip install fastapi`
- `pip install "uvicorn[standard]"` (ASGI server)

Po uspešni namestitvi smo pripravljeni na prvi primer.

## Začetni primer

Začeli bomo z minimalnim primerom, ki še omogoča delujočo aplikacijo. V novi mapi `lab_02_uvod_v_fastapi` ustvarite novo datoteko `main.py`. Ta datoteka bo vsebovala celotno kodo za naš primer.

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
```

Naslednji korak je zagon serverja: `uvicorn main:app --reload`. Opcija `--reload` omogoči, da ob spremembi kode se server samodejno znova zažene kar nam olajša razvoj.

Na URL-ju http://127.0.0.1:8000/docs lahko najdete interaktivno dokumentacijo ([Swagger UI](https://github.com/swagger-api/swagger-ui)).

Avtomatsko se ustvari tudi URL z statično dokumentacijo: http://127.0.0.1:8000/redoc.


## Nadgradnja primera

- koliko globoko gremo tukaj