# ToDo Liste - Frontend

Vue.js Frontend für die ToDo-Listen-Anwendung.

## Team

- **Mohanad El-Noumeri**
- **Altan Savranoglu**

## Projektbeschreibung

Das Frontend ist eine moderne Single-Page-Application (SPA), die mit Vue.js 3 und TypeScript entwickelt wurde. Es bietet eine intuitive Benutzeroberfläche zur Verwaltung von Aufgaben mit Echtzeit-Filterung, Sortierung und Suche.

## Technologie-Stack

- **Vue.js 3.5.13** - Progressive JavaScript Framework
- **TypeScript 5.8** - Typsicheres JavaScript
- **Vue Router 4.5** - Client-seitiges Routing
- **Vite 6.2** - Schnelles Build-Tool und Dev-Server
- **Vitest 3.1** - Unit Testing Framework
- **Vue Test Utils 2.4** - Testing Utilities für Vue
- **ESLint** - Code Linting
- **Prettier** - Code Formatierung

## Projektstruktur

```
src/
├── components/
│   ├── TodoListView.vue      # Haupt-To-Do-Komponente
│   ├── HelloWorld.vue         # Willkommens-Komponente
│   ├── TheWelcome.vue         # Welcome Screen
│   ├── WelcomeItem.vue        # Welcome Item Komponente
│   ├── OurList.vue            # Statische Liste (Meilenstein 2)
│   └── __tests__/             # Unit Tests
│       ├── TodosView.spec.ts
│       └── HelloWorld.spec.ts
├── views/
│   ├── HomeView.vue           # Home-Seite
│   └── AboutView.vue          # About-Seite
├── router/
│   └── index.ts               # Vue Router Konfiguration
├── assets/
│   ├── main.css               # Haupt-Stylesheet
│   ├── base.css               # Basis-Styles
│   └── logo.svg               # Vue Logo
├── App.vue                    # Root-Komponente
└── main.ts                    # Application Entry Point
```

## Features

**Aufgabenverwaltung**
- Aufgaben hinzufügen mit Titel und Beschreibung
- Aufgaben als erledigt/unerledigt markieren
- Einzelne oder alle Aufgaben löschen
- Aufgaben laden und anzeigen

**Filter & Sortierung**
- Filter nach Status (Alle, Erledigt, Offen)
- Sortierung alphabetisch oder nach Status
- Echtzeit-Suche nach Titel oder Beschreibung

**Design**
- Dark/Light Mode Toggle
- Responsive Design
- Animierte Übergänge
- Moderne Benutzeroberfläche

## Voraussetzungen

- Node.js (Version 20.9.0 oder höher)
- npm (kommt mit Node.js)

## Installation

```bash
# Dependencies installieren
npm install
```

## Entwicklung

```bash
# Entwicklungsserver starten
npm run dev
```

Die Anwendung läuft auf `http://localhost:5173`

## Build für Produktion

```bash
# Type-Check durchführen
npm run type-check

# Für Produktion bauen
npm run build

# Production Build vorschauen
npm run preview
```

## Testing

```bash
# Unit Tests ausführen
npm run test:unit

# Tests im Watch-Modus
npm run test:unit -- --watch
```

## Umgebungsvariablen

### Development (.env.development)
```
VITE_BACKEND_BASE_URL=http://localhost:8080
```

### Production (.env.production)
```
VITE_BACKEND_BASE_URL=https://todoliste-backend.onrender.com  (muss aktualisiert werden)
```

## API-Integration

Das Frontend kommuniziert mit dem Backend über folgende Endpunkte:

| Methode | Endpunkt | Beschreibung |
|---------|----------|--------------|
| GET | `/api/todos` | Alle Todos abrufen |
| POST | `/api/todos` | Neues Todo erstellen |
| PUT | `/api/todos/{id}` | Todo-Status umschalten |
| DELETE | `/api/todos/{id}` | Einzelnes Todo löschen |
| DELETE | `/api/todos` | Alle Todos löschen |

## Komponenten-Übersicht

### TodoListView.vue
Die Hauptkomponente für die To-Do-Verwaltung. Beinhaltet:
- Formular zum Hinzufügen neuer Aufgaben
- Liste aller Aufgaben mit Filter- und Sortieroptionen
- Dark/Light Mode Toggle
- Suchfunktion

### Reaktive Datenstruktur
```typescript
interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
```

## Routing

Die Anwendung verwendet Vue Router mit folgenden Routen:

- `/` - Home-Seite mit Willkommensnachricht
- `/todos` - To-Do-Listen-Verwaltung
- `/about` - About-Seite
- `/komp` - Statische Liste (Demo)

## CSS-Architektur

Das Projekt verwendet eine Kombination aus:
- **Scoped Styles** für komponentenspezifische Styles
- **Globale Styles** in `App.vue` für übergreifende Themes
- **CSS Custom Properties** für Theming (Dark/Light Mode)
- **CSS Animations** für Übergänge und Animationen

## Continuous Integration

GitHub Actions führt automatisch bei jedem Push folgende Schritte aus:
- Dependency Installation
- Unit Tests

Siehe `.github/workflows/npm.yml` für Details.

## Bekannte Limitierungen

- Das Frontend benötigt eine aktive Backend-Verbindung
- CORS muss im Backend konfiguriert sein für lokale Entwicklung

---

**Entwickelt mit Vue.js von Mohanad El-Noumeri und Altan Savranoglu**
