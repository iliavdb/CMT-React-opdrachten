# Rapportage – Movie Debugging App

## Inleiding

In deze rapportage leg ik uit welke fouten (bugs) ik heb gevonden in mijn Movie Debugging App en hoe ik deze heb opgelost. Ook test ik of alles werkt volgens de acceptatiecriteria. Dit document is gemaakt als onderdeel van de opdracht.

---

## Gevonden bugs en oplossingen

### Bug 1: useState niet geïmporteerd

**Wat ging er fout?**
In het bestand `AddMovie.jsx` gebruikte ik `useState`, maar het was niet geeimporteerd

**Wat was het probleem?**
De app startte niet

**Oplossing:**
Ik heb `useState` bovenaan het bestand geïmporteerd.

---

### Bug 2: Input werkte niet goed

**Wat ging er fout?**
De regel `setMovie('')` stond buiten de submit-functie.

**Wat was het probleem?**
Het invoerveld werd steeds leeggemaakt, waardoor ik niet kon typen.

**Oplossing:**
Ik heb `setMovie('')` verplaatst naar de `handleSubmit` functie, zodat het inputveld alleen leeg wordt na het toevoegen van een film.

---

### Bug 3: React warning door ontbrekende key

**Wat ging er fout?**
In `MovieList.jsx` had elk item in de lijst geen `key`.

**Wat was het probleem?**
React gaf warnings in de console.

**Oplossing:**
Ik heb een `key` toegevoegd aan elk `MovieItem`.

---

### Bug 4: Dubbele films konden worden toegevoegd

**Wat ging er fout?**
De check op dubbele films was hoofdlettergevoelig.

**Wat was het probleem?**
Je kon bijvoorbeeld zowel "Titanic" als "titanic" toevoegen.

**Oplossing:**
Ik heb de vergelijking aangepast zodat alles naar lowercase wordt omgezet.

---

## Testresultaten (Acceptatiecriteria)

| Acceptatiecriterium  | Resultaat |
| -------------------- | --------- |
| Film toevoegen       | Geslaagd  |
| Lege input blokkeren | Geslaagd  |
| Geen dubbele films   | Geslaagd  |
| Film verwijderen     | Geslaagd  |
| Geen errors/warnings | Geslaagd  |

---

## Conclusie

Alle gevonden bugs zijn opgelost en de applicatie werkt zoals bedoeld. Dit project heeft mij geholpen om beter te begrijpen hoe React werkt en hoe je fou
