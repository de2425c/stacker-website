const escapeHtml = (s: string): string => {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

interface InvitePageParams {
  inviterUsername: string;
  token: string;
  title: string;
  description: string;
  ogImageUrl: string;
}

export const buildInvitePage = ({ inviterUsername, token, title, description, ogImageUrl }: InvitePageParams): string => {
  const safeUsername = escapeHtml(inviterUsername);
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>${safeTitle}</title>
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDesc}">
  <meta property="og:image" content="${ogImageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://stackpokertracker.com/invite/${safeUsername}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeDesc}">
  <meta name="twitter:image" content="${ogImageUrl}">
  <meta name="theme-color" content="#fafafa">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { height: 100%; background-color: #fafafa; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      background-color: #fafafa;
      min-height: 100vh; min-height: 100dvh;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 24px;
      padding-top: max(24px, env(safe-area-inset-top));
      padding-bottom: max(24px, env(safe-area-inset-bottom));
      padding-left: max(24px, env(safe-area-inset-left));
      padding-right: max(24px, env(safe-area-inset-right));
      color: #334155; -webkit-font-smoothing: antialiased; overflow-x: hidden;
    }
    .container { max-width: 600px; width: 100%; text-align: center; }
    .logo { font-size: 48px; margin-bottom: 16px; }
    h1 { font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 8px; line-height: 1.2; letter-spacing: -0.5px; }
    .subtitle { font-size: 20px; color: #64748b; margin-bottom: 32px; line-height: 1.5; }
    .invite-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; margin-bottom: 24px; }
    .invite-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; margin-bottom: 6px; }
    .inviter-name { font-size: 20px; font-weight: 600; color: #0f172a; }
    .features { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; text-align: left; }
    .feature { display: flex; align-items: center; gap: 16px; font-size: 15px; color: #475569; line-height: 1.5; }
    .feature-icon { width: 40px; height: 40px; background: #ecfdf5; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; }
    .download-btn { display: inline-block; cursor: pointer; text-decoration: none; margin-bottom: 48px; }
    .download-btn img { height: 54px; width: auto; }
    .footer { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; }
    .footer a { color: #10b981; text-decoration: none; font-size: 14px; font-weight: 500; }
    .footer a:hover { text-decoration: underline; }
    .hidden-token { display: none; }
    @media (max-width: 640px) {
      h1 { font-size: 28px; }
      .subtitle { font-size: 18px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">♠️</div>
    <h1>You're Invited to Stacker</h1>
    <p class="subtitle">Your friend wants you to join the best poker session tracker</p>
    <div class="invite-card">
      <div class="invite-label">Invited by</div>
      <div class="inviter-name">${safeUsername}</div>
    </div>
    <div class="features">
      <div class="feature">
        <div class="feature-icon">📊</div>
        <span>Track every session with detailed stats</span>
      </div>
      <div class="feature">
        <div class="feature-icon">📈</div>
        <span>Analyze your performance over time</span>
      </div>
      <div class="feature">
        <div class="feature-icon">👥</div>
        <span>Compare results with friends</span>
      </div>
    </div>
    <a href="https://apps.apple.com/us/app/stacker-poker-tracker/id6745683972" class="download-btn" target="_blank" aria-label="Download on the App Store">
      <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
    </a>
    <nav class="footer">
      <a href="https://stackpokertracker.com/support">Support</a>
      <a href="https://stackpokertracker.com/privacy">Privacy</a>
      <a href="https://stackpokertracker.com/terms">Terms</a>
    </nav>
  </div>
  <div class="hidden-token" data-token="${token}" data-inviter="${safeUsername}"></div>
</body>
</html>`;
};

export const buildNotFoundPage = (): string => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Invite Not Found - Stacker</title>
  <meta name="theme-color" content="#fafafa">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { height: 100%; background-color: #fafafa; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      background-color: #fafafa;
      min-height: 100vh; min-height: 100dvh;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 24px;
      padding-top: max(24px, env(safe-area-inset-top));
      padding-bottom: max(24px, env(safe-area-inset-bottom));
      color: #334155; -webkit-font-smoothing: antialiased; text-align: center;
    }
    .container { max-width: 600px; width: 100%; }
    .logo { font-size: 48px; margin-bottom: 16px; }
    h1 { font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 8px; letter-spacing: -0.5px; }
    .subtitle { font-size: 16px; color: #64748b; margin-bottom: 32px; line-height: 1.6; }
    .home-link { display: inline-block; padding: 14px 32px; background: #10b981; color: #fff; font-size: 16px; font-weight: 600; border-radius: 12px; text-decoration: none; transition: background 0.15s ease; }
    .home-link:hover { background: #059669; }
    @media (max-width: 640px) { h1 { font-size: 24px; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">♠️</div>
    <h1>Invite Not Found</h1>
    <p class="subtitle">This invite link is invalid or the user doesn't exist. Ask your friend for a new link.</p>
    <a href="https://stackpokertracker.com" class="home-link">Go to Stacker</a>
  </div>
</body>
</html>`;
};
