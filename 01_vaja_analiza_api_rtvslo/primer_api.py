# uvozimo knjižnico
import requests

# naredimo spremenljivko, v kateri je shranjen URL do API-ja
BASE_URL = "https://api.rtvslo.si"

def get_api_data(url_path):
    # ustvarimo GET klic na API
    response = requests.get(f"{BASE_URL}{url_path}")
    # podatke vrnjene v JSON formatu pretvorimo v Python slovar
    return response.json()


print("Vnesite želeno postajo (val202, ra1, ars, rakp, rsi, 202sport)")
postaja = input("Postaja: ")
# pokličemo funkcijo za izbrano postajo
radio_data = get_api_data(f"/onair/{postaja}")
print(f"****** Podatki za {postaja} ******")
# izluščimo želene podatke iz slovarja
pesem = radio_data["response"]["BroadcastMonitor"]["Current"]["titleName"]
pevec = radio_data["response"]["BroadcastMonitor"]["Current"]["artistName"]
print(f"Trenutno se predvaja: {pesem} - {pevec}")


