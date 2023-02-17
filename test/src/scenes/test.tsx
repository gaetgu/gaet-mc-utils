import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { waitFor } from '@motion-canvas/core/lib/flow';
import { CodeBlock } from "@motion-canvas/2d/lib/components/CodeBlock";
import { Black } from '@components/Black';

export default makeScene2D(function*(view) {
  // Create your animations here
  view.add(
    <CodeBlock code='console.log(1); // Hi there!' theme={Black.Theme} />
  );
  yield* waitFor(5);
});
