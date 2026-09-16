const TAG_LABELS = { free: "Free", hard: "Hard" };

function renderResourceItem(item) {
  const wrap = document.createElement("div");
  wrap.className = item.child ? "resource-item resource-item--child" : "resource-item";

  const h3 = document.createElement("h3");
  if (item.url) {
    const a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = item.title;
    h3.appendChild(a);
  } else {
    h3.appendChild(document.createTextNode(item.title));
  }
  (item.tags || []).forEach((tag) => {
    const span = document.createElement("span");
    span.className = "resource-meta " + tag;
    span.textContent = TAG_LABELS[tag] || tag;
    h3.appendChild(span);
  });
  wrap.appendChild(h3);

  const p = document.createElement("p");
  p.className = "resource-note";
  p.innerHTML = item.note;
  wrap.appendChild(p);

  return wrap;
}

function renderResourceGroups() {
  const containers = document.querySelectorAll("[data-resource-group]");
  if (!containers.length) return;

  const byGroup = {};
  RESOURCE_DATA.forEach((item) => {
    (byGroup[item.group] ||= []).push(item);
  });

  containers.forEach((container) => {
    const groups = container.dataset.resourceGroup.split(/\s+/);
    groups.forEach((group) => {
      (byGroup[group] || []).forEach((item) => {
        container.appendChild(renderResourceItem(item));
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", renderResourceGroups);
