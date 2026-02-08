/**
 * Generates an intermediate HTML page that uses obfuscated JavaScript
 * to dynamically construct and navigate to the target URL.
 * This prevents adblockers from pattern-matching the destination domain
 * in redirects or visible HTML, making it compatible with any domain.
 */
export function createBypassResponse(targetUrl: string): Response {
  // Encode the URL as a base64 character code array for obfuscation
  const charCodes = Array.from(targetUrl).map((c) => c.charCodeAt(0));
  const encoded = Buffer.from(JSON.stringify(charCodes)).toString("base64");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Loading...</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0a;color:#e5e5e5;font-family:system-ui,-apple-system,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh}
.c{text-align:center}
.s{width:32px;height:32px;border:3px solid #333;border-top-color:#dc2626;border-radius:50%;animation:r .8s linear infinite;margin:0 auto 16px}
@keyframes r{to{transform:rotate(360deg)}}
p{font-size:14px;opacity:.7}
</style>
</head>
<body>
<div class="c">
<div class="s"></div>
<p>Redirecting...</p>
</div>
<script>
(function(){
var d="${encoded}";
var a=JSON.parse(atob(d));
var u=String.fromCharCode.apply(null,a);
setTimeout(function(){window.location.replace(u)},1500);
})();
</script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
