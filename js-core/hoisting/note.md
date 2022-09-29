var, let, cost

- Scope

* var: function scope
* let, const: block scope

- hoisting:

* var, let const all be hoisted
* but var will be initialized with undefined
* let, const not initialzied. and stay in TDZ (Temporal Dead Zone)
* if try to read let, cost in TDZ, we will get ReferenceError

- Redeclaration, reinitialization

* var: can be redeclared and reinitialized
* let: cant be redeclared but can reinitialized
* const: cant be redelcared and reinitialized
