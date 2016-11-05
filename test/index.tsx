import * as React from 'react';
import { about as libTest } from 'rw-lib/index';

export default function test(): JSX.Element {
  return <h1>About TEST, v 2. {`Libtest: ${libTest()}`}</h1>;
}
