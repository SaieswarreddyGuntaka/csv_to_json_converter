document.getElementById('uploadForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const fileInput = document.getElementById('csvFile');
  const file = fileInput.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();

    if (res.ok) {
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } else {
      document.getElementById('output').textContent = `Error: ${data.error}`;
    }
  } catch (err) {
    document.getElementById('output').textContent = `Error: ${err.message}`;
  }
});