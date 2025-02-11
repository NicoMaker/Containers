# installa node (immagine già esistente node -> se non conosce la scarica)
FROM node

# tutti i file vengono copiati e cartelle sono nell'immagine e percorso dove vengono messe nell'immagine
# . -> sorgete dati li voglio copiare -> tutti i dati dentro ad un immagine di un container
# .. -> copia i dati nella cartella pricipale (file system) -> route del file system (meglio cartella supporto)
COPY . . 

# WORKDIR /app spefico direttamente la cartella di lavoro

# Copia progetto in una cartella App
COPY . /App

# esegui le installazione neccessarie di node (npm install) -> per il lavoro 
RUN npm install

# esegui il servizio server.js in file node
# RUN node server.js 

# espongo il servizio alla porta 80
EXPOSE 80

# quando è eseguito file di node solo quando il container esiste 
CMD ["node", "server.js"]