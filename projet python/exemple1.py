liste = [21, 22, 23]
print(liste)
liste.append(1)
print(liste)
liste.append("ok")
print(liste)
liste = ["a","d","m","b"]
print(liste[0])
liste[2] = "z"
print(liste)
del liste[1]
print(liste)
liste.remove("b")
print(liste)
print(len(liste))
liste=["a","a","a","b","c","a","c"]
nb_valeur = liste.count("a")
print(nb_valeur)
liste=["a","a","a","b","c","a","c"]
print(liste.index("a"))
liste=["a","a","a","b","c","a","c"]
print(liste, "l'index de la valeur est" ,liste.index("b"))