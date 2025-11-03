// Simple demo variable
let a = 1;
console.log(a);

/*
	JavaScript garbage collection — explained

	1) What GC does
		 - The JavaScript engine automatically reclaims memory that is no longer
			 reachable from the program. It frees objects (and the memory they use)
			 when there are no live references pointing to them.

	2) Reachability (the core concept)
		 - An object is considered "reachable" if it can be reached from roots
			 like the global object, currently executing functions' scopes, or
			 the DOM. If an object is not reachable by any path from those roots,
			 it's eligible for collection.

	3) Important details and common misconceptions
		 - You cannot force GC reliably from web JavaScript; engines decide when
			 to run collection (though some environments expose non-standard APIs).
		 - GC is not about "storage getting full" only — it reclaims unreachable
			 memory. Engines typically use algorithms such as mark-and-sweep.
		 - Primitives (numbers, strings, booleans) are handled differently than
			 objects, but the same reachability rules apply.

	4) Common sources of memory leaks
		 - Forgotten references: keeping references (in arrays, globals, closures)
			 prevents collection.
		 - DOM leaks: removing a node from the document but keeping references to
			 it (for example via event listeners or global variables) keeps it alive.
		 - Closures capturing large objects can keep them alive longer than
			 intended.

	5) Tools and patterns
		 - Use browser DevTools (Memory tab / heap snapshot) to find leaks.
		 - Use WeakMap/WeakSet for caches where you don't want the cache to keep
			 keys alive.
		 - Remove event listeners when you remove DOM nodes.

*/

// ---------------------------
// Examples
// ---------------------------

// Example 1 — simple object become eligible for collection
function simpleObjectExample() {
	let obj = { name: 'large', data: new Array(1e5).fill('*') };
	console.log('created obj', obj.name);

	// when we're done with it, remove the reference
	obj = null; // now eligible for garbage collection when the engine runs
}
simpleObjectExample();

// Example 2 — DOM nodes and event listeners (avoid leaks)
function domLeakExample() {
	const btn = document.createElement('button');
	btn.textContent = 'Click me';
	document.body.appendChild(btn);

	const handler = () => console.log('clicked');
	btn.addEventListener('click', handler);

	// Later: remove listener and node to allow GC
	btn.removeEventListener('click', handler);
	btn.remove(); // if no other references exist, the element can be collected
}
// Call the DOM example only when running in a browser environment
if (typeof document !== 'undefined') domLeakExample();

// Example 3 — WeakMap for caches (doesn't keep keys alive)
function weakMapExample() {
	const cache = new WeakMap();

	(function createScopedKey() {
		const key = { id: 1 };
		cache.set(key, 'cached value');
		// When this IIFE returns, `key` is no longer reachable from user code;
		// because the cache is a WeakMap, the entry does not prevent `key` being
		// garbage-collected.
	})();
}
weakMapExample();

/*
	Debugging tips
	- Use heap snapshots in DevTools to compare memory before/after actions.
	- Look for detached DOM trees, growing arrays, or unexpected retained
		objects between snapshots.
*/
