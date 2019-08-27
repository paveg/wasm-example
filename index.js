const rust = import("./pkg/wasm_example");

rust.then(m => m.greet("World!")).catch(console.error);
