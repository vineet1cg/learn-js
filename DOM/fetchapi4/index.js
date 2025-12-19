const domain = document.getElementById("domain");
let show = document.getElementById("append");
const button = document.getElementById("click");
function _clear(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

function showData(data) {
  _clear(show);
  console.log("API response", data);

  let list = [];
  if (Array.isArray(data)) list = data;
  else if (data && Array.isArray(data.subdomains)) list = data.subdomains;
  else if (data && Array.isArray(data.domains)) list = data.domains;
  else if (data && Array.isArray(data.results)) list = data.results;
  else if (data && typeof data === "object") {
    // collect array-like string/number entries from object
    list = Object.values(data)
      .flat()
      .filter(
        (v) =>
          typeof v === "string" ||
          typeof v === "number" ||
          typeof v === "object"
      );
  }

  function formatItem(item) {
    if (item === null || item === undefined) return null;
    if (typeof item === "string" || typeof item === "number")
      return String(item);
    if (typeof item === "object") {
      const keys = [
        "subdomain",
        "domain",
        "name",
        "host",
        "value",
        "hostname",
        "url",
        "full_domain",
        "fqdn",
      ];
      for (const k of keys) {
        if (item[k]) return String(item[k]);
      }
      if (
        item.data &&
        (typeof item.data === "string" || typeof item.data === "number")
      )
        return String(item.data);
      for (const v of Object.values(item)) {
        if (typeof v === "string" || typeof v === "number") return String(v);
        if (
          Array.isArray(v) &&
          v.length > 0 &&
          (typeof v[0] === "string" || typeof v[0] === "number")
        )
          return String(v[0]);
      }
      try {
        return JSON.stringify(item);
      } catch (e) {
        return String(item);
      }
    }
    return String(item);
  }

  for (let i = 0; i < 10; i++) {
    const raw = list[i];
    const text = formatItem(raw);
    const div = document.createElement("div");
    div.className = "subdomain-item";
    if (text) {
      const a = document.createElement("a");
      a.textContent = text;
      a.title = text;
      const lower = text.toLowerCase();
      if (lower.startsWith("http://") || lower.startsWith("https://")) {
        a.href = text;
      } else if (/[\w-]+\.[\w.-]+/.test(text)) {
        a.href = "https://" + text.replace(/^https?:\/\//i, "");
      } else {
        a.href = "#";
        a.addEventListener("click", (e) => e.preventDefault());
      }
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      div.appendChild(a);
    } else {
      div.textContent = "—";
    }
    show.appendChild(div);
  }
}

function fetchData() {
  const d = domain.value && domain.value.trim();
  if (!d) {
    alert("Please enter a domain");
    return;
  }
  _clear(show);

  const url = `https://subdomain-finder3.p.rapidapi.com/v1/subdomain-finder/?domain=${encodeURIComponent(
    d
  )}&rapidapi-key=b3b4e21de6msh6d65d78b99ba32ap199128jsn77a17fe55e78`;

  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(response.status + " " + response.statusText);
      return response.json();
    })
    .then((data) => showData(data))
    .catch((err) => {
      console.error(err);
      const errEl = document.createElement("div");
      errEl.className = "error";
      errEl.textContent = "Error fetching subdomains";
      show.appendChild(errEl);
    });
}

button.addEventListener("click", fetchData);
