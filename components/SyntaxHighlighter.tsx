"use client";

import Prism from "prismjs";
import {useEffect, ReactNode} from "react";

// theme
import "prismjs/themes/prism-okaidia.css";

// languages
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-solidity";

// tools
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

export default function SyntaxHighlighter(
    {children}: { children: ReactNode }
) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return <div>{children}</div>;
}