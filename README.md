#  CSV to JSON Converter

A simple web application that allows users to upload a `.csv` file and receive a formatted `.json` response. Built with:

- Python Flask (Backend)
- JavaScript, HTML & CSS (Frontend)
- CORS enabled API
- Local file upload support

---

##  Features

- Upload any valid `.csv` file via web form
- Backend reads CSV and converts it into JSON using `DictReader`
- Displays the formatted JSON on the same page
- Download or copy JSON for further use

---

##  Project Structure

```
json-formatter/
├── backend/
│   ├── main.py               # Flask app with /upload endpoint
│   ├── utils.py              # CSV-to-JSON conversion logic
│   ├── requirements.txt      # Backend dependencies
│   └── data/                 # Temporary storage for uploaded files
├── frontend/
│   ├── index.html            # Web page UI
│   ├── script.js             # Frontend logic for uploading
│   └── style.css             # Styling
```

---

## ⚙ Getting Started

### 1️ Clone or Download the Repo

```bash
git clone <repo-url>
cd json-formatter
```

Or [download the ZIP](#) and extract it.

---

### 2️ Start the Flask Backend

```bash
cd backend
pip install -r requirements.txt
python main.py
```

> Runs at: `http://127.0.0.1:5000`

---

### 3️ Start the Frontend (HTML Page)

In a new terminal:

```bash
cd frontend
python -m http.server 8000
```

> Visit `http://127.0.0.1:8000` in your browser

---

##  How It Works

1. User selects a `.csv` file
2. Frontend uploads it via `fetch()` to Flask `/upload`
3. Flask saves the file and uses `csv.DictReader` to parse it
4. JSON result is returned and displayed on the page

---

##  Sample CSV Format

```csv
name,age,email
Alice,30,alice@example.com
Bob,25,bob@example.com
```

JSON Output:

```json
[
  {
    "name": "Alice",
    "age": "30",
    "email": "alice@example.com"
  },
  {
    "name": "Bob",
    "age": "25",
    "email": "bob@example.com"
  }
]
```

---

##  Requirements

- Python 3.7+
- Flask
- flask-cors

Install dependencies:

```bash
pip install -r backend/requirements.txt
```

---

##  Notes

- Files are temporarily stored in `backend/data/`
- Make sure CORS is allowed if testing across ports

---

<img width="1252" alt="image" src="https://github.com/user-attachments/assets/d97095ab-3299-4b27-9dfd-a674b26a797e" />


##  License

MIT License © 2024 [Sai Eswar Guntaka]
