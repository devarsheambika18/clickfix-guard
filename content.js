// content.js
(function () {
  const pageText = document.body.innerText || "";
  const hostname = window.location.hostname;

  if (isTrustedDomain(hostname)) return;

  const result = scorePageText(pageText);

  if (result.level === "High" || result.level === "Medium") {
    showWarning(result);
  }
})();

function showWarning(result) {
  // Prevent duplicate banners
  if (document.getElementById("clickfix-guard-banner")) return;

  const banner = document.createElement("div");
  banner.id = "clickfix-guard-banner";
  banner.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
    background: #7f1d1d;
    color: white;
    padding: 14px 18px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;

  banner.innerHTML = `
    <strong>ClickFix Guard Warning (${result.level} Risk)</strong><br/>
    This page may be asking you to paste a dangerous command into Terminal.<br/>
    <small>${result.reasons.slice(0, 2).join(" | ")}</small>
    <button id="cfg-close" style="margin-left:12px;padding:4px 10px;cursor:pointer;">Dismiss</button>
  `;

  document.body.prepend(banner);

  document.getElementById("cfg-close").onclick = () => banner.remove();
}