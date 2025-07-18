const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

function parseGitmodules() {
  const gmPath = path.join(__dirname, '..', '.gitmodules');
  if (!fs.existsSync(gmPath)) return { nodes: [], links: [] };
  const text = fs.readFileSync(gmPath, 'utf8');
  const re = /path\s*=\s*(.+)\n\s*url\s*=\s*(.+)/g;
  let match;
  const mods = [];
  while ((match = re.exec(text)) !== null) {
    mods.push({ id: match[1].trim(), url: match[2].trim() });
  }
  const nodes = [{ id: 'spectra-uniphi' }, ...mods];
  const links = mods.map(m => ({ source: 'spectra-uniphi', target: m.id }));
  return { nodes, links };
}

app.get('/', (req, res) => {
  const data = parseGitmodules();
  res.render('index', { data: JSON.stringify(data) });
});

app.get('/api/status', (req, res) => {
  const data = parseGitmodules();
  // simple guardian-like status: submodule directories exist or not
  const status = data.nodes.slice(1).map(mod => {
    const dir = path.join(__dirname, '..', mod.id);
    return {
      id: mod.id,
      available: fs.existsSync(dir) && fs.readdirSync(dir).length > 0
    };
  });
  res.json({ timestamp: Date.now(), status });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
