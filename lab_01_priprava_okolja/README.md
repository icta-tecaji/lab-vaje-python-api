# Laboratorijska vaja 1: Priprava okolja

Na prvi laboratorijski vaji bomo pripravili okolje, ki ga bomo potrebovali skozi predmet. Pod podpoglavjem namestitev so navodila za namestitev posamezne programske opreme. Ta oprema je na fakultetnih računalnikih že nameščena, tako da tega koraka ni potrebno izvajat. Ta korak bo vam v pomoč pri pripravi okolja na lastnih računalnikih.

## Git in Github račun

### Namestitev
Gradiva in domače naloge boste tekom predmeta odajali na lasten Github repozitorji. Zato potrebujemo na računalniku nameščen Git. Namestimo ga tako, da iz [spletne strani](https://git-scm.com/download/win) prenesemo namestitveno datoteko (`Standalone Installer -> 64-bit Git for Windows Setup`). 

Zaženemo preneseno datoteko in sprejmemo privzete nastavitve. 

Za lažje delo lahko namestite Windows terminal.

> Windows terminal lahko namestite preko Microsoft Apps Store. Orodje za nahaja [tukaj](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=sl-si&gl=si).

### Konfiguracija

Po uspešni namestitvi odpremo Windows Terminal. 

Z ukazom `git --version` v terminalu preverimo ali smo uspešno namestili Git.

Naslednji korak je, da ustvarimo Github račun. Na [spletni strani](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) sledimo navodilom in ustvarimo nov račun. 

Po uspešno ustvarjenem računu lahko ustvarimo novi repozitoriji s klikom na gum `New`.

![Github New](./images/github_new.png)

Za ime izpolnemo `TODO_NEKI`, izberemo `Public`, pri polju `Add .gitignore` izberemo `Python`. Ostalih polj ni potrebno spreminjat.

Ustvarjen repozitorji bomo klonirali na računalnik. Odpremo terminal v tisti mapi kjer bomo želeli shraniti repozitoriji.

Repozitorji kloniramo s pomočjo ukaza `git clone <LINK_REPOZITORIJA>`. Link repozitorija najdemo na glavni strani repozitorija po kliku na zeleni gumb `Clone`. 

![Github Link](./images/link.png)

V klonirani mapi lahko ustvarite nekaj sprememb oziroma dodate novo datoteko.

V naslednjem koraku bi želeli spremembe shraniti nazaj v repozitoriji. Ker je bil repozitoriji javen smo lahko podatke prenesli brez avtentikacije (to lahko storijo vsi). V primeru dodajanja podatkov pa se moramo avtenticirati. To lahko nardimo na dva načina:
1. Povezava preko HTTPS:
    - [Ustvarimo osebni žeton za dostop](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
    - Ta žeton si shranimo in ga uporabimo ob pushu na repozitoriji, ko nas vpraša za geslo.
2. Povezava preko SSH:
    - [Uvod v SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh)
    - Pred prvo uporabo SSH moramo v repozitoriju spremeniti *origin* URL na naslednji način: `git remote set-url origin SSH_URL` (SSH_URL najdete pod zavihkom SSH ob kliku na gumb Code, začne se na `git@github.com:`)
    - [Preverimo ali imamo na sistemo že SSH ključ](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)
    - [V primeru, da ključa ni ga ustvarimo](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
    - [Dodamo SSH ključ v Gtihub račun](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
    - [Preizkusimo delovanje](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)

Po uspešni avtentikaciji lahko spremembe dodamo v oddaljeni repozitoriji na Github-u. To naredimo na sledeči način:
- Premaknemo se v mapo repozitorija.
- Dodamo spremembe: `git add .`
- Ustvarimo commit: `git commit -m "OPIS_SPREMEMB"`
- Pushnemo spremembe: `git push origin main`

Na Github-u preverimo ali so spremembe vidne.

> **[Velja na fakultetnih računalnikih] Po končani vaji odstranite mapo z gradivi iz računalnika ter izbrišite SSH ključ na Github-u v primeru, da ste ga dodali.**

## Namestitev VS Code

### Namestitev
Za urejevalnik besedil bomo uporabljali Visual Studio Code, ki ga lahko najdemo [tukaj](https://code.visualstudio.com/).

### Konfiguracija

Več informaciji o uporabi lahko najdete [tukaj](https://code.visualstudio.com/docs).

## Priprava Python okolja

### Namestitev

Namestimo [zadnjo verzijo Python-a](https://www.python.org/downloads/) na računalnik. Pri namestitvi pazimo, da pred namestitvijo izberemo opcijo `Add Python 3.10 to PATH` v namestitvenem meniju, ki se prikaže po zagonu prenesene datoteke.

![Python_install](./images/python_install.png)

Nadaljujemo z izbiro `Install Now`.

### Konfiguracija

Po uspešni namestitvi lahko preverimo uspešnost namestitve z ukazom `python --version` v terminalu.

Interaktivni Python interpreter zaženemo tako, da v terminal vpišemo `python`. Po zagonu lahko začnemo v terminal vpisovati veljavne Python ukaze. Interpreter zapustimo z `exit()`

Preden začnemo z delom bomo ustvarili še virtualno okolje. Ta korak ni nujen amapk je zelo priporočljiv saj omogoča, da bomo zunanje knjižnice namestili samo lokalno znotraj virtualnega okolja oz projekta. Virtualno okolje v praksi ustvarimo za vsaki nov projekt.

> Več o virtualnih okoljih si lahko preberete [tukaj](https://realpython.com/python-virtual-environments-a-primer/).

Prvi korak je, da se premaknemo v mapo v kateri bodo vsa gradiva za predmet (to je mapa, ki smo jo sklonirali iz Github-a).

Pred prvo uporabo moremo okolje najprej ustvariti (ta korak je potreben samo prvič):
- `python -m venv .venv` (.venv je ime virtualnega okolja, ime bi lahko bilo kar koli, vendar ga je dobra praksa poimenovat .venv)
- Python je ustvaril novo mapo `.venv` v kateri se nahaja virtualno okolje za predmet. To lahko preverimo z ukazom `ls`.

Naslednji korak je aktivacija okoja (to moramo storiti pred vsako uporabo). Okolje aktiviramo z ukazom `.\.venv\Scripts\activate`. Po aktivaciji se nam v terminalu pojavi `(.venv)` pred trenutno lokacijo.

![Python_venv](./images/pytohn_venv.png)

Trenutno je okolje aktivirano, tako da vse namestitve zuanjih knjižnic bodo samodejno nameščene v virtualnem okolju. 

Po končanem delu lahko okolje deaktiviramo z ukazom: `deactivate`.

Zunanje odprtokodne knjižnice za Python lahko najdemo na strani https://pypi.org/. Za primer lahko vzamemo knjižnico [requests](https://pypi.org/project/requests/), ki jo bomo v nadaljevanju predmeta uporabili kot HTTP odjemalec. Za namestitev knjižnice moramo v terminalu zagnati (**prepričamo se da je virtualno okolje aktivirano!**) ukaz `pip install <IME_KNJIŽNICE>`, torej v našem primeru `pip install requests`. Python iz spleta prenese knjižnico in jo namesti na računalnik.

Odpremo glavno mapo predmeta v VS Code. Da bomo lažje delali s Python-om, namestimo še vtičnik za Python. Pritisnemo (`CTRL + SHIFT + X`) in vpišemo Python. Izberemo prvi vtičnik od Microsofta in ga namestimo.

Tako je okolje za Python pripravljeno. VS Code bo avtomatsko zaznal Python datoteko in pripravil potrebne zadeve.

## Python uvodni program
V glavni mapi predmeta ustvarimo novo mapo `lab_01_priprava_okolja`, v katero dodamo datoteko z imenom `moj_prvi_program.py`. V datoteko dodamo naslednjo vsebino:
```python
print("Hello Wolrd!")
```

Premaknemo se v mapo `cd lab_01_priprava_okolja` in zaženemo skripto z ukazom `python moj_prvi_program.py`. V terminal se izpiše sporočilo iz skripte. Uspelo nam je zagnati prvi Pytohn program.
