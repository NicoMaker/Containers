# Docker Commands Guide

## Comandi Docker

### Creazione e gestione immagini

- `docker build .` → Crea un'immagine basata sul Dockerfile.
- `docker images` → Mostra le immagini presenti sul sistema.

### Avvio di un container

- `docker run -p <porta>:<porta> <nome-immagine>` → Avvia un container mappando le porte.
- Apri il browser e vai su `127.0.0.1:<porta>` o `localhost:<porta>` per vedere il sito in funzione.

### Monitoraggio dei container

- `docker ps` → Elenca i container in esecuzione, mostrando informazioni come tempo di avvio, porte usate e nome assegnato.
- `docker ps -a` → Mostra tutti i container, sia attivi che non attivi.

### Arresto e rimozione

- `docker stop <nome-container>` → Arresta un container in esecuzione.
- Eliminando un'immagine, tutti i container basati su di essa non funzioneranno più.
- Un'immagine può essere utilizzata per creare più container.

### Docker Hub

- Puoi trovare immagini già pronte su [Docker Hub](https://hub.docker.com/).

## Scarico Servizio

- `docker run node <servizio>` → crea un container con il servizio che mi interessa

### Esecuzione di Node.js in un container

- `docker run node` → Crea ed esegue un container con il servizio Node.js specificato.
- `docker run -it node` → Esegue un container interattivo di Node.js per eseguire comandi manualmente.
