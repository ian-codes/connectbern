export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","CNAME","favicon.png","global.css","groups/berndeutsch.webp","groups/connect-bern.webp","groups/events-and-friends.webp","groups/fire-community.webp","groups/israelis-jews-friends.webp","groups/it-gruppe.webp","groups/lets-bern.webp","groups/marktplatz.webp","groups/spielegruppe.webp","groups/telegramgruppen.webp","groups/whats-up-bern.webp","logo.svg","maybe.jpg","search.svg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".webp":"image/webp",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.0dabfd65.js","app":"_app/immutable/entry/app.fbeca619.js","imports":["_app/immutable/entry/start.0dabfd65.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/singletons.ae4706b7.js","_app/immutable/entry/app.fbeca619.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.619ddb4d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
