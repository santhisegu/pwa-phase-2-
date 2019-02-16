var cache1="c1";
this.addEventListener("install",function(event){
	event.waitUntil(

		caches.open(cache1).then(cache=>{

			cache.addAll([
				"form.css",
				"resume.html",
				"resume.css",
				 "female.png",
				 "index.html",
				 "form.html"
				])
		})
		);
});

this.addEventListener('fetch',function(event){
	event.respondWith(
		caches.open(cache1).then(function(cache){

			return cache.match(event.request).then(function(res){
			return res||fetch(event.request).then(function(reqres){
				cache.put(event.request,reqres.clone());
			})
		})

		})
		)
})
	

