export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","logos/adonis.png","logos/after-effects.svg","logos/android.png","logos/angular.png","logos/aswanth logo.png","logos/aswanth_logo.png","logos/aws.svg","logos/bootstrap.svg","logos/c.svg","logos/celery.svg","logos/cpp.svg","logos/csharp.svg","logos/css.svg","logos/dart.png","logos/deno.png","logos/django.svg","logos/docker.svg","logos/electron.png","logos/excel.svg","logos/express.png","logos/fastify.svg","logos/favicon.png","logos/figma.svg","logos/firebase.png","logos/flask.svg","logos/flutter.svg","logos/go.svg","logos/herke-ict-group.svg","logos/html.svg","logos/illustrator.svg","logos/indesign.svg","logos/java.png","logos/jest.png","logos/JNV.svg","logos/js.png","logos/kafka.svg","logos/kotlin.png","logos/kubernetes.svg","logos/mongodb.svg","logos/neo4j.svg","logos/nest.svg","logos/nginx.svg","logos/NID.svg","logos/no-img.svg","logos/node.png","logos/numpy.svg","logos/nuxt.png","logos/pandas.svg","logos/photoshop.svg","logos/postcss.svg","logos/postgres.png","logos/premiere.svg","logos/python.png","logos/quasar.svg","logos/rabbitmq.svg","logos/react.svg","logos/redis.svg","logos/rust.svg","logos/ruvy.svg","logos/sass.png","logos/scrapy.png","logos/selenium.svg","logos/solid.svg","logos/SPA.svg","logos/svelte.png","logos/tailwind.svg","logos/ts.png","logos/unocss.svg","logos/vite.png","logos/vitest.svg","logos/vue.png","logos/xamarin.svg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.1457351b.js","app":"_app/immutable/entry/app.a2580478.js","imports":["_app/immutable/entry/start.1457351b.js","_app/immutable/chunks/scheduler.8e784f9d.js","_app/immutable/chunks/singletons.ff7e6000.js","_app/immutable/chunks/index.3ec1ddd2.js","_app/immutable/chunks/paths.c300ce0b.js","_app/immutable/entry/app.a2580478.js","_app/immutable/chunks/scheduler.8e784f9d.js","_app/immutable/chunks/index.cca70a41.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/education",
				pattern: /^\/education\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/experience",
				pattern: /^\/experience\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/experience/[slug]",
				pattern: /^\/experience\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/skills/[slug]",
				pattern: /^\/skills\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
