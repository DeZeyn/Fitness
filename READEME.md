Gradient Background Image definieren für Linear Gradient 

Footer Element wird in FEND Mentoring 08.04.2024 gezeigt in Minute 20:22. Nicht Eriks Lösung sondern die eines anderen Teilnehmers.

Vite-plugin-svgr wird in Fend Mentoring 08.04.2024 gezeigt in Minute 26:15

Tailwind Classes richtig einbinden wird in FEND Mentoring 10.04.2024 in Minute 12:00 gezeigt.

Links werden in FEND Mentoring 10.04.2024 in Minute 16:00 gezeigt. 

Einführung in Graphql mit Apollo Client etc in 03.04.2024 ab Minute 45:00

Wie baue ich eine Navigation in FEND 10.04.2024 ca. Minute 50:00 

Liste der Programme aus Hygraph holen in FenD 10.04.2024 ab 54:00

Fragen en Erik:
- In den einzelnen Componenten erstelle ich jeweils eine Query für die Daten, die ich benötige. Und dann verarbeite ich die Daten direkt in dert Componente. Richtig? Was ist in dem Zusammenhang MySQl und Sequeelize? Drwa SQL. 
- Fragen zur Struktur:
- Also für die Userdatenbank brauche ich im Gegensatz zu den Fitnessprogrammen keine Graphql Abfrage, sondern kann das über SQL machen. Richtig? 
- Yes, you're on the right track. You can definitely use GraphQL to fetch fitness programs and SQL for user data management.

Here's a basic structure for your SQL database:

Users Table: This table would store information about your users.

Columns might include:

id (Primary Key)
username
email
password_hash (Never store plain-text passwords, always store a hashed version)
created_at
updated_at
Workouts Table: This table would store information about the workouts that are available.

Columns might include:

id (Primary Key)
name
description
duration
intensity
created_at
updated_at
User_Workouts Table: This table would store information about which workouts a user has completed.

Columns might include:

id (Primary Key)
user_id (Foreign Key referencing Users)
workout_id (Foreign Key referencing Workouts)
completed_at
- Grundsätzlich den Ablauf der Fitnessapp verstehen. Dafür Erik nach dem Ablauf fragen bzw. selbst den Ablauf erklären
- Ich habe die Bilder eingefügt und Chat GPT hat mir das vorgeschlagen: import { ReactComponent as HomeIcon } from '../assets/House.svg'; dann hätte ich die Bilder als </ HomeIcon > einbinden können. Das ging leider nicht. Ich habe das jetzt so gelöst <img src={HomeIcon} alt="" /> So steht es ja auch in der Documentation von Vite-plugin-svgr. Wäre ersteres aber nicht schöner gewesen?
- Ich muss ja den User mit dem jewiligen Workout verknüpfen und den aktuellen Stand des Workouts speichern und dann weitergehen. Speichere ich den Stand auch über Hypraph? Theoretisch müsste das ja Geräteübergreifend funktionieren. Also Account anlegen und dann den Stand auf jedem Gerät abrufen können.
- Eslint makert ja gewisse Dinge rot. Wie erkenne ich ob das ein Fehler ist oder nur eine Warnung? Wie und wann hebe die Makierung auf?

User in den Local Storage packen
Helepers Ordner für den User 
Hypgraph Imports in eigenen Ordner packen 