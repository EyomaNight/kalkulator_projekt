# VSCode Workspace Settings (Pro Tip)

Jeśli pracujesz w VS Code, możesz stworzyć lokalną konfigurację dla projektu:

## Zalecane Extensje

- **ES7+ React/Redux/React-Native snippets** - dsznisnskij.es7-react-js-snippets
- **Prettier - Code formatter** - esbenp.prettier-vscode
- **ESLint** - dbaeumer.vscode-eslint
- **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
- **Thunder Client** - rangav.vscode-thunder-client

## Zainstaluj:

```bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension bradlc.vscode-tailwindcss
code --install-extension dsznisnskij.es7-react-js-snippets
```

## VS Code Settings (.vscode/settings.json)

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Keyboard Shortcuts

### Formatowanie
- `Shift + Alt + F` - Format document
- `Ctrl + K Ctrl + F` - Format selection

### Edit
- `Ctrl + /` - Toggle comment
- `Ctrl + Shift + P` - Command palette

### Git
- `Ctrl + Shift + G` - Open Source Control
- `Ctrl + G` - Go to line

## Terminal Commands Development

```bash
# Szybkie sprawdzenie kodu
npm run lint

# Formatowanie przed commitem
npm run format

# Uruchomienie dev serwera
npm run dev

# Build production
npm run build

# Sprawdzenie errormów
npm run format:check
```

## Developing Tips

1. **Komponenty** - Tworz je w `src/components/`
2. **Utilities** - Funkcje w `src/lib/`
3. **Styles** - Tailwind CSS (nie CSS files)
4. **Types** - Inline interfaces zamiast separate files

## Testing w Przeglądarce

```
http://localhost:3000 - Dev server
http://localhost:3000/api/... - API endpoints (jeśli dodasz)
```

## Debugging

Otwórz DevTools: `F12` lub `Ctrl + Shift + I`

Przydatne:
- Console (F12 → Console)
- Local Storage (F12 → Application → Local Storage)
- Network (F12 → Network)

## Git Best Practices

```bash
# Przed push'em zawsze pull
git pull origin master

# Commituj regularnie, opisowo
git commit -m "feat: opis zmiany"

# Sprawdź status
git status

# Zobacz historię
git log --oneline
```

## Troubleshooting

### Port 3000 jest już zajęty?
```bash
# Zabij process na porcie 3000
lsof -ti:3000 | xargs kill -9  # Mac/Linux
netstat -ano | findstr :3000    # Windows - find PID
taskkill /PID <PID> /F          # Windows - kill process
```

### node_modules nie działa?
```bash
rm -rf node_modules
npm install
```

### Tailwind CSS nie działa?
```bash
# Upewnij się że pliki są w content paths
# tailwind.config.js:
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/**/*.{js,ts,jsx,tsx,mdx}',
]
```

---

**Happy Coding!** 🚀
