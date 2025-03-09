import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Thumbnail from "@/components/Thumbnail";
import {ReactNode} from "react";

export default function MdxLayout({children}: { children: ReactNode }) {
    return (
        <div className='mb-12'>
            <div className="container">
                <div className="max-w-4xl m-auto prose dark:prose-invert">
                    <Thumbnail/>
                    <SyntaxHighlighter>{children}</SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}