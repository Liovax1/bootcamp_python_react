Auteur : Liova HOVAKIMYAN
B3DEV BOOTCAMP PYTHON/JS


# - Installation et mise en place du projet :

#Pour mettre en place le projet vous devez faire les commandes suivantes :

## - Dans le dossier backend :


#Installer Django, Ninja et les autres dépendances :

- pip install django

- pip install django-ninja

- pip install django djangorestframework django-ninja


#Créer les migrations de base :

- python manage.py makemigrations

- python manage.py migrate


#Démarrer le serveur :

- python manage.py runserver

- Accéder à "http://127.0.0.1:8000/"


## - Dans le dossier frontend :


#Installer nvm (dernière version stable) :

- nvm install latest

#Vérifier l'installation de node.js

- node -v

#Basculer sur la version de node installée (ici v23.1.0)

- nvm use 23.1.0

#Créer le projet Vite:

- npm create vite@latest


#Installer les autres dépendances :

- npm install


#Démarrer le serveur :

- npm run dev

- Accéder à "http://localhost:5173/"

Et voilà, vous avez un projet Django avec un backend et un frontend avec Vite et React.


Note : Il manque la fonctionnalité pour qu'aucun joueur ne gagne lorsqu'ils dépassent tous 21.