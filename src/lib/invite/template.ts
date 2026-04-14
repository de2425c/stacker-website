const escapeHtml = (s: string): string => {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
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
  <meta name="theme-color" content="#0F1114">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { height: 100%; background-color: #0F1114; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      background-color: #0F1114;
      min-height: 100vh; min-height: 100dvh;
      display: flex; flex-direction: column;
      color: #F0F2F5; -webkit-font-smoothing: antialiased; overflow-x: hidden;
    }
    .main {
      flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
      padding: 64px 24px;
      padding-top: max(64px, env(safe-area-inset-top));
      padding-bottom: max(64px, env(safe-area-inset-bottom));
      padding-left: max(24px, env(safe-area-inset-left));
      padding-right: max(24px, env(safe-area-inset-right));
      background-image: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,106,51,0.15) 0%, transparent 60%);
    }
    .bg-dots {
      position: absolute; inset: 0; opacity: 0.03;
      background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
      background-size: 24px 24px;
    }
    .content { position: relative; max-width: 384px; width: 100%; text-align: center; }
    .app-icon-wrap {
      display: inline-block; margin-bottom: 32px; padding: 4px;
      background: #1A1D24; border-radius: 24px;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.05);
    }
    .app-icon-wrap img { width: 88px; height: 88px; border-radius: 20px; display: block; }
    h1 { font-size: 30px; font-weight: 700; color: #F0F2F5; margin-bottom: 12px; line-height: 1.2; letter-spacing: -0.5px; }
    h1 .brand { color: #E86A33; }
    .subtitle { font-size: 16px; color: #9BA3B0; margin-bottom: 40px; line-height: 1.5; }
    .invite-card { background: #1A1D24; border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 20px; margin-bottom: 24px; }
    .invite-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #5C6370; margin-bottom: 6px; }
    .inviter-name { font-size: 20px; font-weight: 600; color: #E86A33; }
    .features { display: flex; flex-direction: column; gap: 12px; margin-bottom: 40px; text-align: left; }
    .feature {
      display: flex; align-items: center; gap: 12px;
      background: #1A1D24; border: 1px solid rgba(255,255,255,0.05);
      border-radius: 12px; padding: 12px 16px;
    }
    .feature svg { flex-shrink: 0; }
    .feature span { font-size: 14px; font-weight: 500; color: #9BA3B0; }
    .download-btn { display: inline-block; cursor: pointer; text-decoration: none; transition: transform 0.15s ease; }
    .download-btn:hover { transform: scale(1.05); }
    .download-btn:active { transform: scale(0.95); }
    .download-btn img { height: 56px; width: auto; }
    .footer {
      display: flex; gap: 24px; justify-content: center; flex-wrap: wrap;
      padding: 24px;
      border-top: 1px solid rgba(255,255,255,0.05);
    }
    .footer a { color: #5C6370; text-decoration: none; font-size: 12px; font-weight: 500; transition: color 0.15s ease; }
    .footer a:hover { color: #E86A33; }
    .hidden-token { display: none; }
    @media (max-width: 640px) {
      h1 { font-size: 26px; }
    }
  </style>
</head>
<body>
  <div class="main">
    <div class="bg-dots"></div>
    <div class="content">
      <div class="app-icon-wrap">
        <img src="/app-icon.png" alt="Stacker" />
      </div>
      <h1>You're Invited to<br><span class="brand">Stacker</span></h1>
      <p class="subtitle">The poker session tracker for serious players</p>
      <div class="invite-card">
        <div class="invite-label">Invited by</div>
        <div class="inviter-name">${safeUsername}</div>
      </div>
      <div class="features">
        <div class="feature">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E86A33" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Track sessions &amp; stats</span>
        </div>
        <div class="feature">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E86A33" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>
          <span>Performance analytics</span>
        </div>
        <div class="feature">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E86A33" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>
          <span>Compete with friends</span>
        </div>
      </div>
      <a href="#" class="download-btn" aria-label="Download on the App Store">
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
      </a>
    </div>
  </div>
  <nav class="footer">
    <a href="https://stackpokertracker.com/support">Support</a>
    <a href="https://stackpokertracker.com/privacy">Privacy</a>
    <a href="https://stackpokertracker.com/terms">Terms</a>
  </nav>
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
  <meta name="theme-color" content="#0F1114">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { height: 100%; background-color: #0F1114; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      background-color: #0F1114;
      min-height: 100vh; min-height: 100dvh;
      display: flex; flex-direction: column;
      color: #F0F2F5; -webkit-font-smoothing: antialiased; overflow-x: hidden;
    }
    .main {
      flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
      padding: 64px 24px;
      padding-top: max(64px, env(safe-area-inset-top));
      padding-bottom: max(64px, env(safe-area-inset-bottom));
      background-image: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,106,51,0.15) 0%, transparent 60%);
    }
    .bg-dots {
      position: absolute; inset: 0; opacity: 0.03;
      background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
      background-size: 24px 24px;
    }
    .content { position: relative; max-width: 384px; width: 100%; text-align: center; }
    .app-icon-wrap {
      display: inline-block; margin-bottom: 24px; padding: 4px;
      background: #1A1D24; border-radius: 24px;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.05);
    }
    .app-icon-wrap img { width: 48px; height: 48px; border-radius: 14px; display: block; }
    h1 { font-size: 30px; font-weight: 700; color: #F0F2F5; margin-bottom: 8px; letter-spacing: -0.5px; }
    .subtitle { font-size: 16px; color: #9BA3B0; margin-bottom: 32px; line-height: 1.6; }
    .home-link { display: inline-block; padding: 14px 32px; background: #E86A33; color: #fff; font-size: 16px; font-weight: 600; border-radius: 12px; text-decoration: none; transition: background 0.15s ease; }
    .home-link:hover { background: #D45A25; }
    .footer {
      display: flex; gap: 24px; justify-content: center; flex-wrap: wrap;
      padding: 24px;
      border-top: 1px solid rgba(255,255,255,0.05);
    }
    .footer a { color: #5C6370; text-decoration: none; font-size: 12px; font-weight: 500; transition: color 0.15s ease; }
    .footer a:hover { color: #E86A33; }
    @media (max-width: 640px) { h1 { font-size: 24px; } }
  </style>
</head>
<body>
  <div class="main">
    <div class="bg-dots"></div>
    <div class="content">
      <div class="app-icon-wrap">
        <img src="/app-icon.png" alt="Stacker" />
      </div>
      <h1>Invite Not Found</h1>
      <p class="subtitle">This invite link is invalid or the user doesn't exist. Ask your friend for a new link.</p>
      <a href="https://stackpokertracker.com" class="home-link">Go to Stacker</a>
    </div>
  </div>
  <nav class="footer">
    <a href="https://stackpokertracker.com/support">Support</a>
    <a href="https://stackpokertracker.com/privacy">Privacy</a>
    <a href="https://stackpokertracker.com/terms">Terms</a>
  </nav>
</body>
</html>`;
};
