function thing({arg1, ...rest}) {
  console.log('thing', 'arg1', arg1, 'rest', rest);
}

thing({arg1: 'arg1', arg2: 'arg2', arg3: 'arg3'});
