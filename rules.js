// rules.js
const DANGEROUS_PATTERNS = [
  /curl\s+.*\|\s*(ba)?sh/i,
  /wget\s+.*\|\s*(ba)?sh/i,
  /powershell\s+-enc/i,
  /base64\s+-d/i,
  /open\s+terminal/i,
  /paste\s+this\s+command/i,
  /run\s+this\s+in\s+(terminal|shell)/i,
  /install\s+with\s+curl/i
];

const TRUSTED_DOMAINS = [
  "openai.com",
  "github.com",
  "docs.github.com",
  "developer.chrome.com"
];

function isTrustedDomain(hostname) {
  return TRUSTED_DOMAINS.some(d => hostname === d || hostname.endsWith("." + d));
}

function scorePageText(text) {
  let score = 0;
  const reasons = [];

  DANGEROUS_PATTERNS.forEach(pattern => {
    if (pattern.test(text)) {
      score += 2;
      reasons.push(`Matched pattern: ${pattern}`);
    }
  });

  // Long Base64-looking strings
  if (/[A-Za-z0-9+\/=]{80,}/.test(text)) {
    score += 2;
    reasons.push("Long encoded payload detected");
  }

  let level = "Low";
  if (score >= 4) level = "High";
  else if (score >= 2) level = "Medium";

  return { score, level, reasons };
}