# Green Kitchen

Visionabile su Netlify al link: [https://inspiring-hamster-199f24.netlify.app/](https://inspiring-hamster-199f24.netlify.app/)

Green Kitchen e' una web app realizzata con React e Vite che permette di cercare ricette vegetariane tramite API Spoonacular e visualizzarle in un'interfaccia semplice, moderna e responsive.

L'app e' pensata per offrire un'esperienza rapida e intuitiva: l'utente inserisce un ingrediente o il nome di un piatto, avvia la ricerca e ottiene una griglia di card con immagine, titolo, tempo di preparazione e numero di porzioni. Cliccando su una card si accede a una pagina di dettaglio con ingredienti e istruzioni della ricetta selezionata.

## Funzionalita'

- Ricerca di ricette vegetariane tramite barra di ricerca.
- Visualizzazione dei risultati in una griglia responsive a piu' colonne.
- Card con immagine, titolo, tempo di preparazione e porzioni.
- Effetto hover sulle card con lieve sollevamento e alone visivo.
- Pagina dettaglio dedicata per ogni ricetta.
- Titolo della pagina dinamico:
  - `Home` nella pagina principale.
  - nome della ricetta nella pagina dettaglio.
- Favicon personalizzata a tema vegetariano.
- Gestione degli stati di caricamento, errore e nessun risultato.

## Tecnologie utilizzate

- React
- Vite
- React Router DOM
- Axios
- Spoonacular API
- CSS custom responsive

## Come funziona

La web app interroga l'endpoint `complexSearch` di Spoonacular filtrando i risultati con dieta vegetariana. Per ogni ricerca vengono recuperate fino a 10 ricette, gia' arricchite con alcune informazioni utili come:

- immagine
- titolo
- tempo di preparazione
- porzioni

Quando l'utente apre una ricetta, l'app effettua una seconda chiamata API all'endpoint di dettaglio per mostrare:

- immagine grande
- riepilogo della ricetta
- ingredienti
- istruzioni
- metadati aggiuntivi

## Esperienza utente

Il layout e' stato progettato con un tema verde naturale, coerente con il mondo vegetarian-friendly. L'interfaccia e' responsive e si adatta sia a desktop sia a mobile:

- nella Home e' presente una hero introduttiva con ricerca in evidenza
- le card si dispongono automaticamente su piu' colonne
- su schermi piccoli la struttura si compatta mantenendo leggibilita' e usabilita'

## Struttura del progetto

```text
src/
  assets/            Risorse grafiche e favicon
  components/        Componenti riutilizzabili come SearchBar e RecipeCard
  pages/             Pagine principali: Home e RecipeDetail
  services/          Gestione delle chiamate API
  App.jsx            Struttura principale e routing
  main.jsx           Entry point dell'app
  styles.css         Stili globali
```

## Avvio del progetto

1. Installa le dipendenze:

```bash
npm install
```

2. Avvia il server di sviluppo:

```bash
npm run dev
```

3. Per creare la build di produzione:

```bash
npm run build
```

4. Per controllare il codice con ESLint:

```bash
npm run lint
```

## Note tecniche

- Le chiamate HTTP vengono gestite tramite Axios.
- Il routing tra Home e dettaglio ricetta viene gestito con React Router DOM.
- Il progetto usa un foglio di stile globale per mantenere coerenza grafica e semplificare la gestione del layout.
- Il titolo della pagina viene aggiornato dinamicamente in base alla route attiva.

## Possibili sviluppi futuri

- aggiunta di filtri avanzati per cucina, ingredienti o tempo massimo
- salvataggio ricette preferite
- paginazione o caricamento progressivo dei risultati
- refactor della gestione API con variabili ambiente per la chiave privata

## Autore

Davide Cavallaro
