import { App } from '../src';
const app = new App({ pattern: 'example/**/*.@(wk).ts' });

// app.pipeline(a, b, helmet());
app.pipeline();

app.listen(4000);
