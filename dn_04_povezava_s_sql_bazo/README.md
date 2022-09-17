# Naloga 4: Povezava s SQL podatkovno bazo v Python-u

## Zagon SQL podatkovne baze

V našem primeru bomo uporabili [PostgreSQL](https://www.postgresql.org/) podatkovno bazo, ki nam bo omogočala shranjevanje podatkov v relacijski obliki.

> **Več o PostgreSQL**: PostgreSQL, often simply "Postgres", is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards-compliance. As a database server, its primary function is to store data, securely and supporting best practices, and retrieve it later, as requested by other software applications, be it those on the same computer or those running on another computer across a network (including the Internet). It can handle workloads ranging from small single-machine applications to large Internet-facing applications with many concurrent users. Recent versions also provide replication of the database itself for security and scalability.

- Več informaciji o SQL bazah lahko najdete [tukaj](https://www.solarwinds.com/resources/it-glossary/sql-database).
- Več informaciji o SQL jeziku lahko preberete [tukaj](https://www.programiz.com/sql/database-introduction).

V našem primeru bomo podatkovno bazo namestili s pomočjo Dockerja, kar bo olajšalo namestitev. Pred zagonom se prepričamo, da je Docker nameščen in zagnan  na našem sistemu.

Bazo zaženemo z naslednjim ukazom: 
```bash
docker run -d \
    --name bazadn4 \
    -e POSTGRES_USER=student \
    -e POSTGRES_PASSWORD=mocnogeslo \
    -e POSTGRES_DB=vaja4 \ 
    -v moji-sql-podatki:/var/lib/postgresql/data \
    -p "127.0.0.1:5432:5432" \
    postgres:14.5
```
Z zgornjim ukazom smo naredili sledeče:
- `docker run -d`: Povemo Dockerju, da želimo zagnati novi kontejner v t.i. *detached* načinu, kar pomeni, da se bo kontejner zagnal v ozadju.
- `--name bazadn4`: Določimo ime kontejnerju.
- `-e POSTGRES_USER=student`: Definiramo uporabniško ime za dostop do baze s pomočjo okoljske spremenljivke.
- `-e POSTGRES_PASSWORD=mocnogesl`: Definiramo geslo za dostop do baze s pomočjo okoljske spremenljivke.
- `-e POSTGRES_DB=vaja4`: Definiramo ime podatkovne baze, ki se ustvari ob zagonu s pomočjo okoljske spremenljivke.
- `-v moji-sql-podatki:/var/lib/postgresql/data`: Ker vsakič ko izbrišemo kontejner se vsi podatki izgubijo želimo podatke v bazi shraniti za dlje časa. Zato uporabimo [Docker Volumes](https://docs.docker.com/storage/volumes/). Z ukazom smo ustvarili novi volumen z imenom *moji-sql-podatki*, ki bo na voljo tudi po izbrisu kontejnerja.
- `-p "5432:5432"`: Izpostavimo vrata 5432 (vrata na katerih posluša PostgreSQL podatkovna baza) na lokalnem loopback vmesniku, ki bo omogočal dostop do podatkovne baze.
- `postgres:14.5`: Ime slike iz katere ustvarimo kontejner. Več informaciji je na voljo [tukaj](https://hub.docker.com/_/postgres).


S naslednjim ukazom preverimo ali je podatkovna baza uspešno zagnana: `docker ps`. Pričakonvan je naslednji izpis:
- TODO dodaj sliko izpisa

## SQLAlchemy

