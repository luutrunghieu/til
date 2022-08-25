function foo() {
  console.log('Foo')
}

function bar() {
  console.log('before foo')
  foo()
  console.log('bar')
}

function baz() {
  bar()
  console.log('baz')
}

baz()