const rust = import("./pkg/wasm_example");

rust.then(m => m.run()).catch(console.error);
rust.then(m => m.greet("World!")).catch(console.error);
