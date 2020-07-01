import React from 'react';
import { parseSong, renderSong } from 'chord-mark';

import 'chord-mark/lib/chordMark.css';

const ChordMarkBlock = ({ children, options = {} }) => {
	const parsed = parseSong(children);
	const rendered = renderSong(parsed, options);

	return (
		<div className={'mdx-chordMarkBlock_Container'}>
			<div className={'mdx-chordMarkBlock_Source'}>
				<pre>{children}</pre>
			</div>
			<div
				className={'mdx-chordMarkBlock_Rendered'}
				dangerouslySetInnerHTML={{ __html: rendered }}
			></div>
		</div>
	);
};

export default ChordMarkBlock;
