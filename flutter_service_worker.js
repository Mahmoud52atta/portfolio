'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/config": "f0325b0cb37c0620d2d5f016a3d6b421",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e5e31cb2bb516fa69919f0932847795f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac2cd2d988472011aeeb03a3ec9ddb24",
".git/logs/refs/heads/gh-pages": "ac2cd2d988472011aeeb03a3ec9ddb24",
".git/logs/refs/remotes/origin/gh-pages": "963283b74438bc62f29067b77162a404",
".git/objects/02/842d69ee38d5b7e4ba6ed21c124ea4dafe04e7": "dbf4a59cd13dddffb50f62aecdfd70e9",
".git/objects/05/7377d56e884c83b85e281a62c62e27032d8a84": "8bacc9282dad25b9a3d1d8e168bf109d",
".git/objects/07/a1024dda1d215b9ee53bc9462fd2245c0f3ca8": "753185a041c342aefe14488563f6cadb",
".git/objects/08/f996b38b79f691d4c798a5136896b437a4b9b2": "1db2ae020b6c6e31fd8e8cab52d5ce18",
".git/objects/0f/62a3e0d0c5d7910181af8b189ac25db71eb75a": "bf1e736085e77fe6f0b92536fe7aa215",
".git/objects/19/e1f62cd3ba28daf713dcb0a5b6375787a695b5": "f34ea9e892c3ec505d11d0962f66222e",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/58fed619c9338a4af68b3f6140a910d48774d1": "7d368ab2d3ab64bc94ac146c5cbb4d99",
".git/objects/26/0ad85dab809b19e14b3b72b2f9e56197e1d424": "806ae491a303211c1ef541903d2e8d73",
".git/objects/28/6b583725be3c2525b7c06d5f9f7f6b7024b8d9": "b625c75915e4f69f5f2c069215249b5b",
".git/objects/2a/1a636c4fbd4f41dcc841512521f14a3bfe397e": "5796c84b0a4e74677a9a59a5e6be3e13",
".git/objects/2d/c6dc5ae50e65d1f44bbb6bf8b86b407f61358c": "7dcec998a848b8780d8878c2e95ba4f4",
".git/objects/31/0673045a44bc73df354dc7e1b7db9271788c72": "c3fdf7e849b67b13f3c45430e2607002",
".git/objects/36/de6a59faf9362ef5122187d232750683224990": "6fafd6c814db00aed2bd666863891c18",
".git/objects/3b/afb6f2e55962b802881dfd64ad821e2f5f1368": "b9a3380535731716470d76383cc014d6",
".git/objects/44/4809373bfe394b490f1c90353fd4bae8a37e96": "ce432ab5e08bcda22b30e495789981d7",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/af96906b6c2d2abbee0ef37e58ebea62820731": "289ed54f2a81d6359aa6b0620f145fd3",
".git/objects/56/cdb151ed993776a840905232e202710d5a2293": "4534f25de20033ab9b039fd2af9e7a9e",
".git/objects/5f/9822a7d5f6045c2ccebaeb92692c09077288d7": "d4be99ba28ba55c955853566af77f297",
".git/objects/60/68fc5b96a9678248604ce26f545475a0ca70ef": "36d038a64c2423e5c85d5914f758a7a8",
".git/objects/62/94a74ce48059ead180f0e6dc1f96445b53bf1b": "91d98f7deb5d89bf8e05c245c0ddca28",
".git/objects/63/ab477807dc749d05ff98c01592b0524252cc53": "7a7b721fbcc0783e46e0ddea522f6576",
".git/objects/65/67b2b99f1f05f3c78470e711543ce575f65b4d": "efe7eadebd0651d1781eb6ba26838bd5",
".git/objects/65/d128d2610bde8d820a6f4c652cb6b7f439aaa7": "54d409edf40f298e39496b893b1979f3",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/3c5a1b0616bdc4671036bbac94353885be1d95": "674166d86ff4ab315f13f9a460de954a",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/59c11390624d00c5702c474ca8dcfb7269d58c": "cba2e9f6eb5d3ff6ffa455b469b3e655",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7d0f711ea9d8ac19486518e32b3a3da4972abd": "815b90d381efdc17ce4f99630f3b3cb9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/9e3f5d72e8c6a7d7b964232f91181cefba2503": "ae5e347188f6a2973ae17621d34e340d",
".git/objects/95/ba808421e98e8f6321537522d366716ac0b48e": "aba05cc5012980c09959cf2b7140bacf",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/ae/ef585882d931ba49757a42c234d122d277e296": "ed4c3839a24ad7c7bc51170f066cc186",
".git/objects/b4/d4deb3a0a635406d443186a1386cf774512f3d": "cc38697595547339b47d60be09ab39d8",
".git/objects/b6/cb6f640f47449d9b4305c4ba9f6bd8c5fdb782": "0779227dcaa0e4f8473fe061b61cbc29",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c10d5c810dbea8b578bb97b255518e7b61f5d2": "20785cbde539a6f5cd228aa4cb7b2e70",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/f6df6e0a953f6e35796e11669714291330bbd4": "d9b9adba17c03c7eafa22eb81b05f66d",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/a89bc35f12fcc348cbb023fb171aef47e40714": "aeea11ac22b103b696a899b9e6367160",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/c4b20fc73ce7ca04ebb39eb9c14dd96e9b2d9f": "33884d702cac2714c4a58a7499f3d749",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/ab9c591b0e78173690130c6fdf7a437f895314": "8ebd6a9044ee96aa89c824d4395cda84",
".git/refs/heads/gh-pages": "84cab80a78ae84518555dd4f7495b5b7",
".git/refs/remotes/origin/gh-pages": "84cab80a78ae84518555dd4f7495b5b7",
"assets/AssetManifest.bin": "7e0af0b7d0a5e8ed19b97500fc1644a4",
"assets/AssetManifest.bin.json": "8df8e031bdf22f086c5f42d96919cb15",
"assets/AssetManifest.json": "d74c19648780444f1f4a99784eeb99cc",
"assets/assets/images/attendance.png": "990b9a792967dfa0c33662586763c729",
"assets/assets/images/facebook.png": "ed1f03a3b1bc4ab0c5b3c1bde86a2ae5",
"assets/assets/images/furit.png": "9f551b15c60b4670106944524d98528e",
"assets/assets/images/insta.png": "93e34e934f8713d049629fea243719fc",
"assets/assets/images/kimet.png": "b3414377beb689c2a09ac484e528d12f",
"assets/assets/images/new.png": "cbb8e349f46535cb6c0b0ba2f56e86c5",
"assets/assets/images/profile_image.png": "db4d4b2fc6a18afb64e6bf1e5895217e",
"assets/assets/images/project_arrow.png": "5a87d56be1c0abaf3dfeb0953903f40f",
"assets/assets/images/project_arrow_2.png": "34dc0cdb79010ebaff0c3598c4b307af",
"assets/assets/images/tasky.png": "eb77b61945ea3b3c891cac6e7409f5f6",
"assets/assets/images/twiter.png": "332a7e74436febd1147e99c5d41301d8",
"assets/assets/images/what_i_do_arrow.png": "afba5ddd130ef3ad9c46e24f344a4c4f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "42f6c8fc5a1a06f1421bf24c4d8fb8e7",
"assets/NOTICES": "9fca09495b83536862175a9bd4482679",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "efd89e29ed9deadbb13856270f596469",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"emailjs_form.js": "80f20d2c31f6c5537f083aa7518fd55f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2dceb4bcec72c7c5fd57775c84062345",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c56f9e1d8e7a81d36be81e45231096ba",
"/": "c56f9e1d8e7a81d36be81e45231096ba",
"main.dart.js": "62d057126de4f9f8edd851317c247910",
"manifest.json": "afbad595473125d9919e55440bb9d114",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
